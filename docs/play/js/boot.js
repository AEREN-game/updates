'use strict';
// Profile schema numbers are independent from the public product version.
window.AEREN_RELEASE={gameVersion:'1.0.0',saveSchemaVersion:3,contentVersion:'2026-10-13',buildId:'2026-10-13-rc2',channel:'release-candidate',development:false};
(function(){
 const keys=['aeren.save.v1','aeren.meta.v2','aeren.meta.v3','aeren.run.v2'],backup='aeren.backup.pre-1.0.0',journal='aeren.transaction.1',object=x=>x&&typeof x==='object'&&!Array.isArray(x);
 const capture=()=>Object.fromEntries(keys.map(k=>[k,localStorage.getItem(k)]));
 const restore=values=>{for(const key of keys)values[key]===null||values[key]===undefined?localStorage.removeItem(key):localStorage.setItem(key,values[key]);};
 function validate(values){for(const [key,version]of keys.map((k,i)=>[k,[1,2,3,2][i]])){if(values[key]===null||values[key]===undefined)continue;const d=JSON.parse(values[key]);if(!object(d)||d.version!==version)throw Error('Nieobsługiwany lub uszkodzony format zapisu.');
  if(key===keys[0]&&(!object(d.settings)||!Array.isArray(d.heroes)||!Number.isFinite(d.currency)||d.currency<0))throw Error('Nieprawidłowe dane profilu.');
  if(key===keys[1]&&(!object(d.mastery)||!object(d.campaign)))throw Error('Nieprawidłowe dane rozwoju.');
  if(key===keys[2]){if(!object(d.wallet)||Object.values(d.wallet).some(n=>!Number.isFinite(n)||n<0))throw Error('Nieprawidłowy portfel.');const e=d.endgame;if(e&&(!object(e)||e.runs!==undefined&&!Array.isArray(e.runs)||e.prep!==undefined&&(!object(e.prep)||!Array.isArray(e.prep.keepsakes))))throw Error('Nieprawidłowa historia wypraw.');}
  if(key===keys[3]&&(!object(d.player)||!object(d.world)||!Array.isArray(d.world.events)||!Array.isArray(d.world.fog)||!Array.isArray(d.weapons)||!d.weapons.length||!Number.isFinite(d.player.hp)||d.player.hp<=0||!Number.isFinite(d.time)||!['ilya','sol','niva','orren','vesper'].includes(d.hero)))throw Error('Nieprawidłowy zapis wyprawy.');
 }}
 function download(name,data){const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
 const recoveryTexts={
  pl:{title:'Nie można bezpiecznie wczytać zapisu',intro:'Twoje dane pozostają zachowane. Możesz spróbować ponownie, wyeksportować je lub przywrócić kopię.',retry:'Spróbuj ponownie',export:'Wyeksportuj zapis',restore:'Przywróć kopię',create:'Utwórz nowy profil',missing:'Brak prawidłowej kopii do przywrócenia.',confirm:'Utworzyć nowy profil? Obecne dane zostaną zachowane jako kopia do odzyskania.',storage:'Pamięć jest niedostępna. Najpierw wyeksportuj zapis.',language:'Język'},
  en:{title:'Your save cannot be loaded safely',intro:'Your data has been preserved. You can retry, export it or restore a backup.',retry:'Try again',export:'Export save',restore:'Restore backup',create:'Create new profile',missing:'No valid backup is available to restore.',confirm:'Create a new profile? Your current data will be kept as a recovery backup.',storage:'Storage is unavailable. Export your save first.',language:'Language'},
  de:{title:'Dein Spielstand kann nicht sicher geladen werden',intro:'Deine Daten bleiben erhalten. Versuche es erneut, exportiere sie oder stelle eine Sicherung wieder her.',retry:'Erneut versuchen',export:'Spielstand exportieren',restore:'Sicherung wiederherstellen',create:'Neues Profil erstellen',missing:'Keine gültige Sicherung zum Wiederherstellen vorhanden.',confirm:'Neues Profil erstellen? Deine bisherigen Daten werden als Sicherung aufbewahrt.',storage:'Der Speicher ist nicht verfügbar. Exportiere zuerst deinen Spielstand.',language:'Sprache'}
 };
 function recoveryLanguage(){for(const get of [()=>localStorage.getItem('aeren.recovery.language'),()=>JSON.parse(localStorage.getItem(keys[0]))?.settings?.language,()=>JSON.parse(JSON.parse(localStorage.getItem(backup))?.[keys[0]]||'null')?.settings?.language,()=>navigator.language.slice(0,2)])try{const lang=get();if(recoveryTexts[lang])return lang;}catch(e){}return 'pl';}
 function recovery(lang=recoveryLanguage()){
  const t=recoveryTexts[lang]||recoveryTexts.pl,overlay=document.getElementById('overlay');document.documentElement.lang=lang;
  overlay.innerHTML='<main class="panel"><h1>'+t.title+'</h1><p>'+t.intro+'</p><label>'+t.language+' <select id="recovery-language">'+[['pl','Polski'],['en','English'],['de','Deutsch']].map(([id,name])=>'<option value="'+id+'" '+(id===lang?'selected':'')+'>'+name+'</option>').join('')+'</select></label><div class="actions">'+[['retry',t.retry],['export',t.export],['restore',t.restore],['new',t.create]].map(([id,label])=>'<button class="btn" id="'+id+'-save">'+label+'</button>').join('')+'</div><p id="save-message" role="status"></p></main>';
  document.getElementById('recovery-language').onchange=e=>{const value=e.target.value;try{localStorage.setItem('aeren.recovery.language',value);}catch(ignored){}recovery(value);};
  document.getElementById('retry-save').onclick=()=>location.reload();
  document.getElementById('export-save').onclick=()=>download('AEREN-recovery-save.json',capture());
  document.getElementById('restore-save').onclick=()=>{try{const saved=JSON.parse(localStorage.getItem(backup));validate(saved);if(!saved||!keys.some(k=>saved[k]))throw Error();localStorage.setItem('aeren.backup.recovery',JSON.stringify(capture()));restore(saved);localStorage.removeItem(journal);location.reload();}catch(e){document.getElementById('save-message').textContent=t.missing;}};
  document.getElementById('new-save').onclick=()=>{if(!confirm(t.confirm))return;try{localStorage.setItem('aeren.backup.recovery',JSON.stringify(capture()));for(const key of keys)localStorage.removeItem(key);localStorage.removeItem(journal);location.reload();}catch(e){document.getElementById('save-message').textContent=t.storage;}};
 }
 window.AEREN_STORAGE={keys,capture,restore,validate,download,recovery,journal};
 try{
  const pending=localStorage.getItem(journal);if(pending){const data=JSON.parse(pending);validate(data);restore(data);localStorage.removeItem(journal);}
  const original=capture();validate(original);if(keys.some(k=>original[k]!==null)&&!localStorage.getItem(backup))localStorage.setItem(backup,JSON.stringify(original));
  const script=document.createElement('script');script.src=new URL('runtime.js',document.currentScript.src).href;script.onerror=recovery;document.body.append(script);
 }catch(e){recovery();}
})();
