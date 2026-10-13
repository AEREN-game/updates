
/* Module: js/data.js */
'use strict';
window.Aeren = {
};
(function(A){
  const rarity=[{
    id:'common',name:'Zwykłe',color:'#c9d7c1',weight:50
  },{
    id:'uncommon',name:'Niezwykłe',color:'#a0d895',weight:27
  },{
    id:'rare',name:'Rzadkie',color:'#86c8ec',weight:14
  },{
    id:'epic',name:'Epickie',color:'#c6a2ef',weight:7
  },{
    id:'legendary',name:'Legendarne',color:'#f2c879',weight:2
  }];
  const heroes=[ {
    id:'ilya',name:'Ilya',title:'Strażniczka świtu',icon:'❧',color:'#d6b966',weapon:'Łuk trzcinowy',element:'nature',hp:110,speed:225,damage:18,rate:2.8,skill:'roots',passive:'Co piąty strzał rozdziela się na trzy. +15% zdobywanego doświadczenia.',desc:'Ruchliwa łuczniczka, która zamienia korzenie w broń.',cost:0
  }, {
    id:'sol',name:'Sol',title:'Tkacz płomienia',icon:'✹',color:'#f8ad75',weapon:'Latarnia żaru',element:'fire',hp:85,speed:210,damage:25,rate:2.1,skill:'meteor',passive:'Płomienie trwają o 50% dłużej. +20% obszaru zaklęć.',desc:'Ogień, eksplozje i ryzykowna walka z bliska.',cost:0
  }, {
    id:'niva',name:'Niva',title:'Kartografka szronu',icon:'❄',color:'#a4e1f0',weapon:'Igły kryształu',element:'ice',hp:95,speed:235,damage:14,rate:3.4,skill:'blizzard',passive:'Dash zostawia lodowy ślad. +10% szansy na unik.',desc:'Kontroluj pole walki i znikaj pomiędzy pociskami.',cost:35
  }, {
    id:'orren',name:'Orren',title:'Wędrowny bastion',icon:'⬡',color:'#d9b987',weapon:'Młot echa',element:'stone',hp:160,speed:185,damage:35,rate:1.7,skill:'guard',passive:'18 pancerza. Trafienia młotem rozpryskują się na małym obszarze.',desc:'Wytrzymały obrońca z potężnymi uderzeniami.',cost:45
  }, {
    id:'vesper',name:'Vesper',title:'Szept między liśćmi',icon:'☽',color:'#c6a3e9',weapon:'Bliźniacze ciernie',element:'poison',hp:80,speed:250,damage:13,rate:4,skill:'blink',passive:'+15% siły trafienia krytycznego. Krytyki zatruwają; szansę na nie trzeba rozwinąć.',desc:'Precyzyjny zabójca budujący toksyczne kombinacje.',cost:55
  } ];
  const abilities=[];
  function add(id,name,icon,type,rarity,desc,effect){
    abilities.push({
      id,name,icon,type,rarity,desc,effect,max:type==='legendary'?1:5
    });
  }
  [ ['fire','Kula ognia','✹','fire','Co 2,7 s wystrzeliwujesz samoczynnie kulę ognia. Każdy poziom: +30% obrażeń. Poziom 3: eksplozja; 4: drugi pocisk; 5: meteor.'], ['ice','Odłamki zimy','❄','ice','Samoczynne lodowe igły spowalniają. Każdy poziom: +30% obrażeń; poziom 4: dodatkowe igły.'], ['lightning','Iskra burzy','ϟ','lightning','Błyskawica trafia najbliższy cel co 3 s. Każdy poziom: +30% obrażeń i większy zasięg łańcucha.'], ['poison','Zarodniki','♧','poison','Toksyczne pociski zatruwają na 4 s. Każdy poziom: +30% obrażeń; poziom 3: kałuża trucizny.'], ['orbit','Gwiezdne ostrza','✧','arcane','Ostrza krążą wokół bohatera. Każdy poziom dodaje ostrze i +20% obrażeń.'], ['familiar','Leśny towarzysz','❦','nature','Duchy strzelają do wrogów. Każdy poziom wzmacnia obrażenia; poziomy 3 i 5 dodają ducha.'], ['nova','Puls echa','◎','arcane','Automatyczna fala wokół ciebie co 5 s. Każdy poziom zwiększa siłę o 30% i promień.'], ['arrows','Deszcz piór','⋙','nature','Salwa przebijających strzał co 3 s. Każdy poziom zwiększa liczbę strzał i obrażenia.'], ['oil','Czarna rosa','◈','oil','Pociski oleju spowalniają i znaczą wrogów. Każdy poziom: większa kałuża i obrażenia.'], ['wet','Krople luny','≈','water','Wodne pociski nakładają wilgoć. Każdy poziom wzmacnia obrażenia i salwę.'] ].forEach((x,i)=>add(x[0],x[1],x[2],'auto',i<4?0:1,x[4],x[3]));
  [ ['meteor','Upadek słońca','☄','fire','Meteor w kierunku celowania. 90 obrażeń × poziom; zapowiada wybuch po 0,5 s.'], ['blizzard','Biała cisza','❄','ice','Lodowa burza wokół ciebie, 4 s. Spowalnia i zadaje 18 obrażeń × poziom co 0,5 s.'], ['thunder','Rozdarcie nieba','ϟ','lightning','Pioruny trafiają do 6 + poziom pobliskich wrogów. 50 obrażeń × poziom.'], ['venom','Ogród jadu','♧','poison','Toksyczny obszar na 6 s w kierunku celowania. 20 obrażeń × poziom na sekundę.'], ['roots','Uścisk korzeni','❧','nature','Korzenie unieruchamiają pobliskich wrogów na 2 s. 45 obrażeń × poziom.'], ['guard','Kamienna przysięga','⬡','stone','4 s ochrony, redukcja obrażeń o 65%. Leczy 8 HP × poziom.'], ['blink','Krok w mrok','☽','arcane','Teleport w kierunku celowania, krótka niewrażliwość i eksplozja 45 obrażeń × poziom.'], ['vortex','Oko wichru','⊙','wind','Wir zasysa przeciwników przez 5 s i zadaje 15 obrażeń × poziom co pół sekundy.'], ['wolves','Dziki zew','❦','nature','Przywołaj 2 + poziom duchów na 12 s. Każdy duch strzela niezależnie.'], ['drain','Szkarłatna nić','♡','blood','Zadaje 40 obrażeń × poziom w obszarze. Każdy trafiony cel przywraca 2 HP.'] ].forEach((x,i)=>add(x[0],x[1],x[2],'active',i<5?1:2,x[4],x[3]));
  [ ['power','Wola','✦','damage',.14,'+14% obrażeń za poziom.'],['haste','Rytm','»','rate',.12,'+12% szybkości ataku za poziom.'],['vitality','Żywy rdzeń','♡','maxHp',20,'+20 maksymalnego HP i leczenie 20 HP za poziom.'],['armor','Kora','⬡','armor',8,'+8 pancerza za poziom. Redukcja: pancerz / (pancerz + 80).'],['speed','Lekki krok','➶','speed',.07,'+7% szybkości ruchu za poziom.'],['crit','Ostre oko','◇','crit',.06,'+6 punktów procentowych szansy na krytyk za poziom.'],['cooldown','Skupienie','◷','cdr',.1,'+10% przyspieszenia odnowienia za poziom. Malejące korzyści.'],['area','Horyzont','◎','area',.12,'+12% promienia zaklęć za poziom.'],['multi','Rozszczepienie','⋙','count',1,'+1 pocisk podstawowej broni za poziom.'],['siphon','Głód życia','♥','steal',.015,'+1,5% kradzieży życia za poziom, do 12 HP na sekundę.'],['luck','Los','♢','luck',.15,'Większa szansa na wysoką rzadkość, złoto i rzadki łup. +15% za poziom.'],['wisdom','Pamięć','✥','xp',.15,'+15% doświadczenia za poziom.'],['magnet','Przyciąganie','⊙','magnet',35,'+35 zasięgu zbierania za poziom.'],['velocity','Wektor','↗','velocity',.15,'+15% szybkości pocisków za poziom.'],['dodge','Miraż','∿','dodge',.05,'+5 punktów procentowych szansy na unik za poziom. Limit 45%.'] ].forEach(x=>add(x[0],x[1],x[2],'passive',x[0]==='multi'?2:0,x[5],{
    stat:x[3],value:x[4]
  }));
  [ ['phoenix','Serce feniksa','✹','Jednorazowe wskrzeszenie z 60% HP. Po odrodzeniu spal pobliskich wrogów.'], ['supernova','Supernowa','☼','Każda śmierć wroga powoduje eksplozję. Łańcuch eksplozji ma ograniczoną głębokość.'], ['prism','Pryzmat świata','◈','Podstawowe pociski cyklicznie używają ognia, lodu, piorunów i trucizny.'], ['chronos','Zatrzymany świt','◷','Co 12 s spowalniasz wszystkich wrogów na 3 s.'], ['titan','Dziedzictwo tytana','⬡','+80 maksymalnego HP i +30% obszaru, ale -12% szybkości.'], ['reaper','Ostatni liść','☽','Krytyki egzekwują zwykłych wrogów poniżej 20% HP.'], ['worldtree','Nasiono świata','❦','Co 8 s uzdrawiasz 5% maksymalnego HP i uwalniasz falę natury.'], ['infinity','Bez końca','∞','Co trzeci podstawowy atak ignoruje odnowienie następnej aktywnej umiejętności.'], ['comet','Kometa','☄','Dash wywołuje potężną eksplozję na końcu i jest odnawiany o 35% szybciej.'], ['crown','Korona burz','♛','Co 4 s automatycznie uderzasz piorunami w pięciu pobliskich wrogów.'] ].forEach(x=>add(x[0],x[1],x[2],'legendary',4,x[3],x[0]));
  const synergies=[ ['inferno','Inferno','fire','oil','Podpaleni, naoliwieni wrogowie otrzymują podwójny DoT.'],['storm','Burza łańcuchowa','lightning','wet','Pioruny na mokrych celach przeskakują na 4 dodatkowych wrogów.'],['toxic','Toksyczny rozkwit','poison','crit','Krytyki na zatrutych celach uwalniają chmurę jadu.'],['frost','Szronowy szlak','ice','speed','Dash zostawia pas lodowej burzy.'],['steam','Wrząca mgła','fire','wet','Woda na płonącym celu powoduje parową eksplozję.'],['shatter','Roztrzaskanie','ice','crit','Krytyki na spowolnionych celach zadają +60% obrażeń.'],['plague','Zielona plaga','poison','familiar','Pociski towarzyszy zatruwają.'],['solar','Orbita słońca','fire','orbit','Krążące ostrza podpalają.'],['tesla','Cewka Tesli','lightning','orbit','Krążące ostrza uwalniają pioruny.'],['harvest','Żniwa','siphon','nova','Puls echa leczy 2 HP za trafiony cel.'],['forest','Przebudzenie lasu','roots','familiar','Uścisk korzeni przywołuje dwóch duchów.'],['gravity','Horyzont zdarzeń','vortex','area','Wir ma podwojoną siłę przyciągania i dłuższy czas trwania.'],['blood','Szkarłatna gwiazda','drain','crit','Szkarłatna nić zawsze trafia krytycznie.'],['thorns','Żelazny ogród','armor','poison','Otrzymane obrażenia zatruwają pobliskich wrogów.'],['echo','Echo nieskończoności','arrows','multi','Deszcz piór odbija dodatkową salwę w przeciwnym kierunku.'],['eclipse','Zaćmienie','blink','orbit','Teleport odnawia dash i uwalnia 8 pocisków.',true],['permafrost','Wieczna zima','blizzard','wet','Lodowa burza unieruchamia mokrych wrogów.',true],['phoenixwing','Skrzydła feniksa','meteor','siphon','Meteor leczy 3 HP za każdy trafiony cel.',true] ].map(x=>({
    id:x[0],name:x[1],a:x[2],b:x[3],desc:x[4],hidden:!!x[5]
  }));
  const relics=[ ['glass','Szklane serce','♡','+100% obrażeń; -50% maksymalnego HP.',{
    damage:1,maxHp:-.5
  },3],['anchor','Kotwica','⚓','+40 pancerza; -18% szybkości.',{
    armor:40,speed:-.18
  },2],['feather','Puste pióro','❧','+30% szybkości; -20% HP.',{
    speed:.3,maxHp:-.2
  },1],['fan','Wachlarz','⋙','+3 pociski; -20% obrażeń.',{
    count:3,damage:-.2
  },2],['hourglass','Piasek nocy','◷','+60% odnowienia; -20% siły ataku.',{
    cdr:.6,damage:-.2
  },3],['fang','Wilczy kieł','♢','+6% kradzieży życia; -25% HP.',{
    steal:.06,maxHp:-.25
  },2],['lens','Soczewka','◇','+20% krytyka; +50% obrażeń krytycznych; -15% szybkości ataku.',{
    crit:.2,critDamage:.5,rate:-.15
  },3],['seed','Stare nasiono','❦','+60 HP; -10% szybkości.',{
    hpFlat:60,speed:-.1
  },1],['bell','Cichy dzwon','♧','+60% obszaru; -15% obrażeń.',{
    area:.6,damage:-.15
  },2],['coin','Moneta wygnańca','◉','+80% złota; +15% obrażeń otrzymywanych.',{
    gold:.8,incoming:.15
  },1],['mask','Maska szczęścia','☽','+75% szczęścia; -20% doświadczenia.',{
    luck:.75,xp:-.2
  },2],['scroll','Atlas','✥','+50% doświadczenia; -30% złota.',{
    xp:.5,gold:-.3
  },1],['boot','Buty komety','➶','Dash odnawia się dwa razy szybciej; -20% pancerza.',{
    dash:.5,armor:-10
  },3],['mirror','Krzywe lustro','◈','+18% uniku; -20% HP.',{
    dodge:.18,maxHp:-.2
  },2],['magnetite','Magnetyt','⊙','+180 przyciągania łupu; -8% szybkości.',{
    magnet:180,speed:-.08
  },1],['quiver','Nieskończony kołczan','»','+45% szybkości ataku; -15% obrażeń.',{
    rate:.45,damage:-.15
  },2],['star','Złamana gwiazda','✧','+60% prędkości pocisków; +1 pocisk; -15% obszaru.',{
    velocity:.6,count:1,area:-.15
  },1],['oath','Przysięga','⬡','+25 pancerza; +30 HP; -10% obrażeń.',{
    armor:25,hpFlat:30,damage:-.1
  },2],['thorn','Korona cierni','♛','+40% obrażeń; wrogowie poruszają się o 15% szybciej.',{
    damage:.4,enemySpeed:.15
  },3],['moon','Łza księżyca','☾','+30% odnowienia; +3% kradzieży życia; -10% HP.',{
    cdr:.3,steal:.03,maxHp:-.1
  },4] ].map(x=>({
    id:x[0],name:x[1],icon:x[2],desc:x[3],mods:x[4],rarity:x[5]
  }));
  const enemyTypes=[ ['sprout','Zbłąkany pęd','chase',26,92,9,12,'#abc874'],['mote','Miodowy błysk','swarm',15,145,6,8,'#edcf7a'],['boar','Rogaty mech','charge',65,70,16,19,'#7eae88'],['spitter','Ostropest','ranged',36,67,10,15,'#e9ab95'], ['wolf','Wilk cienia','orbit',40,128,12,14,'#99b6b5'],['witch','Szeptucha','summon',70,57,12,17,'#c19acb'],['mushroom','Śniący grzyb','denial',55,45,13,18,'#da95ad'],['wisp','Błędny ognik','teleport',27,85,11,11,'#a1ead1'], ['sentinel','Strażnik ruin','shield',105,65,18,19,'#d6c8a1'],['archer','Pusty łucznik','sniper',44,60,20,14,'#deac7c'],['priest','Kamienny kapłan','heal',62,52,9,17,'#ded6ac'],['beetle','Miedziany żuk','charge',65,82,15,17,'#d99d71'], ['bat','Szklane skrzydło','swarm',26,163,9,10,'#c4adf0'],['crystal','Pryzmatyczny wartownik','ranged',70,52,16,18,'#9dcced'],['echo','Pęknięte echo','teleport',52,100,15,14,'#cec0f1'],['golem','Geoda','shield',150,46,24,24,'#a5a5d2'], ['ember','Głodny żar','kamikaze',38,130,22,11,'#ffb374'],['ash','Popielny włóczęga','denial',85,70,19,17,'#db9487'],['hound','Pies lawy','charge',95,125,22,19,'#dd9972'],['warlock','Żarownik','summon',95,58,20,18,'#e6b88f'], ['seraph','Puste skrzydła','orbit',100,122,21,17,'#eee5b2'],['oracle','Wyrocznia','sniper',90,63,26,18,'#b6e4d8'],['choir','Złamany chór','heal',105,75,14,17,'#debadb'],['sun','Odłamek słońca','kamikaze',65,142,28,14,'#f6db8b'] ].map((x,i)=>({
    id:x[0],name:x[1],ai:x[2],hp:x[3],speed:x[4],damage:x[5],r:x[6],color:x[7],biome:Math.floor(i/4)
  }));
  const biomes=[ {
    name:'Szmaragdowe równiny',en:'Emerald Plains',subtitle:'Tam, gdzie pamięta ziemia',ground:'#6c9864',light:'#a8ba72',dark:'#416e53',water:'#65a7a1',accent:'#f1d693',hazard:'thorns',mechanic:'Ciernie na moment budzą się co kilka sekund. Złote łąki leczą przy fontannach.',boss:'Matka korzeni',bossIcon:'❧',reward:'worldtree'
  }, {
    name:'Szepczący las',en:'Whispering Forest',subtitle:'Nie każdy szept należy do wiatru',ground:'#3f795f',light:'#70976b',dark:'#285649',water:'#4d9893',accent:'#d4e7a0',hazard:'spores',mechanic:'Zarodniki zatruwają. Duchy i przywoływacze ukrywają się w koronach drzew.',boss:'Jeleń bez imienia',bossIcon:'♧',reward:'reaper'
  }, {
    name:'Zapomniane ruiny',en:'Forgotten Ruins',subtitle:'Kamień nosi ślady dawnych przysiąg',ground:'#9a9c78',light:'#c5b98c',dark:'#737e64',water:'#78a8a1',accent:'#f6d49a',hazard:'rune',mechanic:'Runy wybuchają rytmicznie. Ściany świątyń zmuszają do wyboru przejść.',boss:'Strażnik dziewięciu bram',bossIcon:'⬡',reward:'titan'
  }, {
    name:'Kryształowe groty',en:'Crystal Caverns',subtitle:'Światło, które nie zna słońca',ground:'#687f96',light:'#92a8b4',dark:'#475e7a',water:'#8ec8d5',accent:'#d4b8f2',hazard:'frost',mechanic:'Lodowe strefy ograniczają ruch. Kryształy zasłaniają linie ostrzału.',boss:'Serce pryzmatu',bossIcon:'◈',reward:'prism'
  }, {
    name:'Popielne ziemie',en:'Ashlands',subtitle:'Ostatni oddech dawnego ognia',ground:'#9b7160',light:'#b89271',dark:'#6e5553',water:'#d19d70',accent:'#ffc797',hazard:'lava',mechanic:'Szczeliny lawy pulsują ogniem. Zabici wybuchowi wrogowie zostawiają ostrzeżenia.',boss:'Wędrowiec z popiołu',bossIcon:'☄',reward:'phoenix'
  }, {
    name:'Niebiańska świątynia',en:'Celestial Temple',subtitle:'Tutaj zaczyna się kolejny świt',ground:'#80a49a',light:'#bdc8a5',dark:'#597f7c',water:'#a3d1c4',accent:'#fff0ba',hazard:'light',mechanic:'Kolumny światła eksplodują po ostrzeżeniu. Ostatni strażnik łączy poznane mechaniki.',boss:'Zaćmiony ogrodnik',bossIcon:'☼',reward:'crown'
  } ];
  const elites=['Płonący','Mroźny','Wampiryczny','Wybuchowy','Osłonięty','Szybki','Olbrzymi','Podwójny','Burzowy','Toksyczny'];
  A.Data={
    rarity,heroes,abilities,synergies,relics,enemyTypes,biomes,elites,byId:Object.fromEntries(abilities.map(x=>[x.id,x]))
  };
})(window.Aeren);

;

/* Module: js/data-v2.js */
'use strict';
(function(A){
  const D=A.Data;
  D.version='1.0.0';
  D.modes={
    easy:{name:'Łatwy',hp:.85,damage:.8,spawn:.8,speed:.94,xp:.85,gold:.8,loot:.85,reward:.8},
    normal:{name:'Średni',hp:1.15,damage:1,spawn:1,speed:1,xp:1,gold:1,loot:1,reward:1},
    hard:{name:'Trudny',hp:1.5,damage:1.25,spawn:1.2,speed:1.08,xp:1.12,gold:1.25,loot:1.18,reward:1.3}
  };
  D.missions=['Przebudzenie otchłani','Zerwane pieczęcie','Korona popiołów','Wojna bez słońca','Szepty wieczności','Ostatni krąg'];
  D.rarity=[['common','Zwykły','#c9d7c1',58],['rare','Rzadki','#86c8ec',28],['epic','Epicki','#c6a2ef',10],['legendary','Legendarny','#f2c879',3.5],['mythic','Mityczny','#fc98c7',.5]].map(x=>({id:x[0],name:x[1],color:x[2],weight:x[3]}));
  const terrain=[
    ['Podziemia Żelaznej Pieczęci','Dungeons','dungeon','#343841','#565a60','#242831','#607576','#d6b486','rune','Kustosz Krypt','⬡','titan','Kolumny, komnaty i pułapki runiczne.'],
    ['Lodowe Pustkowia','Frozen Wastes','ice','#a5c9d9','#d5e8ed','#6e9aaf','#68b6dc','#d1f8ff','frost','Serce Zamieci','❄','prism','Zamarznięte jeziora i kryształy. Pola szronu spowalniają.'],
    ['Prastary Las','Ancient Forest','forest','#416c48','#7ba15d','#284b3b','#569182','#d6e7a1','spores','Matka Korzeni','❧','worldtree','Gęsty las, paprocie, zarodniki i leśne drapieżniki.'],
    ['Ogniste Rozpadliny','Firelands','fire','#5f4038','#957153','#352b31','#ef8d47','#ffd193','lava','Kowal Żaru','☄','phoenix','Czarne skały, kratery i pulsujące strumienie lawy.'],
    ['Wąwóz Umarłych','Dead Ravine','dead','#514760','#89708e','#302b41','#758195','#c5aedf','rune','Król Bez Grobu','☽','reaper','Groby, kości, wąwozy i nekromanci wskrzeszający hordy.'],
    ['Szósty Krąg Piekła','Hell','hell','#46282f','#81473b','#241e2c','#e25737','#ffb782','lava','Arcyksiążę Otchłani','♛','crown','Obsydianowe iglice, demoniczne bramy i deszcz ognia.']
  ];
  D.biomes=terrain.map((x,i)=>({name:x[0],en:x[1],theme:x[2],ground:x[3],light:x[4],dark:x[5],water:x[6],accent:x[7],hazard:x[8],boss:x[9],bossIcon:x[10],reward:x[11],mechanic:x[12],subtitle:D.missions[i],art:[2,3,0,4,1,5][i]}));
  D.ultimates={
    ilya:{name:'Serce Gaju',icon:'❦',desc:'Przywołuje trzy fale korzeni i duchów strzegących obszaru. 70 s odnowienia.',cd:70},
    sol:{name:'Kataklizm',icon:'☄',desc:'Siedem zapowiedzianych meteorów rozbija obszar wokół celu. 80 s odnowienia.',cd:80},
    niva:{name:'Absolutne Zero',icon:'❄',desc:'Zamraża zwykłych wrogów i uwalnia trzy pierścienie lodowych włóczni. 75 s odnowienia.',cd:75},
    orren:{name:'Gniew Tytana',icon:'⬡',desc:'Trzy fale uderzeniowe; 3 sekundy niewrażliwości. 85 s odnowienia.',cd:85},
    vesper:{name:'Taniec Śmierci',icon:'☽',desc:'Osiem widmowych cięć w pobliskie cele, 1,2 s niewrażliwości. 65 s odnowienia.',cd:65}
  };
  D.weapons=[
    ['bow','Łuk Świtu','➶','nature',1.0,1,0,'Strzały przebijają cel od poziomu 3.'],
    ['staff','Laska Żaru','✹','fire',1.2,1.35,0,'Płonące kule; eksplozja od poziomu 3.'],
    ['iceblade','Lodowe Igły','❄','ice',.7,.72,1,'Szybkie igły spowalniają przeciwników.'],
    ['hammer','Młot Przysięgi','⬡','stone',1.7,1.7,1,'Ciężki pocisk i mała fala uderzeniowa.'],
    ['daggers','Bliźniacze Ciernie','☽','poison',.7,.75,1,'Para krótkich zatrutych ostrzy.'],
    ['stormrod','Berło Burzy','ϟ','lightning',1.1,1.45,2,'Trafienie raz na sekundę wyzwala krótki łańcuch.'],
    ['scythe','Kosa Umarłych','☾','blood',1.3,1.5,2,'Szerokie, przebijające sierpy.'],
    ['orb','Pryzmat','◈','arcane',.8,1.15,2,'Trzy pociski rozchodzą się wachlarzem.'],
    ['crossbow','Kusza Runiczna','⋙','stone',1.8,1.8,1,'Potężny, szybki bełt przebijający wrogów.'],
    ['cinder','Serce Wulkanu','☄','fire',1.5,2,3,'Wolne, wybuchowe bomby.'],
    ['vines','Bicz Korzeni','❧','nature',.9,1.2,1,'Krótki wachlarz kolców.'],
    ['void','Igła Pustki','✧','arcane',1.35,1.15,4,'Wąski pocisk przeszywa pięciu przeciwników.']
  ].map(x=>({id:x[0],name:x[1],icon:x[2],element:x[3],power:x[4],interval:x[5],rarity:x[6],desc:x[7],max:5}));
  D.weaponById=Object.fromEntries(D.weapons.map(w=>[w.id,w]));
  D.heroes.forEach((h,i)=>{h.startWeapon=D.weapons[i].id;h.cost=i<2?0:180+(i-2)*80;h.ultimate=D.ultimates[h.id];});
  const passive={power:.07,haste:.07,vitality:12,armor:5,speed:.045,crit:.035,cooldown:.06,area:.07,multi:1,siphon:.003,luck:.08,wisdom:.07,magnet:22,velocity:.1,dodge:.025};
  for(const a of D.abilities){
    if(a.type==='passive'){a.effect.value=passive[a.id];a.max=a.id==='multi'?3:5;a.desc=`Każdy poziom: +${['maxHp','armor','count','magnet'].includes(a.effect.stat)?a.effect.value:Math.round(a.effect.value*1000)/10}${['maxHp','armor','count','magnet'].includes(a.effect.stat)?'':'%'} ${({damage:'obrażeń',rate:'szybkości ataku',maxHp:'HP',armor:'pancerza',speed:'ruchu',crit:'szansy krytyka',cdr:'tempa odnowienia',area:'obszaru',count:'pocisk',steal:'kradzieży życia',luck:'szczęścia',xp:'doświadczenia',magnet:'przyciągania',velocity:'prędkości pocisku',dodge:'uniku'})[a.effect.stat]}. Obowiązują limity statystyk.`;}
    if(a.type==='legendary')a.rarity=3;
    if(a.type==='auto')a.desc=a.desc.replaceAll('30%','18%').replaceAll('20%','12%');
    if(a.type==='active')a.desc=a.desc.replaceAll(' × poziom',' na pierwszym poziomie')+' Kolejne poziomy: +22% siły bazowej. Rzeczywisty cooldown ma dolny limit 6 s i nie resetuje się po zabójstwie.';
  }
  Object.assign(D.byId.infinity,{name:'Równy Puls',desc:'+12% szybkości ataku. Nie resetuje żadnych cooldownów.'});
  D.byId.worldtree.desc='Co 14 s leczysz 2% maksymalnego HP i uwalniasz falę natury.';
  D.byId.titan.desc='+45 maksymalnego HP i +20% obszaru; -12% ruchu.';
  D.byId.comet.desc='Dash wywołuje eksplozję. Odnawianie dashu szybsze o 15%.';
  D.byId.guard.desc='2,5 s ochrony, redukcja obrażeń o 45%. Leczy 5 HP na pierwszym poziomie; kolejne poziomy: +22% siły bazowej. Bazowe odnowienie: 20,25 s.';
  D.byId.thunder.desc='Pioruny trafiają do 7 pobliskich wrogów za 50 obrażeń na pierwszym poziomie. Kolejne poziomy: +22% obrażeń; piąty poziom: ósmy cel. Bazowe odnowienie: 12,15 s.';
  D.byId.wolves.desc='Przywołaj 3 duchy na 12 s; od drugiej rangi 4 duchy. Bazowe odnowienie: 24,3 s.';
  D.weaponById.stormrod.desc='Każda salwa wyzwala dodatkowy krótki łańcuch piorunów.';
  D.synergies.find(s=>s.id==='eclipse').desc='Teleport skraca odnowienie dashu o 1 s i uwalnia 8 pocisków.';
  D.byId.siphon.desc='Każdy poziom: +0,3% kradzieży życia. Łączne leczenie z trafień ograniczone do 2 HP/s.';
  const names=[
    ['Szczur krypt','Nietoperz jaskiń','Tarczownik','Kościany łucznik','Oślizgły rój','Strażnik łańcuchów','Skryba pułapek','Pękający kokon'],
    ['Śnieżny wilk','Lodowy nietoperz','Kryształowy golem','Strzelec szronu','Duch zamieci','Śnieżny szaman','Skoczek lodowy','Zimowa larwa'],
    ['Drapieżny pęd','Osa burzowa','Dzik cierni','Ostropest','Wilk paproci','Leśna wiedźma','Grzyb zarodnikowy','Pnącze sidlarza'],
    ['Żarowy pełzacz','Ognisty imp','Pies lawy','Miotacz żaru','Płomienny rycerz','Kowal popiołu','Bazaltowa artyleria','Wybuchowy żużel'],
    ['Kościotrup','Upiór','Widmowy rycerz','Łucznik grobów','Wampir','Nekromanta','Dzwonnik mogił','Pożeracz kości'],
    ['Pomniejszy demon','Skrzydlaty imp','Rogaty taran','Oko otchłani','Cień rozdarcia','Kapłan piekła','Demon oblężniczy','Rozszczepiony koszmar']
  ];
  const ais=[['chase','swarm','shield','sniper','orbit','charge','trapper','splitter'],['orbit','swarm','shield','ranged','teleport','heal','leaper','denial'],['chase','swarm','charge','ranged','orbit','summon','denial','trapper'],['chase','ranged','charge','sniper','shield','summon','artillery','kamikaze'],['chase','teleport','shield','sniper','siphon','summon','denial','leaper'],['chase','swarm','charge','ranged','teleport','heal','artillery','splitter']];
  const shapes=[['rat','bat','knight','skeleton','slime','beast','mage','beetle'],['wolf','bat','golem','crystal','ghost','mage','spider','slime'],['plant','wasp','beast','plant','wolf','mage','mushroom','spider'],['lizard','imp','wolf','mage','knight','golem','beetle','slime'],['skeleton','ghost','knight','skeleton','bat','mage','ghost','beast'],['demon','imp','beast','eye','ghost','mage','golem','demon']];
  D.enemyTypes=names.flatMap((row,b)=>row.map((name,i)=>({id:`b${b}e${i}`,name,ai:ais[b][i],shape:shapes[b][i],hp:[45,29,125,58,62,105,95,76][i]*(1+b*.1),speed:[113,158,78,81,132,74,89,105][i],damage:[13,9,23,21,15,18,23,18][i],r:[13,10,23,15,15,20,18,17][i],color:[D.biomes[b].accent,D.biomes[b].light,'#939da1','#c8bca8','#a3b5a3','#be94ba','#bb947e','#9aa181'][i],biome:b})));
  D.mastery=[
    ['vigor','Żywotność','♡','maxHp',8,8,35,null,'+8 maksymalnego HP'],['force','Trening broni','➶','damage',.025,8,40,null,'+2,5% obrażeń'],['flow','Praktyka zaklęć','✦','cdr',.025,6,45,null,'+2,5% tempa odnowienia'],
    ['shell','Hart ducha','⬡','armor',3,6,55,'vigor','+3 pancerza'],['edge','Precyzja','◇','crit',.012,6,60,'force','+1,2 pkt proc. krytyka'],['stride','Lekki krok','»','speed',.015,6,55,'flow','+1,5% ruchu'],
    ['study','Pamięć bitew','✥','xp',.025,6,65,'vigor','+2,5% doświadczenia'],['craft','Sztuka tworzenia','◈','luck',.04,6,75,'force','+4% szczęścia przy nagrodach'],['reach','Horyzont mocy','◎','area',.03,5,70,'flow','+3% obszaru'],
    ['resolve','Drugi oddech','♥','recovery',1,4,110,'shell','+1 HP leczenia między rundami'],['arsenal','Mistrzostwo arsenału','⋙','weaponPower',.025,5,110,'edge','+2,5% siły broni'],['awakening','Przebudzenie','♛','ultPower',.04,5,120,'reach','+4% siły mocy F'],
    ['tempo','Rytm oręża','»','rate',.02,5,65,'force','+2% szybkości ataku'],['retaliation','Riposta','✶','reflect',.04,5,85,'shell','Odbija 4% otrzymanych obrażeń w najbliższego wroga'],['leech','Przysięga krwi','♥','steal',.002,5,100,'edge','+0,2 pkt proc. kradzieży życia']
  ].map(x=>({id:x[0],name:x[1],icon:x[2],stat:x[3],value:x[4],max:x[5],cost:x[6],requires:x[7],desc:x[8]}));
  D.itemTemplates=[['power','Kamień Siły','✦','damage',.025],['tempo','Sprężyna','»','rate',.025],['shell','Płytka Pancerza','⬡','armor',2.5],['heart','Żywy Medalion','♡','hpFlat',6],['focus','Klepsydra','◷','cdr',.025],['eye','Oko Tropiciela','◇','crit',.012],['step','Nić Wiatru','➶','speed',.02],['reach','Soczewka','◎','area',.025],['blood','Kropla Rubinu','♥','steal',.0015],['star','Gwiezdny Kompas','✧','luck',.035]].map(x=>({id:x[0],name:x[1],icon:x[2],stat:x[3],value:x[4]}));
})(window.Aeren);


;

/* Module: js/core.js */
'use strict';
(function(A){
  const U={
    clamp:(v,a,b)=>Math.max(a,Math.min(b,v)),lerp:(a,b,t)=>a+(b-a)*t,dist:(a,b)=>Math.hypot(a.x-b.x,a.y-b.y),angle:(a,b)=>Math.atan2(b.y-a.y,b.x-a.x),rand:(a,b)=>a+Math.random()*(b-a),pick:a=>a[Math.floor(Math.random()*a.length)],time:t=>`${Math.floor(t/60).toString().padStart(2,'0')}:${Math.floor(t%60).toString().padStart(2,'0')}`,rng(seed){
      let s=seed>>>0;
      return()=>{
        s+=0x6D2B79F5;
        let t=s;
        t=Math.imul(t^t>>>15,t|1);
        t^=t+Math.imul(t^t>>>7,t|61);
        return((t^t>>>14)>>>0)/4294967296;
      }
    },circle(c,x,y,r,color){
      c.fillStyle=color;
      c.beginPath();
      c.arc(x,y,r,0,Math.PI*2);
      c.fill();
    },ellipse(c,x,y,rx,ry,color){
      c.fillStyle=color;
      c.beginPath();
      c.ellipse(x,y,rx,ry,0,0,Math.PI*2);
      c.fill();
    },poly(c,points,color,stroke){
      c.beginPath();
      points.forEach((p,i)=>i?c.lineTo(p[0],p[1]):c.moveTo(p[0],p[1]));
      c.closePath();
      c.fillStyle=color;
      c.fill();
      if(stroke){
        c.strokeStyle=stroke;
        c.lineWidth=2;
        c.stroke();
      }
    },weighted(list,weight){
      const sum=list.reduce((s,x)=>s+weight(x),0);
      let n=Math.random()*sum;
      for(const x of list){
        n-=weight(x);
        if(n<=0)return x;
      }
      return list[list.length-1];
    }
  };
  class Pool{
    constructor(max,create){
      this.max=max;
      this.create=create;
      this.free=[];
      this.active=[];
    }
    get(props){
      if(this.active.length>=this.max)return null;
      const p=this.free.pop()||this.create();
      Object.assign(p,props);
      this.active.push(p);
      return p;
    }
    remove(i){
      this.free.push(this.active[i]);
      this.active[i]=this.active[this.active.length-1];
      this.active.pop();
    }
    clear(){
      while(this.active.length)this.free.push(this.active.pop());
    }
  }
  class Grid{
    constructor(size=110){
      this.size=size;
      this.cells=new Map();
      this.spare=[];
    }
    clear(){
      for(const c of this.cells.values()){
        c.length=0;
        this.spare.push(c);
      }
      this.cells.clear();
    }
    insert(e){
      const key=(Math.floor(e.x/this.size)+100)*1000+Math.floor(e.y/this.size)+100;
      let c=this.cells.get(key);
      if(!c){
        c=this.spare.pop()||[];
        this.cells.set(key,c);
      }
      c.push(e);
    }
    query(x,y,r,fn){
      const s=this.size;
      for(let gx=Math.floor((x-r)/s);gx<=Math.floor((x+r)/s);gx++)for(let gy=Math.floor((y-r)/s);gy<=Math.floor((y+r)/s);gy++){
        const c=this.cells.get((gx+100)*1000+gy+100);
        if(c)for(let i=0;i<c.length;i++)if(c[i].hp>0)fn(c[i]);
      }
    }
  }
  const defaults=()=>({
    version:1,currency:0,heroes:['ilya','sol'],unlocks:[],synergies:[],settings:{
      scale:1,particles:1,shake:.6,numbers:true,master:.55,music:.25,sfx:.65,auto:true,autoAim:true
    },best:[],stats:{
      runs:0,kills:0,bosses:0,wins:0,time:0
    }
  });
  const Save={
    key:'aeren.save.v1',error:false,load(){
      let d=defaults();
      try{
        const raw=JSON.parse(localStorage.getItem(this.key)||'null');
        if(raw&&raw.version===1){
          d.currency=Math.max(0,Number(raw.currency)||0);
          for(const key of ['heroes','unlocks','synergies'])if(Array.isArray(raw[key]))d[key]=raw[key].filter(x=>typeof x==='string');
          d.heroes=[...new Set(['ilya','sol',...d.heroes])];
          if(Array.isArray(raw.best))d.best=raw.best.slice(0,10);
          Object.assign(d.stats,raw.stats||{
          });
          Object.assign(d.settings,raw.settings||{
          });
          for(const key of ['scale','particles','shake','master','music','sfx'])d.settings[key]=U.clamp(Number(d.settings[key])||0,key==='scale'?.5:0,1.5);
        }
      }
      catch(e){
        this.error=true;
      }
      return this.data=d;
    },write(){
      try{
        localStorage.setItem(this.key,JSON.stringify(this.data));
        return true;
      }
      catch(e){
        this.error=true;
        return false;
      }
    },reset(){
      this.data=defaults();
      this.write();
    },award(result){
      const d=this.data;
      d.currency+=result.reward;
      d.stats.runs++;
      d.stats.kills+=result.kills;
      d.stats.bosses+=result.bosses;
      d.stats.wins+=result.win?1:0;
      d.stats.time+=result.time;
      d.best.push(result);
      d.best.sort((a,b)=>b.score-a.score);
      d.best=d.best.slice(0,10);
      this.write();
    }
  };
  const Audio={
    ctx:null,musicTimer:0,note:0,init(){
      try{
        if(!this.ctx){
          this.ctx=new(window.AudioContext||window.webkitAudioContext)();
          this.master=this.ctx.createGain();
          this.master.connect(this.ctx.destination);
        }
        if(this.ctx.state==='suspended')this.ctx.resume().catch(()=>{
        });
      }
      catch(e){
        this.ctx=null;
      }
    },tone(freq,duration,volume,type='sine',end,channel='sfx'){
      if(!this.ctx)return;
      const s=Save.data.settings;
      if(s.master<=0||s[channel]<=0)return;
      const t=this.ctx.currentTime,o=this.ctx.createOscillator(),g=this.ctx.createGain();
      o.type=type;
      o.frequency.setValueAtTime(freq,t);
      if(end)o.frequency.exponentialRampToValueAtTime(Math.max(20,end),t+duration);
      g.gain.setValueAtTime(0,t);
      g.gain.linearRampToValueAtTime(volume*s.master*s[channel],t+.012);
      g.gain.exponentialRampToValueAtTime(.0001,t+duration);
      o.connect(g);
      g.connect(this.master);
      o.start(t);
      o.stop(t+duration+.02);
      o.onended=()=>{
        o.disconnect();
        g.disconnect();
      };
    },play(id){
      const sounds={
        attack:[420,.08,.05,'triangle',230],hit:[130,.07,.08,'triangle',70],crit:[950,.15,.11,'sine',390],death:[180,.12,.04,'sine',65],level:[520,.5,.17,'sine',1040],dash:[330,.19,.07,'sine',70],chest:[680,.5,.14,'triangle',1360],boss:[90,1.4,.15,'sawtooth',48],click:[650,.06,.08,'sine',500]
      };
      const a=sounds[id];
      if(a)this.tone(...a);
    },update(dt,biome){
      this.musicTimer-=dt;
      if(this.musicTimer<=0){
        this.musicTimer=1.1;
        const scales=[[196,220,261.6,293.7,392],[164.8,196,220,293.7,329.6],[146.8,174.6,220,261.6,293.7],[220,261.6,329.6,392,440],[130.8,155.6,196,233.1,261.6],[261.6,293.7,349.2,392,523.3]];
        const s=scales[biome%6];
        this.tone(s[(this.note*3+Math.floor(this.note/7))%s.length],2.6,.035,'sine',null,'music');
        if(this.note%4===0)this.tone(s[0]/2,4,.025,'sine',null,'music');
        this.note++;
      }
    }
  };
  class Input{
    constructor(canvas){
      this.keys=new Set();
      this.pressed=new Set();
      this.mouse={
        x:0,y:0,down:false,right:false,used:false
      };
      this.pad={
        x:0,y:0,aimX:0,aimY:0,attack:false
      };
      this.previousButtons=[];
      window.addEventListener('keydown',e=>{
        if(A.Controls.rows.some(r=>A.Controls.key(r[0])===e.code))e.preventDefault();
        if(!this.keys.has(e.code))this.pressed.add(e.code);
        this.keys.add(e.code);
      });
      window.addEventListener('keyup',e=>this.keys.delete(e.code));
      canvas.addEventListener('pointermove',e=>{
        this.mouse.x=e.clientX;
        this.mouse.y=e.clientY;
        this.mouse.used=true;
      });
      canvas.addEventListener('pointerdown',e=>{
        this.keys.add('Mouse'+e.button);this.pressed.add('Mouse'+e.button);if(e.button===0)this.mouse.down=true;
        if(e.button===2){
          this.mouse.right=true;
          this.pressed.add('MouseRight');
        }
        Audio.init();
      });
      window.addEventListener('pointerup',e=>{
        this.keys.delete('Mouse'+e.button);if(e.button===0)this.mouse.down=false;
        if(e.button===2)this.mouse.right=false;
      });
      canvas.addEventListener('contextmenu',e=>e.preventDefault());
      window.addEventListener('blur',()=>this.clear());
      document.addEventListener('visibilitychange',()=>{
        if(document.hidden)this.clear();
      });
    }
    clear(){
      this.keys.clear();
      this.pressed.clear();
      this.mouse.down=false;
      this.mouse.right=false;
    }
    tap(key){
      if(this.pressed.has(key)){
        this.pressed.delete(key);
        return true;
      }
      return false;
    }
    poll(){
      let p=null;
      try{
        p=Array.from(navigator.getGamepads?.()||[]).find(Boolean);
      }
      catch(e){
      }
      const d=this.pad;
      d.x=d.y=d.aimX=d.aimY=0;
      d.attack=false;
      if(!p)return;
      const dead=v=>Math.abs(v||0)>.18?v:0;
      d.x=dead(p.axes[0]);
      d.y=dead(p.axes[1]);
      d.aimX=dead(p.axes[2]);
      d.aimY=dead(p.axes[3]);
      d.attack=!!p.buttons[7]?.pressed;
      const map={
        0:'Pad:dash',1:'Pad:interact',2:'Pad:skill0',3:'Pad:skill1',4:'Pad:skill2',5:'Pad:ultimate',9:'Pad:pause'
      };
      for(const [b,k] of Object.entries(map)){
        if(p.buttons[b]?.pressed&&!this.previousButtons[b])this.pressed.add(k);
        this.previousButtons[b]=!!p.buttons[b]?.pressed;
      }
    }
  }
  A.U=U;
  A.Pool=Pool;
  A.Grid=Grid;
  A.Save=Save;
  A.Audio=Audio;
  A.Input=Input;
})(window.Aeren);

;

/* Module: js/save-v2.js */
'use strict';
(function(A){
  const S=A.Save,oldLoad=S.load.bind(S),oldReset=S.reset.bind(S);
  S.runKey='aeren.run.v2';
  S.load=function(){const d=oldLoad();d.mastery=d.mastery||{};d.campaign=d.campaign||{easy:1,normal:1,hard:1};
    try{const extra=JSON.parse(localStorage.getItem('aeren.meta.v2')||'null');if(extra&&extra.version===2){d.mastery=extra.mastery||{};d.campaign={easy:1,normal:1,hard:1,...extra.campaign};}}catch(e){this.error=true;}
    return d;
  };
  const oldWrite=S.write.bind(S);
  S.write=function(){const result=oldWrite();try{localStorage.setItem('aeren.meta.v2',JSON.stringify({version:2,mastery:this.data.mastery||{},campaign:this.data.campaign||{easy:1,normal:1,hard:1}}));return result;}catch(e){this.error=true;return false;}};
  S.readRun=function(){try{const r=JSON.parse(localStorage.getItem(this.runKey)||'null');if(r?.version===2&&r.player&&A.Data.heroes.some(h=>h.id===r.hero)&&A.Data.modes[r.modeId]&&r.biome>=0&&r.biome<6&&r.mission>=0&&r.mission<6&&Number.isFinite(r.time)&&r.player.hp>0)return r;}catch(e){this.error=true;}return null;};
  S.writeRun=function(snapshot){try{localStorage.setItem(this.runKey,JSON.stringify(snapshot));return true;}catch(e){this.error=true;return false;}};
  S.clearRun=function(){try{localStorage.removeItem(this.runKey);}catch(e){this.error=true;}};
  S.reset=function(){oldReset();this.data.mastery={};this.data.campaign={easy:1,normal:1,hard:1};this.clearRun();this.write();};
  A.installNavigationGuard=function(g){
    let guarded=false;
    const active=()=>g.player&&g.time>0&&!g.endSaved&&!['menu','heroes','meta','codex','results'].includes(g.state);
    const guard=()=>{if(!guarded){try{history.pushState({aeren:true},'',location.href);guarded=true;}catch(e){}}};guard();
    window.addEventListener('popstate',()=>{if(active()){g.saveRun();if(g.state==='playing')g.pause();guarded=false;guard();g.ui.toast('Wyprawa zabezpieczona','Zapisano postęp i wstrzymano rozgrywkę.');}});
    window.addEventListener('beforeunload',e=>{if(active()){g.saveRun();e.preventDefault();e.returnValue='';}});
    window.addEventListener('pagehide',()=>{if(active())g.saveRun();});
    document.addEventListener('visibilitychange',()=>{if(document.hidden&&active())g.saveRun();});
    window.addEventListener('keydown',e=>{if(active()&&((e.altKey&&e.code==='ArrowLeft')||e.code==='BrowserBack'||e.code==='Backspace')){e.preventDefault();g.saveRun();if(g.state==='playing')g.pause();}},true);
    window.addEventListener('pointerdown',e=>{if(active()&&(e.button===3||e.button===4)){e.preventDefault();g.saveRun();}},true);
  };
})(window.Aeren);

;

/* Module: js/controls.js */
'use strict';
(function(A){
 const rows=[['up','Ruch w górę','KeyW'],['down','Ruch w dół','KeyS'],['left','Ruch w lewo','KeyA'],['right','Ruch w prawo','KeyD'],['attack','Atak ręczny','Mouse0'],['dash','Unik','Space'],['skill0','Umiejętność 1','KeyQ'],['skill1','Umiejętność 2','KeyE'],['skill2','Umiejętność 3','KeyR'],['ultimate','Moc bohatera','KeyF'],['interact','Interakcja / odbiór','KeyC'],['auto','Automatyczny atak','KeyT'],['build','Postać i ekwipunek','Tab'],['pause','Pauza / powrót','Escape'],['fullscreen','Pełny ekran','F11'],['debug','Panel testowy','F2'],['menuUp','Menu: poprzedni w pionie','ArrowUp'],['menuDown','Menu: następny w pionie','ArrowDown'],['menuLeft','Menu: poprzedni / mniej','ArrowLeft'],['menuRight','Menu: następny / więcej','ArrowRight'],['confirm','Menu: zatwierdź','Enter']];
 const C=A.Controls={rows,pending:null,key(id){return A.Save.data?.settings.bindings?.[id]||rows.find(r=>r[0]===id)?.[2];},label(id){return this.name(this.key(id));},name(code){return {Space:'Spacja',Escape:'Esc',ArrowUp:'↑',ArrowDown:'↓',ArrowLeft:'←',ArrowRight:'→',Mouse0:'LPM',Mouse1:'ŚPM',Mouse2:'PPM'}[code]||code?.replace(/^Key|^Digit/,'')||'?';},down(input,id){return input.keys.has(this.key(id));},tap(input,id){return input.tap(this.key(id))||input.tap('Pad:'+id);},bind(id,code){const menu=id.startsWith('menu')||id==='confirm';const conflict=rows.find(r=>r[0]!==id&&this.key(r[0])===code&&((r[0].startsWith('menu')||r[0]==='confirm')===menu||['pause','fullscreen','debug'].includes(r[0])||['pause','fullscreen','debug'].includes(id)));if(conflict)return 'Ten przycisk jest przypisany do: '+conflict[1]+'.';if((menu||id==='fullscreen')&&code.startsWith('Mouse'))return 'Ta akcja wymaga klawisza klawiatury.';if(['AltLeft','AltRight','ControlLeft','ControlRight','MetaLeft','MetaRight','BrowserBack','Backspace'].includes(code))return 'Ten klawisz jest zarezerwowany przez system.';const s=A.Save.data.settings;s.bindings={...(s.bindings||{}),[id]:code};A.Save.write();return null;},reset(){A.Save.data.settings.bindings={};A.Save.write();}};
 function capture(code,e){if(!C.pending)return false;e.preventDefault();e.stopImmediatePropagation();const ui=A.game.ui,id=C.pending;if(code==='Escape'){C.pending=null;ui.bindings();return true;}const error=C.bind(id,code);if(error){ui.bindingMessage(error);return true;}C.pending=null;A.game.input.clear();ui.bindings(id);return true;}
 window.addEventListener('keydown',e=>{if(capture(e.code,e))return;if(e.code===C.key('fullscreen')&&!e.repeat){e.preventDefault();e.stopImmediatePropagation();if(window.chrome?.webview)window.chrome.webview.postMessage('fullscreen');else if(document.fullscreenElement)document.exitFullscreen?.();else document.documentElement.requestFullscreen?.().catch(()=>{});}},true);
 window.addEventListener('pointerdown',e=>capture('Mouse'+e.button,e),true);
})(window.Aeren);

;

/* Module: js/world.js */
'use strict';
(function(A){
  const{
    U,Data
  }=A;
  class World{
    constructor(seed,index){
      this.seed=seed;
      this.index=index;
      this.biome=Data.biomes[index];
      this.width=2800;
      this.height=2400;
      this.spawn={
        x:1400,y:1320
      };
      this.decor=[];
      this.walls=[];
      this.hazards=[];
      this.events=[];
      this.fog=new Uint8Array(28*24);
      const r=U.rng(seed+index*7619);
      this.rand=r;
      this.paths=[];
      for(let i=0;i<8;i++){
        const a=i*Math.PI/4;
        this.paths.push({
          x:1400+Math.cos(a)*850,y:1200+Math.sin(a)*750
        });
      }
      for(let i=0;i<610;i++){
        let x=80+r()*2640,y=80+r()*2240;
        const central=Math.hypot(x-1400,y-1200)<290;
        const type=central?'grass':r()<.25?'tree':r()<.24?'stone':r()<.17?'flower':'grass';
        this.decor.push({
          x,y,type,size:.65+r()*.9,flip:r(),phase:r()*6.28
        });
        if(type==='tree'&&Math.hypot(x-1400,y-1320)>170)this.walls.push({
          x:x-13,y:y-9,w:26,h:18,round:true
        });
      }
      if(index===2||index===5){
        for(let i=0;i<7;i++){
          const x=350+r()*2100,y=300+r()*1800;
          if(Math.hypot(x-1400,y-1200)<330)continue;
          const w=180+r()*140,h=140+r()*120;
          this.walls.push({
            x,y,w:Math.max(50,w/2-35),h:22
          },{
            x:x+w/2+35,y,w:w/2-35,h:22
          },{
            x,y:y+h,w,h:22
          },{
            x,y,w:22,h
          },{
            x:x+w,y,w:22,h
          });
          this.decor.push({
            x:x+w/2,y:y+h/2,type:'floor',size:w/200,flip:h/200
          });
        }
      }
      for(let i=0;i<20;i++){
        const x=180+r()*2440,y=170+r()*2060;
        if(Math.hypot(x-1400,y-1200)>330)this.hazards.push({
          x,y,r:36+r()*26,phase:r()*9,type:this.biome.hazard
        });
      }
      const types=['chest','fountain','shrine','merchant','curse','arena','npc','treasure','elite'];
      types.forEach((type,i)=>{
        const a=(i/9)*Math.PI*2,x=1400+Math.cos(a)*(480+r()*470),y=1200+Math.sin(a)*(420+r()*380);
        const pos=this.freePoint(x,y);
        this.events.push({
          id:i,type,...pos,used:false,icon:{
            chest:'◇',fountain:'♡',shrine:'✦',merchant:'⚖',curse:'☽',arena:'⚔',npc:'?',treasure:'♛',elite:'♜'
          }
          [type]
        });
      });
      this.events.unshift({
        id:99,type:'chest',x:1520,y:1270,used:false,icon:'◇'
      });
      this.events.push({
        id:100,type:'portal',x:1400,y:980,used:false,icon:'◎',locked:true
      });
      this.decor.sort((a,b)=>a.y-b.y);
      this.reveal(this.spawn.x,this.spawn.y);
    }
    freePoint(x,y){
      for(let i=0;i<20;i++){
        if(!this.collides(x,y,26))return{
          x,y
        };
        x+=40;
        y+=30;
      }
      return{
        x:1400,y:1320
      };
    }
    collides(x,y,r){
      if(x<r+45||y<r+45||x>this.width-r-45||y>this.height-r-45)return true;
      for(const w of this.walls){
        if(x+r>w.x&&x-r<w.x+w.w&&y+r>w.y&&y-r<w.y+w.h)return true;
      }
      return false;
    }
    move(e,dx,dy){
      if(!this.collides(e.x+dx,e.y,e.r))e.x+=dx;
      if(!this.collides(e.x,e.y+dy,e.r))e.y+=dy;
    }
    reveal(x,y){
      const gx=Math.floor(x/100),gy=Math.floor(y/100);
      for(let j=Math.max(0,gy-3);j<=Math.min(23,gy+3);j++)for(let i=Math.max(0,gx-3);i<=Math.min(27,gx+3);i++)if((i-gx)**2+(j-gy)**2<=12)this.fog[j*28+i]=1;
    }
    isKnown(x,y){
      return!!this.fog[U.clamp(Math.floor(y/100),0,23)*28+U.clamp(Math.floor(x/100),0,27)];
    }
    nearestEvent(p){
      return this.events.find(e=>!e.used&&(!e.locked)&&U.dist(p,e)<88);
    }
    update(g,dt){
      const p=g.player;
      this.reveal(p.x,p.y);
      p.terrainSlow=1;
      for(const h of this.hazards){
        const cycle=(g.time+h.phase)%7;
        if(cycle>4.8&&U.dist(p,h)<h.r+p.r){
          if(h.type==='frost')p.terrainSlow=.62;
          else if(g.hazardCd<=0){
            g.hurt(h.type==='lava'?13:8,h.type==='spores'?'poison':h.type==='lava'?'fire':'arcane');
            g.hazardCd=.65;
          }
        }
      }
      g.hazardCd-=dt;
    }
  }
  A.World=World;
})(window.Aeren);

;

/* Module: js/world-v2.js */
'use strict';
(function(A){const {U,Data}=A;
  class World {
    constructor(seed,index){
      this.seed=seed;this.index=index;this.biome=Data.biomes[index];this.width=3600;this.height=3000;this.cols=36;this.rows=30;
      this.center={x:1800,y:1500};this.spawn={x:1800,y:1660};this.decor=[];this.walls=[];this.hazards=[];this.events=[];this.paths=[];
      this.fog=new Uint8Array(1080);const r=U.rng(seed+index*7619);this.rand=r;
      for(let i=0;i<10;i++){const a=i*Math.PI/5;this.paths.push({x:1800+Math.cos(a)*1350,y:1500+Math.sin(a)*1100});}
      for(let i=0;i<870;i++){
        const x=80+r()*3440,y=80+r()*2840,central=Math.hypot(x-1800,y-1500)<340;
        const type=central?'grass':r()<.24?'tree':r()<.27?'stone':r()<.15?'flower':'grass';
        this.decor.push({x,y,type,size:.65+r()*1.05,flip:r(),phase:r()*6.28});
        if(type==='tree')this.walls.push({x:x-12,y:y-9,w:24,h:18,round:true});
      }
      const rooms=this.biome.theme==='dungeon'?16:this.biome.theme==='hell'?9:0;
      for(let i=0;i<rooms;i++){
        const x=220+r()*2940,y=180+r()*2400,w=240+r()*170,h=210+r()*160;
        if(Math.hypot(x+w/2-1800,y+h/2-1500)<490)continue;
        this.walls.push({x,y,w:w*.35,h:23},{x:x+w*.65,y,w:w*.35,h:23},{x,y:y+h,w:w*.35,h:23},{x:x+w*.65,y:y+h,w:w*.35,h:23},{x,y,w:23,h:h*.35},{x,y:y+h*.65,w:23,h:h*.35},{x:x+w,y,w:23,h:h*.35},{x:x+w,y:y+h*.65,w:23,h:h*.35});
        this.decor.push({x:x+w/2,y:y+h/2,type:'floor',size:w/200,flip:h/200});
      }
      if(this.biome.theme==='dead')for(let i=0;i<9;i++){const x=250+r()*3000,y=200+r()*2300;if(Math.hypot(x-1800,y-1500)>500)this.walls.push({x,y,w:90+r()*110,h:90+r()*110,cliff:true});}
      for(let i=0;i<36;i++){const x=150+r()*3300,y=150+r()*2700;if(Math.hypot(x-1800,y-1500)>370)this.hazards.push({x,y,r:38+r()*35,phase:r()*7,type:this.biome.hazard});}
      this.wallCells=new Map();for(const w of this.walls)for(let cy=Math.floor(w.y/120);cy<=Math.floor((w.y+w.h)/120);cy++)for(let cx=Math.floor(w.x/120);cx<=Math.floor((w.x+w.w)/120);cx++){const key=cy*100+cx;if(!this.wallCells.has(key))this.wallCells.set(key,[]);this.wallCells.get(key).push(w);}
      const types=['fountain','shrine','arena','npc','elite'];types.forEach((type,i)=>{const a=i*6.28/types.length,pt=this.freePoint(1800+Math.cos(a)*(650+r()*650),1500+Math.sin(a)*(600+r()*480));this.events.push({id:i,type,...pt,used:false,icon:{fountain:'♡',shrine:'✦',arena:'⚔',npc:'?',elite:'♜'}[type]});});
      this.events.push({id:100,type:'portal',x:1800,y:1260,used:false,icon:'◎',locked:true});
      this.decor.sort((a,b)=>a.y-b.y);this.reveal(this.spawn.x,this.spawn.y);
    }
    freePoint(x,y){for(let i=0;i<28;i++){const px=U.clamp(x+Math.cos(i*2.4)*i*8,80,this.width-80),py=U.clamp(y+Math.sin(i*2.4)*i*8,80,this.height-80);if(!this.collides(px,py,28))return{x:px,y:py};}return{...this.spawn};}
    collides(x,y,r){if(x<r+45||y<r+45||x>this.width-r-45||y>this.height-r-45)return true;for(let cy=Math.floor((y-r)/120);cy<=Math.floor((y+r)/120);cy++)for(let cx=Math.floor((x-r)/120);cx<=Math.floor((x+r)/120);cx++)for(const w of this.wallCells?.get(cy*100+cx)||[])if(x+r>w.x&&x-r<w.x+w.w&&y+r>w.y&&y-r<w.y+w.h)return true;return false;}
    move(e,dx,dy){if(!this.collides(e.x+dx,e.y,e.r))e.x+=dx;if(!this.collides(e.x,e.y+dy,e.r))e.y+=dy;}
    reveal(x,y){const gx=Math.floor(x/100),gy=Math.floor(y/100);for(let j=Math.max(0,gy-3);j<=Math.min(29,gy+3);j++)for(let i=Math.max(0,gx-3);i<=Math.min(35,gx+3);i++)if((i-gx)**2+(j-gy)**2<=12)this.fog[j*36+i]=1;}
    isKnown(x,y){return!!this.fog[U.clamp(Math.floor(y/100),0,29)*36+U.clamp(Math.floor(x/100),0,35)];}
    nearestEvent(p){return this.events.find(e=>!e.used&&!e.locked&&U.dist(p,e)<92);}
    update(g,dt){const p=g.player;this.reveal(p.x,p.y);p.terrainSlow=1;for(const h of this.hazards){if((g.time+h.phase)%7>4.8&&U.dist(p,h)<h.r+p.r){if(h.type==='frost')p.terrainSlow=.63;else if(g.hazardCd<=0){g.hurt((h.type==='lava'?19:12)*g.mode.damage,h.type==='spores'?'poison':h.type==='lava'?'fire':'arcane');g.hazardCd=.65;}}}g.hazardCd-=dt;}
  }
  A.World=World;
})(window.Aeren);

;

/* Module: js/catalog-rules.js */
'use strict';
(function(A){
 // Shared with combat: descriptions read the same values as fired spells.
 A.lifeHealLimit=2;
 A.ultimatePower=rank=>1+(rank-1)*.35;
 A.mutationTraits=(id,l)=>({explosion:id==='nova'?(l>=5?115:85):0,pierce:id==='return'?(l>=5?5:2):id==='fan'&&l>=5?3:null,extraProjectiles:id==='fan'?2:0});
 A.skillStats=function(id,rank,g){
  const s=g.stats,p=g.player,l=1+(rank-1)*.22,d=s.damage/p.hero.damage,auto=s.damage*(1+(rank-1)*.18);
  const cds={meteor:10,blizzard:12,thunder:9,venom:10,roots:9,guard:15,blink:7,vortex:12,wolves:18,drain:11};
  const active={meteor:{damage:90*l*d,radius:135*s.area},blizzard:{damage:18*l*d,radius:175*s.area,life:4},thunder:{damage:50*l*d,count:Math.ceil(6+l)},venom:{damage:10*l*d,radius:150*s.area,life:6},roots:{damage:45*l*d,radius:200*s.area},guard:{heal:5*l},blink:{damage:45*l*d,radius:120*s.area},vortex:{damage:15*l*d,radius:190*s.area,life:g.synergy('gravity')?7:5},wolves:{count:Math.ceil(2+l),life:12},drain:{damage:40*l*d,radius:180*s.area}};
  if(active[id])return {...active[id],cooldown:Math.max(6,cds[id]*1.35/(1+s.cdr))};
  const interval=(id==='nova'?5:id==='lightning'?3:id==='familiar'?1.1:2.7)/(1+s.cdr*.5);
  const out={damage:auto*1.3,interval,count:rank>=4?2:1};
  if(id==='fire')out.explosion=rank>=3?(rank===5?115:65)*s.area:0;
  if(id==='poison'||id==='oil')out.puddle=id==='oil'||rank>=3;
  if(id==='ice')out.pierce=1;
  if(id==='lightning')Object.assign(out,{damage:auto*1.7,chainDamage:auto*.8,chains:1+Math.floor(rank/2),count:1});
  if(id==='nova')Object.assign(out,{damage:auto*1.6,radius:(115+rank*14)*s.area,count:1});
  if(id==='familiar')Object.assign(out,{damage:auto*.9,count:1+Math.floor((rank-1)/2)});
  if(id==='arrows')Object.assign(out,{damage:auto*.6,count:rank+2,pierce:2});
  if(id==='orbit')Object.assign(out,{damage:s.damage*.45*(1+rank*.12),count:rank+1,interval:.42,radius:92*s.area});
  return out;
 };
 A.weaponTraits=function(id,l){return {
  count:id==='daggers'?2:id==='orb'?3:id==='thornbow'?(l>=5?3:l>=3?2:1):1,
  splitEvery:id==='spear'&&l===5?5:0,
  pierce:id==='spear'?(l>=4?3:l>=3?1:0):id==='scythe'?(l===5?99:l>=3?2:0):['bow','thornbow'].includes(id)?(l>=4?1:0):id==='void'?5:id==='crossbow'?2:0,
  explosion:['hammer','runicHammer'].includes(id)&&l>=3?(l>=5?85:55):id==='cinder'?65:id==='staff'&&l>=3?58:0,
  returning:id==='scythe'&&l===5,
  chains:id==='stormrod'&&l>=3?(l>=4?2:1):0,
  areaChance:id==='stormrod'&&l===5?.2:0,
  knockback:id==='runicHammer'&&l>=4?100:0,
  stunChance:id==='runicHammer'&&l>=5?.2:0,
  steal:id==='scythe'&&l>=4?.01:0,
  crit:id==='thornbow'&&l>=5?.08:0
 };};
})(window.Aeren);

;

/* Module: js/combat.js */
'use strict';
(function(A){
  const{
    U,Data
  }=A;
  const colors={
    fire:'#ffba76',ice:'#ace4f5',lightning:'#fff2aa',poison:'#b9dc7b',nature:'#d9efad',arcane:'#d4b5f1',stone:'#dfc89e',water:'#98d8e7',oil:'#b4a9b0',blood:'#f69bba',wind:'#c5ece0'
  };
  const Combat={
    spawn(type,opts={
    }){
      if(this.enemies.length>=240&&!opts.isBoss&&!opts.mini)return null;
      const d=typeof type==='string'?Data.enemyTypes.find(e=>e.id===type):type;
      const p=this.player,a=U.rand(0,Math.PI*2),dist=U.rand(490,760);
      const pt=this.world.freePoint(U.clamp(p.x+Math.cos(a)*dist,70,this.world.width-70),U.clamp(p.y+Math.sin(a)*dist,70,this.world.height-70));
      const difficulty=this.difficulty;
      const elite=opts.elite??(Math.random()<Math.min(.24,.015+this.time/8000+this.biome*.018)?Math.floor(Math.random()*10):-1);
      const hp=d.hp*(1+Math.min(.35,this.stageTime/900)+this.biome*.06+Math.min(.2,(this.player.level-1)*.01))*(elite>=0?2.3:1);
      const e={
        id:++this.uid,x:opts.x??pt.x,y:opts.y??pt.y,r:d.r*(elite===6?1.65:1),hp,maxHp:hp,damage:d.damage*(1+Math.min(.2,this.stageTime/900)+this.biome*.06),speed:d.speed*(1+Math.min(.35,this.time/8000))*(elite===5?1.55:elite===6?.8:1),type:d,elite,flash:0,cd:U.rand(.5,2),touch:0,toxicCd:0,age:0,kx:0,ky:0,status:{
        },dot:0,shoot:0,charge:0,wind:0,dead:false,phase:1,...opts
      };
      if(opts.mini){
        e.r*=1.4;
        e.hp*=3;
        e.maxHp=e.hp;
        e.name='Pradawny strażnik · '+d.name;
        e.elite=opts.elite??6;
      }
      this.enemies.push(e);
      return e;
    }, spawnBoss(){
      if(this.boss||this.bosses>this.biome)return;
      const d={
        id:'boss'+this.biome,name:Data.biomes[this.biome].boss,ai:'boss',hp:1,speed:62,damage:22+this.biome*8,r:48,color:Data.biomes[this.biome].accent
      };
      const hp=1700*(1+this.biome*.7)*(1+this.player.level*.024);
      this.boss=this.spawn(d,{
        x:1400,y:1100,hp,maxHp:hp,elite:-1,isBoss:true,cd:2.5,attackIndex:0
      });
      this.stageBossSpawned=true;
      this.shake=10;
      A.Audio.play('boss');
      this.ui.toast(d.name,'Strażnik źródła · trzy fazy');
    }, bullet(x,y,angle,damage,element='nature',options={
    }){
      const speed=(options.enemy?260:540*this.stats.velocity)*(options.speed||1);
      return this.projectiles.get({
        x,y,ox:x,oy:y,vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,damage,element,r:options.enemy?6:5,life:2,enemy:false,basic:false,pierce:0,hitIds:[],explosion:0,puddle:false,style:null,age:0,...options
      });
    }, zone(x,y,r,damage,element,options={
    }){
      return this.zones.get({
        x,y,r,damage,element,life:.32,total:.32,tick:0,interval:.5,delay:0,enemy:false,pull:0,root:0,once:false,done:false,visual:false,heal:0,rootWet:false,crit:undefined,...options
      });
    }, burst(x,y,color,count=9,force=95){
      const amount=Math.round(count*A.Save.data.settings.particles);
      for(let i=0;i<amount;i++){
        const a=U.rand(0,Math.PI*2),v=U.rand(force*.3,force);
        this.particles.get({
          x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-10,life:U.rand(.25,.6),max:.6,r:U.rand(2,5),color
        });
      }
    }, number(x,y,value,color='#eef1cb',big=false){
      if(A.Save.data.settings.numbers)this.numbers.get({
        x:x+U.rand(-9,9),y,value:typeof value==='string'?value:Math.round(value),color,life:.85,big
      });
    }, hit(e,damage,element='nature',opts={
    }){
      if(!e||e.hp<=0||this.state==='results')return false;
      const p=this.player,s=this.stats;
      const critical=opts.crit??(Math.random()<s.crit);
      let n=damage*(critical?s.critDamage:1);
      const parts3=opts.parts3||[{id:opts.source3||this.damageSource3||'other:unknown',weight:1}];
      if(element==='fire'&&e.status.oil&&this.synergy('inferno')){parts3.push({id:'synergy:inferno',weight:.35});n*=1.35;}
      if(critical&&e.status.ice&&this.synergy('shatter')){parts3.push({id:'synergy:shatter',weight:parts3.reduce((sum,p)=>sum+p.weight,0)*.6});n*=1.6;}
      if(e.type.ai==='shield'&&Math.cos(U.angle(e,p)-e.age*.5)>.4)n*=.45;
      if(e.elite===4&&e.age%5<2)n*=.45;
      if(e.isBoss)n*=e.phase===3?.92:1;
      const hpBefore3=e.hp;
      e.hp-=n;
      e.flash=.1;
      e.kx+=Math.cos(U.angle(p,e))*Math.min(130,n*1.3);
      e.ky+=Math.sin(U.angle(p,e))*Math.min(130,n*1.3);
      this.number(e.x,e.y-e.r,n,critical?'#fff0a1':colors[element]||'#fff',critical);
      this.applyStatus(e,element);
      if(p.hero.id==='vesper'&&critical)this.applyStatus(e,'poison');
      if(critical){
        this.shake=Math.max(this.shake,2.5);
        if(this.impactCd<=0){
          this.hitStop=Math.max(this.hitStop,.018);
          this.impactCd=.1;
        }
        if(this.sfxCd<=0){
          A.Audio.play('crit');
          this.sfxCd=.07;
        }
      }
      if(s.steal>0||s.healingFlat>0){
        const heal=Math.min(n*s.steal+(s.healingFlat||0),this.lifeBudget);
        p.hp=Math.min(s.maxHp,p.hp+heal);
        this.lifeBudget-=heal;
      }
      if(this.has('reaper')&&critical&&!e.isBoss&&!e.mini&&e.hp/e.maxHp<.2){e.hp=0;A.SoundFX?.skill('reaper');}
      this.recordDamage3?.(e,hpBefore3,critical,element,{...opts,parts3});
      if(!opts.secondary){
        if(critical&&e.status.poison&&this.synergy('toxic')&&e.toxicCd<=0){
          e.toxicCd=1;
          this.zone(e.x,e.y,70*s.area,damage*.25,'poison',{
            life:2,total:2,source3:'synergy:toxic'
          });
        }
        if(element==='water'&&e.status.fire&&this.synergy('steam'))this.zone(e.x,e.y,90,damage*.5,'arcane',{source3:'synergy:steam'});
        if(element==='lightning'&&e.status.water&&this.synergy('storm'))this.withSource3?this.withSource3('synergy:storm',()=>this.chain(e,damage*.4,4)):this.chain(e,damage*.4,4);
      }
      if(e.hp<=0)this.kill(e,opts.depth||0);
      return critical;
    }, applyStatus(e,element){
      const duration=element==='fire'&&this.player.hero.id==='sol'?6:4;
      if(['fire','poison','ice','oil','water'].includes(element))e.status[element]=Math.max(e.status[element]||0,duration);
    }, chain(source,damage,count){
      let targets=this.enemies.filter(e=>e.hp>0&&e!==source&&U.dist(e,source)<300).sort((a,b)=>U.dist(a,source)-U.dist(b,source)).slice(0,count);
      for(const e of targets){
        this.hit(e,damage,'lightning',{
          secondary:true
        });
        this.lines.get({
          x:source.x,y:source.y,x2:e.x,y2:e.y,life:.2,color:'#fff0ac'
        });
      }
    }, kill(e,depth=0){
      if(e.dead)return;
      e.dead=true;
      this.kills++;
      A.Audio.play('death');
      this.burst(e.x,e.y,e.type.color,e.isBoss?45:9,e.isBoss?240:90);
      const xp=Math.round((e.isBoss?100:e.mini?35:e.elite>=0?10:3)*(1+this.biome*.25));
      this.drop(e.x,e.y,'xp',xp);
      this.drop(e.x+12,e.y,'gold',e.isBoss?100:e.elite>=0?12:Math.random()<.24?2:1);
      if(Math.random()<.045)this.drop(e.x,e.y,'heal',7);
      if(e.elite>=0&&Math.random()<.14+.08*this.stats.luck)this.drop(e.x,e.y,'item',1);
      if(e.elite===3||e.elite===0)this.zone(e.x,e.y,82,18,'fire',{
        enemy:true,delay:.85,life:1.1,total:1.1,once:true
      });
      if(e.elite===7&&!e.duplicate)for(let i=0;i<2;i++)this.spawn(e.type,{
        x:e.x+(i?20:-20),y:e.y,elite:-1,duplicate:true,hp:e.maxHp*.22,maxHp:e.maxHp*.22,r:e.r*.65
      });
      if(this.has('supernova')&&depth<2){
        A.SoundFX?.skill('supernova');
        const nearby=[];
        this.grid.query(e.x,e.y,100,t=>{
          if(t!==e&&U.dist(e,t)<100)nearby.push(t);
        });
        for(const t of nearby)this.hit(t,this.stats.damage*.7,'fire',{
          secondary:true,depth:depth+1,source3:'skill:supernova'
        });
        this.burst(e.x,e.y,'#ffd599',15,150);
      }
      if(e.isBoss){
        this.boss=null;
        this.bosses++;
        this.world.events.find(x=>x.type==='portal').locked=false;
        this.world.events.push({
          id:200+this.biome,x:e.x,y:e.y,type:'bossreward',used:false,icon:'♛'
        });
        this.ui.toast('Źródło zostało uwolnione','Odbierz dar strażnika i wejdź do portalu');
        this.shake=14;
        this.player.hp=Math.min(this.stats.maxHp,this.player.hp+this.stats.maxHp*.3);
      }
    }, drop(x,y,type,value){
      const p=this.pickups.get({
        x,y,type,value,age:0,magnet:false
      });
      if(!p){
        if(type==='xp')this.gainXP(value);
        else if(type==='gold')this.gold+=Math.round(value*this.stats.gold);
      }
    }, hurt(damage,element='nature'){
      const p=this.player;
      if(this.state!=='playing'||p.invuln>0||this.god)return false;
      if(Math.random()<this.stats.dodge){
        this.number(p.x,p.y-30,'UNIK','#cbece4');
        return false;
      }
      let n=damage*(80/(80+this.stats.armor))*this.stats.incoming*(p.guard>0?.55:1);
      this.recordIncoming3?.(damage,n,element);
      p.hp-=n;
      p.invuln=.48;
      this.shake=7;
      this.number(p.x,p.y-22,n,'#ffa88c',true);
      this.burst(p.x,p.y,'#f2c58f',6);
      A.Audio.play('hit');
      if(element==='poison'||element==='fire')p.status[element]=3;
      if(element==='ice')p.status.ice=2;
      if(this.synergy('thorns'))this.zone(p.x,p.y,135,20,'poison',{source3:'synergy:thorns'});
      if(p.hp<=0){
        if(this.has('phoenix')&&!p.revived){
          A.SoundFX?.skill('phoenix');
          p.revived=true;
          this.specialHeal3=true;p.hp=this.stats.maxHp*.6;this.specialHeal3=false;
          p.invuln=3;
          this.zone(p.x,p.y,350,350,'fire',{source3:'skill:phoenix'});
          this.ui.toast('Serce feniksa','Jeszcze jeden świt');
        }
        else this.finish(false);
      }
      return true;
    }, basic(){
      const p=this.player,s=this.stats;
      let n=Math.min(15,s.count+(p.hero.id==='ilya'&&p.shots%5===4?2:0));
      const spread=Math.min(.95,n*.11);
      let element=p.hero.element;
      if(this.has('prism'))element=['fire','ice','lightning','poison'][p.shots%4];
      for(let i=0;i<n;i++){
        const a=p.aim+(i-(n-1)/2)*(n>1?spread/(n-1):0);
        this.bullet(p.x+Math.cos(a)*19,p.y+Math.sin(a)*19,a,s.damage,element,{
          r:p.hero.id==='orren'?10:5,explosion:p.hero.id==='orren'?48:0,life:1.25,pierce:this.has('arrows')>=3?1:0
        });
      }
      p.shots++;
      A.Audio.play('attack');
      p.attackAnim=.16;
    }, dash(){
      const p=this.player;
      if(p.dashCd>0)return;
      const input=this.input;
      let x=(input.keys.has('KeyD')?1:0)-(input.keys.has('KeyA')?1:0)+input.pad.x,y=(input.keys.has('KeyS')?1:0)-(input.keys.has('KeyW')?1:0)+input.pad.y;
      const a=Math.hypot(x,y)>.1?Math.atan2(y,x):p.aim;
      p.dashAngle=a;
      p.dashing=.19;
      p.invuln=.28;
      p.dashCd=(this.has('comet')?2.38:2.8)*this.stats.dash/(1+this.stats.cdr*.25);
      A.Audio.play('dash');
      this.burst(p.x,p.y,'#d9e9c0',14);
      if(this.synergy('frost')||p.hero.id==='niva')this.zone(p.x,p.y,105,18,'ice',{
        life:2.8,total:2.8
      });
    }, cast(id){
      const p=this.player,rank=this.has(id);
      if(!rank||(p.cooldowns[id]||0)>0)return;
      const s=this.stats;
      p.cooldowns[id]=A.skillStats(id,rank,this).cooldown;
      const target=this.aimPoint(),info=A.skillStats(id,rank,this);
      A.Audio.play('dash');
      if(id==='meteor')this.zone(target.x,target.y,info.radius,info.damage,'fire',{
        delay:.5,life:.85,total:.85,once:true,heal:this.synergy('phoenixwing')?3:0
      });
      if(id==='blizzard')this.zone(target.x,target.y,info.radius,info.damage,'ice',{
        life:info.life,total:info.life,rootWet:this.synergy('permafrost')
      });
      if(id==='thunder'){
        for(const e of this.nearPoint(target,240,info.count)){
          this.lines.get({
            x:e.x+50,y:e.y-500,x2:e.x,y2:e.y,life:.3,color:'#fff0aa'
          });
          this.hit(e,info.damage,'lightning');
        }
      }
      if(id==='venom')this.zone(target.x,target.y,info.radius,info.damage,'poison',{
        life:info.life,total:info.life
      });
      if(id==='roots'){
        this.zone(target.x,target.y,info.radius,info.damage,'nature',{
          root:2
        });
        if(this.synergy('forest'))this.withSource3?this.withSource3('synergy:forest',()=>this.summon(2,8)):this.summon(2,8);
      }
      if(id==='guard'){
        p.guard=2.5;
        p.hp=Math.min(s.maxHp,p.hp+info.heal);
      }
      if(id==='blink'){
        for(let i=0;i<12;i++)this.world.move(p,Math.cos(p.aim)*Math.min(240,U.dist(p,target))/12,Math.sin(p.aim)*Math.min(240,U.dist(p,target))/12);
        p.invuln=.6;
        this.zone(p.x,p.y,info.radius,info.damage,'arcane');
        if(this.synergy('eclipse')){
          p.dashCd=Math.max(0,p.dashCd-1);
          for(let i=0;i<8;i++)this.bullet(p.x,p.y,i*Math.PI/4,s.damage,'arcane',{source3:'synergy:eclipse'});
        }
      }
      if(id==='vortex')this.zone(target.x,target.y,info.radius,info.damage,'wind',{
        life:info.life,total:7,pull:this.synergy('gravity')?250:130
      });
      if(id==='wolves'){const first=this.familiars.length;this.summon(info.count,info.life);for(const f of this.familiars.slice(first))Object.assign(f,target);}
      if(id==='drain')this.zone(target.x,target.y,info.radius,info.damage,'blood',{
        heal:2,crit:this.synergy('blood')?true:undefined
      });
    }, summon(n,life){
      for(let i=0;i<n&&this.familiars.length<12;i++)this.familiars.push({
        source3:this.damageSource3,x:this.player.x,y:this.player.y,life,cd:i*.2,angle:U.rand(0,6.28)
      });
    }, nearEnemies(radius,count=1){
      const p=this.player;
      return this.enemies.filter(e=>e.hp>0&&U.dist(e,p)<radius).sort((a,b)=>U.dist(a,p)-U.dist(b,p)).slice(0,count);
    }, autoSkills(dt){
      const p=this.player,s=this.stats;
      for(const a of Data.abilities){
        const l=this.has(a.id);
        if(!l||a.type!=='auto')continue;
        this.damageSource3='skill:'+a.id;
        p.autoTimers[a.id]=(p.autoTimers[a.id]||0)-dt;
        if(a.id==='orbit')continue;
        if(p.autoTimers[a.id]>0)continue;
        const target=this.nearEnemies(660)[0];
        if(!target)continue;
        const angle=U.angle(p,target),info=A.skillStats(a.id,l,this);
        p.autoTimers[a.id]=info.interval;
        A.SoundFX?.skill(a.id);
        if(a.id==='lightning'){
          this.hit(target,info.damage,'lightning');
          this.lines.get({
            x:p.x,y:p.y,x2:target.x,y2:target.y,life:.2,color:colors.lightning
          });
          this.chain(target,info.chainDamage,info.chains);
        }
        else if(a.id==='nova')this.zone(p.x,p.y,info.radius,info.damage,'arcane',{
          heal:this.synergy('harvest')?2:0
        });
        else if(a.id==='familiar'){
          for(let i=0;i<info.count;i++)this.bullet(p.x+Math.cos(this.time+i*2)*60,p.y+Math.sin(this.time+i*2)*60,angle,info.damage,this.synergy('plague')?'poison':'nature');
        }
        else if(a.id==='arrows'){
          for(let i=0;i<info.count;i++){
            this.bullet(p.x,p.y,angle+(i-(l+1)/2)*.15,info.damage,'nature',{
              pierce:info.pierce
            });
            if(this.synergy('echo'))this.bullet(p.x,p.y,angle+Math.PI+(i-(l+1)/2)*.15,info.damage,'nature',{
              pierce:info.pierce
            });
          }
        }
        else{
          const count=info.count;
          for(let i=0;i<count;i++)this.bullet(p.x,p.y,angle+(i-(count-1)/2)*.18,info.damage,a.effect,{
            r:a.id==='fire'?9:6,explosion:info.explosion||0,puddle:!!info.puddle,pierce:info.pierce||0
          });
        }
      }
      this.damageSource3='skill:orbit';
      if(this.has('orbit')){
        p.orbitCd-=dt;
        if(p.orbitCd<=0){
          const orbit=A.skillStats('orbit',this.has('orbit'),this);
          p.orbitCd=orbit.interval;
          const n=orbit.count;
          for(let i=0;i<n;i++){
            const a=this.time*2.2+i*6.28/n,x=p.x+Math.cos(a)*orbit.radius,y=p.y+Math.sin(a)*orbit.radius;
            this.grid.query(x,y,55,e=>{
              if(Math.hypot(e.x-x,e.y-y)<e.r+21)this.hit(e,orbit.damage,this.synergy('solar')?'fire':this.synergy('tesla')?'lightning':'arcane');
            });
          }
        }
      }
      this.damageSource3='skill:chronos';
      if(this.has('chronos')&&Math.floor(this.time)%12<3)for(const e of this.enemies)e.status.ice=.2;
      if(this.has('worldtree')&&this.time-p.treeTime>14){
        p.treeTime=this.time;
        A.SoundFX?.skill('worldtree');
        p.hp=Math.min(s.maxHp,p.hp+s.maxHp*.02);
        this.zone(p.x,p.y,190*s.area,s.damage*2,'nature',{source3:'skill:worldtree'});
      }
      if(this.has('crown')&&this.time-p.crownTime>4){
        p.crownTime=this.time;
        if(this.nearEnemies(600,1).length)A.SoundFX?.skill('crown');
        for(const e of this.nearEnemies(600,5)){
          this.hit(e,s.damage*2,'lightning',{source3:'skill:crown'});
          this.lines.get({
            x:e.x,y:e.y-450,x2:e.x,y2:e.y,life:.3,color:colors.lightning
          });
        }
      }
      for(let i=this.familiars.length-1;i>=0;i--){
        const f=this.familiars[i];
        f.life-=dt;
        f.cd-=dt;
        f.angle+=dt;
        f.x=U.lerp(f.x,p.x+Math.cos(f.angle)*80,dt*6);
        f.y=U.lerp(f.y,p.y+Math.sin(f.angle)*80,dt*6);
        if(f.cd<=0){
          f.cd=.6;
          const e=this.nearEnemies(640)[0];
          if(e){A.SoundFX?.skill('wolves',.65);this.bullet(f.x,f.y,U.angle(f,e),s.damage*.7,this.synergy('plague')?'poison':'nature',{source3:this.synergy('plague')?'synergy:plague':f.source3||'skill:wolves'});}
        }
        if(f.life<=0)this.familiars.splice(i,1);
      }
    this.damageSource3=null;
    }, updateEnemies(dt){
      const p=this.player;
      for(const e of this.enemies){
        if(e.hp<=0)continue;
        this._enemySource=e;
        e.age+=dt;
        e.cd-=dt;
        e.touch-=dt;
        e.flash-=dt;
        e.toxicCd=(e.toxicCd||0)-dt;
        for(const k of Object.keys(e.status)){
          e.status[k]-=dt;
          if(e.status[k]<=0)delete e.status[k];
        }
        e.dot-=dt;
        if(e.dot<=0){
          e.dot=.5;
          let d=0;const parts3=[];
          if(e.status.fire){const fire=this.stats.damage*.15;d+=fire;parts3.push({id:e.statusSources3?.fire||'other:unknown',weight:fire});if(e.status.oil&&this.synergy('inferno')){d+=fire;parts3.push({id:'synergy:inferno',weight:fire});}}
          if(e.status.poison){const poison=this.stats.damage*.13;d+=poison;parts3.push({id:e.statusSources3?.poison||'other:unknown',weight:poison});}
          if(d)this.hit(e,d,'dot',{
            secondary:true,crit:false,parts3,source3:e.statusSources3?.[e.status.fire?'fire':'poison']||'other:unknown'
          });
        }
        if(e.hp<=0)continue;
        let a=U.angle(e,p),dist=U.dist(e,p),speed=e.speed*(e.status.ice?.48:1)*(e.status.oil?.78:1)*(e.status.root?0:1)*this.stats.enemySpeed;
        if(e.isBoss){
          this.bossAI(e,dt,a,dist);
          speed*=e.phase===3?1.35:1;
        }
        else{
          const ai=e.type.ai;
          if(ai==='orbit'){
            a+=dist<200?1.4:.45;
          }
          if(ai==='swarm')a+=Math.sin(e.age*6+e.id)*.55;
          if(['ranged','sniper','heal','summon','denial'].includes(ai)&&dist<300)speed*=dist<180?-.65:.15;
          if(ai==='charge'){
            if(e.wind>0){
              e.wind-=dt;
              speed=0;
              if(e.wind<=0){
                e.charge=.65;
                e.chargeAngle=e.savedAngle;
              }
            }
            else if(e.charge>0){
              e.charge-=dt;
              a=e.chargeAngle;
              speed*=4;
            }
            else if(e.cd<=0&&dist<450){
              e.cd=4;
              e.wind=.7;
              e.savedAngle=a;
            }
          }
          if(ai==='teleport'&&e.cd<=0){
            e.cd=4;
            this.burst(e.x,e.y,e.type.color,8);
            const dest=this.world.freePoint(p.x+Math.cos(a+Math.PI/2)*180,p.y+Math.sin(a+Math.PI/2)*180);
            e.x=U.clamp(dest.x,60,this.world.width-60);
            e.y=U.clamp(dest.y,60,this.world.height-60);
            this.zone(e.x,e.y,64,e.damage,'arcane',{
              enemy:true,delay:.7,life:1,total:1,once:true
            });
          }
          if(ai==='ranged'&&e.cd<=0){
            e.cd=2.2;
            e.rangedWind=.45;e.savedAngle=a;
          }
          if(e.rangedWind>0){
            e.rangedWind-=dt;speed*=.25;
            if(e.rangedWind<=0)for(let i=-1;i<=1;i++)this.bullet(e.x,e.y,e.savedAngle+i*.15,e.damage,'arcane',{
              enemy:true,life:3
            });
          }
          if(ai==='sniper'){
            if(e.wind>0){
              e.wind-=dt;
              speed=0;
              if(e.wind<=0)this.bullet(e.x,e.y,e.savedAngle,e.damage,'lightning',{
                enemy:true,speed:2.2,life:2.2,r:7
              });
            }
            else if(e.cd<=0){
              e.cd=3.4;
              e.wind=1;
              e.savedAngle=a;
            }
          }
          if(ai==='summon'&&e.cd<=0){
            e.cd=7;
            for(let i=0;i<2;i++)this.spawn(Data.enemyTypes[this.biome*8],{
              x:e.x+U.rand(-45,45),y:e.y+U.rand(-45,45),elite:-1
            });
            this.burst(e.x,e.y,'#d7b5ed',12);
          }
          if(ai==='heal'&&e.cd<=0){
            e.cd=3;
            for(const t of this.enemies)if(!t.isBoss&&U.dist(t,e)<170)t.hp=Math.min(t.maxHp,t.hp+t.maxHp*.12);
            this.zone(e.x,e.y,140,0,'nature',{
              visual:true
            });
          }
          if(ai==='denial'&&e.cd<=0){
            e.cd=4;
            this.zone(p.x,p.y,80,e.damage,e.type.biome===4?'fire':'poison',{
              enemy:true,delay:1,life:4,total:4
            });
          }
          if(ai==='kamikaze'&&dist<85&&!e.detonating){
            e.detonating=.75;
            this.zone(e.x,e.y,100,e.damage,'fire',{
              enemy:true,delay:.7,life:1,total:1,once:true
            });
          }
          if(e.detonating){
            e.detonating-=dt;
            speed=0;
            if(e.detonating<=0){
              e.hp=0;
              this.kill(e);
            }
          }
        }
        if(dist<e.r+p.r+2&&e.touch<=0){
          if(this.hurt(e.damage,e.elite===9?'poison':e.elite===0?'fire':e.elite===1?'ice':'nature',e.name||e.type.name)){
            e.touch=.8;
            if(e.elite===2)e.hp=Math.min(e.maxHp,e.hp+e.damage);
          }
        }
        if(e.elite===8&&e.cd<=0){
          e.cd=3;
          this.zone(p.x,p.y,55,e.damage,'lightning',{
            enemy:true,delay:.9,life:1.15,total:1.15,once:true
          });
        }
        let dx=Math.cos(a)*speed*dt+e.kx*dt,dy=Math.sin(a)*speed*dt+e.ky*dt;
        e.kx*=Math.max(0,1-dt*8);
        e.ky*=Math.max(0,1-dt*8);
        const oldx=e.x,oldy=e.y;
        this.world.move(e,dx,dy);
        if(oldx===e.x&&oldy===e.y&&speed>0)this.world.move(e,-Math.sin(a)*speed*dt,Math.cos(a)*speed*dt);
        if(dist>1150&&!e.isBoss&&!e.mini){
          e.hp=0;
          e.dead=true;
        }
      }
      this.enemies=this.enemies.filter(e=>e.hp>0);
      this._enemySource=null;
    }, bossAI(e,dt,a,dist){
      const phase=e.hp/e.maxHp<.33?3:e.hp/e.maxHp<.66?2:1;
      if(phase!==e.phase){
        e.phase=phase;
        e.cd=1.4;
        this.ui.toast(e.type.name,'Faza '+phase+' · '+['','Przebudzenie','Gniew źródła','Ostatnia przysięga'][phase]);
        this.zone(e.x,e.y,240,20+this.biome*3,'arcane',{
          enemy:true,delay:1.2,life:1.5,total:1.5,once:true
        });
        for(let i=0;i<phase+1;i++)this.spawn(Data.enemyTypes[this.biome*8+1]);
      }
      if(e.cd>0)return;
      e.cd=3.5-e.phase*.55;
      e.attackIndex++;
      const pattern=(e.attackIndex+this.biome)%3,damage=e.damage;
      if(pattern===0){
        const n=10+e.phase*4+this.biome;
        for(let i=0;i<n;i++)this.bullet(e.x,e.y,i*6.283/n+e.age*.23,damage,['nature','poison','stone','ice','fire','lightning'][this.biome],{
          enemy:true,life:4.2,speed:.75+e.phase*.1,r:7
        });
        this.burst(e.x,e.y,e.type.color,20,150);
      }
      if(pattern===1){
        const n=2+e.phase+Math.floor(this.biome/2);
        for(let i=0;i<n;i++){
          const offset=(i-(n-1)/2)*90;
          this.zone(predict(this.player.x,this.player.vx,.45,this.world.width-70)+Math.cos(a+1.57)*offset,predict(this.player.y,this.player.vy,.45,this.world.height-70)+Math.sin(a+1.57)*offset,58+e.phase*8,damage*1.2,['nature','poison','stone','ice','fire','lightning'][this.biome],{
            enemy:true,delay:1.1,life:1.4+(this.biome===1?2:0),total:3.4,once:this.biome!==1
          });
        }
      }
      if(pattern===2){
        switch(this.biome){
          case 0:for(let i=0;i<e.phase+1;i++)this.spawn(Data.enemyTypes[i%4],{
            x:e.x+U.rand(-130,130),y:e.y+U.rand(-100,100),elite:-1
          });
          break;
          case 1:for(let i=0;i<e.phase+2;i++)this.zone(this.player.x+U.rand(-180,180),this.player.y+U.rand(-180,180),90,damage*.65,'poison',{
            enemy:true,delay:1,life:5,total:5
          });
          break;
          case 2:for(let i=0;i<8;i++)this.zone(e.x+Math.cos(i*.785)*220,e.y+Math.sin(i*.785)*220,62,damage,'stone',{
            enemy:true,delay:.7+i*.1,life:2,total:2,once:true
          });
          break;
          case 3:this.burst(e.x,e.y,e.type.color,25);
          const pos=this.world.freePoint(U.clamp(this.player.x+Math.cos(e.age)*260,100,this.world.width-100),U.clamp(this.player.y+Math.sin(e.age)*260,100,this.world.height-100));
          e.x=pos.x;
          e.y=pos.y;
          for(let i=0;i<6+e.phase;i++)this.bullet(e.x,e.y,i*6.28/(6+e.phase),damage,'ice',{
            enemy:true,speed:.65,life:6
          });
          break;
          case 4:for(let i=0;i<7;i++)this.zone(e.x+Math.cos(a)*i*85,e.y+Math.sin(a)*i*85,75,damage,'fire',{
            enemy:true,delay:.5+i*.12,life:3.5,total:3.5
          });
          break;
          case 5:for(let i=0;i<e.phase+1;i++)this.spawn(Data.enemyTypes[40+i%8],{
            elite:i===0?8:-1
          });
          this.zone(this.player.x,this.player.y,160,damage*1.2,'lightning',{
            enemy:true,delay:1.5,life:1.8,total:1.8,once:true
          });
          break;
        }
      }
    }, updateProjectiles(dt){
      const ps=this.projectiles.active;
      for(let i=ps.length-1;i>=0;i--){
        const b=ps[i];
        b.ox=b.x;
        b.oy=b.y;
        b.x+=b.vx*dt;
        b.y+=b.vy*dt;
        b.life-=dt;
        b.age+=dt;
        let removed=b.life<=0||b.x<0||b.x>this.world.width||b.y<0||b.y>this.world.height;
        if(!removed){
          if(b.enemy){
            const p=this.player;
            if(segmentDistance(p.x,p.y,b.ox,b.oy,b.x,b.y)<p.r+b.r){
              this.incomingKind3='pociski';this.incomingEnemy3=b.enemySource3;
              this.hurt(b.damage,b.element,b.cause24||b.enemySource3?.name||'Pocisk przeciwnika');this.incomingKind3=null;this.incomingEnemy3=null;
              removed=true;
            }
          }
          else{
            this.grid.query((b.ox+b.x)/2,(b.oy+b.y)/2,70+Math.hypot(b.x-b.ox,b.y-b.oy),e=>{
              if(removed||b.hitIds.includes(e.id))return;
              if(segmentDistance(e.x,e.y,b.ox,b.oy,b.x,b.y)<e.r+b.r){
                b.hitIds.push(e.id);
                this.hit(e,b.damage,b.element,{source3:b.source3,basic:!!b.basic,crit:b.weapon23==='thornbow'&&b.weaponLevel23>=5?Math.random()<A.combatCrit25(this.stats,{id:b.weapon23,level:b.weaponLevel23}):undefined});
                this.weaponHit23?.(e,b);
                this.burst(b.x,b.y,colors[b.element],3,45);
                if(b.explosion)this.zone(b.x,b.y,b.explosion,b.damage*.6,b.element,{source3:b.source3,explosion3:true});
                if(b.puddle)this.zone(b.x,b.y,75,b.damage*.18,b.element,{
                  life:3,total:3,source3:b.source3
                });
                if(b.pierce--<=0)removed=true;
              }
            });
          }
        }
        if(removed)this.projectiles.remove(i);
      }
    }, updateZones(dt){
      const zones=this.zones.active;
      for(let i=zones.length-1;i>=0;i--){
        const z=zones[i];
        z.life-=dt;
        z.delay-=dt;
        if(z.life<=0){
          this.zones.remove(i);
          continue;
        }
        if(z.delay>0)continue;
        z.tick-=dt;
        if(z.pull){
          this.grid.query(z.x,z.y,z.r,e=>{
            const d=Math.hypot(e.x-z.x,e.y-z.y);
            if(d<z.r&&d>10&&!e.isBoss){
              this.world.move(e,(z.x-e.x)/d*z.pull*dt,(z.y-e.y)/d*z.pull*dt);
            }
          });
        }
        if(z.tick>0||z.done||z.visual)continue;
        z.tick=z.interval;
        if(z.once||z.total<=.4)z.done=true;
        if(z.enemy){
          if(Math.hypot(this.player.x-z.x,this.player.y-z.y)<z.r+this.player.r){this.incomingEnemy3=z.enemySource3;this.hurtFromField(z.damage,z.element,z.cause24||z.enemySource3?.name||'Pułapka przeciwnika');this.incomingEnemy3=null;}
        }
        else{
          this.grid.query(z.x,z.y,z.r+60,e=>{
            if(Math.hypot(e.x-z.x,e.y-z.y)<z.r+e.r){
              this.hit(e,z.damage,z.element,{
                crit:z.crit,secondary:true,source3:z.source3
              });
              if(z.root)e.status.root=z.root;
              if(z.rootWet&&e.status.water)e.status.root=.7;
              if(z.heal){const h=Math.min(z.heal,this.lifeBudget);this.player.hp=Math.min(this.stats.maxHp,this.player.hp+h);this.lifeBudget-=h;}
            }
          });
        }
        if(z.once){
          this.burst(z.x,z.y,colors[z.element],25,z.r);
          this.shake=Math.max(this.shake,5);
        }
      }
    }
  };
  function predict(x,v,t,max=2330){
    return U.clamp(x+(v||0)*t,70,max);
  }
  function segmentDistance(px,py,x1,y1,x2,y2){
    const dx=x2-x1,dy=y2-y1,d=dx*dx+dy*dy,t=d?U.clamp(((px-x1)*dx+(py-y1)*dy)/d,0,1):0;
    return Math.hypot(px-x1-t*dx,py-y1-t*dy);
  }
  A.Combat=Combat;
  A.colors=colors;
})(window.Aeren);

;

/* Module: js/game.js */
'use strict';
(function(A){
  const{
    U,Data,Save
  }=A;
  class Game{
    constructor(canvas){
      this.canvas=canvas;
      this.ctx=canvas.getContext('2d',{
        alpha:false
      });
      this.input=new A.Input(canvas);
      this.state='menu';
      this.camera={
        x:1400,y:1250
      };
      this.width=innerWidth;
      this.height=innerHeight;
      this.projectiles=new A.Pool(1400,()=>({
      }));
      this.particles=new A.Pool(650,()=>({
      }));
      this.numbers=new A.Pool(160,()=>({
      }));
      this.pickups=new A.Pool(650,()=>({
      }));
      this.zones=new A.Pool(110,()=>({
      }));
      this.lines=new A.Pool(90,()=>({
      }));
      this.grid=new A.Grid(110);
      this.enemies=[];
      this.familiars=[];
      this.uid=0;
      this.fps=60;
      this.debug=false;
      this.god=false;
      this.time=0;
      this.biome=0;
      this.seed=Math.floor(Math.random()*999999);
      this.world=new A.World(this.seed,0);
      this.player=this.makePlayer(Data.heroes[0]);
      this.stats={
      };
      this.recalculate();
      this.state='menu';
      this.shake=0;
      this.hitStop=0;
      this.resize();
      window.addEventListener('resize',()=>this.resize());
      window.addEventListener('blur',()=>{
        if(this.state==='playing')this.pause();
      });
      document.addEventListener('visibilitychange',()=>{
        if(document.hidden&&this.state==='playing')this.pause();
      });
    }
    makePlayer(hero){
      return{
        x:1400,y:1320,r:13,hp:hero.hp,hero,level:1,xp:0,nextXP:18,aim:-.3,skills:{
          [hero.skill]:1
        },active:[hero.skill],cooldowns:{
        },autoTimers:{
        },dashCd:0,dashing:0,invuln:0,attackCd:0,attackAnim:0,shots:0,guard:0,status:{
        },dot:0,orbitCd:0,treeTime:0,crownTime:0,terrainSlow:1,vx:0,vy:0,revived:false
      };
    }
    start(heroId,options={
    }){
      this.lastError=null;
      document.getElementById('toast').replaceChildren();
      this.seed=options.seed??Math.floor(Math.random()*999999999);
      this.biome=options.startBiome||0;
      this.world=new A.World(this.seed,this.biome);
      this.player=this.makePlayer(Data.heroes.find(h=>h.id===heroId)||Data.heroes[0]);
      this.camera.x=this.player.x;
      this.camera.y=this.player.y;
      this.enemies=[];
      this.familiars=[];
      for(const pool of [this.projectiles,this.particles,this.numbers,this.pickups,this.zones,this.lines])pool.clear();
      this.grid.clear();
      this.items=[];
      this.relics=[];
      this.mods={
      };
      this.gold=0;
      this.kills=0;
      this.bosses=this.biome;
      this.initialBiome=this.biome;
      this.earnedBosses=0;
      this.time=0;
      this.stageTime=0;
      this.difficulty=1;
      this.directorTimer=.6;
      this.directorPhase='Narastanie';
      this.spawnRate=1;
      this.hazardCd=0;
      this.lifeBudget=12;
      this.sfxCd=0;
      this.impactCd=0;
      this.hitStop=0;
      this.shake=0;
      this.boss=null;
      this.stageBossSpawned=false;
      this.miniSpawned=false;
      this.pendingLevels=0;
      this.choices=[];
      this.runSynergies=new Set();
      this.challenge=null;
      this.god=false;
      this.cheated=false;
      this.endSaved=false;
      this.modifier=options.modifier||'normal';
      this.alternate=!!options.alternate;
      if(this.modifier==='wild')this.mods={
        damage:.25,enemySpeed:.2,incoming:.2
      };
      if(this.alternate){
        this.mods.count=1;
        this.mods.damage=(this.mods.damage||0)-.18;
      }
      this.recalculate();
      this.player.hp=this.stats.maxHp;
      this.state='playing';
      this.input.clear();
      this.ui.hide();
      this.ui.buildHUD();
      A.Audio.init();
      this.ui.toast(this.world.biome.name,'Odnajdź skarby. Przetrwaj do przebudzenia strażnika.');
    }
    has(id){
      return this.player.skills[id]||0;
    }
    synergy(id){
      return this.runSynergies?.has(id)||false;
    }
    recalculate(){
      const p=this.player,h=p.hero;
      let s={
        maxHp:h.hp,damage:h.damage,rate:h.rate,speed:h.speed,crit:0,critDamage:h.id==='vesper'?1.95:1.8,armor:h.id==='orren'?18:0,cdr:0,area:h.id==='sol'?1.2:1,count:1,velocity:1,steal:0,dodge:h.id==='niva'?.1:0,luck:0,xp:h.id==='ilya'?1.15:1,gold:1,magnet:82,dash:1,incoming:1,enemySpeed:1
      };
      let mods={
        ...(this.mods||{
        })
      };
      const add=(stat,v)=>mods[stat]=(mods[stat]||0)+v;
      for(const a of Data.abilities)if(a.type==='passive'&&this.has(a.id))add(a.effect.stat,a.effect.value*this.has(a.id));
      for(const r of this.relics||[])for(const[k,v]of Object.entries(r.mods))add(k,v);
      for(const item of this.items||[])for(const[k,v]of Object.entries(item.mods))add(k,v);
      for(const[k,v]of Object.entries(mods)){
        if(['damage','rate','speed','area','velocity'].includes(k))s[k]*=Math.max(.2,1+v);
        else if(k==='maxHp'){
          if(Math.abs(v)<1)s.maxHp*=1+v;
          else s.maxHp+=v;
        }
        else if(k==='hpFlat')s.maxHp+=v;
        else if(k==='dash')s.dash*=Math.max(.25,1-v);
        else s[k]=(s[k]||0)+v;
      }
      // Fractional relic HP modifiers multiply the base after flat passive growth.
      let hpMult=1,hpFlat=0;
      for(const a of Data.abilities)if(a.type==='passive'&&a.effect.stat==='maxHp')hpFlat+=this.has(a.id)*a.effect.value;
      for(const r of this.relics||[]){
        hpMult*=1+(r.mods.maxHp||0);
        hpFlat+=r.mods.hpFlat||0;
      }
      s.maxHp=(h.hp+hpFlat)*hpMult;
      if(this.has('titan')){
        s.maxHp+=80;
        s.area*=1.3;
        s.speed*=.88;
      }
      s.maxHp=Math.max(25,Math.round(s.maxHp));
      s.armor=Math.max(0,s.armor);
      s.crit=U.clamp(s.crit,0,.85);
      s.dodge=U.clamp(s.dodge,0,.45);
      s.rate=U.clamp(s.rate,.5,16);
      s.count=U.clamp(Math.round(s.count),1,15);
      s.speed=U.clamp(s.speed,120,410);
      s.area=U.clamp(s.area,.4,2.5);
      s.cdr=U.clamp(s.cdr,0,3);
      s.gold=Math.max(.2,s.gold);
      s.xp=Math.max(.2,s.xp);
      this.stats=s;
      p.hp=Math.min(p.hp,s.maxHp);
      return s;
    }
    upgrade(id){
      const a=Data.byId[id];
      if(!a||this.has(id)>=a.max)return false;
      this.player.skills[id]=this.has(id)+1;
      if(a.type==='active'&&!this.player.active.includes(id)){
        if(this.player.active.length<3)this.player.active.push(id);
        else{
          this.pendingEquip=id;
          this.ui.equip(id);
          this.state='equip';
        }
      }
      const oldHp=this.stats.maxHp;
      this.recalculate();
      if(this.stats.maxHp>oldHp)this.player.hp+=this.stats.maxHp-oldHp;
      for(const s of Data.synergies)if(this.has(s.a)&&this.has(s.b)&&!this.runSynergies.has(s.id)){
        this.runSynergies.add(s.id);
        if(!Save.data.synergies.includes(s.id)){
          Save.data.synergies.push(s.id);
          Save.write();
        }
        this.ui.toast('Synergia: '+s.name,s.desc);
      }
      A.Audio.play('level');
      this.burst(this.player.x,this.player.y,'#eee0a5',35,200);
      return true;
    }
    gainXP(amount){
      const p=this.player;
      if(this.state==='results')return;
      p.xp+=amount*this.stats.xp;
      while(p.xp>=p.nextXP){
        p.xp-=p.nextXP;
        p.level++;
        p.nextXP=Math.round(15+8*Math.pow(p.level,1.28));
        this.pendingLevels++;
      }
      if(this.pendingLevels&&this.state==='playing')this.levelUp();
    }
    rollChoices(){
      const pool=Data.abilities.filter(a=>this.has(a.id)<a.max&&(a.id!=='chronos'||Save.data.unlocks.includes('chronos')));
      const picked=[];
      while(picked.length<4&&pool.length){
        const a=U.weighted(pool,a=>{
          const base=Data.rarity[a.rarity].weight;
          return base*(1+(a.rarity/4)*this.stats.luck)*(this.has(a.id)?1.8:1);
        });
        picked.push(a);
        pool.splice(pool.indexOf(a),1);
      }
      return picked;
    }
    levelUp(){
      this.pendingLevels--;
      this.state='levelup';
      this.choices=this.rollChoices();
      if(!this.choices.length){
        this.player.hp=Math.min(this.stats.maxHp,this.player.hp+20);
        this.state='playing';
        return;
      }
      this.ui.levelUp(this.choices);
      A.Audio.play('level');
      this.input.clear();
    }
    choose(id){
      if(this.state!=='levelup'||!this.choices.some(x=>x.id===id))return;
      this.choices=[];
      this.upgrade(id);
      if(this.state==='equip')return;
      this.resume();
    }
    resume(){
      this.state='playing';
      this.input.clear();
      this.ui.hide();
      if(this.pendingLevels>0)this.levelUp();
    }
    pause(){
      if(this.state!=='playing')return;
      this.state='paused';
      this.input.clear();
      this.ui.pause();
    }
    finish(win){
      if(this.endSaved)return;
      this.endSaved=true;
      this.state='results';
      this.input.clear();
      const cleared=this.bosses-this.initialBiome;
      const reward=this.cheated?0:Math.max(1,Math.floor(this.kills/18+this.time/80+cleared*12+(win?35:0)));
      this.result={
        win,reward,kills:this.kills,bosses:cleared,time:this.time,level:this.player.level,hero:this.player.hero.name,score:Math.round(this.kills+cleared*500+(win?2500:0)),seed:this.seed,practice:this.cheated
      };
      if(!this.cheated)Save.award(this.result);
      this.ui.results(this.result);
    }
    advance(){
      if(this.boss||this.bosses<=this.biome)return;
      if(this.biome===5){
        this.finish(true);
        return;
      }
      this.biome++;
      this.world=new A.World(this.seed,this.biome);
      this.player.x=this.world.spawn.x;
      this.player.y=this.world.spawn.y;
      this.player.invuln=2;
      this.player.status={
      };
      this.camera.x=this.player.x;
      this.camera.y=this.player.y;
      this.enemies=[];
      this.familiars=[];
      this.projectiles.clear();
      this.zones.clear();
      for(const item of [...this.pickups.active]){
        if(item.type==='xp')this.gainXP(item.value);
        if(item.type==='gold')this.gold+=Math.round(item.value*this.stats.gold);
      }
      this.pickups.clear();
      this.stageTime=0;
      this.stageBossSpawned=false;
      this.miniSpawned=false;
      this.directorTimer=3;
      this.challenge=null;
      if(this.state==='event')this.resume();
      this.ui.toast(this.world.biome.name,this.world.biome.subtitle);
    }
    director(dt){
      this.difficulty=1+this.time/500+this.biome*.3+this.player.level*.02;
      const phase=this.stageTime%85;
      this.directorPhase=phase<12?'Oddech':phase>65?'Natarcie':'Narastanie';
      this.spawnRate=(.75+this.time/400+this.biome*.3)*(phase<12?.3:phase>65?1.8:1)*(this.boss?.45:1);
      this.directorTimer-=dt;
      if(this.directorTimer<=0){
        this.directorTimer=1/this.spawnRate;
        const count=this.stageTime>180?2:1;
        for(let i=0;i<count;i++){
          const range=this.stageTime<35?2:4;
          this.spawn(Data.enemyTypes[this.biome*4+Math.floor(Math.random()*range)]);
        }
      }
      if(!this.miniSpawned&&this.stageTime>115){
        this.miniSpawned=true;
        this.spawn(Data.enemyTypes[this.biome*4+2],{
          mini:true,elite:this.biome%10
        });
        this.ui.toast('Pojawił się pradawny strażnik','Elitarny przeciwnik niesie cenny łup');
      }
      if(!this.stageBossSpawned&&this.stageTime>=240)this.spawnBoss();
      if(this.challenge){
        this.challenge.left-=dt;
        this.challenge.spawn-=dt;
        if(this.challenge.spawn<=0){
          this.challenge.spawn=1;
          this.spawn(Data.enemyTypes[this.biome*4+Math.floor(Math.random()*4)]);
        }
        if(this.challenge.left<=0){
          const event=this.challenge.event;
          this.challenge=null;
          event.used=false;
          event.type='reward';
          event.icon='♛';
          this.ui.toast('Próba zakończona','Odbierz nagrodę z areny');
        }
      }
    }
    update(dt){
      this.input.poll();

      if(A.Controls.tap(this.input,'pause')){
        if(this.state==='playing')this.pause();
        else if(this.state==='paused'||this.state==='build')this.resume();
        else if(this.state==='event'){
          this.currentEvent=null;
          this.resume();
        }
        else if(this.state==='settings'&&this.settingsBack==='pause'){
          this.state='paused';
          this.ui.pause();
        }
        else if(['codex','settings','heroes','meta'].includes(this.state))this.ui.menu();
      }
      if(this.state!=='playing'){
        this.input.pressed.clear();
        return;
      }
      const p=this.player,s=this.stats;
      this.time+=dt;
      this.stageTime+=dt;
      this.sfxCd-=dt;
      this.impactCd-=dt;
      this.lifeBudget=Math.min(A.lifeHealLimit,this.lifeBudget+A.lifeHealLimit*dt);
      p.invuln-=dt;
      p.guard-=dt;
      p.dashCd-=dt;
      p.attackCd-=dt;
      p.attackAnim-=dt;
      for(const k of Object.keys(p.cooldowns))p.cooldowns[k]-=dt;
      for(const k of Object.keys(p.status)){
        p.status[k]-=dt;
        if(p.status[k]<=0)delete p.status[k];
      }
      p.dot-=dt;
      if(p.dot<=0){
        p.dot=1;
        if(p.status.poison||p.status.fire){
          this.hurt(3,'dot');
          if(this.state!=='playing')return;
        }
      }
      if(A.Controls.tap(this.input,'auto')){
        Save.data.settings.auto=!Save.data.settings.auto;
        Save.write();
        this.ui.toast(Save.data.settings.auto?'Automatyczny atak włączony':'Atak ręczny','T przełącza tryb');
      }
      if(A.Controls.tap(this.input,'build')){
        this.state='build';
        this.ui.build();
        return;
      }
      const pad=this.input.pad;
      let mx=(A.Controls.down(this.input,'right')?1:0)-(A.Controls.down(this.input,'left')?1:0)+pad.x,my=(A.Controls.down(this.input,'down')?1:0)-(A.Controls.down(this.input,'up')?1:0)+pad.y;
      const len=Math.hypot(mx,my);
      if(len>1){
        mx/=len;
        my/=len;
      }
      if(Math.hypot(pad.aimX,pad.aimY)>.2)p.aim=Math.atan2(pad.aimY,pad.aimX);
      else if(this.input.mouse.used)p.aim=Math.atan2(this.aimPoint().y-p.y,this.aimPoint().x-p.x);
      else{
        const target=this.nearEnemies(740)[0];
        if(target)p.aim=U.angle(p,target);
      }
      if(A.Controls.tap(this.input,'dash'))this.dash();
      p.vx=mx*s.speed*p.terrainSlow*(p.status.ice?.65:1);
      p.vy=my*s.speed*p.terrainSlow*(p.status.ice?.65:1);
      if(p.dashing>0){
        p.dashing-=dt;
        p.vx=Math.cos(p.dashAngle)*900;
        p.vy=Math.sin(p.dashAngle)*900;
        this.burst(p.x,p.y,p.hero.color,1,20);
        if(p.dashing<=0&&this.has('comet')){A.SoundFX?.skill('comet');this.zone(p.x,p.y,155*s.area,s.damage*4,'fire');}
      }
      this.world.move(p,p.vx*dt,p.vy*dt);
      if(p.attackCd<=0&&(this.input.mouse.down||pad.attack||(Save.data.settings.auto&&this.nearEnemies(700).length))){
        this.basic();
        p.attackCd=1/s.rate;
      }
      for(let i=0;i<3;i++)if(A.Controls.tap(this.input,'skill'+i))if(p.active[i])this.cast(p.active[i]);
      if(A.Controls.tap(this.input,'ultimate'))this.castUltimate();
      if(A.Controls.tap(this.input,'interact')){
        const event=this.world.nearestEvent(p);
        if(event){
          this.interact(event);
          if(this.state!=='playing')return;
        }
      }
      this.world.update(this,dt);
      if(this.state!=='playing')return;
      this.director(dt);
      this.grid.clear();
      for(const e of this.enemies)if(e.hp>0)this.grid.insert(e);
      this.autoSkills(dt);
      this.updateEnemies(dt);
      if(this.state!=='playing')return;
      this.grid.clear();
      for(const e of this.enemies)if(e.hp>0)this.grid.insert(e);
      this.updateProjectiles(dt);
      if(this.state!=='playing')return;
      this.updateZones(dt);
      if(this.state!=='playing')return;
      this.updatePickups(dt);
      A.Audio.update(dt,this.biome);
      this.camera.x=U.lerp(this.camera.x,p.x+(this.look25?.x||0),1-Math.exp(-8*dt));
      this.camera.y=U.lerp(this.camera.y,p.y+(this.look25?.y||0),1-Math.exp(-8*dt));
      this.input.pressed.clear();
    }
    updatePickups(dt){
      for(let i=this.pickups.active.length-1;i>=0;i--){
        const e=this.pickups.active[i],p=this.player,d=U.dist(e,p);
        e.age+=dt;
        if(d<this.stats.magnet)e.magnet=true;
        if(e.magnet){
          e.x+=(p.x-e.x)*Math.min(1,dt*9);
          e.y+=(p.y-e.y)*Math.min(1,dt*9);
        }
        if(d<21){
          this.pickups.remove(i);
          if(e.type==='xp')this.gainXP(e.value);
          if(e.type==='gold')this.gold+=Math.round(e.value*this.stats.gold);
          if(e.type==='heal'){
            p.hp=Math.min(this.stats.maxHp,p.hp+e.value);
            this.number(p.x,p.y-35,'+'+e.value,'#bcec99');
          }
          if(e.type==='item'){
            const item=this.rollItem();
            this.items.push(item);
            this.recalculate();
            this.ui.toast(item.name,item.desc);
          }
          if(this.state!=='playing')break;
        }
      }
    }
    effects(dt){
      for(let i=this.particles.active.length-1;i>=0;i--){
        const p=this.particles.active[i];
        p.life-=dt;
        p.x+=p.vx*dt;
        p.y+=p.vy*dt;
        p.vy+=60*dt;
        if(p.life<=0)this.particles.remove(i);
      }
      for(let i=this.numbers.active.length-1;i>=0;i--){
        const n=this.numbers.active[i];
        n.life-=dt;
        n.y-=dt*30;
        if(n.life<=0)this.numbers.remove(i);
      }
      for(let i=this.lines.active.length-1;i>=0;i--){
        this.lines.active[i].life-=dt;
        if(this.lines.active[i].life<=0)this.lines.remove(i);
      }
      this.shake=Math.max(0,this.shake-dt*25);
    }
    rollItem(forcedRarity){
      const r=forcedRarity??U.weighted(Data.rarity,x=>x.weight*(1+Data.rarity.indexOf(x)*this.stats.luck)).id;
      const rarity=typeof r==='number'?r:Data.rarity.findIndex(x=>x.id===r);
      const attrs=[['damage','Siły',.05,'% obrażeń'],['cdr','Echa',.06,'% odnowienia'],['speed','Wichru',.035,'% szybkości ruchu'],['crit','Precyzji',.025,'% szansy krytyka'],['area','Horyzontu',.05,'% obszaru'],['luck','Losu',.09,'% szczęścia']];
      const a=U.pick(attrs),b=U.pick(attrs.filter(x=>x!==a)),mult=1+rarity*.65,mods={
        [a[0]]:a[2]*mult
      };
      let desc='+'+Math.round(a[2]*mult*100)+a[3];
      if(rarity>=2){
        mods[b[0]]=b[2]*mult*.7;
        desc+='; +'+Math.round(b[2]*mult*.7*100)+b[3];
      }
      return{
        name:U.pick(['Amulet','Pierścień','Talizman','Opaska'])+' '+a[1],mods,desc,rarity,icon:'◈'
      };
    }
    relicOptions(){
      const pool=Data.relics.filter((r,i)=>!this.relics.some(a=>a.id===r.id)&&(i<16||Save.data.unlocks.includes('relics')));
      return pool.sort(()=>Math.random()-.5).slice(0,3);
    }
    takeRelic(id){
      const r=Data.relics.find(r=>r.id===id);
      if(!r||this.relics.includes(r))return;
      this.relics.push(r);
      this.recalculate();
      this.ui.toast(r.name,r.desc);
    }
    interact(e){
      if(e.type==='portal'){
        this.advance();
        return;
      }
      if(e.type==='bossreward'){
        if(this.has(this.world.biome.reward)){
          e.type='reward';
          this.state='event';
          this.currentEvent=e;
          this.ui.event(e);
          return;
        }
        e.used=true;
        this.upgrade(this.world.biome.reward);
        if(this.state!=='equip')this.resume();
        return;
      }
      if(e.type==='fountain'){
        e.used=true;
        this.player.hp=this.stats.maxHp;
        this.player.status={
        };
        this.burst(e.x,e.y,'#b8f1d6',35);
        this.ui.toast('Źródło odnowy','Pełne zdrowie. Usunięto negatywne efekty.');
        return;
      }
      this.state='event';
      this.currentEvent=e;
      this.ui.event(e);
      A.Audio.play('chest');
    }
    eventAction(action){
      const e=this.currentEvent;
      if(!e||e.used)return;
      const p=this.player;
      let consume=true;
      if(action==='leave'){
        this.currentEvent=null;
        this.resume();
        return;
      }
      if(action==='loot'){
        this.gold+=Math.round(25*this.stats.gold);
        const item=this.rollItem(e.type==='treasure'?3:undefined);
        this.items.push(item);
        this.recalculate();
        this.ui.toast(item.name,item.desc);
        this.burst(e.x,e.y,'#f5d790',30);
      }
      if(action.startsWith('relic:'))this.takeRelic(action.slice(6));
      if(action==='curse'){
        p.hp=Math.max(1,p.hp*.6);
        const options=Data.abilities.filter(a=>a.type==='legendary'&&!this.has(a.id));
        if(options.length)this.upgrade(U.pick(options).id);
        else this.gold+=100;
      }
      if(action==='power'){
        this.mods.damage=(this.mods.damage||0)+.25;
        this.mods.enemySpeed=(this.mods.enemySpeed||0)+.2;
        this.recalculate();
      }
      if(action==='arena'){
        this.challenge={
          left:40,spawn:0,event:e
        };
        this.ui.toast('Próba odwagi','Przetrwaj 40 sekund wzmożonego natarcia');
      }
      if(action==='elite'){
        for(let i=0;i<3;i++)this.spawn(Data.enemyTypes[this.biome*4+i],{
          elite:Math.floor(Math.random()*10),x:e.x+U.rand(-120,120),y:e.y+U.rand(-120,120)
        });
        this.gold+=45;
        this.gainXP(30);
      }
      if(action==='npc'){
        this.gold+=20;
        for(const ev of this.world.events)this.world.reveal(ev.x,ev.y);
        this.ui.toast('Atlas wędrowca','Odkryto miejsca spotkań na minimapie');
      }
      if(action==='buyheal'){
        if(this.gold<30)return;
        this.gold-=30;
        p.hp=Math.min(this.stats.maxHp,p.hp+50);
        consume=false;
      }
      if(action==='buyitem'){
        if(this.gold<60)return;
        this.gold-=60;
        const item=this.rollItem(2);
        this.items.push(item);
        this.recalculate();
        this.ui.toast(item.name,item.desc);
        consume=false;
      }
      if(consume)e.used=true;
      this.currentEvent=null;
      if(this.state!=='equip')this.resume();
    }
    resize(){
      this.width=innerWidth;
      this.height=innerHeight;
      const scale=Math.min(devicePixelRatio||1,2)*(Save.data?.settings.scale||1);
      this.canvas.width=Math.round(this.width*scale);
      this.canvas.height=Math.round(this.height*scale);
      this.scale=scale;
    }
  }
  Object.assign(Game.prototype,A.Combat);
  A.Game=Game;
})(window.Aeren);

;

/* Module: js/game-v2.js */
'use strict';
(function(A){const {U,Data:D,Save:S}=A,Base=A.Game;
  const clone=o=>JSON.parse(JSON.stringify(o));
  class Game extends Base {
    start(heroId,options={}){
      this.modeId=D.modes[options.mode]?options.mode:'normal';this.mode=D.modes[this.modeId];
      this.mission=U.clamp(options.mission||0,0,5);
      if(!options.restoring&&this.mission>=(S.data.campaign?.[this.modeId]||1))return false;
      this.mastery=clone(S.data.mastery?.[heroId]||{});
      this.weapons=[];this.gearChoices=[];this.pendingGear=false;this.rewardStage=null;this.pendingReplacement=null;
      super.start(heroId,{seed:options.seed});
      this.world=new A.World(this.seed+this.mission*99871,0);
      this.weapons=[{id:this.player.hero.startWeapon,level:1,cd:0}];
      this.player.x=this.world.spawn.x;this.player.y=this.world.spawn.y;
      this.player.ultLevel=1;this.player.ultCd=12;this.player.ultPower=1;
      this.camera.x=this.player.x;this.camera.y=this.player.y;
      this.miniCount=0;this.rerolls=0;this.stationary=0;this.saveClock=0;this.lastSaved=0;this.castSerial=0;
      this.pressurePoint={x:this.player.x,y:this.player.y};this.pressureClock=0;
      this.recalculate();this.player.hp=this.stats.maxHp;this.lifeBudget=A.lifeHealLimit;
      document.getElementById('toast').replaceChildren();this.ui.buildHUD();this.ui.toast(D.missions[this.mission],`${this.mode.name} · runda 1/6 · zbieraj XP, nie stój w miejscu`);
      if(!options.restoring)this.saveRun();return true;
    }
    recalculate(){
      super.recalculate();const s=this.stats,p=this.player;const ranks=this.mastery||{};
      for(const node of D.mastery){const value=(ranks[node.id]||0)*node.value;
        if(node.stat==='maxHp')s.maxHp+=value;
        else if(['damage','speed','area','xp','rate'].includes(node.stat))s[node.stat]*=1+value;
        else s[node.stat]=(s[node.stat]||0)+value;
      }
      s.maxHp+=this.items?.reduce((n,x)=>n+(x.mods.hpFlat||0),0)||0;
      if(this.has('titan')){s.maxHp-=35;s.area/=1.3/1.2;}
      if(this.has('infinity'))s.rate*=1.12;
      s.damage=Math.min(s.damage,p.hero.damage*2.7);s.rate=Math.min(s.rate,p.hero.rate*1.8);
      s.crit=U.clamp(s.crit,0,.55);s.dodge=U.clamp(s.dodge,0,.25);s.armor=U.clamp(s.armor,0,70);
      s.cdr=U.clamp(s.cdr,0,.6);s.count=U.clamp(s.count,1,5);s.area=U.clamp(s.area,.5,1.8);s.steal=U.clamp(s.steal,0,.025);
      s.gold*=this.mode?.gold||1;s.xp*=this.mode?.xp||1;s.luck=Math.min(s.luck,1);
      s.weaponPower=1+(s.weaponPower||0);s.ultPower=1+(s.ultPower||0);s.maxHp=Math.round(Math.max(25,s.maxHp));
      p.hp=Math.min(p.hp,s.maxHp);return s;
    }
    upgrade(id){
      if(id==='ultimate'){if(this.player.ultLevel>=3)return false;this.player.ultLevel++;return true;}
      return super.upgrade(id);
    }
    gainXP(amount){const p=this.player;if(this.endSaved)return;p.xp+=amount*this.stats.xp;
      while(p.xp>=p.nextXP&&p.level<45){p.xp-=p.nextXP;p.level++;p.nextXP=Math.round(25+14*Math.pow(p.level,1.42));this.pendingLevels++;}
      if(p.level>=45)p.xp=Math.min(p.xp,p.nextXP-1);
      if(this.pendingLevels&&this.state==='playing')this.levelUp();
    }
    rollChoices(){
      const counts={};for(const id of Object.keys(this.player.skills)){const a=D.byId[id];if(a)counts[a.type]=(counts[a.type]||0)+1;}
      const caps={auto:4,passive:8,active:3,legendary:2};
      let pool=D.abilities.filter(a=>this.has(a.id)<a.max&&(this.has(a.id)||(counts[a.type]||0)<caps[a.type]));
      if(this.player.ultLevel<3)pool.push({id:'ultimate',name:this.player.hero.ultimate.name,icon:this.player.hero.ultimate.icon,type:'ultimate',rarity:2,max:3,desc:'Ulepsz moc F: +35% siły. Maksymalnie 3 poziomy. Cooldown pozostaje długi.'});
      const out=[];while(out.length<4&&pool.length){const a=U.weighted(pool,a=>D.rarity[a.rarity].weight*(this.has(a.id)?1.35:1));out.push(a);pool=pool.filter(x=>x!==a);}return out;
    }
    levelUp(){if(this.pendingLevels<=0)return;this.pendingLevels--;this.rewardStage='spell';this.pendingGear=true;this.state='levelup';this.choices=this.rollChoices();
      if(!this.choices.length){this.rewardStage='gear';this.openGear();return;}this.input.clear();this.ui.levelUp(this.choices);A.Audio.play('level');this.saveRun();
    }
    choose(id){if(this.state!=='levelup'||!this.choices.some(x=>x.id===id))return;this.choices=[];this.upgrade(id);this.rewardStage='gear';if(this.state==='equip'){this.saveRun();return;}this.openGear();}
    openGear(){this.state='gear';if(!this.gearChoices.length)this.gearChoices=this.rollGear();this.ui.gear(this.gearChoices);this.input.clear();this.saveRun();}
    rollItem(forcedRarity){
      const rarity=forcedRarity??D.rarity.indexOf(U.weighted(D.rarity,(r)=>r.weight*Math.pow((this.mode?.loot||1)*(1+this.stats.luck*.2),D.rarity.indexOf(r))));
      const t=U.pick(D.itemTemplates),level=1;return this.itemStats({id:t.id,name:t.name,icon:t.icon,rarity,level,kind:'item'});
    }
    itemStats(item){const t=D.itemTemplates.find(t=>t.id===item.id);const v=t.value*(1+item.rarity*.45)*(1+(item.level-1)*.22);item.mods={[t.stat]:v};item.desc=`+${['armor','hpFlat'].includes(t.stat)?Math.round(v):Math.round(v*1000)/10}${['armor','hpFlat'].includes(t.stat)?'':'%'} ${({damage:'obrażeń',rate:'ataku',armor:'pancerza',hpFlat:'HP',cdr:'odnowienia',crit:'krytyka',speed:'ruchu',area:'obszaru',steal:'kradzieży życia',luck:'szczęścia'})[t.stat]}.`;return item;}
    rollGear(){
      const pool=D.weapons.filter(w=>(!w.owner||w.owner===this.player.hero.id)&&!this.weapons.some(o=>o.id===w.id&&o.level>=w.max));
      const out=[];if(pool.length){const w=U.weighted(pool,w=>D.rarity[w.rarity].weight*Math.pow(this.mode.loot*(1+this.stats.luck*.2),w.rarity)*(this.weapons.some(o=>o.id===w.id)?2:1));out.push({...w,kind:'weapon',level:(this.weapons.find(o=>o.id===w.id)?.level||0)+1});}
      while(out.length<3){const item=this.rollItem();const owned=this.items.find(i=>i.id===item.id);if(owned){item.level=Math.min(5,owned.level+1);item.rarity=Math.max(item.rarity,owned.rarity);this.itemStats(item);}if(out.some(x=>x.id===item.id))continue;out.push(item);}
      return out;
    }
    chooseGear(index){if(this.state!=='gear')return;const reward=this.gearChoices[index];if(!reward)return;
      if(reward.kind==='weapon'){
        const existing=this.weapons.find(w=>w.id===reward.id);
        if(existing)existing.level=Math.min(5,existing.level+1);
        else if(this.weapons.length<3)this.weapons.push({id:reward.id,level:1,cd:0});
        else{this.pendingReplacement=clone(reward);this.state='replace';this.ui.replace('weapon');this.saveRun();return;}
      }else{
        const i=this.items.findIndex(x=>x.id===reward.id);
        if(i>=0)this.items[i]=clone(reward);
        else if(this.items.length<6)this.items.push(clone(reward));
        else{this.pendingReplacement=clone(reward);this.state='replace';this.ui.replace('item');this.saveRun();return;}
      }
      this.completeReward();
    }
    replaceGear(index){if(this.state!=='replace'||!this.pendingReplacement)return;const r=this.pendingReplacement;
      if(index===0&&r.kind==='weapon')return;
      if(index>=0){const list=r.kind==='weapon'?this.weapons:this.items;if(index>=list.length)return;list[index]=r.kind==='weapon'?{id:r.id,level:1,cd:0}:clone(r);}
      this.pendingReplacement=null;this.completeReward();
    }
    completeReward(){this.gearChoices=[];this.pendingGear=false;this.rewardStage=null;this.recalculate();this.resume();this.saveRun();}
    reroll(){if(this.state!=='gear'||this.rerolls>=2)return;const price=75+this.player.level*12;if(this.gold<price)return;this.gold-=price;this.rerolls++;this.gearChoices=this.rollGear();this.ui.gear(this.gearChoices);this.saveRun();}
    resume(){
      if(this.pendingReplacement){this.state='replace';this.ui.replace(this.pendingReplacement.kind);return;}
      if(this.pendingGear&&this.rewardStage==='gear'){this.openGear();return;}
      super.resume();
    }
    pause(){if(this.state!=='playing')return;super.pause();this.saveRun();}
    finish(win){if(this.endSaved)return;const cleared=this.bosses;const reward=this.cheated?0:Math.round((Math.min(30,Math.floor(this.kills/10))+Math.min(8,Math.floor(this.time/20))+cleared*8+Math.min(15,Math.floor(this.gold/90))+(win?35:0))*this.mode.reward*(1+this.mission*.12)*1.45);
      this.endSaved=true;this.state='results';this.input.clear();this.result={win,reward,kills:this.kills,bosses:cleared,time:this.time,level:this.player.level,hero:this.player.hero.name,heroId:this.player.hero.id,score:Math.round(this.kills+cleared*500+(win?2500:0)),seed:this.seed,practice:this.cheated,mission:this.mission,mode:this.modeId};
      if(!this.cheated){if(win)S.data.campaign[this.modeId]=Math.max(S.data.campaign[this.modeId]||1,Math.min(6,this.mission+2));S.award(this.result);}S.clearRun();this.ui.results(this.result);
    }
    advance(){if(this.boss||this.bosses<=this.biome)return;if(this.biome===5){this.finish(true);return;}
      this.biome++;this.world=new A.World(this.seed+this.mission*99871,this.biome);Object.assign(this.player,this.world.spawn);this.player.invuln=2;this.player.status={};
      this.player.hp=Math.min(this.stats.maxHp,this.player.hp+this.stats.maxHp*.1+(this.stats.recovery||0));
      this.enemies=[];this.familiars=[];this.grid.clear();this.projectiles.clear();this.zones.clear();this.pickups.clear();this.stageTime=0;this.stageBossSpawned=false;this.miniCount=0;this.rerolls=0;this.directorTimer=2;this.challenge=null;this.stationary=0;
      this.camera.x=this.player.x;this.camera.y=this.player.y;this.ui.toast(this.world.biome.name,`Misja ${this.mission+1} · runda ${this.biome+1}/6`);this.saveRun();
    }
    director(dt){
      this.difficulty=(1+this.mission*.22)*(1+this.biome*.23+this.stageTime/420)*this.mode.hp;
      const cycle=this.stageTime%65;this.directorPhase=cycle<8?'Oddech':cycle>47?'Natarcie':'Polowanie';
      this.spawnRate=(.8+this.biome*.25+Math.min(1.1,this.stageTime/200)+this.mission*.16)*this.mode.spawn*(cycle<8?.6:cycle>47?1.5:1)*(this.boss?.35:1)*this.openingScale('spawn');
      this.directorTimer-=dt;if(this.directorTimer<=0){this.directorTimer=1/this.spawnRate;const count=this.stageTime>150?2:1;for(let i=0;i<count;i++){const range=this.stageTime<25?3:this.stageTime<65?5:8;this.spawn(D.enemyTypes[this.biome*8+Math.floor(Math.random()*range)]);}}
      if(this.miniCount<3&&this.stageTime>[65,135,205][this.miniCount]){const i=this.miniCount++;const e=this.spawn(D.enemyTypes[this.biome*8+[2,5,6][i]],{mini:true,elite:[4,8,9][i]});if(e)e.name=['Egzekutor','Arcykapłan','Bestia'][i]+' · '+this.world.biome.name;this.ui.toast('Mini-boss: '+(e?.name||'Strażnik'),'Unikaj jego dodatkowych ataków obszarowych.');}
      if(!this.stageBossSpawned&&this.stageTime>=240)this.spawnBoss();
      // Ground attacks belong to enemies; standing still never creates hazards.
      if(this.challenge){this.challenge.left-=dt;this.challenge.spawn-=dt;if(this.challenge.spawn<=0){this.challenge.spawn=.8;this.spawn(D.enemyTypes[this.biome*8+Math.floor(Math.random()*8)]);}if(this.challenge.left<=0){this.challenge=null;this.gold+=60;this.gainXP(30);this.ui.toast('Próba zakończona','60 złota i 30 XP. Przedmioty wybierasz przy awansie.');}}
    }
    interact(e){if(e.type==='portal'){this.advance();return;}if(e.type==='fountain'){e.used=true;this.player.hp=Math.min(this.stats.maxHp,this.player.hp+this.stats.maxHp*.35);this.player.status={};this.saveRun();this.ui.toast('Źródło odnowy','Odzyskano 35% maksymalnego HP.');return;}
      if(!['shrine','arena','npc','elite'].includes(e.type))return;this.state='event';this.currentEvent=e;this.ui.event(e);this.saveRun();
    }
    eventAction(action){const e=this.currentEvent;if(!e||e.used)return;if(action==='leave'){this.currentEvent=null;this.resume();this.saveRun();return;}
      if(action==='power'){this.mods.damage=(this.mods.damage||0)+.06;this.mods.enemySpeed=(this.mods.enemySpeed||0)+.12;this.recalculate();}
      else if(action==='arena'){this.challenge={left:40,spawn:0,event:e};}
      else if(action==='npc'){for(const x of this.world.events)this.world.reveal(x.x,x.y);this.gold+=15;}
      else if(action==='elite'){this.spawn(D.enemyTypes[this.biome*8+6],{mini:true,elite:8});this.gold+=25;}
      else return;
      e.used=true;this.currentEvent=null;this.resume();this.saveRun();
    }
    update(dt){const before=this.state;super.update(dt);if(this.state==='playing'){
      this.player.ultCd=Math.max(0,this.player.ultCd-dt);this.updateWeapons(dt);
      this.saveClock+=dt;if(this.saveClock>=10){this.saveClock=0;this.saveRun();}
    }else if(before==='playing'&&this.state!=='results')this.saveRun();}
    updatePickups(dt){for(let i=this.pickups.active.length-1;i>=0;i--)if(this.pickups.active[i].type==='item')this.pickups.remove(i);super.updatePickups(dt);}
    saveRun(){
      if(!this.mode||this.endSaved||!this.weapons?.length||this.player.hp<=0)return false;
      const fields=['seed','mission','modeId','biome','time','stageTime','gold','kills','bosses','uid','stageBossSpawned','miniCount','directorTimer','pendingLevels','pendingGear','rewardStage','pendingReplacement','pendingEquip','gearChoices','choices','weapons','items','relics','mods','mastery','cheated','rerolls','stationary','castSerial'];
      const snap={version:2,savedAt:Date.now(),hero:this.player.hero.id,state:this.state,player:{...this.player,hero:undefined},world:{events:this.world.events,fog:Array.from(this.world.fog)},enemies:this.enemies,runSynergies:[...this.runSynergies],familiars:this.familiars,challenge:this.challenge,currentEvent:this.currentEvent?.id};
      for(const k of fields)snap[k]=this[k];for(const name of ['projectiles','pickups','zones'])snap[name]=this[name].active;
      const ok=S.writeRun(snap);if(ok)this.lastSaved=Date.now();else if(!this.saveWarning){this.saveWarning=true;this.ui.toast('Autozapis niedostępny','Pamięć przeglądarki jest pełna lub zablokowana.');}return ok;
    }
    loadRun(){const r=S.readRun();if(!r)return false;this.start(r.hero,{seed:r.seed,mission:r.mission,mode:r.modeId,restoring:true});
      for(const k of ['seed','mission','modeId','biome','time','stageTime','gold','kills','bosses','uid','stageBossSpawned','miniCount','directorTimer','pendingLevels','pendingGear','rewardStage','pendingReplacement','pendingEquip','gearChoices','choices','weapons','items','relics','mods','mastery','cheated','rerolls','stationary','castSerial'])if(r[k]!==undefined)this[k]=r[k];
      this.mode=D.modes[this.modeId];this.player={...r.player,hero:D.heroes.find(h=>h.id===r.hero)};this.world=new A.World(this.seed+this.mission*99871,this.biome);this.world.events=r.world.events;this.world.fog.set(r.world.fog.slice(0,this.world.fog.length));this.enemies=r.enemies||[];this.boss=this.enemies.find(e=>e.isBoss&&e.hp>0)||null;this.familiars=r.familiars||[];this.runSynergies=new Set(r.runSynergies||[]);this.challenge=r.challenge;if(this.challenge)this.challenge.event=this.world.events.find(e=>e.id===this.challenge.event.id);this.currentEvent=this.world.events.find(e=>e.id===r.currentEvent);
      for(const name of ['projectiles','pickups','zones']){this[name].clear();for(const x of (r[name]||[]).slice(0,this[name].max))this[name].get(x);}
      this.grid.clear();for(const e of this.enemies)this.grid.insert(e);this.camera.x=this.player.x;this.camera.y=this.player.y;this.recalculate();this.god=false;this.endSaved=false;this.ui.buildHUD();this.lastSaved=r.savedAt;
      if(r.state==='levelup'){this.state='levelup';this.ui.levelUp(this.choices);}
      else if(r.state==='gear'){this.state='gear';this.ui.gear(this.gearChoices);}
      else if(r.state==='replace'){this.state='replace';this.ui.replace(this.pendingReplacement.kind);}
      else if(r.state==='event'&&this.currentEvent){this.state='event';this.ui.event(this.currentEvent);}
      else if(r.state==='equip'&&this.pendingEquip){this.state='equip';this.ui.equip(this.pendingEquip);}
      else{this.state='paused';this.ui.pause();}
      this.input.clear();return true;
    }
  }
  A.Game=Game;
})(window.Aeren);


;

/* Module: js/combat-v2.js */
'use strict';
(function(A){const {U,Data:D}=A,P=A.Game.prototype,base=A.Combat;
  Object.assign(P,{
    spawn(type,opts={}){
      const e=base.spawn.call(this,type,opts);if(!e)return null;
      if(!e.isBoss){const factor=(this.mode?.hp||1.15)*(1+(this.mission||0)*.15)*this.openingScale('hp');e.hp*=factor;e.maxHp=e.hp;}
      e.damage*=(this.mode?.damage||1)*(1+(this.mission||0)*.10)*this.openingScale('damage');e.speed*=this.mode?.speed||1;
      e.extraCd=U.rand(1.5,3.5);return e;
    },
    spawnBoss(){
      if(this.boss||this.bosses>this.biome)return;const b=this.world.biome;
      const hp=(2000+this.biome*550+this.mission*700)*this.mode.hp*(1+this.player.level*.012);
      const type={id:'boss'+this.biome,name:b.boss,ai:'boss',hp,speed:70+this.mission*3,damage:24+this.biome*4,r:48,color:b.accent};
      this.boss=this.spawn(type,{x:this.world.center.x,y:this.world.center.y-70,hp,maxHp:hp,elite:-1,isBoss:true,cd:2,attackIndex:0});this.stageBossSpawned=true;this.shake=9;A.Audio.play('boss');this.ui.toast(b.boss,'Strażnik · trzy fazy · mniejsze leczenie po zwycięstwie');this.saveRun();
    },
    kill(e,depth=0){
      if(e.dead)return;const oldHp=this.player.hp;const old=this.world.events.length;
      base.kill.call(this,e,depth);
      if(e.isBoss){this.world.events.splice(old);this.player.hp=Math.min(this.stats.maxHp,oldHp+this.stats.maxHp*.12);this.ui.toast('Strażnik pokonany','Przejdź do bramy ◎. Nagrody za wyposażenie otrzymujesz przy awansach.');this.saveRun();}
      if(e.type.ai==='splitter'&&!e.duplicate)for(let i=0;i<2;i++)this.spawn(D.enemyTypes[this.biome*8],{x:e.x+(i?25:-25),y:e.y,elite:-1,duplicate:true,hp:e.maxHp*.18,maxHp:e.maxHp*.18,r:9});
    },
    drop(x,y,type,value){if(type==='item')return;let amount=value;if(type==='xp')amount=Math.max(1,Math.round(value*.65));if(type==='heal'&&Math.random()<.55)return;base.drop.call(this,x,y,type,amount);},
    basic(){this.player.attackAnim=.14;},
    updateWeapons(dt){
      const p=this.player,s=this.stats,target=this.nearEnemies(720)[0];
      for(const w of this.weapons){w.cd-=dt;if(w.cd>0||!(A.Controls.down(this.input,'attack')||this.input.pad.attack||(A.Save.data.settings.auto&&target)))continue;
        const d=D.weaponById[w.id],a=A.Save.data.settings.autoAim!==false&&target?U.angle(p,target):U.angle(p,this.aimPoint()),level=w.level,damage=s.damage*d.power*(1+(level-1)*.18)*s.weaponPower;
        w.cd=Math.max(.32,d.interval/(1.12*s.rate/p.hero.rate));p.attackAim=a;let count=Math.min(7,s.count+(d.id==='daggers'?1:d.id==='orb'?2:0)+(p.hero.id==='ilya'&&p.shots%5===4?2:0));
        const element=this.has('prism')?['fire','ice','lightning','poison'][p.shots%4]:d.element;
        for(let i=0;i<count;i++){
          const angle=a+(i-(count-1)/2)*.11;
          this.bullet(p.x+Math.cos(angle)*18,p.y+Math.sin(angle)*18,angle,damage/Math.pow(count,.22),element,{basic:true,style:d.id,life:['daggers','vines'].includes(d.id)?.65:1.35,r:['hammer','cinder'].includes(d.id)?10:5,pierce:d.id==='void'?5:['crossbow','scythe'].includes(d.id)?2:d.id==='bow'&&level>=3?1:0,explosion:d.id==='cinder'?78:d.id==='hammer'?42:d.id==='staff'&&level>=3?58:0});
        }
        if(d.id==='stormrod'&&target){this.chain(target,damage*.3,1+Math.floor(level/2));}
        p.shots++;p.attackAnim=.18;A.Audio.play('attack');
      }
    },
    cast(id){if(this.state!=='playing')return;const before=this.player.cooldowns[id]||0;base.cast.call(this,id);if(before<=0&&(this.player.cooldowns[id]||0)>0){this.castSerial++;this.castFX={id,time:.45};}},
    castUltimate(){
      const p=this.player;if(this.state!=='playing'||p.ultCd>0)return;
      const spec=p.hero.ultimate,l=p.ultLevel,power=A.ultimatePower(l)*this.stats.ultPower,d=this.stats.damage*power;
      p.ultCd=Math.max(40,spec.cd/(1+this.stats.cdr*.3));this.castSerial++;this.shake=10;this.burst(p.x,p.y,p.hero.color,48,230);A.Audio.play('boss');
      const t=this.aimPoint(),targets=this.nearPoint(t,300,8);
      if(p.hero.id==='ilya'){for(let i=0;i<3;i++)this.zone(t.x,t.y,200+i*65,d*(2+i*.3),'nature',{delay:i*.6,life:.4+i*.6,total:.4+i*.6,once:true,root:1.5});this.summon(3,8);}
      if(p.hero.id==='sol')for(let i=0;i<7;i++){const a=i*2.4,r=i?100+i*15:0;this.zone(t.x+Math.cos(a)*r,t.y+Math.sin(a)*r,105,d*3,'fire',{delay:.6+i*.12,life:1+i*.12,total:1+i*.12,once:true});}
      if(p.hero.id==='niva'){for(const e of targets){e.status.ice=5;if(!e.isBoss&&!e.mini)e.status.root=2;}for(let ring=0;ring<3;ring++)for(let i=0;i<14;i++)this.bullet(t.x,t.y,i*6.28/14+ring*.15,d*1.4,'ice',{style:'iceblade',speed:.7+ring*.2,pierce:2,life:1.8});this.zone(t.x,t.y,280,d*2,'ice',{once:true});}
      if(p.hero.id==='orren'){p.invuln=3;for(let i=0;i<3;i++)this.zone(t.x,t.y,150+i*85,d*3,'stone',{delay:i*.55,life:.4+i*.55,total:.4+i*.55,once:true});}
      if(p.hero.id==='vesper'){p.invuln=1.2;for(let i=0;i<8;i++){const e=targets[i%Math.max(1,targets.length)];if(e){this.lines.get({x:p.x,y:p.y,x2:e.x,y2:e.y,life:.6,color:'#e5a8f3'});this.hit(e,d*1.9,'poison',{crit:true});}}this.zone(t.x,t.y,200,d,'blood',{once:true});}
    },
    updateEnemies(dt){base.updateEnemies.call(this,dt);const p=this.player;
      for(const e of this.enemies){if(e.hp<=0)continue;this._enemySource=e;e.extraCd-=dt;
        if(e.extraCd<=0){e.extraCd=e.mini?4:5+Math.random()*2;const a=U.angle(e,p);
          if(e.mini||e.type.ai==='artillery')for(let i=0;i<(e.mini?3:1);i++)this.zone(p.x+Math.cos(a+1.57)*(i-1)*95,p.y+Math.sin(a+1.57)*(i-1)*95,60,e.damage*.85,'fire',{enemy:true,delay:1.25,life:1.65,total:1.65,once:true});
          if(e.type.ai==='trapper')this.zone(p.x,p.y,85,e.damage*.7,'poison',{enemy:true,delay:1,life:4,total:4});
          if(e.type.ai==='leaper'){const pt=this.world.freePoint(p.x-Math.cos(a)*65,p.y-Math.sin(a)*65);this.zone(pt.x,pt.y,85,e.damage,'stone',{enemy:true,delay:1.1,life:1.5,total:1.5,once:true});e.leapTarget=pt;e.leapWait=1.1;}
          if(e.type.ai==='siphon'&&U.dist(e,p)<220){this.zone(e.x,e.y,180,e.damage*.7,'blood',{enemy:true,delay:.8,life:1.1,total:1.1,once:true});e.hp=Math.min(e.maxHp,e.hp+e.maxHp*.04);}
        }
        if(e.leapWait>0){e.leapWait-=dt;if(e.leapWait<=0)Object.assign(e,e.leapTarget);}
      }
      this._enemySource=null;
    },
    nearEnemies(radius,count=1){const p=this.player;if(count===1){let best=null,d=radius*radius;for(const e of this.enemies){const dd=(e.x-p.x)**2+(e.y-p.y)**2;if(e.hp>0&&dd<d){d=dd;best=e;}}return best?[best]:[];}return base.nearEnemies.call(this,radius,count);}
  });
})(window.Aeren);

;

/* Module: js/render.js */
'use strict';
(function(A){
  const{
    U,colors
  }=A;
  const TAU=Math.PI*2;
  class Renderer{
    constructor(game){
      this.g=game;
      this.cachedWorld=null;
      this.map=null;
      this.ambient=0;
    }
    ground(world){
      this.cachedWorld=world;
      const cv=document.createElement('canvas');
      cv.width=world.width;
      cv.height=world.height;
      const c=cv.getContext('2d'),b=world.biome,r=U.rng(world.seed+world.index*313);
      c.fillStyle=b.ground;
      c.fillRect(0,0,cv.width,cv.height);
      for(let i=0;i<460;i++){
        const x=r()*2800,y=r()*2400,rr=30+r()*220;
        const grad=c.createRadialGradient(x,y,0,x,y,rr);
        grad.addColorStop(0,i%3?b.light+'4a':b.dark+'50');
        grad.addColorStop(1,i%3?b.light+'00':b.dark+'00');
        c.fillStyle=grad;
        c.fillRect(x-rr,y-rr,rr*2,rr*2);
      }
      // Meandering streams and worn paths create a readable exploratory landscape.
      c.lineCap='round';
      c.lineJoin='round';
      for(let river=0;river<2;river++){
        c.beginPath();
        c.moveTo(river?2450:180,-80);
        c.bezierCurveTo(river?2100:700,550,river?2580:160,950,river?2180:360,1400);
        c.bezierCurveTo(river?1810:610,1800,river?2420:80,2100,river?2290:220,2480);
        c.strokeStyle=b.dark+'66';
        c.lineWidth=160;
        c.stroke();
        c.strokeStyle=b.water;
        c.lineWidth=129;
        c.stroke();
        c.strokeStyle='#e1edd223';
        c.lineWidth=98;
        c.stroke();
        c.strokeStyle='#e0f8dd49';
        c.lineWidth=3;
        c.stroke();
      }
      for(const p of world.paths){
        c.beginPath();
        c.moveTo(1400,1200);
        c.quadraticCurveTo((1400+p.x)/2+90,(1200+p.y)/2-40,p.x,p.y);
        c.strokeStyle='#d1c18a30';
        c.lineWidth=88;
        c.stroke();
        c.strokeStyle='#d4c89226';
        c.lineWidth=51;
        c.stroke();
      }
      for(let i=0;i<19000;i++){
        const x=r()*2800,y=r()*2400;
        c.fillStyle=i%4===0?'#eaf0ac28':i%3===0?b.dark+'27':'#365b3020';
        c.fillRect(x,y,1+r()*3,1+r()*2);
      }
      // The circular sanctuary is a navigational landmark, not a copied symbol.
      U.ellipse(c,1400,1180,245,178,b.dark+'45');
      U.ellipse(c,1400,1168,233,164,'#b8b999');
      U.ellipse(c,1400,1161,214,151,'#c3c4a3');
      c.strokeStyle='#778c77';
      c.lineWidth=3;
      for(let ring=0;ring<3;ring++){
        c.beginPath();
        c.ellipse(1400,1160,202-ring*47,140-ring*32,0,0,TAU);
        c.stroke();
      }
      for(let i=0;i<12;i++){
        const a=i*TAU/12;
        c.beginPath();
        c.moveTo(1400+Math.cos(a)*110,1160+Math.sin(a)*76);
        c.lineTo(1400+Math.cos(a)*215,1160+Math.sin(a)*148);
        c.stroke();
      }
      for(const d of world.decor)if(d.type==='floor'){
        c.fillStyle='#b4b89b';
        c.fillRect(d.x-d.size*100,d.y-d.flip*100,d.size*200,d.flip*200);
        c.strokeStyle='#737f673c';
        c.lineWidth=1;
        for(let x=d.x-d.size*100;x<d.x+d.size*100;x+=30){
          c.beginPath();
          c.moveTo(x,d.y-d.flip*100);
          c.lineTo(x,d.y+d.flip*100);
          c.stroke();
        }
      }
      this.map=cv;
    }
    render(dt){
      const g=this.g,c=g.ctx,w=g.width,h=g.height;
      this.ambient+=dt;
      if(this.cachedWorld!==g.world)this.ground(g.world);
      c.setTransform(g.scale,0,0,g.scale,0,0);
      c.clearRect(0,0,w,h);
      const menu=['menu','heroes','meta','codex'].includes(g.state)||(g.state==='settings'&&g.settingsBack!=='pause');
      if(menu){
        g.camera.x=g.world.center.x-190+Math.sin(this.ambient*.08)*35;
        g.camera.y=g.world.center.y+15;
      }
      const shake=g.shake*A.Save.data.settings.shake;
      const zoom=this.zoom25||1,ox=w/(2*zoom)-g.camera.x+U.rand(-shake,shake),oy=h*.54/zoom-g.camera.y+U.rand(-shake,shake);
      this.ox=ox;
      this.oy=oy;
      c.save();
      c.scale(zoom,zoom);
      c.translate(ox,oy);
      c.fillStyle=g.world.biome.dark;
      c.fillRect(-ox,-oy,w/zoom,h/zoom);
      c.drawImage(this.map,0,0);
      const minX=-ox-150,maxX=w/zoom-ox+150,minY=-oy-230,maxY=h/zoom-oy+180;
      const visible=(x,y)=>x>minX&&x<maxX&&y>minY&&y<maxY;
      for(const z of g.world.hazards)if(visible(z.x,z.y))this.hazard(c,z,g.time||this.ambient);
      for(const d of g.world.decor)if(visible(d.x,d.y)&&['grass','flower'].includes(d.type))this.plant(c,d);
      for(const z of g.zones.active)if(visible(z.x,z.y))this.zone(c,z);
      const artSlice=!!A.ArtSlice&&g.world.index>=0&&g.world.index<6;
      if(!artSlice)for(const event of g.world.events)if(visible(event.x,event.y))this.event(c,event);
      // Y-sorted actors and vegetation provide depth without a 3D dependency.
      c.strokeStyle='#f4ebbd9c';
      c.lineWidth=1.5;
      c.beginPath();
      c.ellipse(g.player.x,g.player.y+5,22,11,0,0,TAU);
      c.stroke();
      const layer=[];
      if(artSlice)for(const event of g.world.events)if(visible(event.x,event.y))layer.push({y:event.y,type:'event',ref:event});
      for(const d of g.world.decor)if(visible(d.x,d.y)&&(d.type==='tree'||d.type==='stone'))layer.push({
        y:d.y,type:'decor',ref:d
      });
      for(const wall of g.world.walls)if(!wall.round&&visible(wall.x,wall.y))layer.push({
        y:wall.y+wall.h,type:'wall',ref:wall
      });
      for(const e of g.enemies)if(visible(e.x,e.y))layer.push({
        y:e.y,type:'enemy',ref:e
      });
      layer.push({
        y:g.player.y,type:'player',ref:g.player
      });
      layer.push({
        y:g.world.center.y-80,type:'monument'
      });
      layer.sort((a,b)=>a.y-b.y);
      for(const entry of layer){
        if(entry.type==='event')this.event(c,entry.ref);
        else if(entry.type==='decor')this.decor(c,entry.ref);
        else if(entry.type==='wall')this.wall(c,entry.ref);
        else if(entry.type==='enemy')this.enemy(c,entry.ref);
        else if(entry.type==='player')this.player(c,entry.ref);
        else this.monument(c);
      }
      for(const p of g.pickups.active){
        if(!visible(p.x,p.y))continue;
        const y=p.y+Math.sin(this.ambient*4+p.x)*3;
        if(p.type==='xp'){
          U.poly(c,[[p.x,y-5],[p.x+4,y],[p.x,y+5],[p.x-4,y]],'#c0edcf');
        }
        else if(p.type==='gold'){
          U.circle(c,p.x,y,4,'#dfb75f');
          U.circle(c,p.x-1,y-1,1.5,'#fff3b5');
        }
        else{
          c.fillStyle=p.type==='heal'?'#f2bea2':'#e9d7fa';
          c.font='bold 19px Georgia';
          c.textAlign='center';
          c.fillText(p.type==='heal'?'♥':'◈',p.x,y);
        }
      }
      for(const b of g.projectiles.active)this.drawProjectile(c,b);
      const l=g.has('orbit');
      if(l){
        for(let i=0;i<l+1;i++){
          const a=g.time*2.2+i*TAU/(l+1),x=g.player.x+Math.cos(a)*92*g.stats.area,y=g.player.y+Math.sin(a)*92*g.stats.area;
          c.save();
          c.translate(x,y);
          c.rotate(a+Math.PI/4);
          U.poly(c,[[-5,0],[0,-15],[5,0],[0,15]],'#edd9fc');
          c.restore();
        }
      }
      for(const f of g.familiars)this.spirit(c,f.x,f.y,f.angle);
      if(g.has('familiar'))for(let i=0;i<1+Math.floor((g.has('familiar')-1)/2);i++)this.spirit(c,g.player.x+Math.cos(g.time+i*2)*60,g.player.y+Math.sin(g.time+i*2)*60,g.time);
      for(const l of g.lines.active){
        c.strokeStyle=l.color;
        c.lineWidth=2;
        c.globalAlpha=Math.min(1,l.life*6);
        c.beginPath();
        c.moveTo(l.x,l.y);
        for(let j=1;j<6;j++)c.lineTo(U.lerp(l.x,l.x2,j/6)+Math.sin(j*9)*13,U.lerp(l.y,l.y2,j/6)+Math.cos(j*5)*12);
        c.lineTo(l.x2,l.y2);
        c.stroke();
      }
      c.globalAlpha=1;
      let drawnParticles=0;
      for(const p of g.particles.active){
        if(artSlice&&drawnParticles++>=(this.budgetSlice?.particles||140))break;
        c.globalAlpha=Math.min(1,p.life*3);
        U.circle(c,p.x,p.y,p.r,p.color);
      }
      c.globalAlpha=1;
      for(const n of g.numbers.active){
        c.globalAlpha=Math.min(1,n.life*3);
        c.font=(n.big?'bold ':'')+((n.big?21:14)*(A.Save.data.settings.damageSize3||1))+'px Georgia';
        c.textAlign='center';
        c.strokeStyle='#1f383299';
        c.lineWidth=3;
        c.strokeText(n.value,n.x,n.y);
        c.fillStyle=n.color;
        c.fillText(n.value,n.x,n.y);
      }
      c.globalAlpha=1;
      c.restore();
      // Soft sunlight and drifting pollen frame the active play area.
      const light=c.createLinearGradient(w*.7,0,w*.25,h);
      light.addColorStop(0,'#fff2b919');
      light.addColorStop(.6,'#fff2b900');
      c.fillStyle=light;
      c.fillRect(0,0,w,h);
      for(let i=0;i<28*A.Save.data.settings.particles;i++){
        const x=((i*173+this.ambient*(10+i%4)*.8)%w),y=((i*89+Math.sin(this.ambient*.2+i)*45)%h+h)%h;
        c.globalAlpha=.2+Math.sin(this.ambient+i)*.12;
        U.ellipse(c,x,y,2.6,1.3,'#fff2b8');
      }
      c.globalAlpha=1;
      if(!document.getElementById('danger23')&&g.player.hp<g.stats.maxHp*.25&&g.state==='playing'){
        const danger=c.createRadialGradient(w/2,h/2,h*.2,w/2,h/2,w*.65);
        danger.addColorStop(0,'#ae302000');
        danger.addColorStop(1,'#ae30203b');
        c.fillStyle=danger;
        c.fillRect(0,0,w,h);
      }
      if(g.debug)this.debug();
    }
    plant(c,d){
      const t=this.ambient,s=d.size,sway=Math.sin(t*1.2+d.phase)*3;
      c.save();
      c.translate(d.x,d.y);
      if(d.type==='flower'){
        c.strokeStyle='#4c7751';
        c.lineWidth=1.5;
        c.beginPath();
        c.moveTo(0,0);
        c.quadraticCurveTo(sway,-5,sway*.6,-12*s);
        c.stroke();
        for(let i=0;i<4;i++)U.ellipse(c,sway*.6+Math.cos(i*1.57)*3,-12*s+Math.sin(i*1.57)*3,3.4,2.7,d.flip>.5?'#f7d3aa':'#e3eab0');
        U.circle(c,sway*.6,-12*s,2,'#d8b168');
      }
      else{
        c.strokeStyle=d.flip>.45?'#c0cc8157':'#315f4757';
        c.lineWidth=1.5;
        c.beginPath();
        for(let i=-1;i<=1;i++){
          c.moveTo(i*3,0);
          c.quadraticCurveTo(i*4+sway*.4,-7*s,i*7+sway,-12*s);
        }
        c.stroke();
      }
      c.restore();
    }
    decor(c,d){
      const b=this.g.world.biome,s=d.size;
      c.save();
      c.translate(d.x,d.y);
      c.scale(s,s);
      if(d.type==='tree'){
        const p=this.g.player;
        if(this.g.state!=='menu'&&Math.abs(p.x-d.x)<55*s&&p.y>d.y-125*s&&p.y<d.y+12)c.globalAlpha=.4;
        U.ellipse(c,10,4,49,19,'#1c4b3a30');
        if(this.g.biome===3){
          U.poly(c,[[-23,0],[-31,-51],[-12,-106],[4,-53],[9,-2]],'#acbed2','#6485a4');
          U.poly(c,[[-12,-106],[4,-53],[9,-2],[-8,-10]],'#d2d7e7');
          U.poly(c,[[4,0],[9,-65],[25,-84],[34,-30],[25,5]],'#92b6d0','#638cac');
        }
        else{
          U.poly(c,[[-8,4],[-5,-64],[4,-68],[9,4]],this.g.biome===4?'#65504a':'#687552');
          U.poly(c,[[0,-58],[18,-84],[23,-80],[4,-42]],'#71805a');
          const sway=Math.sin(this.ambient*.8+d.phase)*1.5;
          const palette=this.g.biome===4?['#8c7258','#bc9567','#d6b179']:this.g.biome===5?['#699a86','#9abf99','#c6d3a2']:this.g.biome===1?['#2e6850','#498967','#79a376']:['#4c8255','#7ca35e','#a4bb75'];
          U.ellipse(c,-9+sway,-60,43,30,palette[0]);
          U.ellipse(c,18+sway,-75,36,30,palette[0]);
          U.ellipse(c,-19+sway,-82,34,27,palette[1]);
          U.ellipse(c,8+sway,-94,35,29,palette[1]);
          U.ellipse(c,-3+sway,-105,25,18,palette[2]);
          U.ellipse(c,-29+sway,-76,18,12,palette[2]);
          U.ellipse(c,25+sway,-83,17,16,palette[1]);
          c.globalAlpha=.35;
          U.ellipse(c,5,-107,13,7,'#eef0b2');
          c.globalAlpha=1;
        }
      }
      else{
        U.ellipse(c,5,3,25,11,'#234a3939');
        U.poly(c,[[-22,0],[-25,-16],[-10,-33],[10,-30],[25,-12],[19,4]],'#809081','#5b756c');
        U.poly(c,[[-25,-16],[-10,-33],[10,-30],[9,-13],[-9,-6]],'#b6baa1');
        U.poly(c,[[9,-13],[10,-30],[25,-12],[19,4],[2,0]],'#94a58e');
        U.ellipse(c,-11,-3,12,4,b.light+'ad');
      }
      c.restore();
    }
    wall(c,w){
      c.fillStyle='#264c3e3d';
      c.fillRect(w.x+9,w.y+4,w.w,w.h+8);
      c.fillStyle='#728575';
      c.fillRect(w.x,w.y-22,w.w,w.h+22);
      c.fillStyle='#c4c5a4';
      c.fillRect(w.x,w.y-27,w.w,w.h);
      c.strokeStyle='#8a9c7a';
      c.lineWidth=2;
      c.strokeRect(w.x,w.y-27,w.w,w.h);
      for(let x=w.x+33;x<w.x+w.w;x+=34){
        c.beginPath();
        c.moveTo(x,w.y-26);
        c.lineTo(x,w.y-26+w.h);
        c.stroke();
      }
    }
    monument(c){
      const x=1400,y=1110;
      U.ellipse(c,x+18,y+15,74,25,'#32584745');
      U.poly(c,[[x-54,y],[x,y-25],[x+54,y],[x+54,y+17],[x,y+40],[x-54,y+17]],'#8a9d87');
      U.poly(c,[[x-54,y],[x,y-25],[x+54,y],[x,y+26]],'#d6cfab');
      U.poly(c,[[x-24,y-2],[x-20,y-135],[x+3,y-159],[x+26,y-137],[x+22,y-1],[x,y+12]],'#829e8c','#688978');
      U.poly(c,[[x-20,y-135],[x+3,y-159],[x+3,y+9],[x-24,y-2]],'#b5c4a5');
      U.poly(c,[[x-15,y-130],[x+3,y-145],[x+14,y-124],[x+3,y-62]],'#dbecc2');
      c.strokeStyle='#f3e5a4';
      c.lineWidth=3;
      c.beginPath();
      c.moveTo(x+2,y-122);
      c.lineTo(x+2,y-82);
      c.stroke();
      const glow=c.createRadialGradient(x,y-103,3,x,y-103,65);
      glow.addColorStop(0,'#e9ecb340');
      glow.addColorStop(1,'#e9ecb300');
      c.fillStyle=glow;
      c.fillRect(x-70,y-173,140,140);
    }
    player(c,p){
      const t=this.ambient;
      const walk=Math.hypot(p.vx,p.vy)>10?Math.sin(t*15)*3:0;
      c.save();
      c.translate(p.x,p.y);
      if(p.invuln>0&&Math.floor(t*20)%2)c.globalAlpha=.55;
      U.ellipse(c,2,5,17,7,'#20493865');
      if(p.guard>0){
        c.strokeStyle='#f1d8a6';
        c.lineWidth=3;
        c.beginPath();
        c.ellipse(0,-10,25,31,0,0,TAU);
        c.stroke();
      }
      U.poly(c,[[-9,-25],[-19,1],[1,9],[14,-2],[9,-26]],'#355f62','#2b514a');
      U.poly(c,[[-9,-25],[-14,-1],[1,4],[4,-22]],p.hero.color);
      c.strokeStyle='#314d48';
      c.lineWidth=5;
      c.beginPath();
      c.moveTo(-5,-1);
      c.lineTo(-6+walk,7);
      c.moveTo(4,-1);
      c.lineTo(6-walk,6);
      c.stroke();
      U.ellipse(c,0,-28,10,12,'#eacb9c');
      U.poly(c,[[-11,-30],[-10,-39],[-3,-45],[9,-39],[13,-28],[5,-32],[-2,-35],[-7,-28]],'#e7e0b8','#788374');
      U.poly(c,[[-10,-28],[-7,-19],[-12,-23]],'#ddd9ad');
      const sx=Math.cos(p.aim)*15,sy=Math.sin(p.aim)*12-15;
      c.strokeStyle='#ecd9ab';
      c.lineWidth=5;
      c.beginPath();
      c.moveTo(4,-22);
      c.lineTo(sx,sy);
      c.stroke();
      c.save();
      c.translate(sx,sy);
      c.rotate(p.aim);
      if(p.hero.id==='ilya'){
        c.strokeStyle='#e3c17d';
        c.lineWidth=3;
        c.beginPath();
        c.arc(-2,0,15,-1.2,1.2);
        c.stroke();
        c.strokeStyle='#f4e6b9';
        c.lineWidth=1;
        c.beginPath();
        c.moveTo(3,-14);
        c.lineTo(3,14);
        c.stroke();
      }
      else if(p.hero.id==='orren'){
        c.fillStyle='#806e53';
        c.fillRect(0,-2,21,4);
        c.fillStyle='#dfd7b3';
        c.fillRect(17,-9,12,18);
      }
      else{
        c.strokeStyle='#dfc998';
        c.lineWidth=3;
        c.beginPath();
        c.moveTo(-5,0);
        c.lineTo(20,0);
        c.stroke();
        U.circle(c,22,0,5,p.hero.color);
      }
      c.restore();
      c.restore();
    }
    enemy(c,e){
      const s=e.r/16,ai=e.type.ai;
      c.save();
      c.translate(e.x,e.y);
      c.scale(s,s);
      U.ellipse(c,3,4,17,7,'#23413750');
      if(e.elite>=0){
        c.strokeStyle=['#efb278','#bce9fa','#de9daa','#ee9c72','#e5d3a2','#b7e2ca','#e4c184','#c7abe3','#fff3b5','#bedc8a'][e.elite];
        c.lineWidth=2;
        c.beginPath();
        c.ellipse(0,0,22,11,0,0,TAU);
        c.stroke();
      }
      const body=e.flash>0?'#ffefcf':e.type.color;
      const bob=Math.sin(e.age*5+e.id)*2;
      if(e.isBoss){
        this.bossArtwork(c,e,body);
      }
      else if(['ranged','sniper','heal','summon','denial'].includes(ai)){
        U.poly(c,[[-13,2],[-9,-23],[0,-35],[10,-23],[14,3],[0,7]],body,'#44695c');
        U.poly(c,[[-7,-23],[0,-30],[7,-23],[5,-12],[-5,-12]],'#38594e');
        U.circle(c,-3,-21,1.6,'#f6efb4');
        U.circle(c,3,-21,1.6,'#f6efb4');
        c.strokeStyle='#dfc690';
        c.lineWidth=2;
        c.beginPath();
        c.moveTo(15,1);
        c.lineTo(17,-29);
        c.stroke();
        U.circle(c,17,-31,4,ai==='heal'?'#cbedb0':'#e9c496');
      }
      else if(ai==='shield'){
        U.poly(c,[[-12,2],[-15,-16],[-8,-30],[8,-30],[16,-16],[12,4]],body,'#516b64');
        U.poly(c,[[-13,-16],[2,-20],[9,-14],[7,3],[-4,9],[-13,1]],'#718c86','#c4c69d');
        U.circle(c,5,-24,2,'#fff1bb');
      }
      else if(ai==='swarm'||ai==='teleport'){
        const flap=Math.sin(e.age*12)*5;
        U.poly(c,[[-4,-12],[-24,-22+flap],[-16,-3],[-3,-3]],body);
        U.poly(c,[[4,-12],[24,-22+flap],[16,-3],[3,-3]],body);
        U.ellipse(c,0,-9+bob,8,11,body);
        U.circle(c,-3,-12+bob,2,'#344f49');
        U.circle(c,3,-12+bob,2,'#344f49');
      }
      else{
        U.ellipse(c,0,-11+bob,16,14,body);
        U.ellipse(c,-5,-16+bob,11,9,body);
        U.poly(c,[[-12,-18],[-12,-33],[-3,-23]],body,'#55765b');
        U.poly(c,[[5,-23],[13,-32],[14,-16]],body,'#55765b');
        U.circle(c,-6,-14+bob,2.3,'#3d5149');
        U.circle(c,6,-14+bob,2.3,'#3d5149');
        c.fillStyle='#f5dbb0';
        c.fillRect(-2,-8+bob,4,3);
      }
      if(e.status.ice){
        c.strokeStyle='#baeafa';
        c.lineWidth=1.7;
        c.beginPath();
        c.arc(0,-12,21,0,TAU);
        c.stroke();
      }
      if(e.status.fire)U.circle(c,-14,-15,3,'#ffc087');
      if(e.status.poison)U.circle(c,14,-15,3,'#dbf399');
      c.restore();
      if(e.hp<e.maxHp&&!e.isBoss){
        c.fillStyle='#263e38aa';
        c.fillRect(e.x-e.r,e.y-e.r*2.8-7,e.r*2,3);
        c.fillStyle=e.elite>=0?'#eac68b':'#e8dba6';
        c.fillRect(e.x-e.r,e.y-e.r*2.8-7,e.r*2*e.hp/e.maxHp,3);
      }
      if(e.wind>0){
        c.strokeStyle='#f58e74aa';
        c.lineWidth=ai==='sniper'?2:18;
        c.beginPath();
        c.moveTo(e.x,e.y);
        c.lineTo(e.x+Math.cos(e.savedAngle)*480,e.y+Math.sin(e.savedAngle)*480);
        c.stroke();
      }
    }
    bossArtwork(c,e,body){
      const b=e.type.id.at(-1),t=e.age;
      if(b==='0'){
        for(let i=0;i<7;i++){
          const a=i*TAU/7;
          c.strokeStyle='#637b54';
          c.lineWidth=7;
          c.beginPath();
          c.moveTo(0,-10);
          c.quadraticCurveTo(Math.cos(a)*20,-20+Math.sin(a)*15,Math.cos(a)*34,Math.sin(a)*10);
          c.stroke();
        }
        U.poly(c,[[-18,2],[-21,-23],[-12,-42],[0,-48],[15,-39],[22,-15],[13,5]],'#789168','#45675e');
        for(let i=0;i<5;i++)U.ellipse(c,Math.cos(i*1.3)*19,-43+Math.sin(i*1.3)*8,18,13,i%2?'#b5c87b':'#92b16d');
        U.ellipse(c,0,-24,10,14,'#405e50');
        U.circle(c,-4,-28,2,body);
        U.circle(c,4,-28,2,body);
      }
      else if(b==='1'){
        U.poly(c,[[-12,1],[-17,-24],[-9,-39],[0,-47],[12,-37],[18,-20],[11,3],[0,9]],'#c0d9b6','#486d61');
        for(const side of [-1,1]){
          c.strokeStyle='#d4c19b';
          c.lineWidth=3;
          c.beginPath();
          c.moveTo(side*8,-38);
          c.lineTo(side*20,-54);
          c.lineTo(side*17,-73);
          c.moveTo(side*20,-54);
          c.lineTo(side*33,-64);
          c.lineTo(side*31,-74);
          c.moveTo(side*17,-63);
          c.lineTo(side*9,-70);
          c.stroke();
        }
        U.poly(c,[[-7,-31],[0,-38],[7,-31],[4,-14],[0,-10],[-4,-14]],'#4b7869');
        U.circle(c,-4,-29,1.8,'#f7e3a9');
        U.circle(c,4,-29,1.8,'#f7e3a9');
      }
      else if(b==='2'){
        U.poly(c,[[-23,1],[-26,-28],[-15,-42],[16,-42],[28,-25],[22,5]],'#a4a78c','#5c766b');
        U.poly(c,[[-18,-31],[-13,-51],[14,-51],[20,-31]],'#d2c6a1','#6f8270');
        c.fillStyle='#506a60';
        c.fillRect(-10,-38,21,7);
        c.fillStyle=body;
        c.fillRect(-6,-36,4,3);
        c.fillRect(4,-36,4,3);
        U.poly(c,[[-30,-26],[-8,-29],[-5,1],[-18,12],[-31,2]],'#809b8d','#dfd1a0');
        c.strokeStyle='#dfd1a0';
        c.lineWidth=2;
        c.strokeRect(-25,-19,13,16);
        c.fillStyle='#d0b993';
        c.fillRect(25,-43,5,48);
        c.fillRect(18,-47,19,9);
      }
      else if(b==='3'){
        c.save();
        c.translate(0,-24);
        c.rotate(Math.sin(t*.8)*.12);
        U.poly(c,[[0,-33],[20,-12],[15,18],[0,33],[-18,16],[-22,-13]],'#c3c2ee','#738db2');
        U.poly(c,[[0,-33],[0,33],[-18,16],[-22,-13]],'#e0dbf4');
        U.poly(c,[[0,-17],[10,0],[0,16],[-9,0]],'#7699b5');
        for(let i=0;i<5;i++){
          const a=t*.55+i*TAU/5,x=Math.cos(a)*35,y=Math.sin(a)*23;
          U.poly(c,[[x,y-9],[x+5,y],[x,y+9],[x-5,y]],'#c3e4eb','#8bacc7');
        }
        c.restore();
      }
      else if(b==='4'){
        U.poly(c,[[-22,3],[-17,-26],[-9,-51],[2,-65],[7,-46],[21,-29],[24,4],[0,12]],'#745e59','#584d4b');
        U.poly(c,[[-11,-1],[-13,-20],[-5,-36],[1,-48],[6,-32],[15,-13],[10,6],[0,9]],'#e5a373');
        U.poly(c,[[-4,0],[-7,-14],[1,-31],[7,-10],[5,3]],'#ffe0a0');
        c.strokeStyle='#f5c393';
        c.lineWidth=2;
        c.beginPath();
        c.arc(0,-24,31,t*.5,t*.5+4);
        c.stroke();
      }
      else{
        c.save();
        c.translate(0,-28);
        c.rotate(t*.14);
        for(let i=0;i<8;i++){
          c.rotate(TAU/8);
          U.poly(c,[[0,-12],[-9,-30],[0,-49],[10,-29]],i%2?'#d7d5b0':'#a8c7b1','#6f9989');
        }
        c.restore();
        U.poly(c,[[0,-49],[14,-30],[11,-4],[0,10],[-12,-4],[-15,-29]],'#567e71','#e5d9ad');
        U.ellipse(c,0,-25,9,13,'#d7d8b4');
        U.poly(c,[[0,-34],[5,-24],[0,-15],[-5,-24]],'#789d8d');
        c.strokeStyle='#f3e0a5';
        c.lineWidth=1.7;
        c.beginPath();
        c.ellipse(0,-30,39,31,0,0,TAU);
        c.stroke();
      }
      if(e.flash>0){
        c.globalAlpha=.35;
        U.ellipse(c,0,-24,23,30,'#fff7d6');
        c.globalAlpha=1;
      }
      if(e.phase>1){
        c.strokeStyle=e.phase===3?'#ffa785':'#f7e0a4';
        c.lineWidth=1;
        c.beginPath();
        c.ellipse(0,1,30+e.phase*4,13+e.phase*2,0,0,TAU);
        c.stroke();
      }
    }
    hazard(c,z,time){
      const phase=(time+z.phase)%7,active=phase>4.8;
      c.save();
      c.globalAlpha=active?.45:.16;
      U.ellipse(c,z.x,z.y,z.r,z.r*.6,z.type==='lava'?'#ffbb78':z.type==='frost'?'#d1f1ff':'#536a3a');
      c.globalAlpha=active?.75:.3;
      c.strokeStyle=active?'#ffe0a1':'#bfd3a2';
      c.lineWidth=2;
      c.beginPath();
      c.ellipse(z.x,z.y,z.r*(active?1:.9),z.r*.65,0,0,TAU);
      c.stroke();
      for(let i=0;i<6;i++){
        const a=i*TAU/6;
        U.poly(c,[[z.x+Math.cos(a)*z.r*.6-4,z.y+Math.sin(a)*z.r*.4],[z.x+Math.cos(a)*z.r*.6,z.y+Math.sin(a)*z.r*.4-(active?17:7)],[z.x+Math.cos(a)*z.r*.6+4,z.y+Math.sin(a)*z.r*.4]],active?'#e6d09c':'#597847');
      }
      c.restore();
    }
    zone(c,z){
      const tele=z.delay>0;
      c.save();
      c.globalAlpha=tele?.2:z.enemy?.23:.10;
      U.circle(c,z.x,z.y,z.r,z.enemy?'#f3a080':colors[z.element]||'#cfedba');
      c.globalAlpha=tele?.8:.6;
      c.strokeStyle=z.enemy?'#ffcf9b':colors[z.element]||'#cfedba';
      c.lineWidth=tele?2:3;
      if(tele)c.setLineDash([8,7]);
      c.beginPath();
      c.arc(z.x,z.y,z.r,0,TAU);
      c.stroke();
      if(tele){
        c.setLineDash([]);
        c.beginPath();
        c.arc(z.x,z.y,z.r*(1-Math.min(1,z.delay/1.5)),-Math.PI/2,Math.PI*1.5);
        c.stroke();
      }
      else if(z.pull){
        for(let i=0;i<3;i++){
          c.beginPath();
          c.arc(z.x,z.y,z.r*(.3+i*.25),this.ambient*4+i,this.ambient*4+i+3);
          c.stroke();
        }
      }
      c.restore();
    }
    event(c,e){
      if(e.type==='portal'&&e.locked)return;
      const x=e.x,y=e.y;
      c.save();
      c.globalAlpha=e.used?.4:1;
      U.ellipse(c,x,y+6,26,10,'#31544245');
      if(e.type==='portal'){
        c.strokeStyle='#e7ddb0';
        c.lineWidth=4;
        c.beginPath();
        c.ellipse(x,y-30,34,52,0,0,TAU);
        c.stroke();
        const grad=c.createRadialGradient(x,y-30,5,x,y-30,48);
        grad.addColorStop(0,'#ecf2c077');
        grad.addColorStop(1,'#b4e6d200');
        c.fillStyle=grad;
        c.fillRect(x-50,y-85,100,110);
      }
      else if(['chest','curse','treasure'].includes(e.type)){
        U.poly(c,[[x-18,y-18],[x+12,y-21],[x+22,y-12],[x+22,y+4],[x-9,y+9],[x-18,y+1]],e.type==='curse'?'#92788d':'#aa8958','#536b52');
        U.poly(c,[[x-18,y-18],[x+12,y-21],[x+22,y-12],[x-9,y-7]],e.used?'#656b51':'#d9be7c');
        c.fillStyle='#f1d894';
        c.fillRect(x-3,y-9,6,12);
      }
      else{
        U.poly(c,[[x-21,y],[x,y-12],[x+21,y],[x+21,y+10],[x,y+20],[x-21,y+10]],'#9ba98c','#657e6a');
        c.fillStyle=e.type==='fountain'?'#b2dfd4':'#e9dbaf';
        c.font='30px Georgia';
        c.textAlign='center';
        c.fillText(e.icon,x,y-12+Math.sin(this.ambient*2+x)*3);
      }
      if(!e.used){
        c.fillStyle='#f5e2b2';
        c.font='16px Georgia';
        c.textAlign='center';
        c.fillText('·',x,y-49+Math.sin(this.ambient*2)*4);
      }
      c.restore();
    }
    spirit(c,x,y,t){
      U.ellipse(c,x,y+4,8,4,'#29524740');
      U.ellipse(c,x,y-10+Math.sin(t*3)*3,8,11,'#d9edd9ab');
      U.circle(c,x-2,y-12,1.5,'#486d63');
    }
    minimap(){
      const cv=document.getElementById('minimap');
      if(!cv)return;
      const c=cv.getContext('2d'),g=this.g,w=g.world;
      c.clearRect(0,0,146,123);
      c.fillStyle='#102d2b';
      c.fillRect(0,0,146,123);
      const sx=146/2800,sy=123/2400;
      for(let j=0;j<24;j++)for(let i=0;i<28;i++)if(w.fog[j*28+i]){
        c.fillStyle=w.biome.light+'60';
        c.fillRect(i*100*sx,j*100*sy,100*sx+1,100*sy+1);
      }
      for(const e of w.events)if(!e.used&&w.isKnown(e.x,e.y)){
        c.fillStyle=e.type==='portal'?'#b2e7e0':e.type==='fountain'?'#bee6ce':'#efd598';
        c.fillRect(e.x*sx-2,e.y*sy-2,4,4);
      }
      if(g.boss){
        U.circle(c,g.boss.x*sx,g.boss.y*sy,3,'#f39a86');
      }
      U.circle(c,g.player.x*sx,g.player.y*sy,3,'#f9f4d2');
    }
    debug(){
      const g=this.g,el=document.getElementById('debug');
      if(!el.querySelector('.readout'))el.innerHTML='<div class="readout"></div><button data-cheat="level">Poziom</button><button data-cheat="gold">Złoto</button><button data-cheat="boss">Boss</button><button data-cheat="god">God</button><button data-cheat="clear">Wyczyść</button><div>Użycie cheatów wyłącza nagrody meta.</div>';
      el.querySelector('.readout').textContent=`FPS ${g.fps.toFixed(0)} | wrogowie ${g.enemies.length}\npociski ${g.projectiles.active.length} | cząstki ${g.particles.active.length}\npozycja ${g.player.x.toFixed(0)}, ${g.player.y.toFixed(0)}\ntrudność ${(g.difficulty||1).toFixed(2)}\nspawn ${(g.spawnRate||0).toFixed(2)}/s | god ${g.god}`;
      el.querySelector('.readout').style.whiteSpace='pre-line';
    }
  }
  A.Renderer=Renderer;
})(window.Aeren);


;

/* Module: js/render-v2.js */
'use strict';
(function(A){const {U}=A,Base=A.Renderer,TAU=Math.PI*2;
  class Renderer extends Base{
    ground(w){
      this.cachedWorld=w;const cv=document.createElement('canvas');cv.width=w.width;cv.height=w.height;const c=cv.getContext('2d'),b=w.biome,r=U.rng(w.seed+w.index*941),theme=b.theme;
      c.fillStyle=b.ground;c.fillRect(0,0,w.width,w.height);
      for(let i=0;i<350;i++){const x=r()*w.width,y=r()*w.height,rr=60+r()*230,gr=c.createRadialGradient(x,y,0,x,y,rr);gr.addColorStop(0,b.light+'38');gr.addColorStop(1,b.light+'00');c.fillStyle=gr;c.fillRect(x-rr,y-rr,rr*2,rr*2);}
      if(theme==='dungeon'){
        for(let y=0;y<w.height;y+=86)for(let x=(y/86)%2?-54:0;x<w.width;x+=108){c.strokeStyle='#10191c70';c.lineWidth=3;c.strokeRect(x+3,y+3,102,80);c.strokeStyle='#8d909126';c.lineWidth=1;c.strokeRect(x+5,y+5,98,76);if(r()<.08){c.beginPath();c.moveTo(x+20,y+18);c.lineTo(x+45,y+46);c.lineTo(x+75,y+54);c.stroke();}}
      }else if(['fire','hell'].includes(theme)){
        for(let branch=0;branch<14;branch++){let x=r()*w.width,y=r()*w.height;c.beginPath();c.moveTo(x,y);for(let j=0;j<8;j++){x+=r()*150-70;y+=r()*120;c.lineTo(x,y);}c.lineJoin='round';c.strokeStyle='#201f28';c.lineWidth=theme==='hell'?30:42;c.stroke();c.strokeStyle=theme==='hell'?'#d25540':'#df843f';c.lineWidth=theme==='hell'?12:22;c.stroke();c.strokeStyle='#ffc77388';c.lineWidth=3;c.stroke();}
      }else if(theme==='ice'){
        for(let i=0;i<25;i++){const x=r()*w.width,y=r()*w.height;U.ellipse(c,x,y,130+r()*180,80+r()*80,'#76b5ce70');c.strokeStyle='#e4f8ff88';c.lineWidth=2;c.beginPath();c.moveTo(x-140,y);c.lineTo(x-25,y-18);c.lineTo(x+12,y+5);c.lineTo(x+120,y-40);c.moveTo(x-25,y-18);c.lineTo(x-40,y-65);c.stroke();}
      }else if(theme==='dead'){
        for(let i=0;i<8;i++){const x=250+i*440;c.beginPath();c.moveTo(x,0);c.bezierCurveTo(x+250,600,x-200,1600,x+80,3000);c.strokeStyle='#24233688';c.lineWidth=120;c.stroke();c.strokeStyle='#b9a3c227';c.lineWidth=145;c.stroke();}
      }else{
        for(const p of w.paths){c.beginPath();c.moveTo(1800,1500);c.quadraticCurveTo((1800+p.x)/2+100,(1500+p.y)/2-50,p.x,p.y);c.strokeStyle='#a9ad753e';c.lineWidth=75;c.lineCap='round';c.stroke();}
      }
      for(let i=0;i<16000;i++){c.fillStyle=i%3?b.light+'24':b.dark+'52';c.fillRect(r()*w.width,r()*w.height,1+r()*3,1+r()*2);}
      for(const d of w.decor)if(d.type==='floor'){c.fillStyle=b.light+'55';c.fillRect(d.x-d.size*100,d.y-d.flip*100,d.size*200,d.flip*200);}
      const x=w.center.x,y=w.center.y;U.ellipse(c,x,y+8,260,185,b.dark+'b0');U.ellipse(c,x,y,246,173,b.light+'80');
      c.strokeStyle=b.accent+'70';c.lineWidth=3;for(let i=0;i<3;i++){c.beginPath();c.ellipse(x,y,225-i*55,155-i*38,0,0,TAU);c.stroke();}
      for(let i=0;i<8;i++){const a=i*TAU/8;U.poly(c,[[x+Math.cos(a)*170,y+Math.sin(a)*116],[x+Math.cos(a+.06)*197,y+Math.sin(a+.06)*135],[x+Math.cos(a-.06)*197,y+Math.sin(a-.06)*135]],b.accent+'8c');}
      this.map=cv;
    }
    decor(c,d){const b=this.g.world.biome,t=b.theme;if(t==='forest'){super.decor(c,d);return;}
      c.save();c.translate(d.x,d.y);c.scale(d.size,d.size);const p=this.g.player;if(Math.abs(p.x-d.x)<55*d.size&&p.y<d.y+12&&p.y>d.y-120*d.size)c.globalAlpha=.42;
      U.ellipse(c,8,5,32,12,'#08141c4a');
      if(t==='ice'){
        for(let i=0;i<(d.type==='tree'?3:2);i++){const x=(i-1)*20,h=(d.type==='tree'?85:32)+i*12;U.poly(c,[[x-12,2],[x-16,-h*.65],[x,-h],[x+13,-h*.55],[x+9,4]],i%2?'#9fd9ef':'#c7e9f0','#74a9c1');U.poly(c,[[x,-h],[x+13,-h*.55],[x+9,4],[x,0]],'#76b7d4');}
      }else if(t==='dungeon'){
        const h=d.type==='tree'?86:24;U.poly(c,[[-22,0],[-22,-h],[20,-h],[20,0]],'#596265','#252f39');c.fillStyle='#89908c';c.fillRect(-25,-h-8,49,12);c.fillStyle='#343e47';c.fillRect(2,-h+6,13,h-10);c.fillStyle='#767e76';c.fillRect(-28,0,56,9);
        if(d.flip>.6&&d.type==='tree'){c.fillStyle='#b89f68';c.fillRect(-4,-48,8,19);U.poly(c,[[-7,-49],[-3,-67],[4,-74],[9,-57],[4,-48]],'#ffc785');U.circle(c,1,-56,3,'#ffecaf');}
      }else if(t==='dead'){
        if(d.type==='tree'&&d.flip>.45){c.strokeStyle='#6f657b';c.lineWidth=7;c.beginPath();c.moveTo(0,4);c.lineTo(-2,-71);c.lineTo(-24,-91);c.moveTo(-2,-46);c.lineTo(24,-70);c.lineTo(30,-89);c.stroke();c.lineWidth=3;c.beginPath();c.moveTo(-13,-81);c.lineTo(-10,-102);c.moveTo(24,-70);c.lineTo(43,-75);c.stroke();}
        else{U.poly(c,[[-18,4],[-20,-30],[-12,-45],[12,-45],[20,-30],[17,4]],'#9a8c9d','#554963');c.strokeStyle='#564f65';c.lineWidth=3;c.beginPath();c.moveTo(0,-36);c.lineTo(0,-10);c.moveTo(-8,-28);c.lineTo(8,-28);c.stroke();U.ellipse(c,9,6,10,5,'#d7c6b7');U.circle(c,5,4,2,'#423846');U.circle(c,11,4,2,'#423846');}
      }else{
        const h=d.type==='tree'?90:32;U.poly(c,[[-26,2],[-22,-h*.5],[-7,-h],[11,-h*.85],[26,-h*.25],[19,6]],t==='hell'?'#433647':'#615956','#292d36');U.poly(c,[[-7,-h],[11,-h*.85],[2,3],[-9,-2]],t==='hell'?'#665167':'#827269');c.strokeStyle=b.water;c.lineWidth=2;c.beginPath();c.moveTo(-5,-h*.8);c.lineTo(2,-h*.5);c.lineTo(-3,-h*.3);c.lineTo(8,-3);c.stroke();
        if(t==='hell'&&d.type==='tree'){c.strokeStyle='#b58e89';c.lineWidth=4;c.beginPath();c.moveTo(-16,-60);c.lineTo(-35,-85);c.lineTo(-28,-105);c.moveTo(14,-68);c.lineTo(32,-87);c.lineTo(27,-106);c.stroke();}
      }c.restore();
    }
    plant(c,d){const t=this.g.world.biome.theme;if(t==='forest'){super.plant(c,d);return;}c.save();c.translate(d.x,d.y);if(t==='ice'){c.strokeStyle='#e5f9fa7c';c.lineWidth=1;for(let i=0;i<3;i++){c.rotate(Math.PI/3);c.beginPath();c.moveTo(-5,0);c.lineTo(5,0);c.stroke();}}else if(t==='dead'){c.strokeStyle='#ccb5b765';c.lineWidth=2;c.beginPath();c.moveTo(-5,1);c.lineTo(6,-3);c.moveTo(-3,-5);c.lineTo(4,5);c.stroke();}else if(t==='fire'||t==='hell'){U.circle(c,0,Math.sin(this.ambient+d.phase)*2,1.5,'#efa46c99');}else{c.fillStyle='#81878366';c.fillRect(-3,0,5,2);}c.restore();}
    wall(c,w){if(w.cliff){U.poly(c,[[w.x,w.y],[w.x+w.w,w.y-20],[w.x+w.w+12,w.y+w.h],[w.x,w.y+w.h+12]],'#272734','#6c5a73');return;}const b=this.g.world.biome;c.fillStyle=b.dark;c.fillRect(w.x,w.y-25,w.w,w.h+25);c.fillStyle=b.light;c.fillRect(w.x,w.y-30,w.w,w.h);c.strokeStyle=b.accent+'40';c.strokeRect(w.x,w.y-30,w.w,w.h);}
    monument(c){const w=this.g.world,x=w.center.x,y=w.center.y-90,b=w.biome;U.ellipse(c,x+10,y+10,66,24,'#111d2955');U.poly(c,[[x-45,y],[x,y-22],[x+45,y],[x,y+24]],b.light);U.poly(c,[[x-20,y],[x-16,y-105],[x,y-143],[x+23,y-112],[x+20,y],[x,y+12]],b.dark,b.accent+'99');U.poly(c,[[x,y-130],[x+11,y-98],[x,y-68],[x-10,y-100]],b.accent);c.strokeStyle=b.accent+'70';c.lineWidth=2;c.beginPath();c.ellipse(x,y-88,42,17,Math.sin(this.ambient*.3)*.3,0,TAU);c.stroke();}
    player(c,p){const id=p.hero.id,t=this.ambient,walk=Math.hypot(p.vx,p.vy)>10?Math.sin(t*14)*3:0;
      c.save();c.translate(p.x,p.y);if(p.invuln>0&&Math.floor(t*17)%2)c.globalAlpha=.55;U.ellipse(c,2,6,18,8,'#071e286b');
      if(p.guard>0){c.strokeStyle='#f5d79a';c.lineWidth=3;c.beginPath();c.ellipse(0,-16,26,33,0,0,TAU);c.stroke();}
      c.strokeStyle='#21323b';c.lineWidth=id==='orren'?7:5;for(const side of [-1,1]){c.beginPath();c.moveTo(side*6,-4);c.lineTo(side*7+side*walk,7);c.stroke();}
      if(id==='ilya'){
        U.poly(c,[[-10,-31],[-17,1],[2,5],[12,-4],[9,-31]],'#6b9868','#294b46');U.poly(c,[[-9,-28],[-13,-4],[-2,1],[1,-28]],'#a3bd78');U.ellipse(c,0,-34,9,10,'#e9c49a');U.poly(c,[[-12,-31],[-9,-46],[3,-52],[12,-38],[9,-31],[2,-43],[-6,-37]],'#71966d');c.strokeStyle='#b99863';c.lineWidth=3;c.beginPath();c.arc(20,-22,19,-1.15,1.2);c.stroke();c.strokeStyle='#ecd9ac';c.lineWidth=1;c.beginPath();c.moveTo(27,-39);c.lineTo(27,-4);c.stroke();c.fillStyle='#c2ac7a';c.fillRect(-17,-33,4,24);
      }else if(id==='sol'){
        U.poly(c,[[-11,-31],[-20,6],[19,6],[10,-31]],'#96534c','#392f42');U.poly(c,[[-7,-29],[-7,4],[8,4],[6,-29]],'#e6aa62');U.ellipse(c,0,-35,8,10,'#dca87c');U.poly(c,[[-16,-40],[0,-66],[13,-40]],'#745263','#352f41');U.ellipse(c,0,-40,18,4,'#ba916c');c.strokeStyle='#a08257';c.lineWidth=4;c.beginPath();c.moveTo(20,4);c.lineTo(20,-49);c.stroke();U.poly(c,[[14,-50],[17,-67],[25,-58],[26,-48]],'#ffc074');U.circle(c,20,-55,4,'#ffeca5');
      }else if(id==='niva'){
        U.poly(c,[[-11,-27],[-21,4],[-7,-1],[2,8],[19,0],[9,-29]],'#87c6de','#346a85');U.poly(c,[[-8,-28],[0,-15],[10,-28],[7,-6],[-8,-5]],'#c4e6eb');U.ellipse(c,0,-34,8,10,'#e8cab5');U.poly(c,[[-11,-33],[-10,-43],[1,-49],[13,-41],[11,-23],[4,-32],[1,-41],[-4,-30]],'#d6edf3');U.poly(c,[[-15,-12],[-29,-41],[-19,-30],[-10,-10]],'#c0f2ff','#598ca3');U.poly(c,[[13,-13],[29,-36],[23,-12],[16,-7]],'#c0f2ff','#598ca3');
      }else if(id==='orren'){
        U.poly(c,[[-17,-29],[-19,-3],[-9,7],[11,7],[20,-4],[17,-30]],'#89968f','#394c52');c.fillStyle='#c5b998';c.fillRect(-13,-27,26,18);U.poly(c,[[-12,-31],[-11,-47],[10,-49],[14,-32]],'#b6bda9','#3f5054');c.fillStyle='#3d5558';c.fillRect(-7,-39,15,5);c.fillStyle='#e2bf7b';c.fillRect(-2,-49,4,17);U.poly(c,[[-21,-25],[-35,-25],[-34,0],[-23,9],[-16,0]],'#617a80','#e3cba1');c.strokeStyle='#9a795b';c.lineWidth=5;c.beginPath();c.moveTo(20,-4);c.lineTo(27,-42);c.stroke();c.fillStyle='#c7c6b2';c.fillRect(14,-51,30,17);
      }else{
        U.poly(c,[[-10,-30],[-20,8],[-2,0],[9,9],[16,-4],[9,-30]],'#504469','#262942');U.poly(c,[[-9,-26],[-4,-3],[9,-7],[9,-26]],'#87719f');U.poly(c,[[-12,-31],[-10,-45],[0,-52],[12,-43],[10,-29]],'#675581','#2c304a');U.ellipse(c,0,-34,7,8,'#acabc1');c.fillStyle='#3c3b57';c.fillRect(-7,-33,14,7);U.circle(c,-3,-36,1.5,'#cfedb5');U.circle(c,3,-36,1.5,'#cfedb5');U.poly(c,[[-15,-10],[-28,-25],[-18,-29],[-10,-12]],'#d3d2ed');U.poly(c,[[14,-10],[29,-26],[24,-10],[16,-6]],'#d3d2ed');
      }c.restore();
    }
    bossArtwork(c,e,body){const proxy={...e,type:{...e.type,id:'boss'+this.g.world.biome.art}};super.bossArtwork(c,proxy,body);}
    enemy(c,e){if(e.isBoss){super.enemy(c,e);return;}const shape=e.type.shape,t=e.age,body=e.flash>0?'#fff1d2':e.type.color,s=e.r/16;c.save();c.translate(e.x,e.y);c.scale(s,s);U.ellipse(c,2,3,17,7,'#101b2b60');
      if(e.elite>=0||e.mini){c.strokeStyle=e.mini?'#ffbe87':'#dcb0e9';c.lineWidth=2;c.beginPath();c.ellipse(0,0,23,12,0,0,TAU);c.stroke();}
      if(['bat','wasp','imp'].includes(shape)){const flap=Math.sin(t*12)*6;U.poly(c,[[-3,-15],[-28,-27+flap],[-17,-3],[-5,-4]],body);U.poly(c,[[3,-15],[28,-27+flap],[17,-3],[5,-4]],body);U.ellipse(c,0,-13,8,12,body);if(shape==='imp'){U.poly(c,[[-6,-21],[-11,-33],[0,-23]],'#c8a893');U.poly(c,[[5,-21],[11,-33],[1,-23]],'#c8a893');}}
      else if(['slime','eye','ghost'].includes(shape)){if(shape==='ghost')U.poly(c,[[-16,2],[-12,-25],[0,-37],[13,-25],[17,5],[8,0],[0,7],[-7,0]],body);else U.ellipse(c,0,-9,18,shape==='eye'?18:12+Math.sin(t*4)*2,body);if(shape==='eye'){U.ellipse(c,0,-13,10,8,'#f2e5bf');U.ellipse(c,0,-13,3,7,'#56394a');}}
      else if(['knight','skeleton','golem','mage','demon'].includes(shape)){
        U.poly(c,[[-13,3],[-15,-18],[-9,-28],[10,-28],[16,-16],[12,4]],body,'#30343f');U.ellipse(c,0,-30,shape==='golem'?13:10,11,body);
        if(shape==='mage'){U.poly(c,[[-18,-29],[0,-54],[17,-29]],body);c.strokeStyle='#a9937e';c.lineWidth=3;c.beginPath();c.moveTo(20,4);c.lineTo(20,-38);c.stroke();U.circle(c,20,-42,5,'#eebbbe');}
        if(shape==='skeleton'){c.strokeStyle='#3e3b48';c.lineWidth=2;for(let i=0;i<3;i++){c.beginPath();c.moveTo(-8,-19+i*6);c.lineTo(8,-19+i*6);c.stroke();}}
        if(shape==='knight'){U.poly(c,[[-25,-19],[-8,-22],[-6,1],[-16,9],[-25,1]],'#687780','#c6b394');}
        if(shape==='demon'){U.poly(c,[[-9,-36],[-20,-54],[-14,-27]],'#c7a094');U.poly(c,[[9,-36],[20,-54],[14,-27]],'#c7a094');}
      }else if(['plant','mushroom'].includes(shape)){c.fillStyle='#96a97a';c.fillRect(-5,-22,10,25);if(shape==='mushroom'){U.ellipse(c,0,-25,24,12,body);for(let i=-1;i<=1;i++)U.circle(c,i*12,-28,3,'#f0d9bc');}else for(let i=0;i<5;i++){const a=i*TAU/5;U.poly(c,[[0,-17],[Math.cos(a)*24,-17+Math.sin(a)*20],[Math.cos(a+.4)*12,-17+Math.sin(a+.4)*12]],body);}}
      else{U.ellipse(c,0,-11,18,12,body);U.ellipse(c,11,-17,11,9,body);if(['beetle','spider'].includes(shape)){c.strokeStyle=body;c.lineWidth=3;for(let i=0;i<3;i++){c.beginPath();c.moveTo(-10,-12+i*5);c.lineTo(-25,-19+i*11);c.moveTo(9,-12+i*5);c.lineTo(25,-19+i*11);c.stroke();}}else{U.poly(c,[[5,-21],[4,-36],[13,-25]],body);U.poly(c,[[16,-20],[21,-31],[23,-15]],body);c.strokeStyle=body;c.lineWidth=3;c.beginPath();c.moveTo(-14,-8);c.quadraticCurveTo(-30,-15,-28,-24);c.stroke();}}
      if(shape!=='eye'){U.circle(c,-4,-21,2,'#292c3b');U.circle(c,4,-21,2,'#292c3b');}if(e.status.ice){c.strokeStyle='#beefff';c.beginPath();c.arc(0,-15,23,0,TAU);c.stroke();}if(e.status.fire)U.circle(c,-15,-15,3,'#ffba70');if(e.status.poison)U.circle(c,15,-15,3,'#bce387');c.restore();
      if(e.hp<e.maxHp||e.mini){c.fillStyle='#201f30';c.fillRect(e.x-e.r,e.y-e.r*3.2-7,e.r*2,4);c.fillStyle=e.mini?'#ffa978':'#d9c59e';c.fillRect(e.x-e.r,e.y-e.r*3.2-7,e.r*2*Math.max(0,e.hp/e.maxHp),4);}if(e.mini){c.fillStyle='#f5d29e';c.font='11px Georgia';c.textAlign='center';c.fillText(e.name||'Mini-boss',e.x,e.y-e.r*3.2-14);}if(e.wind>0){c.strokeStyle='#ffb18caa';c.lineWidth=e.type.ai==='sniper'?2:13;c.beginPath();c.moveTo(e.x,e.y);c.lineTo(e.x+Math.cos(e.savedAngle)*450,e.y+Math.sin(e.savedAngle)*450);c.stroke();}
    }
    drawProjectile(c,b){const col=A.colors[b.element]||'#d6d4ef';c.save();c.translate(b.x,b.y);c.rotate(Math.atan2(b.vy,b.vx));c.globalAlpha=.28;c.fillStyle=b.enemy?'#f17863':col;U.poly(c,[[-36,-b.r*.4],[0,-b.r],[5,0],[0,b.r],[-36,b.r*.4]],c.fillStyle);c.globalAlpha=1;
      if(b.enemy){U.circle(c,0,0,b.r+2,'#6e394a');U.circle(c,0,0,b.r,'#ffb587');U.circle(c,0,0,2,'#fff0cd');}
      else if(['ice','stone','nature'].includes(b.element)||['daggers','scythe'].includes(b.style)){const r=b.style==='hammer'?11:5;U.poly(c,[[14,0],[-5,-r],[-1,0],[-5,r]],col,'#ffffff70');c.strokeStyle='#fff6df';c.lineWidth=1;c.beginPath();c.moveTo(-4,0);c.lineTo(13,0);c.stroke();}
      else if(b.element==='fire'){U.poly(c,[[-22,0],[-9,-6],[0,-b.r-3],[9,0],[0,b.r+3],[-10,5]],'#ee955c');U.ellipse(c,1,0,b.r,b.r*.7,'#ffe4a6');U.circle(c,3,-1,2,'#fffae1');}
      else{U.circle(c,0,0,b.r+2,col+'70');U.poly(c,[[9,0],[0,-7],[-9,0],[0,7]],col);U.circle(c,1,0,2,'#fff6d9');}c.restore();
    }
    zone(c,z){super.zone(c,z);if(z.delay>0)return;const col=A.colors[z.element]||'#e4cfa2',t=this.ambient,progress=1-U.clamp(z.life/z.total,0,1);c.save();c.translate(z.x,z.y);c.globalAlpha=z.enemy?.35:.32;c.strokeStyle=col;c.lineWidth=2;
      const radius=z.once?z.r*(.55+progress*.45):z.r*.8;c.beginPath();c.arc(0,0,radius,t,t+TAU);c.stroke();
      if(z.element==='fire'){for(let i=0;i<14;i++){const a=i*TAU/14+t*.15,r=radius*(.65+.25*Math.sin(i*5+t*3));U.poly(c,[[Math.cos(a)*r-5,Math.sin(a)*r],[Math.cos(a)*r,Math.sin(a)*r-18-Math.sin(t*5+i)*6],[Math.cos(a)*r+6,Math.sin(a)*r]],i%2?'#ffd98a':'#f0a06d');}}
      else if(z.element==='ice'){for(let i=0;i<10;i++){const a=i*TAU/10;c.save();c.rotate(a);U.poly(c,[[radius*.5,-4],[radius*.9,0],[radius*.5,5],[radius*.63,0]],'#d2f4ff');c.restore();}}
      else if(z.element==='nature'){for(let i=0;i<8;i++){const a=i*TAU/8;c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(Math.cos(a+.5)*radius*.6,Math.sin(a+.5)*radius*.6,Math.cos(a)*radius,Math.sin(a)*radius);c.stroke();U.ellipse(c,Math.cos(a)*radius*.7,Math.sin(a)*radius*.7,9,4,'#c2dfa2');}}
      else if(z.element==='poison'){for(let i=0;i<12;i++)U.circle(c,Math.cos(i*2.4)*radius*.7,Math.sin(i*2.4)*radius*.7+Math.sin(t*3+i)*7,5+Math.sin(i+t)*2,'#bddd9370');}
      else{for(let i=0;i<8;i++){c.save();c.rotate(i*TAU/8+t*.25);c.beginPath();c.moveTo(radius*.45,0);c.lineTo(radius*.72,7);c.lineTo(radius*.67,-5);c.lineTo(radius,0);c.stroke();c.restore();}}
      c.restore();
    }
    minimap(){const cv=document.getElementById('minimap');if(!cv)return;const c=cv.getContext('2d'),g=this.g,w=g.world,sx=146/w.width,sy=123/w.height;c.fillStyle='#14232d';c.fillRect(0,0,146,123);for(let j=0;j<w.rows;j++)for(let i=0;i<w.cols;i++)if(w.fog[j*w.cols+i]){c.fillStyle=w.biome.light+'80';c.fillRect(i*100*sx,j*100*sy,100*sx+1,100*sy+1);}for(const e of w.events)if(!e.used&&w.isKnown(e.x,e.y)){c.fillStyle=e.type==='portal'?'#bdedef':'#eed49b';c.fillRect(e.x*sx-2,e.y*sy-2,4,4);}for(const e of g.enemies)if(e.isBoss||e.mini)U.circle(c,e.x*sx,e.y*sy,e.isBoss?3:2,'#f29b89');U.circle(c,g.player.x*sx,g.player.y*sy,3,'#fff5d8');}
  }
  A.Renderer=Renderer;
})(window.Aeren);

;

/* Module: js/ui.js */
'use strict';
(function(A){
  const{
    Data,Save,U
  }=A;
  const types={
    auto:'Zaklęcie samoczynne',active:'Umiejętność aktywna',passive:'Talent pasywny',legendary:'Dar legendarny'
  };
  const eventNames={
    chest:'Skrzynia wędrowca',fountain:'Źródło odnowy',shrine:'Ołtarz przysięgi',merchant:'Wędrowny kupiec',curse:'Przeklęta szkatuła',arena:'Krąg próby',npc:'Kartograf',treasure:'Komnata skarbów',elite:'Echo dawnych wojowników',reward:'Nagroda próby',bossreward:'Dar strażnika',portal:'Brama następnego źródła'
  };
  const unlocks=[{
    id:'chronos',name:'Zatrzymany świt',cost:30,desc:'Dodaje legendarny dar kontroli czasu do puli awansów.'
  },{
    id:'relics',name:'Relikwiarz',cost:35,desc:'Odblokowuje cztery dodatkowe relikty: Złamaną gwiazdę, Przysięgę, Koronę cierni i Łzę księżyca.'
  },{
    id:'weapon',name:'Rozszczepiona broń',cost:25,desc:'Opcjonalny wariant każdej broni: +1 pocisk, -18% obrażeń.'
  },{
    id:'wild',name:'Dziki świt',cost:45,desc:'Modyfikator wyprawy: +25% obrażeń, wrogowie +20% szybkości i obrażeń.'
  },{
    id:'caves',name:'Droga przez kryształy',cost:60,desc:'Dodatkowa trasa: rozpocznij w Kryształowych grotach i przejdź ostatnie trzy biomy.'
  }];
  class UI{
    constructor(g){
      this.g=g;
      this.overlay=document.getElementById('overlay');
      this.hud=document.getElementById('hud');
      this.selected='ilya';
      this.lastHUD=0;
      this.codexTab='abilities';
      document.addEventListener('click',e=>{
        const b=e.target.closest('[data-action]');
        if(b&&!b.disabled){
          A.Audio.init();
          A.Audio.play('click');
          this.action(b.dataset.action,b.dataset.value);
        }
      });
      document.addEventListener('input',e=>{
        const key=e.target.dataset.setting;
        if(key){
          Save.data.settings[key]=e.target.type==='checkbox'?e.target.checked:Number(e.target.value);
          Save.write();
          if(key==='scale')g.resize();
        }
      });

    }
    button(label,action,value='',style=''){
      return`<button class="btn ${style}" data-action="${action}" data-value="${value}">${label}</button>`;
    }
    panel(title,eyebrow,body,close='menu',narrow=false){
      this.overlay.dataset.modal='true';
      this.overlay.innerHTML=`<section class="panel ${narrow?'narrow':''}"><div class="panelhead"><div><span class="label" style="color:var(--gold)">${eyebrow}</span><h1>${title}</h1></div>${close?`<button class="close" aria-label="Zamknij" data-action="${close}">×</button>`:''}</div>${body}</section>`;
    }
    hide(){
      this.overlay.dataset.modal='false';
      this.overlay.innerHTML='';
      this.hud.hidden=false;
    }
    menu(){
      this.overlay.dataset.modal='false';
      this.g.state='menu';
      this.hud.hidden=true;
      this.overlay.innerHTML=`<main class="menu"><div class="eyebrow">Opowieści z zielonego pogranicza</div><h1 class="brand">AEREN</h1><div class="subtitle">Korzenie świtu</div><p class="intro">Sześć źródeł straciło swój blask.<br>Wyrusz tam, gdzie budzi się las.<br>Każda wyprawa pozostawia korzenie.</p><nav>${this.button('Rozpocznij wyprawę　 ↗','heroes','','primary')}${this.button('Ogród wspomnień　 ·　 '+Save.data.currency+' ✦','meta')}${this.button('Atlas świata','codex')}${this.button('Ustawienia','settings','menu','ghost')}</nav><div class="footer">AUTORSKIE FANTASY SURVIVOR　 /　 WERSJA 1.0<br><br>WASD · RUCH　 MYSZ · CELOWANIE　 SPACJA · DASH</div><div class="worldtag"><span class="label">01 / 06 · Emerald Plains</span><br><strong>Szmaragdowe równiny</strong><br><span class="tiny">Początek kolejnej opowieści</span></div></main>`;
      if(Save.error&&!this.warned){
        this.warned=true;
        this.toast('Zapis przeglądarki jest niedostępny','Możesz grać, ale postęp nie przetrwa zamknięcia.');
      }
    }
    heroes(){
      this.g.state='heroes';
      this.hud.hidden=true;
      const cards=Data.heroes.map(h=>{
        const unlocked=Save.data.heroes.includes(h.id);
        return`<button class="card ${this.selected===h.id?'selected':''}" style="--accent:${h.color}" data-action="hero" data-value="${h.id}" ${unlocked?'':'disabled'}><span class="label">${h.title}</span><span class="symbol">${h.icon}</span><h3>${h.name}</h3><p>${h.desc}</p><span class="bottom">${unlocked?h.weapon:'Odblokowanie: '+h.cost+' ✦'}</span></button>`;
      }).join('');
      const h=Data.heroes.find(x=>x.id===this.selected);
      this.panel('Wybierz swoją opowieść','Wyprawa · około 25–35 minut',`<div class="cards">${cards}</div><div class="hero-detail"><b>${h.weapon}</b> · ${h.hp} HP · ${h.speed} szybkości<br>${h.passive}<br>Umiejętność początkowa: ${Data.byId[h.skill].name}.</div><div class="toggle-row">${Save.data.unlocks.includes('weapon')?'<label><input type="checkbox" id="alt-weapon"> Rozszczepiona broń</label>':''}${Save.data.unlocks.includes('wild')?'<label><input type="checkbox" id="wild-run"> Dziki świt</label>':''}${Save.data.unlocks.includes('caves')?'<label><input type="checkbox" id="cave-start"> Trasa przez groty</label>':''}</div><div class="actions">${this.button('← Powrót','menu')}${this.button('Wejdź do Aeren　 ↗','start','','primary')}</div><p class="hint">Atak automatyczny jest domyślnie włączony. Przytrzymaj LPM, aby celować ręcznie. <kbd>Q</kbd> przełącza automatykę. Wyprawy nie są zapisywane w trakcie; odkrycia i odblokowania pozostają na kolejne próby.</p>`);
    }
    meta(){
      this.g.state='meta';
      this.hud.hidden=true;
      let cards=Data.heroes.filter(h=>h.cost).map(h=>({
        id:h.id,name:h.name+' · '+h.title,cost:h.cost,desc:h.passive,hero:true
      })).concat(unlocks);
      this.panel('Ogród wspomnień',`${Save.data.currency} ✦ odłamków pamięci`, `<p>Wspomnienia otwierają nowe drogi. Zdobywasz je po zakończeniu wyprawy — również po porażce.</p><div class="catalog">${cards.map(x=>{const owned=x.hero?Save.data.heroes.includes(x.id):Save.data.unlocks.includes(x.id);return`<article><h3>${x.name}</h3><p>${x.desc}</p><button class="btn" data-action="unlock" data-value="${x.id}" ${owned||Save.data.currency<x.cost?'disabled':''}>${owned?'Odblokowano':x.cost+' ✦ · Odblokuj'}</button></article>`;}).join('')}</div><div class="stats"><div class="stat"><strong>${Save.data.stats.runs}</strong><span>Wypraw</span></div><div class="stat"><strong>${Save.data.stats.kills}</strong><span>Pokonanych wrogów</span></div><div class="stat"><strong>${Save.data.stats.wins}</strong><span>Uwolnionych światów</span></div></div>`);
    }
    unlock(id){
      const hero=Data.heroes.find(h=>h.id===id&&h.cost),u=hero||unlocks.find(u=>u.id===id);
      if(!u)return;
      const array=hero?Save.data.heroes:Save.data.unlocks;
      if(array.includes(id)||Save.data.currency<u.cost)return;
      Save.data.currency-=u.cost;
      array.push(id);
      Save.write();
      this.meta();
    }
    settings(back='menu'){
      this.g.settingsBack=back;
      this.g.state='settings';
      const s=Save.data.settings;
      const sliders=[['scale','Skala renderowania',.5,1.5,.25],['particles','Liczba cząsteczek',0,1,.25],['shake','Wstrząsy kamery',0,1,.1],['master','Głośność ogólna',0,1,.05],['music','Muzyka i ambient',0,1,.05],['sfx','Efekty dźwiękowe',0,1,.05]];
      this.panel('Dostrój swój świat','Ustawienia',`<div class="settings">${sliders.map(x=>`<label class="setting">${x[1]}<input aria-label="${x[1]}" type="range" min="${x[2]}" max="${x[3]}" step="${x[4]}" value="${s[x[0]]}" data-setting="${x[0]}"></label>`).join('')}<label class="setting">Liczby obrażeń<input type="checkbox" data-setting="numbers" ${s.numbers?'checked':''}></label><label class="setting">Autocelowanie zwykłych ataków<input type="checkbox" data-setting="autoAim" ${s.autoAim!==false?'checked':''}></label><label class="setting">Automatyczny atak<input type="checkbox" data-setting="auto" ${s.auto?'checked':''}></label></div><div class="rule"></div><p class="hint">Dźwięk rozpoczyna się po pierwszym zatwierdzeniu wyboru. Ustawienia i postęp zapisują się lokalnie w tej przeglądarce.</p>${this.button('Resetuj zapis','resetPrompt','','ghost danger')}`,back==='pause'?'pause':'menu',true);
    }
    levelUp(choices){
      const p=this.g.player;
      this.panel('Wybierz to, czym się staniesz',`Przebudzenie · poziom ${p.level}`,`<p>Świat czeka. Wybierz jeden dar.</p><div class="cards">${choices.map(a=>this.skillCard(a)).join('')}</div><p class="hint">${this.g.boss?'Walka ze strażnikiem jest wstrzymana. ':''}Aktywne umiejętności zajmują maksymalnie 4 miejsca. Ulepszenia tego samego daru sumują się do poziomu 5.</p>`,null);
    }
    skillCard(a){
      const l=this.g.has(a.id),r=Data.rarity[a.rarity];
      return`<button class="card ${r.id}" style="--accent:${r.color}" data-action="choose" data-value="${a.id}"><span class="label">${r.name} · ${types[a.type]}</span><span class="symbol">${a.icon}</span><h3>${a.name}</h3><p>${a.desc}</p><span class="bottom">${l?'POZIOM '+l+' → '+(l+1):'NOWY DAR · POZIOM 1'}${Data.synergies.some(s=>(s.a===a.id&&this.g.has(s.b))||(s.b===a.id&&this.g.has(s.a)))?' · ✦ SYNERGIA':''}</span></button>`;
    }
    equip(id){
      const a=Data.byId[id];
      this.panel('Zrób miejsce na nowy dar',a.name,`<p>Masz już cztery aktywne umiejętności. Wybierz miejsce dla nowej. Poziomy poprzedniej umiejętności pozostają zachowane; skład możesz zmienić w panelu postaci.</p><div class="cards">${this.g.player.active.map((x,i)=>`<button class="card" data-action="equip" data-value="${i}"><span class="label">Miejsce ${i+1}</span><span class="symbol">${Data.byId[x].icon}</span><h3>${Data.byId[x].name}</h3><p>Poziom ${this.g.has(x)}</p></button>`).join('')}</div>`,null);
    }
    pause(){
      this.g.state='paused';
      this.panel('Chwila oddechu','Wyprawa wstrzymana',`<p>${this.g.world.biome.name} · ${U.time(this.g.time)} · poziom ${this.g.player.level}</p><div class="actions">${this.button('Wróć do wyprawy','resume','','primary')}${this.button('Postać i ekwipunek','build')}</div><div class="actions">${this.button('Ustawienia','settings','pause')}${this.button('Zakończ wyprawę','abandon')}</div><div class="rule"></div>${this.controls()}`,'resume',true);
    }
    controls(){
      return`<div class="hint"><kbd>WASD</kbd> / strzałki · ruch　 <kbd>Mysz</kbd> · celowanie<br><kbd>LPM</kbd> · atak　 <kbd>PPM</kbd> / <kbd>1</kbd> · pierwsza umiejętność<br><kbd>1–4</kbd> · umiejętności　 <kbd>Spacja</kbd> · dash<br><kbd>E</kbd> · interakcja　 <kbd>Q</kbd> · automatyczny atak<br><kbd>Tab</kbd> · postać　 <kbd>Esc</kbd> · pauza　 <kbd>F2</kbd> · debug<br><br>Gamepad: lewy drążek ruch, prawy celowanie, RT atak, A dash, B interakcja, X/Y/LB/RB umiejętności, Start pauza. Menu obsługujesz myszą lub klawiaturą.</div>`;
    }
    build(){
      this.g.state='build';
      const g=this.g,s=g.stats,p=g.player;
      const stats=[['HP',`${Math.ceil(p.hp)} / ${s.maxHp}`],['Pancerz',`${s.armor.toFixed(0)} (${Math.round(s.armor/(s.armor+80)*100)}%)`],['Obrażenia',s.damage.toFixed(1)],['Tempo broni',(s.rate/p.hero.rate).toFixed(2)+'×'],['Szybkość',s.speed.toFixed(0)],['Krytyk',Math.round(s.crit*100)+'%'],['Siła krytyka',s.critDamage.toFixed(2)+'×'],['Odnowienie',(1/(1+s.cdr)).toFixed(2)+'× czasu'],['Obszar',s.area.toFixed(2)+'×'],['Prędkość pocisków',s.velocity.toFixed(2)+'×'],['Pociski',s.count],['Kradzież życia',Math.round(s.steal*100)+'%'],['Unik',Math.round(s.dodge*100)+'%'],['Szczęście',Math.round(s.luck*100)+'%'],['Doświadczenie',Math.round(s.xp*100)+'%'],['Złoto',Math.round(s.gold*100)+'%']];
      const skills=Object.entries(p.skills).map(([id,l])=>`<article><h3>${Data.byId[id].icon} ${Data.byId[id].name} · ${l}</h3><p>${Data.byId[id].desc}</p>${Data.byId[id].type==='active'?this.button(p.active.includes(id)?'Miejsce '+(p.active.indexOf(id)+1):'Przypisz do miejsca','reequip',id):''}</article>`).join('');
      this.panel(p.hero.name+' · '+p.hero.title,'Postać i ekwipunek',`<div class="catalog">${stats.map(x=>`<article><span class="label">${x[0]}</span><h3>${x[1]}</h3></article>`).join('')}</div><h2>Dary i umiejętności</h2><div class="catalog">${skills}</div><h2>Odkryte kombinacje</h2><div class="catalog">${[...g.runSynergies].map(id=>{const a=Data.synergies.find(s=>s.id===id);return`<article><h3>${a.name}</h3><p>${a.desc}</p></article>`;}).join('')||'<p>Łącz dary różnych żywiołów, aby odkrywać synergie.</p>'}</div><h2>Przedmioty</h2><div class="catalog">${[...g.relics,...g.items].map(x=>`<article style="border-color:${Data.rarity[x.rarity].color}55"><h3>${x.icon} ${x.name}</h3><p>${x.desc}</p></article>`).join('')||'<p>Przedmioty otrzymujesz przy awansie bohatera.</p>'}</div>`,'resume');
    }
    event(e){
      const name=eventNames[e.type];
      let text='',actions='';
      if(['chest','treasure'].includes(e.type)){
        text=e.type==='treasure'?'W zamkniętej komnacie ocalał epicki talizman.':'Pomiędzy korzeniami dostrzegasz skórzany woreczek i lśniący talizman.';
        actions=this.button('Otwórz · złoto i przedmiot','event','loot','primary');
      }
      if(['shrine','curse'].includes(e.type)){
        text='Stare źródło spełnia życzenia, lecz pamięta każdą cenę.';
        actions=this.button('+25% obrażeń · wrogowie +20% szybkości','event','power')+this.button('Losowy legendarny dar · oddaj 40% obecnego HP','event','curse');
      }
      if(e.type==='merchant'){
        text=`Wędrowiec rozkłada skarby na wysłużonym płaszczu. Masz ${this.g.gold} szt. złota.`;
        actions=`<button class="btn" data-action="event" data-value="buyheal" ${this.g.gold<30?'disabled':''}>Napój · +50 HP · 30 złota</button><button class="btn" data-action="event" data-value="buyitem" ${this.g.gold<60?'disabled':''}>Rzadki talizman · 60 złota</button>`;
      }
      if(e.type==='arena'){
        text='Krąg przyzywa natarcie przeciwników na 40 sekund. Przetrwanie pozwala wybrać potężny relikt.';
        actions=this.button('Podejmij próbę','event','arena','primary');
      }
      if(e.type==='elite'){
        text='Przyzwij trzech elitarnych wojowników. Natychmiast otrzymasz 45 złota i 30 doświadczenia — ale pozostaniesz z nimi w walce.';
        actions=this.button('Przebudź wojowników','event','elite','primary');
      }
      if(e.type==='npc'){
        text='„Każda droga prowadzi do wspomnienia”. Kartograf podaruje ci 20 złota i oznaczy spotkania na mapie.';
        actions=this.button('Wysłuchaj opowieści','event','npc','primary');
      }
      if(e.type==='reward'){
        const options=this.g.relicOptions();
        text='Zabierz jeden relikt. Jego dar i cena pozostaną z tobą do końca wyprawy.';
        actions=options.map(r=>`<button class="card" data-action="event" data-value="relic:${r.id}"><span class="label">${Data.rarity[r.rarity].name} · Relikt</span><span class="symbol">${r.icon}</span><h3>${r.name}</h3><p>${r.desc}</p></button>`).join('');
        if(!options.length)actions=this.button('Zabierz złoto i talizman','event','loot','primary');
      }
      this.panel(name,'Spotkanie na szlaku',`<p>${text}</p><div class="${e.type==='reward'?'cards':'actions'}">${actions}</div><div class="actions">${this.button('Odejdź','event','leave','','')}</div>`,null,e.type!=='reward');
    }
    results(r){
      this.hud.hidden=true;
      this.panel(r.win?'Świat znów oddycha':'Korzenie pamiętają',r.win?'Wyprawa zakończona zwycięstwem':'Koniec wyprawy',`<p>${r.win?(this.g.initialBiome?'Kryształowy szlak został uwolniony. Kolejna opowieść będzie inna.':'Sześć źródeł odzyskało światło. Kolejna opowieść będzie inna.'):'Twój ślad pozostaje w ogrodzie. Z każdym powrotem poznajesz Aeren lepiej.'}</p><div class="stats"><div class="stat"><strong>${U.time(r.time)}</strong><span>Czas wyprawy</span></div><div class="stat"><strong>${r.kills}</strong><span>Pokonani</span></div><div class="stat"><strong>${r.level}</strong><span>Poziom</span></div><div class="stat"><strong>${r.bosses}</strong><span>Strażnicy</span></div><div class="stat"><strong>+${r.reward} ✦</strong><span>Pamięć</span></div><div class="stat"><strong>${this.g.runSynergies.size}</strong><span>Synergie</span></div></div>${r.practice?'<p class="hint">Wyprawa treningowa: użyto narzędzi developerskich, dlatego nie przyznano odłamków ani rekordu.</p>':''}<div class="actions">${this.button('Jeszcze jedna wyprawa','heroes','','primary')}${this.button('Ogród wspomnień','meta')}</div><div class="actions">${this.button('Menu główne','menu','','ghost')}</div><p class="seed">ZIARNO ŚWIATA ${r.seed}</p>`,null,true);
    }
    codex(tab='abilities'){
      this.g.state='codex';
      this.hud.hidden=true;
      this.codexTab=tab;
      const tabs=[['abilities','Dary'],['synergies','Synergie'],['relics','Arsenał'],['world','Świat'],['enemies','Bestiariusz'],['records','Wyprawy'],['help','Jak grać']];
      let content='';
      if(tab==='abilities')content=Data.abilities.map(a=>`<article><span class="label" style="color:${Data.rarity[a.rarity].color}">${Data.rarity[a.rarity].name} · ${types[a.type]}</span><h3>${a.icon} ${a.name}</h3><p>${a.desc}</p></article>`).join('');
      if(tab==='synergies')content=Data.synergies.map(s=>{
        const discovered=Save.data.synergies.includes(s.id);
        return`<article><h3>${s.hidden&&!discovered?'Nieodkryta kombinacja':s.name}</h3><p>${s.hidden&&!discovered?'Świat skrywa połączenia, których nie zapisano w atlasach.':Data.byId[s.a].name+' + '+Data.byId[s.b].name+'<br>'+s.desc}</p><small>${discovered?'✦ Odkryto':'◇ Do odkrycia'}</small></article>`;
      }).join('');
      if(tab==='relics')content=Data.weapons.map(r=>`<article><span class="label" style="color:${Data.rarity[r.rarity].color}">${Data.rarity[r.rarity].name} · broń · 5 rang</span><h3>${r.icon} ${r.name}</h3><p>${r.desc}</p></article>`).join('')+Data.itemTemplates.map(r=>`<article><span class="label">Przedmiot · 5 rang · 5 rzadkości</span><h3>${r.icon} ${r.name}</h3><p>Losowany przy awansie. Wyższa rzadkość i ranga zwiększają premię. Maksymalnie 6 przedmiotów naraz.</p></article>`).join('');
      if(tab==='world')content=Data.biomes.map((b,i)=>`<article><span class="label">${String(i+1).padStart(2,'0')} · ${b.en}</span><h3>${b.name}</h3><p>${b.mechanic}</p><p>Strażnik: ${b.boss}<br>Mini-bossowie: 1:05, 2:15, 3:25<br>Przebudzenie: 4:00 w danym biomie.</p></article>`).join('');
      if(tab==='enemies')content=Data.enemyTypes.map(e=>`<article><span class="label">${Data.biomes[e.biome].name}</span><h3>${e.name}</h3><p>${{trapper:'Zapowiada trujące pułapki pod graczem.',splitter:'Po śmierci rozpada się na dwóch mniejszych wrogów.',leaper:'Zapowiada skok i uderza we wskazane miejsce.',artillery:'Ostrzeliwuje zapowiedziane obszary.',siphon:'Odbiera życie w zasięgu swojej aury.',chase:'Ściga i atakuje z bliska.',swarm:'Szybki, delikatny wróg atakujący w grupie.',charge:'Zaznacza kierunek, a następnie szarżuje.',ranged:'Strzela wachlarzem trzech pocisków.',orbit:'Krąży wokół gracza i osacza.',summon:'Przywołuje kolejnych przeciwników.',denial:'Tworzy niebezpieczne obszary na ziemi.',teleport:'Zmienia pozycję i wywołuje zapowiedziany wybuch.',shield:'Tarcza blokuje część obrażeń. Atakuj z innej strony.',sniper:'Pokazuje linię celowania przed szybkim strzałem.',heal:'Leczy pobliskich sojuszników.',kamikaze:'Zbliża się, zatrzymuje i wybucha.'}[e.ai]}</p></article>`).join('');
      if(tab==='records')content=Save.data.best.map(r=>`<article><h3>${r.hero} · ${r.win?'Zwycięstwo':'Powrót do korzeni'}</h3><p>${U.time(r.time)} · poziom ${r.level}<br>${r.kills} pokonanych · ${r.bosses} strażników<br>${r.score} punktów</p></article>`).join('')||'<p>Twoja pierwsza opowieść nie została jeszcze zapisana.</p>';
      if(tab==='help')content=`<article><h3>Sześć źródeł</h3><p>Eksploruj, zbieraj zielone kryształy doświadczenia i rozwijaj dary. Strażnik budzi się po czterech minutach w każdym biomie. Pokonaj go, odbierz legendarny dar i wróć do portalu przy centralnym obelisku. Szóste źródło kończy wyprawę.</p></article><article><h3>Rytm walki</h3><p>Automatyczny atak pozwala skupić się na ruchu. Ciepłe okręgi i linie na ziemi ostrzegają przed atakami. Dash daje chwilową niewrażliwość. Wrogowie wzmacniają się z czasem, więc nie zwlekaj po zwycięstwie nad bossem.</p></article><article><h3>Skarby i decyzje</h3><p>Podejdź do znacznika i naciśnij E. Skrzynie dają przedmioty; arena nagradza reliktem. Kupiec przyjmuje złoto. Ołtarze wymieniają bezpieczeństwo na moc. Minimapę odkrywasz idąc.</p></article><article><h3>Sterowanie</h3>${this.controls()}</article>`;
      this.panel('Atlas Aeren','Rzeczy poznane i te, które czekają',`<div class="tabs">${tabs.map(x=>this.button(x[1],'codextab',x[0],tab===x[0]?'primary':'')).join('')}</div><div class="catalog">${content}</div>`);
    }
    buildHUD(){
      this.hud.innerHTML=`<div class="hud-top"><div class="portrait"><span>${this.g.player.hero.icon}</span></div><div class="hpgroup"><div class="name">${this.g.player.hero.name.toUpperCase()} · <span id="level-text"></span></div><div class="bar"><i id="hp-fill"></i></div><div class="bar xp"><i id="xp-fill"></i></div><div class="healthtext"><span id="hp-text"></span><span id="xp-text"></span></div></div></div><div class="hud-center"><div class="biome" id="biome-text"></div><div class="timer" id="timer-text"></div></div><div class="hud-right"><div class="currency" id="gold-text"></div><canvas id="minimap" width="146" height="123" aria-label="Odkryta mapa biomu"></canvas></div><div class="objective" id="objective"></div><div class="buffs" id="buffs"></div><div class="bossbar" id="boss-hud" hidden><span id="boss-name"></span><div class="bar"><i id="boss-fill"></i></div></div><div class="hud-bottom" id="abilities"></div><div class="hud-controls"><kbd>WASD</kbd> ruch　 <kbd>Spacja</kbd> dash<br><kbd>E</kbd> interakcja　 <kbd>Tab</kbd> postać<br><kbd>Q</kbd> automatyka　 <kbd>Esc</kbd> pauza</div><div class="interaction" id="interaction" hidden></div>`;
      this.hud.hidden=false;
      this.lastHUD=0;
    }
    update(dt){
      this.lastHUD+=dt;
      if(this.lastHUD<.1||this.hud.hidden||!document.getElementById('hp-fill'))return;
      this.lastHUD=0;
      const g=this.g,p=g.player,s=g.stats,$=id=>document.getElementById(id);
      $('level-text').textContent='POZ. '+p.level;
      $('hp-fill').style.width=U.clamp(p.hp/s.maxHp*100,0,100)+'%';
      $('xp-fill').style.width=p.xp/p.nextXP*100+'%';
      $('hp-text').textContent=Math.ceil(Math.max(0,p.hp))+' / '+s.maxHp+' HP';
      $('xp-text').textContent=Math.floor(p.xp)+' / '+p.nextXP+' XP';
      $('biome-text').textContent=g.world.biome.name;
      $('timer-text').textContent=U.time(g.time)+'　·　'+(g.biome+1)+' / 6　·　'+g.directorPhase;
      $('gold-text').textContent='◈ '+g.gold+'　 /　 ✦ '+g.kills;
      $('objective').innerHTML=g.boss?'<strong>Uwolnij źródło</strong><br>Unikaj zapowiadanych ataków.':g.bosses>g.biome?'<strong>Źródło uwolnione</strong><br>Odbierz dar ♛. Wróć do bramy ◎ przy obelisku.':'<strong>Odnajdź uśpione źródło</strong><br>Przebudzenie strażnika za '+U.time(Math.max(0,240-g.stageTime))+(g.challenge?'<br>Próba areny: '+Math.ceil(g.challenge.left)+' s':'');
      $('buffs').innerHTML=[p.guard>0?'⬡ Kamienna ochrona':'',p.status.poison?'♧ Zatrucie':'',p.status.fire?'✹ Podpalenie':'',p.status.ice?'❄ Spowolnienie':'',g.runSynergies.size?'✦ '+g.runSynergies.size+' aktywnych synergii':''].filter(Boolean).join('<br>');
      $('boss-hud').hidden=!g.boss;
      if(g.boss){
        $('boss-name').textContent=g.boss.type.name+' · Faza '+g.boss.phase;
        $('boss-fill').style.width=g.boss.hp/g.boss.maxHp*100+'%';
      }
      let slots='';
      for(let i=0;i<4;i++){
        const a=Data.byId[p.active[i]],cd=a?p.cooldowns[a.id]||0:0;
        slots+=`<div class="slot" title="${a?a.name+': '+a.desc:'Zdobądź aktywną umiejętność podczas awansu'}"><b>${i+1}</b>${a?a.icon:'·'}<small>${a?'POZ. '+g.has(a.id):'PUSTE'}</small>${cd>0?`<div class="cool">${Math.ceil(cd)}</div>`:''}</div>`;
      }
      slots+=`<div class="slot" title="Dash · chwilowa niewrażliwość"><b>SPACJA</b>➶<small>DASH</small>${p.dashCd>0?`<div class="cool">${p.dashCd.toFixed(1)}</div>`:''}</div>`;
      $('abilities').innerHTML=slots;
      const e=g.world.nearestEvent(p);
      $('interaction').hidden=!e;
      if(e)$('interaction').innerHTML='<kbd>E</kbd>　'+eventNames[e.type];
      g.renderer.minimap();
    }
    toast(title,subtitle=''){
      const parent=document.getElementById('toast'),el=document.createElement('div');
      el.className='toast';
      el.textContent=title;
      if(subtitle){
        const s=document.createElement('small');
        s.textContent=subtitle;
        el.appendChild(s);
      }
      parent.appendChild(el);
      while(parent.children.length>3)parent.firstChild.remove();
      setTimeout(()=>el.remove(),4200);
    }
    action(action,value){
      const g=this.g;
      switch(action){
        case'menu':this.menu();
        break;
        case'heroes':this.heroes();
        break;
        case'hero':if(Save.data.heroes.includes(value)){
          this.selected=value;
          this.heroes();
        }
        break;
        case'start':g.start(this.selected,{
          alternate:!!document.getElementById('alt-weapon')?.checked,modifier:document.getElementById('wild-run')?.checked?'wild':'normal',startBiome:document.getElementById('cave-start')?.checked?3:0
        });
        break;
        case'meta':this.meta();
        break;
        case'unlock':this.unlock(value);
        break;
        case'settings':this.settings(value);
        break;
        case'codex':this.codex();
        break;
        case'codextab':this.codex(value);
        break;
        case'choose':g.choose(value);
        break;
        case'resume':g.resume();
        break;
        case'pause':this.pause();
        break;
        case'build':this.build();
        break;
        case'event':g.eventAction(value);
        break;
        case'equip':g.player.active[Number(value)]=g.pendingEquip;
        g.pendingEquip=null;
        g.resume();
        break;
        case'reequip':if(g.player.active.includes(value))return;
        g.pendingEquip=value;
        if(g.player.active.length<3){
          g.player.active.push(value);
          this.build();
        }
        else{
          g.state='equip';
          this.equip(value);
        }
        break;
        case'abandon':g.finish(false);
        break;
        case'resetPrompt':this.panel('Usunąć wspomnienia?','Reset zapisu',`<p>Ta operacja usuwa wszystkie odblokowania, odłamki, rekordy, odkrycia i ustawienia zapisane w tej przeglądarce.</p><div class="actions">${this.button('Zachowaj zapis','settings',g.settingsBack)}${this.button('Usuń cały zapis','reset','','danger')}</div>`,null,true);
        break;
        case'reset':Save.reset();
        this.selected='ilya';
        g.resize();
        this.menu();
        this.toast('Zapis został zresetowany');
        break;
      }
    }
  }
  A.UI=UI;
})(window.Aeren);

;

/* Module: js/ui-v2.js */
'use strict';
(function(A){const {Data:D,Save:S,U}=A,Base=A.UI;
  const names={portal:'Brama kolejnej rundy',fountain:'Źródło odnowy',shrine:'Ołtarz ryzyka',arena:'Próba przetrwania',npc:'Kartograf',elite:'Wyzwij mini-bossa'};
  class UI extends Base{
    constructor(g){super(g);this.mode='normal';this.mission=0;this.masterHero='ilya';
      document.addEventListener('keydown',e=>{
        if(g.state==='playing'||!this.overlay.children.length)return;
        const list=[...this.overlay.querySelectorAll('button:not(:disabled),input,select')].filter(x=>x.getClientRects().length);
        if(!list.length)return;let index=list.indexOf(document.activeElement);
        if(['menuLeft','menuRight','menuUp','menuDown'].some(id=>A.Controls.key(id)===e.code)){
          if(document.activeElement?.matches('input[type="range"]')&&['menuLeft','menuRight'].some(id=>A.Controls.key(id)===e.code)){e.preventDefault();e.stopImmediatePropagation();const slider=document.activeElement;slider[e.code===A.Controls.key('menuLeft')?'stepDown':'stepUp']();slider.dispatchEvent(new Event('input',{bubbles:true}));return;}
          e.preventDefault();e.stopImmediatePropagation();g.input.clear();const delta=['menuLeft','menuUp'].some(id=>A.Controls.key(id)===e.code)?-1:1;index=(Math.max(-1,index)+delta+list.length)%list.length;list[index].focus();list[index].scrollIntoView({block:'nearest'});
        }else if(e.code===A.Controls.key('confirm')){e.preventDefault();e.stopImmediatePropagation();g.input.clear();if(e.repeat)return;const el=index>=0?list[index]:list[0];el.click();}
      },true);
    }
    focus(){requestAnimationFrame(()=>{const b=this.overlay.querySelector('[data-action="start"]')||this.overlay.querySelector('[data-primary]:not(:disabled)')||this.overlay.querySelector('.primary:not(:disabled)')||this.overlay.querySelector('.card:not(:disabled)')||this.overlay.querySelector('button:not(:disabled)');b?.focus({preventScroll:true});});}
    panel(...args){super.panel(...args);this.focus();}
    menu(){this.g.state='menu';this.hud.hidden=true;this.overlay.dataset.modal='false';const r=S.readRun();
      this.overlay.innerHTML=`<main class="menu"><div class="eyebrow">Sześć kręgów · sześć misji · jedna droga</div><h1 class="brand">AEREN</h1><div class="subtitle">Kroniki otchłani · 2.3.0</div><p class="intro">Każda porażka zostawia doświadczenie.<br>Każdy bohater wykuwa własną drogę.<br>Teraz otchłań oddaje cios.</p><nav>${r?this.button(`Kontynuuj · ${D.heroes.find(h=>h.id===r.hero).name} · ${U.time(r.time)}`,'continue','','primary'):''}${this.button('Nowa wyprawa　↗','heroes','',r?'':'primary')}${this.button('Rozwój bohaterów　·　'+S.data.currency+' ✦','meta')}${this.button('Atlas świata','codex')}${this.button('Ustawienia','settings','menu','ghost')}</nav><div class="footer">${['up','left','down','right'].map(id=>A.Controls.label(id)).join('')} · RUCH　 ${[0,1,2].map(i=>A.Controls.label('skill'+i)).join(' ')} · MOCE　 ${A.Controls.label('ultimate')} · PRZEBUDZENIE<br><br>${['menuUp','menuDown','confirm'].map(id=>A.Controls.label(id)).join(' / ')} · MENU　 /　 AUTOZAPIS CO 10 SEKUND</div><div class="worldtag"><span class="label">MISJA 01 / 06</span><br><strong>Przebudzenie otchłani</strong><br><span class="tiny">Podziemia → lód → las → ogień → umarli → piekło</span></div></main>`;this.focus();
    }
    heroes(){this.g.state='heroes';this.hud.hidden=true;const h=D.heroes.find(h=>h.id===this.selected),m=D.modes[this.mode],unlocked=S.data.campaign[this.mode]||1;
      if(this.mission>=unlocked)this.mission=unlocked-1;
      this.panel('Przygotuj wyprawę','Postać · poziom trudności · misja',`<div class="cards hero-cards">${D.heroes.map(h=>`<button class="card ${h.id===this.selected?'selected':''}" data-action="hero" data-value="${h.id}" ${S.data.heroes.includes(h.id)?'':'disabled'} style="--accent:${h.color}"><span class="label">${h.title}</span><span class="hero-art hero-${h.id}">${h.icon}</span><h3>${h.name}</h3><p>${D.weaponById[h.startWeapon].name}</p><span class="bottom">${S.data.heroes.includes(h.id)?A.Controls.label('skill0')+' · '+D.byId[h.skill].name:h.cost+' ✦ · w rozwoju'}</span></button>`).join('')}</div><p class="hero-detail"><b>${A.Controls.label('ultimate')} · ${h.ultimate.name}</b> — ${h.ultimate.desc}<br>${h.passive}<br><b>${h.statLine}</b></p><div class="tabs">${Object.entries(D.modes).map(([id,x])=>this.button(x.name,'mode',id,id===this.mode?'primary':'')).join('')}</div><p class="hint">${m.name}: HP wrogów ${Math.round(m.hp*100)}%, obrażenia ${Math.round(m.damage*100)}%, liczebność ${Math.round(m.spawn*100)}%.<br>XP ${Math.round(m.xp*100)}%, złoto ${Math.round(m.gold*100)}%, jakość łupu ${Math.round(m.loot*100)}%. Każdy tryb odblokowuje tylko własną ścieżkę misji.</p><div class="mission-grid">${D.missions.map((name,i)=>`<button class="btn ${i===this.mission?'primary':''}" data-action="mission" data-value="${i}" ${i>=unlocked?'disabled':''}>${i+1}. ${name}<small>${i>=unlocked?'Ukończ poprzednią misję': '6 rund'}</small></button>`).join('')}</div><div class="actions">${this.button('← Menu','menu')}${this.button('Rozpocznij misję','start','','primary')}</div><p class="hint">${S.readRun()?'Rozpoczęcie nowej wyprawy zastąpi zapis aktualnej. ':''}Ataki automatyczne. Menu obsługujesz strzałkami i Enterem. Pierwsze 3 minuty pierwszej rundy mają łagodniejszy początek. Każda kolejna runda i misja wzmacniają wrogów.</p>`);
    }
    meta(){this.g.state='meta';this.hud.hidden=true;const h=D.heroes.find(h=>h.id===this.masterHero),ranks=S.data.mastery[h.id]||{},owned=S.data.heroes.includes(h.id);
      this.panel('Rozwój bohaterów',`${S.data.currency} ✦ odłamków · premie są osobne dla każdej postaci`,`<div class="tabs">${D.heroes.map(x=>this.button(x.name,'masterhero',x.id,x.id===h.id?'primary':'')).join('')}</div><h2>${h.icon} ${h.name} · ${h.title}</h2><p>${h.passive}<br>Moc bohatera: ${h.ultimate.name}. Odblokowania nie zastępują unikania ataków.</p>${owned?'':this.button(`Odblokuj ${h.name} · ${h.cost} ✦`,'unlockhero',h.id,'primary')}<div class="mastery-grid">${D.mastery.map(n=>{const rank=ranks[n.id]||0,cost=this.nodeCost(n,rank),prereq=!n.requires||(ranks[n.requires]||0)>=2,can=owned&&rank<n.max&&prereq&&S.data.currency>=cost;return`<article class="mastery-node ${rank?'learned':''}"><span class="symbol">${n.icon}</span><h3>${n.name}</h3><span class="label">${rank} / ${n.max}</span><p>${n.desc} za punkt.${n.requires?'<br>Wymaga 2 pkt: '+D.mastery.find(x=>x.id===n.requires).name:''}</p><button class="btn" data-action="buynode" data-value="${n.id}" ${can?'':'disabled'}>${rank>=n.max?'Maksymalny poziom':cost+' ✦ · Kup punkt'}</button></article>`;}).join('')}</div><p class="hint">Łącznie ${D.mastery.reduce((n,x)=>n+x.max,0)} punktów na bohatera. Koszt kolejnych rang rośnie. Odłamki zależą od czasu przeżycia, zabójstw, bossów i trybu. Pełne drzewo wymaga wielu wypraw.</p>`);
    }
    nodeCost(n,rank){return Math.ceil(n.cost*Math.pow(rank+1,1.45));}
    buyNode(id){const n=D.mastery.find(x=>x.id===id);if(!n||!S.data.heroes.includes(this.masterHero))return;const ranks=S.data.mastery[this.masterHero]||(S.data.mastery[this.masterHero]={}),rank=ranks[id]||0,cost=this.nodeCost(n,rank);if(rank>=n.max||S.data.currency<cost||(n.requires&&(ranks[n.requires]||0)<2))return;S.data.currency-=cost;ranks[id]=rank+1;S.write();this.meta();}
    skillCard(a){const g=this.g,l=a.id==='ultimate'?g.player.ultLevel:g.has(a.id),r=D.rarity[a.rarity];return`<button class="card ${r.id}" style="--accent:${r.color}" data-action="choose" data-value="${a.id}"><span class="label">${r.name} · ${{auto:'Automatyczny',passive:'Talent',active:[0,1,2].map(i=>A.Controls.label('skill'+i)).join(' / '),legendary:'Dar',ultimate:'Moc '+A.Controls.label('ultimate')}[a.type]}</span><span class="symbol">${a.icon}</span><h3>${a.name}</h3><p>${a.desc}</p><span class="bottom">${l?'POZIOM '+l+' → '+(l+1):'NOWA UMIEJĘTNOŚĆ'}</span></button>`;}
    levelUp(choices){this.panel('Wybierz umiejętność',`Awans · poziom ${this.g.player.level} · wybór 1/2`,`<div class="cards">${choices.map(a=>this.skillCard(a)).join('')}</div><p class="hint">Strzałki wybierają kartę · Enter zatwierdza. Następnie wybierzesz wyposażenie. Limit: 4 zaklęcia samoczynne, 3 aktywne, 8 talentów i 2 dary legendarne.</p>`,null);}
    gear(choices){const g=this.g;this.panel('Wybierz wyposażenie',`Awans · poziom ${g.player.level} · wybór 2/2`,`<div class="cards">${choices.map((x,i)=>{const r=D.rarity[x.rarity];return`<button class="card ${r.id}" style="--accent:${r.color}" data-action="gear" data-value="${i}"><span class="label">${r.name} · ${x.kind==='weapon'?'Broń':'Przedmiot'}</span><span class="symbol">${x.icon}</span><h3>${x.name}</h3><p>${x.desc}</p><span class="bottom">POZIOM ${x.level} / 5 · ${x.kind==='weapon'?g.weapons.length+'/3 bronie':g.items.length+'/6 przedmioty'}</span></button>`;}).join('')}</div><div class="actions"><button class="btn ghost" data-action="reroll" ${g.rerolls>=2||g.gold<75+g.player.level*12?'disabled':''}>Przelosuj · ${75+g.player.level*12} złota · ${2-g.rerolls} pozostało w rundzie</button></div><p class="hint">Przedmioty nie zajmują nieskończonego plecaka. Gdy miejsca są pełne, wybierasz co zastąpić. Przelosowania są zapisywane.</p>`,null);}
    replace(kind){const list=kind==='weapon'?this.g.weapons:this.g.items,r=this.g.pendingReplacement;this.panel('Zastąp jedno miejsce',`Limit ${kind==='weapon'?'3 broni':'6 przedmiotów'}`,`<p>Nowa nagroda: <b>${r.name}</b>. Zastąpiony przedmiot znika, a jego premie przestają działać.</p><div class="cards">${list.map((x,i)=>{const d=kind==='weapon'?D.weaponById[x.id]:x;return`<button class="card" data-action="replace" data-value="${i}" ${kind==='weapon'&&i===0?'disabled':''}><span class="symbol">${d.icon}</span><h3>${d.name}</h3><p>Poziom ${x.level}</p><span class="bottom">${kind==='weapon'&&i===0?'Broń osobista — niezbywalna':'Zastąp tym wyborem'}</span></button>`;}).join('')}</div><div class="actions">${this.button('Zachowaj ekwipunek · pomiń nagrodę','replace','-1')}</div>`,null);}
    equip(id){this.panel('Przypisz umiejętność',D.byId[id].name,`<div class="cards">${this.g.player.active.map((a,i)=>`<button class="card" data-action="equip" data-value="${i}"><span class="label">${A.Controls.label('skill'+i)}</span><h3>${D.byId[a].name}</h3></button>`).join('')}</div>`,null);}
    pause(){this.g.state='paused';this.panel('Wyprawa wstrzymana',`${D.missions[this.g.mission]} · ${this.g.mode.name}`,`<p>${this.g.world.biome.name} · ${U.time(this.g.time)} · runda ${this.g.biome+1}/6</p><div class="actions">${this.button('Wróć do walki','resume','','primary')}${this.button('Zapisz i wróć do menu','saveexit')}</div><div class="actions">${this.button('Postać i wyposażenie','build')}${this.button('Ustawienia','settings','pause')}</div><div class="actions">${this.button('Zakończ wyprawę · odbierz odłamki','abandon','','ghost')}</div><div class="rule"></div>${this.controls()}`,'resume',true);}
    controls(){return`<div class="hint"><kbd>WASD</kbd> ruch · <kbd>Spacja</kbd> dash<br><kbd>Q</kbd> <kbd>E</kbd> <kbd>R</kbd> umiejętności · <kbd>F</kbd> moc bohatera<br><kbd>X</kbd> / <kbd>Enter</kbd> interakcja · <kbd>T</kbd> automatyczny atak<br><kbd>Tab</kbd> postać · <kbd>Esc</kbd> pauza<br><kbd>↑ ↓ ← →</kbd> wybór · <kbd>Enter</kbd> zatwierdzenie<br><br>Zapis co 10 s, przy wyborach, zmianie rundy i wyjściu.<br>EXE: <kbd>F11</kbd> pełny ekran. Gamepad: X/Y/LB moce, RB moc F, B interakcja, A dash.</div>`;}
    event(e){let text='',actions='';if(e.type==='shrine'){text='Stała moc podczas tej wyprawy za większą presję przeciwników.';actions=this.button('+6% obrażeń · wrogowie +12% ruchu','event','power');}if(e.type==='arena'){text='40 sekund wzmożonego natarcia. Nagroda: 60 złota i 30 XP.';actions=this.button('Rozpocznij próbę','event','arena');}if(e.type==='npc'){text='Kartograf oznaczy spotkania na minimapie i podaruje 15 złota.';actions=this.button('Porozmawiaj','event','npc');}if(e.type==='elite'){text='Przyzwij dodatkowego mini-bossa. Natychmiast otrzymasz 25 złota.';actions=this.button('Podejmij wyzwanie','event','elite');}this.panel(names[e.type],'Spotkanie',`<p>${text}</p><div class="actions">${actions}${this.button('Odejdź','event','leave')}</div>`,null,true);}
    build(){super.build();const g=this.g;const block=document.createElement('div');block.innerHTML=`<h2>Arsenał · ${g.weapons.length}/3</h2><div class="catalog">${g.weapons.map(w=>`<article><h3>${D.weaponById[w.id].icon} ${D.weaponById[w.id].name} · ${w.level}/5</h3><p>${D.weaponById[w.id].desc}</p></article>`).join('')}</div><h2>${A.Controls.label('ultimate')} · ${g.player.hero.ultimate.name} · ${g.player.ultLevel}/3</h2><p>${g.player.hero.ultimate.desc}</p><p class="hint">Ekwipunek ${g.items.length}/6 · leczenie z trafień maksymalnie 2 HP/s · CDR do 60% tempa (37,5% krótsze odnowienie).</p>`;this.overlay.querySelector('.panel').appendChild(block);this.focus();}
    results(r){this.hud.hidden=true;this.panel(r.win?'Misja ukończona':'Otchłań pamięta',`${D.missions[r.mission]} · ${D.modes[r.mode].name}`,`<p>${r.win?(r.mission<5?'Odblokowano następną misję w trybie '+D.modes[r.mode].name+'.':'Ukończono ostatnią misję w tym trybie.'):'Wydaj odłamki na stałe premie dla wybranego bohatera i wróć silniejszy.'}</p><div class="stats">${[[U.time(r.time),'Czas'],[r.kills,'Pokonani'],[r.level,'Poziom'],[r.bosses+'/6','Rundy'],['+'+r.reward+' ✦','Odłamki'],[this.g.items.length+'/6','Przedmioty']].map(x=>`<div class="stat"><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join('')}</div>${r.practice?'<p>Tryb developerski: brak odłamków i odblokowań kampanii.</p>':''}<div class="actions">${this.button('Rozwój bohatera','meta','','primary')}${this.button('Kolejna wyprawa','heroes')}</div><div class="actions">${this.button('Menu','menu')}</div>`,null,true);}
    codex(tab='abilities'){super.codex(tab);if(tab==='help')this.panel('Zasady wyprawy','Kroniki otchłani 2.3.0',`<p>Sześć misji, każda po sześć rund: podziemia, lodowe pustkowia, las, ogień, wąwóz umarłych i piekło. Każdy poziom trudności ma własną ścieżkę odblokowań.</p><p>Co cztery minuty pojawia się boss. Trzech mini-bossów poprzedza starcie. Po awansie wybierz najpierw zaklęcie, potem wyposażenie. Maksymalnie 3 bronie i 6 przedmiotów — bez zakupów bez limitu.</p><p>Stałe punkty kupujesz osobno dla każdej postaci. Autozapis pozwala wrócić do wyprawy; śmierć zamyka zapis tej próby.</p>${this.controls()}`,'menu');}
    buildHUD(){super.buildHUD();const c=document.querySelector('.hud-controls');if(c)c.innerHTML='<kbd>WASD</kbd> ruch　 <kbd>Spacja</kbd> dash<br><kbd>Q E R</kbd> moce　 <kbd>F</kbd> przebudzenie<br><kbd>X</kbd> interakcja　 <kbd>Tab</kbd> postać';}
    update(dt){this.v2HudClock=(this.v2HudClock||0)+dt;if(this.v2HudClock<.1)return;const elapsed=this.v2HudClock;this.v2HudClock=0;super.update(elapsed);if(this.hud.hidden)return;const g=this.g,p=g.player,$=id=>document.getElementById(id);if(!$('abilities'))return;
      const make=(key,icon,name,cd,level)=>`<div class="slot" title="${name}"><b>${key}</b>${icon}<small>${level||''}</small>${cd>0?`<div class="cool">${Math.ceil(cd)}</div>`:''}</div>`;
      $('abilities').innerHTML=[0,1,2].map(i=>{const a=D.byId[p.active[i]];return make(A.Controls.label('skill'+i),a?.icon||'·',a?.name||'Wolne miejsce',a?p.cooldowns[a.id]:0,a?'POZ. '+g.has(a.id):'PUSTE');}).join('')+make(A.Controls.label('ultimate'),p.hero.ultimate.icon,p.hero.ultimate.name,p.ultCd,p.ultLevel+'/3')+make(A.Controls.label('dash'),'➶','Dash',p.dashCd,'DASH');
      $('timer-text').textContent=`${U.time(g.time)} · MISJA ${g.mission+1} · RUNDA ${g.biome+1}/6 · ${g.mode.name}`;
      $('objective').innerHTML=g.boss?'<strong>Pokonaj strażnika</strong><br>Reaguj na zapowiadane ataki.':g.bosses>g.biome?'<strong>Runda ukończona</strong><br>Przejdź do bramy ◎.':'<strong>Przetrwaj polowanie</strong><br>Strażnik za '+U.time(Math.max(0,240-g.stageTime));
      $('objective').innerHTML+=`<br><span class="hint">Bronie ${g.weapons?.length||0}/3 · Ekwipunek ${g.items?.length||0}/6<br>${g.lastSaved?'Autozapis ✓':'Zapisywanie…'}</span>`;
      const e=g.world.nearestEvent(p);$('interaction').hidden=!e;if(e)$('interaction').innerHTML='<kbd>'+A.Controls.label('interact')+'</kbd>　'+names[e.type];
    }
    action(action,value){const g=this.g;
      if(action==='continue'){g.loadRun();return;}
      if(action==='start'){g.start(this.selected,{mode:this.mode,mission:this.mission});return;}
      if(action==='mode'){this.mode=value;this.heroes();return;}
      if(action==='mission'){this.mission=Number(value);this.heroes();return;}
      if(action==='masterhero'){this.masterHero=value;this.meta();return;}
      if(action==='buynode'){this.buyNode(value);return;}
      if(action==='unlockhero'){const h=D.heroes.find(h=>h.id===value);if(h&&!S.data.heroes.includes(value)&&S.data.currency>=h.cost){S.data.currency-=h.cost;S.data.heroes.push(value);S.write();this.meta();}return;}
      if(action==='gear'){g.chooseGear(Number(value));return;}
      if(action==='replace'){g.replaceGear(Number(value));return;}
      if(action==='reroll'){g.reroll();return;}
      if(action==='saveexit'){g.saveRun();this.menu();return;}
      if(action==='meta'&&g.player)this.masterHero=g.player.hero.id;
      super.action(action,value);
    }
  }
  A.UI=UI;
})(window.Aeren);

;

/* Module: js/patch-21.js */
'use strict';
(function(A){const D=A.Data,C=A.Controls,S=A.Save,G=A.Game.prototype,UI=A.UI.prototype;
 const classes={
  ilya:[110,20,18,225,'Co piąta salwa rozdziela się na trzy. Wyłącznie Ilya: +15% XP.'],
  sol:[90,24,16,210,'Wyłącznie Sol: płomienie trwają o 50% dłużej, +20% obszaru zaklęć.'],
  niva:[100,18,20,235,'Wyłącznie Niva: lodowy ślad po dashu i +10 punktów procentowych uniku.'],
  orren:[140,18,28,190,'Wyłącznie Orren: co 12 s blokuje 35% obrażeń następnego ciosu.'],
  vesper:[90,22,16,250,'Wyłącznie Vesper: +15 punktów procentowych krytyka. Krytyki zatruwają.']
 };
 for(const h of D.heroes){const [hp,damage,armor,speed,passive]=classes[h.id];Object.assign(h,{hp,damage,baseArmor:armor,speed,passive,statLine:`HP ${hp}% · DEF ${Math.round(armor/20*100)}% · ATK ${Math.round(damage/20*100)}%`});D.weaponById[h.startWeapon].owner=h.id;}
 D.ultimates.ilya.desc='Trzy fale korzeni w miejscu celownika i leśni towarzysze. 70 s odnowienia.';
 D.ultimates.niva.desc='Lodowe pierścienie i zamrożenie wrogów wokół celownika. 75 s odnowienia.';
 D.ultimates.orren.desc='Trzy fale uderzeniowe w miejscu celownika i 3 s niewrażliwości. 85 s odnowienia.';
 D.ultimates.vesper.desc='Osiem cięć w cele wokół celownika, 1,2 s niewrażliwości. 65 s odnowienia.';
 for(const id of ['roots','blizzard','drain'])D.byId[id].desc=D.byId[id].desc.replace('wokół ciebie','w miejscu celownika').replace('pobliskich wrogów','wrogów w miejscu celownika');
 G.openingScale=function(kind){if(this.biome>0)return 1;const t=Math.min(1,this.stageTime/180);const start={hp:.82,damage:.8,spawn:.7}[kind];return start+(1-start)*t;};
 G.aimPoint=function(){const p=this.player,m=this.input.mouse;let x,y;if(m.used&&Math.hypot(this.input.pad.aimX,this.input.pad.aimY)<.2){x=m.x/(this.renderer?.zoom25||1)-(this.renderer?.ox??(this.width/2-this.camera.x));y=m.y/(this.renderer?.zoom25||1)-(this.renderer?.oy??(this.height/2-this.camera.y));}else{const t=Math.hypot(this.input.pad.aimX,this.input.pad.aimY)<.2?this.nearEnemies(650)[0]:null;x=t?.x??(p.x+Math.cos(p.aim)*240);y=t?.y??(p.y+Math.sin(p.aim)*240);}const dx=x-p.x,dy=y-p.y,f=Math.min(1,650/(Math.hypot(dx,dy)||1));return{x:A.U.clamp(p.x+dx*f,55,this.world.width-55),y:A.U.clamp(p.y+dy*f,55,this.world.height-55)};};
 G.nearPoint=function(pt,r,count=8){return this.enemies.filter(e=>e.hp>0&&A.U.dist(e,pt)<r).sort((a,b)=>A.U.dist(a,pt)-A.U.dist(b,pt)).slice(0,count);};
 G.itemStats=function(item){const t=D.itemTemplates.find(x=>x.id===item.id);if(!t)return item;item.level=A.U.clamp(item.level||1,1,5);item.rarity=A.U.clamp(item.rarity||0,0,4);let stat=t.stat,value=.10+(item.level-1)*.025+item.rarity*.0125;
  if(item.id==='heart')stat='healthBonus';if(item.id==='shell')stat='armorBonus';if(item.id==='blood')value=.005+(item.level-1)*.00125+item.rarity*.000625;
  item.mods={[stat]:value};const name={damage:'obrażeń',rate:'tempa ataku',armorBonus:'pancerza',healthBonus:'maksymalnego HP',cdr:'tempa odnowienia',crit:'szansy krytyka',speed:'ruchu',area:'obszaru',steal:'kradzieży życia',luck:'szczęścia'}[stat];item.desc=`+${Math.round(value*10000)/100}${stat==='crit'?' pkt proc.':'%'} ${name}. Ranga ${item.level}/5.`;return item;
 };
 const recalc=G.recalculate;G.recalculate=function(){recalc.call(this);const s=this.stats,h=this.player.hero;s.maxHp=Math.round(s.maxHp*(1+(s.healthBonus||0)));s.armor=A.U.clamp((s.armor-(h.id==='orren'?18:0)+h.baseArmor)*(1+(s.armorBonus||0)),0,70);this.player.hp=Math.min(this.player.hp,s.maxHp);return s;};
 const start=G.start;G.start=function(...args){this.input.mouse.used=false;return start.apply(this,args);};
 const update=G.update;G.update=function(dt){update.call(this,dt);if(this.state==='playing')this.player.bastionCd=Math.max(0,(this.player.bastionCd||0)-dt);};
 const hurt=G.hurt;G.hurt=function(n,...args){const p=this.player;if(p.hero.id==='orren'&&!this.god&&p.invuln<=0&&!(p.bastionCd>0)){n*=.65;p.bastionCd=12;this.burst(p.x,p.y,'#e0c28a',10,80);}return hurt.call(this,n,...args);};
 const writeRun=S.writeRun;S.writeRun=function(snapshot){snapshot.balanceVersion='2.1';return writeRun.call(this,snapshot);};
 const load=G.loadRun;G.loadRun=function(){const snapshot=S.readRun();const ok=load.call(this);if(!ok)return false;if(snapshot.balanceVersion!=='2.1'){const old={easy:[1.15,.85],normal:[1.55,1.1],hard:[2.05,1.4]}[this.modeId];for(const e of this.enemies){const ratio=this.mode.hp/old[0]*(e.isBoss?1:this.openingScale('hp')*(1+this.mission*.15)/(1+this.mission*.25));e.hp*=ratio;e.maxHp*=ratio;e.damage*=this.mode.damage/old[1]*this.openingScale('damage');}}const h=this.player.hero;this.items=this.items.map(x=>this.itemStats(x));this.gearChoices=this.gearChoices.filter(x=>this.slice||x.kind!=='weapon'||!D.weaponById[x.id]?.owner||D.weaponById[x.id].owner===h.id).map(x=>x.kind==='item'?this.itemStats(x):x);if(this.pendingReplacement?.kind==='item')this.itemStats(this.pendingReplacement);const personal=this.weapons.find(w=>w.id===h.startWeapon)||{id:h.startWeapon,level:1,cd:0};this.weapons=[personal,...this.weapons.filter(w=>w.id!==h.startWeapon&&(this.slice||!D.weaponById[w.id]?.owner))].slice(0,3);this.recalculate();if(this.pendingReplacement?.kind==='weapon'&&this.weapons.length<3){const reward=this.pendingReplacement;if(this.slice||!D.weaponById[reward.id]?.owner||D.weaponById[reward.id].owner===h.id)this.weapons.push({id:reward.id,level:1,cd:0});this.pendingReplacement=null;this.completeReward();}if(this.state==='gear'){if(!this.gearChoices.length)this.gearChoices=this.rollGear();this.ui.gear(this.gearChoices);}else if(this.state==='replace')this.ui.replace(this.pendingReplacement.kind);return true;};
 const render=A.Renderer.prototype.render;A.Renderer.prototype.render=function(dt){render.call(this,dt);const g=this.g;g.canvas.style.cursor=g.state==='playing'&&g.input.mouse.used?'none':'default';if(g.state!=='playing'||!g.input.mouse.used)return;const c=g.ctx,t=g.aimPoint(),x=(t.x+this.ox)*(this.zoom25||1),y=(t.y+this.oy)*(this.zoom25||1);c.save();c.setTransform(g.scale,0,0,g.scale,0,0);c.strokeStyle='#132c36';c.lineWidth=5;c.beginPath();c.arc(x,y,11,0,Math.PI*2);c.stroke();c.strokeStyle='#fff2b6';c.lineWidth=2;c.stroke();c.beginPath();for(const [dx,dy]of [[1,0],[-1,0],[0,1],[0,-1]]){c.moveTo(x+dx*15,y+dy*15);c.lineTo(x+dx*22,y+dy*22);}c.stroke();c.fillStyle='#fff7d5';c.fillRect(x-1,y-1,2,2);c.restore();};
 UI.controls=function(){return `<div class="hint">${['up','left','down','right'].map(id=>'<kbd>'+C.label(id)+'</kbd>').join(' ')} ruch · <kbd>${C.label('dash')}</kbd> dash<br>${[0,1,2].map(i=>'<kbd>'+C.label('skill'+i)+'</kbd>').join(' ')} moce · <kbd>${C.label('ultimate')}</kbd> moc bohatera<br><kbd>${C.label('interact')}</kbd> interakcja · <kbd>${C.label('auto')}</kbd> automatyczny atak<br><kbd>${C.label('build')}</kbd> postać · <kbd>${C.label('pause')}</kbd> pauza<br>Mysz celuje zaklęciami (zasięg 650). Zwykłe ataki domyślnie celują we wrogów. Autocelowanie zmienisz w ustawieniach. Ochrona działa na bohatera.<br>Menu: ${['menuUp','menuDown','menuLeft','menuRight','confirm'].map(id=>C.label(id)).join(' / ')}<br>Pełny ekran: ${C.label('fullscreen')}. Klawisze zmienisz w ustawieniach.</div>`;};
 const settings=UI.settings;UI.settings=function(back='menu'){settings.call(this,back);const box=document.createElement('div');box.className='actions';box.innerHTML=this.button('Przypisanie klawiszy','bindings','','primary');this.overlay.querySelector('.settings').before(box);this.focus();};
 UI.bindingMessage=function(text){const el=this.overlay.querySelector('#bind-message');if(el)el.textContent=text;};
 UI.bindings=function(focusId){this.g.state='bindings';this.panel('Przypisanie klawiszy','Klawiatura i przyciski myszy',`<p id="bind-message">Wybierz akcję, potem naciśnij klawisz lub przycisk myszy. Esc anuluje przypisywanie. Konflikty są blokowane.</p><div class="binding-grid">${C.rows.map(([id,label])=>`<button class="btn" data-action="bind" data-value="${id}">${label}<strong>${C.label(id)}</strong></button>`).join('')}</div><div class="actions">${this.button('Przywróć domyślne','bindingsReset')}${this.button('← Ustawienia','settings',this.g.settingsBack||'menu')}</div>`,null);if(focusId)requestAnimationFrame(()=>this.overlay.querySelector(`[data-value="${focusId}"]`)?.focus());};
 const action=UI.action;UI.action=function(id,value){if(id==='bindings'){this.bindings();return;}if(id==='bind'){C.pending=value;this.bindingMessage('Naciśnij nowy przycisk dla: '+C.rows.find(x=>x[0]===value)[1]+'. Esc anuluje.');return;}if(id==='bindingsReset'){C.reset();this.bindings();return;}return action.call(this,id,value);};
 const hud=UI.update;UI.update=function(dt){hud.call(this,dt);if(this.hud.hidden)return;const el=this.hud.querySelector('.hud-controls');if(el)el.innerHTML=`${['up','left','down','right'].map(id=>C.label(id)).join('')} ruch · ${C.label('dash')} dash<br>${[0,1,2].map(i=>C.label('skill'+i)).join(' / ')} moce · ${C.label('ultimate')} moc bohatera<br>${C.label('interact')} interakcja · ${C.label('build')} postać`;};
})(window.Aeren);

;

/* Module: js/update-22.js */
'use strict';
(function(A){
 const {Data:D,Save:S,Controls:C,U}=A,G=A.Game.prototype,UI=A.UI.prototype;
 D.version='1.0.0';
 C.rows.push(['secondary','Umiejętność pomocnicza','Mouse2'],['potion','Użyj mikstury','KeyV']);
 const saveLoad=S.load;S.load=function(){const d=saveLoad.call(this),bindings=d.settings.bindings||(d.settings.bindings={});for(const [id,defaultCode] of [['secondary','Mouse2'],['potion','KeyV']])if(!bindings[id]&&C.rows.some(row=>row[0]!==id&&C.key(row[0])===defaultCode)){bindings[id]=['KeyG','KeyH','KeyB','Digit5','Digit6','Digit7'].find(code=>!C.rows.some(row=>C.key(row[0])===code));}return d;};
 D.potions={small:{name:'Mała',heal:.15,color:'#aee9ad'},large:{name:'Duża',heal:.30,color:'#ffb5aa'},regen:{name:'Regeneracja',heal:.20,color:'#a3dff1'}};
 D.secondary={ilya:{name:'Przeszywający promień',icon:'➶',cd:8},sol:{name:'Oddech żaru',icon:'♨',cd:10},niva:{name:'Lodowy uskok',icon:'❄',cd:9},orren:{name:'Uderzenie bastionu',icon:'⬡',cd:12},vesper:{name:'Znak śmierci',icon:'☽',cd:10}};
 for(const h of D.heroes)for(const [suffix,name,stat,value,desc] of [
  ['power','Siła','secondaryPower',.12,'+12% obrażeń umiejętności pomocniczej'],
  ['tempo','Rytm','secondaryHaste',.06,'+6% tempa odnowienia umiejętności pomocniczej'],
  ['duration','Kontrola','secondaryDuration',.15,'+15% czasu osłony, spowolnienia lub znaku; Ilya: +1 przebity cel']
 ])D.mastery.push({id:`${h.id}_${suffix}`,hero:h.id,name:`${name}: ${D.secondary[h.id].name}`,icon:D.secondary[h.id].icon,stat,value,max:1,cost:95,requires:null,desc});
 const make=G.makePlayer;G.makePlayer=function(h){return {...make.call(this,h),potions:['small'],potionCd:0,secondaryCd:0,fieldGuard:0,regenLeft:0,regenRate:0,gait:0,walkBlend:0};};
 const start=G.start;G.start=function(...args){this.corpses=[];this.aoeFrame=0;const result=start.apply(this,args);this.ensureChest();if(!args[1]?.restoring)this.saveRun();return result;};
 const advance=G.advance;G.advance=function(){const b=this.biome;advance.call(this);if(b!==this.biome){this.corpses=[];this.ensureChest();this.saveRun();}};
 G.ensureChest=function(){if(!this.world||this.world.events.some(e=>e.type==='chest'))return;const rng=U.rng(this.seed+this.biome*571+this.mission*237),a=rng()*Math.PI*2,pt=this.world.freePoint(1800+Math.cos(a)*900,1500+Math.sin(a)*800);this.world.events.push({id:220,type:'chest',...pt,used:false,discovered:false,icon:'▣',roll:rng()});};
 const load=G.loadRun;G.loadRun=function(){const ok=load.call(this);if(!ok)return false;const p=this.player;p.potions=(p.potions||['small']).filter(x=>D.potions[x]).slice(0,2);for(const key of ['secondaryCd','potionCd','fieldGuard','regenLeft','regenRate','gait','walkBlend'])p[key]=Number.isFinite(p[key])?p[key]:0;
  this.corpses=[];this.ensureChest();for(const entity of [p,...this.enemies,...this.world.events])if(this.world.collides(entity.x,entity.y,entity.r||28))Object.assign(entity,this.world.freePoint(entity.x,entity.y,entity.r||28));
  for(let i=this.zones.active.length-1;i>=0;i--){const z=this.zones.active[i];if(z.enemy&&!z.sourceId)this.zones.remove(i);}return true;};
 G.healPotion=function(fraction){const p=this.player,before=p.hp;p.hp=Math.min(this.stats.maxHp,p.hp+this.stats.maxHp*fraction);const n=p.hp-before;if(n>0){this.number(p.x,p.y-48,'+'+Math.round(n)+' HP','#b8f5c0',true);this.burst(p.x,p.y,'#b8f5c0',14,75);p.healAnim=.7;}return n;};
 G.takePotion=function(kind){const p=this.player;if(!D.potions[kind])return;if(p.potions.length>=2)this.healPotion(.1);else{p.potions.push(kind);this.ui.toast('Mikstura: '+D.potions[kind].name,`Użyj ${C.label('potion')} · zapas ${p.potions.length}/2`);}this.saveRun();};
 G.usePotion=function(){const p=this.player;if(this.state!=='playing'||p.potionCd>0||!p.potions.length)return false;const kind=p.potions[0];if(p.hp>=this.stats.maxHp&&!(kind==='large'&&(p.status.fire||p.status.poison)))return false;p.potions.shift();p.potionCd=8;
  if(kind==='regen'){p.regenLeft=5;p.regenRate=this.stats.maxHp*.2/5;this.ui.toast('Regeneracja','20% HP przez 5 s. Cios za ≥10% maks. HP przerywa leczenie.');}
  else this.healPotion(D.potions[kind].heal);if(kind==='large'){delete p.status.fire;delete p.status.poison;}A.Audio.play('level');this.saveRun();return true;};
 G.castSecondary=function(){const p=this.player;if(this.state!=='playing'||p.secondaryCd>0)return false;const id=p.hero.id,s=D.secondary[id],pt=this.aimPoint(),a=U.angle(p,pt),power=1+(this.stats.secondaryPower||0),duration=1+(this.stats.secondaryDuration||0),damage=this.stats.damage*power;
  let target;if(id==='vesper'){target=this.nearPoint(pt,140,1)[0];if(!target){this.ui.toast('Brak celu','Najedź na przeciwnika, aby nałożyć znak.');return false;}}
  p.secondaryCd=Math.max(8,s.cd/(1+(this.stats.secondaryHaste||0)));p.castAnim=.42;p.attackAim=a;this.castSerial++;this.secondaryFX={id,a,x:p.x,y:p.y,left:.4};
  if(id==='ilya')this.bullet(p.x,p.y,a,damage*3,'nature',{pierce:4+(duration>1?1:0),speed:1.5,life:1.25,r:8,style:'crossbow'});
  if(id==='sol'||id==='orren')for(const e of this.nearEnemies(id==='sol'?230:145,240)){const delta=Math.atan2(Math.sin(U.angle(p,e)-a),Math.cos(U.angle(p,e)-a));if(Math.abs(delta)<(id==='sol'?.7:1)){this.hit(e,damage*(id==='sol'?2.3:1.9),id==='sol'?'fire':'stone',{secondary:true});e.kx+=Math.cos(a)*300;e.ky+=Math.sin(a)*300;if(id==='orren'&&!e.isBoss)e.status.root=1.2*duration;}}
  if(id==='orren')p.guard=Math.max(p.guard,2.2*duration);
  if(id==='niva'){const ox=p.x,oy=p.y;for(let i=0;i<20;i++)this.world.move(p,Math.cos(a)*11,Math.sin(a)*11);p.invuln=Math.max(p.invuln,.45);p.dashVisual=.25;for(let i=0;i<5;i++)this.zone(U.lerp(ox,p.x,i/4),U.lerp(oy,p.y,i/4),42,damage*.22,'ice',{life:3*duration,total:3*duration});}
  if(id==='vesper'){target.mark=5*duration;target.markPower=.45*power;this.lines.get({x:p.x,y:p.y-20,x2:target.x,y2:target.y-20,life:.5,color:'#e9b9ff'});}
  this.burst(p.x,p.y,p.hero.color,12,100);A.Audio.play({ilya:'attack',sol:'crit',niva:'dash',orren:'hit',vesper:'boss'}[id]);this.saveRun();return true;
 };
 const hurt=G.hurt;G.hurt=function(...args){const before=this.player.hp,result=hurt.apply(this,args),p=this.player;if(p.hp<before){p.hurtAnim=.2;if(before-p.hp>=this.stats.maxHp*.1){p.regenLeft=0;p.regenRate=0;}}return result;};
 G.hurtFromField=function(...args){if(this.player.fieldGuard>0)return false;const result=this.hurt(...args);if(result)this.player.fieldGuard=.45;return result;};
 const hit=G.hit;G.hit=function(e,n,element,opts={}){if(e?.mark>0&&opts.basic)n*=1+(e.markPower||.45);return hit.call(this,e,n,element,opts);};
 const kill=G.kill;G.kill=function(e,...args){if(!e.dead){this.corpses=this.corpses||[];this.corpses.push({...e,status:{},left:.5});if(this.corpses.length>24)this.corpses.shift();}return kill.call(this,e,...args);};
 const spawn=G.spawn;G.spawn=function(...args){const e=spawn.apply(this,args);if(e){Object.assign(e,this.world.freePoint(e.x,e.y,e.r));if(e.mini&&this.mission===0&&this.biome===0){e.hp*=.85;e.maxHp*=.85;e.damage*=.9;}e.nextAoe=this.time+(e.mini?2:4);e.gait=0;e.walkBlend=0;}return e;};
 // Exact circle intersection area, normalized by the new field area.
 A.fieldOverlap=function(a,b){const d=U.dist(a,b),r=a.r,R=b.r;if(d>=r+R)return 0;if(d<=Math.abs(r-R))return Math.min(r,R)**2/(r*r);const alpha=Math.acos(U.clamp((d*d+r*r-R*R)/(2*d*r),-1,1)),beta=Math.acos(U.clamp((d*d+R*R-r*r)/(2*d*R),-1,1));return (r*r*alpha+R*R*beta-.5*Math.sqrt(Math.max(0,(-d+r+R)*(d+r-R)*(d-r+R)*(d+r+R))))/(Math.PI*r*r);};
 G.fieldLimit=function(){return {easy:2,normal:3,hard:4}[this.modeId]||3;};
 G.hasEscapeRoute=function(fields){const p=this.player,speed=this.stats.speed*(p.status.ice?.65:1),world=this.world;
  // A corridor at least one body wide must remain traversable before detonation.
  for(let dir=0;dir<48;dir++){const a=dir*Math.PI*2/48;let clear=true;for(let distance=16;distance<=320;distance+=16){const q={x:p.x+Math.cos(a)*distance,y:p.y+Math.sin(a)*distance},arrival=distance/Math.max(80,speed);if(world.collides(q.x,q.y,p.r+6)){clear=false;break;}for(const z of fields){if(z.life<=arrival||z.done)continue;if(arrival>=Math.max(0,z.delay-.12)&&U.dist(q,z)<z.r+p.r+8){clear=false;break;}}if(!clear)break;}if(clear)return true;}return false;
 };
 const zone=G.zone;G.zone=function(x,y,r,damage,element,options={}){if(!options.enemy)return zone.call(this,x,y,r,damage,element,options);const source=options.source||this._enemySource;if(!source||source.hp<=0)return null;
  if(Math.abs(source.x-this.camera.x)>this.width/2+source.r||Math.abs(source.y-this.camera.y)>this.height/2+source.r)return null;
  if(this.time<(source.nextAoe||0)&&source.aoeBatch!==this.aoeFrame)return null;
  const fields=this.zones.active.filter(z=>z.enemy&&!z.done&&z.life>0),near=fields.filter(z=>U.dist(z,this.player)<800+z.r);
  if(near.length>=(source.isBoss?this.fieldLimit()+5:this.fieldLimit())||source.isBoss&&fields.filter(z=>z.sourceId===source.id).length>=5)return null;
  const delay=Math.max(options.delay||0,source.isBoss?.9:source.mini?1.1:1.4),active=options.once?.4:Math.min(4,Math.max(1,(options.life||3)-(options.delay||0)));
  const z={x,y,r:Math.min(r,210),damage:options.once?damage:damage*.45,element,...options,source:undefined,sourceId:source.id,delay,telegraph:delay,life:delay+active,total:delay+active};
  if(fields.some(other=>A.fieldOverlap(z,other)>.4)||!this.hasEscapeRoute([...near,z]))return null;
  if(source.aoeBatch!==this.aoeFrame){source.nextAoe=this.time+(source.isBoss?3:source.mini?5+Math.random()*2:8+Math.random()*4)*(1+Math.max(0,this.enemies.length-45)/100);source.aoeBatch=this.aoeFrame;}
  source.castAnim=.45;source.attackAim=U.angle(source,z);return zone.call(this,x,y,z.r,z.damage,element,z);
 };
 const enemyUpdate=G.updateEnemies;G.updateEnemies=function(dt){this.aoeFrame=(this.aoeFrame||0)+1;for(const e of this.enemies){e.previousX=e.x;e.previousY=e.y;e.mark=Math.max(0,(e.mark||0)-dt);e.castAnim=Math.max(0,(e.castAnim||0)-dt);}enemyUpdate.call(this,dt);for(const e of this.enemies){const dist=Math.hypot(e.x-e.previousX,e.y-e.previousY);e.walkBlend=U.lerp(e.walkBlend||0,Math.min(1,dist/Math.max(.01,dt)/80),1-Math.exp(-12*dt));e.gait=(e.gait||0)+Math.min(dist,20)*.09;if(dist>.05)e.facing=Math.atan2(e.y-e.previousY,e.x-e.previousX);}this._enemySource=null;};
 const bossAI=G.bossAI;G.bossAI=function(e,...args){const old=this._enemySource;this._enemySource=e;try{return bossAI.call(this,e,...args);}finally{this._enemySource=old;}};
 const bullet=G.bullet;G.bullet=function(...args){if(args[5]?.enemy&&this._enemySource){this._enemySource.castAnim=.25;this._enemySource.attackAim=args[2];}return bullet.apply(this,args);};
 const zones=G.updateZones;G.updateZones=function(dt){const ids=new Set(this.enemies.filter(e=>e.hp>0).map(e=>e.id));for(let i=this.zones.active.length-1;i>=0;i--){const z=this.zones.active[i];if(z.enemy&&!ids.has(z.sourceId))this.zones.remove(i);}return zones.call(this,dt);};
 const update=G.update;G.update=function(dt){const p=this.player,playing=this.state==='playing',ox=p.x,oy=p.y;if(playing){for(const k of ['secondaryCd','potionCd','fieldGuard','hurtAnim','healAnim','castAnim','dashVisual'])p[k]=Math.max(0,(p[k]||0)-dt);
   if(C.tap(this.input,'secondary'))this.castSecondary();if(C.tap(this.input,'potion'))this.usePotion();if(p.regenLeft>0){const slice=Math.min(dt,p.regenLeft),before=p.hp;p.hp=Math.min(this.stats.maxHp,p.hp+p.regenRate*slice);p.regenShown=(p.regenShown||0)+p.hp-before;p.regenTick=(p.regenTick||0)+slice;p.regenLeft-=slice;if(p.regenTick>=.5||p.regenLeft<=.001){if(p.regenShown>0){this.number(p.x,p.y-40,'+'+p.regenShown.toFixed(1),'#b8f5c0');this.burst(p.x,p.y,'#b8f5c0',3,30);p.healAnim=.5;}p.regenShown=0;p.regenTick=0;}}
   for(const e of this.world.events)if(e.type==='chest'&&U.dist(e,p)<230)e.discovered=true;
   if(this.secondaryFX)this.secondaryFX.left-=dt;
  }update.call(this,dt);if(playing){const distance=Math.min(25,Math.hypot(p.x-ox,p.y-oy));p.gait=(p.gait||0)+distance*.1;p.walkBlend=U.lerp(p.walkBlend||0,Math.min(1,distance/Math.max(dt,.001)/100),1-Math.exp(-12*dt));if(distance>.1)p.facing=Math.atan2(p.y-oy,p.x-ox);if(distance>2&&Math.floor(this.time*12)!==this.trailTick){this.trailTick=Math.floor(this.time*12);this.burst(p.x,p.y+4,p.hero.color,p.dashing>0?3:1,14);}for(const corpse of this.corpses||[])corpse.left-=dt;this.corpses=(this.corpses||[]).filter(e=>e.left>0);}};
 const interact=G.interact;G.interact=function(e){if(e.type!=='chest')return interact.call(this,e);if(e.used)return;e.used=true;e.openedAt=this.time;e.discovered=true;A.Audio.play('level');this.burst(e.x,e.y,'#ffe5a3',18,90);const roll=e.roll??Math.random();if(roll<.5)this.takePotion('small');else if(roll<.7)this.takePotion(roll<.6?'large':'regen');else if(roll<.85){const amount=Math.round((25+this.biome*5)*this.stats.gold);this.gold+=amount;this.ui.toast('Skrzynia odkryta','+'+amount+' złota');}else{this.rewardStage='chest';this.pendingGear=true;this.gearChoices=[this.rollItem(),this.rollItem()];this.state='gear';this.ui.gear(this.gearChoices);this.input.clear();}this.saveRun();};
 const meta=UI.meta;UI.meta=function(){const nodes=D.mastery;D.mastery=nodes.filter(n=>!n.hero||n.hero===this.masterHero);try{meta.call(this);const hint=this.overlay.querySelector('.panel > .hint');if(hint)hint.textContent=D.mastery.reduce((sum,n)=>sum+n.max,0)+' punktów rozwoju na bohatera, w tym 3 osobiste ulepszenia umiejętności pomocniczej. Koszt kolejnych rang rośnie.';}finally{D.mastery=nodes;}};
 const buy=UI.buyNode;UI.buyNode=function(id){const n=D.mastery.find(x=>x.id===id);if(n?.hero&&n.hero!==this.masterHero)return;return buy.call(this,id);};
 const gear=UI.gear;UI.gear=function(choices){gear.call(this,choices);if(this.g.rewardStage==='chest'){const panel=this.overlay.querySelector('.panel');panel.querySelector('h1,h2').textContent='Skarb ze skrzyni';const reroll=panel.querySelector('[data-action="reroll"]');if(reroll)reroll.remove();const btn=document.createElement('button');btn.className='btn';btn.dataset.action='skipchest';btn.textContent='Zostaw przedmioty';panel.append(btn);}};
 const menu=UI.menu;UI.menu=function(){menu.call(this);this.overlay.querySelector('.subtitle').textContent='Kroniki otchłani · '+D.version;this.overlay.querySelector('nav').insertAdjacentHTML('beforeend',this.button('Sprawdź aktualizacje','updates','','ghost'));};
 // Optional event payload is plain, bounded data. It never supplies executable code.
 A.activeEvents=function(){const data=window.AEREN_CONTENT;if(data?.schemaVersion!==1||!Array.isArray(data.events))return [];const now=Date.now();return data.events.slice(0,10).filter(e=>typeof e.title==='string'&&Number.isFinite(Date.parse(e.startsAt))&&Number.isFinite(Date.parse(e.endsAt))&&now>=Date.parse(e.startsAt)&&now<Date.parse(e.endsAt));};
 const eventMenu=UI.menu;UI.menu=function(){eventMenu.call(this);for(const e of A.activeEvents()){const note=document.createElement('p');note.className='hint';note.textContent=e.title.slice(0,80)+' — '+String(e.description||'').slice(0,280);this.overlay.querySelector('nav').before(note);}};
 const eventRecalculate=G.recalculate;G.recalculate=function(){const stats=eventRecalculate.call(this);let xp=1,gold=1;for(const e of A.activeEvents()){xp=Math.max(xp,U.clamp(Number(e.xpMultiplier)||1,1,1.15));gold=Math.max(gold,U.clamp(Number(e.goldMultiplier)||1,1,1.15));}stats.xp*=xp;stats.gold*=gold;return stats;};
 const settings=UI.settings;UI.settings=function(...args){settings.apply(this,args);const box=document.createElement('div');box.className='actions';box.innerHTML=this.button('Jakość efektów: '+(S.data.settings.lowFX?'oszczędna':'pełna'),'quality');this.overlay.querySelector('.panel').append(box);};
 const controls=UI.controls;UI.controls=function(){return controls.call(this)+`<p class="hint">${C.label('secondary')} · umiejętność pomocnicza　${C.label('potion')} · mikstura (maks. 2, odnowienie 8 s)</p>`;};
 const uiUpdate=UI.update;UI.update=function(dt){uiUpdate.call(this,dt);if(this.hud.hidden)return;const g=this.g,p=g.player,slots=document.getElementById('abilities');if(slots){slots.querySelectorAll('.extra22').forEach(x=>x.remove());const s=D.secondary[p.hero.id];slots.insertAdjacentHTML('beforeend',`<div class="slot extra22" title="${s.name}"><b>${C.label('secondary')}</b>${s.icon}<small>POMOC</small>${p.secondaryCd>0?`<div class="cool">${Math.ceil(p.secondaryCd)}</div>`:''}</div><div class="slot extra22" title="Mikstury używane od lewej: ${(p.potions||[]).map(x=>D.potions[x].name).join(', ')}"><b>${C.label('potion')}</b>♥<small>${p.potions?.length||0}/2</small>${p.potionCd>0?`<div class="cool">${Math.ceil(p.potionCd)}</div>`:''}</div>`);}
  let label=this.hud.querySelector('.potion22');if(!label){label=document.createElement('div');label.className='potion22';this.hud.append(label);}label.textContent=(p.potions||[]).map(x=>D.potions[x].name).join(' → ')||'Brak mikstur';const e=g.world.nearestEvent(p);if(e?.type==='chest')document.getElementById('interaction').innerHTML=`<kbd>${C.label('interact')}</kbd> Otwórz skrzynię`;
 };
 const action=UI.action;UI.action=function(id,value){if(id==='skipchest'){if(this.g.rewardStage==='chest')this.g.completeReward();return;}if(id==='quality'){S.data.settings.lowFX=!S.data.settings.lowFX;S.data.settings.particles=S.data.settings.lowFX?.35:1;S.write();this.settings(this.g.settingsBack||'menu');return;}return action.call(this,id,value);};
})(window.Aeren);


;

/* Module: js/visual-22.js */
'use strict';
(function(A){const {U,Save:S}=A,Base=A.World,R=A.Renderer.prototype,TAU=Math.PI*2;
 const segment=(p,a,b)=>{const dx=b.x-a.x,dy=b.y-a.y,t=U.clamp(((p.x-a.x)*dx+(p.y-a.y)*dy)/(dx*dx+dy*dy||1),0,1);return Math.hypot(p.x-a.x-t*dx,p.y-a.y-t*dy);};
 class World extends Base{
  constructor(seed,index){super(seed,index);this.layoutVersion=22;this.walls=[];const paths=this.paths,center=this.center;
   const lane=p=>U.dist(p,center)<440||paths.some(q=>segment(p,center,q)<100);
   const solids=[];for(const d of this.decor){if(d.type==='tree'&&!lane(d)&&!solids.some(q=>U.dist(q,d)<145)&&!this.events.some(e=>U.dist(e,d)<150)){d.solid=true;solids.push(d);this.walls.push({x:d.x-20,y:d.y-14,w:40,h:28,round:true});}else if(d.type!=='floor'){d.type=d.type==='flower'?'flower':'grass';d.size*=.7;}}
   // Open-ended low barriers show their full collision footprint. No enclosed rooms.
   for(let i=0;i<12;i++){const a=i*2.4,x=1800+Math.cos(a)*(650+(i%3)*280),y=1500+Math.sin(a)*(570+(i%3)*250),pt={x,y};if(lane(pt)||this.events.some(e=>U.dist(e,pt)<180)||solids.some(d=>U.dist(d,pt)<180))continue;this.walls.push({x:x-60,y:y-18,w:120,h:36,cliff:index===4});}
   this.reindex();this.hazards=this.hazards.filter(h=>!lane(h)&&!this.collides(h.x,h.y,h.r+30)).slice(0,10);for(const e of this.events)Object.assign(e,this.freePoint(e.x,e.y));this.navCols=60;this.navRows=50;this.navBlocked=new Uint8Array(3000);for(let y=0;y<50;y++)for(let x=0;x<60;x++)this.navBlocked[y*60+x]=this.collides(x*60+30,y*60+30,28)?1:0;
  }
  reindex(){this.wallCells=new Map();for(const w of this.walls)for(let y=Math.floor(w.y/120);y<=Math.floor((w.y+w.h)/120);y++)for(let x=Math.floor(w.x/120);x<=Math.floor((w.x+w.w)/120);x++){const k=y*100+x;if(!this.wallCells.has(k))this.wallCells.set(k,[]);this.wallCells.get(k).push(w);}}
  freePoint(x,y,r=28){for(let i=0;i<160;i++){const px=U.clamp(x+Math.cos(i*2.4)*Math.sqrt(i)*18,r+55,this.width-r-55),py=U.clamp(y+Math.sin(i*2.4)*Math.sqrt(i)*18,r+55,this.height-r-55);if(!this.collides(px,py,r))return{x:px,y:py};}return {...this.spawn};}
  move(e,dx,dy){const oldx=e.x,oldy=e.y,steps=Math.max(1,Math.ceil(Math.hypot(dx,dy)/10));for(let i=0;i<steps;i++)super.move(e,dx/steps,dy/steps);if(e.type&&e.hp>0&&!e.charge&&this.flow&&Math.hypot(e.x-oldx,e.y-oldy)<Math.hypot(dx,dy)*.7){const gx=Math.floor(e.x/60),gy=Math.floor(e.y/60);let best=null,value=this.flow[gy*60+gx];for(const [nx,ny]of [[gx-1,gy],[gx+1,gy],[gx,gy-1],[gx,gy+1]]){const score=this.flow[ny*60+nx];if(nx>0&&nx<59&&ny>0&&ny<49&&score>=0&&(value<0||score<value)&&!this.collides(nx*60+30,ny*60+30,e.r)){value=score;best={x:nx*60+30,y:ny*60+30};}}if(best){const a=U.angle(e,best),speed=Math.hypot(dx,dy);super.move(e,Math.cos(a)*speed,Math.sin(a)*speed);}}}
  updateFlow(p){const cell=Math.floor(p.y/60)*60+Math.floor(p.x/60);if(cell===this.flowCell&&this.flow)return;this.flowCell=cell;this.flow=new Int16Array(3000).fill(-1);const queue=new Int16Array(3000);queue[0]=cell;this.flow[cell]=0;let read=0,write=1;while(read<write){const n=queue[read++],x=n%60,y=Math.floor(n/60);for(const [nx,ny] of [[x-1,y],[x+1,y],[x,y-1],[x,y+1]]){const k=ny*60+nx;if(nx<0||nx>=60||ny<0||ny>=50||this.navBlocked[k]||this.flow[k]>=0)continue;this.flow[k]=this.flow[n]+1;queue[write++]=k;}}}
  update(g,dt){const p=g.player;this.reveal(p.x,p.y);this.updateFlow(p);p.terrainSlow=1;g.hazardCd-=dt;for(const h of this.hazards)if((g.time+h.phase)%7>4.8&&U.dist(p,h)<h.r+p.r){if(h.type==='frost')p.terrainSlow=.7;else if(g.hazardCd<=0){g.hurtFromField((h.type==='lava'?7:5)*g.mode.damage,h.type==='spores'?'poison':h.type==='lava'?'fire':'arcane');g.hazardCd=1;}}}
 }
 A.World=World;
 const ground=R.ground;R.ground=function(w){ground.call(this,w);const c=this.map.getContext('2d'),b=w.biome;c.save();c.lineCap='round';for(const p of w.paths){c.beginPath();c.moveTo(w.center.x,w.center.y);c.lineTo(p.x,p.y);c.lineWidth=155;c.strokeStyle=b.dark+'45';c.stroke();c.lineWidth=112;c.strokeStyle=b.light+'35';c.stroke();}
  c.strokeStyle='#101421';c.lineWidth=44;c.strokeRect(23,23,w.width-46,w.height-46);c.strokeStyle=b.accent+'aa';c.lineWidth=3;c.strokeRect(45,45,w.width-90,w.height-90);
  const rng=U.rng(w.seed+22);for(let i=0;i<480;i++){const x=70+rng()*(w.width-140),y=70+rng()*(w.height-140);c.strokeStyle=b.accent+'26';c.lineWidth=1;c.beginPath();c.moveTo(x,y);c.lineTo(x+8,y+3);c.lineTo(x+14,y-2);c.stroke();}c.restore();};
 const decor=R.decor;R.decor=function(c,d){if(!d.solid)return;const p=this.g.player;c.save();c.fillStyle='#1118259c';c.fillRect(d.x-20,d.y-14,40,28);c.strokeStyle=U.dist(p,d)<100?'#fff4c8':'#c1d2d17c';c.lineWidth=2;c.strokeRect(d.x-20,d.y-14,40,28);decor.call(this,c,d);c.restore();};
 R.wall=function(c,w){const p=this.g.player,b=this.g.world.biome,near=p.x>w.x-75&&p.x<w.x+w.w+75&&p.y>w.y-65&&p.y<w.y+w.h+65;c.save();c.fillStyle='#0c14217f';c.fillRect(w.x+6,w.y+8,w.w,w.h);c.fillStyle=b.dark;c.fillRect(w.x,w.y,w.w,w.h);c.fillStyle=b.light;c.fillRect(w.x+3,w.y+3,w.w-6,w.h-10);c.strokeStyle=near?'#fff3c5':b.accent;c.lineWidth=near?3:1.5;c.strokeRect(w.x,w.y,w.w,w.h);c.strokeStyle=b.dark;c.lineWidth=2;for(let x=w.x+24;x<w.x+w.w;x+=24){c.beginPath();c.moveTo(x,w.y+3);c.lineTo(x,w.y+w.h-8);c.stroke();}c.restore();};
 const player=R.player;R.player=function(c,p){const blend=p.walkBlend||0,gait=p.gait||0,attack=Math.max(p.attackAnim||0,p.castAnim||0),facing=attack>0?(p.attackAim??p.aim):(p.facing??0),flip=Math.cos(facing)<-.1?-1:1,dead=p.hp<=0;
  c.save();c.translate(p.x,p.y);if(dead){c.rotate(-1.2);c.globalAlpha=.45;}else{c.translate(0,-Math.abs(Math.sin(gait))*2*blend);c.rotate((p.hurtAnim>0?Math.sin(p.hurtAnim*50)*.08:0)+(p.dashing>0||p.dashVisual>0?flip*.15:0));}c.scale(flip,1);
  const old=this.ambient;this.ambient=gait/14;player.call(this,c,{...p,x:0,y:0,vx:blend*100,vy:0,invuln:0});this.ambient=old;
  if(attack>0){c.strokeStyle=p.hero.color;c.lineWidth=3;c.beginPath();c.arc(0,-20,27,-.65+Math.sin(attack*12)*.25,.75);c.stroke();}c.restore();
  if(p.healAnim>0){c.strokeStyle='#baffcd';c.lineWidth=2;c.beginPath();c.ellipse(p.x,p.y-10,25,32,0,0,TAU);c.stroke();}if(p.invuln>0){c.strokeStyle='#effaffaa';c.lineWidth=1.5;c.beginPath();c.ellipse(p.x,p.y-18,24,32,0,0,TAU);c.stroke();}
 };
 const enemy=R.enemy;R.enemy=function(c,e){const shape=e.type.shape,blend=e.walkBlend||0,gait=e.gait||e.age*4,flying=['bat','wasp','imp','ghost','eye'].includes(shape),flip=Math.cos(e.facing||0)<-.1?-1:1,bob=flying?Math.sin(e.age*5)*3:Math.abs(Math.sin(gait))*2*blend;
  c.save();c.translate(e.x,e.y);if(e.left!==undefined){c.globalAlpha=Math.max(0,e.left/.5);c.rotate((.5-e.left)*1.8);}c.scale(flip,1);c.translate(0,-bob);if(!flying&&!['slime','plant','mushroom'].includes(shape)){c.strokeStyle=e.type.color;c.lineWidth=e.isBoss?10:4;const stride=Math.sin(gait)*7*blend;for(const side of [-1,1]){c.beginPath();c.moveTo(side*e.r*.45,-2);c.lineTo(side*e.r*.5+side*stride,8);c.stroke();}}
  enemy.call(this,c,{...e,x:0,y:0,mini:false,hp:e.maxHp,wind:Math.max(e.wind||0,e.rangedWind||0),savedAngle:flip<0?Math.PI-e.savedAngle:e.savedAngle,age:e.age+(e.castAnim||0)*.4});c.restore();if(e.hp<e.maxHp||e.mini){c.fillStyle='#161727';c.fillRect(e.x-e.r,e.y-e.r*3.2-7,e.r*2,4);c.fillStyle=e.mini?'#ffbf8d':'#e1caa3';c.fillRect(e.x-e.r,e.y-e.r*3.2-7,e.r*2*Math.max(0,e.hp/e.maxHp),4);}if(e.mini){c.fillStyle='#ffe2ae';c.font='11px Georgia';c.textAlign='center';c.fillText(e.name||'Mini-boss',e.x,e.y-e.r*3.2-14);}if(e.mark>0){c.strokeStyle='#f0bbff';c.lineWidth=2;c.beginPath();c.moveTo(e.x-9,e.y-e.r*3-12);c.lineTo(e.x+9,e.y-e.r*3+6);c.moveTo(e.x+9,e.y-e.r*3-12);c.lineTo(e.x-9,e.y-e.r*3+6);c.stroke();}
  if(e.castAnim>0){c.strokeStyle=e.type.color;c.lineWidth=3;c.beginPath();const a=e.attackAim||0;c.arc(e.x+Math.cos(a)*e.r,e.y-15+Math.sin(a)*e.r,8+e.castAnim*12,0,TAU);c.stroke();}
 };
 const zone=R.zone;R.zone=function(c,z){if(!z.enemy){zone.call(this,c,z);return;}c.save();const delay=z.delay>0,progress=1-U.clamp(z.delay/(z.telegraph||1.4),0,1);c.globalAlpha=delay?.20:.3;U.circle(c,z.x,z.y,z.r,'#f94b5c');c.globalAlpha=1;c.beginPath();c.arc(z.x,z.y,z.r,0,TAU);c.strokeStyle='#1b1327';c.lineWidth=7;c.stroke();c.strokeStyle='#fff0cb';c.lineWidth=2;c.stroke();c.strokeStyle='#ff615d';c.lineWidth=4;c.beginPath();c.arc(z.x,z.y,Math.max(3,z.r-6),-Math.PI/2,-Math.PI/2+TAU*progress);c.stroke();c.fillStyle='#fff4d3';c.font='bold 15px sans-serif';c.textAlign='center';c.strokeStyle='#251b2b';c.lineWidth=4;c.strokeText(delay?z.delay.toFixed(1):'!',z.x,z.y+5);c.fillText(delay?z.delay.toFixed(1):'!',z.x,z.y+5);c.restore();};
 const event=R.event;R.event=function(c,e){if(e.type!=='chest')return event.call(this,c,e);c.save();const x=e.x,y=e.y,open=e.used?U.clamp((this.g.time-(e.openedAt||0))*3,0,1):0;U.ellipse(c,x,y+10,29,11,'#10152388');c.fillStyle='#95663f';c.fillRect(x-23,y-17,46,28);c.strokeStyle='#ffe1a3';c.lineWidth=3;c.strokeRect(x-23,y-17,46,28);c.fillStyle='#d4a655';c.fillRect(x-25,y-22-open*22,50,9);c.fillStyle='#f6e3a7';c.fillRect(x-4,y-13,8,13);if(!e.used){c.fillStyle='#fff1c5';c.font='bold 14px sans-serif';c.textAlign='center';c.fillText('SKRZYNIA',x,y-38);}c.restore();};
 R.minimap=function(){const cv=document.getElementById('minimap');if(!cv)return;const c=cv.getContext('2d'),g=this.g,w=g.world,sx=146/w.width,sy=123/w.height;c.fillStyle='#111622';c.fillRect(0,0,146,123);for(let j=0;j<30;j++)for(let i=0;i<36;i++)if(w.fog[j*36+i]){c.fillStyle=w.biome.light+'9a';c.fillRect(i*100*sx,j*100*sy,100*sx+1,100*sy+1);}c.fillStyle='#151b29';for(const wall of w.walls)if(w.isKnown(wall.x,wall.y))c.fillRect(wall.x*sx,wall.y*sy,Math.max(1.5,wall.w*sx),Math.max(1.5,wall.h*sy));for(const e of w.events)if(!e.used&&w.isKnown(e.x,e.y)&&(e.type!=='chest'||e.discovered)){c.fillStyle=e.type==='chest'?'#ffd477':e.type==='portal'?'#b0f3ff':'#fff0c9';c.fillRect(e.x*sx-2,e.y*sy-2,4,4);}for(const e of g.enemies)if((e.isBoss||e.mini)&&w.isKnown(e.x,e.y))U.circle(c,e.x*sx,e.y*sy,e.isBoss?3:2,'#fa766f');U.circle(c,g.player.x*sx,g.player.y*sy,3,'#ffffff');};
 const render=R.render;R.render=function(dt){render.call(this,dt);const g=this.g;if(!g.player||!this.ox)return;const c=g.ctx;c.save();const zs=g.scale*(this.zoom25||1);c.setTransform(zs,0,0,zs,this.ox*zs,this.oy*zs);for(const corpse of g.corpses||[])this.enemy(c,corpse);if(g.state==='playing'&&g.enemies.filter(e=>U.dist(e,g.player)<100).length>6){this.player(c,g.player);c.strokeStyle='#111727';c.lineWidth=6;c.beginPath();c.arc(g.player.x,g.player.y+2,23,0,TAU);c.stroke();c.strokeStyle='#f8f4c4';c.lineWidth=2;c.stroke();U.poly(c,[[g.player.x,g.player.y-68],[g.player.x-6,g.player.y-79],[g.player.x+6,g.player.y-79]],'#fff5c7','#20263c');}const f=g.secondaryFX;if(f?.left>0){c.save();c.translate(f.x,f.y);c.rotate(f.a);c.globalAlpha=f.left/.4;c.strokeStyle={sol:'#ffc178',orren:'#e9d0a2',niva:'#b3f1ff',ilya:'#d1efae',vesper:'#dab4fa'}[f.id];c.lineWidth=f.id==='orren'?9:4;c.beginPath();c.arc(0,0,(1-f.left/.4)*(f.id==='sol'?230:130)+20,-.7,.7);c.stroke();c.restore();}c.restore();
  if(!S.data.settings.lowFX){c.save();c.setTransform(g.scale,0,0,g.scale,0,0);const b=g.world.biome;for(let i=0;i<18;i++){const x=(i*173+this.ambient*13)%g.width,y=(i*137+this.ambient*(b.theme==='ice'?24:-8)+g.height*100)%g.height;c.globalAlpha=.22;c.fillStyle=b.theme==='ice'?'#ffffff':b.theme==='forest'?'#bad89d':b.accent;c.fillRect(x,y,2,b.theme==='ice'?3:2);}c.restore();}
 };
})(window.Aeren);

;

/* Module: js/progress-23.js */
'use strict';
(function(A){
 const {Data:D,Save:S}=A,G=A.Game.prototype;
 D.version='1.0.0';
 Object.assign(D.secondary.ilya,{desc:'Przeszywający promień w kierunku kursora.'});Object.assign(D.secondary.sol,{desc:'Stożek ognia odrzucający wrogów.'});Object.assign(D.secondary.niva,{desc:'Lodowy uskok i ślad spowalniający wrogów.'});Object.assign(D.secondary.orren,{desc:'Uderzenie, kontrola tłumu i krótka osłona.'});Object.assign(D.secondary.vesper,{desc:'Znak zwiększający obrażenia zwykłych ataków.'});
 const defaults=()=>({version:3,wallet:{silver:0,crystals:0,tokens:0},receipts:{},discovered:{},challenges:{},unlocks:{},starts:{},cosmetics:{},equipped:{},endgame:{}});
 const settingDefaults={hudLayout:'auto',hudSize:'medium',hudAlign:'center',hudOpacity:.94,lowHP:'subtle',weaponStats:true};
 const load=S.load;S.load=function(){const d=load.call(this);this.meta3=defaults();try{const m=JSON.parse(localStorage.getItem('aeren.meta.v3'));if(m?.version===3){for(const key of Object.keys(this.meta3))if(key!=='version'&&m[key]&&typeof m[key]==='object'&&!Array.isArray(m[key]))this.meta3[key]={...this.meta3[key],...m[key]};}}catch(e){this.error=true;}
  for(const k of ['silver','crystals','tokens'])this.meta3.wallet[k]=Math.max(0,Math.floor(Number(this.meta3.wallet[k])||0));
  for(const h of D.heroes)if(this.meta3.unlocks['hero:'+h.id]&&!d.heroes.includes(h.id))d.heroes.push(h.id);
  d.settings={...settingDefaults,...d.settings};for(const [key,values] of Object.entries({hudLayout:['auto','classic','round'],hudSize:['small','medium','large'],hudAlign:['left','center','right'],lowHP:['full','subtle','off']}))if(!values.includes(d.settings[key]))d.settings[key]=settingDefaults[key];d.settings.hudOpacity=Math.max(.65,Math.min(1,Number(d.settings.hudOpacity)||.94));
  for(const h of D.heroes)if(d.heroes.includes(h.id))this.meta3.discovered['weapon:'+h.startWeapon]=true;
  const run=this.readRun();if(run){for(const w of run.weapons||[])this.meta3.discovered['weapon:'+w.id]=true;for(const i of run.items||[])this.meta3.discovered['item:'+i.id]=true;}
  return d;
 };
 const write=S.write;S.write=function(){const ok=write.call(this);try{localStorage.setItem('aeren.meta.v3',JSON.stringify(this.meta3||defaults()));return ok;}catch(e){this.error=true;return false;}};
 S.writeMeta23=function(){try{localStorage.setItem('aeren.meta.v3',JSON.stringify(this.meta3));return true;}catch(e){this.error=true;return false;}};
 const reset=S.reset;S.reset=function(){this.meta3=defaults();reset.call(this);this.data.settings={...settingDefaults,...this.data.settings};this.write();};
 // Wallet and receipt share one storage value. Retrying a saved encounter is idempotent.
 S.grant23=function(receipt,reward){if(this.meta3.receipts[receipt])return false;const before=JSON.stringify(this.meta3);for(const k of ['silver','crystals','tokens'])this.meta3.wallet[k]+=Math.max(0,Math.floor(reward[k]||0));this.meta3.receipts[receipt]=true;if(!this.writeMeta23()){this.meta3=JSON.parse(before);return false;}return true;};
 D.challenges23=[
  {id:'dry',name:'Suchy prowiant',desc:'Pokonaj strażnika rundy bez użycia mikstury.',goal:1,reward:{silver:40,tokens:3}},
  {id:'clean',name:'Nietykalny',desc:'Pokonaj minibossa bez otrzymania obrażeń od jego pojawienia.',goal:1,reward:{crystals:1,tokens:4}},
  {id:'ilya',name:'Przysięga Gaju',desc:'Ukończ rundę jako Ilya.',goal:1,reward:{silver:45,tokens:3}},
  {id:'pair',name:'Zgrany duet',desc:'Ukończ rundę z dokładnie jedną dodatkową bronią.',goal:1,reward:{silver:45,tokens:3}},
  {id:'swift',name:'Przed zmierzchem',desc:'Pokonaj strażnika w ciągu 60 s od jego pojawienia.',goal:1,reward:{crystals:1,tokens:5}},
  {id:'steady',name:'Pewny wybór',desc:'Ukończ rundę bez przelosowania nagrody.',goal:1,reward:{silver:35,tokens:3}},
  {id:'fire',name:'Pogromca żaru',desc:'Pokonaj 150 przeciwników ogniem w jednej wyprawie. Wymaga karty wyzwania.',goal:150,unlock:'challenge',reward:{crystals:2,tokens:8}}
 ];
 D.shop23=[
  {id:'quality',name:'Oko poszukiwacza',currency:'silver',cost:180,max:3,desc:'Każda ranga: +3% do mnożnika szans rzadszego wyposażenia. Bez premii obrażeń.'},
  {id:'reroll',name:'Znajomości kartografa',currency:'silver',cost:120,max:2,desc:'Każda ranga: przelosowanie tańsze o 10 złota. Limit nadal 2 na rundę.'},
  {id:'challenge',name:'Karta: Pogromca żaru',currency:'silver',cost:100,max:1,desc:'Odblokowuje wyzwanie 150 zabójstw ogniem.'},
  {id:'dusk',name:'Mapy o zmierzchu',currency:'silver',cost:220,max:1,desc:'Odblokowuje wybieralny wariant światła sześciu lokacji. Bez premii bojowych.'},
  {id:'weapon:stormrod',name:'Schemat Berła Burzy',currency:'crystals',cost:3,max:1,desc:'Dodaje Berło Burzy do losowania wyposażenia.'},
  {id:'weapon:scythe',name:'Schemat Kosy Umarłych',currency:'crystals',cost:3,max:1,desc:'Dodaje Kosę Umarłych do losowania wyposażenia.'},
  ...D.heroes.map(h=>({id:'f:'+h.id,name:h.name+' · F: Azyl',currency:'crystals',cost:4,max:1,desc:'Wariant F: +15% czasu odnowienia, w zamian 2 s ochrony po użyciu. Można przełączać w rozwoju bohatera.'})),
  ...D.heroes.map(h=>({id:'skin:'+h.id,name:h.name+' · Srebrzysty ślad',currency:'tokens',cost:12,max:1,desc:'Srebrzysta aura i obrys bohatera. Kosmetyczne, bez statystyk.'})),
  {id:'frame',name:'Ramka Pieczęci',currency:'tokens',cost:10,max:1,desc:'Zdobiona ramka portretu w HUD.'},
  {id:'trail',name:'Widmowe pociski',currency:'tokens',cost:15,max:1,desc:'Jasne smugi pocisków broni.'}
 ];
 S.purchase23=function(id){const d=D.shop23.find(x=>x.id===id);if(!d)return false;const m=this.meta3,rank=m.unlocks[id]||0,cost=d.cost*(rank+1);if(rank>=d.max||m.wallet[d.currency]<cost||(id.startsWith('hero:')&&this.data.heroes.includes(id.slice(5))))return false;const before=JSON.stringify(m);m.wallet[d.currency]-=cost;m.unlocks[id]=rank+1;if(!this.writeMeta23()){this.meta3=JSON.parse(before);return false;}if(id.startsWith('hero:')){this.data.heroes.push(id.slice(5));this.write();}return true;};
 G.discover23=function(kind,id){if(id===undefined||id===null)return;S.meta3.discovered[kind+':'+id]=true;};
 const upgrade=G.upgrade;G.upgrade=function(id){if(id.startsWith('bond:')){const key=id.slice(5);if(!this.runSynergies.has(key)||this.player.bonds23?.includes(key))return false;(this.player.bonds23||=[]).push(key);this.recalculate();return true;}const result=upgrade.call(this,id);if(D.byId[id]?.type==='legendary')this.discover23('relic',id);return result;};
 const choices=G.rollChoices;G.rollChoices=function(){const out=choices.call(this),bonds=this.player.bonds23||[],eligible=D.synergies.filter(s=>this.runSynergies.has(s.id)&&!bonds.includes(s.id));if(bonds.length<3&&eligible.length){const s=eligible[Math.floor(Math.random()*eligible.length)];out[out.length-1]={id:'bond:'+s.id,name:'Więź: '+s.name,icon:'✦',type:'synergy',rarity:2,max:1,desc:'Utrwal aktywną synergię: +2% obrażeń. Do 3 więzi w wyprawie. '+s.desc};}return out;};
 const recalc=G.recalculate;G.recalculate=function(){const s=recalc.call(this);s.damage*=1+.02*Math.min(3,this.player.bonds23?.length||0);return s;};
 G.challenge23=function(id,progress=1){if(this.cheated)return;const d=D.challenges23.find(x=>x.id===id);if(!d||(d.unlock&&!S.meta3.unlocks[d.unlock]))return;S.meta3.challenges[id]=Math.max(S.meta3.challenges[id]||0,Math.min(d.goal,progress));if(progress>=d.goal&&S.grant23('challenge:'+id,d.reward))this.ui.toast('Wyzwanie: '+d.name,'Nagroda trafiła do portfela konta.');};
 const start=G.start;G.start=function(id,options={}){const result=start.call(this,id,options);if(result===false)return result;this.player.runId=crypto.randomUUID?.()||Date.now()+'-'+Math.random();this.player.roundPotions=0;this.player.hits23=0;this.player.elementKills={};this.player.mapVariant=S.meta3.equipped.map==='dusk'?'dusk':'default';this.player.fVariant=S.meta3.equipped['f:'+id]||'base';this.player.startWeaponId=this.player.hero.startWeapon;
  if(!options.restoring){const selected=S.meta3.starts[id];if(D.allowedStarts23?.[id]?.includes(selected)&&this.weaponAvailable23(selected)){this.weapons[0]={id:selected,level:1,cd:0};this.player.startWeaponId=selected;}this.discover23('map',0);this.discover23('weapon',this.weapons[0].id);S.write();this.saveRun();}return result;};
 const restore=G.loadRun;G.loadRun=function(){const ok=restore.call(this);if(ok){this.player.runId||='legacy-'+this.seed+'-'+this.mission;this.player.hits23||=0;this.player.roundPotions||=0;this.player.elementKills||={};this.player.startWeaponId||=this.weapons[0].id;for(const w of this.weapons)this.discover23('weapon',w.id);for(const i of this.items)this.discover23('item',i.id);this.discover23('map',this.biome);S.write();}return ok;};
 const potion=G.usePotion;G.usePotion=function(){const n=this.player.potions.length,result=potion.call(this);if(this.player.potions.length<n){this.player.roundPotions=(this.player.roundPotions||0)+1;this.saveRun();}return result;};
 const hurt=G.hurt;G.hurt=function(...args){const hp=this.player.hp,result=hurt.apply(this,args);if(this.player.hp<hp)this.player.hits23=(this.player.hits23||0)+1;return result;};
 const spawn=G.spawn;G.spawn=function(...args){const e=spawn.apply(this,args);if(e&&(e.mini||e.isBoss)){e.hitsAtSpawn=this.player.hits23||0;e.timeAtSpawn=this.time;}return e;};
 const hit=G.hit;G.hit=function(e,damage,element,opts){if(e)e.lastElement23=element;return hit.call(this,e,damage,element,opts);};
 const kill=G.kill;G.kill=function(e,...args){if(e.dead)return;kill.call(this,e,...args);if(this.cheated)return;const p=this.player;p.elementKills||={};p.elementKills[e.lastElement23]=(p.elementKills[e.lastElement23]||0)+1;
  if(e.lastElement23==='fire')this.challenge23('fire',p.elementKills.fire);
  if(e.mini&&e.hitsAtSpawn!==undefined&&e.hitsAtSpawn===(p.hits23||0))this.challenge23('clean');
  if(e.isBoss){this.discover23('boss',this.biome);this.discover23('map',this.biome);S.grant23(p.runId+':boss:'+this.biome,{silver:20+this.mission*5});S.grant23('first-boss:'+this.biome,{crystals:1,silver:30});if(!p.roundPotions)this.challenge23('dry');if(!this.rerolls)this.challenge23('steady');if(p.hero.id==='ilya')this.challenge23('ilya');if(this.weapons.length===2)this.challenge23('pair');if(this.time-e.timeAtSpawn<=60)this.challenge23('swift');S.write();this.saveRun();}
 };
 const advance=G.advance;G.advance=function(){const b=this.biome;advance.call(this);if(this.biome!==b){this.player.roundPotions=0;this.discover23('map',this.biome);S.write();this.saveRun();}};
 const finish=G.finish;G.finish=function(win){if(!this.endSaved&&!this.cheated&&win){S.grant23(this.player.runId+':mission',{silver:100+this.mission*20,crystals:this.modeId==='hard'?2:0});S.grant23('first-mission:'+this.modeId+':'+this.mission,{silver:75,crystals:1});}return finish.call(this,win);};
 const complete=G.completeReward;G.completeReward=function(){for(const w of this.weapons)this.discover23('weapon',w.id);for(const i of this.items)this.discover23('item',i.id);for(const id of this.runSynergies)this.discover23('synergy',id);S.write();return complete.call(this);};
 const ult=G.castUltimate;G.castUltimate=function(){const before=this.player.ultCd;ult.call(this);if(before<=0&&this.player.ultCd>0&&this.player.fVariant==='azyl'){this.player.ultCd*=1.15;this.player.guard=Math.max(this.player.guard||0,2);}};
 G.rerollPrice23=function(){return Math.max(25,75+this.player.level*12-10*(S.meta3.unlocks.reroll||0));};
 G.reroll=function(){if(this.state!=='gear'||this.rewardStage==='chest'||this.rerolls>=2||this.gold<this.rerollPrice23())return;this.gold-=this.rerollPrice23();this.rerolls++;this.gearChoices=this.rollGear();this.ui.gear(this.gearChoices);this.saveRun();};
})(window.Aeren);



;

/* Module: js/weapons-23.js */
'use strict';
(function(A){const {Data:D,Save:S,U}=A,G=A.Game.prototype;
 D.weapons.push(...[
  ['spear','Włócznia Strażnika','➚','stone',1.15,1.15,0,'Szybka włócznia, przebijanie i rozszczepienie co piąty atak.'],
  ['thornbow','Łuk Cierni','➶','nature',.85,1.25,1,'Wachlarz cierniowych strzał; do trzech pocisków.'],
  ['runicHammer','Młot Runiczny','⬡','stone',1.45,1.8,1,'Ciężki pocisk z eksplozją, odrzutem i ogłuszeniem.']
 ].map(x=>({id:x[0],name:x[1],icon:x[2],element:x[3],power:x[4],interval:x[5],rarity:x[6],desc:x[7],max:5})));
 D.weaponById=Object.fromEntries(D.weapons.map(w=>[w.id,w]));
 D.allowedStarts23={ilya:['bow','thornbow'],sol:['staff','stormrod'],niva:['iceblade','spear'],orren:['hammer','runicHammer'],vesper:['daggers','scythe']};
 D.weaponRanks23={spear:['1 szybki pocisk','+18% obrażeń bazowych','Przebija 1 przeciwnika','Przebija 3 przeciwników','Co 5. atak: 3 włócznie'],thornbow:['1 strzała','Odnowienie krótsze o 12%','2 strzały','Przebija 1 przeciwnika','3 strzały, +8 pp. krytyka'],runicHammer:['Ciężki pocisk','+18% obrażeń bazowych','Eksplozja: 55 jednostek','Silniejszy odrzut','Eksplozja: 85; 20% szans ogłuszenia'],scythe:['Szeroki sierp','Zasięg +20%','Przebija 2 przeciwników','1% kradzieży życia; wspólny limit 2 HP/s','Pocisk wraca do bohatera'],stormrod:['Pocisk elektryczny','Odnowienie krótsze o 12%','Przeskok na 1 kolejny cel','Przeskok na 2 kolejne cele','20% szans pioruna obszarowego']};
 A.weaponStats23=function(w,g){const d=D.weaponById[w.id],l=Math.max(1,Math.min(5,w.level||1)),s=g?.stats,h=g?.player.hero;let interval=d.interval/(1.12*(s?s.rate/h.rate:1)),range={daggers:420,hammer:570,runicHammer:590,scythe:550,crossbow:820,spear:810,thornbow:760}[d.id]||720;
  if(['thornbow','stormrod','iceblade'].includes(d.id)&&l>=2)interval*=.88;if(d.id==='scythe'&&l>=2)range*=1.2;
  return {damage:(s?.damage||20)*d.power*(1+(l-1)*.18)*(s?.weaponPower||1),interval:Math.max(.32,interval),range,level:l};};
 G.weaponAvailable23=function(id){const d=D.weaponById[id];return !!d&&(!['stormrod','scythe'].includes(id)||S.meta3.unlocks['weapon:'+id]||S.meta3.discovered['weapon:'+id]);};
 const rollItem=G.rollItem;G.rollItem=function(forced){if(forced===undefined)forced=D.rarity.indexOf(U.weighted(D.rarity,r=>r.weight*Math.pow((this.mode?.loot||1)*(1+this.stats.luck*.2)*(1+.03*(S.meta3.unlocks.quality||0)),D.rarity.indexOf(r))));return rollItem.call(this,forced);};
 G.rollGear=function(){const pool=D.weapons.filter(w=>(!w.owner||w.owner===this.player.hero.id)&&this.weaponAvailable23(w.id)&&!this.weapons.some(o=>o.id===w.id&&o.level>=5));const out=[];
  if(pool.length){const w=U.weighted(pool,w=>D.rarity[w.rarity].weight*Math.pow(this.mode.loot*(1+this.stats.luck*.2)*(1+.03*(S.meta3.unlocks.quality||0)),w.rarity)*(this.weapons.some(o=>o.id===w.id)?(this.weapons.length===3?7:2):1));const owned=this.weapons.find(x=>x.id===w.id);out.push({...w,kind:'weapon',level:owned?owned.level+1:1,desc:this.weaponDescription23(w.id,owned?owned.level+1:1)});}
  const available=D.itemTemplates.filter(t=>!this.items.some(i=>i.id===t.id&&i.level>=5));let tries=0;while(out.length<3&&tries++<80){const item=this.rollItem();if(!available.some(t=>t.id===item.id)||out.some(x=>x.id===item.id))continue;const owned=this.items.find(i=>i.id===item.id);if(owned){item.level=owned.level+1;item.rarity=Math.max(item.rarity,owned.rarity);this.itemStats(item);}out.push(item);}return out;
 };
 G.weaponDescription23=function(id,level){const d=D.weaponById[id],stat=A.weaponStats23({id,level},this),ranks=D.weaponRanks23[id];return `${Math.round(stat.damage)} obrażeń · co ${stat.interval.toFixed(2)} s · zasięg ${stat.range}. ${ranks?ranks.slice(0,level).join(' · '):d.desc+' Każdy poziom: +18% obrażeń bazowych.'}`;};
 const load=G.loadRun;G.loadRun=function(){const r=S.readRun(),h=r&&D.heroes.find(x=>x.id===r.hero),original=h?.startWeapon,selected=r?.player.startWeaponId;if(h&&D.allowedStarts23[h.id]?.includes(selected))h.startWeapon=selected;try{return load.call(this);}finally{if(h)h.startWeapon=original;}};
 const save=G.saveRun;G.saveRun=function(){for(const w of this.weapons||[])w.stats23=A.weaponStats23(w,this);return save.call(this);};
 const bullet=G.bullet;G.bullet=function(x,y,a,damage,element,options={}){return bullet.call(this,x,y,a,damage,element,{weapon23:null,weaponLevel23:0,returnAt23:0,returning23:false,...options});};
 G.updateWeapons=function(dt){const p=this.player,s=this.stats;for(const w of this.weapons){w.cd=Math.max(0,(w.cd||0)-dt);w.flash23=Math.max(0,(w.flash23||0)-dt);const d=D.weaponById[w.id];if(!d)continue;const st=A.weaponStats23(w,this),target=this.nearEnemies(st.range,1)[0],manual=A.Controls.down(this.input,'attack')||this.input.pad.attack;if(w.cd>0||!(manual||(S.data.settings.auto&&target)))continue;
   const aim=S.data.settings.autoAim!==false&&target?target:this.aimPoint(),a=U.angle(p,aim),l=st.level;w.cd=st.interval;w.shots23=(w.shots23||0)+1;w.aim23=a;w.flash23=.22;w.stats23=st;w.rarity??=d.rarity;
   const traits=A.weaponTraits(d.id,l);let count=traits.splitEvery&&w.shots23%traits.splitEvery===0?3:traits.count;count=Math.min(5,count+Math.max(0,s.count-1));
   const pierce=traits.pierce;const element=w===this.weapons[0]&&this.has('prism')?['fire','ice','lightning','poison'][(w.shots23-1)%4]:d.element;
   for(let i=0;i<count;i++)this.bullet(p.x,p.y-18,a+(i-(count-1)/2)*.15,st.damage,element,{basic:true,style:d.id,weapon23:d.id,weaponLevel23:l,life:st.range/(540*s.velocity*(d.id==='spear'?1.2:1)),speed:d.id==='spear'?1.2:1,r:['hammer','runicHammer','scythe'].includes(d.id)?10:5,pierce,explosion:traits.explosion,returnAt23:traits.returning?st.range/(540*s.velocity)*.65:0});
   p.attackAnim=.18;p.attackAim=a;p.shots++;if(A.SoundFX)A.SoundFX.weapon(w);else A.Audio.play('attack');
  }};
 const projectiles=G.updateProjectiles;G.updateProjectiles=function(dt){for(const b of this.projectiles.active){if(b.returnAt23&&b.age>=b.returnAt23){if(!b.returning23){b.returning23=true;b.hitIds=[];b.pierce=b.sliceShot&&b.weaponLevel23>=5?5:2;b.life=2;}const a=U.angle(b,this.player),speed=540*this.stats.velocity;b.vx=Math.cos(a)*speed;b.vy=Math.sin(a)*speed;if(U.dist(b,this.player)<25)b.life=0;}}projectiles.call(this,dt);};
 G.weaponHit23=function(e,b){if(!b.weapon23)return;const l=b.weaponLevel23,t=A.weaponTraits(b.weapon23,l);if(t.chains){this.chain(e,b.damage*.28,t.chains);if(t.areaChance&&Math.random()<t.areaChance)this.zone(e.x,e.y,85,b.damage*.4,'lightning',{once:true});}if(t.knockback){e.kx+=Math.cos(Math.atan2(b.vy,b.vx))*t.knockback;e.ky+=Math.sin(Math.atan2(b.vy,b.vx))*t.knockback;if(t.stunChance&&!e.isBoss&&!e.mini&&Math.random()<t.stunChance)e.status.root=.65;}if(t.steal){const heal=Math.min(Math.max(0,this.lifeBudget||0),b.damage*t.steal);this.player.hp=Math.min(this.stats.maxHp,this.player.hp+heal);this.lifeBudget-=heal;}};
})(window.Aeren);

;

/* Module: js/ui-23.js */
'use strict';
(function(A){const {Data:D,Save:S,U,Controls:C}=A,P=A.UI.prototype;
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const currency={silver:['◈','Srebro','Misje, bossowie i wyzwania. Odblokowania wspólne.'],crystals:['◇','Kryształy Otchłani','Pierwsze zwycięstwa i trudne misje. Bohaterowie, schematy i warianty F.'],tokens:['◆','Żetony','Wyzwania. Wyłącznie wygląd.']};
 P.wallet23=function(){return `<div class="wallet23"><span title="Odłamki za wyprawy. Stałe statystyki wybranego bohatera.">✦ ${S.data.currency} <small>Odłamki</small></span>${Object.entries(currency).map(([k,v])=>`<span class="${k}" title="${v[2]}">${v[0]} ${S.meta3.wallet[k]} <small>${v[1]}</small></span>`).join('')}</div>`;};
 P.menu=function(){this.g.state='menu';this.hud.hidden=true;this.overlay.dataset.modal='false';const run=S.readRun();this.overlay.innerHTML=`<main class="menu menu23"><div class="eyebrow">KRONIKI OTCHŁANI · ${D.version}</div><h1 class="brand">AEREN</h1><p class="intro">Wykuj własną drogę przez sześć kręgów.</p>${this.wallet23()}<nav>${this.button('Nowa wyprawa ↗','heroes','','primary')}${run?this.button('Kontynuuj · '+D.heroes.find(h=>h.id===run.hero).name+' · '+U.time(run.time),'continue'):''}${this.button('Rozwój bohaterów','meta')}${this.button('Kuźnia broni','forge23')}${this.button('Archiwum reliktów','archive23')}${this.button('Wyzwania','challenges23')}${this.button('Kolekcja i wymiana','collection23')}${this.button('Ustawienia','settings','menu')}${this.button('Sprawdź aktualizacje','updates')}${this.button('Wyjdź z gry','exit23','','ghost')}</nav><p class="hint">${C.label('menuUp')} ${C.label('menuDown')} wybór · ${C.label('confirm')} zatwierdź<br>Postęp zapisuje się lokalnie. Bez zakupów za prawdziwe pieniądze.</p></main>`;for(const e of A.activeEvents()){const n=document.createElement('p');n.className='hint';n.textContent=e.title+' — '+e.description;this.overlay.querySelector('nav').before(n);}this.focus();};
 P.shopCard23=function(d){const m=S.meta3,r=m.unlocks[d.id]||0,owned=r>=d.max||(d.id.startsWith('hero:')&&S.data.heroes.includes(d.id.slice(5))),cost=d.cost*(r+1);return `<article class="mastery-node"><span class="label">${currency[d.currency][1]} · ${r}/${d.max}</span><h3>${d.name}</h3><p>${d.desc}</p><button class="btn" data-action="buy23" data-value="${d.id}" ${owned||m.wallet[d.currency]<cost?'disabled':''}>${owned?'Odblokowano':cost+' '+currency[d.currency][0]+' · Odblokuj'}</button></article>`;};
 P.collection23=function(){this.g.state='collection';this.hud.hidden=true;this.shopBack23='collection23';this.panel('Kolekcja i wymiana','Ograniczone odblokowania i kosmetyka',`${this.wallet23()}<p>Wyposażenie wyprawy: zawsze maksymalnie 6 przedmiotów i 3 bronie. Poziomy broni rozwijasz od nowa w każdej wyprawie.</p><div class="mastery-grid">${D.shop23.map(d=>this.shopCard23(d)).join('')}</div><div class="actions">${S.meta3.unlocks.dusk?this.button('Światło map: '+(S.meta3.equipped.map==='dusk'?'zmierzch':'standardowe'),'map23'):''}${S.meta3.unlocks.frame?this.button('Ramka: '+(S.meta3.equipped.frame?'Pieczęć':'standardowa'),'cosmetic23','frame'):''}${S.meta3.unlocks.trail?this.button('Pociski: '+(S.meta3.equipped.trail?'widmowe':'standardowe'),'cosmetic23','trail'):''}</div>`);};
 P.challenges23=function(){this.g.state='challenges';this.hud.hidden=true;this.panel('Wyzwania','Jednorazowe nagrody konta · odbiór automatyczny',`${this.wallet23()}<div class="mastery-grid">${D.challenges23.map(d=>{const n=S.meta3.challenges[d.id]||0,done=S.meta3.receipts['challenge:'+d.id],locked=d.unlock&&!S.meta3.unlocks[d.unlock];return `<article class="mastery-node ${done?'learned':''}"><span class="label">${locked?'ZABLOKOWANE':done?'ODEBRANO':'W TOKU'}</span><h3>${d.name}</h3><p>${d.desc}</p><progress max="${d.goal}" value="${n}"></progress><p>${n} / ${d.goal}</p><p>${Object.entries(d.reward).map(([k,v])=>v+' '+currency[k][0]).join(' · ')}</p></article>`;}).join('')}</div>`);};
 P.forge23=function(){this.g.state='forge';this.hud.hidden=true;this.shopBack23='forge23';const id=this.forgeWeapon23||this.g.player?.hero.startWeapon||'bow',w=D.weaponById[id],known=S.meta3.discovered['weapon:'+id],ranks=D.weaponRanks23[id]||Array.from({length:5},(_,i)=>'Obrażenia bazowe × '+(1+i*.18).toFixed(2)),skin=S.meta3.cosmetics[id];this.panel('Kuźnia broni','Poziom 1–5 rozwijasz podczas wyprawy',`${this.wallet23()}<div class="forge23"><div><canvas id="forge-preview23" width="320" height="210" aria-label="Animowana broń przy bohaterze"></canvas><h2>${known?w.name:'Nieodkryta broń'}</h2><p>${known?w.desc:'Znajdź schemat albo zdobądź broń podczas wyprawy.'}</p>${known?`<ol>${ranks.map((r,i)=>`<li>Poziom ${i+1}: ${r}. Siła ×${(w.power*(1+i*.18)).toFixed(2)}.</li>`).join('')}</ol><p>Podstawowy odstęp ${w.interval}s · żywioł ${w.element} · ${D.rarity[w.rarity].name}</p><button class="btn" data-action="weaponSkin23" data-value="${id}" ${!skin&&S.meta3.wallet.tokens<8?'disabled':''}>${skin?'Przełącz wariant: '+(S.meta3.equipped['weapon:'+id]?'Srebrzysty':'Klasyczny'):'Odblokuj srebrzysty wariant · 8 ◆'}</button>`:''}</div><div class="catalog">${D.weapons.map(x=>`<button class="card compact23 ${id===x.id?'selected':''}" data-action="forgeSelect23" data-value="${x.id}"><span class="symbol">${S.meta3.discovered['weapon:'+x.id]?x.icon:'?'}</span><h3>${S.meta3.discovered['weapon:'+x.id]?x.name:'Nieodkryta'}</h3></button>`).join('')}</div></div><h2>Broń startowa</h2><p>Zmiana dotyczy nowej wyprawy. Pierwsze miejsce pozostaje niezbywalne.</p>${D.heroes.filter(h=>S.data.heroes.includes(h.id)).map(h=>`<div class="actions"><b>${h.name}</b>${D.allowedStarts23[h.id].map(id=>`<button class="btn ${(S.meta3.starts[h.id]||h.startWeapon)===id?'primary':''}" data-action="startWeapon23" data-value="${h.id}:${id}" ${S.meta3.discovered['weapon:'+id]&&this.g.weaponAvailable23(id)?'':'disabled'}>${D.weaponById[id].name}</button>`).join('')}</div>`).join('')}<h2>Schematy</h2><div class="mastery-grid">${D.shop23.filter(x=>x.id.startsWith('weapon:')).map(x=>this.shopCard23(x)).join('')}</div>`);};
 P.archive23=function(){this.g.state='archive';this.hud.hidden=true;const seen=(kind,id)=>S.meta3.discovered[kind+':'+id],entry=(kind,id,name,desc,icon)=>`<article><span class="symbol">${seen(kind,id)?icon:'?'}</span><h3>${seen(kind,id)?name:'Nieodkryte'}</h3><p>${seen(kind,id)?desc:'Odkryj podczas wyprawy.'}</p></article>`;this.panel('Archiwum reliktów','Znalezione wyposażenie i kronika odkryć',`<h2>Przedmioty i relikty</h2><div class="catalog">${D.itemTemplates.map(i=>entry('item',i.id,i.name,'Przedmiot pasywny. Zajmuje jedno z sześciu miejsc.',i.icon)).join('')}${D.abilities.filter(a=>a.type==='legendary').map(a=>entry('relic',a.id,a.name,a.desc,a.icon)).join('')}</div><h2>Bronie</h2><div class="catalog">${D.weapons.map(w=>entry('weapon',w.id,w.name,w.desc,w.icon)).join('')}</div><h2>Synergie</h2><div class="catalog">${D.synergies.map(s=>entry('synergy',s.id,s.name,s.desc,s.icon||'✦')).join('')}</div><h2>Mapy i strażnicy</h2><div class="catalog">${D.biomes.map((b,i)=>entry('map',i,b.name,b.mechanic,b.bossIcon)+entry('boss',i,b.boss,'Strażnik tej lokacji.',b.bossIcon)).join('')}</div><h2>Rzadkość</h2><div class="catalog">${D.rarity.map(r=>`<article style="border-color:${r.color}"><h3 style="color:${r.color}">${r.name}</h3><p>Kolor ramki, broni i jej efektów identyfikuje jakość. Poziom 1–5 pozostaje oddzielny.</p></article>`).join('')}</div>`);};
 const meta=P.meta;P.meta=function(){meta.call(this);this.shopBack23='meta';const id=this.masterHero,h=D.heroes.find(h=>h.id===id),panel=this.overlay.querySelector('.panel');panel.querySelector('[data-action="unlockhero"]')?.remove();panel.insertAdjacentHTML('afterbegin',this.wallet23());panel.insertAdjacentHTML('beforeend',`<h2>Kronika ${h.name}</h2><p>${{ilya:'Strażniczka ocalałego gaju tropi źródło choroby korzeni. Jej strzały niosą pamięć dawnego lasu.',sol:'Badacz pieczęci zamienił własną pracownię w popiół. W otchłani szuka sposobu na ujarzmienie żaru.',niva:'Przeszła przez zamieć, która zatrzymała czas. Każda lodowa igła przypomina o tej podróży.',orren:'Ostatni obrońca kamiennej bramy nadal dotrzymuje przysięgi. Jego młot odpowiada na każdy upadek towarzysza.',vesper:'Zna ścieżki, których nie ma na mapach. Wśród umarłych szuka imienia skradzionego przez otchłań.'}[id]}</p><div class="mastery-grid">${D.shop23.filter(d=>d.id==='hero:'+id||d.id==='f:'+id||d.id==='skin:'+id).map(d=>this.shopCard23(d)).join('')}</div><div class="actions">${S.meta3.unlocks['f:'+id]?this.button('Wariant F: '+(S.meta3.equipped['f:'+id]==='azyl'?'Azyl':'podstawowy'),'fVariant23',id):''}${S.meta3.unlocks['skin:'+id]?this.button('Wygląd: '+(S.meta3.equipped['skin:'+id]?'Srebrzysty ślad':'podstawowy'),'cosmetic23','skin:'+id):''}</div>`);};
 const settings=P.settings;P.settings=function(back='menu'){settings.call(this,back);this.settingsBack23=back;const s=S.data.settings,labels={hudLayout:['Układ HUD',{auto:'Automatyczny',classic:'Klasyczny',round:'Okrągły'}],hudSize:['Wielkość HUD',{small:'Mały',medium:'Średni',large:'Duży'}],hudAlign:['Położenie HUD',{left:'Po lewej',center:'Centralnie',right:'Po prawej'}],lowHP:['Efekt niskiego HP',{full:'Pełny',subtle:'Delikatny',off:'Wyłączony'}]};this.overlay.querySelector('.panel').insertAdjacentHTML('beforeend',`<h2>Interfejs wyprawy</h2>${Object.entries(labels).map(([key,[name,opts]])=>`<p>${name}</p><div class="actions">${Object.entries(opts).map(([v,t])=>this.button(t,'setting23',key+':'+v,s[key]===v?'primary':'')).join('')}</div>`).join('')}<div class="actions">${[.65,.8,.94,1].map(v=>this.button('Krycie '+Math.round(v*100)+'%','setting23','hudOpacity:'+v,s.hudOpacity===v?'primary':'')).join('')}${this.button('Opisy statystyk broni: '+(s.weaponStats?'widoczne':'ukryte'),'setting23','weaponStats:'+!s.weaponStats)}</div>`);};
 const gear=P.gear;P.gear=function(choices){gear.call(this,choices);const b=this.overlay.querySelector('[data-action="reroll"]');if(b){b.textContent=`Przelosuj · ${this.g.rerollPrice23()} złota · ${2-this.g.rerolls} pozostało`;b.disabled=this.g.rerolls>=2||this.g.gold<this.g.rerollPrice23();}this.overlay.querySelectorAll('[data-action="gear"]').forEach((el,i)=>{const x=choices[i];if(x.kind==='weapon')el.querySelector('p').textContent=this.g.weaponDescription23(x.id,x.level);});};
 const skillCard=P.skillCard;P.skillCard=function(a){if(a.type!=='synergy')return skillCard.call(this,a);return `<button class="card epic" data-action="choose" data-value="${a.id}"><span class="label">Umiejętność · Synergia</span><span class="symbol">✦</span><h3>${a.name}</h3><p>${a.desc}</p><span class="bottom">JEDNORAZOWA WIĘŹ</span></button>`;};
 const replace=P.replace;P.replace=function(kind){replace.call(this,kind);const list=kind==='weapon'?this.g.weapons:this.g.items;this.overlay.querySelectorAll('[data-action="replace"].card').forEach((el,i)=>{el.querySelector('p').textContent='Tracisz: '+(kind==='weapon'?this.g.weaponDescription23(list[i].id,list[i].level):list[i].desc);});};
 P.buildHUD=function(){this.hud.innerHTML=`<div id="danger23"></div><header class="top23"><strong id="biome-text"></strong><span id="timer-text"></span><span id="objective"></span><div id="boss-hud" hidden><span id="boss-name"></span><div class="bar"><i id="boss-fill"></i></div></div></header><canvas class="map23" id="minimap" width="146" height="123" aria-label="Odkryta mapa"></canvas><section id="dock23" class="dock23"><div class="vitals23"><div id="portrait23">${this.g.player.hero.icon}</div><div class="meters23"><strong>${this.g.player.hero.name} · <span id="level-text"></span></strong><div class="health23"><i id="hp-trail23"></i><i id="hp-fill"></i><b id="hp-text"></b></div><div class="xp23"><i id="xp-fill"></i><b id="xp-text"></b></div><small id="stats23"></small></div></div><div class="abilities23" id="abilities"></div><div class="inventory23"><span id="gear23"></span><span id="gold-text"></span><span id="save23"></span></div><div id="weaponstats23"></div><div id="buffs"></div></section><div class="interaction" id="interaction" hidden></div>`;this.hud.hidden=false;this.lastHUD=0;this.prevHP23=this.g.player.hp;this.cdMax23={};};
 P.update=function(dt){this.drawForge23?.();if(this.hud.hidden)return;this.lastHUD=(this.lastHUD||0)+dt;if(this.lastHUD<.08)return;this.lastHUD=0;const g=this.g,p=g.player,s=g.stats,opt=S.data.settings,$=id=>document.getElementById(id);if(!$('dock23'))return;
  const frac=U.clamp(p.hp/s.maxHp,0,1),dock=$('dock23');dock.dataset.layout=opt.hudLayout==='auto'?(innerWidth>=1500?'round':'classic'):opt.hudLayout;dock.dataset.size=opt.hudSize;dock.dataset.align=opt.hudAlign;dock.style.setProperty('--opacity',opt.hudOpacity);dock.dataset.health=frac<.15?'critical':frac<.3?'low':frac<.6?'warn':'good';
  $('portrait23').classList.toggle('ornate23',!!S.meta3.equipped.frame);$('level-text').textContent='POZ. '+p.level;$('hp-fill').style.width=frac*100+'%';$('hp-trail23').style.width=frac*100+'%';$('hp-fill').classList.toggle('healing23',p.hp>this.prevHP23);this.prevHP23=p.hp;$('hp-text').textContent=Math.ceil(Math.max(0,p.hp))+' / '+s.maxHp+' HP';$('xp-fill').style.width=(p.xp/p.nextXP*100)+'%';$('xp-text').textContent='XP '+Math.floor(p.xp/p.nextXP*100)+'%';$('stats23').textContent=`ATK ${s.damage.toFixed(0)} · PANCERZ ${s.armor.toFixed(0)} · KRYT ${Math.round(s.crit*100)}%`;
  $('danger23').dataset.level=opt.lowHP==='off'||frac>=.3?'off':frac<.15?'critical':'low';$('danger23').style.setProperty('--strength',opt.lowHP==='full'?1:.5);
  const slot=(id,key,icon,name,cd,rank,desc)=>{cd=Math.max(0,cd||0);this.cdMax23[id]=Math.max(cd,this.cdMax23[id]||0);const percent=cd?100*cd/Math.max(1,this.cdMax23[id]):0;return `<div class="skill23 ${id==='ultimate'?'ultimate23':''} ${cd?'cooling23':'ready23'}" title="${esc(name+' — '+desc)}" style="--cd:${percent}%"><b>${esc(key)}</b><span>${icon}</span><small>${rank}</small>${cd?`<em>${cd<10?cd.toFixed(1):Math.ceil(cd)}</em>`:''}</div>`;};
  $('abilities').innerHTML=[0,1,2].map(i=>{const a=D.byId[p.active[i]];return slot('skill'+i,C.label('skill'+i),a?.icon||'·',a?.name||'Wolne miejsce',a?p.cooldowns[a.id]:0,a?'POZ. '+g.has(a.id):'PUSTE',a?.desc||'Zdobądź umiejętność podczas awansu.');}).join('')+slot('secondary',C.label('secondary'),D.secondary[p.hero.id].icon,D.secondary[p.hero.id].name,p.secondaryCd,'PPM',D.secondary[p.hero.id].desc)+slot('ultimate',C.label('ultimate'),p.hero.ultimate.icon,p.hero.ultimate.name,p.ultCd,p.ultLevel+'/3',p.hero.ultimate.desc)+slot('dash',C.label('dash'),'➶','Unik',p.dashCd,'UNIK','Krótka niewrażliwość i szybki ruch.')+slot('potion',C.label('potion'),'♥','Mikstury',p.potionCd,(p.potions?.length||0)+'/2',(p.potions||[]).map(id=>D.potions[id].name).join(' → ')||'Pusto. Znajdź skrzynię.');
  $('gear23').textContent=`BRONIE ${g.weapons.length}/3 · PRZEDMIOTY ${g.items.length}/6`;$('gold-text').textContent='● '+g.gold+' ZŁOTA';$('gold-text').title='Waluta tej wyprawy. Służy do przelosowania wyposażenia.';$('save23').textContent=g.lastSaved?'Zapis ✓':'Zapisywanie…';$('weaponstats23').hidden=!opt.weaponStats;$('weaponstats23').textContent=g.weapons.map(w=>{const st=A.weaponStats23(w,g);return `${D.weaponById[w.id].name} ${w.level}/5 · ${Math.round(st.damage)} ATK`;}).join('  /  ');
  $('buffs').textContent=[p.guard>0?'Ochrona':'',p.status.poison?'Zatrucie':'',p.status.fire?'Podpalenie':'',p.status.ice?'Spowolnienie':''].filter(Boolean).join(' · ');
  $('biome-text').textContent=g.world.biome.name;$('timer-text').textContent=`MISJA ${g.mission+1} · RUNDA ${g.biome+1}/6 · ${g.mode.name} · ${U.time(g.time)}`;$('objective').textContent=g.boss?'Pokonaj strażnika':g.bosses>g.biome?'Przejdź do bramy ◎':'Przetrwaj · strażnik za '+U.time(Math.max(0,240-g.stageTime));const boss=g.boss||g.enemies.find(e=>e.mini&&!e.dead&&U.dist(e,p)<800);$('boss-hud').hidden=!boss;if(boss){$('boss-name').textContent=boss.name||boss.type.name;$('boss-fill').style.width=100*Math.max(0,boss.hp/boss.maxHp)+'%';}
  const e=g.world.nearestEvent(p);$('interaction').hidden=!e;if(e)$('interaction').textContent=C.label('interact')+' · '+({chest:'Otwórz skrzynię',portal:'Przejdź do następnej rundy',fountain:'Źródło odnowy',shrine:'Ołtarz ryzyka',arena:'Próba',npc:'Kartograf',elite:'Wyzwanie'}[e.type]||'Interakcja');g.renderer.minimap();
 };
 const action=P.action;P.action=function(id,value){const m=S.meta3;if(['forge23','archive23','challenges23','collection23'].includes(id)){this[id]();return;}if(id==='exit23'){if(this.g.player&&!this.g.endSaved&&this.g.mode)this.g.saveRun();if(window.chrome?.webview)window.chrome.webview.postMessage('exit');else this.panel('Gra zapisana','Możesz zamknąć tę kartę',`<p>Przeglądarka nie pozwala grze zamknąć karty otwartej przez użytkownika. Wróć na ten sam adres i wybierz „Kontynuuj”.</p>`);return;}
  if(id==='buy23'){if(S.purchase23(value))this.uiSound23?.();this[this.shopBack23||'collection23']();return;}
  if(id==='forgeSelect23'){this.forgeWeapon23=value;this.forge23();return;}
  if(id==='startWeapon23'){const [hero,w]=value.split(':');if(D.allowedStarts23[hero]?.includes(w)&&m.discovered['weapon:'+w]&&this.g.weaponAvailable23(w)){m.starts[hero]=w;S.write();}this.forge23();return;}
  if(id==='weaponSkin23'){if(!m.discovered['weapon:'+value])return;if(!m.cosmetics[value]){if(m.wallet.tokens<8)return;m.wallet.tokens-=8;m.cosmetics[value]=true;}m.equipped['weapon:'+value]=!m.equipped['weapon:'+value];S.write();this.forge23();return;}
  if(id==='cosmetic23'){if(!m.unlocks[value])return;m.equipped[value]=!m.equipped[value];S.write();this[value.startsWith('skin:')?'meta':'collection23']();return;}
  if(id==='fVariant23'){if(!m.unlocks['f:'+value])return;m.equipped['f:'+value]=m.equipped['f:'+value]==='azyl'?'base':'azyl';S.write();this.meta();return;}
  if(id==='map23'){if(m.unlocks.dusk)m.equipped.map=m.equipped.map==='dusk'?'default':'dusk';S.write();this.collection23();return;}
  if(id==='setting23'){const [key,v]=value.split(':');if(['hudLayout','hudSize','hudAlign','hudOpacity','lowHP','weaponStats'].includes(key)){S.data.settings[key]=key==='hudOpacity'?Number(v):key==='weaponStats'?v==='true':v;S.write();this.settings(this.settingsBack23);}return;}
  if(id==='unlockhero')return;return action.call(this,id,value);
 };
})(window.Aeren);

;

/* Module: js/render-23.js */
'use strict';
(function(A){const {Data:D,Save:S,U}=A,R=A.Renderer.prototype;
 A.drawWeapon23=function(c,w,x,y,a=0,scale=1){const d=D.weaponById[w.id];if(!d)return;c.save();c.translate(x,y);c.rotate(a);c.scale(scale,scale);const color=S.meta3?.equipped['weapon:'+w.id]?'#ecfaff':D.rarity[w.rarity??d.rarity].color;c.strokeStyle='#121923';c.lineWidth=7;c.beginPath();c.moveTo(-15,0);c.lineTo(18,0);c.stroke();c.strokeStyle=color;c.lineWidth=3;c.beginPath();c.moveTo(-15,0);c.lineTo(18,0);c.stroke();
  if(['bow','thornbow','crossbow'].includes(w.id)){c.beginPath();c.moveTo(7,-18);c.quadraticCurveTo(-17,0,7,18);c.stroke();c.lineWidth=1;c.beginPath();c.moveTo(7,-18);c.lineTo(11,0);c.lineTo(7,18);c.stroke();}
  else if(['hammer','runicHammer'].includes(w.id)){c.fillStyle=color;c.fillRect(8,-14,14,28);c.strokeStyle='#263549';c.lineWidth=2;c.strokeRect(8,-14,14,28);c.fillStyle='#fff0d5';c.fillRect(13,-6,4,12);}
  else if(w.id==='scythe'){c.strokeStyle=color;c.lineWidth=5;c.beginPath();c.moveTo(18,0);c.quadraticCurveTo(23,-27,-6,-29);c.stroke();}
  else if(['spear','daggers','iceblade','void'].includes(w.id)){U.poly(c,[[27,0],[12,-6],[15,0],[12,6]],color,'#273147');}
  else{U.circle(c,18,0,w.id==='orb'?11:8,color);U.circle(c,18,0,4,'#fff6d9');if(w.id==='stormrod'){c.strokeStyle='#fff4b5';c.beginPath();c.moveTo(11,-14);c.lineTo(19,-7);c.lineTo(13,-4);c.lineTo(25,6);c.stroke();}}
  if(w.flash23>0){c.globalAlpha=Math.min(1,w.flash23/.22);U.circle(c,30,0,5,'#fff6cd');c.strokeStyle=color;c.lineWidth=2;c.beginPath();c.moveTo(27,0);c.lineTo(44,0);c.stroke();}c.restore();
 };
 const player=R.player;R.player=function(c,p){player.call(this,c,p);const weapons=this.g.weapons||[];for(let i=0;i<weapons.length;i++){const w=weapons[i],orb=w.id==='orb',orbit=this.ambient*1.6+i*2.1,x=p.x+(orb?Math.cos(orbit)*40:[28,-29,5][i]),y=p.y-18+(orb?Math.sin(orbit)*20:[0,-7,-32][i]);A.drawWeapon23(c,w,x,y,w.flash23>0?(w.aim23||0):orb?orbit:-Math.PI/3+i*.8,.78);}if(S.meta3?.equipped['skin:'+p.hero.id]){c.strokeStyle='#e1f5ff';c.lineWidth=2;c.beginPath();c.ellipse(p.x,p.y,29,12,0,0,Math.PI*2);c.stroke();}};
 const ground=R.ground;R.ground=function(w){ground.call(this,w);const c=this.map.getContext('2d'),r=U.rng(w.seed+233),b=w.biome;c.save();
  // Flat inlaid landmarks and paths never pretend to be collision geometry.
  for(const p of [w.center,...w.paths]){const x=p.x,y=p.y;c.strokeStyle=b.accent+'55';c.lineWidth=2;c.beginPath();c.ellipse(x,y,82,58,0,0,Math.PI*2);c.stroke();c.font='30px Georgia';c.textAlign='center';c.fillStyle=b.accent+'88';c.fillText(b.bossIcon,x,y+10);for(let i=0;i<8;i++){const a=i*Math.PI/4;c.beginPath();c.moveTo(x+Math.cos(a)*67,y+Math.sin(a)*45);c.lineTo(x+Math.cos(a)*77,y+Math.sin(a)*54);c.stroke();}}
  for(let i=0;i<500;i++){const x=r()*w.width,y=r()*w.height;c.strokeStyle=b.accent+'25';c.lineWidth=1;c.beginPath();if(b.theme==='ice'){c.moveTo(x-9,y);c.lineTo(x+9,y);c.moveTo(x,y-9);c.lineTo(x,y+9);}else if(b.theme==='forest'){c.moveTo(x-3,y+5);c.quadraticCurveTo(x-8,y-8,x,y);c.quadraticCurveTo(x+8,y-9,x+3,y+5);}else if(b.theme==='dead'){c.moveTo(x-4,y);c.lineTo(x+5,y+4);c.moveTo(x-3,y+4);c.lineTo(x+4,y);}else{c.moveTo(x-8,y);c.lineTo(x,y-4);c.lineTo(x+9,y+3);}c.stroke();}c.restore();};
 const projectile=R.drawProjectile;R.drawProjectile=function(c,b){if(['spear','thornbow','runicHammer','scythe','stormrod'].includes(b.weapon23)){A.drawWeapon23(c,{id:b.weapon23,rarity:D.weaponById[b.weapon23].rarity},b.x,b.y,Math.atan2(b.vy,b.vx)+(b.weapon23==='runicHammer'?b.age*9:0),b.weapon23==='scythe'?.6:.45);}else projectile.call(this,c,b);if(b.weapon23&&S.meta3.equipped.trail){c.strokeStyle='#dcf5ffaa';c.lineWidth=1;c.beginPath();c.moveTo(b.x,b.y);c.lineTo(b.x-b.vx*.035,b.y-b.vy*.035);c.stroke();}};
 const render=R.render;R.render=function(dt){render.call(this,dt);if(this.g.player?.mapVariant==='dusk'){const g=this.g,c=g.ctx;c.save();c.setTransform(1,0,0,1,0,0);c.fillStyle='#35284b18';c.fillRect(0,0,g.canvas.width,g.canvas.height);c.restore();}};
 A.UI.prototype.drawForge23=function(){const cv=document.getElementById('forge-preview23');if(!cv)return;const c=cv.getContext('2d'),id=this.forgeWeapon23||this.g.player?.hero.startWeapon||'bow',known=S.meta3.discovered['weapon:'+id];c.clearRect(0,0,320,210);c.fillStyle='#141f2a';c.fillRect(0,0,320,210);U.ellipse(c,160,167,90,18,'#0b111c');if(!known){c.fillStyle='#a9bbc9';c.font='70px Georgia';c.fillText('?',145,140);return;}const h=D.heroes.find(h=>D.allowedStarts23[h.id].includes(id))||D.heroes[0],t=performance.now()/1000;player.call(this.g.renderer,c,{...this.g.player,hero:h,x:150,y:160,hp:100,gait:t*3,walkBlend:.25,attackAnim:0,castAnim:0,invuln:0});A.drawWeapon23(c,{id,rarity:D.weaponById[id].rarity,flash23:t%1<.22?.22-t%1:0},200,125,Math.sin(t)*.5,1.5);c.fillStyle='#d5e7ea';c.font='12px sans-serif';c.textAlign='center';c.fillText('Podgląd · '+h.name+' · '+D.weaponById[id].name,160,25);};
})(window.Aeren);

;

/* Module: js/art-direction-23.js */
'use strict';
(function(A){const {Data:D,Save:S,U}=A,UI=A.UI.prototype,R=A.Renderer.prototype,TAU=Math.PI*2;
 const palettes=[
  {id:'dungeon',name:'Żelazna pieczęć',accent:'#f3c379',deep:'#93613b',light:'#fff0c8',ground:'#333748',low:'#212433',high:'#5b5c68',motif:'rune'},
  {id:'ice',name:'Lodowa korona',accent:'#37ccff',deep:'#167abf',light:'#e2fbff',ground:'#69add1',low:'#3984b9',high:'#a1d9ed',motif:'crystal'},
  {id:'forest',name:'Prastary gaj',accent:'#88e87f',deep:'#358763',light:'#eaffbd',ground:'#3e7154',low:'#234b42',high:'#6f995d',motif:'leaf'},
  {id:'fire',name:'Korona żaru',accent:'#ffad40',deep:'#b74122',light:'#fff1ab',ground:'#624236',low:'#342b32',high:'#9c6650',motif:'flame'},
  {id:'dead',name:'Kościana pieczęć',accent:'#bfa1ff',deep:'#6b499e',light:'#ece2ff',ground:'#514b6c',low:'#302a45',high:'#8c7b9c',motif:'bone'},
  {id:'hell',name:'Korona otchłani',accent:'#ff536b',deep:'#941c48',light:'#ffd0ae',ground:'#552c3e',low:'#291c33',high:'#874454',motif:'horn'}
 ];
 A.Art23={palettes};
 for(let i=0;i<6;i++){Object.assign(D.biomes[i],{ground:palettes[i].ground,dark:palettes[i].low,light:palettes[i].high,accent:palettes[i].accent});}
 Object.assign(A.colors,{ice:'#74e4ff',fire:'#ffae35',nature:'#64f28b',poison:'#93ef41',lightning:'#69c9ff',arcane:'#d66dff',blood:'#ff5b86',stone:'#ffd574',wind:'#c6f6ff'});
 let svgId=0;
 const svg=(body,view='0 0 100 100')=>{const suffix='-art'+(++svgId);body=body.replace(/id="([^"]+)"/g,(_,id)=>`id="${id+suffix}"`).replace(/url\(#([^)]+)\)/g,(_,id)=>`url(#${id+suffix})`);return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${view}" aria-hidden="true">${body}</svg>`;};
 const gem=(x,y,size,col,light)=>`<g transform="translate(${x} ${y}) scale(${size})"><path d="M0 -18 8 -3 5 15 -5 15 -8 -3Z" fill="${col}" stroke="#091626" stroke-width="2"/><path d="M0 -18 0 13 -5 15 -8 -3Z" fill="${light}"/><path d="M0 -18 8 -3 0 1Z" fill="white"/><path d="M0 1 8 -3 5 15 0 13Z" fill="${col}"/></g>`;
 function ornament(t,x,y,flip){let body='';if(t.motif==='leaf')body=`<path d="M0 40Q-30 4 1 -35M-5 18Q-40 18 -24 -4Q-7 -8 -5 18M-8 2Q22 -19 22 3Q18 18 -8 2M-3 -16Q-20 -39 -9 -40Q7 -36 -3 -16" fill="${t.deep}" stroke="${t.light}" stroke-width="2"/>`;else if(t.motif==='bone')body=`<path d="M-10 34 6 -30M-14 -28 11 31" stroke="#b5b4bd" stroke-width="7"/><path d="M-14 -5Q-20 -23 0 -28Q22 -23 15 -6L9 6H-9Z" fill="#c9d2d8" stroke="#202237" stroke-width="2"/><path d="M-11 -14H-3V-7H-11ZM4 -14H12V-7H4Z" fill="#392c57"/>`;else if(t.motif==='horn')body=`<path d="M0 39Q-25 13 -34 -35Q-5 -2 5 -21Q18 -40 5 -49Q39 -25 10 9L18 32Z" fill="#3c273b" stroke="#b99092" stroke-width="3"/>${gem(0,3,.8,t.accent,t.light)}`;else if(t.motif==='flame')body=`<path d="M0 38Q-36 14 -16 -19Q-18 6 -5 9Q-9 -25 8 -43Q31 -8 15 18Q32 8 28 -9Q43 28 0 38Z" fill="${t.deep}" stroke="${t.accent}" stroke-width="2"/>${gem(0,10,.7,t.accent,t.light)}`;else body=gem(-12,4,.85,t.accent,t.light)+gem(0,-11,1.2,t.accent,t.light)+gem(13,11,.65,t.accent,t.light);return `<g transform="translate(${x} ${y}) scale(${flip} 1)">${body}</g>`;}
 function frame(t){let stones='';for(const [x,y,s]of [[24,28,1],[47,13,.8],[22,166,.8],[958,20,.9],[978,157,1],[944,181,.7],[500,9,.8]])stones+=gem(x,y,s,t.accent,t.light);return svg(`<defs><linearGradient id="metal" x2="0" y2="1"><stop stop-color="#f1deaf"/><stop offset=".18" stop-color="#776957"/><stop offset=".43" stop-color="#222633"/><stop offset=".62" stop-color="#c5b08a"/><stop offset="1" stop-color="#384255"/></linearGradient><linearGradient id="panel" x2="0" y2="1"><stop stop-color="#11283e"/><stop offset=".55" stop-color="#050e1b"/><stop offset="1" stop-color="#102338"/></linearGradient></defs><path d="M57 14 420 14 455 7 488 14 500 0 512 14 545 7 580 14 943 14 986 50 978 155 944 188 582 188 550 195 515 187 500 199 485 187 450 195 418 188 56 188 13 151 17 52Z" fill="#090d18" stroke="#030a14" stroke-width="11"/><path d="M57 14H943L986 50 978 155 944 188H56L13 151 17 52Z" fill="url(#panel)" stroke="url(#metal)" stroke-width="7"/><path d="M62 26H937L971 55 966 151 938 175H62L27 146 30 57Z" fill="none" stroke="${t.deep}" stroke-width="3"/><path d="M65 29H932M67 173H934" stroke="${t.light}" opacity=".45"/><path d="M50 18 26 2 34 40 7 32 24 65M948 18 974 2 966 40 993 32 976 65M47 171 22 196 32 160 7 168 23 134M953 171 978 196 968 160 993 168 977 134" fill="#253043" stroke="url(#metal)" stroke-width="3"/>${stones}<path d="M487 22 500 8 513 22 500 36Z" fill="${t.accent}" stroke="${t.light}"/><path d="M93 18 105 12 117 18M883 18 895 12 907 18M93 184 105 191 117 184M883 184 895 191 907 184" fill="none" stroke="#cfbc98" stroke-width="2"/>`,'0 0 1000 200');}
 const frames=palettes.map(t=>'url("data:image/svg+xml,'+encodeURIComponent(frame(t).replace('<svg ','<svg preserveAspectRatio="none" '))+'")');
 for(let i=0;i<frames.length;i++){let source=frame(palettes[i]);source=source.replace('</svg>',ornament(palettes[i],30,66,1)+ornament(palettes[i],970,66,-1)+ornament(palettes[i],31,147,1)+ornament(palettes[i],969,147,-1)+'</svg>').replace('<svg ','<svg preserveAspectRatio="none" ');frames[i]='url("data:image/svg+xml,'+encodeURIComponent(source)+'")';}
 function icon(kind,color){const glow=`<defs><radialGradient id="a"><stop stop-color="${color}" stop-opacity=".5"/><stop offset="1" stop-color="#071020" stop-opacity="0"/></radialGradient><filter id="g"><feGaussianBlur stdDeviation="2"/></filter></defs><circle cx="50" cy="50" r="45" fill="url(#a)"/>`;let paths='';
  if(kind==='ice'){for(let i=0;i<6;i++)paths+=`<path transform="rotate(${i*60} 50 50)" d="M50 12V50M50 26 40 18M50 26 60 18M50 38 35 29M50 38 65 29"/>`;}
  else if(kind==='fire')paths='<path d="M48 9C58 30 31 36 47 52 51 36 66 36 62 24 94 56 75 84 49 85 15 85 10 58 28 36 28 57 42 56 39 41 36 28 48 21 48 9Z"/><path d="M47 59Q65 70 52 82Q33 78 47 59Z" fill="#fff6b0"/>';
  else if(kind==='nature'||kind==='poison')paths='<path d="M49 86V28M49 65Q12 65 19 27Q47 29 49 52M50 53Q82 50 83 18Q52 25 50 42M49 76Q70 76 78 59M49 30 41 16 53 8 61 19Z"/><path d="M22 32 47 61M80 22 53 45"/>';
  else if(kind==='lightning')paths='<path d="M60 5 23 57H47L35 93 80 40H54Z" fill="currentColor"/><path d="M14 30 28 35M76 18 66 29M81 70 69 65"/>';
  else if(kind==='stone')paths='<path d="M25 18 78 29 74 51 21 39Z" fill="currentColor"/><path d="M47 44 32 88 46 92 61 48M16 67 8 73M77 66 90 72M21 82 13 92"/>';
  else if(kind==='blood')paths='<path d="M48 10C39 33 19 44 22 64Q26 90 53 85Q89 77 71 47L48 10Z"/><path d="M40 45Q27 61 41 75"/>';
  else if(kind==='cone')paths='<path d="M17 73 73 16 88 75Z"/><path d="M27 68Q62 66 60 41M41 67Q75 57 68 34M56 67Q83 52 74 30"/><path d="M15 81 22 75M7 71 16 67"/>';
  else if(kind==='dash')paths='<path d="M59 10 69 19 61 31 49 24ZM49 28 67 43 57 57 76 80 66 88 45 64 28 87 16 81 36 48 44 33M42 36 28 48 12 46M64 39 79 44 89 35"/>';
  else if(kind==='potion')paths='<path d="M42 13H61V23H57V39L76 60Q86 89 50 89Q14 89 24 60L45 39V23H42Z"/><path d="M27 62Q49 52 75 62L75 76Q52 95 28 76Z" fill="#f54262"/><path d="M40 52 32 64M45 18H59" stroke="white"/>';
  else if(kind==='attack')paths='<path d="M16 78 80 14 85 28 35 78 27 87ZM28 63 43 78M14 84 20 90M75 14 84 5 91 13 84 22"/><path d="M25 29Q67 18 75 63M27 29 75 63"/>';
  else if(kind==='interact')paths='<path d="M25 63V34Q28 23 34 34V53 20Q42 10 46 22V48 17Q54 10 59 21V50 30Q67 22 70 34V61L79 46Q93 45 84 62L67 86H37L18 68Q14 53 25 63Z"/>';
  else if(kind==='empty')paths='<path d="M50 28V72M28 50H72" opacity=".35"/>';
  else paths='<ellipse cx="50" cy="50" rx="39" ry="16"/><ellipse cx="50" cy="50" rx="39" ry="16" transform="rotate(60 50 50)"/><ellipse cx="50" cy="50" rx="39" ry="16" transform="rotate(120 50 50)"/><circle cx="50" cy="50" r="8" fill="white"/>';
  return svg(glow+`<g fill="none" stroke="${color}" color="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><g opacity=".65" filter="url(#g)">${paths}</g>${paths}</g>`);
 }
 A.Art23.icon=icon;
 document.addEventListener('pointermove',e=>{const el=e.target.closest?.('#hud [title],.card[title]');let tip=document.getElementById('artTooltip24');if(!tip){tip=document.createElement('div');tip.id='artTooltip24';document.body.append(tip);}if(!el||!el.title){tip.hidden=true;return;}tip.textContent=el.title;tip.hidden=false;tip.style.left=Math.max(10,Math.min(innerWidth-320,e.clientX-150))+'px';tip.style.top=Math.max(10,e.clientY-140)+'px';});
 function portrait(h){const col={ilya:'#448754',sol:'#57356e',niva:'#8eddff',orren:'#a9a999',vesper:'#75609c'}[h.id];return svg(`<defs><radialGradient id="p"><stop stop-color="${h.color}"/><stop offset="1" stop-color="#080f23"/></radialGradient></defs><circle cx="50" cy="50" r="48" fill="url(#p)"/><path d="M12 99 20 70 37 60 63 60 80 71 90 99Z" fill="${col}" stroke="#d7bd89" stroke-width="2"/><path d="M36 42Q49 24 65 42L64 61Q50 80 37 62Z" fill="#edbc8e"/><path d="M38 51 44 52M56 52 62 51" stroke="#132335" stroke-width="3"/>${h.id==='sol'?'<path d="M17 41 49 5 72 43Z" fill="#55345e" stroke="#e9b571" stroke-width="2"/><path d="M10 45Q46 34 86 47L79 53 19 52Z" fill="#93617a" stroke="#d6b17b"/>':h.id==='orren'?'<path d="M30 46 29 21 53 11 72 27 70 56 58 65 58 38 41 37 42 67 30 56Z" fill="#9baebb" stroke="#f7d395" stroke-width="2"/>':'<path d="M23 59 27 27 50 10 76 31 74 70 64 51 60 32 41 36 34 56 31 76Z" fill="'+col+'" stroke="#d2dfa8" stroke-width="2"/>'}<path d="M49 59 54 60M44 65Q49 68 55 65" fill="none" stroke="#945d4c"/><path d="M21 87 35 79M67 79 83 86" stroke="#d2b979" stroke-width="3"/>`);}
 A.Art23.portrait=portrait;
 function ruby(){return svg('<defs><linearGradient id="r" x2=".7" y2="1"><stop stop-color="#ff446d"/><stop offset=".35" stop-color="#ca0039"/><stop offset="1" stop-color="#490720"/></linearGradient></defs><path d="M50 3 94 38 91 71 50 98 8 72 7 39Z" fill="#230920" stroke="#e5c49f" stroke-width="3"/><path d="M50 8 87 41 86 69 50 91 15 69 14 41Z" fill="url(#r)" stroke="#ff7e92" stroke-width="2"/><path d="M50 8 49 45 14 41ZM49 45 86 69 50 91ZM49 45 87 41 50 8Z" fill="#ff8ea6" opacity=".35"/><path d="M50 8 56 37 73 45 60 20Z" fill="#fff4fa" opacity=".9"/><path d="M49 45 15 69 50 91Z" fill="#71062f" opacity=".6"/>');}
 UI.buildHUD=function(){const h=this.g.player.hero;this.hud.className='fantasy23';this.hud.innerHTML=`<div id="danger23"></div><div class="treasury23 ornate23"><span id="gold-text"></span><span id="shards24" title="Odłamki konta"></span><span id="crystals24" title="Kryształy Otchłani"></span></div><header class="top23 ornate23"><strong id="biome-text"></strong><span id="timer-text"></span><div class="missionline24"><i></i></div><span id="objective"></span><div id="boss-hud" hidden><span id="boss-name"></span><div class="bar"><i id="boss-fill"></i></div></div></header><div class="compass24"><canvas class="map23" id="minimap" width="146" height="123" aria-label="Odkryte obszary, przeszkody i obiekty"></canvas><span class="compassNorth24">N</span><span class="compassGem24"></span></div><section id="dock23" class="dock23"><div class="hero24 ornate23"><div class="ruby24"><div class="rubyArt24">${ruby().replace('<svg ','<svg preserveAspectRatio="none" ')}</div><b id="gemHP24"></b><small>ŻYCIE</small></div><div class="heroInfo24"><div class="identity24"><div id="portrait23">${portrait(h)}</div><div><strong>${h.name}</strong><span id="level-text"></span></div></div><div class="health23"><i id="hp-trail23"></i><i id="hp-fill"></i><b id="hp-text"></b></div><div class="xp23"><i id="xp-fill"></i><b id="xp-text"></b></div><small id="stats23"></small><div id="heroStats24"></div></div></div><div class="combat24 ornate23"><div class="abilities23" id="abilities"></div><div class="inventory23"><span id="gear23"></span><span id="save23"></span></div><div id="weaponstats23"></div></div><div class="utility24 ornate23"><div id="utilitySlots24"></div><div class="interactKey24"><span class="utilIcon24">${icon('interact','#f0dfae')}</span><kbd>${A.Controls.label('interact')}</kbd><span>Podnieś</span></div></div><div id="buffs"></div></section><div class="interaction" id="interaction" hidden></div>`;this.hud.hidden=false;this.lastHUD=0;this.prevHP23=this.g.player.hp;this.cdMax23={};this.artTheme23=-1;this.applyArtTheme23();};
 UI.applyArtTheme23=function(){const index=this.g.biome||0,t=palettes[index];this.hud.style.setProperty('--theme',t.accent);this.hud.style.setProperty('--theme-deep',t.deep);this.hud.style.setProperty('--theme-light',t.light);this.hud.style.setProperty('--ornate',frames[index]);this.hud.dataset.theme=t.id;this.artTheme23=index;document.documentElement.style.setProperty('--theme',t.accent);document.documentElement.style.setProperty('--theme-deep',t.deep);document.documentElement.style.setProperty('--theme-light',t.light);document.documentElement.style.setProperty('--ornate',frames[index]);};
 const update=UI.update;UI.update=function(dt){update.call(this,dt);if(this.hud.hidden||!document.getElementById('utilitySlots24')||document.getElementById('abilities').firstElementChild?.dataset.painted24)return;const g=this.g,p=g.player,s=g.stats,$=id=>document.getElementById(id);if(this.artTheme23!==g.biome)this.applyArtTheme23();$('shards24').textContent='✦ '+S.data.currency;$('crystals24').textContent='◆ '+S.meta3.wallet.crystals;$('gold-text').textContent='● '+g.gold.toLocaleString('pl');$('gemHP24').textContent=Math.ceil(Math.max(0,p.hp))+' / '+s.maxHp;if(S.data.settings.hudLayout==='auto')$('dock23').dataset.layout='classic';this.hud.style.setProperty('--health',U.clamp(p.hp/s.maxHp,0,1));$('heroStats24').innerHTML=`<span>⚔ ATK <b>${Math.round(s.damage)}</b></span><span>✦ KRYT <b>${Math.round(s.crit*100)}%</b></span><span>⬡ PANCERZ <b>${Math.round(s.armor)}</b></span><span>➶ UNIK <b>${Math.round(s.dodge*100)}%</b></span><span>» ATAK/S <b>${(1/A.weaponStats23(g.weapons[0],g).interval).toFixed(1)}</b></span>`;$('stats23').hidden=true;this.hud.querySelector('.missionline24 i').style.width=Math.min(100,g.stageTime/240*100)+'%';
  const slots=[...$('abilities').children];if(slots.some(x=>x.dataset.painted24))return;const active=[0,1,2].map(i=>D.byId[p.active[i]]);
  const infer=a=>{if(!a)return'empty';const str=(a.id+' '+a.name+' '+a.effect).toLowerCase();if(/ice|blizzard|frost|l[oó]d/.test(str))return'ice';if(/fire|meteor|flame|żar/.test(str))return'fire';if(/lightning|thunder/.test(str))return'lightning';if(/roots|wolves|nature|familiar/.test(str))return'nature';if(/poison|venom/.test(str))return'poison';if(/drain|blood/.test(str))return'blood';if(/guard|stone/.test(str))return'stone';return'arcane';};
  const kinds=[...active.map(infer),{ilya:'attack',sol:'cone',niva:'dash',orren:'stone',vesper:'blood'}[p.hero.id],'arcane','dash','potion'];
  slots.forEach((el,i)=>{const kind=kinds[i]||'empty',color=A.colors[kind]||({attack:'#80eea8',cone:'#ffad39',dash:'#b7eaff',potion:'#ff657f'}[kind]||'#8597ad');el.dataset.painted24='yes';el.dataset.kind24=kind;el.style.setProperty('--spell',color);el.querySelector('span').innerHTML=icon(kind,color);if(i<5){const count=i===4?p.ultLevel:i===3?1:g.has(p.active[i]),max=i===4?3:i===3?1:active[i]?.max||5;el.insertAdjacentHTML('beforeend',`<div class="ranks24">${Array.from({length:Math.min(5,max)},(_,n)=>`<i class="${n<count?'earned24':''}"></i>`).join('')}</div>`);}else{el.classList.add('utilitySkill24');el.insertAdjacentHTML('beforeend',`<label>${i===5?'Unik':'Mikstura HP'}</label>`);}});
  if(slots.length===7){$('utilitySlots24').replaceChildren(slots[5],slots[6]);const weapon=D.weaponById[g.weapons[0].id],basic=document.createElement('div');basic.className='skill23 attackSlot24 ready23';basic.dataset.painted24='yes';basic.style.setProperty('--spell',A.colors[weapon.element]);basic.title=weapon.name+' · '+(S.data.settings.auto?'Automatyczny atak':'Atak ręczny')+' · '+(S.data.settings.autoAim!==false?'Autocelowanie':'Celowanie kursorem');basic.innerHTML=`<b>${S.data.settings.auto?'AUTO':A.Controls.label('attack')}</b><span>${icon(['bow','thornbow','crossbow','spear','daggers'].includes(weapon.id)?'attack':infer({id:weapon.element}),A.colors[weapon.element])}</span><small>${g.weapons[0].level}/5</small><div class="ranks24">${Array.from({length:5},(_,n)=>`<i class="${n<g.weapons[0].level?'earned24':''}"></i>`).join('')}</div>`;$('abilities').replaceChildren(basic,slots[3],slots[0],slots[1],slots[2],slots[4]);}
 };
 const card=UI.skillCard;UI.skillCard=function(a){let text=card.call(this,a);const color=A.colors[a.effect]||({active:'#d66dff',passive:'#ffe598',auto:'#65caff',synergy:'#82fba8',ultimate:'#ee77ff'}[a.type]||'#b8ebff');return text.replace(`<span class="symbol">${a.icon}</span>`,`<span class="symbol spellArt24">${icon(a.effect in A.colors?a.effect:a.type==='passive'?'stone':'arcane',color)}</span>`);};
 const gear=UI.gear;UI.gear=function(choices){gear.call(this,choices);this.overlay.querySelectorAll('[data-action="gear"]').forEach((el,i)=>{const x=choices[i],d=D.weaponById[x.id];el.querySelector('.symbol').innerHTML=icon(x.kind==='weapon'?(d.element==='nature'?'attack':d.element):x.id==='heart'?'blood':x.id==='shell'?'stone':'arcane',D.rarity[x.rarity].color);el.querySelector('.symbol').classList.add('spellArt24');});};
 // Cached terrain artwork: the detail is generated once, not for every frame.
 const ground=R.ground;R.ground=function(w){ground.call(this,w);const c=this.map.getContext('2d'),t=palettes[w.index],r=U.rng(w.seed+17239);c.save();
  const step=95,cols=Math.ceil(w.width/step)+1,rows=Math.ceil(w.height/step)+1,pts=[];for(let y=0;y<=rows;y++)for(let x=0;x<=cols;x++)pts.push({x:x*step+(r()-.5)*step*.65,y:y*step+(r()-.5)*step*.65});
  c.globalAlpha=t.id==='ice'?.075:.045;for(let y=0;y<rows;y++)for(let x=0;x<cols;x++){const k=y*(cols+1)+x,a=pts[k],b=pts[k+1],d=pts[k+cols+1],e=pts[k+cols+2];for(const tri of [[a,b,d],[b,e,d]])U.poly(c,tri.map(v=>[v.x,v.y]),r()>.5?t.light:t.deep);}
  c.globalAlpha=1;for(let i=0;i<1300;i++){const x=r()*w.width,y=r()*w.height;c.strokeStyle=t.light+(t.id==='ice'?'38':'1a');c.lineWidth=.7;c.beginPath();c.moveTo(x,y);c.lineTo(x+12+r()*25,y+4);c.lineTo(x+22+r()*20,y-7);c.stroke();}
  const x=w.center.x,y=w.center.y;for(const radius of [132,190,244]){c.strokeStyle=t.light+'6a';c.lineWidth=radius===244?4:1.5;c.beginPath();c.ellipse(x,y,radius,radius*.72,0,0,TAU);c.stroke();}for(let i=0;i<28;i++){const a=i*TAU/28,px=x+Math.cos(a)*222,py=y+Math.sin(a)*160;c.save();c.translate(px,py);c.rotate(a+Math.PI/2);c.fillStyle=t.light+'9a';c.font='12px Georgia';c.textAlign='center';c.fillText(['◇','ᛟ','ᚦ','⋈'][i%4],0,0);c.restore();}c.restore();};
 function crystal(c,x,y,h,w,col,light){U.poly(c,[[x-w,y],[x-w*.9,y-h*.65],[x,y-h],[x+w*.75,y-h*.6],[x+w*.65,y+2]],col,'#10324d');U.poly(c,[[x,y-h],[x-w*.9,y-h*.65],[x-w,y],[x-2,y-5]],light);U.poly(c,[[x,y-h],[x+w*.75,y-h*.6],[x-2,y-5]],'#ffffffb0');U.poly(c,[[x-2,y-5],[x+w*.75,y-h*.6],[x+w*.65,y+2]],col);c.strokeStyle=light;c.lineWidth=1;c.beginPath();c.moveTo(x,y-h);c.lineTo(x-2,y-5);c.stroke();}
 const decor=R.decor;R.decor=function(c,d){if(!d.solid)return;const t=palettes[this.g.biome],p=this.g.player;if(t.id!=='ice'){decor.call(this,c,d);c.save();c.translate(d.x,d.y);if(p.y<d.y+12&&Math.abs(p.x-d.x)<60&&p.y>d.y-120)c.globalAlpha=.3;c.strokeStyle=t.light+'70';c.lineWidth=1;for(let i=0;i<3;i++){c.beginPath();c.moveTo(-13+i*9,-18);c.lineTo(-11+i*9,-35-i*7);c.stroke();}if(t.id==='forest'){for(let i=0;i<8;i++){const a=i*2.4;U.ellipse(c,Math.cos(a)*23,-60+Math.sin(a)*25,10,5,i%2?'#a4d97188':'#c4eca354');}}else if(['hell','fire'].includes(t.id)){c.shadowColor=t.accent;c.shadowBlur=S.data.settings.lowFX?0:10;c.strokeStyle=t.accent;c.beginPath();c.moveTo(-6,-63);c.lineTo(4,-43);c.lineTo(-2,-29);c.lineTo(9,-13);c.stroke();}c.restore();return;}
  c.save();c.translate(d.x,d.y);const scale=d.size||1;c.scale(scale,scale);if(Math.abs(p.x-d.x)<60&&p.y<d.y+12&&p.y>d.y-130)c.globalAlpha=.35;U.ellipse(c,12,9,39,12,'#11355788');U.poly(c,[[-24,-10],[15,-15],[30,2],[17,15],[-25,12]],'#235579','#c4ecf3');crystal(c,-15,0,62,10,'#1392d6','#a4ebff');crystal(c,0,1,102,13,'#087bbe','#defaff');crystal(c,20,3,78,11,'#188acf','#9bdfff');for(let i=0;i<3;i++)crystal(c,-26+i*27,12,10+i*3,5,'#398ac5','#c4f7ff');c.restore();};
 const monument=R.monument;R.monument=function(c){const w=this.g.world,t=palettes[this.g.biome],x=w.center.x,y=w.center.y-90;if(t.id!=='ice'){monument.call(this,c);return;}U.ellipse(c,x+10,y+12,59,20,'#16324b77');U.poly(c,[[x-40,y],[x,y-22],[x+40,y],[x,y+22]],'#ecffff','#4a97b9');U.poly(c,[[x-16,y-4],[x-16,y-86],[x+15,y-85],[x+16,y+5],[x,y+12]],'#45aceb');crystal(c,x,y-82,61,17,'#188fff','#ddfdff');c.strokeStyle='#dcfbff99';c.lineWidth=2;c.beginPath();c.ellipse(x,y-30,33,11,0,0,TAU);c.stroke();};
 const player=R.player;R.player=function(c,p){c.save();player.call(this,c,p);c.filter='none';c.strokeStyle=p.hero.color;c.lineWidth=1.3;c.beginPath();c.ellipse(p.x,p.y+5,23,9,0,0,TAU);c.stroke();c.restore();};
 const enemy=R.enemy;R.enemy=function(c,e){c.save();enemy.call(this,c,e);c.restore();};
 const shot=R.drawProjectile;R.drawProjectile=function(c,b){if(!b.enemy&&!S.data.settings.lowFX){c.save();c.shadowColor=A.colors[b.element]||'#bb88ff';c.shadowBlur=0;shot.call(this,c,b);c.restore();}else shot.call(this,c,b);};
 const detailedPlayer=R.player;R.player=function(c,p){detailedPlayer.call(this,c,p);c.save();c.translate(p.x,p.y);const id=p.hero.id,bob=-Math.abs(Math.sin(p.gait||0))*2*(p.walkBlend||0);c.translate(0,bob);if(p.hp<=0){c.restore();return;}c.strokeStyle=id==='niva'?'#f0ffff':id==='vesper'?'#d7b4ef':'#f5d18c';c.lineWidth=.9;c.beginPath();c.moveTo(-9,-23);c.lineTo(-13,-1);c.lineTo(1,3);c.lineTo(10,-2);c.stroke();c.beginPath();c.moveTo(-8,-14);c.lineTo(9,-14);c.stroke();U.poly(c,[[-3,-16],[2,-19],[6,-15],[2,-11]],'#d4a449','#fff2c3');if(id==='orren'){for(let i=0;i<3;i++){c.strokeStyle=i%2?'#dee2dc':'#263546';c.beginPath();c.moveTo(-12,-26+i*4);c.lineTo(12,-26+i*4);c.stroke();}}else{c.strokeStyle='#ffffff30';c.beginPath();c.moveTo(-3,-11);c.lineTo(-5,0);c.moveTo(5,-10);c.lineTo(8,-1);c.stroke();}if(p.attackAnim>0||p.castAnim>0){c.globalAlpha=.35;c.strokeStyle=p.hero.color;c.beginPath();c.arc(0,-20,29,this.ambient*4,this.ambient*4+2);c.stroke();}c.restore();};
 const detailedEnemy=R.enemy;R.enemy=function(c,e){detailedEnemy.call(this,c,e);if(e.dead||e.isBoss)return;const type=e.type.shape,s=e.r/16;c.save();c.translate(e.x,e.y);c.scale(s,s);c.lineWidth=.8;c.strokeStyle='#fff2d04a';if(['mage','knight','skeleton','demon','golem'].includes(type)){c.beginPath();c.moveTo(-10,-16);c.lineTo(8,-19);c.moveTo(-8,-9);c.lineTo(7,-11);c.stroke();U.poly(c,[[-2,-24],[1,-27],[4,-24],[1,-21]],e.mini?'#ffcb76':'#c8c2e7','#252331');}else if(['slime','beetle','spider','eye'].includes(type)){c.beginPath();c.ellipse(-4,-15,8,3,-.3,3.2,5.8);c.stroke();}c.restore();};
 const detailedDecor=R.decor;R.decor=function(c,d){if(!d.solid||this.g.biome!==0)return detailedDecor.call(this,c,d);const p=this.g.player;c.save();c.translate(d.x,d.y);if(Math.abs(p.x-d.x)<48&&p.y<d.y+10&&p.y>d.y-110)c.globalAlpha=.35;U.ellipse(c,13,10,32,13,'#070c1999');c.fillStyle='#262635';c.fillRect(-20,-14,40,28);c.strokeStyle='#a99b7c';c.strokeRect(-20,-14,40,28);U.poly(c,[[-21,0],[-21,-83],[-10,-94],[17,-90],[22,-82],[22,1]],'#47505e','#161c2a');U.poly(c,[[-21,-83],[-10,-94],[-7,-9],[-19,0]],'#76848b');U.poly(c,[[10,-88],[22,-82],[22,1],[12,4]],'#222c3c');for(let i=0;i<5;i++){c.strokeStyle='#b1b6ae35';c.beginPath();c.moveTo(-17,-73+i*16);c.lineTo(18,-75+i*16);c.stroke();}for(const y of [-87,-7]){U.poly(c,[[-25,y],[-19,y-6],[23,y-5],[26,y+3],[20,y+8],[-26,y+8]],'#6a6d70','#2b2935');c.strokeStyle='#d0b885';c.beginPath();c.moveTo(-23,y+1);c.lineTo(23,y+1);c.stroke();}if(d.flip>.5){c.fillStyle='#49312b';c.fillRect(-6,-57,12,17);c.strokeStyle='#d3b078';c.strokeRect(-6,-57,12,17);U.poly(c,[[-5,-57],[-8,-68],[-2,-85],[2,-73],[7,-66],[3,-56]],'#ff9b38','#ffc273');U.poly(c,[[-2,-57],[-3,-67],[1,-74],[3,-64]],'#ffedac');}else{c.strokeStyle='#b3bbd05c';c.beginPath();c.moveTo(-5,-63);c.lineTo(4,-50);c.lineTo(-5,-36);c.lineTo(-5,-63);c.stroke();}c.restore();};
 R.minimap=function(){const cv=document.getElementById('minimap');if(!cv)return;const c=cv.getContext('2d'),g=this.g,w=g.world,p=g.player,t=palettes[g.biome],size=cv.width,sy=cv.height/size,k=size/1700,px=x=>(x-p.x)*k+size/2,py=y=>((y-p.y)*k+size/2)*sy;c.fillStyle='#081728';c.fillRect(0,0,size,cv.height);for(let j=0;j<w.rows;j++)for(let i=0;i<w.cols;i++)if(w.fog[j*w.cols+i]){const x=px(i*100),y=py(j*100);if(x>-15&&x<size&&y>-15&&y<cv.height){c.fillStyle=t.deep+'75';c.fillRect(x,y,100*k+1,100*k*sy+1);}}c.strokeStyle=t.accent+'24';c.lineWidth=.6;for(const r of [size*.2,size*.4]){c.beginPath();c.ellipse(size/2,cv.height/2,r,r*sy,0,0,TAU);c.stroke();}c.beginPath();c.moveTo(0,cv.height/2);c.lineTo(size,cv.height/2);c.moveTo(size/2,0);c.lineTo(size/2,cv.height);c.stroke();c.fillStyle='#e4f4ffcc';for(const a of w.walls)if(w.isKnown(a.x,a.y))c.fillRect(px(a.x),py(a.y),Math.max(1,a.w*k),Math.max(1,a.h*k*sy));for(const e of w.events)if(!e.used&&w.isKnown(e.x,e.y)&&(e.type!=='chest'||e.discovered)){const color=e.type==='chest'?'#ffd86c':e.type==='portal'?'#92f3ff':'#efc4fa';U.circle(c,px(e.x),py(e.y),2.2,color);}for(const e of g.enemies)if(!e.dead&&U.dist(e,p)<600&&w.isKnown(e.x,e.y))U.circle(c,px(e.x),py(e.y),e.isBoss?4:2,e.isBoss?'#ff5679':'#ffc1cf');U.circle(c,size/2,cv.height/2,4,t.light);c.strokeStyle=t.accent;c.lineWidth=1;c.beginPath();c.moveTo(size/2,cv.height/2-8);c.lineTo(size/2-4,cv.height/2);c.lineTo(size/2+4,cv.height/2);c.closePath();c.stroke();};
 const render=R.render;R.render=function(dt){render.call(this,dt);const g=this.g,t=palettes[g.biome||0];if(!this.ox||S.data.settings.lowFX)return;const c=g.ctx;c.save();const zs=g.scale*(this.zoom25||1);c.setTransform(zs,0,0,zs,this.ox*zs,this.oy*zs);for(let i=0;i<25;i++){const x=g.camera.x+Math.sin(i*71)*g.width*.6,y=g.camera.y+Math.cos(i*37)*g.height*.6,twinkle=.2+.6*Math.max(0,Math.sin(this.ambient*1.5+i));c.globalAlpha=twinkle;c.strokeStyle=t.light;c.lineWidth=1;c.beginPath();c.moveTo(x-3,y);c.lineTo(x+3,y);c.moveTo(x,y-4);c.lineTo(x,y+4);c.stroke();}c.restore();};
})(window.Aeren);

;

/* Module: js/hud-reference-23.js */
'use strict';
(function(A){
 const UI=A.UI.prototype,asset='assets/hud-reference-frames.png';
 const regions={hero:[0,655,570,278],combat:[565,700,740,232],utility:[1297,695,375,238],top:[480,10,715,200],treasury:[20,45,400,120],map:[1310,10,350,350]};
 let serial=0;
 function frame(name){return `<svg class="frame25" viewBox="${regions[name].join(' ')}" preserveAspectRatio="none" aria-hidden="true"><image href="${asset}" width="1672" height="941"/></svg>`;}
 function crystal(){const id='ruby-fill-'+(++serial);return `<svg class="rubyMeter25" viewBox="0 655 570 278" preserveAspectRatio="none" role="progressbar" aria-label="Życie" aria-valuemin="0" aria-valuemax="100"><defs><clipPath id="${id}"><path d="M125 710L193 772V827L125 894L54 827V773Z"/></clipPath></defs><g clip-path="url(#${id})"><image class="rubyEmpty25" href="${asset}" width="1672" height="941"/><svg x="0" y="710" width="570" height="184" viewBox="0 710 570 184" overflow="hidden"><image class="rubyFill25" href="${asset}" width="1672" height="941"/></svg><path class="rubySurface25" d="M48 710H200"/></g></svg>`;}
 const build=UI.buildHUD;
 UI.buildHUD=function(){
  build.call(this);this.hud.classList.add('reference25');
  for(const [selector,name]of [['.hero24','hero'],['.combat24','combat'],['.utility24','utility'],['.top23','top'],['.treasury23','treasury'],['.compass24','map']])this.hud.querySelector(selector).insertAdjacentHTML('afterbegin',frame(name));
  const hero=this.hud.querySelector('.hero24'),ruby=this.hud.querySelector('.ruby24');
  hero.insertAdjacentHTML('beforeend',crystal());
  ruby.replaceChildren(document.getElementById('gemHP24'));
  this.hud.querySelector('.combat24').append(this.hud.querySelector('.xp23'));
  this.hud.querySelector('.xp23').setAttribute('role','progressbar');
  this.hud.querySelector('.xp23').setAttribute('aria-label','Doświadczenie do następnego poziomu');
  this.hud.querySelector('.xp23').setAttribute('aria-valuemin','0');
  this.hud.querySelector('.xp23').setAttribute('aria-valuemax','100');
  this.hud.querySelector('.health23').hidden=true;
  this.hud.querySelector('.compassGem24').remove();
  this.hud.querySelector('.compassNorth24').textContent='N';
  this.hud.querySelector('#weaponstats23').title='Statystyki posiadanych broni';
 };
 const update=UI.update;
 UI.update=function(dt){
  update.call(this,dt);
  if(this.hud.hidden||this.lastHUD>0||!this.hud.classList.contains('reference25'))return;
  const p=this.g.player,s=this.g.stats,f=Math.max(0,Math.min(1,p.hp/s.maxHp));
  // The red artwork is revealed from the bottom. Neither the frame nor HP text is clipped.
  // Nested SVG uses world coordinates; clip the full atlas at the gem's actual top, not at atlas y=0.
  this.hud.querySelector('.rubyFill25').style.clipPath=`polygon(0 ${710+184*(1-f)}px,1672px ${710+184*(1-f)}px,1672px 941px,0 941px)`;
  this.hud.querySelector('.rubySurface25').setAttribute('transform',`translate(0 ${184*(1-f)})`);
  this.hud.querySelector('.rubySurface25').style.opacity=f>0&&f<1?'.65':'0';
  this.hud.querySelector('.rubyMeter25').setAttribute('aria-valuenow',String(Math.round(f*100)));
  this.hud.querySelector('.rubyMeter25').setAttribute('aria-valuetext',`${Math.ceil(Math.max(0,p.hp))} / ${s.maxHp} HP`);
  this.hud.querySelector('.rubyMeter25').dataset.fraction=f.toFixed(4);
  const xp=this.hud.querySelector('.xp23'),pct=Math.max(0,Math.min(100,p.xp/p.nextXP*100||0));
  document.getElementById('xp-fill').style.width=pct+'%';document.getElementById('xp-text').textContent='XP '+Math.floor(pct)+'%';
  xp.setAttribute('aria-valuenow',String(Math.round(pct)));xp.title=`Doświadczenie: ${Math.round(pct)}% do następnego poziomu`;
  this.hud.style.setProperty('--frame-hue',['205deg','0deg','280deg','180deg','65deg','140deg'][this.g.biome||0]);
  this.hud.querySelector('.treasury23').style.setProperty('--opacity',A.Save.data.settings.hudOpacity??.94);
  this.hud.querySelector('.top23').style.setProperty('--opacity',A.Save.data.settings.hudOpacity??.94);
  const info=this.hud.querySelector('#weaponstats23');info.title=info.textContent;
  this.hud.querySelector('#gear23').title=A.Save.data.settings.weaponStats?info.textContent:'Maksymalnie 3 bronie i 6 przedmiotów';
  const dash=this.hud.querySelector('.utilitySkill24 small');if(dash)dash.textContent='';
  this.hud.querySelector('.hero24').title=`${p.hero.name} · ${document.getElementById('heroStats24').textContent}`;
 };
})(window.Aeren);

;

/* Module: js/slice-data.js */
'use strict';
(function(A){
 const X=A.Slice={version:1,readyRift:20,maxRift:100,skills:['fire','oil','lightning','wet','poison','crit','ice','speed','familiar','orbit','roots','vortex','area','blink','meteor'],weapons:['bow','staff','spear','runicHammer','scythe','stormrod'],synergies:['inferno','storm','toxic','frost','steam','shatter','plague','solar','tesla','forest','gravity','eclipse'],timeline:{first:22,mini1:165,risk:270,mini2:420,gift:660,boss:780}};
 X.mutations={
 bow:[['roots','Salwa Korzeni','Trafienie unieruchamia na 0,65 s; poziom 5: korzenie obejmują promień 65.'],['return','Powracający Świt','Strzały wracają i mogą trafić ponownie; poziom 5: przebija 5 celów.']],
 staff:[['oil','Czarny Żar','Każde trafienie nakłada olej; poziom 5: kałuża oleju. Połącz z Inferno.'],['nova','Pękające Słońce','Eksplozja trafienia ma promień 85; poziom 5: 115.']],
 spear:[['fan','Trójząb','Dwa dodatkowe pociski; każdy zadaje 65% obrażeń. Poziom 5: przebijają 3 cele.'],['arc','Przewodnik','Po trafieniu błyskawica na 2 cele za 30% siły; poziom 5: 4 cele.']],
 runicHammer:[['quake','Trzęsienie','Trafienie tworzy falę w promieniu 85 za 40% siły; poziom 5: promień 115.'],['stun','Dzwon Ciszy','Trafienie zatrzymuje zwykłego wroga na 0,9 s; poziom 5: 1,4 s.']],
 scythe:[['leech','Żniwiarz','Dodatkowe leczenie za 2% obrażeń; wspólny limit 2 HP/s. Poziom 5: 3%.'],['return','Krąg Umarłych','Sierp wraca do bohatera i może ponownie trafić; poziom 5: przebija 5 celów.']],
 stormrod:[['arc','Łańcuch Otchłani','Łańcuch trafia 2 dodatkowe cele za 30% siły; poziom 5: 4 cele.'],['nova','Serce Burzy','Każde trafienie eksploduje w promieniu 85; poziom 5: 115.']]
 };
 X.modifiers=[
 {id:'haste',name:'Pośpiech',desc:'+10% ruchu wrogów; +15% XP.'},
 {id:'glass',name:'Krucha Potęga',desc:'−15% maks. HP; +20% obrażeń.'},
 {id:'elites',name:'Elitarne Łowy',desc:'Dodatkowa elita co 60 s; miniboss daje dodatkowy poziom broni.'},
 {id:'storm',name:'Burza Otchłani',desc:'Boss i minibossowie co 16 s zapowiadają pojedynczy piorun; +15% nagrody.'},
 {id:'hunger',name:'Głód',desc:'Brak małych kropli leczenia; miniboss leczy 25% HP.'},
 {id:'magic',name:'Niestabilna Magia',desc:'+25% obrażeń aktywnych zaklęć; +20% ich cooldownu.'},
 {id:'horde',name:'Horda',desc:'+30% liczebności; −25% HP zwykłych wrogów; +10% nagrody.'},
 {id:'colossi',name:'Kolosy',desc:'−25% liczebności; +25% HP i +20% rozmiaru wrogów; +25% XP.'},
 {id:'poison',name:'Zatrute Powietrze',desc:'W skrzyniach tylko jedna mikstura na dwie; +30% obrażeń trucizny.'},
 {id:'forge',name:'Łaska Kuźni',desc:'Co druga oferta wyposażenia zawiera same bronie; nowa broń zaczyna na poziomie 2.'}
 ];
 X.curses=[{id:'none',name:'Bez klątwy',desc:'Zwykłe zasady.',reward:1},{id:'noheal',name:'Bez Leczenia',desc:'Brak mikstur i kropli leczenia. Jakość wyposażenia +1 rangę.',reward:1.3},{id:'one',name:'Jedna Broń',desc:'Tylko broń startowa; +35% jej obrażeń.',reward:1.25},{id:'breath',name:'Krótkie Oddechy',desc:'Oddech trwa 5 zamiast 12 s.',reward:1.2},{id:'iron',name:'Żelazny Boss',desc:'+25% HP finałowego bossa; zwycięstwo daje dodatkowy kryształ.',reward:1.2},{id:'deadly',name:'Śmiertelne Elity',desc:'+20% obrażeń elit; podwójne XP z elit.',reward:1.3},{id:'blind',name:'Ślepy Wybór',desc:'Trzecia karta umiejętności ma ukrytą nazwę. Jakość wyposażenia +1 rangę.',reward:1.25}];
 X.starts=[{id:'normal',name:'Normalny run',desc:'Bez dodatkowej reguły.'},{id:'nature',name:'Przysięga natury',desc:'Pierwsze oferty prowadzą do korzeni i towarzyszy.'},{id:'fire',name:'Przysięga ognia',desc:'Pierwsze oferty prowadzą do ognia i oleju.'},{id:'chaos',name:'Chaos',desc:'+8% ruchu wrogów; silniejsza preferencja brakujących składników synergii.'},{id:'fragile',name:'Krucha potęga',desc:'−15% HP, ale od początku druga broń.'},{id:'revenge',name:'Zemsta',desc:'Pierwszy miniboss nosi imię ostatniego zabójcy; po zwycięstwie daje relikt regeneracji.'}];
 X.milestones=[{level:5,name:'Odblokowano start: Trop Burzy',reward:'Pierwsza oferta może prowadzić do pioruna i wody.'},{level:10,name:'Odblokowano: Rezonans Berła',reward:'Alternatywa mutacji: nakłada wodę zamiast eksplozji.'},{level:15,name:'Aura Zdobywcy',reward:'Kosmetyczny fioletowy pierścień bohatera.'},{level:20,name:'Synergia: Prąd Życia',reward:'Berło Burzy + towarzysz: trafienia berła leczą 0,15 HP, limit 2 HP/s.'},...[25,30,35,40,50,60,75,90,100].map(level=>({level,name:'Próg w przygotowaniu',reward:'Nieudostępniony — wymaga osobnych testów.'}))];
 X.scale=n=>{n=A.U.clamp(Number(n)||0,0,100);return{hp:1+.03*Math.min(n,20)+.012*Math.max(0,n-20),damage:1+.015*Math.min(n,20)+.004*Math.max(0,n-20),speed:1+Math.min(.1,n*.004),elite:Math.min(.25,.02+.002*n),reward:1+.015*n};};
 X.validModifiers=ids=>new Set(ids).size===ids.length&&!(['horde','colossi'].every(x=>ids.includes(x)))&&!(['haste','storm'].every(x=>ids.includes(x)))&&ids.every(id=>X.modifiers.some(m=>m.id===id));
 X.worldFor=(seed,rift)=>{if(rift<5)return[];const rng=A.U.rng(seed+rift*781),pool=X.modifiers;return [pool[Math.floor(rng()*pool.length)].id];};
 X.newMeta=()=>({version:1,unlocked:0,best:{},heroes:{},results:{},discoveries:{},milestones:{},record:0,lastCause:'Strażnik Pieczęci'});
 X.meta=()=>{const m=A.Save.meta3;m.slice||=X.newMeta();return m.slice;};
 X.cleanMeta=m=>{const d=X.newMeta();if(!m||m.version!==1)return d;for(const k of ['best','heroes','results','discoveries','milestones'])if(m[k]&&typeof m[k]==='object'&&!Array.isArray(m[k]))d[k]=m[k];d.unlocked=A.U.clamp(Math.floor(Number(m.unlocked)||0),0,21);d.record=Math.max(0,Number(m.record)||0);d.lastCause=String(m.lastCause||d.lastCause).slice(0,80);return d;};
 const S=A.Save,load=S.load;S.load=function(){const d=load.call(this);try{const raw=JSON.parse(localStorage.getItem('aeren.meta.v3')||'null');this.meta3.slice=X.cleanMeta(raw?.slice);}catch{this.meta3.slice=X.newMeta();}return d;};
})(window.Aeren);

;

/* Module: js/slice-game.js */
'use strict';
(function(A){
 const {Slice:X,Data:D,Save:S,U}=A,G=A.Game.prototype,clone=x=>JSON.parse(JSON.stringify(x));
 Object.defineProperty(G,'slice',{get(){return this.player?.slice24||null;}});
 G.sliceHas=function(id){return !!this.slice?.worldMods.includes(id);};
 G.sliceRewardFactor=function(){const s=this.slice;return (this.mode.reward||1)*X.scale(s.rift).reward*(X.curses.find(c=>c.id===s.curse)?.reward||1)*(this.sliceHas('storm')?1.15:this.sliceHas('horde')?1.1:1);};
 const start=G.start;
 G.start=function(id,options={}){
  if(options.slice&&!options.restoring&&(!['ilya','sol'].includes(id)||options.rift>X.readyRift||options.rift>X.meta().unlocked))return false;
  if(options.slice&&options.rift>0)options={...options,mode:'normal'};const result=start.call(this,id,options);if(result===false||!options.slice)return result;
  const rift=U.clamp(Math.floor(options.rift||0),0,X.readyRift),curse=rift>=15&&X.curses.some(c=>c.id===options.curse)?options.curse:'none';
  this.player.slice24={version:1,rift,curse,start:X.starts.some(s=>s.id===options.modifier)?options.modifier:'normal',worldMods:X.worldFor(this.seed,rift),events:{},queue:[],choice:null,mutated:{},tutorial:{},firstUpgrade:null,miniTimes:[],phaseTimes:[],awards:0,evolutionDone:{},nextElite:rift>=2?90:120,nextBeat:60,lastCause:'Otchłań',gifts:[],risk:null};
  if(options.modifier==='storm'&&X.meta().milestones[5])this.slice.start='storm';
  this.mission=0;this.biome=0;this.weapons=[{id:id==='ilya'?'bow':'staff',level:1,cd:0}];this.player.startWeaponId=this.weapons[0].id;
  this.player.ultCd=20;this.player.potions=curse==='noheal'?[]:['small'];this.player.nextXP=24;this.player.xp=0;
  if(this.slice.start==='fragile'&&curse!=='one')this.weapons.push({id:id==='ilya'?'staff':'bow',level:1,cd:0});
  this.world.events=this.world.events.filter(e=>['portal','chest','fountain'].includes(e.type));this.world.hazards=[];
  this.enemies=[];this.recalculate();this.player.hp=this.stats.maxHp;this.directorTimer=0;
  for(let i=0;i<4;i++)this.spawn(D.enemyTypes[i%2],{elite:-1});
  this.ui.buildHUD();document.getElementById('toast').replaceChildren();this.ui.toast('Żelazna Pieczęć','Przetrwaj do 13:00 i pokonaj Kustosza. Pierwszy wybór za 22 s.');this.saveRun();return true;
 };
 const recalc=G.recalculate;
 G.recalculate=function(){if(!this.slice)return recalc.call(this);const original=this.mastery;this.mastery=Object.fromEntries(Object.entries(original||{}).map(([k,v])=>[k,Math.min(v,k.includes('_')?1:2)]));let s;try{s=recalc.call(this);}finally{this.mastery=original;}
  // Account strength is capped; discovery, not grinding, is the primary progression.
  if(this.slice.start==='fragile'||this.sliceHas('glass'))s.maxHp=Math.round(s.maxHp*.85);
  if(this.sliceHas('glass'))s.damage*=1.2;
  if(this.sliceHas('haste'))s.xp*=1.15;if(this.sliceHas('colossi'))s.xp*=1.25;
  if(this.slice.gifts.includes('mirror')){s.count=Math.min(5,s.count+1);s.damage*=.85;}
  if(this.slice.gifts.includes('bastion')){s.armor=Math.min(70,s.armor+14);s.speed*=.92;}
  if(this.slice.risk==='danger')s.damage*=1.12;
  s.magnet=Math.max(s.magnet,125);this.player.hp=Math.min(this.player.hp,s.maxHp);return s;
 };
 const xp=G.gainXP;G.gainXP=function(amount){if(!this.slice)return xp.call(this,amount);if(this.endSaved)return;const p=this.player;p.xp+=amount*this.stats.xp;while(p.xp>=p.nextXP&&p.level<30){p.xp-=p.nextXP;p.level++;p.nextXP=Math.round(20+p.level*9);this.pendingLevels++;}if(p.level===30)p.xp=Math.min(p.xp,p.nextXP-1);if(this.pendingLevels&&this.state==='playing')this.levelUp();};
 G.sliceLinks=function(id){return D.synergies.filter(s=>X.synergies.includes(s.id)&&(s.a===id||s.b===id)).map(s=>({s,other:s.a===id?s.b:s.a,ready:this.has(s.a===id?s.b:s.a)>0}));};
 const rolls=G.rollChoices;G.rollChoices=function(){if(!this.slice)return rolls.call(this);let pool=D.abilities.filter(a=>X.skills.includes(a.id)&&this.has(a.id)<a.max&&(a.type!=='active'||this.has(a.id)||this.player.active.length<3));const out=[];
  const preferred=this.slice.start==='fire'?['fire','oil']:this.slice.start==='storm'?['lightning','wet']:this.slice.start==='nature'?['familiar','roots']:this.player.hero.id==='sol'?['fire','oil']:['roots','familiar'];
  if(this.player.level<=4){const id=preferred.find(id=>!this.has(id))||preferred[0],a=pool.find(a=>a.id===id);if(a){out.push(a);pool=pool.filter(x=>x!==a);}}
  while(out.length<3&&pool.length){const a=U.weighted(pool,a=>(this.has(a.id)?1.4:1)*(this.sliceLinks(a.id).some(x=>x.ready)?(this.slice.start==='chaos'?5:3):1));out.push(a);pool=pool.filter(x=>x!==a);}return out;
 };
 const levelUp=G.levelUp;G.levelUp=function(){if(!this.slice)return levelUp.call(this);if(this.pendingLevels<=0)return;this.pendingLevels--;this.slice.awards++;this.slice.firstUpgrade??=this.time;this.pendingGear=false;this.rewardStage=null;this.choices=[];
  if(this.slice.awards%3===0){this.pendingGear=true;this.rewardStage='gear';this.gearChoices=this.rollGear();this.openGear();}else{this.choices=this.rollChoices();if(this.choices.length){this.state='levelup';this.ui.levelUp(this.choices);this.input.clear();A.Audio.play('level');this.saveRun();}else this.resume();}
 };
 const choose=G.choose;G.choose=function(id){if(!this.slice)return choose.call(this,id);if(this.state!=='levelup'||!this.choices.some(a=>a.id===id))return;this.choices=[];this.upgrade(id);if(this.state==='equip'){this.saveRun();return;}this.resume();this.saveRun();};
 const upgrade=G.upgrade;G.upgrade=function(id){const before=new Set(this.runSynergies||[]),r=upgrade.call(this,id);if(this.slice){for(const key of this.runSynergies)if(!before.has(key)){this.hitStop=.12;this.shake=3;this.slice.lastSynergy=key;this.burst(this.player.x,this.player.y,'#ffe6a0',28,160);X.meta().discoveries[key]=true;A.Audio.play('boss');}S.write();}return r;};
 const gear=G.rollGear;G.rollGear=function(){if(!this.slice)return gear.call(this);const out=[],one=this.slice.curse==='one';let pool=X.weapons.filter(id=>!this.weapons.some(w=>w.id===id&&w.level>=5)&&(!one||id===this.weapons[0].id));
  const add=()=>{if(!pool.length)return;const id=U.weighted(pool,id=>this.weapons.some(w=>w.id===id)?4:1),w=this.weapons.find(w=>w.id===id),d=D.weaponById[id];out.push({...d,kind:'weapon',level:w?w.level+1:this.sliceHas('forge')?2:1,desc:this.weaponDescription23(id,w?w.level+1:1)});pool=pool.filter(x=>x!==id);};add();
  if(this.sliceHas('forge')&&this.slice.awards%6===0){add();add();}
  let attempts=0;while(out.length<3&&attempts++<60){const i=this.rollItem();if(out.some(x=>x.id===i.id))continue;const old=this.items.find(x=>x.id===i.id);if(old?.level>=5)continue;if(old){i.level=old.level+1;i.rarity=Math.max(old.rarity,i.rarity);this.itemStats(i);}out.push(i);}return out;
 };
 const rollItem=G.rollItem;G.rollItem=function(r){const item=rollItem.call(this,r);if(this.slice){item.rarity=Math.min(4,item.rarity+(this.slice.curse==='noheal'||this.slice.curse==='blind'?1:0)+(Math.random()<this.slice.rift*.015?1:0));this.itemStats(item);}return item;};
 const chosenGear=G.chooseGear;G.chooseGear=function(i){const r=this.gearChoices[i],isNew=r?.kind==='weapon'&&!this.weapons.some(w=>w.id===r.id);if(this.slice?.curse==='one'&&r?.kind==='weapon'&&r.id!==this.weapons[0].id)return;chosenGear.call(this,i);if(this.slice&&isNew&&this.sliceHas('forge')){const w=this.weapons.find(w=>w.id===r.id);if(w){w.level=Math.max(2,w.level);this.saveRun();}}};
 const complete=G.completeReward;G.completeReward=function(){if(this.slice)for(const w of this.weapons)if(w.level===5&&!this.slice.evolutionDone[w.id]){this.slice.evolutionDone[w.id]=true;this.slice.queue.push({kind:'mutation',weapon:w.id,reason:'Ewolucja poziomu 5'});}return complete.call(this);};
 G.queueSlice=function(choice){this.slice.queue.push(choice);};
 const resume=G.resume;G.resume=function(){if(this.slice){if(this.slice.choice){this.state='sliceChoice';this.ui.sliceChoice();return;}if(this.slice.queue.length&&!this.pendingReplacement&&!this.pendingGear&&!this.pendingEquip){this.slice.choice=this.slice.queue.shift();this.state='sliceChoice';this.input.clear();this.ui.sliceChoice();this.saveRun();return;}}return resume.call(this);};
 G.chooseSlice=function(value){const s=this.slice,c=s?.choice;if(this.state!=='sliceChoice'||!c)return;
  if(c.kind==='mutation'){const [id,branch]=value.split(':'),w=this.weapons.find(w=>w.id===id);if(!w||c.weapon&&c.weapon!==id||!X.mutations[id]?.some(m=>m[0]===branch)&&!(id==='stormrod'&&branch==='water'&&X.meta().milestones[10]))return;w.mutation24=branch;w.level=Math.max(w.level,3);s.mutated[id]=branch;if(this.sliceHas('elites'))w.level=Math.min(5,w.level+1);if(s.curse==='one')w.level=Math.min(5,w.level+1);}
  else if(c.kind==='risk'){if(!['safe','danger','mystery'].includes(value))return;s.risk=value;if(value==='safe'){this.player.hp=Math.min(this.stats.maxHp,this.player.hp+this.stats.maxHp*.35);this.takePotion('small');}else if(value==='danger'){const links=D.synergies.filter(x=>X.synergies.includes(x.id)&&!this.synergy(x.id)&&[x.a,x.b].every(id=>D.byId[id].type!=='active'||this.has(id)||this.player.active.length<3));const link=links.find(x=>this.has(x.a)||this.has(x.b))||links[0];if(link){if(!this.has(link.a))this.upgrade(link.a);if(!this.has(link.b))this.upgrade(link.b);}this.queueSlice({kind:'mutation',reason:'Nagroda za ryzyko'});}else{const id=X.modifiers.filter(m=>X.validModifiers([...s.worldMods,m.id]))[this.seed%Math.max(1,X.modifiers.filter(m=>X.validModifiers([...s.worldMods,m.id])).length)]?.id;if(id)s.worldMods.push(id);this.queueSlice({kind:'gift',reason:'Dar tajemniczej ścieżki'});}}
  else if(c.kind==='gift'){if(!['mirror','bastion','ember'].includes(value))return;if(!s.gifts.includes(value))s.gifts.push(value);}
  else if(c.kind==='bridge'){if(![c.id,'crit','orbit'].includes(value)||this.has(value)>=D.byId[value].max)return;this.upgrade(value);}
  s.choice=null;this.recalculate();S.write();this.resume();this.saveRun();
 };
 const director=G.director;G.director=function(dt){if(!this.slice)return director.call(this,dt);const s=this.slice,t=this.time,scale=X.scale(s.rift),cycle=t%60,breath=s.curse==='breath'?5:12;
  this.directorPhase=cycle<breath?'Oddech':cycle<42?'Narastanie':'Natarcie';
  this.spawnRate=(.7+Math.min(1.3,t/400))*(cycle<breath?.5:cycle<42?1:1.45)*this.mode.spawn*(1+s.rift*.008)*(this.sliceHas('horde')?1.3:this.sliceHas('colossi')?.75:1)*(this.boss?.25:1);
  this.directorTimer-=dt;if(this.directorTimer<=0){this.directorTimer=1/this.spawnRate;const roles=[0,1,2,3,5,6],available=t<50?2:t<120?3:roles.length;this.spawn(D.enemyTypes[roles[Math.floor(Math.random()*available)]]);}
  if(t>=22&&!s.events.first){s.events.first=true;if(this.player.level===1)this.gainXP(Math.max(0,this.player.nextXP-this.player.xp)/this.stats.xp+.01);}
  if(t>=70&&!s.events.hint){s.events.hint=true;if(this.runSynergies.size===0){const id=this.player.hero.id==='sol'?'oil':'familiar';if(!this.has(id))this.queueSlice({kind:'bridge',id,reason:'Pierwsza więź'});}}
  for(const [key,time,role]of [['mini1',165,5],['mini2',420,6]])if(t>=time&&!s.events[key]){s.events[key]=true;s.miniTimes.push(t);const e=this.spawn(D.enemyTypes[role],{mini:true,elite:-1,sliceMini:key});if(e){e.name=key==='mini1'?(s.start==='revenge'?'Zemsta: '+X.meta().lastCause:'Egzekutor Pieczęci'):'Tkacz Łańcuchów';e.extraCd=6;}this.ui.toast(e?.name||'Strażnik',key==='mini1'?'Szarża: odejdź z linii ataku.':'Pozycjonowanie: wyjdź z zapowiadanych pułapek.');A.Audio.play('boss');this.saveRun();}
  if(t>=270&&!s.events.risk){s.events.risk=true;this.queueSlice({kind:'risk',reason:'Rozdroże Pieczęci'});}
  if(t>=660&&!s.events.gift){s.events.gift=true;this.queueSlice({kind:'gift',reason:'Ostatnia przysięga'});for(let i=0;i<6;i++)this.spawn(D.enemyTypes[[2,3,5][i%3]],{elite:i===0?4:-1});}
  if(t>=s.nextBeat){s.nextBeat+=60;const roles=[1,2,3,5,6],role=roles[Math.floor(t/60)%5];for(let i=0;i<3;i++)this.spawn(D.enemyTypes[role],{elite:-1});this.ui.toast(this.directorPhase,D.enemyTypes[role].name+' · zmiana presji');}
  if(t>=s.nextElite){s.nextElite=t+(this.sliceHas('elites')?60:Math.max(70,115-s.rift));const e=this.spawn(D.enemyTypes[2+(Math.floor(t/60)%2)],{elite:4});if(e&&s.rift>=7)e.secondElite24='swift';}
  if(s.rift>=13&&cycle>45&&!s.events['echo'+Math.floor(t/60)]&&t>480&&!this.boss){s.events['echo'+Math.floor(t/60)]=true;const e=this.spawn(D.enemyTypes[5],{mini:true,elite:-1,sliceMini:'echo'});if(e){e.hp*=.35;e.maxHp=e.hp;e.name='Echo Egzekutora';}}
  if(t>=780&&!this.stageBossSpawned)this.spawnBoss();
 };
 const spawn=G.spawn;G.spawn=function(type,opts={}){if(!this.slice)return spawn.call(this,type,opts);const s=this.slice,t=this.time,d=typeof type==='string'?D.enemyTypes.find(e=>e.id===type):type;if(!d)return null;if(!opts.mini&&!opts.isBoss&&['sniper','trapper'].includes(d.ai)&&this.enemies.filter(e=>e.hp>0&&e.type.ai===d.ai&&!e.mini).length>=3+Math.floor(s.rift/10))return null;const elite=opts.elite??(t>90&&Math.random()<X.scale(s.rift).elite?4:-1),e=spawn.call(this,d,{...opts,elite});if(!e)return null;
  if(!opts.isBoss){const factor=(.6+Math.min(.65,t/800))*this.mode.hp*X.scale(s.rift).hp*(elite>=0?1.65:1)*(opts.mini?5:1)*(this.sliceHas('horde')&&!opts.mini?.75:1)*(this.sliceHas('colossi')?1.25:1);e.hp=opts.hp??d.hp*factor;e.maxHp=e.hp;}
  e.damage=d.damage*(t<90?.6:.75)*this.mode.damage*X.scale(s.rift).damage*(s.curse==='deadly'&&elite>=0?1.2:1);e.damage=Math.min(e.damage,this.stats.maxHp*.32);
  e.speed=d.speed*X.scale(s.rift).speed*this.mode.speed*(this.sliceHas('haste')?1.1:1)*(s.start==='chaos'?1.08:1)*(s.risk==='danger'?1.08:1);if(s.rift>=7&&elite>=0){e.secondElite24='swift';e.speed*=1.1;}if(this.sliceHas('colossi')&&!e.isBoss)e.r*=1.2;
  e.extraCd=e.mini?7:10;return e;
 };
 const drop=G.drop;G.drop=function(x,y,type,value){if(this.slice){if(type==='heal'&&(this.sliceHas('hunger')||this.slice.curse==='noheal'))return;if(type==='xp')value*=1.3*(this.slice.curse==='deadly'&&value===10?2:1);if(type==='gold')value*=X.scale(this.slice.rift).reward;}return drop.call(this,x,y,type,value);};
 const potion=G.takePotion;G.takePotion=function(kind){if(this.slice){this.slice.events.potionSkip=(this.slice.events.potionSkip||0)+1;if(this.slice.curse==='noheal'||this.sliceHas('poison')&&this.slice.events.potionSkip%2===0)return;}return potion.call(this,kind);};
 const use=G.usePotion;G.usePotion=function(){if(this.slice?.curse==='noheal')return false;return use.call(this);};
 const kill=G.kill;G.kill=function(e,...args){if(e.dead)return;const wasMini=e.sliceMini,boss=e.isBoss;kill.call(this,e,...args);if(!this.slice)return;
  if(wasMini&&wasMini!=='echo'){this.queueSlice({kind:'mutation',reason:e.name});if(this.sliceHas('hunger'))this.player.hp=Math.min(this.stats.maxHp,this.player.hp+this.stats.maxHp*.25);if(this.slice.start==='revenge'&&wasMini==='mini1')this.slice.gifts.push('regen');}
  if(boss)this.finish(true);
 };
 const hurt=G.hurt;G.hurt=function(n,element,cause){if(this.slice){if(cause)this.slice.lastCause=String(cause);else if(element==='dot')this.slice.lastCause='Ogień lub trucizna';if(this.time<25)n=Math.min(n,this.stats.maxHp*.12);}return hurt.call(this,n,element);};
 const update=G.update;G.update=function(dt){const s=this.slice;if(s&&this.state==='playing'){
  for(const [id,used]of [['move',Math.abs(this.player.vx)+Math.abs(this.player.vy)>0],['dash',this.player.dashing>0],['secondary',this.player.secondaryCd>0],['skill',Object.values(this.player.cooldowns).some(n=>n>0)],['potion',this.player.potionCd>0]])if(used)s.tutorial[id]=true;
  if(s.gifts.includes('regen'))this.player.hp=Math.min(this.stats.maxHp,this.player.hp+dt*.18);
 }update.call(this,dt);if(this.slice&&this.state==='playing'&&this.slice.queue.length)this.resume();};
 const load=G.loadRun;G.loadRun=function(){const ok=load.call(this);if(!ok||!this.slice)return ok;if(this.slice.version!==1){delete this.player.slice24;return ok;}const s=this.slice;s.queue||=[];s.events||={};s.worldMods=(s.worldMods||[]).filter(id=>X.modifiers.some(m=>m.id===id));if(!X.validModifiers(s.worldMods))s.worldMods=s.worldMods.slice(0,1);s.tutorial||={};s.gifts||=[];s.evolutionDone||={};s.nextBeat||=(Math.floor(this.time/60)+1)*60;s.nextElite||=this.time+60;this.world.hazards=[];this.recalculate();if(s.choice){this.state='sliceChoice';this.ui.sliceChoice();}else if(this.state==='paused')this.ui.pause();return true;};
 const finish=G.finish;G.finish=function(win){if(!this.slice)return finish.call(this,win);if(this.endSaved)return;const s=this.slice,m=X.meta(),id=this.player.runId,previous=m.results[id];this.endSaved=true;this.state='results';this.input.clear();const result=previous||{win,time:this.time,kills:this.kills,level:this.player.level,hero:this.player.hero.name,heroId:this.player.hero.id,mode:this.modeId,mission:0,rift:s.rift,curse:s.curse,modifier:s.start,worldMods:[...s.worldMods],reward:this.cheated?0:Math.round((Math.min(55,this.kills/16)+this.time/48+(win?42:0))*this.sliceRewardFactor()),factor:this.sliceRewardFactor(),cause:s.lastCause,bestWeapon:D.weaponById[this.weapons.slice().sort((a,b)=>b.level-a.level)[0].id].name,synergy:s.lastSynergy||[...this.runSynergies][0],firstUpgrade:s.firstUpgrade,score:this.kills+(win?2500:0),bosses:win?1:0,practice:this.cheated,seed:this.seed,record:Math.max(m.record,this.time)};
  if(!previous&&!this.cheated){m.record=result.record;m.lastCause=result.cause;m.results[id]=result;if(win){const key=String(s.rift);m.best[key]=Math.min(m.best[key]||Infinity,this.time);m.heroes[this.player.hero.id]=Math.max(m.heroes[this.player.hero.id]||0,s.rift);if(s.rift>0||this.modeId==='normal'||this.modeId==='hard')m.unlocked=Math.max(m.unlocked,Math.min(21,s.rift+1));for(const t of X.milestones)if(t.level<=s.rift&&t.level<=20)m.milestones[t.level]=true;S.grant23('slice-first:'+s.rift,{silver:40+s.rift*5,crystals:1,tokens:s.rift%5===0?5:1});}S.grant23('slice-run:'+id,{silver:Math.round((win?55:10)*result.factor),crystals:win&&s.curse==='iron'?1:0,tokens:win?2:0});S.award(result);S.write();}
  result.unlocked=m.unlocked;this.result=result;S.clearRun();this.ui.results(result);
 };
 const advance=G.advance;G.advance=function(){if(this.slice){if(this.bosses>0)this.finish(true);return;}return advance.call(this);};
})(window.Aeren);

;

/* Module: js/slice-combat.js */
'use strict';
(function(A){const {Slice:X,Data:D,Save:S,U}=A,G=A.Game.prototype,R=A.Renderer.prototype;
 const stats=A.weaponStats23;A.weaponStats23=function(w,g){const st=stats(w,g);if(!g?.slice)return st;if(w.level>=2&&['bow','staff','spear','runicHammer','scythe'].includes(w.id))st.interval*=.9;if(g.slice.curse==='one')st.damage*=1.35;if(w.mutation24==='fan')st.damage*=.65;return st;};
 const description=G.weaponDescription23;G.weaponDescription23=function(id,l){if(!this.slice)return description.call(this,id,l);const st=A.weaponStats23({id,level:l,mutation24:this.weapons.find(w=>w.id===id)?.mutation24},this);return `${st.damage.toFixed(1)} obrażeń / pocisk · ${(1/st.interval).toFixed(2)} ataku/s. Poziom 2: szybszy atak. Poziom 3: ${ {bow:'przebicie 1 celu',staff:'eksplozja 58',spear:'przebicie 1 celu',runicHammer:'eksplozja 55',scythe:'przebicie 2 celów',stormrod:'łańcuch na drugi cel'}[id]}. Poziom 5: wybór mutacji. ${this.weapons.find(w=>w.id===id)?.mutation24?'Mutacja: '+(X.mutations[id].find(m=>m[0]===this.weapons.find(w=>w.id===id).mutation24)?.[1]||'Rezonans'):''}`;};
 const bullet=G.bullet;G.bullet=function(x,y,angle,n,element,opts={}){if(!this.slice)return bullet.call(this,x,y,angle,n,element,opts);if(opts.enemy){opts={...opts,...(this._enemySource?.type.ai==='sniper'?{speed:1.5}:{}),cause24:this._enemySource?.name||this._enemySource?.type.name||'Pocisk strażnika'};return bullet.call(this,x,y,angle,n,element,opts);}
  const w=opts.weapon23&&this.weapons.find(w=>w.id===opts.weapon23);let bopts={...opts};if(w){const m=w.mutation24,l=w.level,mt=A.mutationTraits(m,l);bopts.mutation24=m||null;bopts.sliceShot=true;if(w.id==='bow'&&l>=3)bopts.pierce=Math.max(1,bopts.pierce||0);
   if(m==='return'){bopts.returnAt23=.65;bopts.pierce=mt.pierce;bopts.life=2;}
   if(m==='nova')bopts.explosion=mt.explosion;
   if(m==='oil'&&l>=5)bopts.oilPuddle24=true;
   if(w.id==='bow'&&l>=4&&!opts.echo24)bullet.call(this,x,y,angle+.12,n*.7,element,{...bopts,echo24:true});if(m==='fan'){bopts.pierce=mt.pierce??bopts.pierce;for(const a of [-.18,.18])bullet.call(this,x,y,angle+a,n,element,{...bopts,pierce:mt.pierce??bopts.pierce});}
   if(this.slice.gifts.includes('ember')&&w.shots23%4===0){bopts.explosion=Math.max(bopts.explosion||0,80);element='fire';}
  }return bullet.call(this,x,y,angle,n,element,bopts);
 };
 const weaponHit=G.weaponHit23;G.weaponHit23=function(e,b){weaponHit.call(this,e,b);if(!this.slice||!b.sliceShot)return;const l=b.weaponLevel23,m=b.mutation24;
  if(m==='roots'){if(!e.isBoss&&!e.mini)e.status.root=.65;if(l>=5)this.zone(e.x,e.y,65,0,'nature',{once:true,root:.65});}
  if(m==='oil'){this.applyStatus(e,'oil');if(b.oilPuddle24)this.zone(e.x,e.y,65,b.damage*.12,'oil',{life:2,total:2});}
  if(m==='arc')this.chain(e,b.damage*.3,l>=5?4:2);
  if(m==='quake')this.zone(e.x,e.y,l>=5?115:85,b.damage*.4,'stone',{once:true});
  if(m==='stun'&&!e.isBoss&&!e.mini)e.status.root=l>=5?1.4:.9;
  if(m==='leech'){const heal=Math.min(this.lifeBudget,b.damage*(l>=5?.03:.02));this.player.hp=Math.min(this.stats.maxHp,this.player.hp+heal);this.lifeBudget-=heal;}
  if(m==='water')this.applyStatus(e,'water');
  if(b.weapon23==='stormrod'&&this.has('familiar')&&X.meta().milestones[20]){const heal=Math.min(.15,this.lifeBudget);this.player.hp=Math.min(this.stats.maxHp,this.player.hp+heal);this.lifeBudget-=heal;}
 };
 const cast=G.cast;G.cast=function(id){const before=this.player.cooldowns[id]||0;this.activeCast24=!!this.slice;try{cast.call(this,id);}finally{this.activeCast24=false;}if(this.sliceHas('magic')&&before<=0&&this.player.cooldowns[id]>0)this.player.cooldowns[id]*=1.2;};
 const zone=G.zone;G.zone=function(x,y,r,n,element,o={}){if(this.slice&&!o.enemy){if(this.activeCast24&&this.sliceHas('magic'))n*=1.25;}if(o.enemy)o={...o,cause24:o.source?.name||this._enemySource?.name||this._enemySource?.type.name||'Pułapka'};return zone.call(this,x,y,r,n,element,o);};
 const hit=G.hit;G.hit=function(e,n,element,opts){if(this.slice){if(this.activeCast24&&this.sliceHas('magic'))n*=1.25;if(element==='poison'&&this.sliceHas('poison'))n*=1.3;if(e?.isBoss&&e.phase===3&&!(e.open24>0))n*=.4;}return hit.call(this,e,n,element,opts);};
 const bossSpawn=G.spawnBoss;G.spawnBoss=function(){if(!this.slice)return bossSpawn.call(this);if(this.stageBossSpawned)return;const p=this.player,s=this.slice,hp=4200*this.mode.hp*X.scale(s.rift).hp*(s.curse==='iron'?1.25:1),pt=this.world.freePoint(p.x+280,p.y-220,48),d={id:'sealBoss',name:'Kustosz Żelaznej Pieczęci',ai:'boss',shape:'knight',hp,speed:45,damage:22,r:48,color:'#edc27a',biome:0};this.boss=this.spawn(d,{...pt,isBoss:true,elite:-1,hp,maxHp:hp,cd:2,attackIndex:0,open24:0});this.stageBossSpawned=true;this.enemies=this.enemies.filter(e=>e===this.boss||e.mini);this.ui.toast(d.name,'I · Nauka: odczytaj kierunek salwy.');this.slice.phaseTimes.push({phase:1,time:this.time});this.saveRun();};
 const bossAI=G.bossAI;G.bossAI=function(e,dt,a,dist){if(!this.slice)return bossAI.call(this,e,dt,a,dist);this._enemySource=e;const s=this.slice,phase=e.hp/e.maxHp<.33?3:e.hp/e.maxHp<.66?2:1;e.open24=Math.max(0,(e.open24||0)-dt);
  if(phase!==e.phase){e.phase=phase;e.cd=1.5;e.intent24=null;e.open24=1.5;s.phaseTimes.push({phase,time:this.time});this.ui.toast('Kustosz · faza '+phase,phase===2?'II · Kajdany: usuń tarczowników lub obejdź ich.':s.rift>=20?'III · Rozdarcie: szukaj luki w pierścieniu.':'III · Rdzeń: atakuj po salwie, gdy opadnie osłona.');A.Audio.play('boss');this.shake=4;this.saveRun();}
  if(e.intent24){e.intent24.left-=dt;if(e.intent24.left<=0){const z=e.intent24;e.intent24=null;e.open24=phase===3?2.7:1.2;
    if(z.kind==='ring'){const n=18,gap=3;for(let i=gap;i<n-gap;i++)this.bullet(e.x,e.y,z.angle+i*Math.PI*2/n,e.damage*.75,'fire',{enemy:true,speed:.7,life:3.5});}
    else for(let i=-1-phase;i<=1+phase;i++)this.bullet(e.x,e.y,z.angle+i*.16,e.damage*.8,'stone',{enemy:true,speed:.8,life:3.6});
    if(phase>=2){const old=e.nextAoe;e.nextAoe=0;this.zone(z.x,z.y,70,e.damage*.8,'fire',{enemy:true,source:e,delay:1.4,once:true});e.nextAoe=Math.max(e.nextAoe,old||0);}
   }return;}
  if(e.cd>0)return;e.attackIndex++;e.cd=phase===3?5.5:6.5;e.intent24={left:1.25,total:1.25,angle:a,x:this.player.x,y:this.player.y,kind:phase===3&&s.rift>=20?'ring':phase===3&&s.rift>=10&&e.attackIndex%2===0?'ring':'fan'};
  if(phase===2&&e.attackIndex%2===0)for(let i=0;i<2;i++)this.spawn(D.enemyTypes[2],{elite:-1,x:e.x+(i?120:-120),y:e.y+70});
 };
 const enemies=G.updateEnemies;G.updateEnemies=function(dt){enemies.call(this,dt);if(!this.slice)return;for(const e of this.enemies){if(e.hp<=0||!e.mini&&!e.isBoss)continue;if((this.slice.rift>=3&&e.mini)||this.sliceHas('storm')){e.riftPulse24=(e.riftPulse24??8)-dt;if(e.riftPulse24<=0){e.riftPulse24=this.sliceHas('storm')?16:12;this.zone(this.player.x,this.player.y,65,e.damage*.65,'lightning',{enemy:true,source:e,delay:1.8,once:true});}}}};
 // Draw only enemy warnings once more above all player particles and large spell fields.
 const render=R.render;R.render=function(dt){render.call(this,dt);const g=this.g;if(!g.slice||!['playing','paused','levelup','gear','sliceChoice'].includes(g.state))return;const c=g.ctx;c.save();const zs=g.scale*(this.zoom25||1);c.setTransform(zs,0,0,zs,this.ox*zs,this.oy*zs);c.lineWidth=3;
  for(const z of g.zones.active)if(z.enemy&&z.delay>0){c.strokeStyle='#190d18';c.lineWidth=7;c.beginPath();c.arc(z.x,z.y,z.r,0,Math.PI*2);c.stroke();c.strokeStyle=z.element==='poison'?'#d4f55e':z.element==='lightning'?'#ffed84':'#ff8879';c.lineWidth=3;c.setLineDash([10,6]);c.stroke();c.setLineDash([]);c.font='bold 14px Arial';c.textAlign='center';c.fillStyle='#fff4da';c.strokeText('! '+z.delay.toFixed(1),z.x,z.y);c.fillText('! '+z.delay.toFixed(1),z.x,z.y);}
  for(const e of g.enemies){if(e.intent24){const z=e.intent24;c.strokeStyle='#ffcf88';c.lineWidth=3;for(const a of [z.angle-.45,z.angle+.45]){c.beginPath();c.moveTo(e.x,e.y);c.lineTo(e.x+Math.cos(a)*550,e.y+Math.sin(a)*550);c.stroke();}c.fillStyle='#ffe9b8';c.font='bold 14px Arial';c.textAlign='center';c.fillText(z.kind==='ring'?'LUKA W PIERŚCIENIU':'SALWA',e.x,e.y-70);}
   if(e.isBoss&&e.phase===3){c.strokeStyle=e.open24>0?'#9dffcb':'#ddbaff';c.lineWidth=3;c.beginPath();c.arc(e.x,e.y,e.r+10,0,Math.PI*2);c.stroke();}
  }if(X.meta().milestones[15]){c.strokeStyle='#c3a1ff';c.lineWidth=1.4;c.beginPath();c.ellipse(g.player.x,g.player.y+6,25,10,0,0,Math.PI*2);c.stroke();}c.restore();};
})(window.Aeren);


;

/* Module: js/slice-ui.js */
'use strict';
(function(A){const {Slice:X,Data:D,Save:S,U,Controls:C}=A,P=A.UI.prototype;
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const oldMenu=P.menu;P.campaignMenu=oldMenu;
 P.menu=function(){this.g.state='menu';this.hud.hidden=true;const r=S.readRun(),m=X.meta();this.overlay.innerHTML=`<main class="menu menu23 sliceMenu"><div class="eyebrow">Jeszcze jedna próba</div><h1 class="brand">AEREN</h1><div class="subtitle">Żelazna Pieczęć · próba przetrwania</div><p class="intro">Dwa wybory bohatera. Dwanaście synergii.<br>Jedna pieczęć do złamania.</p><nav>${r?this.button('Kontynuuj · '+D.heroes.find(h=>h.id===r.hero).name+' · '+U.time(r.time),'continue','','primary'):''}${this.button('Nowa próba · 12–16 minut','sliceSetup','',r?'':'primary')}${m.unlocked?this.button('RIFT · odblokowano '+Math.min(20,m.unlocked),'sliceSetup','rift'):''}${this.button('Rozwój i odkrycia','sliceProgress')}${this.button('Kampania i kolekcja','campaignMenu')}${this.button('Ustawienia','settings','menu')}${this.button('Sprawdź aktualizacje','updates')}${this.button('Wyjście z gry','exit23')}</nav><p class="hint">${C.label('up')} / ${C.label('left')} / ${C.label('down')} / ${C.label('right')} · ruch　${C.label('dash')} · unik<br>Autozapis · gra offline · kampania zachowana</p></main>`;this.focus();};
 P.sliceSetup=function(){const g=this.g,m=X.meta();this.g.state='sliceSetup';this.hud.hidden=true;this.sliceHero=['ilya','sol'].includes(this.sliceHero)?this.sliceHero:'ilya';this.sliceRift=U.clamp(this.sliceRift||0,0,Math.min(20,m.unlocked));this.sliceMode=this.sliceRift?'normal':this.sliceMode||'normal';this.sliceStart||='normal';this.sliceCurse||='none';const n=this.sliceRift,scale=X.scale(n),h=D.heroes.find(h=>h.id===this.sliceHero),mods=X.modifiers;
  this.panel('Żelazna Pieczęć',n?'RIFT '+n+' · najwyższy odblokowany '+m.unlocked:'Podstawowa próba · około 12–16 minut',`<div class="cards sliceHeroes">${D.heroes.filter(h=>['ilya','sol'].includes(h.id)).map(h=>`<button class="card ${h.id===this.sliceHero?'selected':''}" data-action="sliceHero" data-value="${h.id}"><h2>${h.icon} ${h.name}</h2><p>${h.passive}</p><p>${D.secondary[h.id].name} · PPM<br>${h.ultimate.name} · F</p></button>`).join('')}</div><div class="actions">${Object.entries(D.modes).map(([id,v])=>this.button(v.name,'sliceMode',id,id===this.sliceMode?'primary':'')).join('')}</div><p>${n?'RIFT używa średniego poziomu bazowego. ':''}Najpierw ulepszenie, potem więź, mutacja i trzy fazy Kustosza.</p><label class="riftSelector">RIFT <b>${n}</b> <input id="riftLevel24" type="range" min="0" max="${Math.min(20,m.unlocked)}" step="1" value="${n}" aria-label="Poziom RIFT"></label><p class="hint">${m.unlocked?'Możesz wracać do niższych poziomów.':'Wygraj podstawową próbę na średnim lub trudnym, aby odblokować RIFT 1.'} ${m.unlocked>20?'RIFT 21–100: w przygotowaniu.':''}</p><p>HP wrogów +${Math.round((scale.hp-1)*100)}% · obrażenia +${Math.round((scale.damage-1)*100)}% · ruch +${Math.round((scale.speed-1)*100)}% · nagrody +${Math.round((scale.reward-1)*100)}%<br>Rekord: ${m.best[n]?U.time(m.best[n]):'—'} · zwycięzcy: ${Object.entries(m.heroes).filter(([,r])=>r>=n).map(([id])=>D.heroes.find(h=>h.id===id)?.name).join(', ')||'brak'}<br>Pierwszy triumf: ${40+n*5} srebra, kryształ i ${n%5===0?5:1} żetonów. ${n<20?'Zwycięstwo odblokuje RIFT '+(n+1)+'.':'RIFT 21 pozostanie oznaczony jako niegotowy.'}</p><h3>Modyfikator startowy</h3><div class="actions">${[...X.starts,...(m.milestones[5]?[{id:'storm',name:'Trop Burzy',desc:'Pierwsze oferty: pioruny i woda.'}]:[])].map(s=>`<button class="btn ${s.id===this.sliceStart?'primary':''}" data-action="sliceStart" data-value="${s.id}" title="${esc(s.desc)}">${s.name}</button>`).join('')}</div><p>${esc(X.starts.find(s=>s.id===this.sliceStart)?.desc||'Pierwsze oferty prowadzą do pioruna i wody.')}</p>${n>=15?`<h3>Opcjonalna klątwa</h3><div class="actions">${X.curses.map(c=>this.button(c.name,'sliceCurse',c.id,c.id===this.sliceCurse?'primary':'')).join('')}</div><p>${X.curses.find(c=>c.id===this.sliceCurse).desc}</p>`:''}<p>${n>=5?'Przed walką zobaczysz wylosowany modyfikator świata.':'Bez losowego modyfikatora świata.'}</p><div class="actions">${this.button('Rozpocznij · '+h.name,'sliceLaunch','','primary')}${this.button('Menu','menu')}</div><details><summary>Kamienie milowe i dalszy rozwój</summary>${X.milestones.map(t=>`<p>RIFT ${t.level} · ${t.name}: ${t.reward}</p>`).join('')}</details>`,null);
  this.overlay.querySelector('#riftLevel24').addEventListener('input',e=>{this.sliceRift=Number(e.target.value);this.sliceSetup();this.overlay.querySelector('#riftLevel24').focus();});
 };
 P.sliceLaunch=function(options){const o=options||{slice:true,rift:this.sliceRift||0,mode:this.sliceMode||'normal',mission:0,modifier:this.sliceStart||'normal',curse:this.sliceCurse||'none'},hero=options?.hero||this.sliceHero||'ilya';o.seed??=Math.floor(Math.random()*999999999);const mods=X.worldFor(o.seed,o.rift);if(mods.length&&!o.accepted){this.launch24={...o,hero,accepted:true};this.g.state='sliceSetup';this.hud.hidden=true;this.panel('Warunki wyprawy','RIFT '+o.rift,`<div class="cards">${mods.map(id=>{const m=X.modifiers.find(x=>x.id===id);return`<article class="card"><h2>${m.name}</h2><p>${m.desc}</p></article>`;}).join('')}</div><div class="actions">${this.button('Wejdź do szczeliny','sliceAccept','','primary')}${this.button('Zmień przygotowanie','sliceSetup')}</div>`,null);return;}this.g.start(hero,o);};
 P.sliceProgress=function(){const m=X.meta();this.g.state='sliceProgress';this.hud.hidden=true;this.panel('Odkrycia Pieczęci','Więcej możliwości budowania postaci',`<p>Synergie: ${Object.keys(m.discoveries).length}/12 · najwyższy RIFT: ${m.unlocked} · rekord przeżycia: ${U.time(m.record)}</p><div class="catalog">${D.synergies.filter(s=>X.synergies.includes(s.id)).map(s=>`<article><h3>${m.discoveries[s.id]?'✦':'◇'} ${s.name}</h3><p>${D.byId[s.a].name} + ${D.byId[s.b].name}<br>${s.desc}</p></article>`).join('')}</div><p>W Pieczęci stałe premie korzystają maksymalnie z dwóch rang każdego węzła. Pełne drzewo nadal działa w kampanii.</p><div class="actions">${this.button('Rozwój bohaterów','meta')}${this.button('Kuźnia i kolekcja','campaignMenu')}${this.button('Menu','menu')}</div>`);};
 P.sliceSkillDetail=function(a){const g=this.g,l=g.has(a.id),next=l+1,s=g.stats,d=s.damage/g.player.hero.damage,scale=n=>1+(n-1)*.22,pct=n=>Math.round(n*1000)/10;
  if(a.type==='passive'){const e=a.effect,unit=['area','speed'].includes(e.stat)?'%': ' pp.';return `${pct(e.value*l)} → ${pct(e.value*next)}${unit} ${e.stat==='crit'?'szansy krytycznej':e.stat==='area'?'promienia zaklęć':'prędkości ruchu'}.`;}
  if(a.type==='active'){const n={roots:45,meteor:90,blink:45,vortex:15}[a.id]||18;return `${l?(n*scale(l)*d).toFixed(0):0} → ${(n*scale(next)*d).toFixed(0)} obrażeń ${a.id==='vortex'?'na impuls':''}. ${a.desc}`;}
  const power=n=>a.id==='orbit'?s.damage*.45*(1+n*.12):s.damage*(1+(n-1)*.18)*(a.id==='lightning'?1.7:a.id==='familiar'?.9:1.3),count=n=>a.id==='orbit'?n+1:a.id==='familiar'?1+Math.floor((n-1)/2):['fire','oil','wet','poison','ice'].includes(a.id)&&n>=4?2:1,cd=a.id==='orbit'?.42:(a.id==='lightning'?3:a.id==='familiar'?1.1:2.7)/(1+s.cdr*.5);return `${l?power(l).toFixed(1):0} → ${power(next).toFixed(1)} obrażeń na trafienie. ${count(next)} ${a.id==='orbit'?'orbity':'pocisk(i)'} · co ${cd.toFixed(2)} s. ${a.desc}`;
 };
 const card=P.skillCard;P.skillCard=function(a){if(!this.g.slice)return card.call(this,a);const g=this.g,links=g.sliceLinks(a.id),ready=links.find(x=>x.ready&&!g.synergy(x.s.id)),main=D.weaponById[g.weapons[0].id],match=typeof a.effect==='string'&&a.effect===main.element;return `<button class="card sliceCard" data-action="choose" data-value="${a.id}"><span class="label">${ready?'✦ TWORZY SYNERGIĘ':match?'PASUJE DO BRONI':links.length?'SKŁADNIK SYNERGII':'NIEZALEŻNY WYBÓR'}</span><span class="symbol spellArt24">${A.Art23.icon(typeof a.effect==='string'?a.effect:'stone',A.colors[a.effect]||'#ebd38f')}</span><h3>${a.name}</h3><p>${esc(this.sliceSkillDetail(a))}</p><p class="synergyHint24">${links.slice(0,2).map(x=>`${x.ready?'✓ Masz':'Brakuje'}: ${D.byId[x.other].name} → ${x.s.name}<br>${x.s.desc}`).join('<br>')}</p><span class="bottom">POZIOM ${g.has(a.id)} → ${g.has(a.id)+1}</span></button>`;};
 const level=P.levelUp;P.levelUp=function(choices){if(!this.g.slice)return level.call(this,choices);this.panel('Wybierz swoją ścieżkę','Poziom '+this.g.player.level+' · jeden wybór',`<div class="cards">${choices.map((a,i)=>this.g.slice.curse==='blind'&&i===2?`<button class="card" data-action="choose" data-value="${a.id}"><h3>Nieznana więź</h3><p>Klątwa ukrywa nazwę i działanie tej karty. Pozostałe dwie oferty są jawne.</p></button>`:this.skillCard(a)).join('')}</div><p class="hint">Co trzeci awans: wyposażenie zamiast umiejętności. Strzałki i Enter wybierają.</p>`,null);};
 const gear=P.gear;P.gear=function(choices){gear.call(this,choices);if(this.g.slice){const h=this.overlay.querySelector('.panelhead h1');if(h)h.textContent='Wyposażenie · jeden wybór';const sub=this.overlay.querySelector('.panelhead .label');if(sub)sub.textContent='Co trzeci awans';}};
 P.sliceChoice=function(){const g=this.g,c=g.slice.choice;let cards=[];const mk=(id,name,desc)=>`<button class="card sliceCard" data-action="sliceChoice" data-value="${id}"><h3>${name}</h3><p>${desc}</p></button>`;
  if(c.kind==='mutation'){const selected=c.weapon||c.selectedWeapon||g.weapons[0].id;this.mutationWeapon24=selected;const w=g.weapons.find(w=>w.id===selected);cards=X.mutations[selected].map(m=>mk(selected+':'+m[0],m[1],m[2]+` Obecnie: ${w.level}/5 → co najmniej 3/5. Zastępuje poprzednią mutację tej broni.`));if(selected==='stormrod'&&X.meta().milestones[10])cards.push(mk('stormrod:water','Rezonans Berła','Trafienia nakładają wodę. Z Iskrą burzy tworzą dodatkowy łańcuch. Zastępuje obecną mutację.'));}
  if(c.kind==='risk')cards=[mk('safe','Bezpieczna ścieżka','Leczenie 35% HP i mała mikstura.'),mk('danger','Niebezpieczna ścieżka','Gwarantowana synergia i mutacja. Do końca próby: +8% ruchu wrogów oraz +12% Twoich obrażeń.'),mk('mystery','Tajemnicza ścieżka','Poznasz dodatkowy modyfikator świata i wybierzesz potężny dar. Modyfikator działa do końca próby.')];
  if(c.kind==='gift')cards=[mk('mirror','Zwierciadło','+1 pocisk wszystkich broni, −15% obrażeń. Przebudowuje salwy.'),mk('bastion','Bastion','+14 pancerza, −8% ruchu. Wytrwaj w finałowym kryzysie.'),mk('ember','Płonące echo','Co czwarta salwa każdej broni wybucha ogniem w promieniu 80.')];
  if(c.kind==='bridge')cards=[...new Set([c.id,'crit','orbit'])].filter(id=>g.has(id)<D.byId[id].max).map(id=>mk(id,D.byId[id].name,this.sliceSkillDetail(D.byId[id])+' '+g.sliceLinks(id).map(x=>x.s.name).join(' · ')));
  this.panel(c.kind==='mutation'?'Mutacja broni':c.kind==='risk'?'Wybierz ścieżkę':c.kind==='gift'?'Dar Pieczęci':'Pierwsza więź',c.reason||'Decyzja zmienia przebieg runu',`${c.kind==='mutation'&&!c.weapon?`<div class="actions">${g.weapons.map(w=>this.button(D.weaponById[w.id].name,'mutationWeapon',w.id,w.id===this.mutationWeapon24?'primary':'')).join('')}</div>`:''}<div class="cards">${cards.join('')}</div>`,null);};
 const pause=P.pause;P.pause=function(){pause.call(this);if(this.g.slice){const s=this.g.slice;this.overlay.querySelector('.panelhead .label').textContent='Żelazna Pieczęć · '+this.g.mode.name;this.overlay.querySelector('.panel>p').textContent=U.time(this.g.time)+' · '+(s.rift?'RIFT '+s.rift:'podstawowa próba');this.overlay.querySelector('.panel').insertAdjacentHTML('beforeend',`<h2>Pieczęć · RIFT ${s.rift}</h2><p>${s.worldMods.map(id=>{const m=X.modifiers.find(m=>m.id===id);return m.name+': '+m.desc;}).join('<br>')||'Bez modyfikatora świata.'}<br>Klątwa: ${X.curses.find(c=>c.id===s.curse)?.name||'brak'}<br>Główny cel: pokonaj finałowego Kustosza, który pojawi się o 13:00.</p>`);}};
 const results=P.results;P.results=function(r){if(!this.g.slice)return results.call(this,r);this.hud.hidden=true;const m=X.meta(),g=this.g,missing=D.synergies.filter(s=>X.synergies.includes(s.id)&&!g.synergy(s.id)).find(s=>!!g.has(s.a)!==!!g.has(s.b)),next=r.win&&m.unlocked>r.rift&&r.rift<20,label=next?'NASTĘPNY RIFT — RIFT '+(r.rift+1):r.rift?'JESZCZE RAZ — RIFT '+r.rift:'JESZCZE RAZ — '+r.hero.toUpperCase()+' / '+D.modes[r.mode].name.toUpperCase();
  this.panel(r.win?'Pieczęć złamana':'Jeszcze jedna próba',r.rift?'RIFT '+r.rift:'Żelazna Pieczęć',`<p>${r.win?'Zwycięstwo. Najwyższy odblokowany RIFT: '+m.unlocked+'.':'Pokonał Cię: '+esc(r.cause)+'.'}</p><div class="stats">${[[U.time(r.time),'Czas'],[U.time(r.record),'Rekord przeżycia'],[r.kills,'Pokonani'],['+'+r.reward,'Odłamki']].map(([n,t])=>`<div class="stat"><strong>${n}</strong><span>${t}</span></div>`).join('')}</div><p>Najlepsza broń: ${r.bestWeapon}<br>Główna synergia: ${D.synergies.find(s=>s.id===r.synergy)?.name||'jeszcze nie utworzona'}<br>${missing?'Brakował jeden składnik: '+D.byId[g.has(missing.a)?missing.b:missing.a].name+' → '+missing.name:'Odkryto '+Object.keys(m.discoveries).length+'/12 synergii.'}<br>Rekord RIFT: ${m.best[r.rift]?U.time(m.best[r.rift]):'—'} · ${r.hero}: ukończony RIFT ${m.heroes[r.heroId]||0}<br>Klątwa: ${X.curses.find(c=>c.id===r.curse)?.name} · nagroda ×${r.factor.toFixed(2)}<br>${r.worldMods.map(id=>X.modifiers.find(m=>m.id===id).name).join(' · ')}<br>${X.milestones.find(t=>t.level===r.rift&&r.win)?.reward||''}</p><p class="synergyHint24">Następna próba: ${r.heroId==='ilya'?'połącz korzenie z Leśnym towarzyszem':'połącz Kulę ognia z Czarną rosą'}. Możesz też wybrać opcjonalny modyfikator poniżej.</p><div class="actions"><button class="btn primary retry24" data-action="sliceRetry" data-value="${next?'next':'same'}">${label}</button></div><div class="actions">${this.button('Zmień przygotowanie','sliceSetup')}${this.button('Rozwój','sliceProgress')}${this.button('Menu','menu')}</div><div class="actions">${X.starts.map(s=>`<button class="btn" data-action="sliceRetryMod" data-value="${s.id}" title="${s.desc}">${s.name}</button>`).join('')}</div>${this.wallet23()}`,null);};
 const action=P.action;P.action=function(id,value){const g=this.g;
  if(id==='campaignMenu'){this.campaignMenu();return;}if(id==='sliceProgress'){this.sliceProgress();return;}
  if(id==='sliceSetup'){if(value==='rift')this.sliceRift=Math.min(20,X.meta().unlocked);this.sliceSetup();return;}
  if(['sliceHero','sliceMode','sliceStart','sliceCurse'].includes(id)){this[id]=value;this.sliceSetup();return;}
  if(id==='sliceLaunch'){this.sliceLaunch();return;}if(id==='sliceAccept'){this.sliceLaunch(this.launch24);return;}
  if(id==='mutationWeapon'){if(!g.weapons.some(w=>w.id===value)||g.slice.choice?.kind!=='mutation'||g.slice.choice.weapon)return;g.slice.choice.selectedWeapon=value;this.sliceChoice();g.saveRun();return;}
  if(id==='sliceChoice'){g.chooseSlice(value);return;}
  if(id==='sliceRetry'||id==='sliceRetryMod'){const r=g.result,rift=id==='sliceRetry'&&value==='next'?r.rift+1:r.rift;g.start(r.heroId,{slice:true,rift,mission:0,mode:r.mode,curse:r.curse,modifier:id==='sliceRetryMod'?value:r.modifier,seed:r.seed});return;}
  return action.call(this,id,value);
 };
})(window.Aeren);

;

/* Module: js/compact-hud.js */
'use strict';
(function(A){const P=A.UI.prototype;
 const build=P.buildHUD;P.buildHUD=function(){build.call(this);this.hud.classList.add('compact24');this.hud.insertAdjacentHTML('beforeend','<div id="tutorial24"></div>');};
 const update=P.update;P.update=function(dt){update.call(this,dt);if(this.hud.hidden||!document.getElementById('heroStats24'))return;const g=this.g,s=g.stats,w=g.weapons[0],st=A.weaponStats23(w,g),opt=A.Save.data.settings;
  const size={small:.85,medium:1,large:1.1}[opt.hudSize]||1,scale=Math.min(size,(innerWidth-24)/1180,innerHeight/760);this.hud.style.setProperty('--compact-scale',scale);this.hud.classList.toggle('slice24',!!g.slice);
  if(this.lastHUD>0)return;
  document.getElementById('heroStats24').innerHTML=`<span title="Obrażenia jednego pocisku broni głównej, przed krytykiem i pancerzem celu. Uwzględniają przedmioty, poziom broni i aktywne modyfikatory.">ATK <b>${st.damage.toFixed(1)}</b></span><span title="Szansa krytyka z uwzględnieniem przedmiotów.">KRYT <b>${(A.combatCrit25(s,w)*100).toFixed(1)}%</b></span><span title="Pancerz po premiach przedmiotów. Redukcja ${Math.round(s.armor/(s.armor+80)*100)}%.">PANC. <b>${s.armor.toFixed(1)}</b></span><span title="Przyspieszenie odnowienia zaklęć. +20% tempa odpowiada około 16,7% krótszemu odnowieniu.">CDR <b>${(s.cdr*100).toFixed(1)}%</b></span><span title="Faktyczna liczba salw broni głównej na sekundę, po premiach przedmiotów.">ATAK/S <b>${(1/st.interval).toFixed(2)}</b></span>`;
  if(!g.slice){document.getElementById('tutorial24').textContent='';return;}
  const r=g.slice;document.getElementById('timer-text').textContent=`${r.rift?'RIFT '+r.rift:'PIECZĘĆ'} · ${g.mode.name} · ${A.U.time(g.time)}`;document.getElementById('objective').textContent=g.boss?`Kustosz · faza ${g.boss.phase}${g.boss.phase===3?g.boss.open24>0?' · ATAKUJ':' · OSŁONA':''}`:`${g.directorPhase} · finał za ${A.U.time(Math.max(0,780-g.time))}`;this.hud.querySelector('.missionline24 i').style.width=Math.min(100,g.time/780*100)+'%';
  const tasks=[['move',A.Controls.label('up')+'/'+A.Controls.label('left')+'/'+A.Controls.label('down')+'/'+A.Controls.label('right')+' — ruch'],['dash',A.Controls.label('dash')+' — unik'],['secondary',A.Controls.label('secondary')+' — moc bohatera'],['skill',A.Controls.label('skill0')+' — zaklęcie'],['potion',A.Controls.label('potion')+' — mikstura']];document.getElementById('tutorial24').textContent=g.time<65?tasks.filter(([id])=>!r.tutorial[id]).map(([,t])=>t).join('　·　'):'';
  this.hud.querySelector('.treasury23').title='Złoto tej wyprawy. Waluty konta są w menu i podsumowaniu.';
 };
})(window.Aeren);

;

/* Module: js/presentation.js */
'use strict';
(function(A){
 const {Data:D,Save:S,U}=A,G=A.Game.prototype,P=A.UI.prototype;
 const colors={fire:'#ffab48',ice:'#9cecff',nature:'#70ed9c',lightning:'#ffe077',poison:'#bbef60',blood:'#ff567d',arcane:'#c78cff',stone:'#e3c78c',dash:'#74eddf',oil:'#b98edb',water:'#6bdcf4'};
 const paths={
  fire:'M50 15Q63 40 69 31Q90 64 64 82Q28 94 23 64Q23 45 42 32Q35 56 48 53Q62 43 50 15Z',
  ice:'M50 15V85M20 32L80 68M20 68L80 32M40 22L50 32L60 22M40 78L50 68L60 78M22 45L32 40L29 28M71 72L68 60L78 55M22 55L32 60L29 72M71 28L68 40L78 45',
  nature:'M27 76Q18 27 73 22Q87 67 27 76ZM25 81L64 37M43 62L40 44M52 52L68 51',
  lightning:'M57 15L27 53H46L37 86L78 42H56Z',
  poison:'M35 20H65M40 20V44L24 73Q21 83 35 84H68Q79 82 76 72L60 44V20M31 64H70M43 70L47 75M61 62L63 69',
  blood:'M50 16Q39 38 29 53Q11 86 50 88Q89 86 71 53ZM37 61Q28 75 45 79',
  arcane:'M50 15L82 33V68L50 86L18 68V33ZM18 33L82 68M82 33L18 68M50 15V86',
  stone:'M50 16L80 28L76 64L50 85L24 64L20 28ZM50 29V69M34 48H66',
  dash:'M18 72L49 53L34 49L81 24L61 51L73 54L36 77M20 31H41M14 43H31',
  power:'M50 15L80 35L72 74L50 87L28 74L20 35ZM50 29L64 51L50 72L36 51Z',
  tempo:'M50 17V26M50 74V83M17 50H26M74 50H83M26 26L33 33M67 67L74 74M26 74L33 67M67 33L74 26M50 27A23 23 0 1 0 50 73A23 23 0 1 0 50 27M50 36L60 50L50 64L40 50Z',
  shell:'M22 30L50 16L78 30L70 67L50 85L30 67ZM33 33L50 28L67 33M33 47L50 41L67 47M36 61L50 56L64 61',
  heart:'M50 80Q10 53 24 33Q36 18 50 38Q64 18 76 33Q90 53 50 80ZM50 38V70M34 44L50 56L67 44',
  focus:'M28 19H72M28 81H72M33 22Q32 40 48 50Q32 60 33 78M67 22Q68 40 52 50Q68 60 67 78M39 68L50 57L61 68ZM39 31H61L50 43Z',
  eye:'M13 50Q50 14 87 50Q50 86 13 50ZM50 34A16 16 0 1 0 50 66A16 16 0 1 0 50 34M50 41V59M21 30L29 34M71 34L79 30',
  step:'M21 69Q67 77 72 45Q73 21 53 24Q36 26 42 41Q46 50 55 42M16 80Q80 91 83 43M18 58L39 59',
  reach:'M50 22A28 28 0 1 0 50 78A28 28 0 1 0 50 22M50 12V33M50 67V88M12 50H33M67 50H88M43 50L50 43L57 50L50 57Z',
  fang:'M29 20L71 20L65 50L42 83L47 52L32 42ZM47 25L58 39L48 48',
  star:'M50 14L59 41L85 50L59 59L50 86L41 59L15 50L41 41ZM50 28A22 22 0 1 0 50 72A22 22 0 1 0 50 28',
  bow:'M34 17Q89 50 34 83L48 50ZM19 50H83M71 40L83 50L71 60',
  spear:'M23 82L68 31M54 31L77 15L73 42ZM21 71L33 82',
  hammer:'M32 81L59 41M34 28L47 15L79 42L66 56ZM31 73L40 82',
  scythe:'M29 84L58 23M30 26Q77 10 86 65Q65 40 48 41',
  staff:'M36 83L56 35M47 18L61 12L72 24L58 39L44 32ZM37 65L49 70',
  daggers:'M20 77L57 29L66 16L69 39L33 79M20 65L39 81M56 82L75 55L81 34L65 44L46 70',
  potion:'M39 18H61V35L77 56V75L65 85H35L23 75V56L39 35ZM28 57H72M39 64V73',
  gold:'M50 17A28 33 0 1 0 50 83A28 33 0 1 0 50 17M50 29A17 21 0 1 0 50 71A17 21 0 1 0 50 29',
  crystal:'M50 14L75 36L67 74L50 87L33 74L25 36ZM50 14L42 52L50 87M42 52L75 36',
  chest:'M19 41L28 27H72L81 41V78H19ZM19 47H81M43 44H57V61H43ZM28 57V70M72 57V70',
  arsenal:'M22 79L67 24L74 14L75 32M25 15L32 26L78 80M20 64L37 78M63 78L80 64',
  fountain:'M25 76H75M34 65H66M50 19Q28 45 39 54Q50 65 61 54Q72 45 50 19ZM20 39L28 51M80 39L72 51',
  lock:'M28 45H72V80H28ZM36 45V32Q36 13 50 17Q64 13 64 32V45M50 56V69',
  empty:'M32 32L68 68M68 32L32 68',
  interact:'M29 76L20 51Q18 42 26 43L36 52V24Q37 16 42 24V45V16Q48 11 50 18V44V21Q57 16 59 24V46V31Q66 26 67 34V63L59 80Z'
 };
 const itemArt={power:['power','fire'],tempo:['tempo','stone'],shell:['shell','stone'],heart:['heart','nature'],focus:['focus','arcane'],eye:['eye','lightning'],step:['step','dash'],reach:['reach','arcane'],blood:['fang','blood'],star:['star','lightning']};
 const names={power:'Pieczęć Mocy',tempo:'Koło Wojny',shell:'Łuska Strażnika',heart:'Serce Gaju',focus:'Zegar Otchłani',eye:'Oko Łowcy',step:'Nić Wichru',reach:'Krąg Horyzontu',blood:'Rubinowy Kieł',star:'Kompas Losu'};
 A.Presentation={colors,paths,itemArt};
 Object.assign(paths,{roots:'M50 16V50L23 82M50 50L77 82M50 64V85M39 65L22 62M63 68L78 60M50 43L31 28M50 34L68 20',meteor:'M77 14L54 39M88 31L66 49M54 18L42 40M41 39A23 23 0 1 0 41 85A23 23 0 1 0 41 39M28 60L40 51L53 67L38 75Z',vortex:'M80 40Q69 13 42 24Q16 33 24 63Q37 90 65 73Q85 61 67 43Q52 26 39 46Q31 64 49 67Q62 68 59 55',orbit:'M50 18A32 32 0 1 0 50 82A32 32 0 1 0 50 18M50 39L61 50L50 61L39 50ZM24 19L33 27L24 35L15 27ZM76 65L85 73L76 81L67 73Z',familiar:'M23 23L38 38L62 38L77 23L74 63L50 84L26 63ZM35 52L43 55M57 55L65 52M43 68L50 73L57 68',oil:'M30 22H61L68 35V73L58 82H25V35L30 22ZM61 39L77 47L83 38M33 49H56M33 62H56',wet:'M50 14Q14 52 25 71Q50 96 75 71Q86 52 50 14M34 65Q32 76 45 78',blink:paths.dash,crit:paths.eye,speed:paths.step,area:paths.reach,attack:paths.bow,cone:paths.fire});
 const cache=new Map();
 A.icon25=function(kind='arcane',element='arcane',rarity=0){const key=[kind,element,rarity].join(':');if(cache.has(key))return cache.get(key);const col=colors[element]||element||colors.arcane,frame=D.rarity[rarity]?.color||'#c6ab72',path=paths[kind]||paths[element]||paths.arcane;
  const result=`<svg class="icon25" viewBox="0 0 100 100" aria-hidden="true"><path d="M17 5H83L95 17V83L83 95H17L5 83V17Z" fill="#071426" stroke="${frame}" stroke-width="3"/><path d="M21 11H79L89 21V79L79 89H21L11 79V21Z" fill="${col}" fill-opacity=".13" stroke="${col}" stroke-opacity=".4"/><path d="M18 25V18H25M75 18H82V25M18 75V82H25M75 82H82V75" fill="none" stroke="${frame}" stroke-width="2"/><g transform="translate(8 8) scale(.84)" fill="none" stroke="${col}" stroke-linecap="round" stroke-linejoin="round"><path d="${path}" stroke-width="9" opacity=".13"/><path d="${path}" stroke-width="3.2"/></g></svg>`;cache.set(key,result);return result;};
 A.weaponIcon25=w=>A.icon25(({thornbow:'bow',crossbow:'bow',runicHammer:'hammer',iceblade:'spear',stormrod:'staff',orb:'reach',void:'arcane',cinder:'fire'})[w.id]||w.id,w.element,w.rarity);
 A.combatCrit25=(stats,weapon)=>weapon?Math.min(.63,stats.crit+A.weaponTraits(weapon.id,weapon.level).crit):stats.crit;
 for(const t of D.itemTemplates)t.name=names[t.id]||t.name;
 const itemStats=G.itemStats;G.itemStats=function(item){const r=itemStats.call(this,item);item.name=names[item.id]||item.name;if(item.id==='blood')item.desc+=' Wspólny limit leczenia: 2 HP/s.';if(item.id==='star')item.desc=`Szczęście +${Math.round(item.mods.luck*1000)/10}%. Współczynnik wag rzadkości ×${(1+item.mods.luck*.2).toFixed(3)}; nie jest to bezpośrednia szansa dropu.`;return r;};
 const load=G.loadRun;G.loadRun=function(){const ok=load.call(this);if(ok)for(const i of this.items)this.itemStats(i);return ok;};
 const gear=P.gear;P.gear=function(choices){gear.call(this,choices);this.overlay.querySelectorAll('[data-action="gear"]').forEach((el,i)=>{const x=choices[i],symbol=el.querySelector('.symbol');if(!symbol)return;symbol.innerHTML=x.kind==='weapon'?A.weaponIcon25({...D.weaponById[x.id],rarity:x.rarity}):A.icon25(...(itemArt[x.id]||['arcane','arcane']),x.rarity);el.querySelector('h3').textContent=x.kind==='weapon'?x.name:names[x.id]||x.name;el.title=x.desc||'';if(x.kind==='item')el.querySelector('p').textContent=x.desc;});};
 const build=P.buildHUD;P.buildHUD=function(){this.states25={};return build.call(this);};
 P.decorateIcons25=function(){const data=[...D.itemTemplates,...D.weapons,...D.abilities,...D.synergies,...D.mastery];for(const el of this.overlay.querySelectorAll('.symbol')){if(el.querySelector('.icon25'))continue;const card=el.closest('article,button,.card'),name=card?.querySelector('h3,h2')?.textContent?.trim(),d=data.find(d=>d.name===name);if(d){el.innerHTML=itemArt[d.id]?A.icon25(...itemArt[d.id],d.rarity||0):D.weaponById[d.id]?A.weaponIcon25(d):A.icon25(d.id,typeof d.effect==='string'?d.effect:d.element||'stone',d.rarity||0);}else el.innerHTML=A.icon25('lock','stone');el.classList.add('spellArt24');}
  for(const el of this.overlay.querySelectorAll('.sliceHeroes h2')){const id=el.closest('[data-value]')?.dataset.value,h=D.heroes.find(h=>h.id===id);if(h)el.innerHTML=`<span class="smallPortrait25">${A.Art23.portrait(h)}</span>${h.name}`;}
 };
 const panel=P.panel;P.panel=function(...args){const r=panel.apply(this,args);this.decorateIcons25();return r;};
 const decorated=P.decorateIcons25;P.decorateIcons25=function(){decorated.call(this);for(const card of this.overlay.querySelectorAll('.card')){if(card.querySelector('.symbol,.smallPortrait25'))continue;const name=card.querySelector('h2,h3')?.textContent||'',choice=card.dataset.value||'',weapon=D.weaponById[choice.split(':')[0]],mod=A.Slice.modifiers.find(m=>m.name===name),kind=weapon?.id||(/klątw|skaż|ciem|truc/i.test(name)?'eye':/lód|mróz/i.test(name)?'ice':/ogie|żar|słoń/i.test(name)?'fire':mod?'power':'star');card.insertAdjacentHTML('afterbegin',`<span class="symbol spellArt24">${weapon?A.weaponIcon25(weapon):A.icon25(kind,mod?'arcane':'stone')}</span>`);}};
 const skill=P.skillCard;P.skillCard=function(a){const div=document.createElement('div');div.innerHTML=skill.call(this,a);const sym=div.querySelector('.symbol');if(sym)sym.innerHTML=A.icon25(a.id,typeof a.effect==='string'?a.effect:'stone',a.rarity||0);const desc=div.querySelector('p');if(desc){desc.title=desc.textContent;const details=desc.textContent;desc.textContent=details.split(/(?<=\.)\s+/).slice(0,2).join(' ');}return div.innerHTML;};
 const update=P.update;P.update=function(dt){update.call(this,dt);if(this.hud.hidden||this.lastHUD>0)return;const g=this.g,p=g.player,slots=[...this.hud.querySelectorAll('#abilities>.skill23')],active=[0,1,2].map(i=>D.byId[p.active[i]]);this.states25||={};const defs=[{id:'attack',kind:g.weapons[0].id,element:D.weaponById[g.weapons[0].id].element,cd:g.weapons[0].cd,available:true},{id:'secondary',kind:{ilya:'bow',sol:'fire',niva:'ice',orren:'hammer',vesper:'blood'}[p.hero.id],element:{ilya:'nature',sol:'fire',niva:'ice',orren:'stone',vesper:'blood'}[p.hero.id],cd:p.secondaryCd,available:true},...active.map((a,i)=>({id:'skill'+i,kind:a?.id||'lock',element:typeof a?.effect==='string'?a.effect:'arcane',cd:a?p.cooldowns[a.id]:0,available:!!a})),{id:'ultimate',kind:p.hero.id==='ilya'?'nature':p.hero.id==='sol'?'fire':'arcane',element:p.hero.id==='ilya'?'nature':p.hero.id==='sol'?'fire':'arcane',cd:p.ultCd,available:true}];
  slots.forEach((el,i)=>{const d=defs[i];if(!d)return;const now=g.time,cd=Math.max(0,d.cd||0),last=this.states25[d.id];let state=last||{cd,changed:now,max:Math.max(cd,1)};if(cd>state.cd+.12){state.changed=now;state.cast=now;state.max=cd;}if(cd===0&&state.cd>0){state.ready=now;if(d.id==='ultimate')A.Audio.play('level');}state.cd=cd;this.states25[d.id]=state;el.dataset.state25=!d.available?'locked':cd>0?'cooldown':'ready';el.classList.toggle('cast25',now-(state.cast??-10)<.25);el.classList.toggle('arrived25',now-(state.ready??-10)<.65);el.style.setProperty('--cooldown25',Math.min(1,cd/state.max)*360+'deg');el.querySelector('span').innerHTML=A.icon25(d.kind,d.element,d.id==='ultimate'?3:0);let n=el.querySelector('em');if(cd>0){if(!n){n=document.createElement('em');el.append(n);}n.textContent=cd<10?cd.toFixed(1):Math.ceil(cd);}else n?.remove();});
  for(const [id,kind,col,value] of [['gold-text','gold','lightning',g.gold],['shards24','crystal','ice',S.data.currency],['crystals24','crystal','arcane',S.meta3.wallet.crystals]]){const el=document.getElementById(id);if(el)el.innerHTML=A.icon25(kind,col)+'<b>'+value.toLocaleString('pl')+'</b>';}
  [...this.hud.querySelectorAll('#utilitySlots24 .skill23')].forEach((el,i)=>{const symbol=el.querySelector('span');if(symbol)symbol.innerHTML=A.icon25(i?'potion':'dash',i?'blood':'dash');});
  const interact=this.hud.querySelector('.interactKey24 .utilIcon24');if(interact)interact.innerHTML=A.icon25('interact','stone');
 };
})(window.Aeren);

;

/* Module: js/sanctuary.js */
'use strict';
(function(A){const {Data:D,Save:S,Slice:X,U}=A,P=A.UI.prototype;
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const wallets={shards:['Odłamki bohatera','Za wyprawy. Odblokowują bohaterów oraz rozwijają ich statystyki, PPM i F.','crystal','ice'],silver:['Warsztat srebra','Za bossów, misje i wyzwania. Ułatwienia konta i jakość nagród.','gold','stone'],crystals:['Kryształy Otchłani','Za pierwsze triumfy i trudne wyzwania. Unikalne bronie i warianty F.','crystal','arcane'],tokens:['Pracownia wyglądu','Za wyzwania. Wyłącznie kosmetyka, bez premii bojowych.','star','dash']};
 P.wallet23=function(){return `<div class="wallet23 wallet25">${Object.entries(wallets).map(([id,[name,desc,kind,col]])=>`<span title="${desc}">${A.icon25(kind,col)}<b>${id==='shards'?S.data.currency:S.meta3.wallet[id]}</b><small>${id==='silver'?'Srebro':id==='tokens'?'Żetony':name}</small></span>`).join('')}</div>`;};
 P.menu=function(){this.g.state='menu';this.hud.hidden=true;this.overlay.dataset.modal='false';const run=S.readRun(),m=X.meta(),hero=D.heroes.find(h=>h.id===(run?.hero||this.sliceHero||'ilya')),challenge=D.challenges23.find(c=>!S.meta3.receipts['challenge:'+c.id]),last=this.g.result||Object.values(m.results).at(-1);
  this.overlay.innerHTML=`<main class="home25"><header><div><b class="brand25">AEREN</b><small>KRONIKI OTCHŁANI · ${D.version}</small></div>${this.wallet23()}</header><section class="homeGrid25"><aside class="heroScene25"><div class="heroSeal25">${A.Art23.portrait(hero)}</div><h2>${hero.name}</h2><p>${hero.passive}</p><span>STRAŻNIK ŻELAZNEJ PIECZĘCI</span></aside><nav><span class="label">TWOJA NASTĘPNA WYPRAWA</span>${run?this.button('Kontynuuj · '+U.time(run.time),'continue','','primary'):''}${this.button('Nowa wyprawa','expedition25','',run?'':'primary')}${this.button(m.unlocked?'RIFT · do poziomu '+Math.min(20,m.unlocked):'RIFT · wymagany triumf','rift25')}${this.button('Sanktuarium','sanctuary25','shards')}${this.button('Archiwum','archive25')}${this.button('Ustawienia','settings','menu')}${this.button('Wyjście z gry','exit23','','ghost')}</nav><aside class="journal25"><span class="label">KRONIKA PROFILU</span><h3>Ostatnia próba</h3><p>${last?`${last.win?'Zwycięstwo':'Upadek'} · ${U.time(last.time)} · ${last.kills} pokonanych`:m.record?'Rekord przeżycia: '+U.time(m.record):'Twoja historia dopiero się zaczyna.'}</p><h3>Najwyższy RIFT</h3><strong>${Math.min(20,m.unlocked)}</strong><h3>Aktywne wyzwanie</h3><p>${challenge?challenge.name+' · '+(S.meta3.challenges[challenge.id]||0)+' / '+challenge.goal:'Wszystkie wyzwania ukończone'}</p><h3>Odkrycia</h3><p>${Object.keys(m.discoveries).length} / 12 synergii Pieczęci</p></aside></section><footer>Strzałki — wybór　Enter — zatwierdź　Esc — powrót · Postęp zapisuje się lokalnie</footer></main>`;this.focus();};
 P.expedition25=function(){this.panel('Nowa wyprawa','Wybierz swoją drogę',`<div class="cards">${this.button('Żelazna Pieczęć · próba 12–16 minut','sliceSetup','','primary')}${this.button('Kampania · sześć krain','heroes')}</div>`,'menu');};
 P.archive25=function(){this.panel('Archiwum','Kronika odkryć i wyzwań',`<div class="cards">${this.button('Relikty, bronie i krainy','archive23')}${this.button('Synergie Pieczęci','sliceProgress')}${this.button('Wyzwania i nagrody','challenges23')}</div>`,'menu');};
 P.shopCard23=function(d){const m=S.meta3,r=m.unlocks[d.id]||0,owned=r>=d.max||(d.id.startsWith('hero:')&&S.data.heroes.includes(d.id.slice(5))),cost=d.cost*(r+1),missing=Math.max(0,cost-m.wallet[d.currency]),[, ,kind,col]=wallets[d.currency];return `<article class="mastery-node offer25"><div class="offerIcon25">${A.icon25(kind,col)}</div><span class="label">${owned?'POSIADANE':'POZIOM '+r+' / '+d.max}</span><h3>${esc(d.name)}</h3><p>${esc(d.desc)}</p><p>${owned?'Odblokowanie jest dostępne na koncie.':d.max>1?'Następny poziom: '+(r+1)+' / '+d.max:'Następnie: trwałe odblokowanie'}</p><button class="btn" data-action="buy25" data-value="${d.id}" ${owned||missing?'disabled':''}>${owned?'Odblokowano':missing?'Brakuje '+missing+' · koszt '+cost:'Odblokuj · '+cost}</button></article>`;};
 P.sanctuary25=function(tab='shards'){if(!wallets[tab])tab='shards';this.sanctuaryTab25=tab;this.g.state='sanctuary';this.hud.hidden=true;const [name,desc,kind,col]=wallets[tab],amount=tab==='shards'?S.data.currency:S.meta3.wallet[tab];
  this.panel('Sanktuarium','Rozwój i odblokowania',`<nav class="sanctuaryTabs25">${Object.entries(wallets).map(([id,[n]])=>this.button(n,'sanctuary25',id,id===tab?'primary':'')).join('')}</nav><div class="currencyIntro25">${A.icon25(kind,col)}<div><h2>${name} · ${amount}</h2><p>${desc}</p></div></div>${tab==='shards'?`<p>Każdy bohater ma własne drzewo statystyk, PPM i mocy F. W Pieczęci obowiązuje limit dwóch rang premii podstawowych.</p><div class="cards">${D.heroes.filter(h=>S.data.heroes.includes(h.id)).map(h=>this.button('Rozwijaj: '+h.name,'heroTree25',h.id)).join('')}</div>`:`<div class="mastery-grid">${D.shop23.filter(d=>d.currency===tab).map(d=>this.shopCard23(d)).join('')}</div>`}<div class="actions">${this.button('Kuźnia i wygląd broni','forge23')}${this.button('Wyzwania','challenges23')}${tab==='tokens'?this.button('Wyposaż kosmetykę','collection23'):''}${this.button('Menu','menu')}</div>`,'menu');};
 const setup=P.sliceSetup;P.sliceSetup=function(){setup.call(this);const first=this.overlay.querySelector('[data-action="sliceMode"]')?.parentElement;if(!first)return;first.className='difficulty25';first.innerHTML=Object.entries(D.modes).map(([id,m])=>`<button class="card ${id===this.sliceMode?'selected':''}" data-action="sliceMode" data-value="${id}" ${this.sliceRift&&id!=='normal'?'disabled':''}><h3>${m.name}</h3><p>${{easy:'Poznaj postać i pierwsze synergie.',normal:'Pełna próba z dostępem do RIFT.',hard:'Mocniejsi wrogowie, bogatsze nagrody.'}[id]}</p><dl>${[['HP wrogów',m.hp],['Obrażenia wrogów',m.damage],['Tempo napływu',m.spawn],['Doświadczenie',m.xp],['Złoto',m.gold],['Wagi rzadkości',m.loot],['Odłamki',m.reward]].map(([label,n])=>`<div><dt>${label}</dt><dd>×${n.toFixed(2)}</dd></div>`).join('')}</dl></button>`).join('');first.insertAdjacentHTML('afterend',`<p class="selectedMode25" role="status">Wybrano: ${D.modes[this.sliceMode].name} · odłamki ×${D.modes[this.sliceMode].reward.toFixed(2)}</p>`);this.focus();};
 const meta=P.meta;P.meta=function(){meta.call(this);const ranks=S.data.mastery[this.masterHero]||{};this.overlay.querySelectorAll('[data-action="buynode"]').forEach(btn=>{const n=D.mastery.find(n=>n.id===btn.dataset.value);if(!n)return;const r=ranks[n.id]||0,unit=['maxHp','armor','recovery'].includes(n.stat)?'':n.stat==='crit'?' pkt proc.':'%',scale=unit?100:1,fmt=rank=>(n.value*rank*scale).toLocaleString('pl',{maximumFractionDigits:2})+unit;btn.insertAdjacentHTML('beforebegin',`<p class="nodeValue25">Obecnie: +${fmt(r)}<br>${r<n.max?'Następnie: +'+fmt(r+1):'Osiągnięto maksimum'}</p>`);const cost=this.nodeCost(n,r);if(r<n.max&&S.data.currency<cost)btn.textContent=`Brakuje ${cost-S.data.currency} odłamków · koszt ${cost}`;});this.decorateIcons25();};
 const settings=P.settings;P.settings=function(back='menu'){settings.call(this,back);this.overlay.querySelector('.panel').insertAdjacentHTML('beforeend',`<h2>Gra i aktualizacje</h2><div class="actions">${this.button('Sprawdź aktualizacje','updates')}</div>`);};
 const action=P.action;P.action=function(id,value){if(['expedition25','archive25','sanctuary25'].includes(id)){this[id](value);return;}if(id==='rift25'){if(X.meta().unlocked){this.sliceRift=Math.min(20,X.meta().unlocked);this.sliceSetup();}else this.panel('RIFT','Droga do Otchłani',`<p>Ukończ Żelazną Pieczęć na średnim lub trudnym poziomie, aby odblokować RIFT 1.</p>${this.button('Przygotuj wyprawę','sliceSetup')}`,'menu');return;}if(id==='heroTree25'){this.masterHero=value;this.meta();return;}if(id==='buy25'){S.purchase23(value);this.sanctuary25(this.sanctuaryTab25);return;}return action.call(this,id,value);};
})(window.Aeren);

;

/* Module: js/exploration.js */
'use strict';
(function(A){const {Data:D,Save:S,U}=A,G=A.Game.prototype,R=A.Renderer.prototype,P=A.UI.prototype;
 const types={supply:{name:'Zapasy wędrowca',icon:'chest',element:'nature',sound:'level'},arsenal:{name:'Porzucony arsenał',icon:'arsenal',element:'stone',sound:'attack'},reliquary:{name:'Relikwiarz',icon:'power',element:'arcane',sound:'chest'},corrupted:{name:'Skażona pieczęć',icon:'eye',element:'blood',sound:'boss'},treasury:{name:'Skarbiec',icon:'gold',element:'lightning',sound:'chest'},recovery:{name:'Źródło odnowy',icon:'fountain',element:'nature',sound:'level'}};
 A.treasures25=types;
 G.ensureExploration25=function(){const p=this.player,w=this.world;if(!p||!w)return;if(p.explore25?.biome===this.biome)return;
  const rng=U.rng(this.seed+this.biome*8153+25);p.explore25={biome:this.biome,nextRecovery:100+rng()*35,recoveryCount:0};w.events=w.events.filter(e=>!['chest','fountain'].includes(e.type));
  Object.keys(types).filter(id=>id!=='recovery').forEach((kind,i)=>{const angle=i*Math.PI*2/5+rng()*.4,pt=w.freePoint(w.center.x+Math.cos(angle)*(580+rng()*420),w.center.y+Math.sin(angle)*(550+rng()*300));w.events.push({id:250+i,type:'chest',treasure25:kind,...pt,used:false,discovered:false,roll:rng()});});
 };
 const start=G.start;G.start=function(...args){const ok=start.apply(this,args);if(ok!==false&&!args[1]?.restoring){this.ensureExploration25();this.saveRun();}return ok;};
 const advance=G.advance;G.advance=function(){advance.call(this);this.ensureExploration25();this.saveRun();};
 const load=G.loadRun;G.loadRun=function(){const ok=load.call(this);if(ok){this.ensureExploration25();this.world.events=this.world.events.filter(e=>e.treasure25||e.type!=='chest');}return ok;};
 const update=G.update;G.update=function(dt){const playing=this.state==='playing';update.call(this,dt);if(!playing||this.state!=='playing'||!this.player.explore25)return;const p=this.player,x=p.explore25;
  for(const e of this.world.events){if(e.treasure25&&U.dist(e,p)<250)e.discovered=true;if(e.treasure25==='recovery'&&((e.expires25||Infinity)<=this.stageTime||this.boss))e.used=true;}
  if(this.stageTime<x.nextRecovery||this.boss||p.potions.length>=2||this.slice?.curse==='noheal'||this.world.events.some(e=>e.treasure25==='recovery'&&!e.used))return;
  let pt=null;for(let i=0;i<12;i++){const a=(this.seed+i*2.4+x.recoveryCount)%6.283,candidate=this.world.freePoint(p.x+Math.cos(a)*480,p.y+Math.sin(a)*480);if(U.dist(p,candidate)>300&&this.world.events.every(e=>U.dist(e,candidate)>150)){pt=candidate;break;}}if(!pt){x.nextRecovery=this.stageTime+15;return;}
  this.world.events.push({id:260+(++x.recoveryCount),type:'fountain',treasure25:'recovery',...pt,used:false,discovered:true,expires25:this.stageTime+110});x.nextRecovery=this.stageTime+165;this.ui.toast('ŹRÓDŁO ODNOWY','Na mapie pojawiło się miejsce, w którym odnowisz jedną miksturę.');this.saveRun();
 };
 G.treasureGear25=function(choices,title){if(!choices.length){this.gold+=35;this.ui.toast(title,'+35 złota · wyposażenie jest już rozwinięte.');return;}this.rewardStage='chest';this.pendingGear=true;this.gearChoices=choices;this.state='gear';this.ui.gear(choices);const h=this.ui.overlay.querySelector('.panelhead h1');if(h)h.textContent=title;this.input.clear();};
 const interact=G.interact;G.interact=function(e){if(!e?.treasure25)return interact.call(this,e);if(e.used||this.state!=='playing'||U.dist(this.player,e)>=88)return;const t=types[e.treasure25],p=this.player;if(e.treasure25==='recovery'&&p.potions.length>=2&&p.hp>=this.stats.maxHp){this.ui.toast(t.name,'Masz pełny zapas mikstur i życia. Źródło pozostaje aktywne.');return;}
  e.used=true;e.openedAt=this.time;e.discovered=true;A.Audio.play(t.sound);this.burst(e.x,e.y,A.Presentation.colors[t.element],18,90);
  if(e.treasure25==='recovery'){if(p.potions.length<2){p.potions.push('small');this.ui.toast(t.name,'Odnowiono 1 miksturę · '+p.potions.length+'/2');}else{this.healPotion(.1);this.ui.toast(t.name,'Przywrócono 10% maksymalnego HP.');}}
  else if(e.treasure25==='supply'){const before=p.potions.length,hp=p.hp;this.takePotion('small');this.gold+=15;this.ui.toast(t.name,(p.potions.length>before?'Mikstura HP':p.hp>hp?'Uzupełniono życie':'Zapasy rozliczone')+' · +15 złota');}
  else if(e.treasure25==='treasury'){const n=Math.round(55*this.stats.gold);this.gold+=n;const refunded=this.rerolls>0;this.rerolls=Math.max(0,this.rerolls-1);this.ui.toast(t.name,'+'+n+' złota'+(refunded?' · odzyskano jedno przelosowanie':''));}
  else if(e.treasure25==='reliquary'){const choices=[];for(let i=0;i<20&&choices.length<2;i++){const item=this.rollItem(),owned=this.items.find(x=>x.id===item.id);if(choices.some(x=>x.id===item.id)||owned?.level>=5)continue;if(owned){item.level=owned.level+1;item.rarity=Math.max(item.rarity,owned.rarity);this.itemStats(item);}choices.push(item);}this.treasureGear25(choices,t.name);}
  else if(e.treasure25==='arsenal'){const choices=D.weapons.filter(w=>(!w.owner||w.owner===p.hero.id)&&this.weaponAvailable23(w.id)&&(!this.slice||A.Slice.weapons.includes(w.id))&&(!this.slice||this.slice.curse!=='one'||this.weapons.some(o=>o.id===w.id))).filter(w=>!this.weapons.some(o=>o.id===w.id&&o.level>=5)).sort((a,b)=>Number(this.weapons.some(w=>w.id===b.id))-Number(this.weapons.some(w=>w.id===a.id))).slice(0,2).map(w=>({...w,kind:'weapon',level:(this.weapons.find(x=>x.id===w.id)?.level||0)+1,desc:this.weaponDescription23(w.id,(this.weapons.find(x=>x.id===w.id)?.level||0)+1)}));this.treasureGear25(choices,t.name);}
  else if(e.treasure25==='corrupted'){const enemy=this.spawn(D.enemyTypes[0],{elite:0});if(enemy){Object.assign(enemy,this.world.freePoint(p.x+260,p.y+100));enemy.hp*=1.8;enemy.maxHp=enemy.hp;enemy.name='Strażnik skażonej pieczęci';}const item=this.rollItem(2),owned=this.items.find(i=>i.id===item.id);if(owned){item.level=Math.min(5,owned.level+1);item.rarity=Math.max(owned.rarity,item.rarity);this.itemStats(item);}this.treasureGear25(owned?.level>=5?[]:[item],t.name+' · obudzono strażnika');}
  this.saveRun();
 };
 const imageCache=new Map();function sprite(t){if(!imageCache.has(t.icon)){const image=new Image();image.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(A.icon25(t.icon,t.element));imageCache.set(t.icon,image);}return imageCache.get(t.icon);}
 const event=R.event;R.event=function(c,e){if(!e.treasure25)return event.call(this,c,e);const t=types[e.treasure25],color=A.Presentation.colors[t.element],image=sprite(t),source=e.treasure25==='recovery';if(e.used&&source)return;c.save();c.globalAlpha=e.used?.4:1;U.ellipse(c,e.x+6,e.y+10,35,13,'#030b1899');c.fillStyle='#0b1827';c.strokeStyle=e.used?'#786e5a':color;c.lineWidth=2;U.poly(c,[[e.x-30,e.y],[e.x,e.y-17],[e.x+30,e.y],[e.x,e.y+17]],'#13283a',color);if(source){const gradient=c.createLinearGradient(0,e.y-100,0,e.y);gradient.addColorStop(0,'#78ffba00');gradient.addColorStop(1,'#78ffba66');c.fillStyle=gradient;c.fillRect(e.x-18,e.y-100,36,100);c.beginPath();c.ellipse(e.x,e.y,38+Math.sin(this.ambient*2)*3,16,0,0,Math.PI*2);c.stroke();}if(image.complete&&image.naturalWidth)c.drawImage(image,e.x-25,e.y-49-(e.used?8:0),50,50);if(U.dist(this.g.player,e)<250&&!e.used){c.font='bold 12px Arial';c.textAlign='center';c.lineWidth=4;c.strokeStyle='#07101f';c.strokeText(t.name,e.x,e.y-64);c.fillStyle='#fff3ce';c.fillText(t.name,e.x,e.y-64);}c.restore();};
 const minimap=R.minimap;R.minimap=function(){minimap.call(this);const cv=document.getElementById('minimap');if(!cv)return;const c=cv.getContext('2d'),w=this.g.world;for(const e of w.events){if(!e.treasure25||e.used||!e.discovered)continue;const t=types[e.treasure25],im=sprite(t),x=U.clamp((e.x-this.g.player.x)*cv.width/1700+cv.width/2,6,cv.width-6),y=U.clamp((e.y-this.g.player.y)*cv.height/1700+cv.height/2,6,cv.height-6);if(e.mapUnknown3&&U.dist(e,this.g.player)>250){c.fillStyle='#eefcff';c.font='bold 12px Arial';c.textAlign='center';c.fillText('?',x,y+4);}else if(im.complete&&im.naturalWidth)c.drawImage(im,x-5,y-5,10,10);if(e.treasure25==='recovery'){c.strokeStyle='#96ffb9';c.lineWidth=1;c.beginPath();c.arc(x,y,6+Math.sin(this.ambient*3)*1.5,0,Math.PI*2);c.stroke();}}};
 const hud=P.update;P.update=function(dt){hud.call(this,dt);if(this.hud.hidden)return;const e=this.g.world.nearestEvent(this.g.player);if(e?.treasure25){const el=document.getElementById('interaction');el.textContent=A.Controls.label('interact')+' · '+types[e.treasure25].name;}};
})(window.Aeren);

;

/* Module: js/camera-presentation.js */
'use strict';
(function(A){const {Save:S,U}=A,G=A.Game.prototype,R=A.Renderer.prototype,P=A.UI.prototype;
 const load=S.load;S.load=function(){const d=load.call(this);if(!['off','subtle','full'].includes(d.settings.cameraLook))d.settings.cameraLook='subtle';return d;};
 const update=G.update;G.update=function(dt){const p=this.player;if(p&&this.state==='playing'){const factor={off:0,subtle:.45,full:1}[S.data.settings.cameraLook]??.45,boss=this.boss?.hp>0?.35:1,speed=Math.hypot(p.vx||0,p.vy||0),move=Math.min(1,speed/200),mx=(p.vx||0)/(speed||1),my=(p.vy||0)/(speed||1);this.look25||={x:0,y:0};const aim=p.aim||0;this.look25.x=U.lerp(this.look25.x,(mx*65*move+Math.cos(aim)*15)*factor*boss,1-Math.exp(-3*dt));this.look25.y=U.lerp(this.look25.y,(my*65*move+Math.sin(aim)*15)*factor*boss,1-Math.exp(-3*dt));}return update.call(this,dt);};
 const render=R.render;R.render=function(dt){this.zoom25=.82;this.dt25=Math.min(.05,dt);return render.call(this,dt);};
 // Rendering alone is smoothed. Collision, damage and targeting always use the authoritative coordinates.
 const poses=new WeakMap();for(const name of ['player','enemy']){const draw=R[name];R[name]=function(c,e){let pose=poses.get(e);const facing=e.facing??e.aim??0;if(!pose||Math.hypot(e.x-pose.x,e.y-pose.y)>90||e.dashing>0){pose={x:e.x,y:e.y,angle:facing};poses.set(e,pose);}const dt=this.dt25||1/60,f=1-Math.exp(-35*dt);pose.x=U.lerp(pose.x,e.x,f);pose.y=U.lerp(pose.y,e.y,f);const angleDelta=Math.atan2(Math.sin(facing-pose.angle),Math.cos(facing-pose.angle));pose.angle+=angleDelta*(1-Math.exp(-12*dt));const lean=Math.cos(pose.angle)*.055*(e.walkBlend||0)+U.clamp((e.kx||0)/1800,-.08,.08);c.save();c.translate(pose.x,pose.y-14);c.rotate(lean);c.scale(1,1-Math.abs(Math.sin(pose.angle))*.025);c.translate(-e.x,-e.y+14);draw.call(this,c,{...e,facing:pose.angle});c.restore();};}
 const ground=R.ground;R.ground=function(w){ground.call(this,w);const c=this.map.getContext('2d'),accent=w.biome.accent;c.save();c.globalAlpha=.18;c.strokeStyle=accent;c.lineWidth=1;for(const p of w.paths){const a=U.angle(w.center,p),dx=Math.cos(a),dy=Math.sin(a);for(const side of [-1,1]){const nx=-dy*76*side,ny=dx*76*side;c.beginPath();c.moveTo(w.center.x+dx*270+nx,w.center.y+dy*270+ny);c.lineTo(p.x+nx,p.y+ny);c.stroke();}}c.restore();};
 const settings=P.settings;P.settings=function(back='menu'){settings.call(this,back);this.overlay.querySelector('.panel').insertAdjacentHTML('beforeend',`<h2>Wyprzedzenie kamery</h2><p>Ruch jest ważniejszy od celowania. Podczas walki z bossem przesunięcie jest mniejsze.</p><div class="actions">${Object.entries({off:'Wyłączone',subtle:'Delikatne',full:'Pełne'}).map(([id,n])=>this.button(n,'camera25',id,S.data.settings.cameraLook===id?'primary':'')).join('')}</div>`);};
 const action=P.action;P.action=function(id,value){if(id==='camera25'&&['off','subtle','full'].includes(value)){S.data.settings.cameraLook=value;S.write();this.settings(this.settingsBack23||'menu');return;}return action.call(this,id,value);};
})(window.Aeren);

;

/* Module: js/arena-26.js */
'use strict';
(function(A){const Base=A.World,U=A.U,G=A.Game.prototype,R=A.Renderer.prototype;const SCALE=1.08;
 class World26 extends Base{
  constructor(seed,index){super(seed,index);if(World26.legacy){this.legacy26=true;return;}
   this.layoutVersion=26;this.width=Math.round(this.width*SCALE);this.height=Math.round(this.height*SCALE);
   this.cols=Math.ceil(this.width/100);this.rows=Math.ceil(this.height/100);
   for(const x of [this.center,this.spawn,...this.paths,...this.decor,...this.walls,...this.hazards,...this.events]){x.x*=SCALE;x.y*=SCALE;if('w'in x)x.w*=SCALE;if('h'in x)x.h*=SCALE;}
   this.fog=new Uint8Array(this.cols*this.rows);this.reindex();this.navCols=Math.ceil(this.width/60);this.navRows=Math.ceil(this.height/60);this.navBlocked=new Uint8Array(this.navCols*this.navRows);
   for(let y=0;y<this.navRows;y++)for(let x=0;x<this.navCols;x++)this.navBlocked[y*this.navCols+x]=this.collides(x*60+30,y*60+30,28)?1:0;
   this.flow=null;this.flowCell=-1;this.reveal(this.spawn.x,this.spawn.y);
  }
  reveal(x,y){if(this.legacy26)return super.reveal(x,y);const gx=Math.floor(x/100),gy=Math.floor(y/100);for(let j=Math.max(0,gy-3);j<=Math.min(this.rows-1,gy+3);j++)for(let i=Math.max(0,gx-3);i<=Math.min(this.cols-1,gx+3);i++)if((i-gx)**2+(j-gy)**2<=12)this.fog[j*this.cols+i]=1;}
  isKnown(x,y){if(this.legacy26)return super.isKnown(x,y);return!!this.fog[U.clamp(Math.floor(y/100),0,this.rows-1)*this.cols+U.clamp(Math.floor(x/100),0,this.cols-1)];}
  updateFlow(p){if(this.legacy26)return super.updateFlow(p);const cell=U.clamp(Math.floor(p.y/60),0,this.navRows-1)*this.navCols+U.clamp(Math.floor(p.x/60),0,this.navCols-1);if(cell===this.flowCell&&this.flow)return;this.flowCell=cell;const n=this.navCols*this.navRows,flow=this.flow=new Int16Array(n).fill(-1),queue=new Int16Array(n);let read=0,write=1;queue[0]=cell;flow[cell]=0;
   while(read<write){const k=queue[read++],x=k%this.navCols,y=Math.floor(k/this.navCols);for(const [nx,ny]of [[x-1,y],[x+1,y],[x,y-1],[x,y+1]]){if(nx<0||nx>=this.navCols||ny<0||ny>=this.navRows)continue;const j=ny*this.navCols+nx;if(this.navBlocked[j]||flow[j]>=0)continue;flow[j]=flow[k]+1;queue[write++]=j;}}
  }
  move(e,dx,dy){if(this.legacy26)return super.move(e,dx,dy);const startX=e.x,startY=e.y,steps=Math.max(1,Math.ceil(Math.hypot(dx,dy)/10));for(let i=0;i<steps;i++){const x=e.x+dx/steps,y=e.y+dy/steps;if(!this.collides(x,e.y,e.r))e.x=x;if(!this.collides(e.x,y,e.r))e.y=y;}
   if(e.type&&e.hp>0&&!e.charge&&this.flow&&Math.hypot(e.x-startX,e.y-startY)<Math.hypot(dx,dy)*.7){const gx=U.clamp(Math.floor(e.x/60),0,this.navCols-1),gy=U.clamp(Math.floor(e.y/60),0,this.navRows-1);let best=null,value=this.flow[gy*this.navCols+gx];for(const [nx,ny]of [[gx-1,gy],[gx+1,gy],[gx,gy-1],[gx,gy+1]]){if(nx<0||nx>=this.navCols||ny<0||ny>=this.navRows)continue;const score=this.flow[ny*this.navCols+nx];if(score>=0&&(value<0||score<value)&&!this.collides(nx*60+30,ny*60+30,e.r)){value=score;best={x:nx*60+30,y:ny*60+30};}}if(best){const a=U.angle(e,best),d=Math.hypot(dx,dy);const px=e.x+Math.cos(a)*d,py=e.y+Math.sin(a)*d;if(!this.collides(px,e.y,e.r))e.x=px;if(!this.collides(e.x,py,e.r))e.y=py;}}
  }
 }
 World26.legacy=false;A.World=World26;
 const load=G.loadRun;G.loadRun=function(){const r=A.Save.readRun();World26.legacy=!!r?.world?.fog&&r.world.fog.length===1080;try{return load.call(this);}finally{World26.legacy=false;}};
 // The minimap uses the world grid, including the additional outer cells.
 const minimap=R.minimap;R.minimap=function(){minimap.call(this);};
})(window.Aeren);

;

/* Module: js/hud-26.js */
'use strict';
(function(A){const {Data:D,Save:S,Controls:C}=A,P=A.UI.prototype,G=A.Game.prototype;
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const paths=A.Presentation.paths;
 Object.assign(paths,{
  oil:'M49 14Q66 37 77 54Q84 72 69 83Q55 91 38 84Q20 75 27 55Q34 34 49 14ZM35 61Q40 47 49 37M49 72Q65 72 69 57M59 23L68 31',
  nova:'M50 18A32 32 0 1 0 50 82A32 32 0 1 0 50 18M50 32A18 18 0 1 0 50 68A18 18 0 1 0 50 32M50 10V23M50 77V90M10 50H23M77 50H90',
  arrows:'M17 28L75 40L61 46M18 49L78 55L65 61M17 70L75 71L60 79M73 34L86 43L71 49',
  inferno:'M25 74L43 44L52 57L65 19L77 66L65 82H35Z',
  storm:'M60 13L33 52H52L42 85L73 44H57Z',
  toxic:'M50 15L76 37L72 70L50 85L28 70L24 37ZM33 60Q50 43 67 60M40 31L60 72',
  frost:'M50 15V85M18 50H82M27 27L73 73M27 73L73 27',
  steam:'M22 73Q40 64 28 52Q18 40 32 29M42 76Q65 62 50 45Q39 31 54 20M63 75Q80 62 71 49Q62 37 75 25',
  shatter:'M50 13L65 35L83 48L64 59L51 87L39 60L19 50L39 36ZM50 13L51 87M19 50L83 48',
  plague:'M50 15Q65 29 72 49L63 78H37L28 49Q35 29 50 15ZM35 47H65M44 49L50 67L56 49M32 77H68',
  solar:'M50 21A29 29 0 1 0 50 79A29 29 0 1 0 50 21M50 10V25M50 75V90M10 50H25M75 50H90M23 23L33 33M67 67L77 77',
  tesla:'M40 15L60 15L53 43L76 40L42 86L47 56L27 58Z',
  forest:'M50 14L71 38L65 70L50 86L35 70L29 38ZM50 26V77M50 56L33 42M50 49L68 35',
  gravity:'M50 16A34 34 0 1 0 50 84A34 34 0 1 0 50 16M30 50Q50 27 70 50Q50 73 30 50ZM50 42A8 8 0 1 0 50 58A8 8 0 1 0 50 42',
  eclipse:'M64 21A30 30 0 1 0 64 79Q42 65 64 21ZM68 33L79 44L67 55L56 44Z'
 });
 const meter=`<svg class="rubyMeter25 stableHP26" viewBox="0 655 570 278" preserveAspectRatio="none" role="progressbar" aria-label="Życie" aria-valuemin="0" aria-valuemax="100"><defs><clipPath id="hp-gem-shape26"><path d="M125 710L193 772V827L125 894L54 827V773Z"/></clipPath><clipPath id="hp-fill-reveal27"><rect class="rubyReveal27" x="48" y="710" width="154" height="184"/></clipPath><linearGradient id="hp-gem-red26" x1="0" y1="0" x2=".8" y2="1"><stop stop-color="#ff3e62"/><stop offset=".48" stop-color="#bf0636"/><stop offset="1" stop-color="#640a27"/></linearGradient></defs><g clip-path="url(#hp-gem-shape26)"><path class="rubyEmpty25" d="M48 706H202V897H48Z" fill="#101622"/><path d="M54 773L125 710L107 793L54 827ZM193 772L125 710L145 793L193 827ZM54 827L125 894L107 811ZM193 827L125 894L144 811Z" fill="#354255" opacity=".34"/><rect class="rubyFill25" x="48" y="710" width="154" height="184" fill="url(#hp-gem-red26)"/><g class="rubyHighlights27" clip-path="url(#hp-fill-reveal27)"><path d="M54 773L125 710L103 791L54 827Z" fill="#ff8ca0" opacity=".29"/><path d="M125 710L193 772L146 792Z" fill="#fff0f1" opacity=".21"/><path d="M54 827L125 894L105 805Z" fill="#ff667d" opacity=".2"/><path d="M193 827L125 894L148 805Z" fill="#2d0319" opacity=".31"/><path d="M72 755L120 716L104 754Z" fill="#fff4f4" opacity=".53"/><path d="M125 711L127 792L152 813" fill="none" stroke="#ffc0cb" stroke-width="2" opacity=".23"/></g></g><path d="M125 710L193 772V827L125 894L54 827V773Z" fill="none" stroke="#f6a1a9" stroke-width="2"/><path class="rubySurface25" d="M54 710H193" opacity="0"/></svg>`;
 const build=P.buildHUD;P.buildHUD=function(){build.call(this);this.hud.classList.add('ability26');const old=this.hud.querySelector('.rubyMeter25');if(old)old.outerHTML=meter;};
 const update=P.update;P.update=function(dt){update.call(this,dt);if(this.hud.hidden||this.lastHUD>0)return;const p=this.g.player,s=this.g.stats,m=this.hud.querySelector('.stableHP26');if(!m)return;const f=Math.max(0,Math.min(1,p.hp/s.maxHp)),y=710+184*(1-f),fill=m.querySelector('.rubyFill25'),reveal=m.querySelector('.rubyReveal27');fill.setAttribute('y',String(y));fill.setAttribute('height',String(184*f));reveal.setAttribute('y',String(y));reveal.setAttribute('height',String(184*f));fill.style.clipPath='none';m.dataset.fraction=f.toFixed(4);m.setAttribute('aria-valuenow',String(Math.round(f*100)));m.setAttribute('aria-valuetext',`${Math.ceil(Math.max(0,p.hp))} / ${s.maxHp} HP`);
  const top=this.hud.querySelector('#abilities');if(top){[...top.children].forEach((el,i)=>{el.classList.toggle('cool26',i!==0&&el.dataset.state25==='cooldown');el.dataset.role26=['AUTO','PPM','Q','E','R','F'][i];const id=i>=2&&i<=4?p.active[i-2]:null;if(id){const a=D.byId[id];el.title=a?.name+' — '+a?.desc;}el.querySelector('span')?.classList.add('iconPanel26');const number=el.querySelector('em');if(number){if(i===0)number.remove();else number.textContent=String(Math.ceil(Number(number.textContent)||0));}});}
 };
 const oldBuild=P.build;P.build=function(){const g=this.g,s=g.stats,p=g.player;g.state='build';const itemCard=i=>{const t=D.itemTemplates.find(x=>x.id===i.id),rarity=D.rarity[i.rarity||0];return `<article class="loadoutCard26" style="--rarity:${rarity.color}"><div class="loadoutIcon26">${A.icon25(...(A.Presentation.itemArt[i.id]||['star','arcane']),i.rarity||0)}</div><div><span class="label">${rarity.name} · poziom ${i.level||1}/5</span><h3>${esc(t?.name||i.name)}</h3><p>${esc(i.desc||'')}</p></div></article>`;};
  const weaponCard=w=>{const d=D.weaponById[w.id],v=A.weaponStats23(w,g);return `<article class="loadoutCard26" style="--rarity:${D.rarity[w.rarity??d.rarity].color}"><div class="loadoutIcon26">${A.weaponIcon25({...d,rarity:w.rarity??d.rarity})}</div><div><span class="label">${w===g.weapons[0]?'BROŃ GŁÓWNA':'BROŃ DODATKOWA'} · poziom ${w.level}/5</span><h3>${esc(d.name)}</h3><p>${v.damage.toFixed(1)} obrażeń · co ${v.interval.toFixed(2)} s · zasięg ${v.range}</p></div></article>`;};
  const skills=Object.entries(p.skills).filter(([,n])=>n>0).map(([id,n])=>{const d=D.byId[id];return `<article class="loadoutCard26"><div class="loadoutIcon26">${A.icon25(id,typeof d.effect==='string'?d.effect:'arcane',d.rarity||0)}</div><div><span class="label">UMIEJĘTNOŚĆ · ${n}/${d.max}</span><h3>${esc(d.name)}</h3><p>${esc(d.desc)}</p>${d.type==='active'?this.button(p.active.includes(id)?'Miejsce '+(p.active.indexOf(id)+1):'Przypisz do miejsca','reequip',id):''}</div></article>`;}).join('');
  this.panel(`${p.hero.name} · wyposażenie`,'TAB · podgląd wstrzymuje walkę',`<div class="loadoutHero26"><div class="loadoutPortrait26">${A.Art23.portrait(p.hero)}</div><div><strong>${p.hero.name} · poziom ${p.level}</strong><p>HP ${Math.ceil(p.hp)} / ${s.maxHp} · ATK ${A.weaponStats23(g.weapons[0],g).damage.toFixed(1)} · KRYT ${(A.combatCrit25(s,g.weapons[0])*100).toFixed(1)}% · PANCERZ ${s.armor.toFixed(0)}</p><p>Złoto wyprawy ${g.gold} · broń ${g.weapons.length}/3 · przedmioty ${g.items.length}/6</p></div></div><div class="loadoutColumns26"><section><h2>Bronie</h2>${g.weapons.map(weaponCard).join('')}<h2>Przedmioty</h2>${g.items.map(itemCard).join('')||'<p>Nie masz jeszcze przedmiotów.</p>'}</section><section><h2>Umiejętności</h2>${skills||'<p>Umiejętności pojawią się po awansie.</p>'}<h2>Synergie</h2>${[...g.runSynergies].map(id=>{const d=D.synergies.find(x=>x.id===id);return d?`<article class="loadoutCard26"><div class="loadoutIcon26">${A.icon25(id,'arcane')}</div><div><h3>${esc(d.name)}</h3><p>${esc(d.desc)}</p></div></article>`:'';}).join('')||'<p>Łącz umiejętności żywiołów.</p>'}</section></div><div class="actions">${this.button('Wróć do walki · TAB','resume','','primary')}</div>`,'resume');this.overlay.querySelector('.panel')?.classList.add('loadout26');this.focus();};
 const updateGame=G.update;G.update=function(dt){if(this.state==='build'){this.input.poll();if(C.tap(this.input,'build')){this.resume();return;}}return updateGame.call(this,dt);};
})(window.Aeren);

;

/* Module: js/patch-27.js */
'use strict';
(function(A){const {Data:D,Save:S}=A,G=A.Game.prototype,P=A.UI.prototype;
 const wallet=()=>({silver:S.meta3?.wallet.silver||0,tokens:S.meta3?.wallet.tokens||0});
 const fresh=()=>({wallet:wallet(),shards:0});
 const start=G.start;G.start=function(id,options={}){const ok=start.call(this,id,options);if(ok!==false&&!options.restoring){this.roundCounter27=fresh();this.roundShardsPaid27=0;this.saveRun();}return ok;};
 const writeRun=S.writeRun;S.writeRun=function(snapshot){if(A.game){snapshot.roundCounter27=A.game.roundCounter27;snapshot.roundShardsPaid27=A.game.roundShardsPaid27||0;}return writeRun.call(this,snapshot);};
 const loadRun=G.loadRun;G.loadRun=function(){const snapshot=S.readRun(),ok=loadRun.call(this);if(ok){this.roundCounter27=snapshot?.roundCounter27||fresh();this.roundShardsPaid27=snapshot?.roundShardsPaid27||0;}return ok;};
 const kill=G.kill;G.kill=function(enemy,...args){const alive=enemy&&!enemy.dead,biome=this.biome;const result=kill.call(this,enemy,...args);if(alive&&enemy.isBoss&&!this.slice&&!this.cheated){const key=`${this.player.runId}:round-shards:${biome}`;S.data.roundReceipts27||={};if(!S.data.roundReceipts27[key]){const count=Math.max(1,Math.round(12*this.mode.reward*(1+this.mission*.12)*1.45));S.data.roundReceipts27[key]=count;S.data.currency+=count;this.roundShardsPaid27=(this.roundShardsPaid27||0)+count;this.roundCounter27||=fresh();this.roundCounter27.shards+=count;S.write();this.saveRun();}}return result;};
 const advance=G.advance;G.advance=function(){const biome=this.biome,result=advance.call(this);if(this.biome!==biome){this.roundCounter27=fresh();this.saveRun();}return result;};
 const award=S.award;S.award=function(result){const game=A.game;if(game&&!game.slice&&game.roundShardsPaid27){result.reward=Math.max(0,result.reward-game.roundShardsPaid27);}return award.call(this,result);};
 const hurt=G.hurt;G.hurt=function(...args){const hp=this.player.hp,result=hurt.apply(this,args),taken=Math.max(0,hp-this.player.hp),reflect=this.stats.reflect||0;if(result&&taken>0&&reflect>0&&!this.endSaved){const enemy=this.nearEnemies(140,1)[0];if(enemy)this.hit(enemy,Math.max(1,taken*reflect),'stone',{reflect:true});}return result;};
 const update=P.update;P.update=function(dt){update.call(this,dt);if(this.hud.hidden||this.lastHUD>0||!this.g.player)return;for(const number of this.hud.querySelectorAll('#utilitySlots24 .skill23 em'))number.textContent=String(Math.ceil(Number(number.textContent)||0));const g=this.g,c=g.roundCounter27||fresh(),earned={tokens:Math.max(0,(S.meta3?.wallet.tokens||0)-c.wallet.tokens),silver:Math.max(0,(S.meta3?.wallet.silver||0)-c.wallet.silver),shards:c.shards||0};for(const [id,kind,color,key,label]of [['gold-text','star','arcane','tokens','Żetony'],['shards24','crystal','stone','silver','Srebro'],['crystals24','crystal','ice','shards','Odłamki']]){const el=document.getElementById(id);if(el){el.innerHTML=A.icon25(kind,color)+`<b>${earned[key].toLocaleString('pl')}</b>`;el.title=`${label} zdobyte w tej rundzie: ${earned[key]}`;}}this.hud.querySelector('.treasury23')?.setAttribute('aria-label',`Ta runda: ${earned.tokens} żetonów, ${earned.silver} srebra, ${earned.shards} odłamków`);};
})(window.Aeren);

;

/* Module: js/catalog-data.js */
'use strict';
(function(A){
 const D=A.Data;
 // The authoritative display catalog. Save files continue to use the original IDs.
 const skills={
 fire:['Kula Ognia','Automatycznie wystrzeliwuje płonącą kulę w najbliższego wroga.','fire'],
 ice:['Odłamki Zimy','Wystrzeliwuje lodowe odłamki, które spowalniają trafionych wrogów.','ice'],
 lightning:['Iskra Burzy','Regularnie uderza piorunem w najbliższego wroga i razi kolejne cele.','lightning'],
 poison:['Jadowe Zarodniki','Wystrzeliwuje zarodniki zatruwające wrogów przez kilka sekund.','poison'],
 orbit:['Gwiezdne Ostrza','Przywołuje ostrza krążące wokół bohatera i raniące pobliskich wrogów.','arcane'],
 familiar:['Duch Lasu','Przywołuje leśnego ducha, który samodzielnie ostrzeliwuje przeciwników.','nature'],
 nova:['Puls Echa','Co kilka sekund uwalnia falę energii wokół bohatera.','arcane'],
 arrows:['Deszcz Piór','Regularnie wystrzeliwuje wachlarz przebijających strzał.','nature'],
 oil:['Czarna Rosa','Rozrzuca olej, który spowalnia i oznacza trafionych przeciwników.','oil'],
 wet:['Krople Luny','Wystrzeliwuje wodne pociski nakładające efekt wilgoci.','water'],
 meteor:['Upadek Słońca','Przywołuje meteor w wybranym miejscu. Po krótkim ostrzeżeniu następuje eksplozja.','fire'],
 blizzard:['Biała Cisza','Tworzy przy celowniku lodową burzę, która rani i spowalnia wrogów.','ice'],
 thunder:['Rozdarcie Nieba','Uderza piorunami w grupę przeciwników wokół celownika.','lightning'],
 venom:['Ogród Jadu','Tworzy w wybranym miejscu toksyczną strefę zadającą obrażenia w czasie.','poison'],
 roots:['Uścisk Korzeni','Korzenie ranią wrogów w wybranym miejscu i zatrzymują ich ruch.','nature'],
 guard:['Kamienna Przysięga','Kamienna osłona zmniejsza otrzymywane obrażenia i przywraca część życia.','stone'],
 blink:['Krok w Mrok','Teleportuje w kierunku celowania, zapewnia krótką niewrażliwość i uwalnia eksplozję.','arcane'],
 vortex:['Oko Wichru','Tworzy wir przyciągający i raniący przeciwników.','wind'],
 wolves:['Dziki Zew','Przywołuje duchy bestii, które przez krótki czas ostrzeliwują wrogów.','nature'],
 drain:['Szkarłatna Nić','Rani wrogów wokół celownika i leczy bohatera za trafione cele.','blood'],
 power:['Wola','Zwiększa wszystkie zadawane obrażenia.','lightning'],
 haste:['Rytm','Zwiększa szybkość ataków broni.','lightning'],
 vitality:['Żywy Rdzeń','Zwiększa maksymalne życie i natychmiast leczy bohatera.','blood'],
 armor:['Żelazna Kora','Zwiększa pancerz i zmniejsza otrzymywane obrażenia.','stone'],
 speed:['Lekki Krok','Zwiększa szybkość ruchu bohatera.','wind'],
 crit:['Ostre Oko','Zwiększa szansę trafienia krytycznego.','lightning'],
 cooldown:['Skupienie','Skraca czas odnawiania umiejętności.','arcane'],
 area:['Horyzont','Zwiększa obszar działania umiejętności.','arcane'],
 multi:['Rozszczepienie','Dodaje pocisk do salw broni.','lightning'],
 siphon:['Głód Życia','Trafienia przywracają niewielką część zadanych obrażeń jako życie.','blood'],
 luck:['Łut Szczęścia','Zwiększa szansę na rzadsze nagrody.','lightning'],
 wisdom:['Pamięć Bitew','Zwiększa ilość zdobywanego doświadczenia.','arcane'],
 magnet:['Zew Otchłani','Zwiększa zasięg przyciągania doświadczenia i łupu.','arcane'],
 velocity:['Lot Pocisku','Zwiększa szybkość pocisków bohatera.','wind'],
 dodge:['Miraż','Zwiększa szansę całkowitego uniknięcia obrażeń.','arcane'],
 phoenix:['Serce Feniksa','Raz na wyprawę wskrzesza bohatera z częścią życia i spala pobliskich wrogów.','fire'],
 supernova:['Supernowa','Pokonani przeciwnicy wybuchają, raniąc pobliskie cele.','lightning'],
 prism:['Pryzmat Świata','Broń startowa kolejno używa ognia, lodu, piorunów i trucizny.','arcane'],
 chronos:['Zatrzymany Świt','Co pewien czas mocno spowalnia wszystkich przeciwników.','stone'],
 titan:['Dziedzictwo Tytana','Znacznie zwiększa życie i obszar umiejętności, ale zmniejsza szybkość ruchu.','stone'],
 reaper:['Ostatni Liść','Trafienia krytyczne natychmiast pokonują osłabionych zwykłych przeciwników.','blood'],
 worldtree:['Nasiono Świata','Regularnie leczy bohatera i uwalnia falę energii natury.','nature'],
 infinity:['Równy Puls','Zwiększa szybkość ataku broni.','arcane'],
 comet:['Kometa','Unik wywołuje eksplozję i odnawia się szybciej.','fire'],
 crown:['Korona Burz','Regularnie przywołuje pioruny uderzające pobliskich przeciwników.','lightning']
 };
 const weapons={
 bow:['Łuk Świtu','Wystrzeliwuje szybkie strzały. Wyższe poziomy dodają przebicie.','nature'],
 staff:['Laska Żaru','Miota płonące kule. Wyższe poziomy dodają eksplozję przy trafieniu.','fire'],
 iceblade:['Lodowe Igły','Szybko wystrzeliwuje lodowe pociski spowalniające przeciwników.','ice'],
 hammer:['Młot Przysięgi','Miota ciężkim pociskiem; po ulepszeniu wywołuje eksplozję.','stone'],
 daggers:['Bliźniacze Ciernie','Miota parą krótkich, zatrutych ostrzy.','poison'],
 stormrod:['Berło Burzy','Miota elektrycznymi pociskami; po ulepszeniu przeskakują między celami.','lightning'],
 scythe:['Kosa Umarłych','Miota szerokim sierpem. Ulepszenia dodają przebicie i powrót.','blood'],
 orb:['Pryzmat Otchłani','Wystrzeliwuje wachlarz magicznych pocisków.','arcane'],
 crossbow:['Kusza Runiczna','Wystrzeliwuje potężne bełty przebijające wielu przeciwników.','stone'],
 cinder:['Serce Wulkanu','Miota ognistymi bombami wybuchającymi przy trafieniu.','fire'],
 vines:['Bicz Korzeni','Wystrzeliwuje pocisk cierniowej energii.','nature'],
 void:['Igła Pustki','Wystrzeliwuje wąski pocisk przebijający wielu przeciwników.','arcane'],
 spear:['Włócznia Strażnika','Miota szybkimi włóczniami o dużym zasięgu.','stone'],
 thornbow:['Łuk Cierni','Wystrzeliwuje cierniowe strzały; ulepszenia tworzą przebijający wachlarz.','nature'],
 runicHammer:['Młot Runiczny','Miota ciężkim pociskiem; ulepszenia dodają eksplozję, odrzut i ogłuszenie.','stone']
 };
 const secondary={
 ilya:['Przeszywający Promień','Wystrzeliwuje potężną strzałę przebijającą kilku przeciwników.','nature'],
 sol:['Oddech Żaru','Uwalnia stożek ognia, który rani i odrzuca przeciwników.','fire'],
 niva:['Lodowy Uskok','Błyskawicznie przesuwa Nivę i pozostawia spowalniający lodowy ślad.','ice'],
 orren:['Uderzenie Bastionu','Uderza przed sobą, odrzuca wrogów i zapewnia krótką osłonę.','stone'],
 vesper:['Znak Śmierci','Oznacza przeciwnika. Ataki broni zadają mu zwiększone obrażenia.','arcane']
 };
 const ultimate={
 ilya:['Serce Gaju','Przywołuje fale korzeni w wybranym obszarze oraz leśne duchy.','nature'],
 sol:['Kataklizm','Przywołuje serię meteorów uderzających wokół wybranego miejsca.','fire'],
 niva:['Absolutne Zero','Zamraża wrogów wokół celownika i uwalnia pierścienie lodowych włóczni.','ice'],
 orren:['Gniew Tytana','Uwalnia potężne fale uderzeniowe i zapewnia czasową niewrażliwość.','stone'],
 vesper:['Taniec Śmierci','Wykonuje serię widmowych cięć wokół celownika i na krótko unika obrażeń.','arcane']
 };
 const groups={skills,weapons,secondary,ultimate};
 const entries={};
 for(const [group,records] of Object.entries(groups))for(const [id,[name,desc,color]] of Object.entries(records))entries[group+':'+id]={id,group,name,desc,color};
 A.Catalog={entries,labels:{auto:'AUTOMATYCZNA',active:'AKTYWNA',passive:'TALENT',legendary:'DAR LEGENDARNY',ultimate:'MOC F',secondary:'OSOBISTA PPM'},get:(group,id)=>entries[group+':'+id]};
 const bind=(object,entry)=>{for(const key of ['name','desc'])Object.defineProperty(object,key,{configurable:true,enumerable:true,get:()=>entry[key]});};
 D.abilities.forEach(a=>bind(a,entries['skills:'+a.id]));
 D.weapons.forEach(w=>bind(w,entries['weapons:'+w.id]));
 for(const h of D.heroes){bind(D.secondary[h.id],entries['secondary:'+h.id]);bind(D.ultimates[h.id],entries['ultimate:'+h.id]);h.weapon=D.weaponById[h.startWeapon].name;}
 for(const n of D.mastery)if(n.hero&&n.id.startsWith(n.hero+'_')){const prefix=n.name.split(':')[0];Object.defineProperty(n,'name',{configurable:true,enumerable:true,get:()=>prefix+': '+D.secondary[n.hero].name});}
})(window.Aeren);

;

/* Module: js/catalog-art.js */
'use strict';
(function(A){
 const C=A.Catalog,paths={
 fire:'M22 22L61 36Q87 41 77 68Q66 90 44 72L18 43L42 51L22 22ZM59 45Q41 49 48 64Q62 78 71 62Q78 48 59 45Z',
 ice:'M17 68L28 24L37 58L27 82ZM40 75L50 13L61 65L51 88ZM65 68L79 29L84 72L72 83Z',
 lightning:'M57 12L37 44L56 41L41 86L75 43L58 48L70 20M39 45L22 34L29 19M63 58L84 69L77 84',
 poison:'M32 40Q19 56 29 72Q42 87 64 77L55 61L68 46L50 26L44 45ZM67 24Q83 18 84 31Q80 43 67 38M19 23L27 30M72 68L84 77',
 orbit:'M44 43L59 43L65 54L53 64L40 56ZM28 18Q51 9 65 23L43 27L34 40ZM84 40Q95 64 70 78L75 54L63 46ZM43 88Q15 88 16 58L33 72L49 69',
 familiar:'M32 40L27 21L17 17M28 29L40 19M68 40L73 21L83 17M72 29L60 19M32 40Q50 27 68 40L75 65L62 84L50 72L38 84L25 65ZM37 49L44 52M56 52L63 49M44 63L50 68L56 63',
 nova:'M50 15A35 35 0 1 0 50 85M85 50A35 35 0 0 0 61 17M50 29A21 21 0 1 0 50 71A21 21 0 1 0 50 29M50 40L60 50L50 60L40 50ZM14 40L22 42M72 77L77 71M70 24L75 29',
 arrows:'M16 69L68 28M56 27L78 19L73 41M27 81L75 45M67 44L87 37L81 57M13 49L54 18M42 18L63 11L59 31',
 oil:'M50 14Q41 36 28 54Q18 80 47 86Q81 87 76 61Q71 41 50 14ZM36 65Q40 50 48 46M51 74L66 67M22 27L30 33M76 25L82 32L76 39L70 32Z',
 wet:'M50 16Q35 34 31 52Q28 72 50 76Q73 72 69 52ZM41 51Q34 64 48 66M22 42Q7 63 25 79Q51 96 77 78Q94 63 79 43',
 meteor:'M77 13L55 37M86 28L63 48M56 14L41 38M39 37L59 42L64 61L49 75L28 64L25 46ZM15 82Q50 63 85 82M27 89H73',
 blizzard:'M50 27V73M30 38L70 62M30 62L70 38M41 32L50 39L59 32M41 68L50 61L59 68M19 41Q24 13 57 15L69 21M81 57Q76 85 43 85L31 79M62 13L70 21L62 29M38 71L30 79L38 87',
 thunder:'M21 27L38 17L49 28L65 16L83 25M53 20L35 49L52 46L42 85L76 41L57 46ZM21 75L29 63M73 66L83 77',
 venom:'M18 77Q49 61 82 77Q56 91 18 77ZM50 75V36L39 23L38 43L50 53L62 35L70 22L72 43L51 64M47 64L27 55L19 42L38 48M53 70L72 59L84 62',
 roots:'M34 82L22 62L21 44L31 45L38 59L35 29L43 22L48 55L50 16L58 18L57 54L65 25L73 31L67 62L80 49L83 59L67 80M34 82L27 91M46 80L46 92M64 82L73 90',
 guard:'M22 29L50 16L78 29L73 63L50 85L27 63ZM28 34L40 40L35 63M61 26L57 37L70 45M50 37L61 51L50 66L39 51Z',
 blink:'M66 16Q21 14 20 53Q21 88 66 84Q43 68 44 51Q43 32 66 16ZM62 35A8 8 0 1 0 62 51A8 8 0 1 0 62 35M62 53L53 74M60 56L80 65M47 64L60 58',
 vortex:'M81 34Q55 4 29 28Q5 51 31 76Q53 97 77 73Q94 51 72 35Q49 20 37 43Q27 62 46 70Q64 77 69 58Q71 43 57 42Q45 42 47 55L55 60',
 wolves:'M23 18L42 31L59 31L79 18L75 63L51 85L27 64ZM34 46L43 51M58 51L67 46M42 61L51 68L60 61M51 68V77M33 80Q12 67 17 43M67 80Q88 67 83 43',
 drain:'M24 27L37 44L25 61L12 44ZM29 46Q46 17 60 44Q43 65 74 63M72 30A9 9 0 1 0 72 48A9 9 0 1 0 72 30M72 50L59 81H85ZM31 62L45 73',
 power:'M30 72L22 52L28 43L39 49L38 27L46 24L50 43L51 20L59 21L61 42L64 27L72 31L74 61L61 79H40ZM16 29L25 34M82 18L74 23M17 78L27 74',
 haste:'M23 72L38 24L50 18L35 69ZM42 77L58 29L70 23L54 74ZM62 83L78 37L88 31L73 80Z',
 vitality:'M50 14L78 39L69 75L50 88L29 72L22 38ZM50 34L63 51L50 68L37 51ZM50 41V61M41 51H59',
 armor:'M23 23L47 15L79 26L72 70L49 87L27 73ZM36 22L31 40L39 55L35 77M48 17V85M52 31L73 36M51 48L71 52M51 66L67 69',
 speed:'M37 72Q24 59 42 43Q60 28 66 39Q77 57 60 72L49 84ZM67 21A6 6 0 1 0 67 33A6 6 0 1 0 67 21M19 34H44M13 48H30M12 62H24',
 crit:'M13 50Q50 17 87 50Q50 83 13 50ZM50 35A15 15 0 1 0 50 65A15 15 0 1 0 50 35M50 25V43M50 57V75M25 50H43M57 50H75',
 cooldown:'M28 19H72M28 81H72M34 23L36 36L49 48L37 63L34 77M66 23L64 36L53 48L65 63L66 77M43 29H59L50 41ZM45 60L59 72H39ZM19 45L14 56L24 62M79 52L85 40L75 34',
 area:'M50 18A32 32 0 1 0 50 82A32 32 0 1 0 50 18M50 30A20 20 0 1 0 50 70A20 20 0 1 0 50 30M50 44L56 50L50 56L44 50ZM17 18L26 18L26 27M83 82H74V73',
 multi:'M15 50H42L71 22M42 50H83M42 50L71 78M64 21L80 14L78 31M74 41L87 50L74 59M63 78L80 87L78 69',
 siphon:'M30 17H73L64 46L41 79L47 47L33 39ZM68 63Q54 81 65 87Q82 94 79 78Z',
 luck:'M27 26L63 16L84 43L74 76L39 86L16 60ZM27 26L51 45L84 43M51 45L39 86M31 50L35 57M64 59L67 65M53 27L58 31',
 wisdom:'M16 36Q33 26 50 39Q67 26 84 36V79Q65 69 50 82Q35 69 16 79ZM50 39V82M25 45L41 48M25 57L41 60M59 48L76 45M50 10L59 20L50 30L41 20Z',
 magnet:'M50 34L66 49L50 66L34 49ZM20 16L30 27L20 38L10 27ZM78 20L88 30L78 40L68 30ZM73 72L83 81L73 90L63 81ZM17 67L27 77L17 87L7 77M28 34L38 41M69 38L62 43M64 68L58 62M30 69L37 61',
 velocity:'M15 72L79 24M62 24L87 15L80 42M31 25Q66 22 68 56Q68 80 45 86M14 51L33 38M22 84L40 71',
 dodge:'M37 15A10 10 0 1 0 37 35A10 10 0 1 0 37 15M37 39L23 63L30 86M37 39L51 62L42 86M26 49L15 62M49 49L57 59M66 20A9 9 0 1 0 66 38M66 43L77 65L68 87M77 53L88 65',
 phoenix:'M50 40L58 30L65 37L55 47L79 30L85 19L86 58L64 68L51 86L35 67L16 56L14 19L26 34ZM50 56L60 69L50 82L40 69Z',
 supernova:'M50 26L57 43L76 50L57 57L50 76L43 57L24 50L43 43ZM50 10V20M50 80V90M10 50H20M80 50H90M20 20L29 29M71 71L80 80M20 80L29 71M71 29L80 20',
 prism:'M50 14L81 39L68 78L50 89L31 78L19 39ZM50 14V89M19 39L81 39M19 39L50 59L81 39M31 78L50 59L68 78',
 chronos:'M24 31Q30 8 57 15Q81 22 79 44M18 38L27 38M27 38L27 28M32 35H70M32 84H70M38 38Q38 52 51 59Q64 66 64 80M64 38Q64 52 51 59Q38 66 38 80M42 42H60M42 75H60',
 titan:'M35 18H64L68 34L58 40H42L32 34ZM28 44L42 40H58L73 44L83 72L68 76L64 61L62 86H39L35 61L31 76L17 72ZM50 47L60 59L50 72L40 59Z',
 reaper:'M25 73Q14 28 65 21Q84 61 25 73ZM25 79L61 32M39 61L36 43M51 48L67 46M55 83L76 29Q98 43 80 73',
 worldtree:'M50 87Q22 71 38 56Q49 44 63 56Q77 72 50 87ZM50 61V26M50 42L30 27L21 29L26 42L45 49M51 34L66 19L78 21L73 37L55 42',
 infinity:'M50 50Q24 14 14 40Q7 68 28 70Q40 70 50 50Q72 14 85 38Q95 66 75 71Q60 74 50 50M21 47L27 38L32 50M69 52L74 61L79 49',
 comet:'M18 20L43 38L24 13L61 40L50 16L77 47Q92 74 68 84Q44 92 38 66ZM57 51A12 12 0 1 0 57 75A12 12 0 1 0 57 51',
 crown:'M22 44L38 58L50 32L63 58L80 43L73 79H28ZM27 68H75M25 14L16 31H29L21 43M76 13L67 31H80L72 43',
 bow:'M33 17Q88 50 33 83L48 50ZM17 50H85M72 39L85 50L72 61M51 23L58 21M51 77L58 79',
 staff:'M33 86L57 37M42 21L58 13L74 26L60 42L44 34ZM57 17L53 29L63 26L59 36M33 64L46 70',
 iceblade:'M17 80L37 24L40 57ZM39 85L57 13L63 55ZM65 82L78 27L84 65Z',
 hammer:'M29 83L58 45M31 28L49 12L84 44L67 61ZM47 29L56 27L62 41L69 43M20 73L35 86',
 daggers:'M20 79L49 36L59 17L60 44L32 85M18 64L40 80M59 82L76 45L84 22L84 55L71 89M52 69L78 81',
 stormrod:'M31 88L57 42M58 13L42 36H56L49 54L79 25H65L72 14M33 71L46 77',
 scythe:'M30 88L58 22M23 29Q72 7 88 61Q65 38 51 42M31 28L37 37M33 73L43 78',
 orb:'M38 24L61 16L75 40L55 69L30 52ZM12 68L36 47M65 47L87 28M59 59L85 67M49 66L61 89M38 24L55 69M30 52L75 40',
 crossbow:'M19 58Q37 12 78 29L60 48ZM25 77L67 31L76 21L77 36M22 57L59 48L79 30M32 61L44 72M20 71L30 82',
 cinder:'M33 19L67 23L83 53L67 82L33 84L16 51ZM47 23L40 42L56 53L41 68L46 83M40 42L20 50M56 53L77 47M58 12L62 25',
 vines:'M18 82Q85 77 62 54Q29 28 71 17M29 78L28 65L39 74M54 70L68 78L65 65M57 48L70 43L54 39M57 23L46 17L52 33M70 17L83 13L77 28',
 void:'M62 15Q92 36 76 65Q62 83 45 84M42 20Q14 42 27 64M20 86L60 37L74 21L65 50ZM20 73L32 84',
 spear:'M19 86L66 32M53 33L78 13L74 44ZM18 73L30 84M22 42L27 30L43 25M56 76L73 69L79 56',
 thornbow:'M32 17Q89 49 33 83L47 50ZM16 50H84M72 39L85 50L72 61M48 24L61 14L58 32M63 45L79 40L68 55M52 71L62 86L65 65',
 runicHammer:'M30 85L56 49M24 33L47 12L85 43L64 65ZM48 27L47 41L62 47L61 32ZM18 19L23 13L29 20M76 75L84 69L89 80M17 61L24 55',
 'secondary:ilya':'M12 70L83 25M72 24L90 18L84 37M27 33V78M48 22V69M68 16V59',
 'secondary:sol':'M15 26L40 18L58 39L43 48L27 42L24 67L14 62ZM40 34L45 35M48 53L82 40L71 57L91 69L66 68L77 86L46 69Z',
 'secondary:niva':'M46 19L57 13L68 23L57 36ZM56 39L39 59L59 70L73 56L70 45ZM14 44H35M10 59H28M22 79L42 69L47 88M67 75L81 64L87 81',
 'secondary:orren':'M20 59L42 48L65 59L60 79L42 91L24 79ZM40 17L57 11L81 35L65 50ZM37 65L62 38M32 73L43 73M17 41L28 48M78 63L68 65',
 'secondary:vesper':'M14 51Q50 20 86 51Q50 82 14 51ZM59 32Q34 31 33 52Q33 72 59 70Q42 55 59 32ZM50 12V22M50 80V90',
 'ultimate:ilya':'M50 38Q28 12 20 38Q16 60 50 78Q84 59 80 38Q72 12 50 38ZM50 49V85M49 63L28 78L18 75M51 69L73 83L84 78M13 21L26 17L31 30M71 21L84 16L81 32',
 'ultimate:sol':'M50 16A25 25 0 1 0 50 66A25 25 0 1 0 50 16M50 17L43 34L60 42L48 63M17 85L28 68L39 77L51 67L64 78L75 66L85 85ZM16 16L24 24M78 16L70 24',
 'ultimate:niva':'M50 25V75M29 38L71 62M29 62L71 38M40 30L50 40L60 30M40 70L50 60L60 70M25 19L37 15M17 37L20 24M15 61L20 76M33 85L47 88M62 85L77 76M85 61L88 46M81 28L69 18',
 'ultimate:orren':'M27 25L42 18L50 24L61 17L72 26L77 51L66 64H35L23 48ZM39 25L42 42M53 25L56 41M29 76L40 68L50 79L62 68L73 78M15 86L27 84M76 87L88 83',
 'ultimate:vesper':'M22 82L42 64Q16 32 66 15Q42 36 53 54L62 67L78 83M20 22L39 37Q66 19 85 57Q67 43 51 52L38 62L21 78M31 72L43 84M64 19L76 31'
 };
 const cache=new Map(),base=A.icon25;
 C.icon=function(group,id,variant='card',rarity=0){
  const e=C.get(group,id);if(!e)return base('lock','stone',rarity);
  const key=group+':'+id+':'+variant+':'+rarity;if(cache.has(key))return cache.get(key);
  const shape=paths[group==='secondary'||group==='ultimate'?group+':'+id:id];
  const col=A.Presentation.colors[e.color]||'#b5f3ee',frame=A.Data.rarity[rarity]?.color||'#c9d7c1',special=group==='ultimate',prism=id==='prism'||id==='orb';
  const svg=`<svg class="icon25 catalogIcon28 ${special?'ultimateIcon28':''}" data-catalog-icon="${group}:${id}" data-variant="${variant}" viewBox="0 0 100 100" role="img" aria-label="${e.name}"><path d="M14 3H86L97 14V86L86 97H14L3 86V14Z" fill="#07101e" stroke="${frame}" stroke-width="3"/><path d="M17 9H83L91 17V83L83 91H17L9 83V17Z" fill="${col}" fill-opacity=".19" stroke="${col}" stroke-opacity=".65"/><path d="M13 17L50 11L87 17L50 50Z" fill="#fff" opacity=".05"/><circle cx="50" cy="50" r="30" fill="${col}" opacity=".06"/><g transform="translate(9 9) scale(.82)" stroke-linecap="round" stroke-linejoin="round"><path d="${shape}" fill="${col}" fill-opacity=".09" stroke="${col}" stroke-width="10" opacity=".14"/><path d="${shape}" fill="${col}" fill-opacity=".12" stroke="${col}" stroke-width="${variant==='hud'?4.4:3.5}"/>${prism?'<path d="M50 18L22 39L50 56Z" fill="#ff9156" opacity=".55"/><path d="M52 18L77 39L53 55Z" fill="#88eaff" opacity=".55"/><path d="M22 44L47 61L34 77Z" fill="#a3f065" opacity=".55"/><path d="M77 44L53 61L65 77Z" fill="#ffe476" opacity=".55"/>':''}</g><path d="M15 26V15H26M74 15H85V26M15 74V85H26M74 85H85V74" fill="none" stroke="${frame}" stroke-width="2"/></svg>`;
  cache.set(key,svg);return svg;
 };
 C.paths=paths;
 A.icon25=function(kind,element,rarity){return C.get('skills',kind)?C.icon('skills',kind,'card',rarity):base(kind,element,rarity);};
 A.weaponIcon25=w=>C.icon('weapons',w.id,'card',w.rarity);
})(window.Aeren);

;

/* Module: js/catalog-ui.js */
'use strict';
(function(A){
 const {Data:D,Catalog:C,Save:S}=A,G=A.Game.prototype,P=A.UI.prototype;
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const num=n=>Number(n).toLocaleString('pl-PL',{maximumFractionDigits:2});
 const rows=o=>`<dl class="catalogStats28">${Object.entries(o).map(([k,v])=>`<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>`;
 const defaults=()=>({damage:20,rate:D.heroes[0].rate,area:1,cdr:0,velocity:1,weaponPower:1});
 const context=g=>g?.player&&g?.stats?g:{stats:defaults(),player:{hero:D.heroes[0]},synergy:()=>false};
 const labels={damage:'Obrażenia bazowe',heal:'Leczenie',radius:'Promień',count:'Liczba pocisków / duchów',chains:'Dodatkowe cele pioruna',explosion:'Promień eksplozji',interval:'Odstęp ataków',life:'Czas działania',cooldown:'Odnowienie',pierce:'Przebicie'};
 C.skillView=function(id,level,g){const a=D.byId[id],ctx=context(g);if(!a)return {};
  if(a.type==='passive'){const e=a.effect,flat=['maxHp','armor','count','magnet'].includes(e.stat),unit=flat?'': ['crit','dodge','steal'].includes(e.stat)?' pkt proc.':'%',name={damage:'obrażeń',rate:'tempa ataku',maxHp:'maks. HP',armor:'pancerza',speed:'ruchu',crit:'szansy krytyka',cdr:'tempa odnowienia',area:'obszaru',count:'pocisków',steal:'kradzieży życia',luck:'szczęścia',xp:'doświadczenia',magnet:'zasięgu przyciągania',velocity:'szybkości pocisków',dodge:'szansy uniku'}[e.stat];return {next:`+${num(e.value*(flat?1:100))}${unit} ${name}. Obowiązują limity statystyk.`,details:{'Premia za rangę':`+${num(e.value*(flat?1:100))}${unit} ${name}`,...(id==='siphon'?{'Wspólny limit leczenia':num(A.lifeHealLimit)+' HP/s'}:{})}};}
  if(a.type==='legendary')return {next:'Jednorazowy dar — bez kolejnych poziomów.',details:{'Dostępne rangi':a.max}};
  const st=A.skillStats(id,Math.max(1,level),ctx),target=A.skillStats(id,Math.min(a.max,Math.max(1,level+1)),ctx),detail={};
  for(const [key,label] of Object.entries(labels))if(st[key]!==undefined)detail[label]=num(st[key])+(['interval','life','cooldown'].includes(key)?' s':'');
  if(['blizzard','venom','vortex'].includes(id))detail['Obrażenia']='Za pojedyncze trafienie strefy: '+num(st.damage);
  if(st.puddle)detail['Efekt trafienia']='Pozostawia kałużę';
  let changes=[];if(level===0)changes=['Odblokowuje tę umiejętność.'];else if(level>=a.max)changes=['Osiągnięto maksymalny poziom.'];else{
   for(const [key,label] of Object.entries(labels))if(target[key]!==undefined&&target[key]!==st[key])changes.push(`${label}: ${num(st[key]||0)} → ${num(target[key])}${['interval','life','cooldown'].includes(key)?' s':''}`);
   if(target.puddle&&!st.puddle)changes.push('Trafienia pozostawiają toksyczną kałużę');
   if(!changes.length)changes.push('Ta ranga nie zmienia parametrów przywołania');
  }
  return {next:changes.join(' · '),details:detail};
 };
 C.weaponView=function(id,level,g){
  const l=Math.max(1,Math.min(5,level)),owned=g?.weapons?.find(w=>w.id===id),w={id,level:l,mutation24:owned?.mutation24},st=A.weaponStats23(w,g?.player?g:undefined),t={...A.weaponTraits(id,l)},slice=!!g?.slice;
  if(slice&&id==='bow'&&l>=3)t.pierce=Math.max(1,t.pierce);
  t.count=Math.min(5,t.count+Math.max(0,(g?.stats?.count||1)-1));
  if(slice&&w.mutation24){const mt=A.mutationTraits(w.mutation24,l);if(mt.explosion)t.explosion=mt.explosion;if(mt.pierce!==null)t.pierce=mt.pierce;t.count*=1+mt.extraProjectiles;if(w.mutation24==='return')t.returning=true;}
  const effects=[];
  if(t.count>1)effects.push(`${num(t.count)} pociski w salwie`);
  if(slice&&id==='bow'&&l>=4)effects.push('Dodatkowa strzała o mniejszej sile');
  if(t.pierce)effects.push(t.returning?'Przebijający sierp':`Przebicie: ${num(t.pierce)}`);
  if(t.explosion)effects.push(`Eksplozja: promień ${num(t.explosion)}`);
  if(t.chains)effects.push(`Przeskok na dodatkowe cele: ${num(t.chains)}`);
  if(t.areaChance)effects.push(`${num(t.areaChance*100)}% szansy pioruna obszarowego`);
  if(t.knockback)effects.push('Odrzuca trafionych wrogów');
  if(t.stunChance)effects.push(`${num(t.stunChance*100)}% szansy ogłuszenia zwykłego wroga`);
  if(t.steal)effects.push(`${num(t.steal*100)}% kradzieży życia, limit ${num(A.lifeHealLimit)} HP/s`);
  if(t.crit)effects.push(`+${num(t.crit*100)} pkt proc. krytyka`);
  if(t.returning)effects.push('Pocisk wraca i ponownie trafia');
  if(t.splitEvery)effects.push(`Co ${num(t.splitEvery)}. atak: rozszczepiona salwa`);
  if(w.mutation24&&slice)effects.push('Mutacja: '+(A.Slice.mutations[id]?.find(m=>m[0]===w.mutation24)?.[1]||'Rezonans'));
  return {stats:st,traits:t,effects,details:{'Bazowe obrażenia / pocisk':num(st.damage),'Ataki na sekundę':num(1/st.interval),'Zasięg bazowy':num(st.range)},mode:slice?'Pieczęć / RIFT':'Kampania'};
 };
 C.weaponNext=function(id,level,g){if(level>=5)return 'Maksymalny poziom. '+(g?.slice&&A.Slice.mutations[id]?'Dostępne specjalizacje w Kuźni.':'');
  const now=C.weaponView(id,level,g),next=C.weaponView(id,level+1,g),changes=[];
  for(const [key,label] of [['damage','Obrażenia'],['interval','Odstęp ataków'],['range','Zasięg']])if(now.stats[key]!==next.stats[key])changes.push(`${label}: ${num(now.stats[key])} → ${num(next.stats[key])}${key==='interval'?' s':''}`);
  changes.push(...next.effects.filter(x=>!now.effects.includes(x)));
  if(level===4&&g?.slice&&A.Slice.mutations[id])changes.push('Odblokowuje wybór mutacji');return changes.join(' · ');
 };
 C.weaponBody=function(id,level,g){const d=D.weaponById[id],v=C.weaponView(id,level,g);return `<p>${esc(d.desc)}</p>${rows(v.details)}<p class="catalogCurrent28">${esc(v.effects.join(' · ')||'Precyzyjny pocisk bez dodatkowego efektu trafienia.')}</p><p class="catalogNext28"><b>${level>=5?'Poziom maksymalny':'Następny poziom'}</b>${esc(C.weaponNext(id,level,g))}</p>`;};
 G.weaponDescription23=function(id,level){const v=C.weaponView(id,level,this);return `${D.weaponById[id].desc}\nPoziom ${level}/5\n${Object.entries(v.details).map(([k,v])=>k+': '+v).join('\n')}\n${v.effects.join(' · ')}\nNastępny poziom: ${C.weaponNext(id,level,this)}`;};
 const oldSkill=P.skillCard;P.skillCard=function(a){if(a.type==='synergy')return oldSkill.call(this,a);const g=this.g,ult=a.type==='ultimate',entry=ult?C.get('ultimate',g.player.hero.id):C.get('skills',a.id);if(!entry)return oldSkill.call(this,a);
  const l=ult?g.player.ultLevel:g.has(a.id),v=ult?{next:l>=3?'Maksymalny poziom.':`Siła: ${num(A.ultimatePower(l)*100)}% → ${num(A.ultimatePower(l+1)*100)}%.`,details:{Odnowienie:num(Math.max(40,g.player.hero.ultimate.cd/(1+g.stats.cdr*.3))*(g.player.fVariant==='azyl'?1.15:1))+' s'}}:C.skillView(a.id,l,g),synergies=ult?[]:D.synergies.filter(s=>s.a===a.id||s.b===a.id),r=D.rarity[a.rarity];
  return `<button class="card ${r.id} catalogCard28" style="--accent:${r.color}" data-action="choose" data-value="${a.id}" title="${esc(Object.entries(v.details).map(([k,v])=>k+': '+v).join('\n'))}"><span class="label">${C.labels[a.type]} · ${esc(r.name)}</span><span class="symbol">${C.icon(ult?'ultimate':'skills',ult?g.player.hero.id:a.id,'card',a.rarity)}</span><h3>${esc(entry.name)}</h3><p>${esc(entry.desc)}</p><p class="catalogNext28"><b>${l?'Następny poziom':'Po zdobyciu'}</b>${esc(v.next)}</p>${synergies.length?`<p class="catalogSynergy28"><b>Synergia</b>${synergies.map(s=>`${esc(s.name)} (${esc(D.byId[s.a===a.id?s.b:s.a].name)})`).join(' · ')}</p>`:''}<div class="catalogDetails28">${rows(v.details)}</div><span class="bottom">${l?'POZIOM '+l+' → '+Math.min(a.max||3,l+1):'NOWA UMIEJĘTNOŚĆ · POZIOM 1'}</span></button>`;
 };
 const levelUp=P.levelUp;P.levelUp=function(...args){levelUp.apply(this,args);const panel=this.overlay.querySelector('.panel');panel?.insertAdjacentHTML('beforeend',`<div class="actions">${this.button('Pokaż / ukryj szczegóły kart','catalogDetails28')}</div>`);};
 const action=P.action;P.action=function(id,value){if(id==='catalogDetails28'){this.overlay.classList.toggle('catalogDetailMode28');return;}return action.call(this,id,value);};
 P.sliceSkillDetail=function(a){return a.desc+' Następny poziom: '+C.skillView(a.id,this.g.has(a.id),this.g).next;};
 const loadRun=G.loadRun;G.loadRun=function(){const ok=loadRun.call(this);if(ok){for(const item of [...(this.gearChoices||[]),...(this.pendingReplacement?[this.pendingReplacement]:[])])if(item.kind==='weapon'&&D.weaponById[item.id]){item.name=D.weaponById[item.id].name;item.desc=this.weaponDescription23(item.id,item.level);}for(const choice of this.choices||[])if(D.byId[choice.id]){choice.name=D.byId[choice.id].name;choice.desc=D.byId[choice.id].desc;}}return ok;};
 const gear=P.gear;P.gear=function(choices){gear.call(this,choices.map(x=>x.kind==='weapon'?{...x,name:D.weaponById[x.id].name}:x));this.overlay.querySelectorAll('[data-action="gear"]').forEach((el,i)=>{const x=choices[i];if(x.kind!=='weapon')return;el.classList.add('catalogCard28');el.querySelector('h3').textContent=D.weaponById[x.id].name;el.querySelector('p').outerHTML=C.weaponBody(x.id,x.level,this.g);el.title=this.g.weaponDescription23(x.id,x.level);});};
 const forge=P.forge23;P.forge23=function(){forge.call(this);const id=this.forgeWeapon23||this.g.player?.hero.startWeapon||'bow',part=this.overlay.querySelector('.forge23>div'),list=part?.querySelector('ol');if(!list)return;const mode=this.g.slice?'Pieczęć / RIFT':'Kampania';list.innerHTML=Array.from({length:5},(_,i)=>`<li><b>Poziom ${i+1}</b>${rows(C.weaponView(id,i+1,this.g).details)}<p>${esc(C.weaponView(id,i+1,this.g).effects.join(' · ')||'Podstawowy pocisk.')}</p>${i<4?`<p class="hint">Następny: ${esc(C.weaponNext(id,i+1,this.g))}</p>`:''}</li>`).join('');list.classList.add('catalogRanks28');list.nextElementSibling?.remove();list.insertAdjacentHTML('beforebegin',`<p class="hint">${mode} · ${this.g.player?'statystyki obecnego bohatera':'podgląd bazowy'}<br>Poziomy budujesz podczas wyprawy.</p>`);const mutations=A.Slice.mutations[id];if(mutations)list.insertAdjacentHTML('afterend',`<h3>Mutacje Pieczęci / RIFT</h3>${mutations.map(m=>`<p><b>${esc(m[1])}</b> — ${esc({roots:'Korzenie zatrzymujące wrogów.',return:'Pociski powracają do bohatera.',oil:'Trafienia nakładają olej.',nova:'Trafienia wywołują większą eksplozję.',fan:'Dodatkowe pociski kosztem siły każdego z nich.',arc:'Dodatkowy łańcuch piorunów.',quake:'Dodatkowa fala uderzeniowa.',stun:'Trafienia zatrzymują zwykłych wrogów.',leech:'Dodatkowa kradzież życia ze wspólnym limitem leczenia.'}[m[0]]||'Wzmacnia właściwości broni.')}</p>`).join('')}`);};
 const archive=P.archive23;P.archive23=function(){archive.call(this);const panel=this.overlay.querySelector('.panel');panel?.insertAdjacentHTML('afterbegin',`<section class="catalogSection28"><h2>Katalog umiejętności</h2><p>Opisy działania i rozwoju. Odkrycia wyprawy pozostają zapisane poniżej.</p><div class="catalog">${D.abilities.map(a=>{const v=C.skillView(a.id,1,this.g);return `<article class="catalogCard28"><span class="label">${C.labels[a.type]}</span><span class="symbol">${C.icon('skills',a.id,'archive',a.rarity)}</span><h3>${esc(a.name)}</h3><p>${esc(a.desc)}</p><details><summary>Szczegóły i rozwój</summary>${rows(v.details)}<p>${esc(v.next)}</p>${D.synergies.filter(s=>s.a===a.id||s.b===a.id).map(s=>`<p>Synergia: ${esc(s.name)} · ${esc(D.byId[s.a].name)} + ${esc(D.byId[s.b].name)}</p>`).join('')}</details></article>`;}).join('')}</div><h2>Osobiste umiejętności bohaterów</h2><div class="catalog">${D.heroes.map(h=>['secondary','ultimate'].map(group=>{const e=C.get(group,h.id);return `<article><span class="label">${esc(h.name)} · ${group==='secondary'?'PPM':'F'}</span><span class="symbol">${C.icon(group,h.id,'archive',group==='ultimate'?3:1)}</span><h3>${esc(e.name)}</h3><p>${esc(e.desc)}</p></article>`;}).join('')).join('')}</div></section>`);};
 const build=P.build;P.build=function(){build.call(this);this.overlay.querySelectorAll('.loadoutCard26').forEach(el=>{const name=el.querySelector('h3')?.textContent,w=this.g.weapons.find(w=>D.weaponById[w.id]?.name===name);if(w){const body=el.querySelector('.loadoutIcon26+div');body.querySelector('p')?.remove();body.insertAdjacentHTML('beforeend',C.weaponBody(w.id,w.level,this.g));}});};
 const update=P.update;P.update=function(dt){update.call(this,dt);if(this.hud.hidden||this.lastHUD>0||!this.g.player)return;const g=this.g,p=g.player;[...this.hud.querySelectorAll('#abilities>.skill23')].forEach((el,i)=>{const group=i===0?'weapons':i===1?'secondary':i===5?'ultimate':'skills',id=i===0?g.weapons[0].id:i===1||i===5?p.hero.id:p.active[i-2],entry=C.get(group,id);if(!entry)return;const symbol=el.querySelector('span');if(symbol)symbol.innerHTML=C.icon(group,id,'hud',i===5?3:0);el.title=entry.name+'\n'+entry.desc;el.setAttribute('aria-label',entry.name);el.classList.toggle('catalogUltimate28',i===5);});};
})(window.Aeren);


;

/* Module: js/endgame-core.js */
'use strict';
(function(A){
 const {Data:D,Save:S,U}=A,G=A.Game.prototype,P=A.UI.prototype;
 const E=A.Endgame={version:1,clone:x=>JSON.parse(JSON.stringify(x)),esc:s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),num:n=>(Number(n)||0).toLocaleString('pl',{maximumFractionDigits:1})};
 E.meta=()=>{const m=S.meta3.endgame||(S.meta3.endgame={});m.version=1;m.runs=Array.isArray(m.runs)?m.runs.slice(-20):[];m.prep||={plan:null,keepsakes:[]};m.prep.keepsakes=[...new Set(m.prep.keepsakes||[])].slice(0,2);m.keepsakes||={};m.discovered||={};m.records||={};m.receipts||={};m.secrets||={};return m;};
 E.freshStats=()=>({out:{},incoming:{},crit:0,healed:0,blocked:0,dashes:0,potions:0,rerolls:0,hits:0,milestones:{},choices:[],skipped:[],lastHit:null});
 E.newRun=(g,opts)=>({version:1,startedAt:new Date().toISOString(),prep:E.clone(E.meta().prep),options:{hero:g.player.hero.id,mode:g.modeId,mission:g.mission,slice:!!g.slice,rift:g.slice?.rift||0,curse:g.slice?.curse||'none',modifier:g.slice?.start||'normal',seed:g.seed},stats:E.freshStats(),used:{},curses:[],discoveries:[],depth:0,queue:[],bosses:[],secretRun:[],training:!!opts.training3,seedReplay:!!opts.seedReplay3});
 E.sourceName=key=>{const [kind,id]=key.split(':');return kind==='weapon'?D.weaponById[id]?.name:kind==='skill'?D.byId[id]?.name:kind==='synergy'?D.synergies.find(s=>s.id===id)?.name:kind==='ultimate'?D.ultimates[id]?.name:kind==='secondary'?D.secondary[id]?.name:kind==='curse'?E.curses?.[id]?.name:kind==='secret'?E.secrets?.[id]?.name:key==='other:reflect'?'Odbicie ataku':key==='other:environment'?'Otoczenie':key==='other:unknown'?'Inne obrażenia':id;};
 G.withSource3=function(source,fn){const prev=this.damageSource3;this.damageSource3=source;try{return fn();}finally{this.damageSource3=prev;}};
 G.recordDamage3=function(e,before,critical,element,opts){const r=this.player?.run3;if(!r)return;const dealt=Math.max(0,Math.min(before,before-e.hp));if(!dealt)return;const st=r.stats,key=opts.source3||this.damageSource3||'other:unknown';const parts=opts.parts3||[{id:key,weight:1}],sum=parts.reduce((n,p)=>n+p.weight,0);for(const part of parts)st.out[part.id]=(st.out[part.id]||0)+dealt*part.weight/sum;st.hits++;if(critical)st.crit++;};
 G.recordIncoming3=function(raw,dealt,element){const r=this.player?.run3;if(!r)return;const info=this.incomingSource3||{},kind=info.kind||'kontakt',st=r.stats;st.incoming[kind]=(st.incoming[kind]||0)+Math.min(Math.max(0,this.player.hp),dealt);st.blocked+=Math.max(0,raw*this.stats.incoming-dealt);st.lastHit={time:this.time,element,kind,cause:info.cause||'Obrażenia '+element,enemy:info.enemy||null};if(['fire','poison'].includes(element))this.player.dotCause3=E.clone(st.lastHit);st.incomingElements||={};st.incomingElements[element]=(st.incomingElements[element]||0)+Math.min(Math.max(0,this.player.hp),dealt);};
 G.installHealth3=function(){const p=this.player;if(!p||p.healthAccessor3)return;let hp=p.hp;Object.defineProperty(p,'healthAccessor3',{value:true,configurable:true});Object.defineProperty(p,'hp',{enumerable:true,configurable:true,get:()=>hp,set:value=>{let n=Number(value);if(!Number.isFinite(n))return;if(n>hp&&p.run3&&!this.settingHealth3){if(this.allowHealing3&&!this.allowHealing3())return;p.run3.stats.healed+=Math.max(0,Math.min(this.stats?.maxHp||n,n)-Math.max(0,hp));}hp=n;}});};
 const start=G.start;G.start=function(id,options={}){this.settingHealth3=true;try{const v=start.call(this,id,options);if(v===false)return v;if(!options.restoring){this.player.run3=E.newRun(this,options);if(this.retryFrom3){this.player.run3.retryDelayMs=Date.now()-this.retryFrom3;this.retryFrom3=null;}}this.installHealth3();this.saveRun();return v;}finally{this.settingHealth3=false;}};
 const load=G.loadRun;G.loadRun=function(){this.settingHealth3=true;try{const ok=load.call(this);if(ok){this.player.run3||=E.newRun(this,{});const r=this.player.run3;r.stats={...E.freshStats(),...r.stats};r.used||={};r.queue||=[];r.curses||=[];r.secretRun||=[];r.bosses||=[];this.installHealth3();}return ok;}finally{this.settingHealth3=false;}};
 const saveLoad=S.load;S.load=function(){const d=saveLoad.call(this);E.meta();d.settings.history3??=true;return d;};
 const writeRun=S.writeRun;S.writeRun=function(snap){if(S.data.settings.history3===false&&snap.player?.run3){snap={...snap,player:{...snap.player,run3:{...snap.player.run3,stats:undefined}}};}return writeRun.call(this,snap);};
 const hurt=G.hurt;G.hurt=function(n,element,cause){const prev=this.incomingSource3,e=this._enemySource;this.incomingSource3={kind:this.incomingKind3||(element==='dot'?'obrażenia w czasie':'kontakt'),cause:cause||e?.name||e?.type?.name||'Obrażenia '+element,enemy:this.incomingEnemy3||e&&{id:e.id,type:e.type.id,name:e.name||e.type.name,elite:e.elite,mini:!!e.mini,isBoss:!!e.isBoss,nemesis:e.nemesis3||false}};if(element==='dot'&&this.player.dotCause3)this.incomingSource3={...this.player.dotCause3,kind:'obrażenia w czasie',cause:'Podpalenie / trucizna: '+this.player.dotCause3.cause};try{return hurt.call(this,n,element,cause);}finally{this.incomingSource3=prev;}};
 const field=G.hurtFromField;G.hurtFromField=function(...args){const old=this.incomingKind3;this.incomingKind3='pola obszarowe';try{return field.apply(this,args);}finally{this.incomingKind3=old;}};
 const hit=G.hit;G.hit=function(e,n,element,opts={}){return this.withSource3(opts.source3||this.damageSource3||'other:unknown',()=>hit.call(this,e,n,element,opts));};
 const bullet=G.bullet;G.bullet=function(x,y,a,n,element,o={}){return bullet.call(this,x,y,a,n,element,{...o,source3:o.source3||(o.weapon23?'weapon:'+o.weapon23:this.damageSource3)||'other:unknown',enemySource3:o.enemy&&this._enemySource?{id:this._enemySource.id,type:this._enemySource.type.id,name:this._enemySource.name||this._enemySource.type.name,elite:this._enemySource.elite,mini:!!this._enemySource.mini,nemesis:!!this._enemySource.nemesis3}:null});};
 const zone=G.zone;G.zone=function(x,y,r,n,element,o={}){return zone.call(this,x,y,r,n,element,{...o,source3:o.source3||this.damageSource3||'other:unknown',enemySource3:o.enemy&&this._enemySource?{id:this._enemySource.id,type:this._enemySource.type.id,name:this._enemySource.name||this._enemySource.type.name,elite:this._enemySource.elite,mini:!!this._enemySource.mini,nemesis:!!this._enemySource.nemesis3}:null});};
 for(const [method,key]of [['cast','skill'],['castUltimate','ultimate'],['castSecondary','secondary'],['dash','skill']]){const old=G[method];G[method]=function(...args){const id=method==='cast'?args[0]:method==='dash'?'comet':this.player.hero.id,before=this.player.dashCd;const result=this.withSource3(key+':'+id,()=>old.apply(this,args));if(method==='dash'&&before<=0&&this.player.dashCd>0&&this.player.run3)this.player.run3.stats.dashes++;return result;};}
 const weaponHit=G.weaponHit23;G.weaponHit23=function(e,b){return this.withSource3(b.source3||'weapon:'+b.weapon23,()=>weaponHit.call(this,e,b));};
 const status=G.applyStatus;G.applyStatus=function(e,element){status.call(this,e,element);if(e.status[element]){e.statusSources3||={};e.statusSources3[element]=this.damageSource3||'other:unknown';}};
 const potion=G.usePotion;G.usePotion=function(){const before=this.player.potions.length,result=potion.call(this);if(this.player.potions.length<before&&this.player.run3)this.player.run3.stats.potions++;return result;};
 const upgrade=G.upgrade;G.upgrade=function(id){const r=this.player.run3,before=new Set(this.runSynergies),result=upgrade.call(this,id);if(result!==false&&r){r.stats.choices.push({time:this.time,type:'skill',id});r.stats.choices=r.stats.choices.slice(-300);r.stats.milestones.firstUpgrade??=this.time;for(const id of this.runSynergies)if(!before.has(id)){r.stats.milestones.firstSynergy??=this.time;r.discoveries.push(id);}}return result;};
 const choose=G.choose;G.choose=function(id){const r=this.player.run3;if(r){r.stats.skipped.push({time:this.time,ids:(this.choices||[]).filter(x=>x.id!==id).map(x=>x.id)});r.stats.skipped=r.stats.skipped.slice(-300);}return choose.call(this,id);};
 const gear=G.chooseGear;G.chooseGear=function(i){const x=this.gearChoices?.[i],r=this.player.run3;if(x&&r){r.stats.choices.push({time:this.time,type:x.kind,id:x.id});if(x.kind==='weapon')r.stats.milestones.firstWeapon??=this.time;}return gear.call(this,i);};
 const reroll=G.reroll;G.reroll=function(){const before=this.rerolls,result=reroll.call(this);if(this.rerolls>before&&this.player.run3)this.player.run3.stats.rerolls++;return result;};
 const spawn=G.spawn;G.spawn=function(...args){const e=spawn.apply(this,args),r=this.player?.run3;if(e&&r){if(e.mini)r.stats.milestones.firstMiniboss??=this.time;if(e.isBoss)r.stats.milestones.finalBoss??=this.time;}return e;};
 const kill=G.kill;G.kill=function(e,...args){if(!e.dead&&e.isBoss&&this.player.run3)this.player.run3.bosses.push({name:e.name||e.type.name,time:this.time});return kill.call(this,e,...args);};
 E.report=function(g,result){const r=g.player.run3,st=r?.stats||E.freshStats(),total=Object.values(st.out).reduce((a,b)=>a+b,0),sources=Object.entries(st.out).map(([id,damage])=>({id,name:E.sourceName(id)||id,damage,percent:total?damage/total*100:0})).sort((a,b)=>b.damage-a.damage),incoming=Object.entries(st.incoming).sort((a,b)=>b[1]-a[1]);return {id:g.player.runId,date:r.startedAt,endedAt:new Date().toISOString(),...E.clone(result),heroId:g.player.hero.id,stage:g.biome+1,rift:g.slice?.rift||0,seed:g.seed,options:E.clone(r.options),keepsakes:E.clone(r.prep.keepsakes),plan:r.prep.plan,curses:[...r.curses,...(g.slice?.curse&&g.slice.curse!=='none'?[g.slice.curse]:[])],weapons:E.clone(g.weapons),synergies:[...g.runSynergies],bossesDefeated:E.clone(r.bosses),cause:result.win?'Ukończona wyprawa':st.lastHit?.cause||'Zakończenie wyprawy',stats:E.clone(st),sources,totalDamage:total,bestWeapon:sources.find(s=>s.id.startsWith('weapon:')),bestSynergy:sources.find(s=>s.id.startsWith('synergy:')),mostIncoming:incoming[0],discovery:r.discoveries.at(-1)||null,depth:r.depth,decision:r.decision||null,clean:!r.prep.keepsakes.length,practice:!!g.cheated||r.training,telemetry:{milestones:st.milestones,choices:st.choices,skipped:st.skipped,rerolls:st.rerolls,potions:st.potions,decision:r.decision||null,retryDelayMs:r.retryDelayMs}};};
 const results=P.results;P.results=function(result){if(!this.g.player?.run3)return results.call(this,result);const g=this.g,m=E.meta(),report=E.report(g,result);g.report3=report;report.newRecord=!m.records[report.heroId]||report.score>m.records[report.heroId];if(!report.practice){m.records[report.heroId]=Math.max(m.records[report.heroId]||0,report.score);if(S.data.settings.history3!==false&&!m.runs.some(r=>r.id===report.id)){m.runs.push(report);m.runs=m.runs.slice(-20);}S.write();}this.results3(report);};
 P.results3=function(r,history=false){this.hud.hidden=true;const esc=E.esc,totalIn=Object.values(r.stats.incoming).reduce((a,b)=>a+b,0),best=r.bestWeapon,next=r.win&&this.g.slice&&r.rift<20&&A.Slice.meta().unlocked>r.rift;this.panel(history?'Kronika wyprawy':r.win?'Szczelina zamknięta':'Koniec wyprawy',`${r.hero} · RIFT ${r.rift} · etap ${r.stage}`,`<div class="stats">${[[U.time(r.time),'Czas'],[r.kills,'Pokonani'],[r.reward,'Odłamki'],[r.score,'Wynik']].map(([n,t])=>`<div class="stat"><strong>${n}</strong><span>${t}</span></div>`).join('')}</div><h2>${esc(best?.name||'Twoje wyposażenie')}</h2><p>${best?E.num(best.percent)+'% obrażeń wyprawy':'Rozwiń broń i spróbuj ponownie.'}</p><h3>${r.win?'Najważniejsze odkrycie':'Przyczyna śmierci'}</h3><p>${esc(r.win?(D.synergies.find(s=>s.id===r.discovery)?.name||'Ukończony etap'):r.cause)}</p>${r.mostIncoming?`<p class="hint">${E.num(r.mostIncoming[1]/Math.max(1,totalIn)*100)}% otrzymanych obrażeń: ${esc(r.mostIncoming[0])}.</p>`:''}<p>${r.newRecord?'NOWY REKORD · ':''}${r.bestSynergy?'Najlepsza synergia: '+esc(r.bestSynergy.name):'Synergie: '+r.synergies.length}</p><details><summary>Szczegóły wyposażenia i walki</summary><div class="catalogTable3">${r.sources.map(s=>`<div><span>${esc(s.name)}</span><b>${E.num(s.damage)} · ${E.num(s.percent)}%</b></div>`).join('')}</div><p>Suma: ${E.num(r.totalDamage)} · krytyki: ${r.stats.crit}<br>Odzyskane HP: ${E.num(r.stats.healed)} · blok pancerza/osłon: ${E.num(r.stats.blocked)}<br>Uniki: ${r.stats.dashes} · mikstury: ${r.stats.potions}</p><p>Seed: ${r.seed} · ${esc(r.date)}<br>Bronie: ${r.weapons.map(w=>esc(D.weaponById[w.id]?.name)+' '+w.level).join(', ')}<br>Pamiątki: ${r.keepsakes.map(x=>esc(E.keepsakes?.[x]?.name||x)).join(', ')||'brak'}<br>Klątwy: ${r.curses.map(x=>esc(E.curses?.[x]?.name||x)).join(', ')||'brak'}</p></details><div class="actions">${history?this.button('POWTÓRZ PRZYGOTOWANIE','repeatPrep3',r.id,'primary'):this.button(next?'NASTĘPNY RIFT':'JESZCZE RAZ','retry3',next?'next':'same','primary retry24')}${this.button('Kronika wypraw','history3')}${this.button('Menu','menu')}</div>`,null);};
 P.history3=function(){this.g.state='history';this.hud.hidden=true;this.panel('Kronika wypraw','Ostatnich 20 ukończonych wypraw',`<div class="catalog">${[...E.meta().runs].reverse().map(r=>`<article><span class="label">${E.esc(new Date(r.date).toLocaleString('pl'))}</span><h3>${E.esc(r.hero)} · ${r.win?'Triumf':'Upadek'}</h3><p>${D.modes[r.mode]?.name||r.mode} · RIFT ${r.rift} · ${U.time(r.time)}<br>${E.esc(r.cause)}<br>Wynik ${r.score}</p>${this.button('Szczegóły','historyDetail3',r.id)}</article>`).join('')||'<p>Brak zapisanych wypraw.</p>'}</div><div class="actions">${this.button('Eksport JSON','export3')}${this.button('Archiwum','archive25')}</div>`,'menu');};
 const archive=P.archive25;P.archive25=function(){archive.call(this);this.overlay.querySelector('.cards')?.insertAdjacentHTML('beforeend',this.button('Kronika wypraw','history3'));};
 E.export=()=>({schema:'AEREN-local-1',exportedAt:new Date().toISOString(),runs:S.data.settings.history3===false?[]:E.meta().runs});
 P.export3=function(){const url=URL.createObjectURL(new Blob([JSON.stringify(E.export(),null,2)],{type:'application/json'})),link=document.createElement('a');link.href=url;link.download='AEREN-telemetria.json';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
 const action=P.action;P.action=function(id,value){if(['history3','export3'].includes(id)){this[id]();return;}if(id==='historyDetail3'){const r=E.meta().runs.find(r=>r.id===value);if(r)this.results3(r,true);return;}if(id==='repeatPrep3'){const r=E.meta().runs.find(r=>r.id===value);if(!r)return;E.meta().prep={plan:r.plan,keepsakes:[...r.keepsakes]};this.prepared3=E.clone(r.options);this.preparation3?.();return;}if(id==='retry3'){const r=this.g.report3;if(!r)return;if(S.data.settings.history3!==false){r.telemetry.retryClicked=true;r.telemetry.retryClickedAt=new Date().toISOString();const stored=E.meta().runs.find(x=>x.id===r.id);if(stored)stored.telemetry=E.clone(r.telemetry);S.write();}this.g.retryFrom3=Date.parse(r.endedAt);const opts={...r.options};if(value==='next')opts.rift=Math.min(20,opts.rift+1);delete opts.seed;this.g.start(opts.hero,opts);return;}return action.call(this,id,value);};
})(window.Aeren);

;

/* Module: js/endgame-preparation.js */
'use strict';
(function(A){
 const {Endgame:E,Data:D,Save:S,U}=A,G=A.Game.prototype,P=A.UI.prototype;
 const rows=[
 ['compass','Kompas Wędrowca','Pierwszy miniboss',['Wskazuje kierunek do pierwszej skrzyni.','Wskazuje także typ skrzyni.','Pierwsza skrzynia daje dodatkowy wybór wyposażenia.']],
 ['seal','Pieczęć Kuźni','Dostępna od początku',['Pierwsza oferta broni częściej pasuje do bohatera.','Pierwsza oferta zawiera dwie różne dostępne bronie.','Pierwsze przelosowanie wyposażenia jest darmowe.']],
 ['vial','Pusta Fiolka','Pierwszy boss',['Start bez mikstur; pierwsze Źródło daje dużą miksturę.','Pierwsza użyta mikstura pozostawia pole regeneracji na 5 s.','W pierwszym Źródle wybierasz dużą miksturę lub regenerację.']],
 ['mirror','Pęknięte Zwierciadło','Dostępna od początku',['Raz na wyprawę przelosuj ofertę umiejętności.','Możesz zatrzymać jedną kartę.','Przelosowanie zawiera składnik pasujący do posiadanej synergii, jeśli taki jest dostępny.']],
 ['seed','Ziarno Głębin','Pierwsza synergia',['Pierwsza synergia: jej bezpośrednie obrażenia +8%.','Dodatkowo przy aktywacji odpycha pobliskich wrogów.','Wybierz: +12% obrażeń tej synergii lub jednorazowe odnowienie uniku.']],
 ['hunter','Znak Łowcy','Pierwszy miniboss',['Pierwszy miniboss ma +20% HP i +10% obrażeń; daje dodatkowy wybór wyposażenia.','Dodatkowa nagroda ma cztery opcje zamiast trzech.','Możesz zamiast dodatkowej nagrody wylosować relikt.']],
 ['map','Niedokończona Mapa','Dostępna od początku',['Ujawnia jeden punkt zainteresowania.','Ujawnia dwa punkty zainteresowania.','Pokazuje również ich rodzaje.']],
 ['phoenix','Popiół Feniksa','Pierwszy triumf RIFT 1',['Raz na wyprawę przywraca 10% HP, po wykorzystaniu Serca Feniksa.','Przywraca 20% HP.','Po powrocie daje 3 s niewrażliwości.']]
 ];
 E.keepsakes=Object.fromEntries(rows.map(([id,name,source,levels])=>[id,{id,name,source,levels}]));
 E.knownPlans=()=>D.synergies.filter(s=>S.data.synergies.includes(s.id)||A.Slice.meta().discoveries[s.id]);
 E.discoveredKeepsake=id=>['seal','mirror','map'].includes(id)||!!E.meta().discovered[id];
 E.buyKeepsake=id=>{const d=E.keepsakes[id],m=E.meta(),rank=m.keepsakes[id]||0,cost=[45,85,140][rank];if(!d||!E.discoveredKeepsake(id)||rank>=3||S.meta3.wallet.silver<cost)return false;const before=E.clone(S.meta3);S.meta3.wallet.silver-=cost;m.keepsakes[id]=rank+1;if(!S.writeMeta23()){S.meta3=before;return false;}return true;};
 E.equipKeepsake=id=>{const m=E.meta(),list=m.prep.keepsakes;if(list.includes(id))m.prep.keepsakes=list.filter(x=>x!==id);else if(m.keepsakes[id]&&list.length<2)list.push(id);else return false;S.write();return true;};
 G.keepsake3=function(id){const r=this.player?.run3;return r?.prep.keepsakes.includes(id)?r.ranks?.[id]||0:0;};
 G.plan3=function(){return D.synergies.find(s=>s.id===this.player?.run3?.prep.plan);};
 G.missingPlan3=function(){const p=this.plan3();return p?[p.a,p.b].filter(id=>!this.has(id)):[];};
 G.compatible3=function(){return D.abilities.filter(a=>this.has(a.id)<a.max&&(!this.slice||A.Slice.skills.includes(a.id))&&(a.type!=='active'||this.has(a.id)||this.player.active.length<3)&&D.synergies.some(s=>(s.a===a.id&&this.has(s.b)||s.b===a.id&&this.has(s.a))));};
 const start=G.start;G.start=function(id,o={}){const v=start.call(this,id,o);if(v===false||o.restoring)return v;const r=this.player.run3,m=E.meta();r.prep.keepsakes=r.prep.keepsakes.filter(k=>m.keepsakes[k]>0).slice(0,2);r.ranks=Object.fromEntries(r.prep.keepsakes.map(k=>[k,m.keepsakes[k]]));if(!E.knownPlans().some(s=>s.id===r.prep.plan))r.prep.plan=null;if(this.slice&&!A.Slice.synergies.includes(r.prep.plan))r.prep.plan=null;r.used.freeReroll=!r.prep.plan;if(this.keepsake3('vial'))this.player.potions=[];const points=this.world.events.filter(e=>e.treasure25&&!e.used);const count=Math.min(this.keepsake3('map'),2);for(const e of points.slice(0,count)){e.discovered=true;e.mapUnknown3=this.keepsake3('map')<3;}if(this.keepsake3('compass'))r.compass=points.find(e=>e.type==='chest')?.id;this.saveRun();return v;};
 // Keep the existing offer pool and constraints; only its selection weights change.
 const roll=G.rollChoices;G.rollChoices=function(){const missing=this.missingPlan3(),weighted=U.weighted;if(!missing.length)return roll.call(this);U.weighted=(list,weight)=>weighted(list,x=>weight(x)*(missing.includes(x.id)?1.3:1));try{return roll.call(this);}finally{U.weighted=weighted;}};
 const card=P.skillCard;P.skillCard=function(a){const html=card.call(this,a),plan=this.g.plan3();return plan&&[plan.a,plan.b].includes(a.id)?html.replace('</h3>','</h3><span class="planBadge3">✦ CEL BUILDU</span>'):html;};
 const level=P.levelUp;P.levelUp=function(...args){level.apply(this,args);const g=this.g,r=g.player.run3,plan=g.plan3();this.overlay.querySelector('.panel')?.insertAdjacentHTML('beforeend',`${plan?`<p class="planBadge3">Cel: ${E.esc(plan.name)} · ${2-g.missingPlan3().length}/2</p>`:''}${g.keepsake3('mirror')&&!r.used.mirror?`<div class="actions">${this.button('Zwierciadło: przelosuj ofertę','mirror3')}${g.keepsake3('mirror')>=2?g.choices.map(a=>this.button('Zachowaj: '+a.name,'mirror3',a.id)).join(''):''}</div>`:''}`);};
 G.mirror3=function(lock){const r=this.player.run3,rank=this.keepsake3('mirror');if(this.state!=='levelup'||!rank||r.used.mirror)return;const kept=rank>=2&&this.choices.find(x=>x.id===lock);r.used.mirror=true;this.choices=this.rollChoices();if(kept)this.choices=[kept,...this.choices.filter(a=>a.id!==kept.id)].slice(0,this.choices.length);if(rank>=3){const a=this.compatible3().find(a=>!this.choices.some(c=>c.id===a.id));if(a&&!this.choices.some(c=>this.compatible3().some(x=>x.id===c.id)))this.choices[this.choices.length-1]=a;}r.stats.rerolls++;this.ui.levelUp(this.choices);this.saveRun();};
 const gear=G.rollGear;G.rollGear=function(){const out=gear.call(this),r=this.player?.run3,rank=this.keepsake3('seal');if(!r||r.used.firstOffer||!rank)return out;r.used.firstOffer=true;const pool=D.weapons.filter(w=>(!w.owner||w.owner===this.player.hero.id)&&this.weaponAvailable23(w.id)&&(!this.slice||A.Slice.weapons.includes(w.id))&&(!this.slice||this.slice.curse!=='one'||w.id===this.weapons[0].id)&&!this.weapons.some(x=>x.id===w.id&&x.level>=5));const matching=pool.filter(w=>w.id===this.player.hero.startWeapon||w.element===D.weaponById[this.weapons[0].id]?.element),pick=matching[0];const reward=w=>({...w,kind:'weapon',level:(this.weapons.find(x=>x.id===w.id)?.level||0)+1});if(pick&&Math.random()<.65)out[0]=reward(pick);if(rank>=2){const other=pool.find(w=>!out.some(x=>x.kind==='weapon'&&x.id===w.id));if(other)out[1]=reward(other);}return out;};
 const reroll=G.reroll;G.reroll=function(){const r=this.player.run3,free=r&&!r.used.freeSpent&&(r.used.freeReroll||this.keepsake3('seal')>=3);if(this.state==='gear'&&free&&this.rewardStage!=='chest'){r.used.freeSpent=true;r.stats.rerolls++;this.gearChoices=this.rollGear();this.ui.gear(this.gearChoices);this.saveRun();return;}return reroll.call(this);};
 const gearUI=P.gear;P.gear=function(...args){gearUI.apply(this,args);const r=this.g.player.run3;if(r&&!r.used.freeSpent&&(r.used.freeReroll||this.g.keepsake3('seal')>=3)&&this.g.rewardStage!=='chest')this.overlay.querySelector('.panel')?.insertAdjacentHTML('beforeend',this.button('Darmowe przelosowanie','freeReroll3'));};
 E.decisions={};
 G.queueDecision3=function(c){this.player.run3.queue.push(c);};
 const resume=G.resume;G.resume=function(){const r=this.player?.run3;if(r&&!this.pendingGear&&!this.pendingEquip&&!this.pendingReplacement){r.choice||=r.queue.shift();if(r.choice){this.state='decision3';this.input.clear();this.ui.decision3();this.saveRun();return;}}return resume.call(this);};
 P.decision3=function(){const c=this.g.player.run3.choice,d=E.decisions[c.kind];if(!d){this.g.player.run3.choice=null;this.g.resume();return;}const view=d.view(this.g,c);this.hud.hidden=true;this.panel(view.title,view.subtitle||'Wybór wyprawy',`<p>${view.text||''}</p><div class="cards">${view.options.map(x=>this.button(x.label,'decision3',x.id)).join('')}</div>`,null);};
 G.resolveDecision3=function(value){const r=this.player.run3,c=r.choice,d=c&&E.decisions[c.kind];if(this.state!=='decision3'||!d||!d.view(this,c).options.some(x=>x.id===value))return;r.choice=null;d.apply(this,c,value);this.saveRun();if(this.state==='decision3')this.resume();};
 const load=G.loadRun;G.loadRun=function(){const ok=load.call(this);if(ok&&this.player.run3.choice){this.state='decision3';this.ui.decision3();}return ok;};
 E.decisions.vial={view:()=>({title:'Pusta Fiolka',text:'Pierwsze Źródło Odnowy. Wybierz jedną miksturę.',options:[{id:'large',label:'Duża mikstura'},{id:'regen',label:'Mikstura regeneracji'}]}),apply:(g,c,id)=>g.takePotion(id)};
 E.decisions.seed={view:()=>({title:'Ziarno Głębin',text:'Wzmocnienie pierwszej synergii na tę wyprawę.',options:[{id:'power',label:'Kwitnienie: obrażenia synergii +12%'},{id:'dash',label:'Ucieczka: natychmiast odnów unik'}]}),apply:(g,c,id)=>{g.player.run3.seedPower=id==='power'?.12:.08;if(id==='dash')g.player.dashCd=0;}};
 E.decisions.hunter={view:()=>({title:'Trofeum Łowcy',text:'Wybierz formę dodatkowej nagrody.',options:[{id:'gear',label:'Cztery opcje wyposażenia'},{id:'relic',label:'Losowy relikt'}]}),apply:(g,c,id)=>{if(id==='relic'){const pool=g.relicOptions();if(pool.length)g.takeRelic(U.pick(pool).id);else g.gold+=30;}else g.hunterGear3();}};
 G.hunterGear3=function(){const out=this.rollGear();if(this.keepsake3('hunter')>=2){const item=this.rollItem();if(!out.some(x=>x.id===item.id))out.push(item);}this.treasureGear25(out,'Trofeum Łowcy');};
 const interact=G.interact;G.interact=function(e){const r=this.player.run3;if(!r||!e||e.used||this.state!=='playing'||U.dist(this.player,e)>=88)return interact.call(this,e);if(e.treasure25==='recovery'&&this.keepsake3('vial')&&!r.used.vial){r.used.vial=true;e.used=true;e.discovered=true;if(this.keepsake3('vial')===3){this.queueDecision3({kind:'vial'});this.resume();}else this.takePotion('large');this.saveRun();return;}const firstChest=e.type==='chest'&&!r.used.chest;const v=interact.call(this,e);if(e.used&&firstChest){r.used.chest=true;if(this.keepsake3('compass')===3){if(this.state==='gear'){const extra=this.rollItem();if(!this.gearChoices.some(x=>x.id===extra.id))this.gearChoices.push(extra);this.ui.gear(this.gearChoices);}else{this.treasureGear25(this.rollGear(),'Dar Kompasu');}}this.saveRun();}return v;};
 const potion=G.usePotion;G.usePotion=function(){const before=this.player.potions.length,v=potion.call(this),r=this.player.run3;if(r&&this.player.potions.length<before&&this.keepsake3('vial')>=2&&!r.used.vialPotion){r.used.vialPotion=true;r.regenField={x:this.player.x,y:this.player.y,until:this.time+5};this.zone(this.player.x,this.player.y,85,0,'nature',{visual:true,life:5,total:5});this.saveRun();}return v;};
 const update=G.update;G.update=function(dt){const playing=this.state==='playing';update.call(this,dt);if(!playing||this.state!=='playing')return;const f=this.player.run3?.regenField;if(f&&this.time<f.until&&U.dist(f,this.player)<85)this.player.hp=Math.min(this.stats.maxHp,this.player.hp+this.stats.maxHp*.015*dt);};
 const upgrade=G.upgrade;G.upgrade=function(id){const old=new Set(this.runSynergies),v=upgrade.call(this,id),r=this.player.run3;if(r)for(const s of this.runSynergies)if(!old.has(s)){E.meta().discovered.seed=true;if(s===r.prep.plan)this.ui.toast('CEL BUILDU UKOŃCZONY',D.synergies.find(x=>x.id===s).name);if(this.keepsake3('seed')&&!r.seedSynergy){r.seedSynergy=s;r.seedPower=.08;if(this.keepsake3('seed')>=2){for(const e of this.enemies)if(U.dist(e,this.player)<200){const a=U.angle(this.player,e);e.kx+=Math.cos(a)*150;e.ky+=Math.sin(a)*150;}this.burst(this.player.x,this.player.y,'#91ffc0',24,160);}if(this.keepsake3('seed')===3)this.queueDecision3({kind:'seed'});}S.write();}return v;};
 const hit=G.hit;G.hit=function(e,n,element,o={}){const r=this.player?.run3;if(r?.seedSynergy&&(o.source3||this.damageSource3)==='synergy:'+r.seedSynergy)n*=1+(r.seedPower||.08);return hit.call(this,e,n,element,o);};
 const spawn=G.spawn;G.spawn=function(...args){const e=spawn.apply(this,args),r=this.player?.run3;if(e?.mini&&r&&this.keepsake3('hunter')&&!r.used.hunterSpawn){r.used.hunterSpawn=true;e.hunter3=true;e.hp*=1.2;e.maxHp=e.hp;e.damage*=1.1;}return e;};
 const kill=G.kill;G.kill=function(e,...args){const alive=!e.dead,r=this.player?.run3;const v=kill.call(this,e,...args);if(alive&&r){if(e.mini){E.meta().discovered.compass=true;E.meta().discovered.hunter=true;}if(e.isBoss)E.meta().discovered.vial=true;if(e.hunter3&&!r.used.hunterReward){r.used.hunterReward=true;if(this.keepsake3('hunter')===3)this.queueDecision3({kind:'hunter'});else this.queueDecision3({kind:'hunterGear'});}if(e.mini||e.isBoss)S.write();}return v;};
 E.decisions.hunterGear={view:()=>({title:'Trofeum Łowcy',options:[{id:'gear',label:'Odbierz dodatkowe wyposażenie'}]}),apply:g=>g.hunterGear3()};
 const finish=G.finish;G.finish=function(win){const r=this.player?.run3,rank=this.keepsake3('phoenix');if(!win&&r&&this.player.hp<=0&&rank&&!r.used.phoenix){r.used.phoenix=true;this.player.hp=Math.max(1,this.stats.maxHp*(rank>=2?.2:.1));this.player.invuln=rank>=3?3:0;this.ui.toast('Popiół Feniksa','Pamiątka wykorzystana — kolejna śmierć kończy wyprawę.');this.saveRun();return;}if(win&&this.slice?.rift>=1)E.meta().discovered.phoenix=true;return finish.call(this,win);};
 const award=S.award;S.award=function(result){const r=A.game.player?.run3;if(r&&!r.prep.keepsakes.length&&!result.cleanBonus3){result.cleanBonus3=true;result.reward=Math.round(result.reward*1.15);}return award.call(this,result);};
 P.preparation3=function(){this.g.state='preparation3';this.hud.hidden=true;const m=E.meta(),o=this.prepared3;this.panel('Przygotowanie wyprawy','Plan synergii i maksymalnie dwie Pamiątki',`<p>${o?`${E.esc(D.heroes.find(h=>h.id===o.hero)?.name)} · ${D.modes[o.mode]?.name} · RIFT ${o.rift}`:'Przygotowanie dotyczy następnej wyprawy.'}</p><h3>Cel buildu</h3><div class="actions">${this.button('BEZ PLANU · darmowe przelosowanie','plan3','none',!m.prep.plan?'primary':'')}${E.knownPlans().map(s=>this.button(s.name,'plan3',s.id,m.prep.plan===s.id?'primary':'')).join('')}</div><p>Plan: waga brakującego składnika ×1,3. Ukryte synergie pojawiają się dopiero po odkryciu. Cele niedostępne w Pieczęci są pomijane.</p><h3>Pamiątka Główna · Pamiątka Pomocnicza</h3><p>${m.prep.keepsakes.map(id=>E.keepsakes[id]?.name).join(' / ')||'Puste miejsca · Czysta Wyprawa: +15% końcowych odłamków'}</p><div class="actions">${this.button('Zmień Pamiątki','keepsakes3')}${this.button('WYPRAWA BEZ PAMIĄTEK','clean3')}</div><div class="actions">${o?this.button('Rozpocznij przygotowaną wyprawę','preparedLaunch3','','primary'):''}${this.button('Wybór wyprawy','expedition25')}</div>`,'menu');};
 P.keepsakes3=function(){const m=E.meta();this.g.state='keepsakes3';this.hud.hidden=true;this.panel('PAMIĄTKI','Stałe przygotowanie wyprawy · srebro '+S.meta3.wallet.silver,`<p>Dwa miejsca: ${m.prep.keepsakes.map(k=>E.keepsakes[k].name).join(' / ')||'puste'}. Poziomy zostają ustalone na początku wyprawy.</p><div class="catalog">${rows.map(([id])=>{const d=E.keepsakes[id],n=m.keepsakes[id]||0,known=E.discoveredKeepsake(id);return `<article><h3>${known?d.name:'???'}</h3><p>${known?`Poziom ${n}/3<br>${n?d.levels[n-1]:'Nieposiadana'}<br>${n<3?'Następny: '+d.levels[n]:''}`:'Źródło: '+d.source}</p>${known&&n<3?this.button('Rozwój · '+[45,85,140][n]+' srebra','buyKeepsake3',id):''}${n?this.button(m.prep.keepsakes.includes(id)?'Zdejmij':'Załóż','equipKeepsake3',id):''}<details><summary>Wszystkie poziomy</summary>${d.levels.map((s,i)=>`<p>${i+1}. ${s}</p>`).join('')}</details></article>`;}).join('')}</div><div class="actions">${this.button('Przygotowanie','preparation3')}${this.button('Sanktuarium','sanctuary25')}</div>`,'menu');};
 const sanctuary=P.sanctuary25;P.sanctuary25=function(...args){sanctuary.apply(this,args);this.overlay.querySelector('.sanctuaryTabs25')?.insertAdjacentHTML('beforeend',this.button('Pamiątki','keepsakes3'));};
 const setup=P.sliceSetup;P.sliceSetup=function(...args){setup.apply(this,args);this.overlay.querySelector('.panel')?.insertAdjacentHTML('beforeend',this.button('Plan synergii i Pamiątki','preparation3'));};
 const heroes=P.heroes;P.heroes=function(...args){heroes.apply(this,args);this.overlay.querySelector('.panel')?.insertAdjacentHTML('beforeend',this.button('Plan synergii i Pamiątki','preparation3'));};
 const hud=P.update;P.update=function(dt){hud.call(this,dt);const r=this.g.player?.run3;if(this.hud.hidden||!r?.compass||r.used.chest)return;const e=this.g.world.events.find(e=>e.id===r.compass&&!e.used);if(!e)return;const el=document.getElementById('interaction');if(el){const a=U.angle(this.g.player,e),dirs=['→','↘','↓','↙','←','↖','↑','↗'];el.textContent=dirs[(Math.round(a/(Math.PI/4))+8)%8]+' Kompas · '+Math.round(U.dist(e,this.g.player))+' m'+(this.g.keepsake3('compass')>=2?' · '+A.treasures25[e.treasure25].name:'');}};
 const action=P.action;P.action=function(id,value){if(['preparation3','keepsakes3'].includes(id)){this[id]();return;}if(id==='decision3'){this.g.resolveDecision3(value);return;}if(id==='mirror3'){this.g.mirror3(value);return;}if(id==='freeReroll3'){this.g.reroll();return;}if(id==='plan3'){if(value==='none'||E.knownPlans().some(s=>s.id===value)){E.meta().prep.plan=value==='none'?null:value;S.write();}this.preparation3();return;}if(id==='clean3'){E.meta().prep.keepsakes=[];S.write();this.preparation3();return;}if(id==='buyKeepsake3'||id==='equipKeepsake3'){(id==='buyKeepsake3'?E.buyKeepsake:E.equipKeepsake)(value);this.keepsakes3();return;}if(id==='preparedLaunch3'&&this.prepared3){const o={...this.prepared3};delete o.seed;this.g.start(o.hero,o);return;}return action.call(this,id,value);};
})(window.Aeren);


;

/* Module: js/endgame-risk.js */
'use strict';
(function(A){const {Endgame:E,Data:D,Save:S,U}=A,G=A.Game.prototype,P=A.UI.prototype;
 E.curses={
  bell:{name:'Martwy Dzwon',good:'Promień eksplozji +45 jednostek.',bad:'Własne eksplozje zadają Ci 12% swoich obrażeń, gdy stoisz w ich zasięgu.',links:'Meteory, młoty, eksplozje'},
  hunger:{name:'Korona Głodu',good:'Zabicie elity lub minibossa przywraca 22 HP.',bad:'Zwykłe leczenie, regeneracja i mikstury nie leczą.',links:'Polowanie na elity'},
  mirror:{name:'Zwierciadło Potępionych',good:'Pociski broni odbijają się do dwóch pobliskich celów.',bad:'Pierwsze trafienie −15%, każde odbicie zachowuje 60% obrażeń poprzedniego.',links:'Bronie pociskowe'},
  spark:{name:'Ostatnia Iskra',good:'Poniżej 30% HP: +8 ATK i +0,25 ataku/s.',bad:'Od 30% HP: −2 ATK. Otrzymujesz +10% obrażeń.',links:'Ryzykowna walka na niskim HP'},
  silence:{name:'Pieczęć Ciszy',good:'Bezpośrednie trafienia Q/E/R: +8 obrażeń przed odpornościami celu.',bad:'Moc F jest zablokowana.',links:'Aktywne umiejętności'},
  one:{name:'Przysięga Jednej Broni',good:'Broń może rozwinąć się do poziomu 7, jeżeli obsługuje Przebudzenie.',bad:'Zostaje tylko broń startowa; dwie dodatkowe bronie są bezpowrotnie usuwane z tej wyprawy.',links:'Przebudzenie broni'}
 };
 G.curse3=function(id){return !!this.player?.run3?.curses.includes(id);};
 G.offerCurse3=function(id){if(!E.curses[id]||this.curse3(id)||id==='one'&&!E.awakenings?.[this.weapons[0].id])return;this.queueDecision3({kind:'curse',id});};
 E.decisions.curse={view:(g,c)=>{const d=E.curses[c.id];return {title:d.name,subtitle:'Przeklęty relikt · tylko na tę wyprawę',text:`<b>Korzyść:</b> ${d.good}<br><b>Wada:</b> ${d.bad}<br>Współpracuje z: ${d.links}<br>Przyjęcie jest nieodwracalne w tej wyprawie.`,options:[{id:'accept',label:'Rozumiem wadę — przyjmij klątwę'},{id:'reject',label:'Odrzuć'}]};},apply:(g,c,id)=>{if(id!=='accept')return;g.player.run3.curses.push(c.id);if(c.id==='one')g.weapons=g.weapons.slice(0,1);g.recalculate();}};
 const interact=G.interact;G.interact=function(e){const valid=e?.treasure25==='corrupted'&&!e.used&&this.state==='playing'&&U.dist(e,this.player)<88,v=interact.call(this,e);if(valid&&e.used){const pool=Object.keys(E.curses).filter(id=>!this.curse3(id)&&(id!=='one'||E.awakenings?.[this.weapons[0].id]));if(pool.length)this.offerCurse3(U.pick(pool));}return v;};
 G.allowHealing3=function(){return !this.curse3('hunger')||this.specialHeal3||this.settingHealth3;};
 const potion=G.usePotion;G.usePotion=function(){if(this.curse3('hunger')){this.ui.toast('Korona Głodu','Życie odzyskasz za pokonanie elity.');return false;}return potion.call(this);};
 const finishPhoenix=G.finish; // Phoenix revives remain a distinct effect, not ordinary healing.
 const ultimate=G.castUltimate;G.castUltimate=function(...args){if(this.curse3('silence'))return false;return ultimate.apply(this,args);};
 const recalc=G.recalculate;G.recalculate=function(){const v=recalc.call(this);if(this.curse3('spark'))this.stats.incoming*=1.1;return v;};
 const hit=G.hit;G.hit=function(e,n,element,o={}){const source=o.source3||this.damageSource3||'';if(this.curse3('silence')&&source.startsWith('skill:')&&D.byId[source.slice(6)]?.type==='active')n+=8;return hit.call(this,e,n,element,o);};
 const zone=G.zone;G.zone=function(x,y,r,n,element,o={}){o={bell3:false,bellHit3:false,explosion3:false,...o};const explosion=!o.enemy&&!o.visual&&(o.explosion3||o.once&&['fire','stone','arcane'].includes(element));if(explosion&&this.curse3('bell')){r+=45;o={...o,bell3:true};}return zone.call(this,x,y,r,n,element,o);};
 const zones=G.updateZones;G.updateZones=function(dt){for(const z of this.zones.active)if(z.bell3&&!z.bellHit3&&z.delay<=0&&U.dist(z,this.player)<z.r+this.player.r){z.bellHit3=true;this.hurtFromField(z.damage*.12,z.element,'Własna eksplozja · Martwy Dzwon');}return zones.call(this,dt);};
 const bullet=G.bullet;G.bullet=function(x,y,a,n,element,o={}){if(!o.enemy&&o.weapon23&&this.curse3('mirror')&&!o.ricochet3)n*=.85;return bullet.call(this,x,y,a,n,element,o);};
 const weaponHit=G.weaponHit23;G.weaponHit23=function(e,b){const v=weaponHit.call(this,e,b);if(this.curse3('mirror')&&(b.ricochet3||0)<2){const target=this.nearEnemies(350,20).find(x=>x.id!==e.id&&!b.hitIds.includes(x.id)&&!(b.visited3||[]).includes(x.id));if(target)this.bullet(e.x,e.y,U.angle(e,target),b.damage*.6,b.element,{basic:true,weapon23:b.weapon23,weaponLevel23:b.weaponLevel23,ricochet3:(b.ricochet3||0)+1,visited3:[...(b.visited3||[]),e.id],source3:b.source3,life:.65});}return v;};
 const rollGear=G.rollGear;G.rollGear=function(){let out=rollGear.call(this);if(this.curse3('one'))out=out.filter(x=>x.kind!=='weapon'||x.id===this.weapons[0].id);return out;};
 const choose=G.chooseGear;G.chooseGear=function(i){if(this.curse3('one')&&this.gearChoices[i]?.kind==='weapon'&&this.gearChoices[i].id!==this.weapons[0].id)return;return choose.call(this,i);};
 const kill=G.kill;G.kill=function(e,...args){const alive=!e.dead;if(alive&&this.curse3('hunger')&&(e.elite>=0||e.mini)){this.specialHeal3=true;try{this.player.hp=Math.min(this.stats.maxHp,this.player.hp+22);}finally{this.specialHeal3=false;}}return kill.call(this,e,...args);};
 // Banking uses the existing victory settlement and its receipts. The overlay and
 // run deletion are delayed so a deeper attempt never puts the base reward at risk.
 const clear=S.clearRun;S.clearRun=function(){if(A.game?.banking3)return;return clear.call(this);};
 const results=P.results;P.results=function(r){if(this.g.banking3){this.g.player.run3.bank=E.clone(r);return;}return results.call(this,r);};
 G.bankVictory3=function(){const r=this.player.run3;if(r.bank)return;r.bankingPending=true;this.saveRun();this.banking3=true;try{finishPhoenix.call(this,true);}finally{this.banking3=false;this.endSaved=false;}r.bankingPending=false;this.state='playing';this.saveRun();};
 G.finish=function(win){const r=this.player?.run3;if(!r||r.training)return finishPhoenix.call(this,win);if(!win&&this.player.hp<=0&&this.keepsake3('phoenix')&&!r.used.phoenix){this.specialHeal3=true;try{return finishPhoenix.call(this,false);}finally{this.specialHeal3=false;}}
  if(win&&!r.bank&&!r.depth){this.bankVictory3();this.enemies=[];for(const b of this.projectiles.active)b.life=0;for(const z of this.zones.active)z.life=0;this.boss=null;r.queue=[];r.choice={kind:'depth'};this.pendingGear=false;this.pendingEquip=null;this.pendingReplacement=null;if(this.slice){this.slice.queue=[];this.slice.choice=null;}this.resume();return;}
  if(r.bank){if(this.endSaved)return;const bonus=win&&r.depth?{silver:100+(this.slice?.rift||0)*5,tokens:4,crystals:1}:null;if(bonus&&!this.cheated)S.grant23(this.player.runId+':depth',bonus);this.endSaved=true;this.state='results';const result={...r.bank,win:!!win,time:this.time,kills:this.kills,score:this.kills+(win?3000:2500),depthWin:!!win&&!!r.depth,baseVictory:true,depthReward:bonus};this.result=result;S.clearRun();this.ui.results(result);return;}
  return finishPhoenix.call(this,win);
 };
 E.decisions.depth={view:g=>({title:'Szczelina ucichła',subtitle:'Zwycięstwo i podstawowe nagrody zostały zapisane',text:`Zachowujesz ${g.player.run3.bank?.reward||0} końcowych odłamków, otrzymane waluty i odblokowany postęp.<br><b>Zejdź głębiej:</b> dodatkowy etap 90 s i Spaczony Strażnik. Wrogowie: +45% HP, +20% ataku i +10% szybkości.<br>Triumf: ${100+(g.slice?.rift||0)*5} srebra, 4 żetony i 1 kryształ. Porażka: tracisz wyłącznie tę dodatkową nagrodę.`,options:[{id:'close',label:'ZAMKNIJ SZCZELINĘ'},{id:'deeper',label:'ZEJDŹ GŁĘBIEJ'}]}),apply:(g,c,id)=>{const r=g.player.run3;r.decision=id;if(id==='close'){g.finish(true);return;}r.depth=1;r.depthStarted=g.time;r.depthBoss=false;g.stageBossSpawned=true;g.boss=null;g.player.invuln=2;g.ui.toast('GŁĘBIA','90 sekund do Spaczonego Strażnika. Podstawowa nagroda jest bezpieczna.');}};
 const spawn=G.spawn;G.spawn=function(...args){const e=spawn.apply(this,args);if(e&&this.player?.run3?.depth){e.hp*=1.45;e.maxHp=e.hp;e.damage*=1.2;e.speed*=1.1;e.corrupted3=true;e.name='Spaczony '+(e.name||e.type.name);}return e;};
 const director=G.director;G.director=function(dt){const r=this.player?.run3;if(!r?.depth)return director.call(this,dt);this.directorTimer-=dt;if(this.directorTimer<=0&&!this.boss){this.directorTimer=2.4;for(let i=0;i<3;i++)this.spawn(D.enemyTypes[(Math.floor(this.time)+i)%Math.min(8,D.enemyTypes.length)],{elite:i===0?4:-1});}if(this.time-r.depthStarted>=90&&!r.depthBoss){r.depthBoss=true;const type={id:'depthBoss3',name:this.seed%4===0?'Echo Nienazwanego':'Strażnik Głębin',ai:'boss',hp:1,speed:64,damage:24,r:48,color:'#d589ff'};this.boss=this.spawn(type,{isBoss:true,elite:-1,hp:2200*(1+(this.slice?.rift||0)*.1),cd:2.5,attackIndex:0});this.ui.toast('STRAŻNIK GŁĘBIN','Ostatnia próba dodatkowego etapu');this.saveRun();}};
 const update=G.update;G.update=function(dt){const active=this.state==='playing';update.call(this,dt);if(active&&this.state==='playing'){const r=this.player.run3;if(this.curse3('spark')){const low=this.player.hp/this.stats.maxHp<.3;if(low!==r.sparkLow){r.sparkLow=low;this.recalculate();}}if(r.queue.length&&!this.boss)this.resume();}};
 const resultUI=P.results3;P.results3=function(r,...args){resultUI.call(this,r,...args);if(r.baseVictory)this.overlay.querySelector('.panel')?.insertAdjacentHTML('beforeend',`<p class="planBadge3">Podstawowa wyprawa ukończona. ${r.depthWin?'Głębia pokonana: dodatkowe srebro, żetony i kryształ.':r.depth?'Upadek w Głębi: podstawowa nagroda i postęp zachowane.':'Gwarantowana nagroda zachowana.'}</p>`);};
})(window.Aeren);


;

/* Module: js/endgame-events.js */
'use strict';
(function(A){const {Endgame:E,Data:D,Save:S,U}=A,G=A.Game.prototype,P=A.UI.prototype,R=A.Renderer.prototype;
 E.tasks={defend:{name:'Obrona runy',goal:'Pozostań w promieniu 120 od runy przez 30 s.',time:55,difficulty:'Średnia',reward:35},elite:{name:'Szybkie łowy',goal:'Pokonaj oznaczoną elitę przed końcem czasu.',time:45,difficulty:'Trudna',reward:45},dry:{name:'Sucha próba',goal:'Przetrwaj 40 s bez mikstury.',time:40,difficulty:'Średnia',reward:30},seals:{name:'Trzy pieczęcie',goal:'Dotrzyj do trzech oznaczonych pieczęci.',time:60,difficulty:'Łatwa',reward:30}};
 G.offerTask3=function(id){if(this.boss||this.player.run3.task||!E.tasks[id])return false;this.queueDecision3({kind:'task',id});return true;};
 E.decisions.task={view:(g,c)=>{const d=E.tasks[c.id];return {title:d.name,text:`${d.goal}<br>Czas: ${d.time} s · trudność: ${d.difficulty}<br>Nagroda: ${d.reward} srebra i 1 żeton. Porażka nie blokuje wyprawy.`,options:[{id:'accept',label:'Podejmij zadanie'},{id:'reject',label:'Pomiń'}]};},apply:(g,c,id)=>{if(id!=='accept'||g.boss)return;const d=E.tasks[c.id],r=g.player.run3,t=r.task={id:c.id,started:g.time,progress:0,potions:r.stats.potions,points:[]};if(c.id==='elite'){const e=g.spawn(D.enemyTypes[0],{elite:4,task3:true});if(e){e.name='Strażnik wyzwania';t.enemy=e.id;}else r.task=null;}if(c.id==='defend')t.points.push({...g.world.freePoint(g.player.x+100,g.player.y),done:false});if(c.id==='seals')for(let i=0;i<3;i++){const a=i*Math.PI*2/3;t.points.push({...g.world.freePoint(g.player.x+Math.cos(a)*230,g.player.y+Math.sin(a)*230),done:false});}g.saveRun();}};
 G.endTask3=function(win){const r=this.player.run3,t=r.task;if(!t)return;const d=E.tasks[t.id];if(win&&!r.training&&!this.cheated)S.grant23(this.player.runId+':task:'+t.started,{silver:d.reward,tokens:1});r.taskResults||=[];r.taskResults.push({id:t.id,win,time:this.time});r.task=null;if(win){r.taskAwakening=true;this.cue3?.('task');}this.ui.toast(win?'ZADANIE WYKONANE':'Zadanie zakończone',win?`+${d.reward} srebra · +1 żeton · dostęp do Przebudzenia broni`:'Wyprawa trwa dalej.');this.saveRun();};
 const update=G.update;G.update=function(dt){const active=this.state==='playing';update.call(this,dt);if(!active||this.state!=='playing')return;const r=this.player.run3;if(!r||r.training)return;
  r.nextTask??=100;if(this.time>=r.nextTask&&!this.boss&&!r.task&&!r.depth){r.nextTask=this.time+180;const ids=Object.keys(E.tasks);this.offerTask3(ids[Math.floor(this.time/180)%ids.length]);this.resume();return;}
  const t=r.task;if(t){if(this.boss){this.endTask3(false);return;}const elapsed=this.time-t.started,d=E.tasks[t.id];if(t.id==='defend'&&U.dist(this.player,t.points[0])<120)t.progress+=dt;if(t.id==='seals')for(const pt of t.points)if(U.dist(this.player,pt)<50)pt.done=true;const done=t.id==='defend'?t.progress>=30:t.id==='seals'?t.points.every(p=>p.done):t.id==='dry'?elapsed>=40&&r.stats.potions===t.potions:t.progress===1;if(done)this.endTask3(true);else if(elapsed>=d.time||t.id==='dry'&&r.stats.potions!==t.potions)this.endTask3(false);}
  const n=E.meta().nemesis;if(n?.active&&!r.nemesisSpawned&&this.time>=(r.revenge?55:240)&&!this.boss){r.nemesisSpawned=true;const type=D.enemyTypes.find(d=>d.id===n.type)||D.enemyTypes[0],e=this.spawn(type,{mini:true,elite:-1,nemesis3:true});if(e){e.name=n.name+', '+n.title;e.hp*=1.2;e.maxHp=e.hp;e.damage*=1.1;e.resist3=n.element;this.ui.toast('NEMEZIS',e.name+' · redukcja '+n.element+' 25%');this.cue3?.('nemesis');this.saveRun();}}
 };
 const kill=G.kill;G.kill=function(e,...args){const alive=!e.dead,r=this.player?.run3;if(alive&&r?.task?.enemy===e.id)r.task.progress=1;if(alive&&e.nemesis3&&!r?.training){const n=E.meta().nemesis;if(n){n.losses++;n.active=false;n.log=(n.log||[]).concat(new Date().toISOString()+' · pokonany').slice(-10);E.meta().discovered.phoenix=true;if(!this.cheated)S.grant23(this.player.runId+':nemesis',{silver:55+Math.min(n.wins,5)*10,tokens:3});S.write();this.ui.toast('ZEMSTA DOKONANA','Odkryto Popiół Feniksa. Nemezis trafia do Archiwum.');}}return kill.call(this,e,...args);};
 const hit=G.hit;G.hit=function(e,n,element,o){if(e?.resist3===element)n*=.75;return hit.call(this,e,n,element,o);};
 const finish=G.finish;G.finish=function(win){const r=this.player?.run3,enemy=r?.stats.lastHit?.enemy,canRevive=this.keepsake3('phoenix')&&!r?.used.phoenix;if(!win&&!this.abandonedRun&&!canRevive&&r&&!r.training&&!this.cheated&&enemy&&(enemy.mini||enemy.elite>=0)&&!r.nemesisRecorded){r.nemesisRecorded=true;const m=E.meta(),old=m.nemesis;let n=old?.active?old:null;if(!n){const names=['Varok','Naeris','Kharon','Velra'];n={name:names[this.seed%names.length],title:'Łamacz Pieczęci',type:enemy.type,element:r.stats.lastHit.element,trait:'Redukcja obrażeń swojego żywiołu o 25%',wins:0,losses:0,active:true,log:[]};}if(enemy.nemesis||!old?.active){n.wins++;n.active=true;n.log.push(new Date().toISOString()+' · pokonał '+this.player.hero.name);n.log=n.log.slice(-10);m.nemesis=n;S.write();}}return finish.call(this,win);};
 const start=G.start;G.start=function(id,o={}){const v=start.call(this,id,o);if(v!==false&&!o.restoring)this.player.run3.revenge=!!o.revenge3;return v;};
 P.nemesis3=function(){const n=E.meta().nemesis;this.g.state='archive';this.hud.hidden=true;this.panel('Nemezis','Jeden osobisty przeciwnik',n?`<h2>${E.esc(n.name)}, ${E.esc(n.title)}</h2><p>${n.active?'Aktywny':'Pokonany'} · zwycięstwa nad Tobą: ${n.wins} · porażki: ${n.losses}<br>${E.esc(n.trait)} (${E.esc(n.element)})<br>Nagroda: Popiół Feniksa oraz ${55+Math.min(n.wins,5)*10} srebra i 3 żetony.</p><p>${n.log.map(E.esc).join('<br>')}</p>${n.active?this.button('Wyprawa Zemsty · podstawowa Pieczęć','revenge3'):''}`:'Jeszcze żadna elita nie stała się Twoim Nemezis.','archive25');};
 const archive=P.archive25;P.archive25=function(...args){archive.apply(this,args);this.overlay.querySelector('.cards')?.insertAdjacentHTML('beforeend',this.button('Nemezis','nemesis3'));};
 const action=P.action;P.action=function(id,v){if(id==='nemesis3'){this.nemesis3();return;}if(id==='revenge3'){this.g.start('ilya',{slice:true,mode:'normal',rift:0,revenge3:true});return;}return action.call(this,id,v);};
 const draw=R.event;R.event=function(c,e){if(!e.taskMarker3)return draw.call(this,c,e);if(e.done)return;c.save();c.strokeStyle='#92e7ff';c.lineWidth=3;c.beginPath();c.arc(e.x,e.y,e.defend?120:38,0,Math.PI*2);c.stroke();c.font='bold 16px Arial';c.textAlign='center';c.fillStyle='#fff';c.fillText(e.defend?'BROŃ RUNY':'PIECZĘĆ',e.x,e.y);c.restore();};
 const render=R.render; if(render)R.render=function(...args){const g=this.g,t=g.player?.run3?.task,events=g.world?.events;if(t&&events){const marks=t.points.map(p=>({...p,taskMarker3:true,defend:t.id==='defend'}));events.push(...marks);try{return render.apply(this,args);}finally{g.world.events=events.filter(e=>!e.taskMarker3);}}return render.apply(this,args);};
 const hud=P.update;P.update=function(dt){hud.call(this,dt);let el=document.getElementById('task3');const t=this.g.player?.run3?.task;if(!el){el=document.createElement('div');el.id='task3';el.className='task3';this.hud.append(el);}el.hidden=!t||this.hud.hidden;if(t){const d=E.tasks[t.id];el.textContent=`${d.name} · ${Math.max(0,Math.ceil(d.time-(this.g.time-t.started)))} s · ${t.id==='defend'?Math.floor(t.progress)+'/30 s':t.id==='seals'?t.points.filter(p=>p.done).length+'/3':d.goal}`;}};
})(window.Aeren);

;

/* Module: js/endgame-training.js */
'use strict';
(function(A){const {Endgame:E,Data:D,Save:S}=A,G=A.Game.prototype,P=A.UI.prototype;
 E.trainingWeapons=()=>D.weapons.filter(w=>S.meta3.discovered['weapon:'+w.id]||D.heroes.some(h=>S.data.heroes.includes(h.id)&&h.startWeapon===w.id));
 E.trainingSkills=()=>D.abilities.filter(a=>S.meta3.discovered['skill:'+a.id]||S.data.seen?.includes(a.id)||S.data.synergies.some(id=>{const s=D.synergies.find(x=>x.id===id);return s&&(s.a===a.id||s.b===a.id);}));
 for(const name of ['write','writeMeta23','writeRun','clearRun','award','grant23']){const old=S[name];S[name]=function(...args){if(A.game?.training3)return true;return old.apply(this,args);};}
 for(const name of ['discover23','challenge23','gainXP']){const old=G[name];G[name]=function(...args){if(this.training3)return;return old.apply(this,args);};}
 G.enterTraining3=function(){if(this.training3)return;this.trainingProfile3={data:S.data,meta:S.meta3};S.data=E.clone(S.data);S.meta3=E.clone(S.meta3);this.training3=true;const hero=S.data.heroes[0]||'ilya';this.start(hero,{training3:true,mode:'normal'});this.player.run3.training=true;this.world.events=[];this.enemies=[];this.player.potions=['small','large'];this.ui.training3();};
 G.exitTraining3=function(){if(!this.training3)return;const saved=this.trainingProfile3;S.data=saved.data;S.meta3=saved.meta;this.training3=false;this.trainingProfile3=null;this.ui.menu();};
 G.resetTraining3=function(group=false){if(!this.training3)return;this.enemies=[];this.projectiles.active.length=0;this.zones.active.length=0;this.player.run3.stats=E.freshStats();this.player.run3.trainingStarted=this.time;this.player.hp=this.stats.maxHp;this.player.ultCd=0;this.player.secondaryCd=0;this.player.cooldowns={};for(const w of this.weapons)w.cd=0;for(let i=0;i<(group?8:1);i++){const e=this.spawn(D.enemyTypes[0],{x:this.player.x+160+(i%3)*55,y:this.player.y+(Math.floor(i/3)-1)*60,elite:-1});if(e){e.hp=e.maxHp=group?250:1e8;e.damage=0;e.speed=0;e.trainingDummy3=true;}}this.grid.clear();for(const e of this.enemies)this.grid.insert(e);};
 const director=G.director;G.director=function(dt){if(this.training3)return;return director.call(this,dt);};
 const kill=G.kill;G.kill=function(e,...args){if(this.training3){e.dead=true;e.hp=0;return;}return kill.call(this,e,...args);};
 const finish=G.finish;G.finish=function(...args){if(this.training3){this.player.hp=this.stats.maxHp;this.ui.training3();return;}return finish.apply(this,args);};
 const forge=P.forge23;P.forge23=function(...args){forge.apply(this,args);this.overlay.querySelector('.panel')?.insertAdjacentHTML('beforeend',this.button('Kuźnia testowa · bez nagród','enterTraining3'));};
 P.training3=function(){const g=this.g;if(!g.training3)return;g.state='trainingSetup3';this.hud.hidden=true;this.panel('Kuźnia testowa','Arena nie zapisuje postępu, walut ani osiągnięć',`<h3>Broń</h3><div class="actions">${E.trainingWeapons().map(w=>this.button(w.name,'trainingWeapon3',w.id,g.weapons[0].id===w.id?'primary':'')).join('')}</div><p>Poziom: ${g.weapons[0].level}</p><div class="actions">${[1,2,3,4,5,6,7].filter(n=>n<=5||E.awakenings?.[g.weapons[0].id]).map(n=>this.button(String(n),'trainingLevel3',String(n))).join('')}</div><h3>Odkryte umiejętności</h3><div class="actions">${E.trainingSkills().map(a=>this.button(a.name,'trainingSkill3',a.id)).join('')||'Najpierw odkryj umiejętności podczas wyprawy.'}</div><h3>Odkryte synergie</h3><div class="actions">${E.knownPlans().map(s=>this.button(s.name,'trainingSynergy3',s.id)).join('')}</div><p>Wybrane: ${Object.keys(g.player.skills).map(id=>D.byId[id]?.name).join(', ')||'brak'}</p><div class="actions">${this.button('Nieruchomy cel · reset pomiaru','trainingGo3','dummy','primary')}${this.button('Grupa 8 słabych wrogów','trainingGo3','group')}${this.button('Wyczyść umiejętności','trainingClear3')}${this.button('Wyjdź z areny','exitTraining3')}</div>`,'exitTraining3');};
 const hud=P.update;P.update=function(dt){hud.call(this,dt);if(!this.g.training3)return;let el=document.getElementById('trainingMeter3');if(!el){el=document.createElement('div');el.id='trainingMeter3';el.className='trainingMeter3';this.hud.append(el);}const r=this.g.player.run3,total=Object.values(r.stats.out).reduce((a,b)=>a+b,0),elapsed=Math.max(.1,this.g.time-(r.trainingStarted||this.g.time));el.innerHTML=`DPS ${E.num(total/elapsed)} · obrażenia ${E.num(total)} · trafienia ${r.stats.hits} ${this.button('Ustawienia areny','training3')}`;};
 const action=P.action;P.action=function(id,v){const g=this.g;if(id==='enterTraining3'){g.enterTraining3();return;}if(id==='exitTraining3'){g.exitTraining3();return;}if(id==='training3'){this.training3();return;}if(g.training3&&id==='menu'){g.exitTraining3();return;}if(g.training3&&id.startsWith('training')){if(id==='trainingWeapon3'&&E.trainingWeapons().some(w=>w.id===v))g.weapons=[{id:v,level:1,cd:0}];if(id==='trainingLevel3'){const n=Number(v);if(n>=1&&n<=(E.awakenings?.[g.weapons[0].id]?7:5))g.weapons[0].level=n;}if(id==='trainingSkill3'&&E.trainingSkills().some(a=>a.id===v))g.upgrade(v);if(id==='trainingSynergy3'){const s=E.knownPlans().find(s=>s.id===v);if(s){g.upgrade(s.a);g.upgrade(s.b);}}if(id==='trainingClear3'){g.player.skills={};g.player.active=[];g.runSynergies.clear();}g.recalculate();if(id==='trainingGo3'){g.resetTraining3(v==='group');g.resume();return;}this.training3();return;}return action.call(this,id,v);};
})(window.Aeren);


;

/* Module: js/endgame-evolution.js */
'use strict';
(function(A){const {Endgame:E,Data:D,Save:S,U}=A,G=A.Game.prototype,P=A.UI.prototype;
 E.awakenings={bow:['Przebity cel uwalnia dwie boczne strzały o 25% siły.','Co piąta salwa pozostawia linię trzech korzeni.'],staff:['Trafienie zostawia przez 2 s mały płomień o 12% siły.','Co czwarta salwa przywołuje opóźniony meteor.'],spear:['Pierwsze trafienie rozszczepia włócznię na dwa odłamki o 30% siły.','Główna włócznia wraca do bohatera.'],runicHammer:['Trafienie wywołuje po 0,4 s drugi wstrząs o 25% siły.','Wstrząs tworzy trzy odrzucające, kamienne odłamki.'],scythe:['Powracający sierp tworzy krótkotrwałą widmową kopię o 30% siły.','Zabójstwo kosą na 4 s zwiększa jej rozmiar; maksymalnie +50%.'],stormrod:['Trafienie rozprowadza wodę na dwóch pobliskich celach.','Co trzecia salwa tworzy na trafionym celu krótki piorunowy krąg.']};
 G.weaponCap3=function(id){const r=this.player?.run3;return E.awakenings[id]&&(this.training3||this.curse3('one')||r?.depth||r?.taskAwakening||(this.slice?.rift||0)>=10)?7:5;};
 const roll=G.rollGear;G.rollGear=function(){const out=roll.call(this),eligible=this.weapons.filter(w=>w.level>=5&&w.level<this.weaponCap3(w.id));if(eligible.length&&Math.random()<.55){const w=U.pick(eligible);out[0]={...D.weaponById[w.id],kind:'weapon',level:w.level+1,awakening3:true,desc:E.awakenings[w.id][w.level-5]};}return out;};
 const choose=G.chooseGear;G.chooseGear=function(i){const reward=this.gearChoices[i],w=reward&&this.weapons.find(x=>x.id===reward.id);if(this.state==='gear'&&reward?.kind==='weapon'&&w?.level>=5&&reward.level===w.level+1&&reward.level<=this.weaponCap3(w.id)){w.level++;this.player.run3.stats.choices.push({time:this.time,type:'awakening',id:w.id,level:w.level});this.ui.toast('PRZEBUDZENIE '+w.level,D.weaponById[w.id].name);this.cue3?.('awakening');this.completeReward();return;}return choose.call(this,i);};
 const desc=G.weaponDescription23;G.weaponDescription23=function(id,level){return desc.call(this,id,Math.min(5,level))+(E.awakenings[id]?`\nPrzebudzenie 6: ${E.awakenings[id][0]}\nPrzebudzenie 7: ${E.awakenings[id][1]}\nWymaga klątwy jednej broni, RIFT 10+, Głębi albo wykonanego zadania.`:'');};
 const gear=P.gear;P.gear=function(...args){gear.apply(this,args);for(const el of this.overlay.querySelectorAll('[data-action="gear"]')){const r=this.g.gearChoices[Number(el.dataset.value)];if(r?.awakening3)el.insertAdjacentHTML('beforeend',`<p class="planBadge3">POZIOM ${r.level} · ${E.esc(r.desc)}</p>`);}};
 const bullet=G.bullet;G.bullet=function(x,y,a,n,element,o={}){o={awakened3:0,volley3:0,awakeningChild3:false,side3:false,ghost3:false,ricochet3:0,visited3:[],...o};const w=o.weapon23&&this.weapons.find(w=>w.id===o.weapon23);if(w&&w.level>=6&&!o.awakeningChild3&&!o.enemy){o={...o,awakened3:w.level,volley3:w.shots23};if(w.id==='scythe'&&w.level>=7)o.r=(o.r||10)*(1+Math.min(.5,(w.growth3||0)*.1));if(w.id==='spear'&&w.level>=7)o.returnAt23=.65;if(w.level>=7&&w.specialVolley3!==w.shots23){w.specialVolley3=w.shots23;if(w.id==='bow'&&w.shots23%5===0)for(let i=1;i<=3;i++)this.zone(x+Math.cos(a)*i*80,y+Math.sin(a)*i*80,42,n*.18,'nature',{root:.6,life:2,total:2,source3:'weapon:bow'});if(w.id==='staff'&&w.shots23%4===0)this.zone(x+Math.cos(a)*180,y+Math.sin(a)*180,75,n*.65,'fire',{delay:.7,life:1,total:1,once:true,source3:'weapon:staff'});}}return bullet.call(this,x,y,a,n,element,o);};
 const wh=G.weaponHit23;G.weaponHit23=function(e,b){const v=wh.call(this,e,b);if(!b.awakened3||b.awakeningChild3)return v;const a=Math.atan2(b.vy,b.vx),child={basic:true,weapon23:b.weapon23,weaponLevel23:5,awakeningChild3:true,source3:'weapon:'+b.weapon23,pierce:1,life:.55};
  if(b.weapon23==='bow'&&!b.side3){b.side3=true;for(const side of [-1,1])this.bullet(e.x,e.y,a+side*1.1,b.damage*.25,'nature',child);}
  if(b.weapon23==='spear'&&!b.side3){b.side3=true;for(const side of [-1,1])this.bullet(e.x,e.y,a+side*.6,b.damage*.3,'stone',child);}
  if(b.weapon23==='staff')this.zone(e.x,e.y,45,b.damage*.12,'fire',{life:2,total:2,source3:'weapon:staff'});
  if(b.weapon23==='runicHammer'&&!b.side3){b.side3=true;this.zone(e.x,e.y,65,b.damage*.25,'stone',{delay:.4,life:.7,total:.7,once:true,source3:'weapon:runicHammer'});if(b.awakened3>=7)for(const angle of [-.5,0,.5])this.bullet(e.x,e.y,a+angle,b.damage*.18,'stone',child);}
  if(b.weapon23==='scythe'&&b.returning23&&!b.ghost3){b.ghost3=true;this.bullet(e.x,e.y,a+.25,b.damage*.3,'arcane',{...child,r:12,style:'scythe'});}
  if(b.weapon23==='stormrod'){const near=this.nearEnemies(260,12).filter(x=>x.id!==e.id).slice(0,2);for(const t of near)this.applyStatus(t,'water');if(b.awakened3>=7&&b.volley3%3===0&&!b.side3){b.side3=true;this.zone(e.x,e.y,70,b.damage*.2,'lightning',{life:1.5,total:1.5,source3:'weapon:stormrod'});}}return v;};
 const kill=G.kill;G.kill=function(e,...args){if(!e.dead&&(this.damageSource3==='weapon:scythe')){const w=this.weapons.find(w=>w.id==='scythe'&&w.level>=7);if(w){w.growth3=Math.min(5,(w.growth3||0)+1);w.growthUntil3=this.time+4;}}return kill.call(this,e,...args);};
 E.secrets={burningForest:{name:'Płonący Las',hint:'Korzenie + ogień + ???',skills:['roots','fire'],relic:'glass',element:'fire',desc:'Co 8 s płonące korzenie wokół bohatera zadają obrażenia i przytrzymują zwykłych wrogów.'},winterMirror:{name:'Zwierciadło Zimy',hint:'??? + woda + Soczewka',skills:['ice','wet'],relic:'lens',element:'ice',desc:'Co 10 s lodowy pierścień spowalnia wrogów.'},bloodChoir:{name:'Chór Głębin',hint:'Nić krwi + ??? + Wilczy kieł',skills:['drain','familiar'],relic:'fang',element:'blood',desc:'Co 9 s cztery widmowe pociski przeszywają pobliskich wrogów.'}};
 G.checkSecrets3=function(){const r=this.player?.run3;if(!r)return;for(const [id,s]of Object.entries(E.secrets))if(!r.secretRun.includes(id)&&s.skills.every(x=>this.has(x))&&this.relics.some(x=>x.id===s.relic)){r.secretRun.push(id);if(!r.training){E.meta().secrets[id]=true;S.write();}this.ui.toast('SEKRET: '+s.name,s.desc);this.burst(this.player.x,this.player.y,A.colors[s.element],28,150);this.cue3?.('synergy');}};
 const upgrade=G.upgrade;G.upgrade=function(id){const v=upgrade.call(this,id);if(v!==false){if(!this.training3){S.meta3.discovered['skill:'+id]=true;S.write();}this.checkSecrets3();}return v;};
 const relic=G.takeRelic;G.takeRelic=function(...args){const v=relic.apply(this,args);this.checkSecrets3();return v;};
 const update=G.update;G.update=function(dt){const active=this.state==='playing';update.call(this,dt);if(!active||this.state!=='playing')return;for(const w of this.weapons)if(w.growthUntil3<this.time)w.growth3=0;const r=this.player.run3;r.secretCD||={};for(const id of r.secretRun){const s=E.secrets[id];if(!s)continue;r.secretCD[id]=(r.secretCD[id]||0)-dt;if(r.secretCD[id]>0)continue;r.secretCD[id]=id==='burningForest'?8:id==='winterMirror'?10:9;this.withSource3('secret:'+id,()=>{if(id==='burningForest')this.zone(this.player.x,this.player.y,130,this.stats.damage*.45,'fire',{life:1.6,total:1.6,root:.5});else if(id==='winterMirror')this.zone(this.player.x,this.player.y,180,this.stats.damage*.7,'ice',{once:true});else for(let i=0;i<4;i++)this.bullet(this.player.x,this.player.y,i*Math.PI/2+this.time,this.stats.damage*.65,'blood',{pierce:2,life:1.3});});}};
 P.secrets3=function(){this.g.state='archive';this.hud.hidden=true;this.panel('Sekretne kombinacje','Dodatkowe odkrycia · nie są wymagane do zwycięstwa',`<div class="catalog">${Object.entries(E.secrets).map(([id,s])=>{const known=E.meta().secrets[id];return `<article>${A.Art23.icon(s.element,A.colors[s.element])}<h3>${known?s.name:'???'}</h3><p>${known?s.skills.map(x=>D.byId[x].name).concat(D.relics.find(x=>x.id===s.relic).name).join(' + '):s.hint}</p><p>${known?s.desc:'Nieodkryta kombinacja trzech elementów'}</p></article>`;}).join('')}</div>`,'archive25');};
 const archive=P.archive25;P.archive25=function(...args){archive.apply(this,args);this.overlay.querySelector('.cards')?.insertAdjacentHTML('beforeend',this.button('Sekretne kombinacje','secrets3'));};
 const forge=P.forge23;P.forge23=function(...args){forge.apply(this,args);this.overlay.querySelector('.panel')?.insertAdjacentHTML('beforeend',`<details><summary>Przebudzenie broni · poziomy 6–7</summary><p>Standardowy limit to 5. Sześć poniższych broni ma Przebudzenie: Przysięga Jednej Broni, RIFT 10+, Głębia albo wykonane zadanie pozwalają je losować. Bazowe obrażenia nie rosną ponad poziom 5.</p>${Object.entries(E.awakenings).map(([id,levels])=>`<h3>${D.weaponById[id].name}</h3><p>6: ${levels[0]}<br>7: ${levels[1]}</p>`).join('')}</details>`);};
 const action=P.action;P.action=function(id,v){if(id==='secrets3'){this.secrets3();return;}return action.call(this,id,v);};
})(window.Aeren);

;

/* Module: js/endgame-accessibility.js */
'use strict';
(function(A){const {Endgame:E,Data:D,Save:S,U}=A,G=A.Game.prototype,P=A.UI.prototype,R=A.Renderer.prototype;
 E.settings3={flash3:1,damageSize3:1,playerFX3:.85,statusSize3:1,enemyOutline3:true,altThreat3:false,skillAim3:false,pauseChoices3:true,threat3:'standard',history3:true,cues3:true};
 const load=S.load;S.load=function(){const d=load.call(this);for(const [k,v]of Object.entries(E.settings3))d.settings[k]??=v;return d;};
 E.cues={ready:[680,.1,.035,'sine',850],ultimate:[440,.25,.07,'triangle',1100],low:[130,.3,.08,'sine',95],offscreen:[190,.18,.09,'square',380],elite:[240,.2,.05,'triangle',150],nemesis:[95,.5,.09,'sawtooth',210],fountain:[580,.25,.055,'sine',1000],chest:[900,.12,.025,'sine',700],synergy:[520,.3,.075,'triangle',1500],awakening:[360,.4,.08,'triangle',1200],task:[750,.25,.06,'sine',1100]};
 const priorities={ready:1,chest:1,fountain:2,elite:3,task:3,synergy:4,awakening:4,ultimate:4,low:5,offscreen:6,nemesis:7};
 G.cue3=function(id){if(!S.data.settings.cues3||!E.cues[id])return false;this.cueTimes3||={};const now=performance.now(),gap=id==='low'?8000:id==='chest'?20000:id==='ready'?1800:3000;if(now-(this.cueTimes3[id]??-Infinity)<gap)return false;if(now-(this.lastCue3??-Infinity)<600&&(priorities[id]||0)<=(this.cuePriority3||0))return false;this.cueTimes3[id]=now;this.lastCue3=now;this.cuePriority3=priorities[id];A.Audio.tone(...E.cues[id]);return true;};
 const start=G.start;G.start=function(...args){this.cueTimes3={};this.lastCue3=-Infinity;return start.apply(this,args);};
 const aim=G.aimPoint;G.aimPoint=function(){if(this.skillAimContext3&&S.data.settings.skillAim3){const target=this.nearEnemies(650,1)[0];if(target)return{x:target.x,y:target.y};}return aim.call(this);};
 for(const method of ['cast','castUltimate','castSecondary']){const old=G[method];G[method]=function(...args){this.skillAimContext3=true;try{return old.apply(this,args);}finally{this.skillAimContext3=false;}};}
 const spawn=G.spawn;G.spawn=function(...args){const e=spawn.apply(this,args);if(e&&(e.elite>=0||e.mini)&&!this.training3)this.cue3(e.nemesis3?'nemesis':'elite');return e;};
 const upgrade=G.upgrade;G.upgrade=function(id){const n=this.runSynergies.size,v=upgrade.call(this,id);if(this.runSynergies.size>n)this.cue3('synergy');return v;};
 const zone=G.zone;G.zone=function(x,y,r,n,el,o={}){if(o.enemy&&(o.source?.isBoss||this._enemySource?.isBoss)&&U.dist(this.player,o.source||this._enemySource)>Math.min(this.width,this.height)*.5)this.cue3('offscreen');return zone.call(this,x,y,r,n,el,o);};
 const burst=G.burst;G.burst=function(x,y,c,count,force){if(this.boss&&S.data.settings.threat3!=='standard')count=Math.round((count??9)*.35);return burst.call(this,x,y,c,count,force);};
 const xp=G.gainXP;G.gainXP=function(...args){if(!this.unpausedChoice3)return xp.apply(this,args);const s=this.state;this.state='paused';try{return xp.apply(this,args);}finally{this.state=s;}};
 const resume=G.resume;G.resume=function(){if(this.unpausedChoice3)return;return resume.call(this);};
 const update=G.update;G.update=function(dt){const s=this.state,choices=['levelup','gear','equip','replace','decision3'],unpaused=S.data.settings.pauseChoices3===false&&choices.includes(s)&&this.player?.hp>0&&!this.player.run3?.bank;const before=this.player?{...this.player.cooldowns,F:this.player.ultCd}:{};if(unpaused){this.unpausedChoice3=true;this.state='playing';}try{update.call(this,dt);}finally{if(unpaused){this.unpausedChoice3=false;if(this.state==='playing')this.state=s;}}if(this.state!=='playing')return;const p=this.player;for(const [id,n]of Object.entries(before))if(n>0&&(id==='F'?p.ultCd:p.cooldowns[id])<=0)this.cue3(id==='F'?'ultimate':'ready');if(p.hp/this.stats.maxHp<.3)this.cue3('low');const near=this.world.events.find(e=>e.treasure25&&!e.used&&U.dist(e,p)<230);if(near)this.cue3(near.treasure25==='recovery'?'fountain':'chest');};
 // A context proxy scales alpha assignments made by all existing effect renderers.
 const alphaContexts3=new WeakMap();
 function faded(c,alpha,draw){let cache=alphaContexts3.get(c);if(!cache){cache=new Map();alphaContexts3.set(c,cache);}let proxy=cache.get(alpha);if(!proxy){const funcs=new Map();proxy=new Proxy(c,{get(t,k){const v=Reflect.get(t,k,t);if(typeof v!=='function')return v;if(!funcs.has(k))funcs.set(k,v.bind(t));return funcs.get(k);},set(t,k,v){t[k]=k==='globalAlpha'?v*alpha:v;return true;}});cache.set(alpha,proxy);}c.save();c.globalAlpha=alpha;try{return draw(proxy);}finally{c.restore();}}

 E.effectAlpha3=()=>Math.min(S.data.settings.playerFX3??.85,S.data.settings.threat3==='max'?.25:S.data.settings.threat3==='high'?.45:1);
 const drawZone=R.zone;R.zone=function(c,z){if(!z.enemy)return faded(c,E.effectAlpha3(),cx=>drawZone.call(this,cx,z));drawZone.call(this,c,z);if(S.data.settings.threat3!=='standard'||S.data.settings.altThreat3){c.save();c.strokeStyle=S.data.settings.altThreat3?'#ffef00':'#ff694c';c.lineWidth=S.data.settings.threat3==='max'?5:3;c.setLineDash(z.delay>0?[10,5]:[]);c.beginPath();c.arc(z.x,z.y,z.r,0,Math.PI*2);c.stroke();c.restore();}};
 const projectile=R.drawProjectile;R.drawProjectile=function(c,b){if(!b.enemy)return faded(c,E.effectAlpha3(),cx=>projectile.call(this,cx,b));projectile.call(this,c,b);if(S.data.settings.enemyOutline3||S.data.settings.threat3!=='standard'){c.save();c.strokeStyle=S.data.settings.altThreat3?'#ffef00':'#fff4df';c.lineWidth=S.data.settings.threat3==='max'?3:2;c.beginPath();c.arc(b.x,b.y,(b.r||6)+3,0,Math.PI*2);c.stroke();c.restore();}};
 const enemy=R.enemy;R.enemy=function(c,e){const flash=e.flash;e.flash*=S.data.settings.flash3??1;try{enemy.call(this,c,e);}finally{e.flash=flash;}const keys=Object.keys(e.status||{}).filter(k=>e.status[k]>0).slice(0,4),size=4*(S.data.settings.statusSize3||1);if(keys.length){c.save();keys.forEach((id,i)=>{c.fillStyle=A.colors[id]||'#fff';c.strokeStyle='#091321';c.lineWidth=2;c.beginPath();c.arc(e.x+(i-(keys.length-1)/2)*(size*2+3),e.y-e.r-14,size,0,Math.PI*2);c.fill();c.stroke();});c.restore();}};
 const settings=P.settings;P.settings=function(...args){settings.apply(this,args);const s=S.data.settings,sliders=[['flash3','Intensywność błysków',0,1,.1],['damageSize3','Rozmiar liczb obrażeń',.8,1.8,.1],['playerFX3','Widoczność efektów bohatera',.15,1,.05],['statusSize3','Wielkość ikon statusów',.75,2,.25]],checks=[['enemyOutline3','Obrys pocisków przeciwnika'],['altThreat3','Żółty kolor zagrożeń'],['skillAim3','Autocelowanie umiejętności'],['pauseChoices3','Zatrzymuj czas podczas wyborów'],['cues3','Dźwięki informacyjne'],['history3','Zapisuj Kronikę i lokalną historię rozgrywki']];this.overlay.querySelector('.panel').insertAdjacentHTML('beforeend',`<h2>Dostępność i dane lokalne</h2><div class="settings">${sliders.map(([k,label,min,max,step])=>`<label class="setting">${label}<input type="range" min="${min}" max="${max}" step="${step}" value="${s[k]}" data-setting="${k}"></label>`).join('')}${checks.map(([k,label])=>`<label class="setting">${label}<input type="checkbox" data-setting="${k}" ${s[k]?'checked':''}></label>`).join('')}</div><p>Widoczność zagrożeń</p><div class="actions">${[['standard','Standardowa'],['high','Wysoka'],['max','Maksymalna']].map(([id,label])=>this.button(label,'threat3',id,s.threat3===id?'primary':'')).join('')}</div><p>Historia i dane diagnostyczne pozostają na tym komputerze. Wyłączenie zatrzymuje zapisywanie nowych danych; możesz też usunąć istniejącą Kronikę.</p><div class="actions">${this.button('Eksport JSON','export3')}${this.button('Usuń Kronikę i dane diagnostyczne','clearHistory3')}</div>`);};
 const action=P.action;P.action=function(id,v){if(id==='threat3'&&['standard','high','max'].includes(v)){S.data.settings.threat3=v;S.write();this.settings(this.settingsBack23||'menu');return;}if(id==='clearHistory3'){E.meta().runs=[];S.write();this.settings(this.settingsBack23||'menu');return;}return action.call(this,id,v);};
})(window.Aeren);

;

/* Module: js/endgame-validation.js */
'use strict';
(function(A){const {Endgame:E,Save:S,Data:D,U}=A,G=A.Game.prototype,P=A.UI.prototype;
 // Keep both the receipt and awarded shards in the same profile write.
 const award=S.award;S.award=function(result){const r=A.game.player?.run3;if(r?.bankingPending){S.data.awards3||={};const id=A.game.player.runId;if(S.data.awards3[id]){Object.assign(result,S.data.awards3[id]);return;}const receipt=S.data.awards3[id]=result;const v=award.call(this,result);S.data.awards3[id]=E.clone(receipt);S.write();return v;}return award.call(this,result);};
 const load=G.loadRun;G.loadRun=function(){const ok=load.call(this);if(ok){const r=this.player.run3;if(r.bankingPending&&!r.bank){this.finish(true);}r.ranks||=Object.fromEntries(r.prep.keepsakes.map(id=>[id,E.meta().keepsakes[id]||0]));}return ok;};
 const xp=G.gainXP;G.gainXP=function(...args){const before=this.player.level,v=xp.apply(this,args);if(this.player.level>before&&this.player.run3)this.player.run3.stats.milestones.firstLevel??=this.time;return v;};
 const kill=G.kill;G.kill=function(e,...args){const alive=!e.dead,v=kill.call(this,e,...args);if(alive&&e.isBoss&&this.player.run3?.depth&&!this.slice&&!this.endSaved)this.finish(true);return v;};
 const queue=G.queueSlice;G.queueSlice=function(c){const r=this.player?.run3;if(c.kind==='mutation'&&this.keepsake3('hunter')===3&&r.used.hunterSpawn&&!r.used.hunterSwapOffered){r.used.hunterSwapOffered=true;c.hunterSwap3=true;}return queue.call(this,c);};
 const sliceChoice=P.sliceChoice;P.sliceChoice=function(...args){sliceChoice.apply(this,args);if(this.g.slice?.choice?.hunterSwap3)this.overlay.querySelector('.panel')?.insertAdjacentHTML('beforeend',this.button('Znak Łowcy: zamień mutację na losowy relikt','hunterSwap3'));};
 const results=P.results3;P.results3=function(...args){results.apply(this,args);const panel=this.overlay.querySelector('.panel');panel?.classList.add('resultsPanel3');const actions=panel?.querySelector('.actions');panel?.querySelector('.stats')?.after(actions);};
 const action=P.action;P.action=function(id,v){if(id==='hunterSwap3'&&this.g.slice?.choice?.hunterSwap3){this.g.slice.choice=null;const pool=this.g.relicOptions();if(pool.length)this.g.takeRelic(U.pick(pool).id);this.g.resume();this.g.saveRun();return;}return action.call(this,id,v);};
 // Dedicated source timestamps are readable without reconstructing a report.
 const exp=E.export;E.export=()=>{const data=exp();data.gameVersion=D.version;data.runs=data.runs.map(r=>({...r,telemetry:{...r.telemetry,duration:r.time,rift:r.rift,deathCause:r.cause,keepsakes:r.keepsakes,plannedSynergy:r.plan,outgoing:r.stats.out,incoming:r.stats.incoming,incomingElements:r.stats.incomingElements||{},curses:r.curses}}));return data;};
})(window.Aeren);

;

/* Module: js/menu-navigation.js */
'use strict';
(function(A){
 const P=A.UI.prototype,G=A.Game.prototype;
 const screens=['expedition25','heroes','sliceSetup','sliceLaunch','sanctuary25','meta','forge23','archive25','archive23','sliceProgress','challenges23','collection23','codex','settings','bindings','preparation3','keepsakes3','history3','results3','nemesis3','secrets3','training3','pause','build'];
 P.navigationReset=function(){this.menuTrail=[];this.menuPage=null;};
 P.navigationEnter=function(page){
  this.menuTrail||=[];
  if(!this.menuReplaying&&this.menuPage?.key!==page.key){
   this.menuTrail.push(this.menuPage||{key:'menu',method:'menu',args:[],state:'menu'});
  }
  this.menuPage=page;
 };
 P.navigationDecorate=function(){
  const panel=this.overlay.querySelector('.panel'),head=panel?.querySelector('.panelhead');
  if(!head||!this.menuPage||!this.menuTrail?.length)return;
  // Parent links and old close controls are replaced by one consistent back button.
  const ancestors=new Set(this.menuTrail.map(p=>p.method));
  for(const b of panel.querySelectorAll('button[data-action]')){
   const action=b.dataset.action;
   if(b.matches('.close')||action==='navBack'||action==='menu'||action==='exitTraining3'||ancestors.has(action))b.remove();
  }
  head.insertAdjacentHTML('beforeend','<button class="btn menuBack" data-action="navBack" aria-label="Wróć do poprzedniego ekranu">← Wróć</button>');
 };
 P.navigationBack=function(){
  if(!this.menuTrail?.length)return;
  const target=this.menuTrail.pop(),remaining=this.menuTrail.slice();
  if(this.menuPage?.method==='training3'&&this.g.training3)this.g.exitTraining3();
  this.menuTrail=remaining;this.menuPage=target;this.menuReplaying=true;
  try{
   if(target.method==='resume'){this.g.resume();this.navigationReset();}
   else if(target.method==='panel'){this.g.state=target.state;this.panel(...target.args);}
   else{this.g.state=target.state;this[target.method](...target.args);}
  }finally{this.menuReplaying=false;}
  this.navigationDecorate();this.g.input.clear();this.focus();
 };
 for(const name of screens){
  const old=P[name];if(!old)continue;
  P[name]=function(...args){
   if(this.menuRendering)return old.apply(this,args);
   if(!this.menuPage&&['pause','build'].includes(name))this.menuPage={key:'resume',method:'resume',args:[],state:'playing'};
   // Tabs, purchases and configuration changes redraw the same page, without
   // creating extra Back steps. History details are a separate page from history.
   const page={key:name,method:name,args,state:this.g.state};
   this.navigationEnter(page);this.menuRendering=true;
   try{return old.apply(this,args);}finally{page.state=this.g.state;this.menuRendering=false;this.navigationDecorate();}
  };
 }
 const menu=P.menu;P.menu=function(...args){if(!this.menuReplaying)this.navigationReset();this.menuPage={key:'menu',method:'menu',args,state:'menu'};return menu.apply(this,args);};
 const panel=P.panel;P.panel=function(...args){
  if(!this.menuRendering&&['updates','resetPrompt','rift25','exit23'].includes(this.menuAction)){
   this.navigationEnter({key:'panel:'+this.menuAction,method:'panel',args,state:this.g.state});
  }
  const value=panel.apply(this,args);
  if(!this.menuRendering&&this.menuPage?.method==='panel')this.navigationDecorate();
  return value;
 };
 const hide=P.hide;P.hide=function(...args){const v=hide.apply(this,args);if(!this.menuRendering&&!this.g.training3)this.navigationReset();return v;};
 const start=G.start;G.start=function(...args){const v=start.apply(this,args);if(v!==false&&!args[1]?.training3)this.ui.navigationReset();return v;};
 const action=P.action;P.action=function(id,value){
  if(id==='abandon'){
   if(this.g.state!=='paused'||this.g.endSaved)return;
   this.g.abandonedRun=true;
   this.g.finish(false);
   if(this.g.endSaved){this.g.input.clear();this.menu();}
   return;
  }
  if(id==='navBack'){this.navigationBack();return;}
  if(id==='exitTraining3'&&this.menuPage?.method==='training3'){this.navigationBack();return;}
  const previous=this.menuAction;this.menuAction=id;
  try{return action.call(this,id,value);}finally{this.menuAction=previous;}
 };
 window.addEventListener('keydown',e=>{
  const ui=A.game?.ui;if(!ui||A.Controls.pending||e.code!==A.Controls.key('pause')||!ui.overlay.querySelector('[data-action="navBack"]'))return;
  e.preventDefault();e.stopImmediatePropagation();if(!e.repeat)ui.navigationBack();
 },true);
})(window.Aeren);



;

/* Module: js/round-market.js */
'use strict';
(function(A){
 const {Data:D,Save:S}=A,G=A.Game.prototype,P=A.UI.prototype;
 const weights=[58,26,11,4,1],prices=[60,100,165,270,430];
 A.market28={weights,prices};
 const copy=x=>JSON.parse(JSON.stringify(x));
 const weaponPreview=(g,r,level)=>{const s=A.weaponStats23({id:r.id,level},g);return `${D.weaponById[r.id].desc} · ${Math.round(s.damage)} obrażeń / atak · co ${s.interval.toFixed(2)} s · zasięg ${s.range}`;};
 function track(g){
  if(Object.getOwnPropertyDescriptor(g,'gold')?.get)return;
  let value=g.gold||0;
  Object.defineProperty(g,'gold',{configurable:true,enumerable:true,get:()=>value,set:n=>{
   const next=Number(n)||0,m=g.player?.market28;
   if(m&&!g.restoringMarket28&&!g.training3&&next>value)m.earned+=next-value;
   value=next;
  }});
 }
 G.beginMarket28=function(next='advance'){
  if(this.training3)return;
  const stock=[],used=new Set();
  for(let i=0;i<3;i++){
   let roll=Math.random()*100,rarity=0;while(rarity<4&&roll>=weights[rarity])roll-=weights[rarity++];
   const pool=D.weapons.filter(w=>(!w.owner||w.owner===this.player.hero.id)&&this.weaponAvailable23(w.id)&&!used.has(w.id)&&(!this.curse3('one')||w.id===this.weapons[0].id));
   let reward;
   if(i===0&&pool.length){const w=pool[Math.floor(Math.random()*pool.length)];reward={id:w.id,name:w.name,kind:'weapon',rarity,level:1+Math.floor(rarity/2)};}
   else {for(let n=0;n<30;n++){reward=this.rollItem(rarity);if(!used.has(reward.id))break;}}
   used.add(reward.id);stock.push({reward,price:Math.round(prices[rarity]*(1+.1*this.biome)),sold:false});
  }
  this.player.market28={round:this.biome,earned:this.player.market28?.earned||0,stock,purchases:0,open:true,next,flow:2};
  this.ui.market28();this.saveRun();
 };
 G.marketBlocked28=function(reward){
  const list=reward.kind==='weapon'?this.weapons:this.items,owned=list.find(x=>x.id===reward.id);
  if(reward.kind==='weapon'&&this.curse3('one')&&reward.id!==this.weapons[0].id)return 'Przysięga Jednej Broni';
  if(owned?.level>=5)return 'Osiągnięto poziom 5';
  if(!owned&&list.length>=(reward.kind==='weapon'?3:6))return 'Brak wolnego miejsca';
  return '';
 };
 G.buyMarket28=function(index){
  const m=this.player?.market28,o=m?.stock[index];
  if(this.state!=='market28'||!m.open||!o||o.sold||m.purchases>=2||this.gold<o.price||this.marketBlocked28(o.reward))return false;
  const reward=copy(o.reward),list=reward.kind==='weapon'?this.weapons:this.items,at=list.findIndex(x=>x.id===reward.id),old=at>=0?list[at]:null;
  reward.level=old?Math.min(5,Math.max(old.level+1,reward.level)):reward.level;
  reward.rarity=Math.max(reward.rarity,old?.rarity||0);
  if(reward.kind==='weapon')reward.cd=old?.cd||0;else this.itemStats(reward);
  this.gold-=o.price;o.sold=true;m.purchases++;
  if(at>=0)list[at]=reward;else list.push(reward);
  S.meta3.discovered[(reward.kind==='weapon'?'weapon:':'item:')+reward.id]=true;
  this.recalculate();S.write();this.saveRun();this.ui.market28();return true;
 };
 G.resetMarket28=function(){this.player.market28={round:this.biome,earned:0,stock:[],purchases:0,open:false,flow:2};};
 G.closeMarket28=function(){const m=this.player?.market28;if(this.state!=='market28'||!m?.open)return;m.open=false;m.completed=true;this.state='playing';if(m.next==='finish')this.finish(true);else if(m.next==='advance'){this.advance();if(this.state==='playing')this.resume();}else this.resume();this.saveRun();};
 const start=G.start;G.start=function(id,options={}){this.restoringMarket28=true;let result;try{result=start.call(this,id,options);}finally{this.restoringMarket28=false;}track(this);if(result!==false&&!options.restoring&&!this.training3){this.gold=0;this.resetMarket28();this.ensurePotionShop28?.();this.saveRun();}return result;};
 const advance=G.advance;G.advance=function(...args){if(!this.training3&&!this.slice&&!this.boss&&this.bosses>this.biome&&!this.player.market28?.completed){this.beginMarket28('advance');return;}const biome=this.biome,v=advance.apply(this,args);if(this.biome!==biome&&!this.endSaved){this.resetMarket28();this.ensurePotionShop28?.();this.saveRun();}return v;};
 const finish=G.finish;G.finish=function(win){if(win&&!this.training3&&!this.endSaved&&!this.player.run3?.bank&&!this.player.market28?.completed){this.beginMarket28('finish');return;}return finish.call(this,win);};
 const load=G.loadRun;G.loadRun=function(...args){this.restoringMarket28=true;let ok;try{ok=load.apply(this,args);}finally{this.restoringMarket28=false;}if(ok){track(this);if(this.player.market28?.flow!==2){const earned=this.player.market28?.earned||0;this.resetMarket28();this.player.market28.earned=earned;this.resume();}this.ensurePotionShop28?.();if(this.player.market28?.open)this.ui.market28();else if(this.player.potionShop28?.open)this.ui.potionShop28();}return ok;};
 P.market28=function(){const g=this.g,m=g.player.market28;g.state='market28';g.input.clear();this.navigationReset();
  this.panel('Kupiec przed rundą',`Runda ${g.biome+1} · Złoto: ${Math.floor(g.gold)} · Zakupy ${m.purchases}/2`,
   `<div class="market28"><p>Trzy oferty, maksymalnie dwa zakupy. Niewydane złoto przechodzi do kolejnej rundy. Na początku wyprawy otrzymujesz 60 złota na przygotowanie.</p><p>Szanse jakości: ${D.rarity.map((r,i)=>`${r.name}: ${weights[i]}%`).join(' · ')}. Broń lepszej jakości zaczyna na poziomie 1–3; posiadany egzemplarz otrzymuje co najmniej jeden poziom.</p><div class="catalog">${m.stock.map((o,i)=>{const r=o.reward,owned=(r.kind==='weapon'?g.weapons:g.items).find(x=>x.id===r.id),level=owned?Math.min(5,Math.max(owned.level+1,r.level)):r.level,preview=copy(r);preview.level=level;preview.rarity=Math.max(r.rarity,owned?.rarity||0);if(r.kind!=='weapon')g.itemStats(preview);const blocked=g.marketBlocked28(r),disabled=o.sold||m.purchases>=2||g.gold<o.price||blocked;return `<article style="--rarity:${D.rarity[r.rarity].color}"><span>${r.kind==='weapon'?'Broń':'Przedmiot'} · ${D.rarity[r.rarity].name}</span><h3>${r.name}</h3><p>Poziom ${level}${owned?' · ulepszenie posiadanego':''}</p><p>${r.kind==='weapon'?weaponPreview(g,r,level):preview.desc}</p><button class="btn" data-action="buyMarket28" data-value="${i}" ${disabled?'disabled':''}>${o.sold?'Kupiono':blocked||`Kup · ${o.price} złota`}</button></article>`;}).join('')}</div><div class="actions">${this.button('Rozpocznij rundę','closeMarket28','','primary')}</div></div>`,null);
 };
 const market=P.market28;P.market28=function(){market.call(this);this.overlay.querySelector('h1').textContent='Kupiec po rundzie';this.overlay.querySelector('.market28>p').textContent='Wyprawę zaczynasz z 0 złota. Wydaj zdobycze zakończonej rundy albo zachowaj je na później. Maksymalnie dwa zakupy.';this.overlay.querySelector('[data-action="closeMarket28"]').textContent='Zakończ zakupy i kontynuuj';};
 const action=P.action;P.action=function(id,v){if(id==='buyMarket28')return this.g.buyMarket28(Number(v));if(id==='closeMarket28')return this.g.closeMarket28();return action.call(this,id,v);};
 const hud=P.update;P.update=function(dt){hud.call(this,dt);if(this.hud.hidden||!this.g.player)return;const host=this.hud.querySelector('.treasury23');if(!host)return;let label=host.querySelector('#roundGold28');if(!label){label=document.createElement('span');label.id='roundGold28';host.append(label);}label.textContent=`Złoto rundy: ${Math.floor(this.g.player.market28?.earned||0)} · Sakiewka: ${Math.floor(this.g.gold||0)}`;label.title='Zdobyte w tej rundzie / dostępne do wydania. Zakupy nie obniżają licznika zdobyczy.';};
})(window.Aeren);

;

/* Module: js/potion-shop.js */
'use strict';
(function(A){
 const G=A.Game.prototype,P=A.UI.prototype,R=A.Renderer.prototype,D=A.Data;
 const prices={small:25,large:45,regen:35};
 G.ensurePotionShop28=function(){
  if(this.training3||!this.world)return;
  if(this.player.potionShop28?.round!==this.biome)this.player.potionShop28={round:this.biome,bought:0,open:false};
  if(!this.world.events.some(e=>e.potionShop28)){
   const origin=this.world.center||this.world.spawn,pt=this.world.freePoint(origin.x+125,origin.y+110,28);
   this.world.events.push({id:88028,type:'merchant',...pt,potionShop28:true,used:false,discovered:true,icon:'♡'});
  }
 };
 const interact=G.interact;G.interact=function(e){if(!e?.potionShop28)return interact.call(this,e);if(this.state!=='playing'||A.U.dist(this.player,e)>92)return;this.player.potionShop28.open=true;this.ui.potionShop28();this.saveRun();};
 G.buyPotion28=function(kind){const m=this.player?.potionShop28,price=prices[kind];if(this.state!=='potionShop28'||!m?.open||!price||m.bought>=2||this.player.potions.length>=2||this.gold<price)return false;this.gold-=price;m.bought++;this.player.potions.push(kind);this.saveRun();this.ui.potionShop28();return true;};
 G.closePotionShop28=function(){if(this.state!=='potionShop28')return;this.player.potionShop28.open=false;this.resume();this.saveRun();};
 P.potionShop28=function(){const g=this.g,m=g.player.potionShop28;g.state='potionShop28';g.input.clear();this.navigationReset();this.panel('Zielarz przy ołtarzu',`Złoto: ${Math.floor(g.gold)} · Zakupy ${m.bought}/2`,`<p>Mikstury trafiają do zapasu. Maksymalnie dwie mikstury w zapasie i dwa zakupy na rundę. Możesz wrócić po zdobyciu złota. Podczas zakupów walka jest wstrzymana.</p><div class="catalog">${Object.entries(prices).map(([id,price])=>`<article><h3>${D.potions[id].name}</h3><p>${{small:'Przywraca 15% maksymalnego HP.',large:'Przywraca 30% maksymalnego HP i usuwa podpalenie oraz truciznę.',regen:'Przywraca 20% maksymalnego HP przez 5 sekund. Silne trafienie przerywa leczenie.'}[id]}</p>${this.button('Kup · '+price+' złota','buyPotion28',id)}<p>${g.player.potions.length>=2?'Pełny zapas mikstur':m.bought>=2?'Wyczerpano zapasy na tę rundę':g.gold<price?'Za mało złota':''}</p></article>`).join('')}</div><div class="actions">${this.button('Wróć do walki','closePotionShop28','','primary')}</div>`,null);for(const b of this.overlay.querySelectorAll('[data-action="buyPotion28"]'))b.disabled=g.gold<prices[b.dataset.value]||g.player.potions.length>=2||m.bought>=2;};
 const action=P.action;P.action=function(id,v){if(id==='buyPotion28')return this.g.buyPotion28(v);if(id==='closePotionShop28')return this.g.closePotionShop28();return action.call(this,id,v);};
 const event=R.event;R.event=function(c,e){if(!e.potionShop28)return event.call(this,c,e);c.save();c.translate(e.x,e.y);c.fillStyle='#102c28';c.strokeStyle='#d9c18b';c.lineWidth=2;c.fillRect(-28,-30,56,40);c.strokeRect(-28,-30,56,40);c.fillStyle='#e75c78';c.beginPath();c.arc(0,-24,13,0,Math.PI*2);c.fill();c.fillStyle='#ffe6b3';c.fillRect(-5,-44,10,12);c.font='bold 12px Arial';c.textAlign='center';c.lineWidth=4;c.strokeStyle='#07101f';c.strokeText('Mikstury',0,-56);c.fillStyle='#fff3ce';c.fillText('Mikstury',0,-56);c.restore();};
 const update=P.update;P.update=function(dt){update.call(this,dt);if(!this.hud.hidden&&this.g.world.nearestEvent(this.g.player)?.potionShop28)document.getElementById('interaction').textContent=A.Controls.label('interact')+' · Mikstury';};
 window.addEventListener('keydown',e=>{if(A.game?.state==='potionShop28'&&e.code===A.Controls.key('pause')){e.preventDefault();e.stopImmediatePropagation();if(!e.repeat)A.game.closePotionShop28();}},true);
})(window.Aeren);

;

/* Module: js/hero-unlock-fix.js */
'use strict';
(function(A){const {Data:D,Save:S}=A,P=A.UI.prototype;
 const heroes=P.heroes;P.heroes=function(...args){heroes.apply(this,args);for(const card of this.overlay.querySelectorAll('.hero-cards [data-action="hero"]')){const h=D.heroes.find(x=>x.id===card.dataset.value);if(!h||S.data.heroes.includes(h.id))continue;const can=S.data.currency>=h.cost;card.dataset.action='unlockheroSetup';card.classList.add('heroLocked28');card.disabled=!can;const bottom=card.querySelector('.bottom');if(bottom)bottom.innerHTML=`<span class="heroShard28">${A.icon25('crystal','ice')}<b>${h.cost}</b> · ${can?'Odblokuj':'brakuje '+(h.cost-S.data.currency)}</span>`;}const hint=this.overlay.querySelector('.panel>.hint:last-child');if(hint)hint.textContent='Zablokowanego bohatera odblokujesz bezpośrednio na jego karcie za odłamki bohatera. Menu obsługujesz strzałkami i Enterem.';this.focus();};
 const meta=P.meta;P.meta=function(...args){meta.apply(this,args);const h=D.heroes.find(x=>x.id===this.masterHero);if(!h||S.data.heroes.includes(h.id)||this.overlay.querySelector('[data-action="unlockhero"]'))return;const target=this.overlay.querySelector('.mastery-grid');target?.insertAdjacentHTML('beforebegin',this.button(`Odblokuj ${h.name} · ${h.cost} odłamków bohatera`,'unlockhero',h.id,'primary'));};
 const action=P.action;P.action=function(id,value){if(id==='unlockheroSetup'){const h=D.heroes.find(x=>x.id===value);if(h&&!S.data.heroes.includes(value)&&S.data.currency>=h.cost){S.data.currency-=h.cost;S.data.heroes.push(value);this.selected=value;S.write();this.heroes();}return;}return action.call(this,id,value);};
})(window.Aeren);

;

/* Module: js/death-guard.js */
'use strict';
(function(A){const G=A.Game.prototype;
 const start=G.start;G.start=function(...args){this.result=null;this.abandonedRun=false;return start.apply(this,args);};
 const report=A.Endgame.report;A.Endgame.report=function(g,result){const r=report(g,result);if(g.abandonedRun){r.abandoned=true;r.cause='Dobrowolne zakończenie wyprawy';}return r;};
 G.resolveDeath28=function(){
  if(!this.player||this.player.hp>0||this.deathResolving28)return false;
  this.deathResolving28=true;
  try{
   // Restore the existing result without awarding the same run a second time.
   if(this.endSaved&&this.result){this.state='results';this.input.clear();this.ui.results(this.result);return true;}
   if(this.endSaved&&!this.banking3)this.endSaved=false;
   this.finish(false);
   return this.state!=='playing';
  }finally{this.deathResolving28=false;}
 };
 const update=G.update;G.update=function(dt){if(this.state==='playing'&&this.resolveDeath28())return;const v=update.call(this,dt);if(this.state==='playing')this.resolveDeath28();return v;};
 const resume=G.resume;G.resume=function(...args){if(this.resolveDeath28())return;return resume.apply(this,args);};
})(window.Aeren);

;

/* Module: js/art-slice.js */
'use strict';
(function(A){
 const R=A.Renderer.prototype,P=A.UI.prototype,S=A.Save,U=A.U,TAU=Math.PI*2;
 const Art=A.ArtSlice={version:1,cache:new Map(),poses:new WeakMap(),pal:{dark:'#10171f',stone:'#26313b',edge:'#42515a',metal:'#617078',gold:'#b6975d'},budgets:{low:{lights:0,particles:60,corpses:8,decor:0},medium:{lights:4,particles:140,corpses:16,decor:12},high:{lights:8,particles:240,corpses:24,decor:24}}};
 const active=r=>r.g.world?.index>=0&&r.g.world.index<6;
 Art.quality=()=>['low','medium','high'].includes(S.data.settings.worldQuality)?S.data.settings.worldQuality:S.data.settings.lowFX?'low':'medium';
 const col={fire:'#ef863e',ice:'#75c8e8',nature:'#69b58a',lightning:'#b8a7f1',poison:'#9eaf59',arcane:'#ac80ca',blood:'#cb617c',stone:'#c6af80',water:'#71b7c8',wind:'#b3d4cf',oil:'#927caa'};
 const poly=(c,pts,fill,stroke='#0b1119',width=1.8)=>{c.beginPath();pts.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();if(fill){c.fillStyle=fill;c.fill();if(/^#[\da-f]{6}$/i.test(fill)){const ys=pts.map(p=>p[1]),top=Math.min(...ys),bottom=Math.max(...ys);if(bottom>top+8){const shade=c.createLinearGradient(0,top,0,bottom);shade.addColorStop(0,'#ffffff1a');shade.addColorStop(.4,'#ffffff00');shade.addColorStop(1,'#00081065');c.fillStyle=shade;c.fill();}}}if(stroke){c.strokeStyle=stroke;c.lineWidth=width;c.stroke();}};
 const line=(c,pts,color,width=2)=>{c.beginPath();pts.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.strokeStyle=color;c.lineWidth=width;c.lineCap='round';c.lineJoin='round';c.stroke();};
 const ellipse=(c,x,y,rx,ry,fill)=>{c.beginPath();c.ellipse(x,y,rx,ry,0,0,TAU);c.fillStyle=fill;c.fill();};
 const rune=(c,x,y,s,color)=>{line(c,[[x,y-s],[x-s*.6,y],[x,y+s],[x+s*.6,y],[x,y-s]],color,1.4);line(c,[[x,y-s],[x,y+s]],color,1);};
 const gem=(c,x,y,s,color)=>{poly(c,[[x,y-s],[x+s*.6,y-s*.2],[x+s*.4,y+s*.65],[x,y+s],[x-s*.5,y+s*.6],[x-s*.6,y-s*.2]],color);poly(c,[[x,y-s],[x,y+s],[x-s*.6,y-s*.2]],'#e0f2ed88',null);};
 function shadow(c,x,y,rx=23,ry=9){ellipse(c,x+5,y+4,rx,ry,'#00070b66');if(Art.quality()!=='low')ellipse(c,x+5,y+4,rx*.7,ry*.7,'#00070b55');}
 function glow(c,x,y,r,color,alpha=.14){if(Art.lightsLeft<=0)return;Art.lightsLeft--;c.save();c.globalAlpha*=alpha;const g=c.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,color);g.addColorStop(1,color+'00');c.fillStyle=g;c.fillRect(x-r,y-r,r*2,r*2);c.restore();}
 Art.pose=function(e,dt,time){let p=Art.poses.get(e);if(!p){p={x:e.x,y:e.y,angle:e.facing??e.aim??0,gait:0,ult:e.ultCd||0,secondary:e.secondaryCd||0,spell:0};Art.poses.set(e,p);}const distance=Math.hypot(e.x-p.x,e.y-p.y),f=1-Math.exp(-40*dt);if(distance>85||e.dashing>0){p.x=e.x;p.y=e.y;}else{p.x+= (e.x-p.x)*f;p.y+=(e.y-p.y)*f;}p.gait+=Math.min(distance,15)*.17;const target=(e.attackAnim||e.castAnim)?(e.attackAim??e.aim??e.facing??0):(e.facing??e.aim??0);p.angle+=Math.atan2(Math.sin(target-p.angle),Math.cos(target-p.angle))*(1-Math.exp(-16*dt));if((e.ultCd||0)>p.ult+.5)p.spell=time+.85;if((e.secondaryCd||0)>p.secondary+.5)p.secondaryUntil=time+.45;p.ult=e.ultCd||0;p.secondary=e.secondaryCd||0;return p;};
 // Small locally generated sprite cache: no simulation object is edited to animate it.
 function sprite(kind,dir,frame,mode){const key=[kind,dir,frame,mode].join(':');if(Art.cache.has(key))return Art.cache.get(key);if(Art.cache.size>=256)Art.cache.delete(Art.cache.keys().next().value);const cv=document.createElement('canvas');cv.width=160;cv.height=192;const c=cv.getContext('2d');c.scale(2,2);c.translate(40,84);const angle=dir*TAU/8,side=Math.cos(angle)<-.25?-1:1,back=Math.sin(angle)<-.35,stride=Math.sin(frame*TAU/8)*5;
  c.scale(side,1);const hero=kind==='ilya'||kind==='sol',sol=kind==='sol',robe=sol?'#302b35':'#254039',trim=sol?'#b38a58':'#b0ac70';
  if(hero){
   if(sol)c.scale(1.17,1);
   poly(c,[[-14,-44],[-22,-15],[-18,1],[0,-3],[20,2],[16,-35],[7,-47]],robe);poly(c,[[-14,-39],[-20,-9],[-9,-2],[-4,-41]],sol?'#564044':'#46604c',null);line(c,[[-19,-9],[-18,1],[0,-3],[20,2]],trim,1.3);
   for(const n of [-1,1]){const x=n*8,y=mode==='run'?stride*n:0;line(c,[[x,-16],[x+n*2,-8+y],[x+n*3,1+y]],'#0e1820',7);poly(c,[[x-4,-3+y],[x+5,-4+y],[x+8,3+y],[x-4,4+y]],'#343c3b');line(c,[[x-3,-1+y],[x+4,-2+y]],'#938773',1);}
   poly(c,[[-14,-43],[-10,-21],[0,-13],[13,-22],[14,-42],[0,-49]],sol?'#4c3636':'#466252',trim,1.5);poly(c,[[0,-47],[0,-16],[12,-23],[14,-42]],sol?'#2d252c':'#293f39',null);line(c,[[-12,-22],[12,-22]],'#8f7248',4);gem(c,0,-22,3,trim);
   for(const n of [-1,1]){const lift=mode==='cast'?-12:mode==='attack'&&n===1?-7:0;line(c,[[n*13,-39],[n*19,-29+lift],[n*18,-18+lift]],robe,7);poly(c,[[n*10,-44],[n*20,-39],[n*18,-32],[n*11,-35]],'#68715f',trim,1);ellipse(c,n*18,-18+lift,3.3,4,'#c8ab86');}
   if(!back){poly(c,[[-8,-60],[-8,-48],[0,-42],[8,-48],[8,-60]],'#c4ae91');line(c,[[-5,-53],[-2,-53]],'#131c22',1.5);line(c,[[3,-53],[6,-53]],'#131c22',1.5);line(c,[[0,-51],[-1,-48],[3,-47]],'#836850',1);}
   poly(c,sol?[[-13,-51],[-11,-67],[1,-80],[10,-65],[14,-51],[7,-55],[0,-66],[-6,-56]]:[[-13,-49],[-12,-63],[0,-72],[13,-61],[15,-48],[8,-51],[1,-62],[-6,-55]],sol?'#332a39':'#314d40',trim,1.4);
   if(back)poly(c,[[-11,-64],[0,-72],[12,-62],[10,-48],[0,-43],[-11,-49]],robe,trim,1);
   if(sol){for(let i=0;i<3;i++)line(c,[[-10+i*8,-13],[-12+i*8,-5]],'#c27547',1.5);gem(c,0,-35,4,'#df9e58');}else{for(let i=0;i<3;i++)poly(c,[[-10,-38+i*6],[-5,-39+i*6],[-8,-32+i*6],[-12,-34+i*6]],'#8a9b68',null);}
  }else if(kind==='rat'){
   line(c,[[-18,-4],[-29,-6],[-32,-15],[-25,-19]],'#7c7069',3);ellipse(c,0,-8,18,10,'#535b58');poly(c,[[-11,-13],[9,-19],[24,-8],[10,-1],[-10,0]],'#73766a');poly(c,[[13,-11],[28,-6],[17,-3]],'#868577');ellipse(c,8,-16,5,6,'#8a776e');ellipse(c,17,-10,1.4,1.4,'#dec6a3');for(const n of [-1,1])line(c,[[n*11,-2],[n*14,3+stride*n*.3]],'#393b39',3);
  }else if(kind==='bat'){
   const flap=stride*1.5;for(const n of [-1,1])poly(c,[[n*3,-24],[n*22,-39-flap],[n*35,-24-flap],[n*26,-28],[n*21,-15],[n*13,-22],[n*6,-12]],'#594e62','#9a899a',1.2);ellipse(c,0,-21,7,14,'#3d3949');poly(c,[[-7,-29],[-7,-42],[0,-34],[7,-42],[7,-29]],'#726375');ellipse(c,-3,-31,1.4,1.4,'#efb880');ellipse(c,3,-31,1.4,1.4,'#efb880');
  }else if(kind==='cocoon'){
   poly(c,[[-18,-1],[-22,-23],[-11,-44],[6,-48],[23,-27],[17,-2],[0,5]],'#57494b','#907b68',2);for(let i=0;i<4;i++)line(c,[[-15,-7-i*8],[0,-4-i*8],[17,-11-i*8]],'#9a886a',2);gem(c,1,-25,12,'#ab6956');line(c,[[-4,-40],[2,-30],[-3,-23],[4,-13]],'#efb076',1.6);
  }else{
   const shield=kind==='shield',scribe=kind==='scribe',heavy=shield||kind==='chain';
   for(const n of [-1,1]){line(c,[[n*7,-21],[n*8,-9+stride*n*.5],[n*10,2+stride*n*.5]],'#b1aa92',heavy?6:3);ellipse(c,n*10,3+stride*n*.5,5,3,'#33373b');}
   poly(c,[[-12,-39],[-13,-15],[0,-7],[13,-15],[12,-39],[0,-44]],scribe?'#453b4f':heavy?'#424d52':'#605d54','#111821',2);for(let i=0;i<4;i++)line(c,[[-8,-33+i*5],[0,-30+i*5],[8,-33+i*5]],heavy?'#7b8986':'#b2ab91',heavy?2:1.5);
   if(scribe)poly(c,[[-13,-42],[-19,-6],[0,2],[18,-6],[13,-42]],'#45414d','#93896f',1.5);
   for(const n of [-1,1])line(c,[[n*12,-37],[n*18,-27],[n*20,-16]],'#aaa18b',4);
   poly(c,[[-8,-55],[-10,-44],[-5,-37],[6,-37],[10,-45],[7,-56]],'#bcb69e','#343e41',1.6);if(!back){ellipse(c,-4,-46,2.4,3,'#232b30');ellipse(c,4,-46,2.4,3,'#232b30');line(c,[[-3,-39],[4,-39]],'#454943',1);}
   if(scribe){poly(c,[[-13,-44],[-9,-61],[0,-70],[11,-58],[14,-43],[5,-47],[0,-57],[-5,-47]],'#474154','#a69772',1.5);line(c,[[21,-48],[21,-2]],'#a98a58',3);gem(c,21,-51,6,'#8aaea4');}
   if(shield){poly(c,[[7,-43],[28,-40],[31,-11],[19,1],[6,-9]],'#46595c','#b8ac85',2);poly(c,[[10,-39],[19,-38],[19,-4],[10,-11]],'#74827b',null);rune(c,20,-23,10,'#c9b16f');poly(c,[[-10,-59],[0,-67],[10,-59],[12,-49],[-12,-49]],'#66716e','#a39879',1);}
   if(kind==='archer'){c.beginPath();c.moveTo(20,-43);c.quadraticCurveTo(40,-24,20,-5);c.strokeStyle='#b39b71';c.lineWidth=3;c.stroke();line(c,[[20,-43],[mode==='attack'?10:23,-24],[20,-5]],'#d1c8a0',1);}
   if(kind==='chain'){line(c,[[-20,-15],[-25,-4],[-30,-10]],'#a79878',2);gem(c,-30,-12,10,'#6d7974');}
  }
  // A directional side view and back view keep facing readable, independently of aim.
  if(hero&&Math.abs(Math.sin(angle))<.35){c.save();c.globalCompositeOperation='source-atop';c.fillStyle='#09131e25';c.fillRect(-18,-74,13,70);c.restore();}
  Art.cache.set(key,cv);return cv;
 }
 Art.sprite=sprite;
 const ground=R.ground;R.ground=function(w){if(w.index!==0)return ground.call(this,w);this.cachedWorld=w;const cv=document.createElement('canvas');cv.width=w.width;cv.height=w.height;const c=cv.getContext('2d'),rng=U.rng(w.seed+8142);c.fillStyle='#141e26';c.fillRect(0,0,cv.width,cv.height);const size=145,cols=Math.ceil(w.width/size)+2,rows=Math.ceil(w.height/size)+2,points=[];for(let y=0;y<=rows;y++)for(let x=0;x<=cols;x++)points.push({x:x*size+(rng()-.5)*90,y:y*size+(rng()-.5)*65});for(let y=0;y<rows;y++)for(let x=0;x<cols;x++){const get=(xx,yy)=>points[yy*(cols+1)+xx],v=[get(x,y),get(x+1,y),get(x+1,y+1),get(x,y+1)],shade=29+Math.floor(rng()*9);poly(c,v.map(p=>[p.x,p.y]),`rgb(${shade},${shade+9},${shade+15})`,'#111a22',4);line(c,[[v[0].x+6,v[0].y+6],[v[1].x-5,v[1].y+6]],'#3b495244',2);if(rng()<.28){const p=v[0];line(c,[[p.x+25,p.y+30],[p.x+52,p.y+52],[p.x+44,p.y+73],[p.x+62,p.y+86]],'#111b2588',1.5);}}
  for(const p of w.paths){line(c,[[w.center.x,w.center.y],[p.x,p.y]],'#151f2944',105);line(c,[[w.center.x,w.center.y],[p.x,p.y]],'#4b53451b',80);}
  for(let i=0;i<1300;i++){const x=rng()*w.width,y=rng()*w.height;ellipse(c,x,y,1+rng()*5,1+rng()*2,i%3?'#10192333':'#82908313');}
  const landmarks=[['Żelazna Pieczęć',0,0],['Kuźnia',-750,0],['Zniszczony most',720,220],['Runiczny ołtarz',-200,680],['Krypta strażnika',450,-720],['Brama Kustosza',0,-1000]];
  this.landmarksSlice=landmarks.map(([name,x,y])=>({name,x:w.center.x+x,y:w.center.y+y}));
  for(const [i,l]of this.landmarksSlice.entries()){c.save();c.translate(l.x,l.y);c.globalAlpha=.58;if(i===2){for(let k=-3;k<=3;k++)poly(c,[[k*44,-38],[k*44+36,-34],[k*44+32,40],[k*44+3,36]],'#3c454a','#6c6d57',2);line(c,[[-160,47],[160,47]],'#817455',4);}else{for(const r of [68,92,i===0?240:110]){c.beginPath();c.arc(0,0,r,0,TAU);c.strokeStyle='#756c4c';c.lineWidth=r===240?4:2;c.stroke();}for(let k=0;k<12;k++){const a=k*TAU/12;rune(c,Math.cos(a)*81,Math.sin(a)*81,7,'#918365');}rune(c,0,0,i===0?45:27,'#927d51');}c.font='12px Georgia';c.textAlign='center';c.fillStyle='#a29573';c.fillText(l.name,0,135);c.restore();}this.map=cv;};
 const decor=R.decor;R.decor=function(c,d){
  if(!active(this))return decor.call(this,c,d);if(!d.solid)return;
  const wall=this.g.world.walls.find(w=>!w.round&&Math.abs(w.x+w.w/2-d.x)<30&&Math.abs(w.y+w.h/2-d.y)<60);if(wall)return;
  const x=d.x,y=d.y,p=this.g.player,torch=Math.floor(x+y)%3===0;
  shadow(c,x,y,25,10);c.save();if(Math.abs(p.x-x)<33&&p.y<y&&p.y>y-105)c.globalAlpha=.38;
  poly(c,[[x-21,y-10],[x+18,y-10],[x+24,y],[x+15,y+8],[x-23,y+5]],'#465359','#a3966c',1.6);
  poly(c,[[x-16,y-88],[x+13,y-88],[x+16,y-6],[x-16,y-6]],'#40505b','#7d877c',1.8);
  poly(c,[[x+8,y-86],[x+17,y-80],[x+17,y-6],[x+8,y-10]],'#1b2932',null);
  line(c,[[x-10,y-75],[x-10,y-15]],'#94a29555',2);
  for(const yy of [y-87,y-20])poly(c,[[x-21,yy],[x+20,yy],[x+20,yy+8],[x-21,yy+8]],'#64716d','#b0a076',1.4);
  poly(c,[[x-22,y-91],[x-10,y-99],[x+20,y-96],[x+23,y-86],[x-21,y-84]],'#637574','#a3a68a',1.4);
  line(c,[[x+3,y-82],[x-2,y-66],[x+5,y-59],[x+1,y-41]],'#16242c',1.5);
  if(torch){line(c,[[x-1,y-29],[x-1,y-55]],'#987948',4);poly(c,[[x-7,y-52],[x-1,y-72],[x+7,y-53],[x+2,y-47]],'#d79651','#dec18a',1);ellipse(c,x,y-55,2.6,6,'#ffe7b7');if(Art.quality()!=='low')glow(c,x,y-55,63,'#dbaa60',.12);}
  else rune(c,x,y-49,12,'#94b5ad');c.restore();
 };
 const plant=R.plant;R.plant=function(c,d){if(!active(this))return plant.call(this,c,d);};
 const wall=R.wall;R.wall=function(c,w){if(!active(this))return wall.call(this,c,w);const x=w.x,y=w.y,ww=w.w,hh=w.h,p=this.g.player;shadow(c,x+ww/2+13,y+hh,ww*.65,18);c.save();const occluded=p.x>x-20&&p.x<x+ww+20&&p.y>y-95&&p.y<y+hh;if(occluded)c.globalAlpha=.4;poly(c,[[x,y],[x+ww,y],[x+ww,y+hh],[x,y+hh]],'#28363e','#7a7962',2);const rise=Math.min(65,hh*.4);poly(c,[[x,y],[x+ww,y],[x+ww-7,y-rise],[x+7,y-rise]],'#566369','#9c987a',1.5);poly(c,[[x+ww-10,y],[x+ww-10,y+hh-5],[x+ww,y+hh],[x+ww,y]],'#151f29',null);line(c,[[x+8,y+8],[x+8,y+hh-8]],'#687374',3);for(const yy of [y+13,y+hh-16]){poly(c,[[x-4,yy],[x+ww+4,yy],[x+ww+4,yy+9],[x-4,yy+9]],'#4d514b','#a29267',1.5);}rune(c,x+ww/2,y+hh*.44,Math.min(15,ww*.28),'#91a99c');line(c,[[x+ww*.6,y+25],[x+ww*.48,y+39],[x+ww*.65,y+50]],'#09151c',2);c.restore();};
 const monument=R.monument;R.monument=function(c){if(!active(this))return monument.call(this,c);const w=this.g.world,x=w.center.x,y=w.center.y-80;shadow(c,x,y,48,18);const p=this.g.player;c.save();if(Math.abs(p.x-x)<45&&p.y<y&&p.y>y-100)c.globalAlpha=.4;poly(c,[[x-38,y-10],[x,y-26],[x+38,y-10],[x+34,y+9],[x,y+22],[x-34,y+9]],'#3c4a4e','#a8986f',2);poly(c,[[x-24,y-16],[x-19,y-49],[x+19,y-49],[x+24,y-16],[x,y-5]],'#37474b','#93865d',2);gem(c,x,y-68,31,'#b5894c');rune(c,x,y-21,9,'#d0b378');if(Art.quality()!=='low')glow(c,x,y-55,65,'#ddb778',.15);c.restore();};
 const player=R.player;R.player=function(c,p){if(!active(this)||!['ilya','sol'].includes(p.hero.id))return player.call(this,c,p);const pose=Art.pose(p,this.dtSlice||.016,this.ambient),moving=Math.hypot(p.vx||0,p.vy||0)>5,mode=pose.spell>this.ambient||p.castAnim>0?'cast':p.attackAnim>0||pose.secondaryUntil>this.ambient?'attack':moving?'run':'idle',dir=((Math.round(pose.angle/(TAU/8))%8)+8)%8,frame=moving?Math.floor(pose.gait)%8:0;shadow(c,pose.x,pose.y,23,9);c.save();c.translate(pose.x,pose.y);if(p.hp<=0){c.rotate(-1.2);c.globalAlpha=.5;}if(p.dashing>0||p.dashVisual>0){c.globalAlpha=.18;c.drawImage(sprite(p.hero.id,dir,frame,mode),-40-Math.cos(pose.angle)*24,-84-Math.sin(pose.angle)*24,80,96);c.globalAlpha=1;}c.rotate(p.hurtAnim>0?Math.sin(p.hurtAnim*40)*.06:0);c.drawImage(sprite(p.hero.id,dir,frame,mode),-40,-84,80,96);if(p.healAnim>0)for(let i=0;i<5;i++)gem(c,Math.cos(i*1.3)*25,-15-(this.ambient*30+i*9)%55,2,'#b3e5ab');if(p.hurtAnim>0){c.globalAlpha=.65;rune(c,0,-88,4,'#ffe9c3');}if(p.invuln>0){c.strokeStyle='#afdad488';c.lineWidth=1.5;c.beginPath();c.ellipse(0,-31,25,36,0,0,TAU);c.stroke();}if(pose.spell>this.ambient){const f=1-(pose.spell-this.ambient)/.85;c.strokeStyle=p.hero.id==='sol'?'#efb064':'#96d59d';c.globalAlpha=1-f;c.lineWidth=2;c.beginPath();c.ellipse(0,1,25+f*25,10+f*10,0,0,TAU);c.stroke();}c.restore();for(const [i,w]of (this.g.weapons||[]).entries()){const aim=w.aim23??pose.angle,x=pose.x+(i===0?Math.cos(aim)*19:i===1?-28:26),y=pose.y-28+(i===0?Math.sin(aim)*9:-10);this.weaponSlice(c,w,x,y,w.flash23>0?aim:i===0?aim:-1.2+i*.7,.82);}};
 Art.enemyKind=e=>e.isBoss?'boss':e.type.ai==='shield'?'shield':e.type.ai==='sniper'||e.type.ai==='ranged'?'archer':e.type.ai==='trapper'||e.type.ai==='artillery'?'scribe':e.type.ai==='splitter'||e.type.ai==='kamikaze'?'cocoon':e.type.shape==='bat'||e.type.ai==='swarm'?'bat':e.type.ai==='charge'?'chain':'rat';
 const enemy=R.enemy;R.enemy=function(c,e){if(!active(this))return enemy.call(this,c,e);const pose=Art.pose(e,this.dtSlice||.016,this.ambient),kind=Art.enemyKind(e),dir=((Math.round(pose.angle/(TAU/8))%8)+8)%8,wind=Math.max(e.wind||0,e.rangedWind||0,e.castAnim||0),frame=Math.floor(pose.gait)%8;shadow(c,pose.x,pose.y,e.isBoss?43:Math.max(14,e.r),e.isBoss?16:8);c.save();c.translate(pose.x,pose.y);if(e.left!==undefined){c.globalAlpha=U.clamp(e.left/.5,0,1);c.rotate((.5-e.left)*1.6);}if(e.isBoss)this.bossSlice(c,e);else{const size=e.mini?1.35:1;c.scale(size,size);c.drawImage(sprite(kind,dir,frame,wind?'attack':'run'),-40,-84,80,96);if(e.elite>=0||e.mini){poly(c,[[-15,-52],[-26,-58],[-22,-34],[-15,-31]],'#596b68','#baa77a',1.5);poly(c,[[15,-52],[26,-58],[22,-34],[15,-31]],'#596b68','#baa77a',1.5);rune(c,0,-81,7,'#dfb774');for(let i=0;i<3;i++){const a=this.ambient*1.3+i*TAU/3;gem(c,Math.cos(a)*25,-22+Math.sin(a)*10,3,['#d79364','#92bfcb','#ba6d84'][Math.abs(e.elite||0)%3]);}}if(e.status?.stun>0){for(let i=0;i<3;i++)rune(c,(i-1)*9,-69,2,'#efce81');}if(e.hp<e.maxHp){c.fillStyle='#101923';c.fillRect(-e.r,-72,e.r*2,3);c.fillStyle='#baa786';c.fillRect(-e.r,-72,e.r*2*Math.max(0,e.hp/e.maxHp),3);}}c.restore();if(wind>0){const angle=e.savedAngle??e.attackAim??pose.angle;c.save();c.setLineDash([6,6]);line(c,[[e.x,e.y],[e.x+Math.cos(angle)*145,e.y+Math.sin(angle)*145]],S.data.settings.altThreat3?'#fff17d':'#edb580',2);c.restore();}};
 R.bossSlice=function(c,e){const phase=e.phase||((e.hp/e.maxHp<.33)?3:e.hp/e.maxHp<.66?2:1),t=this.ambient,crack=phase>=2;
  for(const n of [-1,1]){poly(c,[[n*10,-40],[n*26,-35],[n*30,0],[n*8,3]],'#3e5056','#a99565',2);poly(c,[[n*17,-72],[n*43,-84],[n*53,-51],[n*38,-37],[n*26,-54]],'#536065','#a99978',2);line(c,[[n*41,-40],[n*45,-9]],'#74827d',10);for(let j=0;j<3;j++)ellipse(c,n*29,-35+j*7,3,4,'#a18f6b');}
  poly(c,[[-31,-79],[-26,-38],[0,-24],[27,-38],[32,-79],[0,-93]],'#38474f','#aa9970',2.5);poly(c,[[-25,-74],[0,-86],[0,-32],[-23,-42]],'#62716f',null);gem(c,0,-62,crack?23:12,phase===3?'#6cb3ad':'#dc9c4f');if(crack){line(c,[[-24,-78],[-8,-70],[-17,-56],[-9,-42]],'#ddb66e',2.5);line(c,[[23,-80],[13,-66],[23,-50]],'#efc481',2);}
  poly(c,[[-15,-107],[-21,-87],[-11,-76],[11,-76],[21,-87],[15,-107],[0,-116]],'#5a6a6c','#ad9c74',2);poly(c,[[-12,-95],[12,-95],[10,-88],[-10,-88]],'#111e26',null);line(c,[[-10,-92],[10,-92]],'#d7a25d',2);poly(c,[[-21,-102],[-25,-123],[-10,-110],[0,-118],[10,-110],[25,-123],[21,-102]],'#657577','#c6ae7a',2);
  c.save();c.translate(51,-22);c.rotate(-.2+Math.sin(t*1.4)*.035+(e.wind||0)*.25);line(c,[[0,14],[0,-86]],'#1a252b',9);line(c,[[0,14],[0,-86]],'#a38d62',4);poly(c,[[-23,-93],[23,-99],[27,-73],[-24,-69]],'#556b6e','#c2ab79',2);rune(c,0,-84,9,'#dcac69');c.restore();if(phase===3)for(let i=0;i<5;i++){const a=t*.6+i*TAU/5;poly(c,[[Math.cos(a)*53,-58+Math.sin(a)*22],[Math.cos(a)*53+9,-76+Math.sin(a)*22],[Math.cos(a)*53+16,-56+Math.sin(a)*22]],'#52646c','#bea878',1.5);}if((e.open24||0)>0){c.strokeStyle='#a9e6d4';c.lineWidth=2;c.beginPath();c.arc(0,-60,29,0,TAU);c.stroke();}};
 R.weaponSlice=function(c,w,x,y,a=0,s=1){const id=w.id,l=w.level||1,color=col[A.Data.weaponById[id]?.element]||'#b6975d';c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);line(c,[[-17,0],[22,0]],'#111b22',6);line(c,[[-17,0],[22,0]],'#988461',3);if(['bow','thornbow','crossbow'].includes(id)){c.beginPath();c.moveTo(3,-22);c.bezierCurveTo(-10,-13,-10,13,3,22);c.strokeStyle='#c3b27c';c.lineWidth=4;c.stroke();line(c,[[3,-22],[w.flash23>0?-9:8,0],[3,22]],'#e1d7b6',1);for(const n of [-1,1])poly(c,[[-1,n*16],[-9,n*11],[-5,n*7]],color,null);}else if(['hammer','runicHammer'].includes(id)){poly(c,[[12,-15],[29,-18],[32,14],[13,17]],'#61716d','#c1ab75',2);rune(c,22,0,9,color);}else if(id==='scythe'){poly(c,[[16,0],[19,-22],[-5,-31],[-19,-27],[-4,-40],[29,-32],[25,-6]],'#788d8a','#c9b87d',1.5);}else if(['spear','iceblade','daggers','void'].includes(id)){poly(c,[[13,-5],[36,0],[13,5],[18,0]],color,'#b2c5bd',1);}else{gem(c,22,0,id==='orb'?12:8,color);line(c,[[16,-8],[10,-13],[26,-14],[32,-6]],'#b7a36c',2);}if(l>=3)rune(c,-6,0,3,color);if(l>=5)gem(c,10,0,3,color);if(w.flash23>0){c.globalAlpha=Math.min(1,w.flash23/.22);line(c,[[30,0],[43,0]],'#ffe9b7',3);}c.restore();};
 const shot=R.drawProjectile;R.drawProjectile=function(c,b){if(!active(this))return shot.call(this,c,b);const color=b.enemy?(S.data.settings.altThreat3?'#ffed77':'#ff9860'):(col[b.element]||'#b7a0d2'),a=Math.atan2(b.vy,b.vx),min=2/(this.zoom25||.82),r=Math.max(min,Math.min(9,b.r||5));c.save();c.translate(b.x,b.y);c.rotate(a);if(!b.enemy)c.globalAlpha=Math.max(.25,(S.data.settings.playerFX3??.8)*(this.threatCountSlice?.7:1));line(c,[[-r*4,0],[-r,0]],color+'66',r*.65);const arrow=['bow','thornbow','spear','crossbow','daggers'].includes(b.weapon23)||b.element==='nature';if(arrow){line(c,[[-12,0],[10,0]],'#eee2b5',2);poly(c,[[13,0],[4,-4],[4,4]],color,'#172531',1);}else if(b.element==='ice'){poly(c,[[r*2.6,0],[-r,-r*.8],[-r*1.6,0],[-r,r*.8]],color,'#d5f4ee',1);}else if(b.element==='lightning'){line(c,[[-11,-3],[-3,2],[0,-4],[12,1]],color,3);line(c,[[-2,0],[-6,7]],color,1.5);}else if(b.element==='fire'){poly(c,[[-r*2,0],[-r*3,-r],[0,-r*.7],[r*1.2,0],[0,r],[-r*2,r*.6]],'#963e39',null);ellipse(c,0,0,r,r*.75,color);ellipse(c,2,-1,r*.45,r*.4,'#ffe6ae');}else if(b.element==='poison'){poly(c,[[r,0],[0,-r],[-r*2,0],[-r,r]],color,'#d2daa8',1);}else if(b.element==='stone'){poly(c,[[-r,-r],[r,-r*.6],[r*1.3,r*.4],[0,r],[-r,r*.5]],'#827b63','#ccbb91',1);}else{ellipse(c,0,0,r,r,color);ellipse(c,0,0,r*.45,r*.45,b.element==='arcane'?'#161527':'#edebcf');}if(b.enemy){c.strokeStyle='#fff0bd';c.lineWidth=2.2/(this.zoom25||.82);c.beginPath();c.arc(0,0,r+2,0,TAU);c.stroke();}c.restore();};
 const zone=R.zone;R.zone=function(c,z){if(!active(this))return zone.call(this,c,z);const delayed=z.delay>0,progress=1-U.clamp((z.delay||0)/(z.telegraph||1.4),0,1),color=z.enemy?(S.data.settings.altThreat3?'#f8e878':'#ff895c'):(col[z.element]||'#9bcbb0'),life=U.clamp((z.life||1)/.45,0,1);c.save();c.globalAlpha=z.enemy?delayed?.1:.17:(this.threatCountSlice?.055:.13)*life;ellipse(c,z.x,z.y,z.r,z.r,color);c.globalAlpha=1;c.strokeStyle=z.enemy?'#0b121b':color+'77';c.lineWidth=z.enemy?5:1.3;c.beginPath();c.arc(z.x,z.y,z.r,0,TAU);c.stroke();if(z.enemy){c.strokeStyle=color;c.lineWidth=2.5/(this.zoom25||.82);c.stroke();c.lineWidth=3;c.beginPath();c.arc(z.x,z.y,Math.max(1,z.r-5),-Math.PI/2,-Math.PI/2+TAU*progress);c.stroke();rune(c,z.x,z.y,8,color);}else if(z.element==='nature'){for(let i=0;i<8;i++){const a=i*TAU/8+.3;line(c,[[z.x+Math.cos(a)*z.r*.9,z.y+Math.sin(a)*z.r*.9],[z.x+Math.cos(a+.1)*z.r*.55,z.y+Math.sin(a+.1)*z.r*.55],[z.x+Math.cos(a-.1)*z.r*.4,z.y+Math.sin(a-.1)*z.r*.4]],color+'99',3);}}else if(z.element==='fire'&&delayed){rune(c,z.x,z.y,z.r*.4,color);ellipse(c,z.x,z.y,z.r*progress*.35,z.r*progress*.2,'#0e162d99');}else{for(let i=0;i<6;i++){const a=i*TAU/6+this.ambient*.15;rune(c,z.x+Math.cos(a)*z.r*.7,z.y+Math.sin(a)*z.r*.7,4,color+'99');}}c.restore();};
 const event=R.event;R.event=function(c,e){if(!active(this))return event.call(this,c,e);const x=e.x,y=e.y,kind=e.treasure25||e.type,t=this.ambient,color=kind==='recovery'||kind==='supply'?'#7eb58e':kind==='corrupted'?'#b581b9':'#b79d66';shadow(c,x,y,31,10);c.save();c.translate(x,y);c.globalAlpha=e.used?.45:1;
  if(e.type==='portal'){poly(c,[[-40,7],[-40,-73],[-25,-100],[25,-100],[40,-73],[40,7],[28,7],[28,-66],[18,-81],[-18,-81],[-28,-66],[-28,7]],'#4c5a5d','#b4a078',2);for(const n of [-1,1])for(let i=0;i<3;i++)rune(c,n*34,-17-i*25,5,e.locked?'#736d55':'#94c7b7');c.save();c.beginPath();c.ellipse(0,-43,27,39,0,0,TAU);c.clip();c.fillStyle='#101e28';c.fillRect(-30,-84,60,84);if(!e.locked){for(let i=0;i<4;i++){c.strokeStyle=['#294852','#3c6570','#80b3aa','#dac999'][i];c.lineWidth=2;c.beginPath();c.ellipse(Math.sin(t+i)*4,-43,8+i*6,12+i*8,t*.3+i,0,TAU);c.stroke();}}else line(c,[[-24,-67],[24,-19],[-24,-19],[24,-67]],'#917f59',3);c.restore();}
  else if(kind==='recovery'||kind==='fountain'){poly(c,[[-24,0],[-28,-12],[0,-23],[28,-12],[24,0],[0,9]],'#445751','#a9b484',2);ellipse(c,0,-12,20,8,'#92ccac');if(!e.used){const pulse=.6+Math.sin(t*3)*.15;c.globalAlpha=pulse*.35;const gradient=c.createLinearGradient(0,-115,0,0);gradient.addColorStop(0,'#80d2a000');gradient.addColorStop(1,'#80d2a0');c.fillStyle=gradient;c.fillRect(-12,-115,24,106);c.globalAlpha=1;for(let i=0;i<4;i++)gem(c,Math.sin(i*2+t)*14,-22-(t*15+i*20)%70,2,'#b9edd0');}}
  else if(e.potionShop28){poly(c,[[-28,4],[-28,-22],[28,-22],[28,4]],'#3e4c46','#af9b74',2);for(let i=0;i<3;i++){ellipse(c,(i-1)*15,-28,5,7,['#d48383','#90b9ab','#b0a1c1'][i]);line(c,[[(i-1)*15,-35],[(i-1)*15,-40]],'#bfab80',4);}}
  else if(['supply','arsenal','reliquary','corrupted','treasury','chest'].includes(kind)){const open=e.used?U.clamp((this.g.time-(e.openedAt||0))*3,0,1):0,shrine=kind==='reliquary';poly(c,[[-25,3],[-25,-21],[22,-26],[29,-16],[29,5],[0,12]],'#39444b',color,2);poly(c,[[22,-26],[29,-16],[29,5],[22,2]],'#1b2a34',null);poly(c,[[-27,-22-open*20],[0,-31-open*28],[28,-24-open*20],[23,-14-open*20],[-23,-12-open*20]],shrine?'#626b62':'#655a48',color,2);for(const n of [-1,1])line(c,[[n*17,-19],[n*17,6]],color,3);gem(c,0,-9,6,color);if(kind==='arsenal'){line(c,[[-11,-38],[11,-20]],'#d8c18a',3);line(c,[[11,-38],[-11,-20]],'#d8c18a',3);}if(kind==='supply'){ellipse(c,0,-30,5,7,'#8ebd95');line(c,[[0,-37],[0,-42]],'#cab58d',3);}if(shrine){rune(c,0,-48+Math.sin(t*2)*3,11,'#c5b590');}if(kind==='corrupted')for(const n of [-1,1])poly(c,[[n*21,-9],[n*35,-38],[n*28,-1]],'#746278',color,1.5);if(!e.used&&Art.quality()!=='low')glow(c,0,-9,38,color,.1);}
  else{poly(c,[[-20,4],[-19,-20],[0,-32],[19,-20],[20,4]],'#3f5055','#a99a71',1.5);rune(c,0,-13,10,'#92b5aa');}c.restore();if(U.dist(this.g.player,e)<150&&!e.used){c.save();c.font='12px Georgia';c.textAlign='center';c.lineWidth=4;c.strokeStyle='#101920';const label=e.potionShop28?'Zielarz':e.type==='portal'?(e.locked?'Zamknięta brama':'Portal'):A.treasures25[e.treasure25]?.name||'Ołtarz';c.strokeText(label,x,y-(e.type==='portal'?117:65));c.fillStyle='#deceab';c.fillText(label,x,y-(e.type==='portal'?117:65));c.restore();}};
 // Static material detail is baked once per map, never regenerated in combat.
 const stoneGround=R.ground;
 R.ground=function(w){
  stoneGround.call(this,w);if(w.index!==0)return;
  const c=this.map.getContext('2d'),rng=U.rng(w.seed+1893),tile=document.createElement('canvas');tile.width=tile.height=192;
  const tc=tile.getContext('2d');
  for(let i=0;i<2100;i++){tc.fillStyle=i%3?'#080f1820':'#c7c9b015';tc.fillRect(rng()*192,rng()*192,1+rng()*3,1);}
  c.fillStyle=c.createPattern(tile,'repeat');c.fillRect(0,0,w.width,w.height);
  for(let i=0;i<260;i++){
   const x=rng()*w.width,y=rng()*w.height,r=15+rng()*72;
   const g=c.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,i%3?'#080f172c':'#77866a13');g.addColorStop(1,'#10192300');c.fillStyle=g;c.fillRect(x-r,y-r,r*2,r*2);
   if(i%4===0)line(c,[[x,y],[x+8,y+12],[x+6,y+22],[x+17,y+30]],'#8b968218',1);
  }
  for(let i=0;i<5;i++){const x=w.center.x+(i-2)*280,y=w.center.y-150;
   line(c,[[x-100,y-800],[x+80,y+780]],'#88988205',150);
  }
  // Worn floor mosaics mark landmarks without suggesting a false collision wall.
  const shapes=[null,[[-35,0],[-45,-19],[25,-19],[43,-9],[12,0],[9,20],[24,27],[-23,27],[-8,19],[-9,0]],null,[[-28,20],[-18,-21],[18,-21],[28,20]],[[0,-35],[21,-24],[21,22],[0,34],[-21,22],[-21,-24]],[[-33,25],[-33,-23],[-19,-38],[19,-38],[33,-23],[33,25],[22,25],[22,-19],[-22,-19],[-22,25]]];
  for(let i=1;i<this.landmarksSlice.length;i++){const l=this.landmarksSlice[i];if(shapes[i]){c.save();c.translate(l.x,l.y);c.globalAlpha=.45;poly(c,shapes[i],'#515b54','#a39570',2);c.restore();}}
  c.strokeStyle='#101820';c.lineWidth=46;c.strokeRect(23,23,w.width-46,w.height-46);c.strokeStyle='#827652';c.lineWidth=2;c.strokeRect(46,46,w.width-92,w.height-92);
 };
 const actorEnemy=R.enemy;
 R.enemy=function(c,e){
  if(!active(this))return actorEnemy.call(this,c,e);
  if(e.left!==undefined&&this.corpsesDrawnSlice++>=this.budgetSlice.corpses)return;
  c.save();
  if(e.flash>0){c.translate(e.x,e.y);c.rotate(Math.sin(e.flash*45)*.035);c.translate(-e.x,-e.y);}
  actorEnemy.call(this,c,e);c.restore();
  if(e.flash>0){line(c,[[e.x-12,e.y-39],[e.x+11,e.y-53]],'#fff0c3',2);}
  if(e.isBoss&&e.age<1.2){const f=U.clamp(e.age/1.2,0,1);c.save();c.globalAlpha=1-f;c.strokeStyle='#d8ba75';c.lineWidth=3;c.beginPath();c.ellipse(e.x,e.y,45+f*65,18+f*26,0,0,TAU);c.stroke();c.restore();}
 };
 const actorPlayer=R.player;
 R.player=function(c,p){
  actorPlayer.call(this,c,p);
  if(active(this)&&['ilya','sol'].includes(p.hero.id)&&this.g.state==='results'&&this.g.result?.win){c.save();c.globalAlpha=.65+.2*Math.sin(this.ambient*2);rune(c,p.x,p.y-93,10,'#ead39a');c.restore();}
 };
 const projectile=R.drawProjectile;
 R.drawProjectile=function(c,b){
  if(!active(this)||b.enemy||!['scythe','hammer','runicHammer'].includes(b.weapon23))return projectile.call(this,c,b);
  c.save();c.globalAlpha=this.threatCountSlice?.55:.85;
  this.weaponSlice(c,{id:b.weapon23,level:3},b.x,b.y,Math.atan2(b.vy,b.vx)+(b.age||0)*8,.58);c.restore();
 };
 // Reset visual budgets every frame. They never remove actors or enemy warnings.
 const frameRender=R.render;
 R.render=function(dt){this.corpsesDrawnSlice=0;Art.lightsLeft=Art.budgets[Art.quality()].lights;frameRender.call(this,dt);};
 // Final pass always restores enemy warnings above decorative light and player effects.
 const render=R.render;R.render=function(dt){this.dtSlice=Math.min(.05,dt||.016);this.threatCountSlice=this.g.zones?.active.filter(z=>z.enemy).length||0;this.budgetSlice=Art.budgets[Art.quality()];render.call(this,dt);if(!active(this)||this.ox===undefined)return;const c=this.g.ctx,z=this.g.scale*(this.zoom25||1);c.save();c.setTransform(z,0,0,z,this.ox*z,this.oy*z);for(const field of this.g.zones.active)if(field.enemy){c.beginPath();c.arc(field.x,field.y,field.r,0,TAU);c.strokeStyle=S.data.settings.altThreat3?'#fff174':'#ffb27c';c.lineWidth=(S.data.settings.threat3==='max'?3:1.6)/(this.zoom25||1);c.stroke();}c.restore();};
 const settings=P.settings;P.settings=function(...args){settings.apply(this,args);this.overlay.querySelector('.panel')?.insertAdjacentHTML('beforeend',`<h2>Jakość świata</h2><p>Wzorzec graficzny Podziemi. Każdy tryb zachowuje ostrzeżenia przeciwników.</p><div class="actions">${[['low','Niska'],['medium','Średnia'],['high','Wysoka']].map(([id,label])=>this.button(label,'worldQualitySlice',id,Art.quality()===id?'primary':'')).join('')}</div>`);};
 const action=P.action;P.action=function(id,value){if(id==='worldQualitySlice'&&Art.budgets[value]){S.data.settings.worldQuality=value;S.write();this.settings(this.settingsBack23||'menu');return;}return action.call(this,id,value);};
})(window.Aeren);

;

/* Module: js/art-depth.js */
'use strict';
(function(A){
 const R=A.Renderer.prototype,G=A.Game.prototype,U=A.U,S=A.Save,TAU=Math.PI*2;
 const D=A.ArtDepth={version:2,poses:new WeakMap()};
 const tints=new Map();const tint=(hex,f)=>{const key=hex+':'+f;if(tints.has(key))return tints.get(key);const n=parseInt(hex.slice(1),16),value='#'+[n>>16,(n>>8)&255,n&255].map(v=>Math.min(255,Math.max(0,Math.round(v*f))).toString(16).padStart(2,'0')).join('');tints.set(key,value);return value;};
 const RING=Array.from({length:6},(_,i)=>[Math.cos(i*TAU/6),Math.sin(i*TAU/6)]);
 // Real continuous yaw: project local width, depth and height into the existing
 // elevated camera. No rotating a flat sprite around its feet or direction bins.
 D.project=function(x,y,z,a){const sn=Math.sin(a),cs=Math.cos(a),wx=-x*sn+y*cs,wy=x*cs+y*sn;return{x:wx,y:wy*.48-z,depth:wy+z*.48};};
 function mesh(c,a){
  const faces=[],cs=Math.cos(a),sn=Math.sin(a);
  const face=(points,color,normal)=>{if(normal&&normal[0]*cs+normal[1]*sn+normal[2]*.48<=0)return;const p=points.map(([x,y,z])=>{const wy=x*cs+y*sn;return{x:-x*sn+y*cs,y:wy*.48-z,depth:wy+z*.48};});faces.push({p,color,depth:p.reduce((sum,v)=>sum+v.depth,0)/p.length});};
  const box=(x,y,z,w,d,h,color)=>{
   const x0=x-w/2,x1=x+w/2,y0=y-d/2,y1=y+d/2,z1=z+h;
   face([[x0,y0,z],[x0,y1,z],[x0,y1,z1],[x0,y0,z1]],tint(color,.7),[-1,0,0]);
   face([[x1,y1,z],[x1,y0,z],[x1,y0,z1],[x1,y1,z1]],tint(color,.9),[1,0,0]);
   face([[x1,y0,z],[x0,y0,z],[x0,y0,z1],[x1,y0,z1]],tint(color,.8),[0,-1,0]);
   face([[x0,y1,z],[x1,y1,z],[x1,y1,z1],[x0,y1,z1]],color,[0,1,0]);
   face([[x0,y0,z1],[x0,y1,z1],[x1,y1,z1],[x1,y0,z1]],tint(color,1.23),[0,0,1]);
  };
  const oval=(x,y,z,w,d,h,color,taper=1)=>{const p=D.project(x,y,z+h/2,a),rx=Math.sqrt((w*sn)**2+(d*cs)**2)/2,ry=h/2+Math.min(w,d)*.08;faces.push({smooth:true,p,rx,ry,color,depth:p.depth});};
  const cone=(x,y,z,w,d,h,color)=>{const p=D.project(x,y,z,a),rx=Math.sqrt((w*sn)**2+(d*cs)**2)/2;faces.push({cloth:true,p,rx,h,color,depth:p.depth+h*.21});};
  const panel=(p,color)=>face(p,color);
  const finish=(outline=false)=>{faces.sort((a,b)=>a.depth-b.depth);for(const f of faces){c.beginPath();if(f.smooth||f.cloth){const {x,y}=f.p,rx=Math.max(.6,f.rx),ry=f.ry||f.h;if(f.smooth)c.ellipse(x,y,rx,Math.max(.6,ry),0,0,TAU);else{c.moveTo(x-rx,y);c.bezierCurveTo(x-rx*.75,y-f.h*.4,x-rx*.35,y-f.h*.72,x,y-f.h);c.bezierCurveTo(x+rx*.2,y-f.h*.7,x+rx*.7,y-f.h*.4,x+rx,y);c.quadraticCurveTo(x,y+rx*.2,x-rx,y);}const gr=c.createLinearGradient(x-rx,y,x+rx,y);gr.addColorStop(0,tint(f.color,.63));gr.addColorStop(.36,tint(f.color,1.2));gr.addColorStop(.7,f.color);gr.addColorStop(1,tint(f.color,.62));c.fillStyle=gr;}else{f.p.forEach((v,i)=>i?c.lineTo(v.x,v.y):c.moveTo(v.x,v.y));c.fillStyle=f.color;}c.closePath();c.fill();if(outline&&!f.smooth){c.strokeStyle='#101820';c.lineWidth=.6;c.stroke();}}};
  return{box,oval,cone,panel,finish};
 }
 D.heading=function(g,e){
  if(e.hero){if(e.castAnim>0)return e.attackAim??e.aim??0;if(S.data.settings.autoAim===false)return e.aim??0;
   let target=null,dist=Infinity;for(const enemy of g.enemies){if(enemy.hp<=0)continue;const d=(enemy.x-e.x)**2+(enemy.y-e.y)**2;if(d<dist){target=enemy;dist=d;}}
   return target?U.angle(e,target):e.aim??e.facing??0;
  }
  return e.intent24?.angle??((e.wind>0||e.rangedWind>0)?e.savedAngle??e.attackAim:undefined)??U.angle(e,g.player);
 };
 D.pose=function(g,e,dt){let p=D.poses.get(e);const frame=g.renderer.frameDepth;if(p&&frame!==undefined&&p.frame===frame)return p;const target=e.left!==undefined&&p?p.angle:D.heading(g,e);if(!p){p={x:e.x,y:e.y,angle:target,gait:0,lastX:e.x,lastY:e.y,ult:e.ultCd||0};D.poses.set(e,p);}p.frame=frame;const travel=Math.hypot(e.x-p.lastX,e.y-p.lastY);p.gait+=Math.min(travel,18)*.13;p.lastX=e.x;p.lastY=e.y;p.moving=travel>.03;
  if((e.ultCd||0)>p.ult+.5)p.spellUntil=g.time+.75;p.ult=e.ultCd||0;
  const f=1-Math.exp(-40*dt);if(Math.hypot(e.x-p.x,e.y-p.y)>85||e.dashing>0){p.x=e.x;p.y=e.y;}else{p.x+=(e.x-p.x)*f;p.y+=(e.y-p.y)*f;}
  p.angle+=Math.atan2(Math.sin(target-p.angle),Math.cos(target-p.angle))*(1-Math.exp(-22*dt));return p;
 };
 D.actor=function(c,kind,a,gait,mode,options={}){
  const m=mesh(c,a),hero=['ilya','sol','niva','orren','vesper'].includes(kind),boss=kind==='boss',walk=mode==='run'?Math.sin(gait):0;
  const palette={ilya:'#466851',sol:'#744743',niva:'#527b8e',orren:'#68736e',vesper:'#64506f',shield:'#64736f',archer:'#918c73',scribe:'#61566f',chain:'#67665c'};
  const coat=palette[kind]||'#6b7567',gold='#b39b65',skin=hero?'#c5ad89':'#c9bea0';
  if(kind==='rat'){
   m.oval(0,-1,5,23,37,12,'#666b5c',.72);m.cone(0,18,7,15,18,13,'#888676');m.box(0,-26,7,3,25,3,'#967b71');
   for(const n of [-1,1]){m.box(n*10,walk*n*4,0,4,15,5,'#545d55');m.cone(n*6,10,17,6,5,9,'#a28b7c');m.box(n*5,19,15,2,2,2,'#f1c078');}
  }else if(kind==='bat'){
   m.box(0,0,24,10,17,13,'#615268');m.cone(0,9,35,11,9,8,'#92758d');
   for(const n of [-1,1]){m.panel([[n*4,0,34],[n*34,-10,38+Math.sin(gait*2)*9],[n*24,7,29],[n*15,1,26],[n*6,10,26]],'#8a6f91');m.box(n*3,11,37,2,2,2,'#eabe83');}
  }else if(kind==='cocoon'){
   m.cone(0,0,0,37,33,49,'#877158');m.cone(0,0,15,32,28,35,'#9d8265');for(let i=0;i<3;i++)m.box(0,10-i*2,10+i*9,24-i*4,9,3,'#c2a279');m.box(0,15,22,5,4,10,'#d59563');
  }else if(boss){
   for(const n of [-1,1]){m.oval(n*17,walk*n*5,0,19,25,30,'#536269');m.oval(n*43,0,51,28,29,27,'#6d7a79');m.oval(n*41,8,28,12,14,26,'#827b66');}
   m.oval(0,0,30,61,39,55,'#5a6b71');m.oval(0,0,82,28,25,25,'#8a9283');m.cone(0,0,104,33,26,16,'#c2ad75');
   m.box(0,18,45,options.phase>1?25:13,4,options.phase>1?29:17,options.phase===3?'#89c6bd':'#e0b66c');m.box(0,13,92,19,2,4,'#e7bc75');
   m.box(44,17,4,5,6,85,gold);m.box(44,17,75,33,20,23,'#84978c');
   if(options.phase>=2){m.panel([[-22,18,73],[-9,18,60],[-19,18,46],[-10,18,38]],'#e1bd7b');}
   if(options.phase===3)for(let i=0;i<4;i++){const t=(options.time||0)+i*TAU/4;m.cone(Math.cos(t)*49,Math.sin(t)*38,60,11,9,19,'#8d9a90');}
  }else{
   const wide=kind==='sol'?1.2:kind==='orren'?1.3:1;
   for(const n of [-1,1]){const step=walk*n*7,foot=Math.max(0,walk*n)*3;m.oval(n*8,step,foot,9,16,8,'#4d5147');m.oval(n*8,step*.5,6+foot,6,8,17,hero?'#504c40':skin);}
   if(hero||kind==='scribe'){m.cone(0,-3,9,37*wide,25,41,coat);m.panel([[-17*wide,-12,10],[17*wide,-12,10],[12*wide,-9,48],[-12*wide,-9,48]],tint(coat,.75));}
   m.oval(0,0,23,24*wide,19,25,coat,1.12);m.oval(0,0,23,26*wide,20,4,gold);
   for(const n of [-1,1]){const lift=mode==='cast'?13:mode==='attack'?8:0;m.oval(n*17*wide,0,36,11,17,11,hero?'#8a9275':'#8b9382',.75);m.oval(n*19*wide,2+lift*.5,21+lift,6,8,18,coat);m.oval(n*19*wide,5+lift*.5,18+lift,6,7,6,skin);}
   m.oval(0,0,49,17,17,16,hero?coat:skin,.85);
   // Features sit on the front plane and are naturally hidden when facing away.
   if(Math.sin(a)>0){m.oval(0,7.6,50,13,3,13,skin);for(const n of [-1,1])m.oval(n*3,8.7,57,2,1,2,'#19212a');m.oval(0,9,53,3,2,4,skin);}
   if(hero||kind==='scribe'){m.cone(0,-2,62,24,22,kind==='sol'?19:12,coat);m.oval(0,-6,48,21,10,17,coat,.9);}
   if(kind==='archer'){m.box(21,14,19,3,4,36,gold);m.panel([[21,14,20],[28,18,36],[21,14,54]],'#c6b384');}
   if(kind==='shield'||kind==='orren'){m.box(-20,15,14,22,5,31,'#819185');m.box(-20,18,18,3,2,25,gold);m.box(-20,18,29,17,2,3,gold);}
   if(kind==='scribe'){m.box(23,8,3,3,4,52,gold);m.cone(23,8,54,10,9,14,'#b1b9ce');}
   if(!hero&&kind!=='scribe')for(let i=0;i<4;i++)m.box(0,9,29+i*4,17-i,2,2,skin);
   if(options.elite){for(const n of [-1,1])m.cone(n*18,0,45,14,17,17,gold);}
  }
   m.finish(hero||boss);
 };
 const shadow=(c,p,r)=>{c.fillStyle='#07101888';c.beginPath();c.ellipse(p.x+4,p.y+4,r,r*.34,0,0,TAU);c.fill();};
 const oldPlayer=R.player;
 R.player=function(c,e){
  if(!A.ArtSlice)return oldPlayer.call(this,c,e);
  const p=D.pose(this.g,e,this.dtSlice||.016),mode=e.castAnim>0||p.spellUntil>this.g.time?'cast':e.attackAnim>0?'attack':p.moving?'run':'idle';shadow(c,p,23);
  c.save();c.translate(p.x,p.y);if(e.hp<=0){c.rotate(-1.15);c.globalAlpha=.5;}if(e.hurtAnim>0)c.translate(Math.sin(e.hurtAnim*40)*2,0);
  if(e.dashing>0||e.dashVisual>0){c.save();c.globalAlpha=.18;c.translate(-Math.cos(p.angle)*18,-Math.sin(p.angle)*18);D.actor(c,e.hero.id,p.angle,p.gait,mode);c.restore();}
  D.actor(c,e.hero.id,p.angle,p.gait,mode);c.restore();
  for(const [i,w]of (this.g.weapons||[]).entries()){
   const a=i===0?p.angle:w.aim23??p.angle,pos=D.project(i===0?18:(i===1?-23:23),i===0?12:-8,29,p.angle);
   this.weaponSlice(c,w,p.x+pos.x,p.y+pos.y,a,.83);
  }
  if(e.healAnim>0||e.invuln>0){c.save();c.strokeStyle=e.healAnim>0?'#b5e6b0aa':'#c5e2d26b';c.lineWidth=1.5;c.beginPath();c.ellipse(p.x,p.y-30,26,38,0,0,TAU);c.stroke();c.restore();}
 };
 const enemyImages=new WeakMap();
 D.enemyImage=function(e,kind,p,mode,phase,time){
  let image=enemyImages.get(e);if(!image){const canvas=document.createElement('canvas');canvas.width=180;canvas.height=200;image={canvas,angle:Infinity,gait:Infinity};enemyImages.set(e,image);}
  const step=Math.round(p.gait*2.5)/2.5,delta=Math.abs(Math.atan2(Math.sin(image.angle-p.angle),Math.cos(image.angle-p.angle)));
  // Reuse only when projected angular error is below half a pixel. This is
  // subpixel caching, not a fixed set of front/back or eight-direction views.
  if(!Number.isFinite(image.angle)||delta>.006||step!==image.gait||mode!==image.mode||phase!==image.phase||kind!==image.kind){
   const ctx=image.canvas.getContext('2d');ctx.clearRect(0,0,180,200);ctx.save();ctx.translate(90,165);D.actor(ctx,kind,p.angle,step,mode,{phase,elite:e.elite>=0||e.mini,time});ctx.restore();Object.assign(image,{angle:p.angle,gait:step,mode,phase,kind});
  }
  return image.canvas;
 };
 const oldEnemy=R.enemy;
 R.enemy=function(c,e){
  if(!A.ArtSlice)return oldEnemy.call(this,c,e);
  if(e.left!==undefined&&this.corpsesDrawnDepth++>=A.ArtSlice.budgets[A.ArtSlice.quality()].corpses)return;
  const p=D.pose(this.g,e,this.dtSlice||.016),kind=A.ArtSlice.enemyKind(e),wind=Math.max(e.wind||0,e.rangedWind||0,e.castAnim||0),phase=e.phase||1;
  shadow(c,p,e.isBoss?43:Math.max(15,e.r));c.save();c.translate(p.x,p.y);if(e.left!==undefined){c.globalAlpha=U.clamp(e.left/.5,0,1);c.rotate((.5-e.left)*1.6);}if(e.mini)c.scale(1.25,1.25);
  const mode=wind?'attack':p.moving?'run':'idle';
  if(e.isBoss)D.actor(c,kind,p.angle,p.gait,mode,{phase,elite:e.elite>=0||e.mini,time:this.ambient});else c.drawImage(D.enemyImage(e,kind,p,mode,phase,this.ambient),-90,-165);
  if(e.flash>0){c.strokeStyle='#ffe9b1';c.lineWidth=2;c.beginPath();c.moveTo(-10,-37);c.lineTo(12,-53);c.stroke();}
  if(e.hp<e.maxHp&&!e.isBoss){c.fillStyle='#111a22';c.fillRect(-e.r,-79,e.r*2,3);c.fillStyle='#c7b87e';c.fillRect(-e.r,-79,e.r*2*Math.max(0,e.hp/e.maxHp),3);}c.restore();
  if(wind>0){const a=e.savedAngle??p.angle;c.save();c.setLineDash([7,5]);c.strokeStyle='#f2bd86';c.lineWidth=2;c.beginPath();c.moveTo(e.x,e.y);c.lineTo(e.x+Math.cos(a)*145,e.y+Math.sin(a)*145);c.stroke();c.restore();}
 };
 const render=R.render;R.render=function(dt){this.frameDepth=(this.frameDepth||0)+1;this.corpsesDrawnDepth=0;return render.call(this,dt);};
 const decor=R.decor;R.decor=function(c,d){
  if(this.g.world.index!==0||!d.solid||Math.abs(Math.floor(d.x+d.y))%3===0)return decor.call(this,c,d);
  const kind=Math.abs(Math.floor(d.x))%2;shadow(c,d,23);c.save();c.translate(d.x,d.y);const m=mesh(c,.6);
  if(kind){m.oval(0,0,0,34,27,7,'#757a70');m.oval(0,0,7,31,24,26,'#76715e',.65);m.oval(0,0,33,20,18,5,'#b09e77');m.cone(0,0,38,21,19,8,'#797b6a');}
  else{m.box(-7,-2,0,23,20,12,'#65746f');m.box(8,3,0,19,23,8,'#7f8679');m.box(-3,0,12,17,15,11,'#87917f');}
  m.finish();c.restore();
 };
 const event=R.event;R.event=function(c,e){event.call(this,c,e);if(this.g.world.index!==0||e.used||!['supply','arsenal','reliquary','corrupted','treasury'].includes(e.treasure25))return;
  c.save();c.translate(e.x,e.y);c.strokeStyle='#d1b57a';c.lineWidth=1;
  for(const x of [-18,18])for(const y of [-13,1]){c.fillStyle='#ded0a1';c.beginPath();c.arc(x,y,1.4,0,TAU);c.fill();}
  c.strokeStyle='#192630';for(const x of [-10,8]){c.beginPath();c.moveTo(x,-13);c.lineTo(x,4);c.stroke();}
  c.strokeStyle='#c1a672';c.strokeRect(-4,-8,8,9);c.fillStyle='#15232a';c.fillRect(-1,-5,2,4);c.restore();
 };

 // Open rooms have four wide exits; decorative objects use the same footprint
 // for rendering, collision, pathfinding and minimap discovery.
 const BaseWorld=A.World;
 A.World=class extends BaseWorld{
  constructor(seed,index){super(seed,index);if(index<0||index>5)return;const rng=U.rng(seed+73219+index*193),cx=this.center.x,cy=this.center.y;
   this.roomsDepth=[['crypt',-790,-510],['library',780,-510],['forge',-790,610],['prison',780,610]].map(([kind,x,y])=>({kind,x:cx+x+(rng()-.5)*80,y:cy+y+(rng()-.5)*70,w:620,h:470}));
   const inRoom=(x,y)=>this.roomsDepth.some(r=>Math.abs(x-r.x)<r.w/2+65&&Math.abs(y-r.y)<r.h/2+65);
   this.walls=this.walls.filter(w=>!inRoom(w.x+w.w/2,w.y+w.h/2));this.decor=this.decor.filter(d=>!d.solid||!inRoom(d.x,d.y));
   for(const r of this.roomsDepth){const x=r.x-r.w/2,y=r.y-r.h/2,gap=200,t=30;
    for(const yy of [y,y+r.h-t])for(const xx of [x,r.x+gap/2])this.walls.push({x:xx,y:yy,w:(r.w-gap)/2,h:t,depthKind:'wall',roomKind:r.kind});
    for(const xx of [x,x+r.w-t])for(const yy of [y+t,r.y+gap/2])this.walls.push({x:xx,y:yy,w:t,h:(r.h-gap)/2-t,depthKind:'wall',roomKind:r.kind});
    for(const side of [-1,1])this.walls.push({x:r.x+side*150-48,y:r.y-25,w:96,h:50,depthKind:{crypt:'tomb',library:'shelf',forge:'anvil',prison:'cage'}[r.kind],roomKind:r.kind});
   }
   this.reindex();this.flow=null;this.flowCell=-1;
   if(this.navBlocked)for(let y=0;y<this.navRows;y++)for(let x=0;x<this.navCols;x++)this.navBlocked[y*this.navCols+x]=this.collides(x*60+30,y*60+30,28)?1:0;
   for(const e of this.events)if(this.collides(e.x,e.y,32))Object.assign(e,this.freePoint(e.x,e.y,32));
   this.hazards=this.hazards.filter(h=>!this.collides(h.x,h.y,h.r+20));
  }
 };
 const load=G.loadRun;G.loadRun=function(...args){const result=load.apply(this,args);if(this.world?.roomsDepth){for(const e of [this.player,...this.enemies,...this.world.events])if(this.world.collides(e.x,e.y,e.r||30))Object.assign(e,this.world.freePoint(e.x,e.y,e.r||30));this.camera.x=this.player.x;this.camera.y=this.player.y;}return result;};
 const ground=R.ground;
 R.ground=function(w){ground.call(this,w);if(!w.roomsDepth)return;const c=this.map.getContext('2d');
  for(const r of w.roomsDepth){const colors={crypt:'#363c45',library:'#343f39',forge:'#493d35',prison:'#303b43'},x=r.x-r.w/2,y=r.y-r.h/2;
   c.fillStyle=colors[r.kind];c.fillRect(x,y,r.w,r.h);c.strokeStyle='#93836566';c.lineWidth=3;c.strokeRect(x+12,y+12,r.w-24,r.h-24);
   for(let j=0;j<r.h;j+=48)for(let i=0;i<r.w;i+=62){c.strokeStyle=(i+j)%3?'#111b2460':'#9a98751d';c.lineWidth=2;c.strokeRect(x+i+2,y+j+2,58,44);}
   c.fillStyle=r.kind==='library'?'#63503766':r.kind==='prison'?'#13232c66':'#89795625';c.fillRect(r.x-72,y+16,144,r.h-32);
   c.fillStyle='#c0ad7f66';c.font='15px Georgia';c.textAlign='center';c.fillText({crypt:'Krypta Przysięgi',library:'Biblioteka Pieczęci',forge:'Wygasła Kuźnia',prison:'Cele Strażników'}[r.kind],r.x,y+70);
   for(let i=0;i<9;i++){const a=i*2.4,xx=r.x+Math.cos(a)*235,yy=r.y+Math.sin(a)*165;c.fillStyle='#9c998542';c.fillRect(xx,yy,5+i%3,2);}
  }
 };
 const wall=R.wall;
 R.wall=function(c,w){if(!w.depthKind)return wall.call(this,c,w);const x=w.x,y=w.y,p=this.g.player,kind=w.depthKind;c.save();if(p.x>x-15&&p.x<x+w.w+15&&p.y<y+w.h&&p.y>y-85)c.globalAlpha=.4;
  c.fillStyle='#07101977';c.fillRect(x+9,y+9,w.w,w.h+8);
  const box=(xx,yy,ww,hh,high,color)=>{c.fillStyle=tint(color,.65);c.fillRect(xx,yy-high,ww,hh+high);c.fillStyle=color;c.fillRect(xx,yy-high,ww,hh);c.strokeStyle='#aaa082';c.lineWidth=1.2;c.strokeRect(xx,yy-high,ww,hh+high);c.strokeStyle='#17242c';c.strokeRect(xx+4,yy-high+4,ww-8,Math.max(1,hh-8));};
  if(kind==='wall'){box(x,y,w.w,w.h,32,'#586466');c.strokeStyle='#222e34';for(let i=40;i<w.w;i+=44){c.beginPath();c.moveTo(x+i,y-32);c.lineTo(x+i,y+w.h);c.stroke();}}
  else if(kind==='tomb'){box(x,y,w.w,w.h,21,'#68716d');box(x+7,y-7,w.w-14,w.h-8,22,'#929382');c.strokeStyle='#bfb185';c.lineWidth=3;c.beginPath();c.moveTo(x+48,y-20);c.lineTo(x+48,y+11);c.moveTo(x+31,y-7);c.lineTo(x+65,y-7);c.stroke();}
  else if(kind==='shelf'){box(x,y,w.w,w.h,60,'#5b5142');for(let row=0;row<3;row++){c.fillStyle='#222827';c.fillRect(x+6,y-48+row*20,w.w-12,15);for(let i=0;i<11;i++){c.fillStyle=['#9a8060','#6b877a','#866274','#aa976f'][i%4];c.fillRect(x+10+i*7,y-46+row*20,5,12);}}}
  else if(kind==='anvil'){box(x,y,w.w,w.h,8,'#534841');box(x+28,y+2,40,28,33,'#676b68');box(x+13,y-18,71,30,30,'#92988c');c.fillStyle='#d8914b';for(let i=0;i<7;i++)c.fillRect(x+6+i*9,y+36,4,3);}
  else{box(x,y,w.w,w.h,0,'#566269');for(let i=0;i<=w.w;i+=12){c.strokeStyle='#9b9e88';c.lineWidth=2;c.beginPath();c.moveTo(x+i,y+w.h);c.lineTo(x+i,y-55);c.stroke();}c.strokeStyle='#b4a27b';c.strokeRect(x,y-55,w.w,w.h+55);c.beginPath();c.moveTo(x,y-25);c.lineTo(x+w.w,y-25);c.stroke();}
  c.restore();
 };
})(window.Aeren);

;

/* Module: js/art-biomes.js */
'use strict';
(function(A){const R=A.Renderer.prototype,U=A.U,TAU=Math.PI*2;
 const themes=A.WorldArt={themes:[
  {ground:'#26303a',dark:'#141f29',light:'#56625f',accent:'#cfb174',stone:'#6b766e'},
  {ground:'#3c657a',dark:'#183947',light:'#91bbcb',accent:'#8cd9e9',stone:'#83adb9'},
  {ground:'#273e36',dark:'#172b29',light:'#638066',accent:'#a7c486',stone:'#778775'},
  {ground:'#3e3030',dark:'#221f29',light:'#756052',accent:'#ed9e55',stone:'#766861'},
  {ground:'#333345',dark:'#1b202e',light:'#6d687f',accent:'#baabd6',stone:'#929494'},
  {ground:'#392831',dark:'#211b2a',light:'#70515d',accent:'#db7a8e',stone:'#846470'}
 ]}.themes;
 const line=(c,points,color,width=2)=>{c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.strokeStyle=color;c.lineWidth=width;c.lineCap='round';c.stroke();};
 const ellipse=(c,x,y,rx,ry,color)=>{c.fillStyle=color;c.beginPath();c.ellipse(x,y,rx,ry,0,0,TAU);c.fill();};
 const poly=(c,points,color,edge)=>{c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();c.fillStyle=color;c.fill();if(edge){c.strokeStyle=edge;c.lineWidth=1.2;c.stroke();}};
 const ground=R.ground;R.ground=function(w){if(w.index===0)return ground.call(this,w);this.cachedWorld=w;const cv=document.createElement('canvas');cv.width=w.width;cv.height=w.height;this.map=cv;const c=cv.getContext('2d'),t=themes[w.index],rng=U.rng(w.seed+w.index*1917);c.fillStyle=t.ground;c.fillRect(0,0,w.width,w.height);
  for(let i=0;i<600;i++){const x=rng()*w.width,y=rng()*w.height,r=25+rng()*140,g=c.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,(i%3?t.dark:t.light)+'40');g.addColorStop(1,t.ground+'00');c.fillStyle=g;c.fillRect(x-r,y-r,r*2,r*2);}
  // Four worn routes, instead of a spoke to every event crossing the whole arena.
  c.lineCap='round';for(const p of w.roomsDepth||[]){c.beginPath();c.moveTo(w.center.x,w.center.y);c.quadraticCurveTo(p.x,w.center.y,p.x,p.y);c.strokeStyle=t.dark+'35';c.lineWidth=126;c.stroke();c.strokeStyle=t.light+'18';c.lineWidth=110;c.stroke();}
  const tile=document.createElement('canvas');tile.width=tile.height=192;const tc=tile.getContext('2d');for(let i=0;i<1800;i++){tc.fillStyle=i%3?t.dark+'35':t.light+'28';tc.fillRect(rng()*192,rng()*192,1+rng()*3,1);}c.fillStyle=c.createPattern(tile,'repeat');c.fillRect(0,0,w.width,w.height);
  for(let i=0;i<3;i++){c.beginPath();c.ellipse(w.center.x,w.center.y-20,152+i*17,90+i*10,0,0,TAU);c.strokeStyle=t.accent+(i===1?'35':'18');c.lineWidth=i===1?3:1;c.stroke();}
  for(let i=0;i<1500;i++){const x=rng()*w.width,y=rng()*w.height,sz=4+rng()*24;
   if(w.index===1){line(c,[[x-sz,y],[x,y+sz*.4],[x+sz*.4,y-sz*.6],[x+sz,y-sz]],t.accent+'35',1);if(i%7===0)ellipse(c,x,y,sz*2,sz*.3,'#d4e7e611');}
   else if(w.index===2){if(i%4===0){c.strokeStyle='#9ead772d';c.lineWidth=1;c.beginPath();c.moveTo(x,y);c.quadraticCurveTo(x+sz*.4,y-sz,x+sz,y-sz*.7);c.stroke();}else ellipse(c,x,y,2+sz*.15,1+sz*.1,['#65815140','#a68b5930','#1b282d44'][i%3]);}
   else if(w.index===3||w.index===5){line(c,[[x,y],[x+sz,y+sz*.35],[x+sz*.8,y+sz]],t.dark+'a0',3);if(i%9===0)line(c,[[x,y],[x+sz,y+sz*.35],[x+sz*.8,y+sz]],t.accent+'80',1);}
   else{line(c,[[x,y],[x+sz,y+sz*.15]],i%5?'#161c3040':'#afb1aa38',i%5?2:3);if(i%5===0){ellipse(c,x,y,2,2,'#b9b5aa55');ellipse(c,x+sz,y+sz*.15,2,2,'#b9b5aa55');}}
  }
  for(const r of w.roomsDepth||[]){const x=r.x-r.w/2,y=r.y-r.h/2;c.fillStyle=t.dark+'99';c.fillRect(x,y,r.w,r.h);c.strokeStyle=t.accent+'55';c.lineWidth=3;c.strokeRect(x+10,y+10,r.w-20,r.h-20);for(let j=0;j<r.h;j+=60)for(let i=0;i<r.w;i+=74){c.strokeStyle=t.light+'22';c.lineWidth=1;c.strokeRect(x+i+3,y+j+3,69,55);}c.fillStyle=t.light+'18';c.fillRect(r.x-66,y+15,132,r.h-30);}
  c.strokeStyle=t.dark;c.lineWidth=45;c.strokeRect(22,22,w.width-44,w.height-44);c.strokeStyle=t.accent+'77';c.lineWidth=2;c.strokeRect(45,45,w.width-90,w.height-90);
 };
 const decor=R.decor;R.decor=function(c,d){if(this.g.world.index===0)return decor.call(this,c,d);if(!d.solid)return;const index=this.g.world.index,t=themes[index],x=d.x,y=d.y,p=this.g.player,variant=Math.abs(Math.floor(x+y))%3;c.save();if(Math.abs(p.x-x)<55&&p.y<y&&p.y>y-105)c.globalAlpha=.35;ellipse(c,x+7,y+5,27,10,'#07121b65');
  if(index===1){for(const [dx,h]of [[-13,48],[0,91],[15,60]]){poly(c,[[x+dx-9,y],[x+dx-8,y-h*.8],[x+dx,y-h],[x+dx+10,y-h*.7],[x+dx+8,y]],t.stone,t.accent);poly(c,[[x+dx,y-h],[x+dx,y],[x+dx-9,y],[x+dx-8,y-h*.8]],'#bde6e188');}ellipse(c,x,y,28,8,'#bed2cf33');}
  else if(index===2){line(c,[[x-17,y+4],[x-4,y-13],[x+2,y-64]],'#483f35',14);line(c,[[x+18,y+5],[x+3,y-10],[x+2,y-64]],'#8d806055',4);if(variant!==2){for(let i=0;i<5;i++){const xx=x+Math.cos(i*1.3)*22,yy=y-68+Math.sin(i*1.3)*13;const g=c.createRadialGradient(xx-5,yy-8,0,xx,yy,35);g.addColorStop(0,'#71835b');g.addColorStop(.7,'#405d43');g.addColorStop(1,'#283f37');ellipse(c,xx,yy,32,24,g);}}else{for(const n of [-1,1])line(c,[[x,y-30],[x+n*22,y-51],[x+n*29,y-48]],'#68694b',5);ellipse(c,x+12,y-13,9,5,'#b0996d');}}
  else if(index===3){poly(c,[[x-24,y],[x-18,y-31],[x-8,y-72],[x+5,y-79],[x+21,y-34],[x+24,y]],t.dark,t.stone);poly(c,[[x-8,y-72],[x+3,y-25],[x+21,y-34],[x+5,y-79]],'#6d5a51');line(c,[[x-3,y-63],[x+4,y-42],[x-4,y-22]],t.accent,2);}
  else if(index===4){if(variant===0){poly(c,[[x-19,y],[x-16,y-53],[x,y-71],[x+19,y-50],[x+21,y]],'#737982','#b3b4b4');line(c,[[x,y-53],[x,y-14]],'#35394c',3);line(c,[[x-9,y-38],[x+9,y-38]],'#35394c',3);}else{line(c,[[x-18,y],[x-5,y-19],[x+1,y-76]],'#777379',11);for(const n of [-1,1])line(c,[[x,y-40],[x+n*21,y-59],[x+n*29,y-55]],'#969084',5);}}
  else{poly(c,[[x-23,y],[x-26,y-42],[x-9,y-83],[x-11,y-42],[x+3,y-22],[x+15,y-49],[x+12,y-93],[x+31,y-45],[x+22,y]],'#41303b','#947d7c');ellipse(c,x+1,y-33,7,11,'#b6637c');line(c,[[x+1,y-42],[x+1,y-24]],'#eeb991',2);}
  c.restore();
 };
 const monument=R.monument;R.monument=function(c){if(this.g.world.index===0)return monument.call(this,c);const w=this.g.world,t=themes[w.index],x=w.center.x,y=w.center.y-80;ellipse(c,x+10,y+10,47,15,'#07151e77');poly(c,[[x-35,y],[x-31,y-21],[x,y-34],[x+33,y-21],[x+38,y],[x,y+13]],t.stone,t.accent);const g=c.createLinearGradient(x-20,y,x+25,y);g.addColorStop(0,t.dark);g.addColorStop(.5,t.accent);g.addColorStop(1,t.light);poly(c,[[x,y-104],[x+23,y-48],[x+13,y-18],[x-14,y-18],[x-22,y-48]],g,t.accent);};
 // Task seals are sculpted floor medallions. Text sits above, never through the rune.
 const event=R.event;R.event=function(c,e){if(!e.taskMarker3)return event.call(this,c,e);if(e.done)return;const t=themes[this.g.world.index],r=e.defend?120:38,near=U.dist(this.g.player,e)<r;c.save();ellipse(c,e.x+3,e.y+5,r*.84,r*.38,'#07152288');ellipse(c,e.x,e.y,r*.78,r*.34,t.dark);c.strokeStyle=t.accent;c.lineWidth=2.4;c.beginPath();c.ellipse(e.x,e.y,r*.78,r*.34,0,0,TAU);c.stroke();c.lineWidth=1;c.beginPath();c.ellipse(e.x,e.y,r*.6,r*.25,0,0,TAU);c.stroke();
  for(let i=0;i<8;i++){const a=i*TAU/8;line(c,[[e.x+Math.cos(a)*r*.66,e.y+Math.sin(a)*r*.28],[e.x+Math.cos(a)*r*.73,e.y+Math.sin(a)*r*.31]],t.light,2);}
  line(c,[[e.x,e.y-18],[e.x-11,e.y],[e.x,e.y+13],[e.x+11,e.y],[e.x,e.y-18]],t.accent,2);line(c,[[e.x,e.y-18],[e.x,e.y+13]],t.light,1.5);
  c.strokeStyle=near?t.light:t.accent+'66';c.lineWidth=1.5;c.beginPath();c.arc(e.x,e.y,r,0,TAU);c.stroke();
  if(near||e.defend){c.font='12px Georgia';c.textAlign='center';c.strokeStyle='#071523';c.lineWidth=4;const label=e.defend?'Broń runy':'Pieczęć';c.strokeText(label,e.x,e.y-r-10);c.fillStyle=t.light;c.fillText(label,e.x,e.y-r-10);}c.restore();};
})(window.Aeren);

;

/* Module: js/unique-icons.js */
'use strict';
(function(A){const D=A.Data,P=A.UI.prototype,C=A.Catalog;
 const glyphs={
 items:{
 power:'M50 16L77 32V65L50 86L23 65V32ZM36 40H64L57 52L63 65H37L43 52ZM50 22V31',
 tempo:'M50 18A32 32 0 1 0 50 82A32 32 0 1 0 50 18M50 34V50L65 60M18 18L27 27M82 18L73 27M18 82L27 73M82 82L73 73',
 shell:'M18 70Q14 21 50 16Q86 21 82 70L50 85ZM50 19V81M34 24L28 65L48 79M66 24L72 65L52 79M22 53H78',
 heart:'M50 35Q19 5 19 42Q17 62 50 84Q83 62 81 42Q81 5 50 35ZM50 76V43M49 57L32 43M50 67L68 49',
 focus:'M30 16H70V29L57 49L70 72V85H30V72L43 49L30 29ZM37 25H63L50 42ZM50 59L63 77H37ZM18 38L12 50L18 62M82 38L88 50L82 62',
 eye:'M16 53Q50 19 84 53L68 72H32ZM50 39L61 53L50 66L39 53ZM22 24L32 35M78 24L68 35M50 13V29',
 step:'M20 79Q70 96 76 55Q78 30 54 36Q28 43 35 65Q41 78 53 61M15 27Q50 48 83 18M16 38Q52 59 87 30',
 reach:'M50 21A29 29 0 1 0 50 79A29 29 0 1 0 50 21M14 50H86M50 14V86M22 65Q50 42 78 65M22 35Q50 58 78 35',
 blood:'M29 18L68 23L75 40L54 76L32 87L42 59ZM39 27L59 31L58 46L45 59M74 65Q61 82 75 88Q90 83 74 65Z',
 star:'M50 12L61 39L88 50L61 61L50 88L39 61L12 50L39 39ZM50 29L58 50L50 71L42 50ZM27 27L34 34M73 73L66 66'
 },
 relics:{
 glass:'M50 31Q18 8 22 43L50 83L78 43Q82 8 50 31ZM49 28L43 44L58 53L49 69L55 80',
 anchor:'M50 14A8 8 0 1 0 50 30A8 8 0 1 0 50 14M50 30V84M31 42H69M15 60L20 78L50 86L80 78L85 60M15 60L33 64M85 60L67 64',
 feather:'M24 85L69 18Q91 40 62 66L30 77ZM38 65L54 64M46 52L65 52M55 40L72 38',
 fan:'M50 86L13 41Q49 4 87 41ZM50 86L31 27M50 86V20M50 86L69 27M25 48Q49 29 75 48',
 hourglass:'M19 23L68 15L73 30L59 52L80 71L83 83L34 90L31 76L43 56L22 37ZM30 30L64 25L50 47ZM52 66L42 81L71 77',
 fang:'M24 21L51 34L78 21L70 59L53 84L48 62L38 78L30 56ZM35 37L39 59M65 37L58 61',
 lens:'M44 16A28 28 0 1 0 44 72A28 28 0 1 0 44 16M64 66L86 88L77 92L57 72M31 34Q41 23 52 29',
 seed:'M49 86Q20 65 35 40Q48 25 58 44Q77 66 49 86ZM48 52V83M48 37Q23 36 24 17Q49 15 48 37ZM50 31Q52 11 77 17Q74 39 50 31Z',
 bell:'M26 67Q35 61 34 39Q33 20 50 20Q67 20 66 39Q65 61 74 67ZM20 73H80M43 80Q50 91 57 80M46 12H54',
 coin:'M50 14A36 36 0 1 0 50 86A36 36 0 1 0 50 14M50 23A27 27 0 1 0 50 77A27 27 0 1 0 50 23M37 39H64L43 64H66M50 30V71',
 mask:'M20 21Q50 36 80 21L73 68L50 87L27 68ZM30 44L43 48M57 48L70 44M39 68Q50 58 61 68M50 38V60',
 scroll:'M29 20H75Q88 20 82 36H69V76Q67 87 53 83H21Q13 75 21 68H31V29Q28 18 18 20Q8 28 20 35H28M41 38H59M41 49H59M41 60H53',
 boot:'M30 17H59L55 53L80 62Q92 72 76 84H20V69L31 48ZM33 31H55M30 43H54M20 75H83',
 mirror:'M50 12Q82 12 81 44Q81 70 55 74V88H45V74Q19 70 19 44Q18 12 50 12ZM46 21L39 43L58 51L45 66M32 26L26 39',
 magnetite:'M17 65L21 26H41V59Q50 76 59 59V26H79L83 65Q53 101 17 65ZM21 41H41M59 41H79M44 16L50 9L57 16',
 quiver:'M24 35L59 43L49 87L18 79ZM34 38L43 15M48 40L63 17M30 24L43 15L48 30M52 27L63 17L69 33M60 56L84 27',
 star:'M50 13L58 35L85 39L66 58L70 86L49 72L25 85L31 61L12 41L39 35M51 23L42 45L59 55L47 78',
 oath:'M33 65L17 40L30 30L49 50L71 27L84 39L62 66L49 59ZM25 72L39 84L54 72M65 72L75 82M43 17H57',
 thorn:'M15 35L32 49L41 24L52 47L71 20L75 48L88 35L77 77H27ZM28 65H77M35 74L41 87M64 74L71 88',
 moon:'M64 14Q18 17 22 55Q28 87 65 77Q44 67 44 46Q43 26 64 14ZM73 52Q56 75 73 84Q89 76 73 52Z'
 },
 keepsakes:{compass:'M50 15A35 35 0 1 0 50 85A35 35 0 1 0 50 15M33 69L42 41L69 29L59 58ZM50 7V20M80 50H94',seal:'M50 16L76 28V58L50 85L24 58V28ZM33 49H65L57 58H42ZM40 29L58 33L55 41L37 38M48 40V49',vial:'M37 15H63V26H58V42Q85 74 65 87H35Q15 74 42 42V26H37ZM32 67H68M50 48V79M43 61H57',mirror:'M50 16A28 32 0 1 0 50 80A28 32 0 1 0 50 16M38 87H63M51 22L41 40L61 48L45 70M29 29L34 37',seed:'M50 88V51Q19 70 20 40Q39 30 50 51Q59 24 83 34Q83 62 50 60M50 27V14M38 22L29 14M64 21L73 13',hunter:'M20 21L36 40L50 26L64 40L80 21L73 65L50 86L27 65ZM34 52L42 55M58 55L66 52M44 68H56M50 8V20',map:'M15 27L36 18L62 29L84 19V73L62 85L36 73L15 82ZM36 18V73M62 29V85M22 48L29 54L45 38L55 52M68 59L78 69M78 59L68 69',phoenix:'M50 80Q11 66 14 26L34 43L32 20L51 44L69 17L66 43L87 26Q91 66 50 80ZM50 43L44 60L50 72L57 59M41 79L33 91M59 79L67 91'},
 curses:{bell:'M23 70L33 58V37Q32 19 50 21Q70 17 68 39L67 56L79 70ZM41 29L53 42L45 59L60 68M39 80L50 90L61 80',hunger:'M18 29L35 44L50 19L65 44L82 29L73 69H27ZM32 78L42 87L50 78L58 87L68 78M43 56H57',mirror:'M50 14L78 26L83 63L50 85L17 63L22 26ZM50 14L40 38L61 53L46 79M28 35L38 39M64 64L76 68',spark:'M55 12L26 51H44L36 88L79 40H58ZM19 21L29 31M77 16L70 28M82 76L72 68',silence:'M50 17A33 33 0 1 0 50 83A33 33 0 1 0 50 17M29 70L73 27M38 37H64M38 37V66M38 51H57',one:'M50 10L59 26V62H70V70H55V88H45V70H30V62H41V26ZM24 26L17 42M76 26L83 42'}
 };
 const X=A.UniqueIcons={glyphs,entries:[]},cache=new Map();
 const statGlyph={maxHp:'vitality',damage:'power',cdr:'cooldown',armor:'armor',crit:'crit',speed:'speed',xp:'wisdom',luck:'luck',area:'area',recovery:'siphon',weaponPower:'arrows',ultPower:'nova',rate:'haste',reflect:'guard',steal:'drain'};
 const badge='M18 78L27 85L36 78M41 78L50 85L59 78M64 78L73 85L82 78';
 glyphs.mastery={};for(const d of D.mastery){const shape=C.paths[d.hero?'secondary:'+d.hero:statGlyph[d.stat]]||C.paths.nova,mark=d.stat==='secondaryPower'?'M12 85L22 69L33 85ZM22 69V91':d.stat==='secondaryHaste'?'M22 69A11 11 0 1 0 22 91A11 11 0 1 0 22 69M22 74V81L29 84':d.stat==='secondaryDuration'?'M11 70H33L15 90H35M8 80H17':badge;glyphs.mastery[d.id]=shape+' '+mark;X.entries.push({group:'mastery',...d});}
 glyphs.modifiers={};const modBase={haste:'speed',glass:'vitality',elites:'crit',storm:'thunder',hunger:'drain',magic:'vortex',horde:'wolves',colossi:'armor',poison:'venom',forge:'meteor'};for(const d of A.Slice.modifiers){glyphs.modifiers[d.id]=C.paths[modBase[d.id]]+' M9 18V9H24M76 9H91V18M9 82V91H24M76 91H91V82';X.entries.push({group:'modifiers',...d});}
 glyphs.mutations={};for(const [weapon,choices]of Object.entries(A.Slice.mutations))for(const [id,name]of choices){const key=weapon+':'+id;glyphs.mutations[key]=C.paths[weapon]+' '+({roots:'M15 85L25 75L35 85M25 75V62',return:'M15 78Q35 62 45 80L35 87',oil:'M25 62Q6 87 25 91Q44 87 25 62Z',nova:'M25 64V91M12 78H38M16 69L34 87M34 69L16 87',fan:'M13 88L25 66L37 88ZM25 66V88',arc:'M31 64L15 80H25L19 93L37 76H28',quake:'M10 87L20 77L26 84L36 73L44 86',stun:'M12 86Q18 80 18 72Q25 62 32 72Q32 80 38 86ZM23 90H27',leech:'M15 74L25 64L35 74L25 91Z'}[id]||'');X.entries.push({group:'mutations',id:key,name});}
 for(const [group,list]of Object.entries({items:D.itemTemplates,relics:D.relics,keepsakes:Object.entries(A.Endgame.keepsakes).map(([id,x])=>({id,...x})),curses:Object.entries(A.Endgame.curses).map(([id,x])=>({id,...x})),synergies:D.synergies}))for(const d of list)X.entries.push({group,...d});
 X.icon=function(group,id,rarity=0){const key=group+':'+id+':'+rarity;if(cache.has(key))return cache.get(key);const e=X.entries.find(x=>x.group===group&&x.id===id);if(!e)return '';const color=group==='curses'?'#e697b8':group==='keepsakes'?'#a4e0d5':group==='relics'?'#d6b4f2':group==='synergies'?'#8ae2bf':'#ebcc89',frame=D.rarity[rarity]?.color||'#c9d7c1';
  const drawing=group==='synergies'?`<g transform="translate(5 8) scale(.53)"><path d="${C.paths[e.a]}"/></g><g transform="translate(43 42) scale(.53)"><path d="${C.paths[e.b]}"/></g><path d="M29 68Q16 67 19 54M71 30Q86 31 83 43M43 53L58 39"/>`:`<path d="${glyphs[group][id]}"/>`;
  const svg=`<svg class="icon25" data-unique-icon="${group}:${id}" viewBox="0 0 100 100" role="img" aria-label="${e.name}"><path d="M14 3H86L97 14V86L86 97H14L3 86V14Z" fill="#091522" stroke="${frame}" stroke-width="3"/><path d="M17 9H83L91 17V83L83 91H17L9 83V17Z" fill="${color}" fill-opacity=".12" stroke="${color}" stroke-opacity=".45"/><g transform="translate(6 6) scale(.88)" fill="${color}" fill-opacity=".1" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${drawing}</g></svg>`;cache.set(key,svg);return svg;
 };
 const decorate=P.decorateIcons25;P.decorateIcons25=function(){decorate.call(this);for(const card of this.overlay.querySelectorAll('article,button.card,.card,.mastery-node')){const title=card.querySelector('h2,h3')?.textContent?.trim();if(!title)continue;const e=X.entries.find(e=>title===e.name||title===A.Locale?.text(e.name));if(e){let symbol=card.querySelector('.symbol');if(!symbol){symbol=document.createElement('span');symbol.className='symbol spellArt24';card.prepend(symbol);}symbol.innerHTML=X.icon(e.group,e.id,e.rarity||0);}else{const hero=D.heroes.find(h=>h.name===title);const symbol=card.querySelector('.symbol');if(hero&&symbol)symbol.innerHTML=C.icon('ultimate',hero.id);}}};
 const gear=P.gear;P.gear=function(choices){const v=gear.call(this,choices);this.overlay.querySelectorAll('[data-action="gear"]').forEach((card,i)=>{const x=choices[i];if(x?.kind==='item'){const icon=card.querySelector('.symbol');if(icon)icon.innerHTML=X.icon('items',x.id,x.rarity);}});return v;};
})(window.Aeren);

;

/* Module: js/audio-polish.js */
'use strict';
(function(A){const G=A.Game.prototype,R=A.Renderer.prototype,S=A.Save,TAU=Math.PI*2;
 const recipes={
  fire:{pitch:95,end:42,noise:950,tail:.5,wave:'triangle'},ice:{pitch:1700,end:870,noise:5200,tail:.48,wave:'sine'},nature:{pitch:530,end:265,noise:2200,tail:.32,wave:'triangle'},lightning:{pitch:790,end:110,noise:3700,tail:.23,wave:'sawtooth'},stone:{pitch:105,end:34,noise:620,tail:.4,wave:'sine'},arcane:{pitch:280,end:720,noise:2400,tail:.65,wave:'sine'},blood:{pitch:175,end:78,noise:850,tail:.37,wave:'triangle'},water:{pitch:680,end:230,noise:1500,tail:.42,wave:'sine'},poison:{pitch:210,end:310,noise:1700,tail:.42,wave:'sine'},wind:{pitch:480,end:90,noise:3100,tail:.28,wave:'sine'},oil:{pitch:125,end:65,noise:950,tail:.37,wave:'triangle'}
 };
 const states=new WeakMap(),F=A.SoundFX={recipes,played:0,suppressed:0,scope:false};
 F.state=function(ctx,destination){let st=states.get(ctx);if(st)return st;const compressor=ctx.createDynamicsCompressor();compressor.threshold.value=-18;compressor.ratio.value=5;compressor.connect(destination);const dry=ctx.createGain();dry.gain.value=.85;dry.connect(compressor);const wet=ctx.createGain();wet.gain.value=.09;const reverb=ctx.createConvolver(),impulse=ctx.createBuffer(2,Math.floor(ctx.sampleRate*.65),ctx.sampleRate),rng=A.U.rng(8731);
  for(let k=0;k<2;k++){const data=impulse.getChannelData(k);for(let i=0;i<data.length;i++)data[i]=(rng()*2-1)*Math.pow(1-i/data.length,3);}
  reverb.buffer=impulse;reverb.connect(wet);wet.connect(compressor);
  const noise=ctx.createBuffer(1,ctx.sampleRate,ctx.sampleRate),data=noise.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=rng()*2-1;
  st={dry,reverb,noise,voices:0,peakVoices:0,last:new Map(),groups:new Set()};states.set(ctx,st);return st;
 };
 F.emit=function(ctx,destination,element='arcane',strength=1,key=element,volume=.12){const st=F.state(ctx,destination),now=ctx.currentTime,priority=/^(skill:|F:|PPM:)/.test(key),needed=strength>1||['ice','arcane','nature'].includes(element)?3:2;
  if(now-(st.last.get(key)??-100)<(key==='auto:orbit'?.3:key.startsWith('auto:')?.18:.075)){F.suppressed++;return false;}
  // Manual skills replace an old tail when necessary, rather than disappearing.
  if(priority)for(const group of [...st.groups].sort((a,b)=>a.priority-b.priority)){if(st.voices+needed<=18)break;group.stop();}
  if(st.voices+needed>(priority?18:12)){F.suppressed++;return false;}st.last.set(key,now);const r=recipes[element]||recipes.arcane,duration=r.tail*Math.min(1.5,strength),gain=volume*Math.min(1.3,strength),group={priority,stops:[],stop(){for(const stop of this.stops)stop();}};st.groups.add(group);let remaining=needed;
  const layer=(source,filter,amount,tail)=>{const env=ctx.createGain();env.gain.setValueAtTime(.0001,now);env.gain.exponentialRampToValueAtTime(Math.max(.001,gain*amount),now+.008);env.gain.exponentialRampToValueAtTime(.0001,now+tail);source.connect(filter);filter.connect(env);env.connect(st.dry);env.connect(st.reverb);source.start(now);source.stop(now+tail+.025);st.voices++;st.peakVoices=Math.max(st.peakVoices,st.voices);let ended=false;const cleanup=()=>{if(ended)return;ended=true;source.disconnect();filter.disconnect();env.disconnect();st.voices--;if(--remaining===0)st.groups.delete(group);};source.onended=cleanup;group.stops.push(()=>{source.stop();cleanup();});};
  const tone=ctx.createOscillator(),lp=ctx.createBiquadFilter();tone.type=r.wave;tone.frequency.setValueAtTime(r.pitch,now);tone.frequency.exponentialRampToValueAtTime(r.end,now+duration);lp.type='lowpass';lp.frequency.value=element==='ice'?4200:2200;layer(tone,lp,.55,duration);
  const noise=ctx.createBufferSource(),bp=ctx.createBiquadFilter();noise.buffer=st.noise;bp.type='bandpass';bp.frequency.setValueAtTime(r.noise,now);bp.frequency.exponentialRampToValueAtTime(Math.max(80,r.noise*.35),now+duration);bp.Q.value=element==='ice'?2:.75;layer(noise,bp,.28,duration*.7);
  if(strength>1||['ice','arcane','nature'].includes(element)){const overtone=ctx.createOscillator(),filter=ctx.createBiquadFilter();overtone.type='sine';overtone.frequency.setValueAtTime(r.pitch*1.5,now);overtone.frequency.exponentialRampToValueAtTime(r.end*1.25,now+duration);filter.type='lowpass';filter.frequency.value=4500;layer(overtone,filter,.2,duration);}
  F.played++;return true;
 };
 F.play=function(element,strength=1,key=element){const audio=A.Audio,s=S.data.settings;if(!audio.ctx||audio.ctx.state==='closed'||s.master<=0||s.sfx<=0)return false;return F.emit(audio.ctx,audio.master,element,strength,key,.38*s.master*s.sfx);};
 F.weapons={bow:'nature',staff:'fire',iceblade:'ice',hammer:'stone',daggers:'wind',stormrod:'lightning',scythe:'blood',orb:'arcane',crossbow:'stone',cinder:'fire',vines:'nature',void:'arcane',spear:'wind',thornbow:'nature',runicHammer:'stone'};
 F.weapon=function(w){return F.play(F.weapons[w.id]||'stone',.8,'weapon:'+w.id);};
 F.skill=function(id,strength=.8){const element=A.Catalog.get('skills',id)?.color||({worldtree:'nature',crown:'lightning',chronos:'ice'})[id]||'arcane';return F.play(element,strength,'auto:'+id);};
 const hit=G.hit;G.hit=function(e,n,element,o={}){const before=e.hp,source=o.source3||this.damageSource3,result=hit.call(this,e,n,element,o);if(e.hp<before&&source==='skill:orbit')F.skill('orbit',.6);return result;};
 const oldPlay=A.Audio.play;A.Audio.play=function(id){if(F.scope)return;const map={attack:[A.Catalog.get('weapons',A.game?.weapons?.[0]?.id)?.color||'nature',.45],hit:['stone',.65],crit:['ice',.65],death:['arcane',.65],level:['nature',1.15],dash:['wind',.7],chest:['ice',.9],boss:['stone',1.8],click:['ice',.23]};if(map[id])F.play(map[id][0],map[id][1],id);else oldPlay.call(this,id);};
 const casts=[];A.CastVisuals=casts;
 for(const [method,slot]of [['cast','skill'],['castUltimate','F'],['castSecondary','PPM']]){const base=G[method];G[method]=function(...args){const p=this.player,id=args[0],before=slot==='skill'?p.cooldowns[id]||0:slot==='F'?p.ultCd||0:p.secondaryCd||0,prior=F.scope;F.scope=true;let result;try{result=base.apply(this,args);}finally{F.scope=prior;}const after=slot==='skill'?p.cooldowns[id]||0:slot==='F'?p.ultCd||0:p.secondaryCd||0;if(after>before){const entry=A.Catalog.get(slot==='skill'?'skills':slot==='F'?'ultimate':'secondary',slot==='skill'?id:p.hero.id),element=entry?.color||'arcane';F.play(element,slot==='F'?1.7:1,slot+':'+(id||p.hero.id));casts.push({x:p.x,y:p.y-24,a:p.attackAim??p.aim??0,element,start:this.time,life:slot==='F'?1.1:.6,power:slot==='F'?1.4:1,game:this});if(casts.length>18)casts.shift();}return result;};}
 const start=G.start;G.start=function(...args){casts.length=0;return start.apply(this,args);};
 const render=R.render;R.render=function(dt){render.call(this,dt);const g=this.g,c=g.ctx,s=g.scale*(this.zoom25||1),alpha=A.Endgame.effectAlpha3();c.save();c.setTransform(s,0,0,s,this.ox*s,this.oy*s);
  for(let i=casts.length-1;i>=0;i--){const v=casts[i],elapsed=g.time-v.start;if(v.game!==g||elapsed>v.life){casts.splice(i,1);continue;}const t=Math.max(0,elapsed/v.life),r=(20+t*68)*v.power,color=A.Presentation.colors[v.element]||'#c7a5dc';c.save();c.translate(v.x,v.y);c.rotate(v.a);c.globalAlpha=(1-t)*alpha*.65;c.strokeStyle=color;c.fillStyle=color;c.lineWidth=2;
   if(['fire','wind','water'].includes(v.element)){for(let k=-1;k<=1;k++){c.beginPath();c.moveTo(0,k*8);c.bezierCurveTo(r*.3,k*r*.5,r*.7,k*r*.65,r,k*15);c.stroke();}}
   else if(v.element==='ice'){for(let j=0;j<7;j++){const a=j*TAU/7,x=Math.cos(a)*r,y=Math.sin(a)*r;c.beginPath();c.moveTo(x,y);c.lineTo(x-Math.cos(a-.2)*16,y-Math.sin(a-.2)*16);c.lineTo(x-Math.cos(a+.2)*16,y-Math.sin(a+.2)*16);c.closePath();c.fill();}}
   else if(v.element==='nature'||v.element==='poison'){for(const side of [-1,1]){c.beginPath();c.moveTo(0,0);c.bezierCurveTo(r*.3,side*r*.4,r*.6,-side*r*.1,r,side*r*.15);c.stroke();for(let j=1;j<=3;j++){c.beginPath();c.ellipse(j*r/4,side*r*.13,7,3,side*.5,0,TAU);c.fill();}}}
   else if(v.element==='lightning'){c.beginPath();c.moveTo(0,0);for(let j=1;j<7;j++)c.lineTo(j*r/6,Math.sin(j*8)*13*(1-t));c.stroke();}
   else{for(let j=0;j<3;j++){c.beginPath();c.arc(0,0,r*(.55+j*.15),t*2+j*2,t*2+j*2+1.2);c.stroke();}}
   c.restore();
  }
  // Preserve the threat outline above the new, deliberately faint cast accents.
  c.globalAlpha=1;c.strokeStyle=S.data.settings.altThreat3?'#ffed80':'#ffb182';c.lineWidth=1.5;for(const z of g.zones.active)if(z.enemy){c.beginPath();c.arc(z.x,z.y,z.r,0,TAU);c.stroke();}c.restore();
 };
})(window.Aeren);

;

/* Module: js/skill-sound.js */
'use strict';
(function(A){
 const F=A.SoundFX,G=A.Game.prototype;
 // Authored gestures: instrument, onset, duration, pitch start/end, level, pan.
 // A sound is rendered once and reused; combat never constructs oscillator stacks.
 const cues=A.SkillSounds={skills:{
  fire:[['wind',0,.18,620,140,.7],['pulse',.05,.26,120,48,.7],['crack',.1,.16,1700,500,.3]],
  ice:[['glass',0,.32,2100,1650,.55,-.5],['glass',.07,.28,3100,2400,.4,.5],['wind',0,.18,4300,1700,.3]],
  lightning:[['zap',0,.08,920,130,.8],['crack',.025,.08,6200,800,.6],['zap',.12,.1,1450,210,.4]],
  poison:[['liquid',0,.16,360,130,.65,-.4],['liquid',.09,.19,270,510,.55,.4],['whisper',.14,.25,900,460,.5]],
  orbit:[['metal',0,.27,740,690,.6],['wind',.03,.24,3500,1200,.55,.5]],
  familiar:[['howl',0,.38,440,610,.45],['pluck',.05,.25,1050,850,.55],['whisper',.12,.28,1800,2700,.3]],
  nova:[['reverse',0,.17,250,740,.6],['pulse',.15,.4,95,34,.7],['bell',.17,.45,440,410,.4]],
  arrows:[['pluck',0,.15,540,190,.6,-.6],['pluck',.035,.15,660,240,.55,0],['pluck',.075,.15,780,290,.5,.6],['wind',.04,.22,3000,700,.6]],
  oil:[['liquid',0,.3,170,62,.8],['rumble',.04,.33,240,100,.5],['liquid',.22,.12,110,180,.35]],
  wet:[['liquid',0,.2,1100,510,.6,-.5],['liquid',.12,.22,730,1430,.5,.5],['bell',.17,.35,1570,1200,.25]],
  meteor:[['reverse',0,.3,120,1400,.7],['pulse',.27,.65,150,29,.95],['crack',.3,.23,3000,320,.7],['rumble',.36,.65,170,55,.6]],
  blizzard:[['wind',0,.85,3200,900,.75],['glass',.12,.52,2700,1600,.45,-.7],['glass',.34,.5,3700,2400,.35,.7],['whisper',.2,.65,1700,800,.4]],
  thunder:[['crack',0,.1,5200,900,.8],['zap',.06,.18,1300,70,.65,-.5],['zap',.19,.2,1800,95,.55,.5],['rumble',.12,.8,160,38,.9]],
  venom:[['liquid',0,.23,200,480,.5,-.6],['liquid',.17,.3,440,120,.5,.6],['whisper',.1,.8,660,1100,.7],['rumble',.21,.5,100,70,.35]],
  roots:[['wood',0,.25,180,130,.8,-.4],['wood',.13,.3,260,170,.65,.4],['crack',.18,.22,1100,300,.4],['wind',.1,.55,750,1800,.55]],
  guard:[['stone',0,.28,210,80,.85],['metal',.06,.65,330,310,.55],['bell',.15,.6,660,620,.35]],
  blink:[['reverse',0,.19,1300,140,.8],['crack',.18,.065,3900,1200,.75],['whisper',.22,.38,350,1100,.5]],
  vortex:[['wind',0,.95,450,2900,.85,-.5],['howl',.12,.8,115,290,.6,.5],['reverse',.44,.42,2100,500,.5]],
  wolves:[['howl',0,.9,210,490,.75,-.55],['howl',.2,.85,285,590,.5,.55],['wind',.1,.5,700,1500,.35]],
  drain:[['pulse',0,.15,100,55,.6],['pulse',.17,.18,92,42,.7],['reverse',.08,.65,180,640,.65],['liquid',.32,.3,370,190,.45]],
  power:[['metal',0,.28,310,280,.65],['pulse',.03,.24,150,75,.55]],
  haste:[['wood',0,.1,500,380,.6],['wood',.07,.1,620,460,.5],['wood',.13,.12,780,540,.45]],
  vitality:[['pulse',0,.22,110,65,.65],['choir',.08,.6,260,390,.5]],
  armor:[['wood',0,.18,140,110,.65],['stone',.12,.3,220,90,.6]],
  speed:[['wind',0,.24,1300,3000,.65],['pluck',.06,.23,700,1050,.35]],
  crit:[['metal',0,.18,2600,2500,.5],['bell',.08,.4,1250,1220,.45]],
  cooldown:[['wood',0,.08,1200,1000,.5],['wood',.12,.08,1000,800,.5],['reverse',.2,.4,300,1000,.45]],
  area:[['choir',0,.55,220,440,.6,-.5],['bell',.15,.55,880,660,.4,.5]],
  multi:[['pluck',0,.22,500,480,.65],['pluck',.1,.22,750,700,.55,-.6],['pluck',.14,.22,1000,950,.45,.6]],
  siphon:[['liquid',0,.3,250,100,.65],['howl',.12,.4,160,300,.4]],
  luck:[['bell',0,.3,1320,1280,.45],['metal',.13,.32,1980,1900,.4]],
  wisdom:[['whisper',0,.4,1600,700,.6],['choir',.1,.6,320,480,.4]],
  magnet:[['reverse',0,.5,90,850,.65],['metal',.4,.2,470,410,.4]],
  velocity:[['pluck',0,.12,360,210,.6],['wind',.02,.17,900,4200,.65]],
  dodge:[['whisper',0,.3,3300,800,.65,-.7],['whisper',.1,.3,800,3300,.45,.7]],
  phoenix:[['reverse',0,.25,90,440,.6],['choir',.22,1.05,330,660,.65],['crack',.26,.3,2200,650,.45],['bell',.4,.85,1320,1100,.35]],
  supernova:[['pulse',0,.45,240,35,.8],['zap',.05,.17,740,90,.5],['rumble',.1,.5,280,75,.6]],
  prism:[['glass',0,.4,880,920,.45,-.6],['bell',.14,.5,1320,1360,.4],['glass',.28,.5,1760,1800,.35,.6]],
  chronos:[['wood',0,.055,1700,1550,.55],['wood',.2,.07,1200,1000,.5],['wood',.48,.1,600,330,.45],['reverse',.35,.6,800,70,.5]],
  titan:[['stone',0,.4,110,45,.8],['metal',.2,.65,170,130,.6],['rumble',.3,.6,95,35,.5]],
  reaper:[['wind',0,.16,2700,400,.65],['metal',.08,.3,1300,950,.55],['whisper',.19,.32,570,260,.4]],
  worldtree:[['wood',0,.27,220,160,.6],['choir',.12,.85,196,294,.6],['bell',.3,.7,784,740,.35]],
  infinity:[['bell',0,.35,550,550,.5],['bell',.18,.35,825,825,.4],['bell',.36,.4,550,550,.3]],
  comet:[['wind',0,.22,3500,400,.8],['pulse',.2,.38,180,40,.85],['crack',.22,.2,2100,550,.45]],
  crown:[['metal',0,.4,970,940,.4],['zap',.05,.13,760,120,.6,-.6],['zap',.2,.13,1050,160,.55,.6],['zap',.35,.16,1400,210,.5]]
 },secondary:{
  ilya:[['wood',0,.1,440,260,.6],['pluck',.04,.28,620,170,.8],['wind',.06,.43,4300,600,.75],['bell',.14,.32,1350,1000,.25]],
  sol:[['rumble',0,.6,170,75,.8],['wind',.04,.65,750,1900,.85],['crack',.15,.3,2400,800,.45]],
  niva:[['reverse',0,.13,2800,700,.6],['glass',.08,.45,3400,2100,.65,-.6],['glass',.18,.4,2300,1500,.45,.6]],
  orren:[['stone',0,.35,150,35,.9],['metal',.07,.55,230,180,.65],['rumble',.18,.5,100,40,.55]],
  vesper:[['whisper',0,.3,2300,700,.65],['metal',.08,.2,2100,1300,.45],['pulse',.16,.3,80,52,.6]]
 },ultimate:{
  ilya:[['wood',0,.3,160,95,.7],['choir',.12,1.2,196,392,.7],['wood',.35,.3,250,140,.5,-.7],['wood',.65,.3,330,170,.45,.7],['bell',.75,.8,1176,1000,.35]],
  sol:[['reverse',0,.28,100,1300,.6],['pulse',.22,.55,155,29,.9,-.5],['crack',.26,.3,3300,470,.65],['pulse',.55,.6,120,32,.8,.5],['rumble',.8,.75,150,38,.75]],
  niva:[['reverse',0,.35,1700,240,.6],['glass',.32,.7,3900,2600,.65,-.7],['glass',.45,.7,2800,1700,.6,.7],['choir',.4,1.05,440,220,.5],['wind',.5,.9,3200,550,.5]],
  orren:[['stone',0,.38,150,34,.9],['stone',.4,.4,125,31,.8,-.5],['stone',.8,.5,100,28,.85,.5],['metal',.03,1.4,195,155,.65],['rumble',.5,1,140,38,.6]],
  vesper:[['wind',0,.16,4200,600,.6,-.8],['metal',.12,.18,1550,1000,.55,.8],['wind',.27,.18,3000,350,.55,.5],['metal',.4,.2,2200,1300,.55,-.5],['howl',.1,1,130,380,.55],['crack',.65,.17,3100,700,.55]]
 },weapons:{
  bow:[['pluck',0,.16,420,170,.7],['wind',.015,.15,2300,600,.45]],
  staff:[['pulse',0,.2,140,58,.6],['crack',.025,.22,1400,380,.6]],
  iceblade:[['glass',0,.26,2600,1900,.65],['wind',.025,.12,4400,1600,.35]],
  hammer:[['stone',0,.22,175,55,.8],['wind',.025,.18,640,240,.4]],
  daggers:[['metal',0,.13,1800,1300,.55,-.4],['metal',.035,.14,2350,1600,.5,.4]],
  stormrod:[['zap',0,.16,520,150,.7],['metal',.03,.25,830,760,.35]],
  scythe:[['wind',0,.3,2300,360,.65],['whisper',.05,.27,510,260,.5]],
  orb:[['bell',0,.32,390,520,.55,-.3],['bell',.065,.28,585,780,.4,.3]],
  crossbow:[['wood',0,.065,280,170,.8],['metal',.02,.15,560,340,.6],['wind',.03,.16,1500,650,.4]],
  cinder:[['liquid',0,.18,125,55,.55],['rumble',.06,.26,380,110,.75]],
  vines:[['wood',0,.16,510,180,.65],['crack',.025,.13,1700,430,.5]],
  void:[['reverse',0,.13,750,120,.65],['zap',.07,.18,360,960,.5]],
  spear:[['wind',0,.15,1800,480,.7],['metal',.035,.2,980,860,.4]],
  thornbow:[['pluck',0,.18,600,240,.6],['wood',.045,.14,340,190,.5],['wind',.07,.16,3100,800,.35]],
  runicHammer:[['stone',0,.28,90,35,.8],['bell',.06,.38,290,260,.55]]
 },cache:new Map(),playedKeys:new Set()};
 const hash=s=>{let n=2166136261;for(let i=0;i<s.length;i++)n=Math.imul(n^s.charCodeAt(i),16777619);return n>>>0;};
 const resolve=key=>{const [kind,id]=key.split(':');return kind==='weapon'?cues.weapons[id]:kind==='PPM'?cues.secondary[id]:kind==='F'?cues.ultimate[id]:['auto','skill','learn'].includes(kind)?cues.skills[id]:null;};
 cues.resolve=resolve;
 cues.render=function(ctx,key){if(cues.cache.has(key))return cues.cache.get(key);const layers=resolve(key);if(!layers)return null;const rate=22050,length=Math.ceil((Math.max(...layers.map(l=>l[1]+l[2]))+.035)*rate),buffer=ctx.createBuffer(2,length,rate),left=buffer.getChannelData(0),right=buffer.getChannelData(1);let seed=hash(key),smooth=0;
  for(const [type,start,duration,from,to,gain,pan=0]of layers){let phase=0,filtered=0;const first=Math.floor(start*rate),total=Math.floor(duration*rate),l=Math.sqrt((1-pan)/2),r=Math.sqrt((1+pan)/2);for(let i=0;i<total;i++){const t=i/rate,u=i/total,f=from*Math.pow(to/from,u);seed^=seed<<13;seed^=seed>>>17;seed^=seed<<5;const noise=(seed>>>0)/2147483648-1;smooth=.97*smooth+.03*noise;phase+=Math.PI*2*f/rate;const sine=Math.sin(phase),partial=n=>f*n<rate*.45?Math.sin(phase*n):0;let v=0,envelope=Math.min(1,t/.007)*Math.pow(1-u,1.7);
    switch(type){
     case 'pulse':v=sine+.2*Math.sin(phase*2);envelope*=Math.exp(-u*4);break;
     case 'stone':v=.5*sine+.25*Math.sin(phase*1.49)+smooth*3+noise*.07;envelope*=Math.exp(-u*3);break;
     case 'wood':v=.55*sine+.3*partial(2.71)+.15*partial(4.13)+noise*.09;envelope*=Math.exp(-u*5);break;
     case 'metal':v=.44*sine+.3*partial(2.76)+.17*partial(4.07)+.08*partial(5.43);envelope*=Math.exp(-u*2.5);break;
     case 'glass':v=.5*sine+.24*partial(1.51)+.17*partial(2.03)+.07*partial(3.91);envelope*=Math.exp(-u*2);break;
     case 'bell':v=.65*sine+.2*partial(2.01)+.12*partial(3.96);envelope*=Math.exp(-u*2.8);break;
     case 'pluck':v=(sine+.32*Math.sin(phase*2)+.19*Math.sin(phase*3)+.1*Math.sin(phase*5))*Math.exp(-u*5);break;
     case 'liquid':v=Math.sin(phase+1.7*Math.sin(phase*.5)*Math.exp(-u*8));envelope*=Math.sin(Math.PI*Math.min(1,u*3))*Math.exp(-u*1.5);break;
     case 'zap':v=Math.sin(phase+4*Math.sin(phase*1.73))*(.45+.55*Math.pow(Math.sin(t*91),2))+noise*.2;envelope*=Math.exp(-u*3);break;
     case 'howl':v=Math.sin(phase+2*Math.sin(t*Math.PI*9))*.6+Math.sin(phase*2+Math.sin(t*23))*.25+Math.sin(phase*3)*.12;envelope=Math.pow(Math.sin(Math.PI*u),.8);break;
     case 'choir':v=(sine+.32*Math.sin(phase*2+Math.sin(t*13))+.2*Math.sin(phase*3)+.12*Math.sin(phase*5))*(.8+.2*Math.sin(t*17));envelope=Math.pow(Math.sin(Math.PI*u),.7);break;
     case 'rumble':v=smooth*4+Math.sin(phase)*.3;envelope*=Math.exp(-u*1.7);break;
     case 'crack':v=noise*(.4+.6*Math.pow(Math.sin(t*137),8));envelope*=Math.exp(-u*7);break;
     case 'reverse':v=noise*.55+sine*.35;envelope=Math.pow(u,1.3)*Math.min(1,(1-u)*30);break;
     case 'whisper':v=noise*(.45+.3*Math.sin(phase)+.25*Math.sin(t*33));envelope=Math.sin(Math.PI*u);break;
     default:v=noise;envelope=Math.pow(Math.sin(Math.PI*u),.75);
    }
    // Gentle one-pole filter softens hiss; harmonic partials above Nyquist are omitted.
    const cutoff=['wind','whisper','reverse','crack'].includes(type)?Math.min(6500,f):7500,alpha=1-Math.exp(-Math.PI*2*cutoff/rate);filtered+=alpha*(v-filtered);const value=filtered*envelope*gain;left[first+i]+=value*l;right[first+i]+=value*r;
   }}
  let peak=.001;for(let i=0;i<length;i++)peak=Math.max(peak,Math.abs(left[i]),Math.abs(right[i]));const scale=.72/Math.max(.72,peak);for(let i=0;i<length;i++){left[i]*=scale;right[i]*=scale;}cues.cache.set(key,buffer);return buffer;
 };
 const oldEmit=F.emit;F.emit=function(ctx,destination,element='arcane',strength=1,key=element,volume=.12){if(!resolve(key))return oldEmit.call(this,ctx,destination,element,strength,key,volume);const st=F.state(ctx,destination),now=ctx.currentTime,priority=/^(skill:|F:|PPM:)/.test(key),interval=key==='auto:orbit'?.32:['auto:supernova','auto:reaper'].includes(key)?.55:key.startsWith('weapon:')?.11:key.startsWith('auto:')?.22:.09;
  if(now-(st.last.get(key)??-100)<interval){F.suppressed++;return false;}
  if(priority)for(const group of st.groups){if(st.voices<12)break;if(!group.priority)group.stop();}
  if(st.voices>=(priority?18:10)){F.suppressed++;return false;}
  const buffer=cues.render(ctx,key),source=ctx.createBufferSource(),gain=ctx.createGain();source.buffer=buffer;gain.gain.value=volume*Math.min(1.25,strength||1)*(key.startsWith('learn:')?.65:1);source.connect(gain);gain.connect(st.dry);gain.connect(st.reverb);st.last.set(key,now);st.voices++;st.peakVoices=Math.max(st.peakVoices,st.voices);let done=false;const group={priority,stop(){if(done)return;source.stop();cleanup();}},cleanup=()=>{if(done)return;done=true;source.disconnect();gain.disconnect();st.voices--;st.groups.delete(group);};st.groups.add(group);source.onended=cleanup;source.start();F.played++;cues.playedKeys.add(key);return true;
 };
 // Passive talents announce their acquisition, never beep continuously in combat.
 const upgrade=G.upgrade;G.upgrade=function(id){const before=this.has(id),result=upgrade.call(this,id);if(this.has(id)>before&&A.Data.byId[id])F.play('arcane',.75,'learn:'+id);return result;};
 const autos=G.autoSkills;G.autoSkills=function(dt){const p=this.player,cycle=Math.floor(this.time/12);if(this.has('chronos')&&this.time%12<3&&p.soundChronos31!==cycle){p.soundChronos31=cycle;F.skill('chronos');}return autos.call(this,dt);};
 // Warm one cue per idle task. Fixed-rate buffers can be reused across contexts;
 // first casts still work if the idle queue has not completed.
 const init=A.Audio.init;let warming=false,warmed=false;A.Audio.init=function(){init.call(this);if(warming||warmed||!this.ctx)return;warming=true;const keys=[...Object.keys(cues.skills).map(id=>'auto:'+id),...Object.keys(cues.skills).filter(id=>A.Data.byId[id]?.type==='active').map(id=>'skill:'+id),...Object.keys(cues.weapons).map(id=>'weapon:'+id),...Object.keys(cues.secondary).map(id=>'PPM:'+id),...Object.keys(cues.ultimate).map(id=>'F:'+id)];let i=0;const next=()=>{if(i>=keys.length){warming=false;warmed=true;return;}if(!A.Audio.ctx||A.Audio.ctx.state==='closed'){warming=false;return;}cues.render(A.Audio.ctx,keys[i++]);if(window.requestIdleCallback)requestIdleCallback(next,{timeout:1500});else setTimeout(next,25);};setTimeout(next,0);};
})(window.Aeren);

;

/* Module: js/localization.js */
'use strict';
(function(A){
 const S=A.Save,P=A.UI.prototype,entries=new Map(),nodes=new WeakMap(),attrs=new WeakMap(),cache=new Map();
 let pattern=null,observer=null,scheduled=false;
 const L=A.Locale={missing:new Set(),language:()=>['en','de'].includes(S.data?.settings.language)?S.data.settings.language:'pl'};
 L.add=function(rows){for(const line of rows.trim().split('\n')){const [pl,en,de]=line.split('|');if(pl&&en&&de){const key=pl.trim(),values=[en.trim(),de.trim()];entries.set(key,values);for(const kind of ['toLocaleLowerCase','toLocaleUpperCase'])if(!entries.has(key[kind]('pl')))entries.set(key[kind]('pl'),values.map(x=>x[kind]()));}}pattern=null;cache.clear();};
 L.unmatched=function(raw){L.text(raw);return String(raw).replace(pattern||/$^/g,' ').replace(/\b(?:Ilya|Sol|Niva|Orren|Vesper|AEREN|RIFT|HP|XP|DPS|ATK|DEF|AUTO|CDR|PPM|LPM|JSON|HUD|WASD|Tab|Enter|Esc|Shift|Control|Mouse|Digit|Key|Space|DoT|PvE|PC|Windows|WebView2|PNG|F11|F2|s|ms|pl|en|de)\b/g,'').replace(/[\d\W_]/gu,' ').trim();};
 L.text=function(value){const raw=String(value??''),lang=L.language();if(lang==='pl'||!/[A-Za-ząćęłńóśźż]/i.test(raw))return raw;const key=lang+':'+raw;if(cache.has(key))return cache.get(key);
  if(!pattern){const terms=[...entries.keys()].sort((a,b)=>b.length-a.length).map(s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'));pattern=new RegExp('(?<![\\p{L}])(?:'+terms.join('|')+')(?![\\p{L}])','gu');}
  const translated=raw.replace(pattern,s=>entries.get(s)[lang==='en'?0:1]);if(translated===raw&&/[ąćęłńóśźż]/i.test(raw))L.missing.add(raw);if(cache.size>5000)cache.clear();cache.set(key,translated);return translated;
 };
 function node(n){if(!n.parentElement||n.parentElement.closest('script,style,[data-l10n-skip]'))return;const current=n.nodeValue,previous=nodes.get(n),raw=previous&&current===previous.translated?previous.raw:current,translated=L.text(raw);nodes.set(n,{raw,translated});if(current!==translated)n.nodeValue=translated;}
 function element(el){if(el.closest('[data-l10n-skip]'))return;let state=attrs.get(el);if(!state){state={};attrs.set(el,state);}for(const key of ['title','aria-label','placeholder','alt']){if(!el.hasAttribute(key))continue;const current=el.getAttribute(key),prev=state[key],raw=prev&&current===prev.translated?prev.raw:current,translated=L.text(raw);state[key]={raw,translated};if(current!==translated)el.setAttribute(key,translated);}}
 L.refresh=function(){scheduled=false;observer?.disconnect();try{const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;while(n=walker.nextNode())node(n);for(const el of document.querySelectorAll('[title],[aria-label],[placeholder],[alt]'))element(el);document.documentElement.lang=L.language();document.title=L.text('AEREN · Kroniki otchłani 1.0.0');}finally{observer?.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['title','aria-label','placeholder','alt']});}};
 L.set=function(lang){if(!['pl','en','de'].includes(lang))return false;S.data.settings.language=lang;S.write();cache.clear();L.refresh();return true;};
 const settings=P.settings;P.settings=function(...args){settings.apply(this,args);this.overlay.querySelector('.panelhead')?.insertAdjacentHTML('afterend',`<section class="language28"><h2>Język gry</h2><div class="actions" data-l10n-skip>${[['pl','Polski'],['en','English'],['de','Deutsch']].map(([id,label])=>`<button class="btn ${L.language()===id?'primary':''}" data-action="language28" data-value="${id}" aria-pressed="${L.language()===id}">${label}</button>`).join('')}</div></section>`);L.refresh();};
 // Option buttons rebuild the settings panel. Keep its scroll and keyboard focus.
 const renderSettings=P.settings;P.settings=function(...args){
  const panel=this.overlay.querySelector('.panel'),active=document.activeElement;
  const previous=this.g.state==='settings'&&panel?{panel:panel.scrollTop,overlay:this.overlay.scrollTop,x:window.scrollX,y:window.scrollY,action:active?.dataset.action,value:active?.dataset.value,setting:active?.dataset.setting}:null;
  const result=renderSettings.apply(this,args);
  if(previous){
   const target=[...this.overlay.querySelectorAll('[data-action],[data-setting]')].find(e=>previous.setting?e.dataset.setting===previous.setting:previous.action&&e.dataset.action===previous.action&&e.dataset.value===previous.value);
   target?.focus({preventScroll:true});
   this.overlay.querySelector('.panel').scrollTop=previous.panel;
   this.overlay.scrollTop=previous.overlay;window.scrollTo(previous.x,previous.y);
  }
  return result;
 };
 const action=P.action;P.action=function(id,value){if(id==='language28'){if(L.set(value)){for(const b of this.overlay.querySelectorAll('[data-action="language28"]')){b.classList.toggle('primary',b.dataset.value===value);b.setAttribute('aria-pressed',String(b.dataset.value===value));}}return;}return action.call(this,id,value);};
 for(const method of ['fillText','strokeText']){const original=CanvasRenderingContext2D.prototype[method];CanvasRenderingContext2D.prototype[method]=function(text,...args){return original.call(this,L.text(text),...args);};}
 const wallet=P.wallet23;P.wallet23=function(){const html=wallet.call(this),run=S.readRun();return html.replace('</div>',`<span title="Złoto zapisanej wyprawy. Wydawaj u kupca przed rundą.">${A.icon25('gold','lightning')}<b>${Math.floor(run?.gold||0)}</b><small>Złoto wyprawy</small></span></div>`);};
 observer=new MutationObserver(()=>{if(!scheduled){scheduled=true;setTimeout(L.refresh,30);}});observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['title','aria-label','placeholder','alt']});
})(window.Aeren);

;

/* Module: js/localization-text.js */
'use strict';
Aeren.Locale.add(`
Język gry|Game language|Spiel Sprache
Nowa wyprawa|New expedition|Neue Expedition
Kontynuuj|Continue|Fortsetzen
Sanktuarium|Sanctuary|Heiligtum
Archiwum|Archive|Archiv
Ustawienia|Settings|Einstellungen
Wyjście z gry|Exit game|Spiel beenden
Wyjdź z gry|Exit game|Spiel beenden
Wróć|Back|Zurück
Kroniki otchłani|Chronicles of the Abyss|Chroniken des Abgrunds
KRONIKI OTCHŁANI|CHRONICLES OF THE ABYSS|CHRONIKEN DES ABGRUNDS
KRONIKA PROFILU|PROFILE CHRONICLE|PROFILCHRONIK
TWOJA NASTĘPNA WYPRAWA|YOUR NEXT EXPEDITION|DEINE NÄCHSTE EXPEDITION
STRAŻNIK ŻELAZNEJ PIECZĘCI|GUARDIAN OF THE IRON SEAL|WÄCHTER DES EISENSIEGELS
Ostatnia próba|Last attempt|Letzter Versuch
Najwyższy RIFT|Highest RIFT|Höchster RIFT
Aktywne wyzwanie|Active challenge|Aktive Herausforderung
Odkrycia|Discoveries|Entdeckungen
Twoja historia dopiero się zaczyna.|Your story is just beginning.|Deine Geschichte beginnt gerade erst.
Strzałki — wybór　Enter — zatwierdź　Esc — powrót · Postęp zapisuje się lokalnie|Arrow keys — select　Enter — confirm　Esc — back · Progress is saved locally|Pfeiltasten — Auswahl　Enter — bestätigen　Esc — zurück · Fortschritt wird lokal gespeichert
Odłamki bohatera|Hero shards|Heldensplitter
Odłamki konta|Account shards|Kontosplitter
Odłamki|Shards|Splitter
Srebro|Silver|Silber
Kryształy Otchłani|Abyss Crystals|Abgrundkristalle
Żetony|Tokens|Marken
Złoto wyprawy|Expedition gold|Expeditionsgold
Złoto rundy|Round gold earned|Rundengold verdient
Złoto|Gold|Gold
Sakiewka|Purse|Goldbeutel
Warsztat srebra|Silver workshop|Silberwerkstatt
Pracownia wyglądu|Appearance workshop|Stilwerkstatt
Za wyprawy. Odblokowują bohaterów oraz rozwijają ich statystyki, PPM i F.|Earned on expeditions. Unlock heroes and improve their stats, secondary skill and ultimate.|Auf Expeditionen verdient. Schalte Helden frei und verbessere Werte, Sekundärfähigkeit und ultimative Fähigkeit.
Za bossów, misje i wyzwania. Ułatwienia konta i jakość nagród.|Earned from bosses, missions and challenges. Used for account upgrades and reward quality.|Durch Bosse, Missionen und Herausforderungen verdient. Für Kontoverbesserungen und Belohnungsqualität.
Za pierwsze triumfy i trudne wyzwania. Unikalne bronie i warianty F.|Earned from first victories and difficult challenges. Unlock unique weapons and ultimate variants.|Für erste Siege und schwere Herausforderungen. Schaltet einzigartige Waffen und Varianten der ultimativen Fähigkeit frei.
Za wyzwania. Wyłącznie kosmetyka, bez premii bojowych.|Earned from challenges. Cosmetics only, no combat bonuses.|Durch Herausforderungen verdient. Nur Kosmetik, keine Kampfboni.
Złoto zapisanej wyprawy. Wydawaj u kupca przed rundą.|Gold in your saved expedition. Spend it at the merchant before a round.|Gold deiner gespeicherten Expedition. Beim Händler vor einer Runde ausgeben.
Zdobyte w tej rundzie / dostępne do wydania. Zakupy nie obniżają licznika zdobyczy.|Earned this round / available to spend. Purchases do not reduce the earned total.|In dieser Runde verdient / zum Ausgeben verfügbar. Käufe senken den Verdienstzähler nicht.
zdobyte w tej rundzie|earned this round|in dieser Runde verdient
Ta runda|This round|Diese Runde
Wybierz swoją drogę|Choose your path|Wähle deinen Weg
Przygotuj wyprawę|Prepare your expedition|Expedition vorbereiten
Przygotowanie wyprawy|Expedition preparation|Expeditionsvorbereitung
Postać · poziom trudności · misja|Hero · difficulty · mission|Held · Schwierigkeit · Mission
Kampania · sześć krain|Campaign · six realms|Kampagne · sechs Reiche
Żelazna Pieczęć|Iron Seal|Eisensiegel
Podziemia Żelaznej Pieczęci|Iron Seal Dungeons|Verliese des Eisensiegels
Lodowe Pustkowia|Frozen Wastes|Eisige Ödnis
Prastary Las|Ancient Forest|Uralter Wald
Ogniste Rozpadliny|Burning Rifts|Brennende Klüfte
Wąwóz Umarłych|Ravine of the Dead|Schlucht der Toten
Szósty Krąg Piekła|Sixth Circle of Hell|Sechster Höllenkreis
Przebudzenie otchłani|Awakening of the Abyss|Erwachen des Abgrunds
Zerwane pieczęcie|Broken Seals|Zerbrochene Siegel
Korona popiołów|Crown of Ashes|Aschenkrone
Wojna bez słońca|War Without Sun|Krieg ohne Sonne
Szepty wieczności|Whispers of Eternity|Flüstern der Ewigkeit
Ostatni krąg|The Final Circle|Der letzte Kreis
Łatwy|Easy|Leicht
Średni|Normal|Normal
Trudny|Hard|Schwer
MISJA|MISSION|MISSION
RUNDA|ROUND|RUNDE
Runda|Round|Runde
HP wrogów|Enemy HP|Gegner-LP
Obrażenia wrogów|Enemy damage|Gegnerschaden
Tempo napływu|Spawn rate|Erscheinungsrate
Wagi rzadkości|Rarity weights|Seltenheitsgewichtung
Doświadczenie|Experience|Erfahrung
Ukończ poprzednią misję|Complete the previous mission|Schließe die vorherige Mission ab
Rozpocznij misję|Start mission|Mission starten
Rozpocznij rundę|Start round|Runde starten
Rozpocznij|Start|Starten
Przetrwaj|Survive|Überlebe
strażnik za|guardian in|Wächter in
Pokonaj strażnika|Defeat the guardian|Besiege den Wächter
Pokonaj strażnika rundy bez użycia mikstury.|Defeat the round guardian without using a potion.|Besiege den Rundenwächter ohne einen Trank zu benutzen.
Zapis|Saved|Gespeichert
Zapisywanie…|Saving…|Speichern…
ATK|ATK|ANG
DEF|DEF|VERT
KRYT|CRIT|KRIT
PANCERZ|ARMOR|RÜSTUNG
PANC.|ARM.|RÜST.
ATAK/S|ATK/S|ANG/S
POZ.|LVL|ST.
POZIOM|LEVEL|STUFE
UNIK|DODGE|AUSWEICHEN
PUSTE|EMPTY|LEER
BRONIE|WEAPONS|WAFFEN
PRZEDMIOTY|ITEMS|GEGENSTÄNDE
BROŃ GŁÓWNA|MAIN WEAPON|HAUPTWAFFE
UMIEJĘTNOŚĆ|SKILL|FÄHIGKEIT
AKTYWNA|ACTIVE|AKTIV
AUTOMATYCZNA|AUTOMATIC|AUTOMATISCH
DAR LEGENDARNY|LEGENDARY GIFT|LEGENDÄRE GABE
LPM|LMB|LMT
PPM|RMB|RMT
Spacja|Space|Leertaste
Podnieś|Pick up|Aufheben
Unik|Dodge|Ausweichen
Mikstura HP|Health potion|Heiltrank
Mikstury|Potions|Tränke
Mikstura|Potion|Trank
Życie|Health|Leben
Obrażenia bazowe|Base damage|Grundschaden
Bazowe obrażenia / pocisk|Base damage / projectile|Grundschaden / Projektil
Obrażenia|Damage|Schaden
Ataki na sekundę|Attacks per second|Angriffe pro Sekunde
Pancerz po premiach przedmiotów.|Armor after item bonuses.|Rüstung einschließlich Gegenstandsboni.
Redukcja|Reduction|Reduktion
Szansa krytyka z uwzględnieniem przedmiotów.|Critical chance including item bonuses.|Kritische Trefferchance einschließlich Gegenstandsboni.
Faktyczna liczba salw broni głównej na sekundę, po premiach przedmiotów.|Actual main weapon volleys per second, including item bonuses.|Tatsächliche Salven der Hauptwaffe pro Sekunde einschließlich Gegenstandsboni.
Obrażenia jednego pocisku broni głównej, przed krytykiem i pancerzem celu. Uwzględniają przedmioty, poziom broni i aktywne modyfikatory.|Damage of one main weapon projectile before critical hits and target armor, including items, weapon level and active modifiers.|Schaden eines Hauptwaffenprojektils vor kritischen Treffern und Zielrüstung, einschließlich Gegenständen, Waffenstufe und aktiven Modifikatoren.
Przyspieszenie odnowienia zaklęć. +20% tempa odpowiada około 16,7% krótszemu odnowieniu.|Spell cooldown recovery. +20% recovery gives about 16.7% shorter cooldowns.|Abklingzeiterholung für Zauber. +20% Erholung entspricht etwa 16,7% kürzeren Abklingzeiten.
Dostrój swój świat|Tune your world|Passe deine Welt an
Głośność ogólna|Master volume|Gesamtlautstärke
Muzyka i ambient|Music and ambience|Musik und Atmosphäre
Efekty dźwiękowe|Sound effects|Soundeffekte
Wstrząsy kamery|Camera shake|Kamerawackeln
Skala renderowania|Render scale|Renderauflösung
Liczba cząsteczek|Particle count|Partikelanzahl
Liczby obrażeń|Damage numbers|Schadenszahlen
Autocelowanie zwykłych ataków|Basic attack auto-aim|Automatisches Zielen bei Basisangriffen
Autocelowanie umiejętności|Skill auto-aim|Automatisches Zielen bei Fähigkeiten
Automatyczny atak|Automatic attack|Automatischer Angriff
automatyczny atak|automatic attack|automatischer Angriff
Atak ręczny|Manual attack|Manueller Angriff
Przypisanie klawiszy|Key bindings|Tastenbelegung
Klawiatura i przyciski myszy|Keyboard and mouse buttons|Tastatur und Maustasten
Przywróć domyślne|Restore defaults|Standard wiederherstellen
Resetuj zapis|Reset save|Spielstand zurücksetzen
Pełny ekran|Fullscreen|Vollbild
Układ HUD|HUD layout|HUD-Anordnung
Wielkość HUD|HUD size|HUD-Größe
Położenie HUD|HUD position|HUD-Position
Efekt niskiego HP|Low health warning|Warnung bei wenig Leben
Interfejs wyprawy|Expedition interface|Expeditionsoberfläche
Klasyczny|Classic|Klassisch
Okrągły|Circular|Kreisförmig
Mały|Small|Klein
Duży|Large|Groß
Centralnie|Centered|Zentriert
Po lewej|Left|Links
Po prawej|Right|Rechts
Delikatny|Subtle|Dezent
Delikatne|Subtle|Dezent
Pełny|Full|Voll
Pełne|Full|Voll
Wyłączony|Off|Aus
Wyłączone|Off|Aus
Krycie|Opacity|Deckkraft
Opisy statystyk broni|Weapon stat descriptions|Waffenwerte anzeigen
widoczne|visible|sichtbar
ukryte|hidden|verborgen
Dostępność i dane lokalne|Accessibility and local data|Barrierefreiheit und lokale Daten
Intensywność błysków|Flash intensity|Blitzintensität
Rozmiar liczb obrażeń|Damage number size|Größe der Schadenszahlen
Widoczność efektów bohatera|Hero effect visibility|Sichtbarkeit der Heldeneffekte
Wielkość ikon statusów|Status icon size|Größe der Statuseffekte
Obrys pocisków przeciwnika|Enemy projectile outlines|Umrisse gegnerischer Projektile
Żółty kolor zagrożeń|Yellow danger indicators|Gelbe Gefahrenanzeigen
Zatrzymuj czas podczas wyborów|Pause time during choices|Zeit bei Entscheidungen anhalten
Dźwięki informacyjne|Audio cues|Akustische Hinweise
Zapisuj Kronikę i lokalną historię rozgrywki|Save history and local telemetry|Chronik und lokale Telemetrie speichern
Widoczność zagrożeń|Danger visibility|Gefahrensichtbarkeit
Standardowa|Standard|Standard
Wysoka|High|Hoch
Maksymalna|Maximum|Maximal
Eksport JSON|Export JSON|JSON exportieren
Usuń Kronikę i dane diagnostyczne|Delete history and telemetry|Chronik und Telemetrie löschen
Gra i aktualizacje|Game and updates|Spiel und Updates
Sprawdź aktualizacje|Check for updates|Nach Updates suchen
Ruch w górę|Move up|Nach oben bewegen
Ruch w dół|Move down|Nach unten bewegen
Ruch w lewo|Move left|Nach links bewegen
Ruch w prawo|Move right|Nach rechts bewegen
Umiejętność pomocnicza|Secondary skill|Sekundärfähigkeit
Moc bohatera|Ultimate|Ultimative Fähigkeit
Umiejętność|Skill|Fähigkeit
Umiejętności|Skills|Fähigkeiten
Użyj mikstury|Use potion|Trank benutzen
Interakcja / odbiór|Interact / collect|Interagieren / sammeln
Pauza / powrót|Pause / back|Pause / zurück
Panel testowy|Test panel|Testfenster
Menu: następny / więcej|Menu: next / more|Menü: weiter / mehr
Menu: poprzedni / mniej|Menu: previous / less|Menü: zurück / weniger
Menu: następny w pionie|Menu: next vertically|Menü: nächster Eintrag
Menu: poprzedni w pionie|Menu: previous vertically|Menü: vorheriger Eintrag
Menu: zatwierdź|Menu: confirm|Menü: bestätigen
Wybierz akcję, potem naciśnij klawisz lub przycisk myszy. Esc anuluje przypisywanie. Konflikty są blokowane.|Select an action, then press a key or mouse button. Esc cancels binding. Conflicting bindings are blocked.|Wähle eine Aktion und drücke eine Taste oder Maustaste. Esc bricht ab. Konflikte werden verhindert.
Dźwięk rozpoczyna się po pierwszym zatwierdzeniu wyboru. Ustawienia i postęp zapisują się lokalnie w tej przeglądarce.|Sound starts after the first confirmed selection. Settings and progress are saved locally in this browser.|Ton beginnt nach der ersten bestätigten Auswahl. Einstellungen und Fortschritt werden lokal in diesem Browser gespeichert.
Historia i dane diagnostyczne pozostają na tym komputerze. Wyłączenie zatrzymuje zapisywanie nowych danych; możesz też usunąć istniejącą Kronikę.|History and telemetry stay on this computer. Disabling stops new recordings; you can also delete the existing history.|Chronik und Telemetrie bleiben auf diesem Computer. Deaktivieren stoppt neue Einträge; die bestehende Chronik kann gelöscht werden.
Rozwój bohaterów|Hero development|Heldenentwicklung
Rozwój i odblokowania|Progression and unlocks|Entwicklung und Freischaltungen
Kuźnia broni|Weapon forge|Waffenschmiede
Kuźnia i wygląd broni|Forge and weapon appearances|Schmiede und Waffenstile
Kuźnia i kolekcja|Forge and collection|Schmiede und Sammlung
Archiwum reliktów|Relic archive|Reliktarchiv
Wyzwania i nagrody|Challenges and rewards|Herausforderungen und Belohnungen
Wyzwania|Challenges|Herausforderungen
Kolekcja i wymiana|Collection and exchange|Sammlung und Tausch
Kronika odkryć i wyzwań|Chronicle of discoveries and challenges|Chronik der Entdeckungen und Herausforderungen
Relikty, bronie i krainy|Relics, weapons and realms|Relikte, Waffen und Reiche
Broń startowa|Starting weapon|Startwaffe
Bronie|Weapons|Waffen
Przedmioty i relikty|Items and relics|Gegenstände und Relikte
Przedmioty|Items|Gegenstände
Przedmiot|Item|Gegenstand
Broń|Weapon|Waffe
Mapy i strażnicy|Maps and guardians|Karten und Wächter
Rzadkość|Rarity|Seltenheit
Zwykły|Common|Gewöhnlich
Rzadki|Rare|Selten
Epicki|Epic|Episch
Legendarny|Legendary|Legendär
Mityczny|Mythic|Mythisch
Odblokuj|Unlock|Freischalten
Odblokowano|Unlocked|Freigeschaltet
ZABLOKOWANE|LOCKED|GESPERRT
POSIADANE|OWNED|IM BESITZ
ODEBRANO|CLAIMED|ABGEHOLT
W TOKU|IN PROGRESS|IN ARBEIT
Kup punkt|Buy point|Punkt kaufen
Kupiono|Purchased|Gekauft
Kup|Buy|Kaufen
Koszt|Cost|Kosten
koszt|cost|Kosten
Brakuje|Missing|Es fehlen
brakuje|missing|es fehlen
Rozwijaj|Develop|Verbessern
Obecnie|Current|Aktuell
Następnie|Next|Danach
Następny poziom|Next level|Nächste Stufe
Następny|Next|Nächster
Poziom|Level|Stufe
Maksymalny poziom|Maximum level|Maximale Stufe
Osiągnięto maksimum|Maximum reached|Maximum erreicht
Przygotowanie dotyczy następnej wyprawy.|Preparation applies to the next expedition.|Die Vorbereitung gilt für die nächste Expedition.
Kupiec przed rundą|Merchant before the round|Händler vor der Runde
Zakupy|Purchases|Käufe
Szanse jakości|Rarity chances|Seltenheitschancen
Trzy oferty, maksymalnie dwa zakupy. Niewydane złoto przechodzi do kolejnej rundy. Na początku wyprawy otrzymujesz 60 złota na przygotowanie.|Three offers, up to two purchases. Unspent gold carries over to the next round. You start each expedition with 60 gold for preparation.|Drei Angebote, höchstens zwei Käufe. Nicht ausgegebenes Gold bleibt für die nächste Runde. Jede Expedition beginnt mit 60 Gold zur Vorbereitung.
Broń lepszej jakości zaczyna na poziomie 1–3; posiadany egzemplarz otrzymuje co najmniej jeden poziom.|Higher-quality weapons start at level 1–3; an owned weapon gains at least one level.|Hochwertigere Waffen beginnen auf Stufe 1–3; eine vorhandene Waffe erhält mindestens eine Stufe.
Brak wolnego miejsca|No free slot|Kein freier Platz
Osiągnięto poziom 5|Level 5 reached|Stufe 5 erreicht
ulepszenie posiadanego|upgrade owned item|vorhandenen Gegenstand verbessern
Wyprawa wstrzymana|Expedition paused|Expedition pausiert
Wróć do walki|Return to combat|Zum Kampf zurück
Wróć do poprzedniego ekranu|Return to previous screen|Zum vorherigen Bildschirm zurück
Zapisz i wróć do menu|Save and return to menu|Speichern und zum Menü
Zakończ wyprawę · odbierz odłamki|End expedition · collect shards|Expedition beenden · Splitter erhalten
Postać i wyposażenie|Hero and equipment|Held und Ausrüstung
Postać i ekwipunek|Hero and inventory|Held und Inventar
Statystyki posiadanych broni|Owned weapon stats|Werte vorhandener Waffen
Nie masz jeszcze przedmiotów.|You have no items yet.|Du hast noch keine Gegenstände.
TAB · podgląd wstrzymuje walkę|TAB · inspection pauses combat|TAB · Ansicht pausiert den Kampf
Plan synergii i Pamiątki|Synergy plan and Keepsakes|Synergieplan und Andenken
Plan synergii i maksymalnie dwie Pamiątki|Synergy plan and up to two Keepsakes|Synergieplan und höchstens zwei Andenken
Cel buildu|Build goal|Build-Ziel
BEZ PLANU · darmowe przelosowanie|NO PLAN · free reroll|OHNE PLAN · kostenlos neu würfeln
Plan: waga brakującego składnika ×1,3. Ukryte synergie pojawiają się dopiero po odkryciu. Cele niedostępne w Pieczęci są pomijane.|Plan: missing components have ×1.3 selection weight. Hidden synergies appear only after discovery. Goals unavailable in the Seal are skipped.|Plan: Fehlende Komponenten haben ×1,3 Auswahlgewicht. Verborgene Synergien erscheinen erst nach ihrer Entdeckung. Im Siegel nicht verfügbare Ziele werden übersprungen.
Pamiątka Główna|Main Keepsake|Hauptandenken
Pamiątka Pomocnicza|Secondary Keepsake|Nebenandenken
PAMIĄTKI|KEEPSAKES|ANDENKEN
Pamiątki|Keepsakes|Andenken
Puste miejsca · Czysta Wyprawa: +15% końcowych odłamków|Empty slots · Pure Expedition: +15% final shards|Leere Plätze · Reine Expedition: +15% Splitter am Ende
Zmień Pamiątki|Change Keepsakes|Andenken ändern
WYPRAWA BEZ PAMIĄTEK|EXPEDITION WITHOUT KEEPSAKES|EXPEDITION OHNE ANDENKEN
Stałe przygotowanie wyprawy|Permanent expedition preparation|Dauerhafte Expeditionsvorbereitung
Dwa miejsca: puste. Poziomy zostają ustalone na początku wyprawy.|Two slots: empty. Ranks are fixed when the expedition begins.|Zwei Plätze: leer. Stufen werden zu Beginn der Expedition festgelegt.
Wszystkie poziomy|All levels|Alle Stufen
Nieposiadana|Not owned|Nicht im Besitz
Źródło|Source|Quelle
Rozwój|Upgrade|Verbessern
Załóż|Equip|Anlegen
Zdejmij|Unequip|Ablegen
Sekretne kombinacje|Secret combinations|Geheime Kombinationen
Nieodkryta kombinacja trzech elementów|Undiscovered three-part combination|Unentdeckte Kombination aus drei Elementen
Nieodkryte|Undiscovered|Unentdeckt
Nieodkryta|Undiscovered|Unentdeckt
Przebudzenie broni · poziomy 6–7|Weapon awakening · levels 6–7|Waffenerwachen · Stufen 6–7
Przebudzenie broni|Weapon awakening|Waffenerwachen
Przebudzenie|Awakening|Erwachen
Szczegóły i rozwój|Details and upgrades|Details und Entwicklung
Katalog umiejętności|Skill catalog|Fähigkeitenkatalog
Osobiste umiejętności bohaterów|Personal hero skills|Persönliche Heldenfähigkeiten
Opisy działania i rozwoju. Odkrycia wyprawy pozostają zapisane poniżej.|Effects and upgrades. Expedition discoveries remain recorded below.|Wirkungen und Entwicklung. Entdeckungen bleiben unten gespeichert.
Kronika wypraw|Expedition history|Expeditionschronik
Ostatnich 20 ukończonych wypraw|Last 20 completed expeditions|Die letzten 20 abgeschlossenen Expeditionen
Brak zapisanych wypraw.|No saved expeditions.|Keine gespeicherten Expeditionen.
Kronika wyprawy|Expedition record|Expeditionsbericht
Szczelina zamknięta|Rift closed|Riss geschlossen
Koniec wyprawy|Expedition ended|Expedition beendet
JESZCZE RAZ|TRY AGAIN|NOCH EINMAL
NASTĘPNY RIFT|NEXT RIFT|NÄCHSTER RIFT
POWTÓRZ PRZYGOTOWANIE|REPEAT PREPARATION|VORBEREITUNG WIEDERHOLEN
Przyczyna śmierci|Cause of death|Todesursache
Najważniejsze odkrycie|Key discovery|Wichtigste Entdeckung
Szczegóły wyposażenia i walki|Build and combat details|Build- und Kampfdetails
Najlepsza synergia|Best synergy|Beste Synergie
NOWY REKORD|NEW RECORD|NEUER REKORD
Czas|Time|Zeit
Pokonani|Defeated|Besiegt
Wynik|Score|Punktzahl
Szczegóły|Details|Details
Nemezis|Nemesis|Nemesis
Jeden osobisty przeciwnik|One personal enemy|Ein persönlicher Gegner
Jeszcze żadna elita nie stała się Twoim Nemezis.|No elite has become your Nemesis yet.|Noch ist kein Elitegegner dein Nemesis geworden.
Wybierz umiejętność|Choose a skill|Wähle eine Fähigkeit
Wybierz wyposażenie|Choose equipment|Wähle Ausrüstung
Awans|Level up|Stufenaufstieg
Przelosuj|Reroll|Neu würfeln
Zastąp jedno miejsce|Replace a slot|Einen Platz ersetzen
Zastąp tym wyborem|Replace with this choice|Durch diese Wahl ersetzen
Zachowaj ekwipunek · pomiń nagrodę|Keep equipment · skip reward|Ausrüstung behalten · Belohnung überspringen
Przypisz umiejętność|Assign skill|Fähigkeit zuweisen
Odkryj podczas wyprawy.|Discover during an expedition.|Während einer Expedition entdecken.
Kronika|Chronicle|Chronik
Synergie Pieczęci|Seal synergies|Siegelsynergien
Synergie|Synergies|Synergien
Synergia|Synergy|Synergie
Prąd Życia|Life Current|Lebensstrom
Wymaga|Requires|Benötigt
Przebicie|Piercing|Durchschlag
Promień eksplozji|Explosion radius|Explosionsradius
Promień|Radius|Radius
Zasięg bazowy|Base range|Grundreichweite
Odstęp ataków|Attack interval|Angriffsintervall
Odnowienie|Cooldown|Abklingzeit
Leczenie|Healing|Heilung
Liczba pocisków / duchów|Projectiles / spirits|Projektile / Geister
Dodatkowe cele pioruna|Additional lightning targets|Zusätzliche Blitzziele
Czas działania|Duration|Dauer
Za pojedyncze trafienie strefy|Per area hit|Pro Flächentreffer
Efekt trafienia|Hit effect|Treffereffekt
Premia za rangę|Bonus per rank|Bonus pro Rang
Dostępne rangi|Available ranks|Verfügbare Ränge
Wspólny limit leczenia|Shared healing cap|Gemeinsames Heilungslimit
Jednorazowy dar — bez kolejnych poziomów.|One-time gift — no further levels.|Einmalige Gabe — keine weiteren Stufen.
Animowana broń przy bohaterze|Animated weapon beside the hero|Animierte Waffe neben dem Helden
Odkryte obszary, przeszkody i obiekty|Explored areas, obstacles and objects|Erkundete Gebiete, Hindernisse und Objekte
Świat gry Aeren|Aeren game world|Aeren-Spielwelt
Schematy|Blueprints|Baupläne
Schemat|Blueprint|Bauplan
Ograniczone odblokowania i kosmetyka|Limited unlocks and cosmetics|Begrenzte Freischaltungen und Kosmetik
Srebrzysty ślad|Silver trail|Silberspur
Srebrzysta aura i obrys bohatera. Kosmetyczne, bez statystyk.|Silver hero aura and outline. Cosmetic, no stat bonuses.|Silberne Aura und Heldenumriss. Kosmetisch, ohne Werteboni.
Jasne smugi pocisków broni.|Bright weapon projectile trails.|Leuchtende Spuren von Waffenprojektilen.
Ramka Pieczęci|Seal frame|Siegelrahmen
Widmowe pociski|Spectral projectiles|Geisterprojektile
Zdobiona ramka portretu w HUD.|Decorated HUD portrait frame.|Verzierter Porträtrahmen im HUD.
Kuźnia testowa|Training forge|Testschmiede
bez nagród|no rewards|ohne Belohnungen
nie są wymagane do zwycięstwa|not required to win|nicht für den Sieg erforderlich
Plan|Plan|Plan
Rekord|Record|Rekord
Rekord przeżycia|Survival record|Überlebensrekord
brak|none|keine
trwałe odblokowanie|permanent unlock|dauerhafte Freischaltung
poziom|level|Stufe
runda|round|Runde
rund|rounds|Runden
misja|mission|Mission
etap|stage|Abschnitt
odłamków bohatera|hero shards|Heldensplitter
odłamków|shards|Splitter
odłamki|shards|Splitter
srebra|silver|Silber
srebro|silver|Silber
żetonów|tokens|Marken
złota|gold|Gold
złoto|gold|Gold
obrażeń krytycznych|critical damage|kritischer Schaden
obrażeń otrzymywanych|incoming damage|erlittener Schaden
obrażeń umiejętności pomocniczej|secondary skill damage|Schaden der Sekundärfähigkeit
tempa odnowienia umiejętności pomocniczej|secondary skill recovery|Erholung der Sekundärfähigkeit
tempa odnowienia|cooldown recovery|Abklingzeiterholung
tempa ataku|attack speed|Angriffstempo
szybkości ataku|attack speed|Angriffstempo
szybkości pocisków|projectile speed|Projektiltempo
prędkości pocisków|projectile speed|Projektiltempo
siły ataku|attack power|Angriffskraft
siły broni|weapon power|Waffenstärke
siły mocy F|ultimate power|Stärke der ultimativen Fähigkeit
szansy krytyka|critical chance|kritische Trefferchance
szansy uniku|dodge chance|Ausweichchance
kradzieży życia|life steal|Lebensraub
maksymalnego HP|max HP|max. LP
maks. HP|max HP|max. LP
zasięgu przyciągania|pickup range|Sammelreichweite
przyciągania łupu|loot attraction|Beuteanziehung
szczęścia przy nagrodach|reward luck|Belohnungsglück
szczęścia|luck|Glück
doświadczenia|experience|Erfahrung
pancerza|armor|Rüstung
obrażeń|damage|Schaden
obrażenia|damage|Schaden
krytyka|critical chance|kritische Trefferchance
ruchu|movement speed|Bewegungstempo
ruch|movement|Bewegung
obszaru|area|Fläche
odnowienia|cooldown recovery|Abklingzeiterholung
uniku|dodge chance|Ausweichchance
szybkości|speed|Tempo
za punkt.|per point.|pro Punkt.
pkt proc.|percentage points|Prozentpunkte
leczenia między rundami|healing between rounds|Heilung zwischen Runden
pocisków|projectiles|Projektile
pociski|projectiles|Projektile
pocisk|projectile|Projektil
Obowiązują limity statystyk.|Stat caps apply.|Werteobergrenzen gelten.
Ranga|Rank|Rang
zasięg|range|Reichweite
atak|attack|Angriff
co|every|alle
Kula Ognia|Fireball|Feuerball
Odłamki Zimy|Winter Shards|Wintersplitter
Iskra Burzy|Storm Spark|Sturmfunke
Jadowe Zarodniki|Venom Spores|Giftsporen
Gwiezdne Ostrza|Star Blades|Sternenklingen
Duch Lasu|Forest Spirit|Waldgeist
Puls Echa|Echo Pulse|Echopuls
Deszcz Piór|Feather Rain|Federregen
Czarna Rosa|Black Dew|Schwarzer Tau
Krople Luny|Lunar Drops|Mondtropfen
Upadek Słońca|Sunfall|Sonnensturz
Biała Cisza|White Silence|Weiße Stille
Rozdarcie Nieba|Sky Rend|Himmelsriss
Ogród Jadu|Venom Garden|Giftgarten
Uścisk Korzeni|Root Grasp|Wurzelgriff
Kamienna Przysięga|Stone Oath|Steinschwur
Krok w Mrok|Shadow Step|Schattenschritt
Oko Wichru|Eye of the Gale|Sturmauge
Dziki Zew|Wild Call|Wilder Ruf
Szkarłatna Nić|Crimson Thread|Scharlachfaden
Wola|Willpower|Willenskraft
Rytm|Rhythm|Rhythmus
Żywy Rdzeń|Living Core|Lebenskern
Żelazna Kora|Iron Bark|Eisenrinde
Lekki Krok|Light Step|Leichter Schritt
Lekki krok|Light Step|Leichter Schritt
Ostre Oko|Keen Eye|Scharfes Auge
Skupienie|Focus|Fokus
Horyzont|Horizon|Horizont
Rozszczepienie|Split|Aufspaltung
Głód Życia|Life Hunger|Lebenshunger
Łut Szczęścia|Lucky Break|Glücksmoment
Pamięć Bitew|Battle Memory|Kampferinnerung
Pamięć bitew|Battle Memory|Kampferinnerung
Zew Otchłani|Call of the Abyss|Ruf des Abgrunds
Lot Pocisku|Projectile Flight|Projektilflug
Miraż|Mirage|Trugbild
Serce Feniksa|Phoenix Heart|Phönixherz
Supernowa|Supernova|Supernova
Pryzmat Świata|World Prism|Weltenprisma
Zatrzymany Świt|Frozen Dawn|Erstarrte Morgendämmerung
Dziedzictwo Tytana|Titan Legacy|Titanenerbe
Ostatni Liść|Last Leaf|Letztes Blatt
Nasiono Świata|World Seed|Weltensamen
Równy Puls|Steady Pulse|Gleichmäßiger Puls
Kometa|Comet|Komet
Korona Burz|Storm Crown|Sturmkrone
Łuk Świtu|Dawn Bow|Bogen der Morgendämmerung
Laska Żaru|Ember Staff|Glutstab
Lodowe Igły|Ice Needles|Eisnadeln
Młot Przysięgi|Oath Hammer|Schwurhammer
Bliźniacze Ciernie|Twin Thorns|Zwillingsdornen
Berło Burzy|Storm Scepter|Sturmzepter
Kosa Umarłych|Reaper Scythe|Todessense
Pryzmat Otchłani|Abyss Prism|Abgrundprisma
Kusza Runiczna|Runic Crossbow|Runenarmbrust
Serce Wulkanu|Volcano Heart|Vulkanherz
Bicz Korzeni|Root Lash|Wurzelpeitsche
Igła Pustki|Void Needle|Nadel der Leere
Włócznia Strażnika|Guardian Spear|Wächterspeer
Łuk Cierni|Thorn Bow|Dornenbogen
Młot Runiczny|Runic Hammer|Runenhammer
Przeszywający Promień|Piercing Ray|Durchdringender Strahl
Oddech Żaru|Ember Breath|Glutatem
Lodowy Uskok|Ice Shift|Eissprung
Uderzenie Bastionu|Bastion Strike|Bastionsschlag
Znak Śmierci|Death Mark|Todesmal
Serce Gaju|Grove Heart|Hainherz
Kataklizm|Cataclysm|Kataklysmus
Absolutne Zero|Absolute Zero|Absoluter Nullpunkt
Gniew Tytana|Titan Wrath|Titanenzorn
Taniec Śmierci|Death Dance|Totentanz
Strażniczka świtu|Dawn Guardian|Wächterin der Morgendämmerung
Tkacz płomienia|Flame Weaver|Flammenweber
Kartografka szronu|Frost Cartographer|Frostkartografin
Wędrowny bastion|Wandering Bastion|Wandernde Bastion
Szept między liśćmi|Whisper Among Leaves|Flüstern im Laub
Burza łańcuchowa|Chain Storm|Kettensturm
Toksyczny rozkwit|Toxic Bloom|Giftblüte
Szronowy szlak|Frost Trail|Frostpfad
Wrząca mgła|Boiling Mist|Kochender Nebel
Roztrzaskanie|Shatter|Zersplitterung
Zielona plaga|Green Plague|Grüne Pest
Orbita słońca|Solar Orbit|Sonnenorbit
Cewka Tesli|Tesla Coil|Teslaspule
Żniwa|Harvest|Ernte
Przebudzenie lasu|Forest Awakening|Walderwachen
Horyzont zdarzeń|Event Horizon|Ereignishorizont
Szkarłatna gwiazda|Crimson Star|Scharlachstern
Żelazny ogród|Iron Garden|Eisengarten
Echo nieskończoności|Infinity Echo|Echo der Unendlichkeit
Zaćmienie|Eclipse|Finsternis
Wieczna zima|Eternal Winter|Ewiger Winter
Skrzydła feniksa|Phoenix Wings|Phönixschwingen
Szklane serce|Glass Heart|Glasherz
Kotwica|Anchor|Anker
Puste pióro|Hollow Feather|Hohle Feder
Wachlarz|Fan|Fächer
Piasek nocy|Night Sands|Nachtsand
Wilczy kieł|Wolf Fang|Wolfszahn
Soczewka|Lens|Linse
Stare nasiono|Ancient Seed|Alter Samen
Cichy dzwon|Silent Bell|Stille Glocke
Moneta wygnańca|Exile Coin|Münze des Verbannten
Maska szczęścia|Lucky Mask|Glücksmaske
Buty komety|Comet Boots|Kometenstiefel
Krzywe lustro|Distorted Mirror|Zerrspiegel
Magnetyt|Magnetite|Magnetit
Nieskończony kołczan|Endless Quiver|Endloser Köcher
Złamana gwiazda|Broken Star|Zerbrochener Stern
Przysięga|Oath|Schwur
Korona cierni|Thorn Crown|Dornenkrone
Łza księżyca|Moon Tear|Mondträne
Pieczęć Mocy|Power Seal|Machtsiegel
Koło Wojny|War Wheel|Kriegsrad
Łuska Strażnika|Guardian Scale|Wächterschuppe
Przysięga Gaju|Grove Oath|Hainschwur
Zegar Otchłani|Abyss Clock|Abgrunduhr
Oko Łowcy|Hunter Eye|Jägerauge
Nić Wichru|Gale Thread|Sturmfaden
Krąg Horyzontu|Horizon Ring|Horizontkreis
Rubinowy Kieł|Ruby Fang|Rubinzahn
Kompas Losu|Fate Compass|Schicksalskompass
Kompas Wędrowca|Wanderer Compass|Wandererkompass
Pieczęć Kuźni|Forge Seal|Schmiedesiegel
Pusta Fiolka|Empty Vial|Leere Phiole
Pęknięte Zwierciadło|Cracked Mirror|Gesprungener Spiegel
Ziarno Głębin|Depth Seed|Tiefensamen
Znak Łowcy|Hunter Mark|Jägermal
Niedokończona Mapa|Unfinished Map|Unvollständige Karte
Popiół Feniksa|Phoenix Ash|Phönixasche
Martwy Dzwon|Dead Bell|Totenglocke
Korona Głodu|Crown of Hunger|Hungerkrone
Zwierciadło Potępionych|Mirror of the Damned|Spiegel der Verdammten
Ostatnia Iskra|Last Spark|Letzter Funke
Pieczęć Ciszy|Seal of Silence|Siegel der Stille
Przysięga Jednej Broni|One Weapon Oath|Einwaffenschwur
Żywotność|Vitality|Vitalität
Hart ducha|Resolve|Entschlossenheit
Trening broni|Weapon training|Waffentraining
Mistrzostwo arsenału|Arsenal mastery|Arsenalmeisterschaft
Rytm oręża|Weapon rhythm|Waffenrhythmus
Precyzja|Precision|Präzision
Praktyka zaklęć|Spell practice|Zauberübung
Horyzont mocy|Power horizon|Machthorizont
Sztuka tworzenia|Art of creation|Kunst der Schöpfung
Drugi oddech|Second wind|Zweiter Atem
Riposta|Riposte|Riposte
Siła|Power|Stärke
Kontrola|Control|Kontrolle
Suchy prowiant|Dry provisions|Trockenproviant
Nietykalny|Untouchable|Unantastbar
Pewny wybór|Certain choice|Sichere Wahl
Przed zmierzchem|Before dusk|Vor der Dämmerung
Zgrany duet|Perfect duo|Eingespieltes Duo
Pogromca żaru|Ember slayer|Glutbezwinger
Oko poszukiwacza|Explorer Eye|Entdeckerauge
Znajomości kartografa|Cartographer Contacts|Kontakte des Kartografen
Karta: Pogromca żaru|Card: Ember slayer|Karte: Glutbezwinger
Mapy o zmierzchu|Twilight maps|Dämmerungskarten
Kustosz Krypt|Crypt Custodian|Kryptenhüter
Król Bez Grobu|King Without a Grave|König ohne Grab
Matka Korzeni|Root Mother|Wurzelmutter
Kowal Żaru|Ember Smith|Glutschmied
Arcyksiążę Otchłani|Archduke of the Abyss|Erzherzog des Abgrunds
Szczur krypt|Crypt rat|Kryptenratte
Kościotrup|Skeleton|Skelett
Łucznik grobów|Grave archer|Grabesschütze
Tarczownik|Shield bearer|Schildträger
Nietoperz jaskiń|Cave bat|Höhlenfledermaus
Skryba pułapek|Trap scribe|Fallenschreiber
Pękający kokon|Bursting cocoon|Platzender Kokon
Nekromanta|Necromancer|Nekromant
Śnieżny wilk|Snow wolf|Schneewolf
Zimowa larwa|Winter larva|Winterlarve
Strzelec szronu|Frost archer|Frostschütze
Kryształowy golem|Crystal golem|Kristallgolem
Lodowy nietoperz|Ice bat|Eisfledermaus
Duch zamieci|Blizzard spirit|Schneesturmgeist
Skoczek lodowy|Ice hopper|Eishüpfer
Śnieżny szaman|Snow shaman|Schneeschamane
Wilk paproci|Fern wolf|Farnwolf
Grzyb zarodnikowy|Spore mushroom|Sporenpilz
Ostropest|Thistle|Distel
Dzik cierni|Thorn boar|Dornenkeiler
Osa burzowa|Storm wasp|Sturmwespe
Pnącze sidlarza|Trapper vine|Fangranke
Oślizgły rój|Slimy swarm|Schleimschwarm
Leśna wiedźma|Forest witch|Waldhexe
Ognisty imp|Fire imp|Feuerteufel
Żarowy pełzacz|Ember crawler|Glutkriecher
Miotacz żaru|Ember thrower|Glutwerfer
Płomienny rycerz|Flame knight|Flammenritter
Pies lawy|Lava hound|Lavahund
Bazaltowa artyleria|Basalt artillery|Basaltartillerie
Wybuchowy żużel|Explosive slag|Explosive Schlacke
Kowal popiołu|Ash smith|Aschenschmied
Upiór|Wraith|Gespenst
Pożeracz kości|Bone eater|Knochenfresser
Kościany łucznik|Bone archer|Knochenschütze
Widmowy rycerz|Spectral knight|Geisterritter
Wampir|Vampire|Vampir
Dzwonnik mogił|Grave bell ringer|Grabesglöckner
Pomniejszy demon|Lesser demon|Niederer Dämon
Oko otchłani|Abyss eye|Abgrundauge
Strażnik łańcuchów|Chain guardian|Kettenwächter
Rogaty taran|Horned ram|Gehörnter Rammbock
Skrzydlaty imp|Winged imp|Geflügelter Teufel
Demon oblężniczy|Siege demon|Belagerungsdämon
Cień rozdarcia|Rift shadow|Rissschatten
Rozszczepiony koszmar|Split nightmare|Gespaltener Albtraum
Kapłan piekła|Hell priest|Höllenpriester
Mała|Small|Klein
Duża|Large|Groß
Regeneracja|Regeneration|Regeneration
Kamienie milowe i dalszy rozwój|Milestones and further progression|Meilensteine und weitere Entwicklung
Próg w przygotowaniu|Tier under development|Stufe in Entwicklung
Nieudostępniony — wymaga osobnych testów.|Unavailable — requires separate testing.|Nicht verfügbar — benötigt gesonderte Tests.
Aura Zdobywcy|Conqueror Aura|Erobereraura
Rezonans Berła|Scepter Resonance|Zepterresonanz
Trop Burzy|Storm Trail|Sturmspur
Normalny run|Normal run|Normaler Durchlauf
Zemsta|Revenge|Rache
Krucha potęga|Fragile power|Zerbrechliche Macht
Odkrycia Pieczęci|Seal discoveries|Siegelentdeckungen
Więcej możliwości budowania postaci|More build possibilities|Mehr Build-Möglichkeiten
Przysięga ognia|Fire oath|Feuerschwur
Przysięga natury|Nature oath|Naturschwur
Przysięga krwi|Blood oath|Blutschwur
Drapieżny pęd|Predatory rush|Raubtierdrang
Powracający Świt|Returning Dawn|Wiederkehrende Morgendämmerung
Salwa Korzeni|Root Volley|Wurzelsalve
Serce Zamieci|Blizzard Heart|Schneesturmherz
zwycięzcy|victors|Sieger
wymagany triumf|victory required|Sieg erforderlich
próba|trial|Prüfung
minut|minutes|Minuten
Podstawowa próba|Base trial|Grundprüfung
około|about|etwa
Zbieraj XP, nie stój w miejscu|Collect XP, keep moving|Sammle EP und bleibe in Bewegung
zbieraj XP, nie stój w miejscu|collect XP, keep moving|sammle EP und bleibe in Bewegung
Postać|Hero|Held
moce|skills|Fähigkeiten
postać|hero|Held
pauza|pause|Pause
interakcja|interact|interagieren
moc bohatera|ultimate|ultimative Fähigkeit
Zdobyte|Earned|Verdient
Poziomy budujesz podczas wyprawy.|Build levels during the expedition.|Stufen werden während der Expedition aufgebaut.
Szczęście|Luck|Glück
Suma|Total|Gesamt
Odzyskane HP|Health restored|Wiederhergestellte LP
blok pancerza/osłon|armor/shield absorption|Rüstungs-/Schildabsorption
Uniki|Dodges|Ausweichmanöver
mikstury|potions|Tränke
krytyki|critical hits|kritische Treffer
Klątwy|Curses|Flüche
Triumf|Victory|Sieg
Upadek|Defeat|Niederlage
Wybrano|Selected|Ausgewählt
ulepszenie|upgrade|Verbesserung
Wolne miejsce|Empty slot|Freier Platz
Zdobądź umiejętność podczas awansu.|Gain a skill when leveling up.|Erhalte eine Fähigkeit beim Stufenaufstieg.
Krótka niewrażliwość i szybki ruch.|Brief invulnerability and swift movement.|Kurze Unverwundbarkeit und schnelle Bewegung.
Mutacje Pieczęci / RIFT|Seal / RIFT mutations|Siegel- / RIFT-Mutationen
Podstawowy pocisk.|Basic projectile.|Standardprojektil.
Przedmiot pasywny. Zajmuje jedno z sześciu miejsc.|Passive item. Takes one of six slots.|Passiver Gegenstand. Belegt einen von sechs Plätzen.
Strażnik tej lokacji.|Guardian of this location.|Wächter dieses Ortes.
Znalezione wyposażenie i kronika odkryć|Found equipment and discovery chronicle|Gefundene Ausrüstung und Entdeckungschronik
Kampania · statystyki obecnego bohatera|Campaign · current hero stats|Kampagne · Werte des aktuellen Helden
Aktywne umiejętności|Active skills|Aktive Fähigkeiten
Jednorazowe nagrody konta · odbiór automatyczny|One-time account rewards · collected automatically|Einmalige Kontobelohnungen · automatische Vergabe
Doświadczenie do następnego poziomu|Experience to next level|Erfahrung bis zur nächsten Stufe
do następnego poziomu|to next level|bis zur nächsten Stufe
HP|HP|LP
XP|XP|EP
CDR|CDR|ABKL.
Jakość efektów|Effect quality|Effektqualität
pełna|full|voll
oszczędna|low|sparsam
Wyprzedzenie kamery|Camera lead|Kameravorlauf
Ruch jest ważniejszy od celowania. Podczas walki z bossem przesunięcie jest mniejsze.|Movement matters more than aiming. Camera offset is smaller during boss fights.|Bewegung ist wichtiger als Zielen. Bei Bosskämpfen ist der Kameraversatz kleiner.
Zablokowanego bohatera odblokujesz bezpośrednio na jego karcie za odłamki bohatera. Menu obsługujesz strzałkami i Enterem.|Unlock a locked hero directly on their card using hero shards. Use arrow keys and Enter to navigate.|Schalte gesperrte Helden direkt auf ihrer Karte mit Heldensplittern frei. Navigiere mit Pfeiltasten und Enter.
premie są osobne dla każdej postaci|bonuses are separate for each hero|Boni gelten für jeden Helden getrennt
Wybór wyprawy|Choose expedition|Expedition wählen
Wybór|Choice|Auswahl
wybór|choice|Auswahl
Rozwiń broń i spróbuj ponownie.|Upgrade your weapon and try again.|Verbessere deine Waffe und versuche es erneut.
Twoje wyposażenie|Your build|Dein Build
Ukończony etap|Completed stage|Abgeschlossener Abschnitt
Zakończenie wyprawy|Expedition ended|Expedition beendet
kontakt|contact|Kontakt
pola obszarowe|area hazards|Flächengefahren
obrażenia w czasie|damage over time|Schaden über Zeit
otoczenie|environment|Umgebung
Odbicie ataku|Damage reflection|Schadensreflexion
Inne obrażenia|Other damage|Anderer Schaden
Otrzymane|Received|Erhalten
Strażnik|Guardian|Wächter
Egzekutor|Executioner|Vollstrecker
Arcykapłan|High Priest|Hohepriester
Bestia|Beast|Bestie
Spaczony|Corrupted|Verderbt
Brak celu|No target|Kein Ziel
Naciśnij klawisz|Press a key|Taste drücken
Oddech|Breather|Verschnaufpause
Natarcie|Assault|Angriff
Polowanie|Hunt|Jagd
Kronika wyprawy|Expedition record|Expeditionsbericht
Powrót|Back|Zurück
Anuluj|Cancel|Abbrechen
Zamknij|Close|Schließen
Pomiń|Skip|Überspringen
Odejdź|Leave|Verlassen
Odbierz|Claim|Abholen
Tak|Yes|Ja
Nie|No|Nein
Start|Start|Start
Synergie:|Synergies:|Synergien:
Kontrola|Control|Kontrolle
Azyl|Refuge|Zuflucht
podstawowy|default|Standard
Srebrzysty|Silver|Silbern
Klasyczny|Classic|Klassisch
Schemat Berła Burzy|Storm Scepter blueprint|Sturmzepter-Bauplan
Schemat Kosy Umarłych|Reaper Scythe blueprint|Todessensen-Bauplan
RIFT · do poziomu|RIFT · up to level|RIFT · bis Stufe
Wybierz|Choose|Wählen
Otwórz|Open|Öffnen
Umiejętność aktywna|Active skill|Aktive Fähigkeit
Talent pasywny|Passive talent|Passives Talent
Dar legendarny|Legendary gift|Legendäre Gabe
Moc|Power|Kraft
TALENT|TALENT|TALENT
Włączony|On|An
Włączone|On|An
Aktualizacja|Update|Update
Plan ukończony|Plan completed|Plan abgeschlossen
Czysta Wyprawa|Pure Expedition|Reine Expedition
statystyki|stats|Werte
punkty|points|Punkte
pkt|points|Punkte
Rangi|Ranks|Ränge
Maks.|Max.|Max.
bronie|weapons|Waffen
broń|weapon|Waffe
przedmioty|items|Gegenstände
wyposażenie|equipment|Ausrüstung
żywioł|element|Element
fire|fire|Feuer
ice|ice|Eis
nature|nature|Natur
stone|stone|Stein
poison|poison|Gift
lightning|lightning|Blitz
arcane|arcane|Arkan
blood|blood|Blut
wind|wind|Wind
water|water|Wasser
synergii|synergies|Synergien
rekord przeżycia|survival record|Überlebensrekord
najwyższy RIFT|highest RIFT|höchster RIFT
Szczelina ucichła|The rift is silent|Der Riss ist verstummt
ZAMKNIJ SZCZELINĘ|CLOSE THE RIFT|RISS SCHLIESSEN
ZEJDŹ GŁĘBIEJ|DESCEND DEEPER|TIEFER HINABSTEIGEN
ZEMSTA DOKONANA|REVENGE COMPLETE|RACHE VOLLENDET
CEL BUILDU UKOŃCZONY|BUILD GOAL COMPLETE|BUILD-ZIEL ERREICHT
Korzyść|Benefit|Vorteil
Wada|Drawback|Nachteil
Współpracuje z|Works with|Passt zu
Przeklęty relikt · tylko na tę wyprawę|Cursed relic · this expedition only|Verfluchtes Relikt · nur diese Expedition
Rozumiem wadę — przyjmij klątwę|I accept the drawback — take the curse|Nachteil akzeptieren — Fluch annehmen
Odrzuć|Reject|Ablehnen
Źródło Odnowy|Restoration Spring|Quelle der Erneuerung
Źródło odnowy|Restoration Spring|Quelle der Erneuerung
Skrzynia wędrowca|Wanderer chest|Wanderertruhe
Wybór wyprawy|Expedition selection|Expeditionsauswahl
GŁĘBIA|DEPTHS|TIEFE
Ochrona|Protection|Schutz
Regeneracja|Regeneration|Regeneration
Ładowanie|Loading|Laden
Przetrwaj polowanie|Survive the hunt|Überlebe die Jagd
Runda ukończona|Round completed|Runde abgeschlossen
Wersja|Version|Version
Za mało|Not enough|Nicht genug
Dodatkowe odkrycia|Additional discoveries|Zusätzliche Entdeckungen
bez premii bojowych|no combat bonuses|ohne Kampfboni
Ochrona zapisu|Save protection|Spielstandschutz
HP|HP|LP
1/2|1/2|1/2
Jakość świata|World quality|Weltqualität
Wzorzec graficzny Podziemi. Każdy tryb zachowuje ostrzeżenia przeciwników.|Dungeon art preview. Every quality level preserves enemy warnings.|Grafikvorschau der Verliese. Jede Qualitätsstufe behält Gegnerwarnungen bei.
Zielarz|Herbalist|Kräuterkundiger
Zamknięta brama|Sealed gate|Versiegeltes Tor
Żelazna Pieczęć|Iron Seal|Eisernes Siegel
Zniszczony most|Broken bridge|Zerstörte Brücke
Runiczny ołtarz|Runic altar|Runenaltar
Krypta strażnika|Guardian crypt|Wächtergruft
Brama Kustosza|Custodian gate|Tor des Hüters
Krypta Przysięgi|Crypt of the Oath|Gruft des Eides
Biblioteka Pieczęci|Library of the Seal|Bibliothek des Siegels
Wygasła Kuźnia|Cold Forge|Erloschene Schmiede
Cele Strażników|Wardens' Cells|Wächterzellen
`);

;

/* Module: js/localization-descriptions.js */
'use strict';
Aeren.Locale.add(`
Kupiec po rundzie|Merchant after the round|Händler nach der Runde
Wyprawę zaczynasz z 0 złota. Wydaj zdobycze zakończonej rundy albo zachowaj je na później. Maksymalnie dwa zakupy.|You start with 0 gold. Spend the completed round's earnings or save them for later. Up to two purchases.|Du startest mit 0 Gold. Gib die Einnahmen der abgeschlossenen Runde aus oder spare sie. Höchstens zwei Käufe.
Zakończ zakupy i kontynuuj|Finish shopping and continue|Einkauf beenden und fortfahren
Zielarz przy ołtarzu|Herbalist by the altar|Kräuterkundiger am Altar
Mikstury trafiają do zapasu. Maksymalnie dwie mikstury w zapasie i dwa zakupy na rundę. Możesz wrócić po zdobyciu złota. Podczas zakupów walka jest wstrzymana.|Potions go into your inventory. Carry up to two potions and make two purchases per round. Return after earning gold. Combat pauses while shopping.|Tränke kommen in deinen Vorrat. Du kannst zwei Tränke tragen und zweimal pro Runde kaufen. Kehre mit verdientem Gold zurück. Der Kampf pausiert beim Einkauf.
Przywraca 15% maksymalnego HP.|Restores 15% of maximum HP.|Stellt 15% der maximalen LP wieder her.
Przywraca 30% maksymalnego HP i usuwa podpalenie oraz truciznę.|Restores 30% of maximum HP and removes burning and poison.|Stellt 30% der maximalen LP wieder her und entfernt Brennen und Gift.
Przywraca 20% maksymalnego HP przez 5 sekund. Silne trafienie przerywa leczenie.|Restores 20% of maximum HP over 5 seconds. A heavy hit interrupts healing.|Stellt über 5 Sekunden 20% der maximalen LP wieder her. Ein schwerer Treffer unterbricht die Heilung.
Pełny zapas mikstur|Potion inventory full|Trankvorrat voll
Wyczerpano zapasy na tę rundę|Sold out for this round|Für diese Runde ausverkauft
Sakiewka to złoto dostępne do wydania. Złoto rundy to tylko licznik zdobyczy. Premię 60 złota otrzymujesz raz na nową wyprawę, nie przy wczytaniu ani co rundę.|Your purse is the gold available to spend. Round gold only tracks earnings. You receive 60 starting gold once per new expedition, never on loading or each round.|Dein Beutel enthält das verfügbare Gold. Rundengold zählt nur deine Einnahmen. Du erhältst einmal pro neuer Expedition 60 Startgold, nicht beim Laden oder in jeder Runde.
Pierwsza oferta: zwykła broń lub przedmiot za 60 złota.|First offer: a common weapon or item for 60 gold.|Erstes Angebot: eine gewöhnliche Waffe oder ein Gegenstand für 60 Gold.
Podane szanse jakości dotyczą pozostałych ofert. Możesz też zachować złoto i rozpocząć rundę bez zakupu.|The listed rarity chances apply to the other offers. You can also save your gold and start the round without buying.|Die angegebenen Seltenheitschancen gelten für die anderen Angebote. Du kannst dein Gold auch sparen und die Runde ohne Kauf beginnen.
Dobrowolne zakończenie wyprawy|Expedition ended voluntarily|Expedition freiwillig beendet
Język gry|Game language|Spielsprache
Automatycznie wystrzeliwuje płonącą kulę w najbliższego wroga.|Automatically fires a burning orb at the nearest enemy.|Feuert automatisch eine brennende Kugel auf den nächsten Gegner.
Wystrzeliwuje lodowe odłamki, które spowalniają trafionych wrogów.|Fires ice shards that slow enemies on hit.|Feuert Eissplitter, die getroffene Gegner verlangsamen.
Regularnie uderza piorunem w najbliższego wroga i razi kolejne cele.|Regularly strikes the nearest enemy with lightning that chains to other targets.|Trifft regelmäßig den nächsten Gegner mit einem Blitz, der auf weitere Ziele überspringt.
Wystrzeliwuje zarodniki zatruwające wrogów przez kilka sekund.|Fires spores that poison enemies for several seconds.|Feuert Sporen, die Gegner mehrere Sekunden vergiften.
Przywołuje ostrza krążące wokół bohatera i raniące pobliskich wrogów.|Summons orbiting blades that damage nearby enemies.|Beschwört kreisende Klingen, die nahe Gegner verletzen.
Przywołuje leśnego ducha, który samodzielnie ostrzeliwuje przeciwników.|Summons a forest spirit that attacks enemies independently.|Beschwört einen Waldgeist, der Gegner selbstständig beschießt.
Co kilka sekund uwalnia falę energii wokół bohatera.|Releases a wave of energy around the hero every few seconds.|Entfesselt alle paar Sekunden eine Energiewelle um den Helden.
Regularnie wystrzeliwuje wachlarz przebijających strzał.|Regularly fires a fan of piercing arrows.|Feuert regelmäßig einen Fächer durchschlagender Pfeile.
Rozrzuca olej, który spowalnia i oznacza trafionych przeciwników.|Scatters oil that slows and marks enemies on hit.|Verteilt Öl, das getroffene Gegner verlangsamt und markiert.
Wystrzeliwuje wodne pociski nakładające efekt wilgoci.|Fires water projectiles that apply wetness.|Feuert Wasserprojektile, die Nässe verursachen.
Przywołuje meteor w wybranym miejscu. Po krótkim ostrzeżeniu następuje eksplozja.|Summons a meteor at the selected location. A short warning precedes the explosion.|Beschwört einen Meteor am Zielort. Nach einer kurzen Warnung folgt die Explosion.
Tworzy przy celowniku lodową burzę, która rani i spowalnia wrogów.|Creates an ice storm at the crosshair that damages and slows enemies.|Erzeugt am Fadenkreuz einen Eissturm, der Gegner verletzt und verlangsamt.
Uderza piorunami w grupę przeciwników wokół celownika.|Strikes enemies around the crosshair with lightning.|Trifft Gegner um das Fadenkreuz mit Blitzen.
Tworzy w wybranym miejscu toksyczną strefę zadającą obrażenia w czasie.|Creates a toxic area at the chosen location that deals damage over time.|Erzeugt am Zielort eine Giftzone, die Schaden über Zeit verursacht.
Korzenie ranią wrogów w wybranym miejscu i zatrzymują ich ruch.|Roots damage enemies at the selected location and stop their movement.|Wurzeln verletzen Gegner am Zielort und halten sie fest.
Kamienna osłona zmniejsza otrzymywane obrażenia i przywraca część życia.|A stone shield reduces incoming damage and restores some health.|Ein Steinschild verringert erlittenen Schaden und stellt Leben wieder her.
Teleportuje w kierunku celowania, zapewnia krótką niewrażliwość i uwalnia eksplozję.|Teleports toward the aim point, grants brief invulnerability and releases an explosion.|Teleportiert in Zielrichtung, gewährt kurze Unverwundbarkeit und löst eine Explosion aus.
Tworzy wir przyciągający i raniący przeciwników.|Creates a vortex that pulls in and damages enemies.|Erzeugt einen Wirbel, der Gegner anzieht und verletzt.
Przywołuje duchy bestii, które przez krótki czas ostrzeliwują wrogów.|Summons beast spirits that attack enemies for a short time.|Beschwört Bestiengeister, die Gegner kurzzeitig beschießen.
Rani wrogów wokół celownika i leczy bohatera za trafione cele.|Damages enemies around the crosshair and heals the hero for targets hit.|Verletzt Gegner um das Fadenkreuz und heilt den Helden für getroffene Ziele.
Zwiększa wszystkie zadawane obrażenia.|Increases all damage dealt.|Erhöht sämtlichen verursachten Schaden.
Zwiększa szybkość ataku broni.|Increases weapon attack speed.|Erhöht das Angriffstempo der Waffen.
Zwiększa szybkość ataków broni.|Increases weapon attack speed.|Erhöht das Angriffstempo der Waffen.
Zwiększa maksymalne życie i natychmiast leczy bohatera.|Increases maximum health and immediately heals the hero.|Erhöht das maximale Leben und heilt den Helden sofort.
Zwiększa pancerz i zmniejsza otrzymywane obrażenia.|Increases armor and reduces incoming damage.|Erhöht die Rüstung und verringert erlittenen Schaden.
Zwiększa szybkość ruchu bohatera.|Increases the hero's movement speed.|Erhöht das Bewegungstempo des Helden.
Zwiększa szansę trafienia krytycznego.|Increases critical hit chance.|Erhöht die kritische Trefferchance.
Skraca czas odnawiania umiejętności.|Shortens skill cooldowns.|Verkürzt die Abklingzeiten von Fähigkeiten.
Zwiększa obszar działania umiejętności.|Increases skill area of effect.|Vergrößert den Wirkungsbereich von Fähigkeiten.
Dodaje pocisk do salw broni.|Adds a projectile to weapon volleys.|Fügt Waffensalven ein Projektil hinzu.
Trafienia przywracają niewielką część zadanych obrażeń jako życie.|Hits restore a small portion of damage dealt as health.|Treffer stellen einen kleinen Teil des verursachten Schadens als Leben wieder her.
Zwiększa szansę na rzadsze nagrody.|Increases the chance of rarer rewards.|Erhöht die Chance auf seltenere Belohnungen.
Zwiększa ilość zdobywanego doświadczenia.|Increases experience earned.|Erhöht die erhaltene Erfahrung.
Zwiększa zasięg przyciągania doświadczenia i łupu.|Increases the attraction range of experience and loot.|Erhöht die Anziehungsreichweite für Erfahrung und Beute.
Zwiększa szybkość pocisków bohatera.|Increases the speed of the hero's projectiles.|Erhöht das Tempo der Heldenprojektile.
Zwiększa szansę całkowitego uniknięcia obrażeń.|Increases the chance to completely evade damage.|Erhöht die Chance, Schaden vollständig auszuweichen.
Raz na wyprawę wskrzesza bohatera z częścią życia i spala pobliskich wrogów.|Once per expedition, revives the hero with some health and burns nearby enemies.|Belebt den Helden einmal pro Expedition mit etwas Leben wieder und verbrennt nahe Gegner.
Pokonani przeciwnicy wybuchają, raniąc pobliskie cele.|Defeated enemies explode, damaging nearby targets.|Besiegte Gegner explodieren und verletzen nahe Ziele.
Broń startowa kolejno używa ognia, lodu, piorunów i trucizny.|The starting weapon cycles through fire, ice, lightning and poison.|Die Startwaffe wechselt zwischen Feuer, Eis, Blitz und Gift.
Co pewien czas mocno spowalnia wszystkich przeciwników.|Periodically slows all enemies significantly.|Verlangsamt regelmäßig alle Gegner stark.
Znacznie zwiększa życie i obszar umiejętności, ale zmniejsza szybkość ruchu.|Greatly increases health and skill area, but reduces movement speed.|Erhöht Leben und Fähigkeitsfläche deutlich, verringert aber das Bewegungstempo.
Trafienia krytyczne natychmiast pokonują osłabionych zwykłych przeciwników.|Critical hits instantly defeat weakened normal enemies.|Kritische Treffer besiegen geschwächte normale Gegner sofort.
Regularnie leczy bohatera i uwalnia falę energii natury.|Regularly heals the hero and releases a wave of nature energy.|Heilt den Helden regelmäßig und entfesselt eine Naturenergiewelle.
Unik wywołuje eksplozję i odnawia się szybciej.|Dodging triggers an explosion and recharges faster.|Ausweichen löst eine Explosion aus und lädt schneller auf.
Regularnie przywołuje pioruny uderzające pobliskich przeciwników.|Regularly summons lightning to strike nearby enemies.|Beschwört regelmäßig Blitze gegen nahe Gegner.
Wystrzeliwuje szybkie strzały. Wyższe poziomy dodają przebicie.|Fires fast arrows. Higher levels add piercing.|Feuert schnelle Pfeile. Höhere Stufen fügen Durchschlag hinzu.
Miota płonące kule. Wyższe poziomy dodają eksplozję przy trafieniu.|Hurls burning orbs. Higher levels add explosions on impact.|Schleudert brennende Kugeln. Höhere Stufen erzeugen Explosionen beim Treffer.
Szybko wystrzeliwuje lodowe pociski spowalniające przeciwników.|Rapidly fires icy projectiles that slow enemies.|Feuert schnell Eisprojektile, die Gegner verlangsamen.
Miota ciężkim pociskiem; po ulepszeniu wywołuje eksplozję.|Hurls a heavy projectile; upgrades add an explosion.|Schleudert ein schweres Projektil; Verbesserungen fügen eine Explosion hinzu.
Miota parą krótkich, zatrutych ostrzy.|Hurls a pair of short poisoned blades.|Schleudert zwei kurze vergiftete Klingen.
Miota elektrycznymi pociskami; po ulepszeniu przeskakują między celami.|Hurls electric projectiles that chain between targets after upgrading.|Schleudert elektrische Projektile, die nach Verbesserungen zwischen Zielen springen.
Miota szerokim sierpem. Ulepszenia dodają przebicie i powrót.|Hurls a wide sickle. Upgrades add piercing and return flight.|Schleudert eine breite Sichel. Verbesserungen fügen Durchschlag und Rückflug hinzu.
Wystrzeliwuje wachlarz magicznych pocisków.|Fires a fan of magical projectiles.|Feuert einen Fächer magischer Projektile.
Wystrzeliwuje potężne bełty przebijające wielu przeciwników.|Fires powerful bolts that pierce multiple enemies.|Feuert mächtige Bolzen, die mehrere Gegner durchschlagen.
Miota ognistymi bombami wybuchającymi przy trafieniu.|Hurls fire bombs that explode on impact.|Schleudert Feuerbomben, die beim Aufprall explodieren.
Wystrzeliwuje pocisk cierniowej energii.|Fires a projectile of thorn energy.|Feuert ein Projektil aus Dornenenergie.
Wystrzeliwuje wąski pocisk przebijający wielu przeciwników.|Fires a narrow projectile that pierces multiple enemies.|Feuert ein schmales Projektil, das mehrere Gegner durchschlägt.
Miota szybkimi włóczniami o dużym zasięgu.|Hurls fast, long-range spears.|Schleudert schnelle Speere mit hoher Reichweite.
Wystrzeliwuje cierniowe strzały; ulepszenia tworzą przebijający wachlarz.|Fires thorn arrows; upgrades create a piercing fan.|Feuert Dornenpfeile; Verbesserungen erzeugen einen durchschlagenden Fächer.
Miota ciężkim pociskiem; ulepszenia dodają eksplozję, odrzut i ogłuszenie.|Hurls a heavy projectile; upgrades add explosions, knockback and stun.|Schleudert ein schweres Projektil; Verbesserungen fügen Explosion, Rückstoß und Betäubung hinzu.
Wystrzeliwuje potężną strzałę przebijającą kilku przeciwników.|Fires a powerful arrow that pierces several enemies.|Feuert einen mächtigen Pfeil, der mehrere Gegner durchschlägt.
Uwalnia stożek ognia, który rani i odrzuca przeciwników.|Releases a cone of fire that damages and knocks back enemies.|Entfesselt einen Feuerkegel, der Gegner verletzt und zurückstößt.
Błyskawicznie przesuwa Nivę i pozostawia spowalniający lodowy ślad.|Swiftly moves Niva and leaves an icy trail that slows enemies.|Versetzt Niva blitzschnell und hinterlässt eine verlangsamende Eisspur.
Uderza przed sobą, odrzuca wrogów i zapewnia krótką osłonę.|Strikes forward, knocks enemies back and grants a brief shield.|Schlägt nach vorn, stößt Gegner zurück und gewährt einen kurzen Schild.
Oznacza przeciwnika. Ataki broni zadają mu zwiększone obrażenia.|Marks an enemy. Weapon attacks deal increased damage to it.|Markiert einen Gegner. Waffenangriffe verursachen erhöhten Schaden an ihm.
Przywołuje fale korzeni w wybranym obszarze oraz leśne duchy.|Summons waves of roots in the selected area and forest spirits.|Beschwört Wurzelwellen im Zielgebiet und Waldgeister.
Przywołuje serię meteorów uderzających wokół wybranego miejsca.|Summons a series of meteors around the selected location.|Beschwört eine Meteorserie um den Zielort.
Zamraża wrogów wokół celownika i uwalnia pierścienie lodowych włóczni.|Freezes enemies around the crosshair and releases rings of ice spears.|Friert Gegner um das Fadenkreuz ein und entfesselt Ringe aus Eisspeeren.
Uwalnia potężne fale uderzeniowe i zapewnia czasową niewrażliwość.|Releases powerful shockwaves and grants temporary invulnerability.|Entfesselt mächtige Schockwellen und gewährt vorübergehende Unverwundbarkeit.
Wykonuje serię widmowych cięć wokół celownika i na krótko unika obrażeń.|Performs spectral slashes around the crosshair and briefly avoids damage.|Führt Geisterschnitte um das Fadenkreuz aus und vermeidet kurzzeitig Schaden.
Pierwsza oferta broni częściej pasuje do bohatera.|The first weapon offer is more likely to suit the hero.|Das erste Waffenangebot passt häufiger zum Helden.
Pierwsza oferta zawiera dwie różne dostępne bronie.|The first offer contains two different available weapons.|Das erste Angebot enthält zwei verschiedene verfügbare Waffen.
Pierwsze przelosowanie wyposażenia jest darmowe.|The first equipment reroll is free.|Das erste Neuwürfeln der Ausrüstung ist kostenlos.
Wskazuje kierunek do pierwszej skrzyni.|Points toward the first chest.|Zeigt die Richtung zur ersten Truhe.
Wskazuje także typ skrzyni.|Also reveals the chest type.|Zeigt auch den Truhentyp.
Pierwsza skrzynia daje dodatkowy wybór wyposażenia.|The first chest grants an extra equipment choice.|Die erste Truhe gewährt eine zusätzliche Ausrüstungswahl.
Start bez mikstur; pierwsze Źródło daje dużą miksturę.|Start without potions; the first Spring grants a large potion.|Start ohne Tränke; die erste Quelle gewährt einen großen Trank.
Pierwsza użyta mikstura pozostawia pole regeneracji na 5 s.|The first potion used leaves a regeneration field for 5 seconds.|Der erste benutzte Trank hinterlässt 5 Sekunden lang ein Regenerationsfeld.
W pierwszym Źródle wybierasz dużą miksturę lub regenerację.|At the first Spring, choose a large potion or regeneration.|Wähle an der ersten Quelle einen großen Trank oder Regeneration.
Raz na wyprawę przelosuj ofertę umiejętności.|Reroll a skill offer once per expedition.|Würfle ein Fähigkeitsangebot einmal pro Expedition neu.
Możesz zatrzymać jedną kartę.|You may keep one card.|Du darfst eine Karte behalten.
Przelosowanie zawiera składnik pasujący do posiadanej synergii, jeśli taki jest dostępny.|The reroll includes a component matching an owned synergy, if available.|Das neue Angebot enthält eine passende Komponente für eine vorhandene Synergie, falls verfügbar.
Pierwsza synergia: jej bezpośrednie obrażenia +8%.|First synergy: +8% direct damage.|Erste Synergie: +8% direkter Schaden.
Dodatkowo przy aktywacji odpycha pobliskich wrogów.|Also pushes nearby enemies back on activation.|Stößt bei Aktivierung zusätzlich nahe Gegner zurück.
Wybierz: +12% obrażeń tej synergii lub jednorazowe odnowienie uniku.|Choose: +12% damage for this synergy or an immediate one-time dodge reset.|Wähle: +12% Schaden dieser Synergie oder einmaliges sofortiges Aufladen des Ausweichens.
Pierwszy miniboss ma +20% HP i +10% obrażeń; daje dodatkowy wybór wyposażenia.|The first miniboss has +20% HP and +10% damage; grants an extra equipment choice.|Der erste Miniboss hat +20% LP und +10% Schaden; gewährt eine zusätzliche Ausrüstungswahl.
Dodatkowa nagroda ma cztery opcje zamiast trzech.|The bonus reward offers four options instead of three.|Die Zusatzbelohnung bietet vier statt drei Optionen.
Możesz zamiast dodatkowej nagrody wylosować relikt.|You may roll a relic instead of the bonus reward.|Du kannst statt der Zusatzbelohnung ein Relikt auswürfeln.
Ujawnia jeden punkt zainteresowania.|Reveals one point of interest.|Enthüllt einen interessanten Ort.
Ujawnia dwa punkty zainteresowania.|Reveals two points of interest.|Enthüllt zwei interessante Orte.
Pokazuje również ich rodzaje.|Also shows their types.|Zeigt auch ihre Arten.
Raz na wyprawę przywraca 10% HP, po wykorzystaniu Serca Feniksa.|Once per expedition, restores 10% HP after Phoenix Heart has been used.|Stellt einmal pro Expedition 10% LP wieder her, nachdem das Phönixherz verbraucht wurde.
Przywraca 20% HP.|Restores 20% HP.|Stellt 20% LP wieder her.
Po powrocie daje 3 s niewrażliwości.|Grants 3 seconds of invulnerability after revival.|Gewährt nach der Wiederbelebung 3 Sekunden Unverwundbarkeit.
Pierwsze trafienie rozszczepia włócznię na dwa odłamki o 30% siły.|The first hit splits the spear into two shards at 30% power.|Der erste Treffer spaltet den Speer in zwei Splitter mit 30% Stärke.
Powracający sierp tworzy krótkotrwałą widmową kopię o 30% siły.|The returning sickle creates a short-lived spectral copy at 30% power.|Die zurückkehrende Sichel erzeugt eine kurzlebige Geisterkopie mit 30% Stärke.
Przebity cel uwalnia dwie boczne strzały o 25% siły.|A pierced target releases two side arrows at 25% power.|Ein durchschlagenes Ziel setzt zwei seitliche Pfeile mit 25% Stärke frei.
Trafienie rozprowadza wodę na dwóch pobliskich celach.|A hit spreads water to two nearby targets.|Ein Treffer verteilt Wasser auf zwei nahe Ziele.
Trafienie wywołuje po 0,4 s drugi wstrząs o 25% siły.|A hit triggers a second shockwave after 0.4 seconds at 25% power.|Ein Treffer löst nach 0,4 Sekunden eine zweite Schockwelle mit 25% Stärke aus.
Trafienie zostawia przez 2 s mały płomień o 12% siły.|A hit leaves a small flame for 2 seconds at 12% power.|Ein Treffer hinterlässt 2 Sekunden lang eine kleine Flamme mit 12% Stärke.
Co czwarta salwa przywołuje opóźniony meteor.|Every fourth volley summons a delayed meteor.|Jede vierte Salve beschwört einen verzögerten Meteor.
Co piąta salwa pozostawia linię trzech korzeni.|Every fifth volley leaves a line of three roots.|Jede fünfte Salve hinterlässt eine Linie aus drei Wurzeln.
Co trzecia salwa tworzy na trafionym celu krótki piorunowy krąg.|Every third volley creates a brief lightning circle on the target.|Jede dritte Salve erzeugt einen kurzen Blitzkreis am Ziel.
Główna włócznia wraca do bohatera.|The main spear returns to the hero.|Der Hauptspeer kehrt zum Helden zurück.
Wstrząs tworzy trzy odrzucające, kamienne odłamki.|The shockwave creates three stone shards that knock enemies back.|Die Schockwelle erzeugt drei Steinsplitter, die Gegner zurückstoßen.
Zabójstwo kosą na 4 s zwiększa jej rozmiar; maksymalnie +50%.|A scythe kill increases its size for 4 seconds, up to +50%.|Ein Sensen-Todesstoß vergrößert sie 4 Sekunden lang, höchstens um 50%.
Podpaleni, naoliwieni wrogowie otrzymują podwójny DoT.|Burning, oiled enemies take double damage over time.|Brennende, eingeölte Gegner erleiden doppelten Schaden über Zeit.
Pioruny na mokrych celach przeskakują na 4 dodatkowych wrogów.|Lightning on wet targets chains to 4 additional enemies.|Blitze auf nassen Zielen springen auf 4 zusätzliche Gegner über.
Krytyki na zatrutych celach uwalniają chmurę jadu.|Critical hits on poisoned targets release a venom cloud.|Kritische Treffer auf vergiftete Ziele erzeugen eine Giftwolke.
Dash zostawia pas lodowej burzy.|Dodging leaves a strip of ice storm.|Ausweichen hinterlässt eine Eissturmspur.
Woda na płonącym celu powoduje parową eksplozję.|Water on a burning target triggers a steam explosion.|Wasser auf einem brennenden Ziel löst eine Dampfexplosion aus.
Krytyki na spowolnionych celach zadają +60% obrażeń.|Critical hits on slowed targets deal +60% damage.|Kritische Treffer auf verlangsamte Ziele verursachen +60% Schaden.
Pociski towarzyszy zatruwają.|Companion projectiles poison enemies.|Begleiterprojektile vergiften Gegner.
Krążące ostrza podpalają.|Orbiting blades ignite enemies.|Kreisende Klingen entzünden Gegner.
Krążące ostrza uwalniają pioruny.|Orbiting blades release lightning.|Kreisende Klingen setzen Blitze frei.
Puls echa leczy 2 HP za trafiony cel.|Echo Pulse heals 2 HP per target hit.|Echopuls heilt 2 LP pro getroffenem Ziel.
Uścisk korzeni przywołuje dwóch duchów.|Root Grasp summons two spirits.|Wurzelgriff beschwört zwei Geister.
Wir ma podwojoną siłę przyciągania i dłuższy czas trwania.|The vortex has double pulling power and lasts longer.|Der Wirbel hat doppelte Anziehungskraft und hält länger an.
Szkarłatna nić zawsze trafia krytycznie.|Crimson Thread always deals critical hits.|Scharlachfaden trifft immer kritisch.
Otrzymane obrażenia zatruwają pobliskich wrogów.|Taking damage poisons nearby enemies.|Erlittener Schaden vergiftet nahe Gegner.
Deszcz piór odbija dodatkową salwę w przeciwnym kierunku.|Feather Rain fires an extra volley in the opposite direction.|Federregen feuert eine zusätzliche Salve in Gegenrichtung.
Teleport skraca odnowienie dashu o 1 s i uwalnia 8 pocisków.|Teleport shortens dodge cooldown by 1 second and releases 8 projectiles.|Teleport verkürzt die Ausweich-Abklingzeit um 1 Sekunde und setzt 8 Projektile frei.
Lodowa burza unieruchamia mokrych wrogów.|The ice storm roots wet enemies.|Der Eissturm hält nasse Gegner fest.
Meteor leczy 3 HP za każdy trafiony cel.|The meteor heals 3 HP per target hit.|Der Meteor heilt 3 LP pro getroffenem Ziel.
Obszar eksplozji +45%.|Explosion area +45%.|Explosionsfläche +45%.
Własne eksplozje zadają Ci 12% swoich obrażeń, gdy stoisz w ich zasięgu.|Your explosions deal 12% of their damage to you when you stand within range.|Eigene Explosionen verursachen bei dir 12% ihres Schadens, wenn du in Reichweite stehst.
Zabicie elity lub minibossa przywraca 22% HP.|Killing an elite or miniboss restores 22% HP.|Das Töten eines Elitegegners oder Minibosses stellt 22% LP wieder her.
Zwykłe leczenie, regeneracja i mikstury nie leczą.|Normal healing, regeneration and potions have no effect.|Normale Heilung, Regeneration und Tränke heilen nicht.
Pociski broni odbijają się do dwóch pobliskich celów.|Weapon projectiles bounce to up to two nearby targets.|Waffenprojektile springen auf bis zu zwei nahe Ziele über.
Pierwsze trafienie −15%, każde odbicie zachowuje 60% obrażeń poprzedniego.|First hit −15%; each bounce retains 60% of the previous hit's damage.|Erster Treffer −15%; jeder Abpraller behält 60% des vorherigen Schadens.
Poniżej 30% HP: +35% obrażeń i +25% szybkości ataku.|Below 30% HP: +35% damage and +25% attack speed.|Unter 30% LP: +35% Schaden und +25% Angriffstempo.
Powyżej 30% HP: −10% obrażeń. Otrzymujesz +10% obrażeń.|Above 30% HP: −10% damage. You take +10% damage.|Über 30% LP: −10% Schaden. Du erleidest +10% Schaden.
Moc F jest zablokowana.|The ultimate is disabled.|Die ultimative Fähigkeit ist gesperrt.
Bezpośrednie obrażenia Q/E/R +40%.|Direct Q/E/R damage +40%.|Direkter Q/E/R-Schaden +40%.
Broń może rozwinąć się do poziomu 7, jeżeli obsługuje Przebudzenie.|The weapon can reach level 7 if it supports Awakening.|Die Waffe kann Stufe 7 erreichen, wenn sie Erwachen unterstützt.
Zostaje tylko broń startowa; dwie dodatkowe bronie są bezpowrotnie usuwane z tej wyprawy.|Only the starting weapon remains; both extra weapons are permanently removed from this expedition.|Nur die Startwaffe bleibt; beide Zusatzwaffen werden dauerhaft aus dieser Expedition entfernt.
Meteory, młoty, eksplozje|Meteors, hammers, explosions|Meteore, Hämmer, Explosionen
Bronie pociskowe|Projectile weapons|Projektilwaffen
Polowanie na elity|Elite hunting|Elitenjagd
Ryzykowna walka na niskim HP|Risky combat at low health|Riskanter Kampf mit wenig Leben
Wyłącznie Sol: płomienie trwają o 50% dłużej, +20% obszaru zaklęć.|Sol only: flames last 50% longer, +20% spell area.|Nur Sol: Flammen halten 50% länger, +20% Zauberfläche.
Wyłącznie Niva: lodowy ślad po dashu i +10 punktów procentowych uniku.|Niva only: an icy dodge trail and +10 percentage points of dodge chance.|Nur Niva: Eisspur beim Ausweichen und +10 Prozentpunkte Ausweichchance.
Wyłącznie Orren: co 12 s blokuje 35% obrażeń następnego ciosu.|Orren only: every 12 seconds, blocks 35% of the next hit's damage.|Nur Orren: Blockt alle 12 Sekunden 35% des nächsten Treffers.
Wyłącznie Vesper: +15 punktów procentowych krytyka. Krytyki zatruwają.|Vesper only: +15 percentage points of critical chance. Critical hits poison.|Nur Vesper: +15 Prozentpunkte kritische Trefferchance. Kritische Treffer vergiften.
Co piąta salwa rozdziela się na trzy. Wyłącznie Ilya: +15% XP.|Every fifth volley splits into three. Ilya only: +15% XP.|Jede fünfte Salve teilt sich in drei. Nur Ilya: +15% EP.
Strażniczka ocalałego gaju tropi źródło choroby korzeni. Jej strzały niosą pamięć dawnego lasu.|The guardian of the surviving grove hunts the source of the roots' sickness. Her arrows carry the memory of the ancient forest.|Die Wächterin des letzten Hains sucht die Quelle der Wurzelkrankheit. Ihre Pfeile tragen die Erinnerung an den alten Wald.
Badacz pieczęci zamienił własną pracownię w popiół. W otchłani szuka sposobu na ujarzmienie żaru.|A scholar of seals reduced his own workshop to ashes. In the Abyss he seeks a way to master the embers.|Ein Siegelforscher legte seine eigene Werkstatt in Asche. Im Abgrund sucht er einen Weg, die Glut zu beherrschen.
Przeszła przez zamieć, która zatrzymała czas. Każda lodowa igła przypomina o tej podróży.|She crossed a blizzard that stopped time. Each ice needle recalls that journey.|Sie durchquerte einen Schneesturm, der die Zeit anhielt. Jede Eisnadel erinnert an diese Reise.
Ostatni obrońca kamiennej bramy nadal dotrzymuje przysięgi. Jego młot odpowiada na każdy upadek towarzysza.|The last defender of the stone gate still keeps his oath. His hammer answers every fallen companion.|Der letzte Verteidiger des Steintors hält noch immer seinen Schwur. Sein Hammer antwortet auf jeden gefallenen Gefährten.
Zna ścieżki, których nie ma na mapach. Wśród umarłych szuka imienia skradzionego przez otchłań.|He knows paths absent from maps. Among the dead he seeks a name stolen by the Abyss.|Er kennt Wege, die auf keiner Karte stehen. Unter den Toten sucht er einen vom Abgrund gestohlenen Namen.
Ruchliwa łuczniczka, która zamienia korzenie w broń.|An agile archer who turns roots into weapons.|Eine bewegliche Bogenschützin, die Wurzeln zu Waffen macht.
Ogień, eksplozje i ryzykowna walka z bliska.|Fire, explosions and risky close combat.|Feuer, Explosionen und riskanter Nahkampf.
Kontroluj pole walki i znikaj pomiędzy pociskami.|Control the battlefield and vanish between projectiles.|Kontrolliere das Schlachtfeld und verschwinde zwischen Projektilen.
Wytrzymały obrońca z potężnymi uderzeniami.|A durable defender with powerful strikes.|Ein widerstandsfähiger Verteidiger mit mächtigen Schlägen.
Precyzyjny zabójca budujący toksyczne kombinacje.|A precise assassin building toxic combinations.|Ein präziser Assassine mit giftigen Kombinationen.
Pokonaj 150 przeciwników ogniem w jednej wyprawie. Wymaga karty wyzwania.|Defeat 150 enemies with fire in one expedition. Requires the challenge card.|Besiege 150 Gegner mit Feuer in einer Expedition. Benötigt die Herausforderungskarte.
Pokonaj minibossa bez otrzymania obrażeń od jego pojawienia.|Defeat a miniboss without taking damage since it appeared.|Besiege einen Miniboss, ohne seit seinem Erscheinen Schaden zu nehmen.
Pokonaj strażnika w ciągu 60 s od jego pojawienia.|Defeat a guardian within 60 seconds of its appearance.|Besiege einen Wächter innerhalb von 60 Sekunden nach seinem Erscheinen.
Ukończ rundę bez przelosowania nagrody.|Complete a round without rerolling rewards.|Schließe eine Runde ab, ohne Belohnungen neu zu würfeln.
Ukończ rundę jako Ilya.|Complete a round as Ilya.|Schließe eine Runde als Ilya ab.
Ukończ rundę z dokładnie jedną dodatkową bronią.|Complete a round with exactly one extra weapon.|Schließe eine Runde mit genau einer Zusatzwaffe ab.
Pierwszy miniboss|First miniboss|Erster Miniboss
Pierwszy boss|First boss|Erster Boss
Pierwsza synergia|First synergy|Erste Synergie
Pierwszy triumf|First victory|Erster Sieg
Współczynnik wag rzadkości|Rarity weight multiplier|Seltenheitsgewichtungsfaktor
nie jest to bezpośrednia szansa dropu.|this is not a direct drop probability.|dies ist keine direkte Beutechance.
Dostępna od początku|Available from the start|Von Anfang an verfügbar
Każdy bohater ma własne drzewo statystyk, PPM i mocy F. W Pieczęci obowiązuje limit dwóch rang premii podstawowych.|Each hero has their own stat, secondary skill and ultimate tree. The Seal caps basic bonuses at two ranks.|Jeder Held hat einen eigenen Werte-, Sekundär- und Ultimativbaum. Im Siegel sind Grundboni auf zwei Ränge begrenzt.
Każda ranga: +3% do mnożnika szans rzadszego wyposażenia. Bez premii obrażeń.|Each rank: +3% to the weighting of rarer equipment. No damage bonus.|Pro Rang: +3% auf die Gewichtung seltenerer Ausrüstung. Kein Schadensbonus.
Każda ranga: przelosowanie tańsze o 10 złota. Limit nadal 2 na rundę.|Each rank: rerolls cost 10 less gold. Still limited to 2 per round.|Pro Rang: Neuwürfeln kostet 10 Gold weniger. Weiterhin höchstens 2 pro Runde.
Dodaje Berło Burzy do losowania wyposażenia.|Adds Storm Scepter to equipment rewards.|Fügt das Sturmzepter den Ausrüstungsbelohnungen hinzu.
Dodaje Kosę Umarłych do losowania wyposażenia.|Adds Reaper Scythe to equipment rewards.|Fügt die Todessense den Ausrüstungsbelohnungen hinzu.
Odblokowuje wyzwanie 150 zabójstw ogniem.|Unlocks the 150 fire kills challenge.|Schaltet die Herausforderung für 150 Feuertötungen frei.
Odblokowuje wybieralny wariant światła sześciu lokacji. Bez premii bojowych.|Unlocks an optional lighting variant for six locations. No combat bonuses.|Schaltet eine optionale Beleuchtungsvariante für sechs Orte frei. Keine Kampfboni.
Wariant F: +15% czasu odnowienia, w zamian 2 s ochrony po użyciu. Można przełączać w rozwoju bohatera.|Ultimate variant: +15% cooldown in exchange for 2 seconds of protection after use. Toggle in hero development.|Ultimativvariante: +15% Abklingzeit für 2 Sekunden Schutz nach Benutzung. In der Heldenentwicklung umschaltbar.
Wyposażenie wyprawy: zawsze maksymalnie 6 przedmiotów i 3 bronie. Poziomy broni rozwijasz od nowa w każdej wyprawie.|Expedition equipment: always up to 6 items and 3 weapons. Weapon levels start fresh in each expedition.|Expeditionsausrüstung: stets höchstens 6 Gegenstände und 3 Waffen. Waffenstufen werden in jeder Expedition neu aufgebaut.
Zmiana dotyczy nowej wyprawy. Pierwsze miejsce pozostaje niezbywalne.|The change applies to a new expedition. The first slot cannot be replaced.|Die Änderung gilt für eine neue Expedition. Der erste Platz bleibt unvertauschbar.
Kolor ramki, broni i jej efektów identyfikuje jakość. Poziom 1–5 pozostaje oddzielny.|Frame, weapon and effect colors indicate rarity. Level 1–5 is separate.|Farben von Rahmen, Waffe und Effekten zeigen die Seltenheit. Stufe 1–5 bleibt getrennt.
Poziom 1–5 rozwijasz podczas wyprawy|Develop levels 1–5 during an expedition|Stufen 1–5 während der Expedition entwickeln
Standardowy limit to 5. Sześć poniższych broni ma Przebudzenie: Przysięga Jednej Broni, RIFT 10+, Głębia albo wykonane zadanie pozwalają je losować. Bazowe obrażenia nie rosną ponad poziom 5.|The standard cap is 5. Six weapons below support Awakening: the One Weapon Oath, RIFT 10+, Depths or a completed task unlock their offers. Base damage does not increase beyond level 5.|Die Standardgrenze ist 5. Sechs Waffen unterstützen Erwachen: Einwaffenschwur, RIFT 10+, Tiefe oder eine abgeschlossene Aufgabe schalten Angebote frei. Grundschaden steigt über Stufe 5 hinaus nicht.
Kolumny, komnaty i pułapki runiczne.|Columns, chambers and runic traps.|Säulen, Kammern und Runenfallen.
Zamarznięte jeziora i kryształy. Pola szronu spowalniają.|Frozen lakes and crystals. Frost fields slow movement.|Gefrorene Seen und Kristalle. Frostfelder verlangsamen Bewegung.
Gęsty las, paprocie, zarodniki i leśne drapieżniki.|Dense forest, ferns, spores and woodland predators.|Dichter Wald, Farne, Sporen und Waldraubtiere.
Czarne skały, kratery i pulsujące strumienie lawy.|Black rocks, craters and pulsing lava streams.|Schwarze Felsen, Krater und pulsierende Lavaströme.
Groby, kości, wąwozy i nekromanci wskrzeszający hordy.|Graves, bones, ravines and necromancers raising hordes.|Gräber, Knochen, Schluchten und Nekromanten, die Horden erwecken.
Obsydianowe iglice, demoniczne bramy i deszcz ognia.|Obsidian spires, demonic gates and raining fire.|Obsidianspitzen, dämonische Tore und Feuerregen.
Odblokowania nie zastępują unikania ataków.|Unlocks do not replace dodging attacks.|Freischaltungen ersetzen nicht das Ausweichen.
W Pieczęci stałe premie korzystają maksymalnie z dwóch rang każdego węzła. Pełne drzewo nadal działa w kampanii.|In the Seal, permanent bonuses use at most two ranks per node. The full tree still applies in the campaign.|Im Siegel gelten höchstens zwei Ränge pro Knoten. Der vollständige Baum gilt weiterhin in der Kampagne.
punktów rozwoju na bohatera, w tym 3 osobiste ulepszenia umiejętności pomocniczej. Koszt kolejnych rang rośnie.|development points per hero, including 3 personal secondary skill upgrades. Later ranks cost more.|Entwicklungspunkte pro Held, einschließlich 3 persönlicher Sekundärverbesserungen. Spätere Ränge kosten mehr.
czasu osłony, spowolnienia lub znaku; Ilya: +1 przebity cel|shield, slow or mark duration; Ilya: +1 pierced target|Schild-, Verlangsamungs- oder Maldauer; Ilya: +1 durchschlagenes Ziel
wrogowie poruszają się o 15% szybciej.|enemies move 15% faster.|Gegner bewegen sich 15% schneller.
ruchu wrogów; silniejsza preferencja brakujących składników synergii.|enemy movement speed; stronger preference for missing synergy components.|Gegner-Bewegungstempo; stärkere Bevorzugung fehlender Synergiekomponenten.
Odbija 4% otrzymanych obrażeń w najbliższego wroga|Reflects 4% of damage taken at the nearest enemy|Reflektiert 4% des erlittenen Schadens auf den nächsten Gegner
Poznaj postać i pierwsze synergie.|Learn your hero and first synergies.|Lerne deinen Helden und erste Synergien kennen.
Pełna próba z dostępem do RIFT.|The full trial with access to RIFT.|Die vollständige Prüfung mit RIFT-Zugang.
Mocniejsi wrogowie, bogatsze nagrody.|Stronger enemies, richer rewards.|Stärkere Gegner, reichere Belohnungen.
Pierwsze oferty prowadzą do korzeni i towarzyszy.|Early offers favor roots and companions.|Frühe Angebote bevorzugen Wurzeln und Begleiter.
Pierwsze oferty prowadzą do ognia i oleju.|Early offers favor fire and oil.|Frühe Angebote bevorzugen Feuer und Öl.
Pierwsze oferty prowadzą do pioruna i wody.|Early offers favor lightning and water.|Frühe Angebote bevorzugen Blitz und Wasser.
Bez dodatkowej reguły.|No additional rule.|Keine Zusatzregel.
Bez losowego modyfikatora świata.|No random world modifier.|Kein zufälliger Weltmodifikator.
Najpierw ulepszenie, potem więź, mutacja i trzy fazy Kustosza.|First an upgrade, then a bond, a mutation and the Custodian's three phases.|Erst Verbesserung, dann Bindung, Mutation und die drei Phasen des Hüters.
Modyfikator startowy|Starting modifier|Startmodifikator
Wygraj podstawową próbę na średnim lub trudnym, aby odblokować RIFT 1.|Win the base trial on Normal or Hard to unlock RIFT 1.|Gewinne die Grundprüfung auf Normal oder Schwer, um RIFT 1 freizuschalten.
Zwycięstwo odblokuje RIFT|Victory unlocks RIFT|Ein Sieg schaltet RIFT frei
kryształ i|crystal and|Kristall und
Pierwszy miniboss nosi imię ostatniego zabójcy; po zwycięstwie daje relikt regeneracji.|The first miniboss bears your last killer's name; defeating it grants a regeneration relic.|Der erste Miniboss trägt den Namen deines letzten Mörders; ein Sieg gewährt ein Regenerationsrelikt.
Alternatywa mutacji: nakłada wodę zamiast eksplozji.|Alternative mutation: applies water instead of an explosion.|Alternative Mutation: verursacht Nässe statt einer Explosion.
Kosmetyczny fioletowy pierścień bohatera.|Cosmetic purple ring around the hero.|Kosmetischer violetter Ring um den Helden.
Berło Burzy + towarzysz: trafienia berła leczą 0,15 HP, limit 2 HP/s.|Storm Scepter + companion: scepter hits heal 0.15 HP, capped at 2 HP/s.|Sturmzepter + Begleiter: Zeptertreffer heilen 0,15 LP, höchstens 2 LP/s.
Pierwsza oferta może prowadzić do pioruna i wody.|The first offer may favor lightning and water.|Das erste Angebot kann Blitz und Wasser bevorzugen.
Korzenie zatrzymujące wrogów.|Roots that stop enemies.|Wurzeln, die Gegner festhalten.
Pociski powracają do bohatera.|Projectiles return to the hero.|Projektile kehren zum Helden zurück.
Precyzyjny pocisk bez dodatkowego efektu trafienia.|Precise projectile without an additional on-hit effect.|Präzises Projektil ohne zusätzlichen Treffereffekt.
Pozostawia kałużę|Leaves a puddle|Hinterlässt eine Pfütze
Mysz celuje zaklęciami (zasięg 650). Zwykłe ataki domyślnie celują we wrogów. Autocelowanie zmienisz w ustawieniach. Ochrona działa na bohatera.|The mouse aims spells (range 650). Basic attacks target enemies automatically by default. Change auto-aim in Settings. Protection affects the hero.|Die Maus zielt Zauber (Reichweite 650). Basisangriffe zielen standardmäßig automatisch. Automatisches Zielen ist einstellbar. Schutz wirkt auf den Helden.
Pełny ekran: F11. Klawisze zmienisz w ustawieniach.|Fullscreen: F11. Change key bindings in Settings.|Vollbild: F11. Tastenbelegung in den Einstellungen ändern.
Dash odnawia się dwa razy szybciej; -20% pancerza.|Dodge recharges twice as fast; -20% armor.|Ausweichen lädt doppelt so schnell auf; -20% Rüstung.
Ataki automatyczne. Menu obsługujesz strzałkami i Enterem. Pierwsze 3 minuty pierwszej rundy mają łagodniejszy początek. Każda kolejna runda i misja wzmacniają wrogów.|Automatic attacks. Navigate with arrow keys and Enter. The first three minutes of the first round are gentler. Each new round and mission strengthens enemies.|Automatische Angriffe. Mit Pfeiltasten und Enter navigieren. Die ersten drei Minuten der ersten Runde sind leichter. Jede weitere Runde und Mission stärkt Gegner.
Wymaga klątwy jednej broni, RIFT 10+, Głębi albo wykonanego zadania.|Requires the one-weapon curse, RIFT 10+, Depths or a completed task.|Benötigt Einwaffenfluch, RIFT 10+, Tiefe oder eine abgeschlossene Aufgabe.
Podstawowy odstęp|Base interval|Grundintervall
Znajdź schemat albo zdobądź broń podczas wyprawy.|Find a blueprint or obtain the weapon during an expedition.|Finde einen Bauplan oder erhalte die Waffe während einer Expedition.
Nieodkryta broń|Undiscovered weapon|Unentdeckte Waffe
Odblokuj srebrzysty wariant|Unlock silver variant|Silberne Variante freischalten
Pieczęci|of the Seal|des Siegels
woda|water|Wasser
ogień|fire|Feuer
Korzenie|Roots|Wurzeln
Nić krwi|Blood thread|Blutfaden
Inferno|Inferno|Inferno
Atlas|Atlas|Atlas
Chaos|Chaos|Chaos
Dash|Dodge|Ausweichen
dash|dodge|Ausweichen
Menu|Menu|Menü
Polski|Polski|Polski
English|English|English
Deutsch|Deutsch|Deutsch
Automatyczny|Automatic|Automatisch
Miejsce|Slot|Platz
nagrody|rewards|Belohnungen
liczebność|numbers|Anzahl
jakość łupu|loot quality|Beutequalität
Każdy tryb odblokowuje tylko własną ścieżkę misji.|Each difficulty unlocks only its own mission path.|Jeder Schwierigkeitsgrad schaltet nur seinen eigenen Missionspfad frei.
Przyjęcie jest nieodwracalne w tej wyprawie.|Accepting cannot be undone during this expedition.|Die Annahme kann während dieser Expedition nicht rückgängig gemacht werden.
Dwa miejsca|Two slots|Zwei Plätze
Poziomy zostają ustalone na początku wyprawy.|Ranks are fixed when the expedition starts.|Stufen werden zu Beginn der Expedition festgelegt.
Pamiątka wykorzystana — kolejna śmierć kończy wyprawę.|Keepsake consumed — the next death ends the expedition.|Andenken verbraucht — der nächste Tod beendet die Expedition.
Jeszcze jeden świt|One more dawn|Noch eine Morgendämmerung
Mikstury używane od lewej|Potions used from the left|Tränke werden von links benutzt
Pusto. Znajdź skrzynię.|Empty. Find a chest.|Leer. Finde eine Truhe.
Szansa|Chance|Chance
Synergia jednorazowa|One-time synergy|Einmalige Synergie
Łącz umiejętności żywiołów.|Combine elemental skills.|Kombiniere Elementarfähigkeiten.
Doświadczenie do następnego poziomu|Experience to next level|Erfahrung bis zur nächsten Stufe
umiejętność pomocnicza|secondary skill|Sekundärfähigkeit
mikstura|potion|Trank
maks.|max.|max.
odnowienie|cooldown|Abklingzeit
−15% HP, ale od początku druga broń.|−15% HP, but start with a second weapon.|−15% LP, dafür von Beginn an eine zweite Waffe.
`);

;

/* Module: js/menu-wallet.js */
'use strict';
(function(A){const P=A.UI.prototype,S=A.Save;
 P.updateMenuWallet=function(refresh=false){
  let bar=document.getElementById('menu-wallet');if(!bar){bar=document.createElement('aside');bar.id='menu-wallet';bar.className='wallet25';bar.setAttribute('aria-label','Surowce');document.body.append(bar);}
  const visible=this.overlay.childElementCount>0;bar.hidden=!visible;document.body.classList.toggle('menu-wallet-visible',visible);if(!visible)return;
  if(refresh||this.menuWalletGold===undefined)this.menuWalletGold=S.readRun()?.gold||0;
  const gold=this.g.player?.runId&&!this.g.endSaved?this.g.gold:this.menuWalletGold;
  const wallet=S.meta3.wallet,rows=[['Odłamki bohatera',S.data.currency,'crystal','ice'],['Srebro',wallet.silver,'gold','stone'],['Kryształy Otchłani',wallet.crystals,'crystal','arcane'],['Żetony',wallet.tokens,'star','dash'],['Złoto wyprawy',gold,'gold','lightning']],signature=JSON.stringify(rows)+A.Locale.language();if(this.menuWalletSignature===signature)return;this.menuWalletSignature=signature;
  bar.innerHTML=rows.map(([label,value,icon,color])=>`<span title="${A.Locale.text(label)}">${A.icon25(icon,color)}<b>${Math.floor(value||0).toLocaleString(A.Locale.language())}</b><small>${A.Locale.text(label)}</small></span>`).join('');
 };
 for(const name of ['panel','menu','hide','update']){const base=P[name];P[name]=function(...args){const result=base.apply(this,args);this.updateMenuWallet(name!=='update');return result;};}
})(window.Aeren);

;

/* Module: js/round-balance.js */
'use strict';
(function(A){
 const G=A.Game.prototype,U=A.U,D=A.Data;
 // Stored on the player: the existing run serializer already persists this object.
 const round=g=>g.biome+':'+(g.player?.run3?.depth||0);
 G.roundCleared=function(){return !this.training3&&(this.player?.clearedRound30===round(this)||(!this.player?.run3?.depth&&this.stageBossSpawned&&this.bosses>this.biome));};
 const kill=G.kill;G.kill=function(e,...args){if(e?.isBoss&&!e.dead&&!this.training3)this.player.clearedRound30=round(this);return kill.call(this,e,...args);};
 const director=G.director;G.director=function(dt){if(this.roundCleared())return;return director.call(this,dt);};
 const spawn=G.spawn;G.spawn=function(...args){if(this.roundCleared())return null;return spawn.apply(this,args);};

 // Fixed equipment contributions, applied after skills/masteries. No percentage
 // multiplier can amplify these item bonuses. Probability stats use additive pp.
 const specs=A.FlatItems={
  power:['attackFlat',4,1,1,'ATK'],tempo:['rateFlat',.10,.025,.025,'ataku/s'],
  shell:['armorFlat',4,1,1,'pancerza'],heart:['healthFlat',16,4,4,'maksymalnego HP'],
  focus:['cooldownPoints',5,1.25,1.25,'pkt odnowienia'],eye:['criticalPoints',4,1,1,'pkt proc. szansy krytyka'],
  step:['speedFlat',12,3,3,'jedn. ruchu/s'],reach:['areaPoints',8,2,2,'pkt obszaru'],
  blood:['healingFlat',.3,.075,.075,'HP za trafienie'],star:['luckPoints',8,2,2,'pkt szczęścia']
 };
 const flatRelicKeys={damage:['attackFlat',20,'ATK'],rate:['rateFlat',1,'ataku/s'],speed:['speedFlat',200,'jedn. ruchu/s'],maxHp:['healthFlat',100,'HP'],hpFlat:['healthFlat',1,'HP'],armor:['armorFlat',1,'pancerza'],steal:['healingFlat',20,'HP za trafienie'],area:['areaPoints',100,'pkt obszaru'],cdr:['cooldownPoints',100,'pkt odnowienia'],crit:['criticalPoints',100,'pkt proc. krytyka'],luck:['luckPoints',100,'pkt szczęścia']};
 const otherLabels={count:['pociski',1],velocity:['pkt prędkości pocisków',100],critDamage:['pkt mnożnika krytyka',100],dodge:['pkt proc. uniku',100],gold:['% złota',100],xp:['% XP',100],incoming:['% otrzymywanych obrażeń',100],enemySpeed:['% szybkości wrogów',100],dash:['pkt redukcji odnowienia uniku',100],magnet:['zasięgu przyciągania',1]};
 for(const relic of D.relics){const mods={},lines=[];for(const [key,value]of Object.entries(relic.mods)){const spec=flatRelicKeys[key],n=Math.round(value*(spec?.[1]||1)*1000)/1000;mods[spec?.[0]||key]=(mods[spec?.[0]||key]||0)+n;const label=spec?.[2]||otherLabels[key]?.[0]||key,shown=spec?n:Math.round(value*(otherLabels[key]?.[1]||1)*100)/100;lines.push((shown>=0?'+':'')+shown+' '+label);}relic.mods=mods;relic.desc=lines.join('; ')+'.';relic.balance30=1;}
 G.itemStats=function(item){const def=D.itemTemplates.find(t=>t.id===item.id),s=specs[item.id];if(!def||!s)return item;
  item.level=U.clamp(item.level||1,1,5);item.rarity=U.clamp(item.rarity||0,0,4);
  const n=Math.round((s[1]+(item.level-1)*s[2]+item.rarity*s[3])*1000)/1000;
  item.mods={[s[0]]:n};item.name=def.name;item.balance30=1;
  item.desc=`+${n} ${s[4]}. Ranga ${item.level}/5.`;
  if(item.id==='blood')item.desc+=' Wspólny limit leczenia: 2 HP/s.';
  if(item.id==='focus')item.desc+=' 1 pkt = +0,01 do tempa odnowienia.';
  if(item.id==='reach')item.desc+=' 1 pkt = +0,01 do współczynnika obszaru.';
  if(item.id==='star')item.desc+=' 1 pkt = +0,01 szczęścia; wpływa na wagi rzadkości.';
  return item;
 };
 const recalc=G.recalculate;G.recalculate=function(){
  for(const item of this.items||[])if(item.balance30!==1)this.itemStats(item);
  for(const relic of this.relics||[]){const def=D.relics.find(d=>d.id===relic.id);if(def&&relic.balance30!==1){relic.mods={...def.mods};relic.desc=def.desc;relic.balance30=1;}}
  const hp=this.player.hp,setting=this.settingHealth3;this.settingHealth3=true;
  try{recalc.call(this);const s=this.stats;
   s.damage=Math.max(1,s.damage+(s.attackFlat||0));s.rate=Math.max(.35,s.rate+(s.rateFlat||0));s.maxHp=Math.max(25,Math.round(s.maxHp+(s.healthFlat||0)));
   s.armor=U.clamp(s.armor+(s.armorFlat||0),0,70);s.speed=U.clamp(s.speed+(s.speedFlat||0),120,410);
   s.crit=U.clamp(s.crit+(s.criticalPoints||0)/100,0,.55);s.cdr=U.clamp(s.cdr+(s.cooldownPoints||0)/100,0,.6);
   s.area=U.clamp(s.area+(s.areaPoints||0)/100,.5,1.8);s.luck=U.clamp(s.luck+(s.luckPoints||0)/100,0,1);
   if(this.curse3?.('spark')){if(hp/s.maxHp<.3){s.damage+=8;s.rate+=.25;}else s.damage=Math.max(1,s.damage-2);}
   this.player.hp=Math.min(hp,s.maxHp);return s;
  }finally{this.settingHealth3=setting;}
 };
})(window.Aeren);

;

/* Module: js/hero-rig.js */
'use strict';
(function(A){
 const R=A.Renderer.prototype,G=A.Game.prototype,TAU=Math.PI*2,clamp=A.U.clamp;
 const H=A.HeroRig={poses:new WeakMap(),enabled:new Set(['ilya','sol','niva','orren','vesper']),oldPlayer:R.player};
 // Coordinates are joint positions, not centers of independent sprite pieces.
 // Lower body has its own yaw; arms inherit the chest and solve two-bone IK.
 const J={pelvis:0,chest:1,neck:2,head:3,hipL:4,kneeL:5,footL:6,hipR:7,kneeR:8,footR:9,shoulderL:10,elbowL:11,handL:12,shoulderR:13,elbowR:14,handR:15,bowTop:16,bowBottom:17,bowGrip:18,string:19,capeL:20,capeR:21,capeTipL:22,capeTipR:23,quiver:24,quiverTop:25};
 H.joints=J;
 H.styles={ilya:{cloth:'#253f37',light:'#567d5b',metal:'#a69661',glow:'#9cdeb0',skin:'#d1c0a1',width:1,stride:90,lean:1},sol:{cloth:'#45262d',light:'#865347',metal:'#b99a66',glow:'#ffb05f',skin:'#c8ac91',width:1.15,stride:104,lean:.8},niva:{cloth:'#293b50',light:'#7199ad',metal:'#b0c2c4',glow:'#acf2ff',skin:'#d4d7d1',width:.94,stride:96,lean:.8},orren:{cloth:'#333b3e',light:'#738381',metal:'#b49c71',glow:'#e1c890',skin:'#baa48d',width:1.35,stride:118,lean:.65},vesper:{cloth:'#30283f',light:'#765f8c',metal:'#9d8eab',glow:'#d8aff6',skin:'#b6afc3',width:.94,stride:80,lean:1.3}};
 const angle=(a,b)=>Math.atan2(Math.sin(b-a),Math.cos(b-a));
 const palette={};for(const [id,s]of Object.entries(H.styles)){palette[id]=Array.from({length:8},(_,i)=>{const f=.65+.5*Math.max(0,Math.cos(i*TAU/8-.8)),n=parseInt(s.cloth.slice(1),16);return '#'+[n>>16,(n>>8)&255,n&255].map(v=>Math.round(v*f).toString(16).padStart(2,'0')).join('');});}
 H.get=function(p){let r=H.poses.get(p);if(r)return r;r={j:new Float64Array(26*3),q:new Float64Array(26*3),mesh:new Float64Array(40*3),yaw:p.aim||0,moveYaw:p.aim||0,lastX:p.x,lastY:p.y,phase:0,walk:0,speed:0,clock:0,attackAt:-9,castAt:-9,castDuration:0,castKind:'nature',castType:'',hurtAt:-9,hurtPower:0,hurtYaw:0,healAt:-9,deadAt:-1,cape:0,draw:0,aimBlend:0,release:0,feet:[{plant:false,x:0,y:0},{plant:false,x:0,y:0}],queue:[],frame:-1};
  for(let i=0;i<16;i++)r.queue.push({id:i,depth:0});H.poses.set(p,r);return r;
 };
 const put=(r,i,x,y,z)=>{i*=3;r.j[i]=x;r.j[i+1]=y;r.j[i+2]=z;};
 const local=(r,i,x,y,z,yaw,ox=0,oy=0,oz=0)=>put(r,i,ox-x*Math.sin(yaw)+y*Math.cos(yaw),oy+x*Math.cos(yaw)+y*Math.sin(yaw),oz+z);
 // Bend at the knee/elbow while preserving segment length in three dimensions.
 function ik(r,a,b,c,length,poleX,poleY){a*=3;b*=3;c*=3;const j=r.j,dx=j[c]-j[a],dy=j[c+1]-j[a+1],dz=j[c+2]-j[a+2],dist=Math.max(.001,Math.hypot(dx,dy,dz)),d=Math.min(length*1.999,dist),ux=dx/dist,uy=dy/dist,uz=dz/dist,dot=poleX*ux+poleY*uy;let px=poleX-dot*ux,py=poleY-dot*uy,pz=-dot*uz;const pn=Math.hypot(px,py,pz)||1,bend=Math.sqrt(Math.max(0,length*length-d*d/4));j[b]=j[a]+dx*.5+px/pn*bend;j[b+1]=j[a+1]+dy*.5+py/pn*bend;j[b+2]=j[a+2]+dz*.5+pz/pn*bend;}
 H.solve=function(g,p,dt,frame){const r=H.get(p);if(r.frame===frame&&frame!==undefined)return r;r.frame=frame;dt=clamp(dt||.016,.001,.05);r.clock+=dt;
  const s=H.styles[p.hero.id],dx=p.x-r.lastX,dy=p.y-r.lastY,travel=Math.hypot(dx,dy),teleport=travel>70,dashing=p.dashing>0||p.dashVisual>0;
  r.lastX=p.x;r.lastY=p.y;const moving=travel>.015&&!teleport&&!dashing&&p.hp>0;
  if(moving)r.moveYaw+=angle(r.moveYaw,Math.atan2(dy,dx))*(1-Math.exp(-20*dt));
  r.speed+=(moving?travel/dt-r.speed:-r.speed)*(1-Math.exp(-15*dt));r.walk+=(moving?1-r.walk:-r.walk)*(1-Math.exp(-16*dt));
  if(moving)r.phase+=travel*TAU/s.stride;
  const aim=A.ArtDepth.heading(g,p);r.yaw+=angle(r.yaw,aim)*(1-Math.exp(-24*dt));
  if(p.hp<=0&&r.deadAt<0)r.deadAt=r.clock;if(p.hp>0)r.deadAt=-1;
  const dead=r.deadAt<0?0:clamp((r.clock-r.deadAt)/.8,0,1),hurt=Math.max(0,1-(r.clock-r.hurtAt)/.24)*r.hurtPower,cast=dead||dashing||hurt>.5?0:clamp(1-(r.clock-r.castAt)/Math.max(.01,r.castDuration),0,1),ult=cast&&r.castType==='ultimate',strong=cast&&r.castType==='secondary';
  const w=g.weapons?.[0],interval=w?.stats23?.interval||1,pre=w&&w.cd>0&&w.cd<Math.min(.32,interval*.4)&&g.nearEnemies(800)[0]?1-w.cd/Math.min(.32,interval*.4):0;
  r.release=Math.max(0,1-(r.clock-r.attackAt)/.18);r.draw=clamp(pre+strong*.8,0,1);if(dead||dashing||hurt>.5){r.draw=0;r.release=0;}
  r.mode=dead?'death':dashing?'dash':hurt>.5?'hurt':ult?'ultimate':strong?'secondary':cast?'cast':r.release||r.draw?'attack':r.walk>.1?'run':'idle';
  r.dead=dead;r.hurt=hurt;r.cast=cast;r.ult=ult;r.dashing=dashing;
  const crouch=(p.hero.id==='vesper'?4:0)+dead*26+(dashing?10:0)+hurt*3,breath=Math.sin(r.clock*2.4)*.45;
  const pelvis=35-crouch+Math.cos(r.phase*2)*r.walk*.8,lean=r.walk*3*s.lean+(dashing?13:0);
  const ox=Math.cos(r.moveYaw)*lean-Math.cos(r.hurtYaw)*hurt*4,oy=Math.sin(r.moveYaw)*lean-Math.sin(r.hurtYaw)*hurt*4;
  put(r,J.pelvis,0,0,pelvis);put(r,J.chest,ox,oy,pelvis+21+breath);put(r,J.neck,ox,oy,pelvis+31+breath);put(r,J.head,ox,oy,pelvis+41+breath-dead*5);
  for(let side=0;side<2;side++){const n=side?1:-1,hip=side?J.hipR:J.hipL,foot=side?J.footR:J.footL,knee=side?J.kneeR:J.kneeL,t=((r.phase/TAU+side*.5)%1+1)%1,stance=t<.44&&moving&&!dead,f=r.feet[side];
   local(r,hip,n*7*s.width,0,pelvis,r.moveYaw);
   let reach=t<.44?18-t/.44*36:-18+36*(t-.44)/.56,lift=t<.44?0:Math.sin((t-.44)/.56*Math.PI)*9;
   if(stance){if(!f.plant||teleport){f.x=p.x-n*7*s.width*Math.sin(r.moveYaw)+18*Math.cos(r.moveYaw);f.y=p.y+n*7*s.width*Math.cos(r.moveYaw)+18*Math.sin(r.moveYaw);}put(r,foot,f.x-p.x,f.y-p.y,2);}
   else local(r,foot,n*8*s.width,reach*r.walk+(dead?n*7:0),2+lift*r.walk+(dashing?side*8:0),r.moveYaw);
   f.plant=stance;ik(r,hip,knee,foot,21,Math.cos(r.moveYaw),Math.sin(r.moveYaw));
  }
  const spread=14*s.width;local(r,J.shoulderL,-spread,0,1,r.yaw,ox,oy,r.j[J.chest*3+2]);local(r,J.shoulderR,spread,0,1,r.yaw,ox,oy,r.j[J.chest*3+2]);
  const armed=r.draw>0||r.release>0||strong,raised=ult?Math.sin((1-cast)*Math.PI)*19:0,gesture=cast&&!strong&&!ult?(r.castKind==='nature'?-13:r.castKind==='lightning'?23:r.castKind==='fire'?8:r.castKind==='ice'?12:4)*Math.sin((1-cast)*Math.PI):0;
  r.aimBlend+=((armed?1:0)-r.aimBlend)*(1-Math.exp(-28*dt));
  const blend=r.aimBlend,bow=p.hero.id==='ilya',holdY=bow?13+12*blend:7;
  local(r,J.handL,bow?-7:-16*s.width,holdY,-12+12*blend,r.yaw,ox,oy,r.j[J.chest*3+2]+raised+gesture-dead*7);
  local(r,J.handR,bow?15-7*blend:16*s.width,bow?5+(-1-r.draw*10-r.release*5)*blend:8,-23+24*blend,r.yaw,ox,oy,r.j[J.chest*3+2]+raised+gesture-dead*7);
  if(!bow){const swing=(r.release?Math.sin((1-r.release)*Math.PI):0)*22,cz=r.j[J.chest*3+2];local(r,J.handR,spread,8+swing,cz-12+raised+gesture,r.yaw,ox,oy);
   if(p.hero.id==='orren'){local(r,J.handL,-7,19,cz-9+r.draw*18-swing*.4+raised,r.yaw,ox,oy);local(r,J.handR,7,24,cz-5+r.draw*24-swing*.55+raised,r.yaw,ox,oy);}
   if(p.hero.id==='sol'){local(r,J.handL,-20,cast?20:4,cz-16+raised+gesture+(cast?10:0),r.yaw,ox,oy);}
   if(p.hero.id==='niva'){local(r,J.handL,-10,cast?25:6,cz-12+raised+gesture,r.yaw,ox,oy);}
   if(p.hero.id==='vesper'){local(r,J.handL,-16,18+swing,cz-20+raised,r.yaw,ox,oy);local(r,J.handR,16,18-swing*.6,cz-14+raised,r.yaw,ox,oy);}
  }
  ik(r,J.shoulderL,J.elbowL,J.handL,18,-Math.sin(r.yaw)*-1,Math.cos(r.yaw)*-1);ik(r,J.shoulderR,J.elbowR,J.handR,18,-Math.sin(r.yaw),Math.cos(r.yaw));
  const hand=J.handL*3;put(r,J.bowGrip,r.j[hand],r.j[hand+1],r.j[hand+2]);local(r,J.bowTop,0,-4,25,r.yaw,r.j[hand],r.j[hand+1],r.j[hand+2]);local(r,J.bowBottom,0,-4,-25,r.yaw,r.j[hand],r.j[hand+1],r.j[hand+2]);local(r,J.string,0,-r.draw*16,0,r.yaw,r.j[hand],r.j[hand+1],r.j[hand+2]);
  r.cape+=(lean*1.4+Math.sin(r.phase)*r.walk*2+raised*.6-r.cape)*(1-Math.exp(-7*dt));
  local(r,J.capeL,-13,-6,0,r.yaw,ox,oy,pelvis+26);local(r,J.capeR,13,-6,0,r.yaw,ox,oy,pelvis+26);
  local(r,J.capeTipL,-12,-10-r.cape,-25+Math.sin(r.clock*3)*1.5,r.yaw,ox,oy,pelvis+26);local(r,J.capeTipR,9,-12-r.cape,-28+Math.sin(r.clock*3+1)*1.5,r.yaw,ox,oy,pelvis+26);
  local(r,J.quiver,9,-9,0,r.yaw,ox,oy,pelvis+7);local(r,J.quiverTop,12,-9-r.cape*.12,29,r.yaw,ox,oy,pelvis+7);
  for(let i=0;i<26;i++){const k=i*3;r.q[k]=r.j[k];r.q[k+1]=r.j[k+1]*.48-r.j[k+2];r.q[k+2]=r.j[k+1];}
  return r;
 };
 const outline='#111c22',gold='#b6a474';
 function line(c,x,y,x2,y2,color,width){c.beginPath();c.moveTo(x,y);c.lineTo(x2,y2);c.strokeStyle=color;c.lineWidth=width;c.stroke();}
 function limb(c,q,a,b,w1,w2,color,highlight){a*=3;b*=3;const dx=q[b]-q[a],dy=q[b+1]-q[a+1],n=Math.hypot(dx,dy)||1,nx=-dy/n,ny=dx/n;
  c.beginPath();c.moveTo(q[a]+nx*w1,q[a+1]+ny*w1);c.quadraticCurveTo((q[a]+q[b])*.5+nx*(w1+w2)*.65,(q[a+1]+q[b+1])*.5+ny*(w1+w2)*.65,q[b]+nx*w2,q[b+1]+ny*w2);c.quadraticCurveTo(q[b]+dx/n*w2,q[b+1]+dy/n*w2,q[b]-nx*w2,q[b+1]-ny*w2);c.quadraticCurveTo((q[a]+q[b])*.5-nx*(w1+w2)*.65,(q[a+1]+q[b+1])*.5-ny*(w1+w2)*.65,q[a]-nx*w1,q[a+1]-ny*w1);c.closePath();c.fillStyle=color;c.fill();if(highlight)line(c,q[a]-nx*w1*.45,q[a+1]-ny*w1*.45,q[b]-nx*w2*.4,q[b+1]-ny*w2*.4,highlight,1);
 }
 function cloth(c,r,s){const q=r.q;c.beginPath();c.moveTo(q[60],q[61]);c.lineTo(q[63],q[64]);c.quadraticCurveTo(q[69]+5,q[70]-8,q[69],q[70]);c.lineTo((q[66]+q[69])*.5,q[67]+4);c.lineTo(q[66],q[67]);c.quadraticCurveTo(q[66]-4,q[67]-12,q[60],q[61]);c.fillStyle=s.cloth;c.fill();line(c,q[60]+4,q[61]+3,q[66]+4,q[67]-4,s.light,1.2);}
 // Five cross-sections form shoulders, ribs, waist and split tunic hem. The
 // contoured mesh rotates in 3D; the face opening is a separate front surface.
 function torso(c,r,s,id){const m=r.mesh,yaw=r.yaw,cs=Math.cos(yaw),sn=Math.sin(yaw),width=s.width,pelvis=r.j[2],ox=r.j[3],oy=r.j[4];
  for(let k=0;k<5;k++){const z=[-9,0,9,19,24][k]+pelvis,w=[13,9,9.5,15,12][k]*width,d=[7,6,6.5,8,6][k];for(let i=0;i<8;i++){const a=i*TAU/8,x=Math.cos(a)*w,y=Math.sin(a)*d,n=(k*8+i)*3,f=k/4;m[n]=-x*sn+y*cs+ox*f;m[n+1]=(x*cs+y*sn+oy*f)*.48-z;m[n+2]=x*cs+y*sn;}}
  for(let i=0;i<8;i++){const next=(i+1)%8,normal=(i+.5)*TAU/8;if(Math.cos(normal)*cs+Math.sin(normal)*sn<0)continue;
   c.beginPath();c.moveTo(m[i*3],m[i*3+1]);for(let k=1;k<5;k++)c.lineTo(m[(k*8+i)*3],m[(k*8+i)*3+1]);for(let k=4;k>=0;k--)c.lineTo(m[(k*8+next)*3],m[(k*8+next)*3+1]);c.closePath();c.fillStyle=palette[id][i];c.fill();
   line(c,m[(8+i)*3],m[(8+i)*3+1],m[(8+next)*3],m[(8+next)*3+1],s.metal,2);
  }
  if(Math.sin(yaw)>-.2){const x=ox+Math.cos(yaw)*8,y=oy*.48+Math.sin(yaw)*4-pelvis-18;c.strokeStyle=s.metal;c.lineWidth=1.3;c.beginPath();c.moveTo(x-5,y-2);c.quadraticCurveTo(x,y+8,x+5,y-2);c.moveTo(x,y);c.lineTo(x,y+13);c.stroke();c.fillStyle=s.glow;c.fillRect(x-1,y+3,2,4);}
 }
 function head(c,r,s,id){const q=r.q,x=q[9],y=q[10],front=Math.sin(r.yaw),side=Math.cos(r.yaw),tilt=r.hurt*2+r.dead*3;
  c.save();c.translate(x,y+tilt);
  // Fitted hood: rounded crown, cheek seams, open face and pointed cloth collar.
  c.beginPath();c.moveTo(-10,9);c.bezierCurveTo(-13,1,-11,-10,-5,-13);c.bezierCurveTo(1,-17,10,-12,11,-5);c.quadraticCurveTo(13,3,9,10);c.lineTo(2,14);c.lineTo(-5,11);c.closePath();c.fillStyle=s.cloth;c.fill();
  if(front>-.35){const face=clamp((front+.35)/1.35,.1,1),cx=side*6;c.beginPath();c.moveTo(cx-7*face,-6);c.quadraticCurveTo(cx+side*3,-11,cx+7*face,-5);c.lineTo(cx+6*face,7);c.quadraticCurveTo(cx,12,cx-5*face,6);c.closePath();c.fillStyle='#101b20';c.fill();
   c.beginPath();c.moveTo(cx-5*face,-3);c.lineTo(cx+5*face,-3);c.lineTo(cx+4*face,5);c.lineTo(cx,9);c.lineTo(cx-4*face,5);c.closePath();c.fillStyle=s.skin;c.fill();
   line(c,cx-4*face,0,cx-1*face,-.2,outline,1.5);line(c,cx+face,-.2,cx+4*face,0,outline,1.5);line(c,cx,1,cx+side*1.5,4,s.metal,.8);line(c,cx-2*face,5,cx+2*face,5,outline,.6);
  }else{line(c,-3,-11,-1,8,s.light,1);line(c,2,-11,5,7,s.metal,.6);}
  if(id==='ilya'){c.fillStyle=s.light;for(let n=-1;n<=1;n+=2){c.beginPath();c.moveTo(n*9,2);c.quadraticCurveTo(n*17,3,n*11,13);c.quadraticCurveTo(n*8,10,n*9,2);c.fill();}}
  if(id==='orren'){c.strokeStyle=s.metal;c.lineWidth=3;c.beginPath();c.moveTo(-10,-4);c.lineTo(0,-8);c.lineTo(10,-4);c.stroke();}
  if(id==='niva'){c.fillStyle=s.glow;c.beginPath();c.moveTo(0,-14);c.lineTo(3,-9);c.lineTo(0,-5);c.lineTo(-3,-9);c.fill();}
  c.restore();
 }
 function bow(c,r,s){const q=r.q,tx=q[48],ty=q[49],bx=q[51],by=q[52],gx=q[54],gy=q[55],sx=q[57],sy=q[58],cs=Math.cos(r.yaw),sn=Math.sin(r.yaw);
  c.beginPath();c.moveTo(tx,ty);c.bezierCurveTo(tx+cs*13,ty+sn*6+8,gx+cs*7,gy+sn*3-8,gx,gy);c.bezierCurveTo(gx+cs*7,gy+sn*3+8,bx+cs*13,by+sn*6-8,bx,by);c.strokeStyle=s.metal;c.lineWidth=2.8;c.stroke();c.strokeStyle=s.light;c.lineWidth=1;c.stroke();
  line(c,tx,ty,sx,sy,'#e0d9b1',.7);line(c,sx,sy,bx,by,'#e0d9b1',.7);
  if(r.draw>.01){line(c,sx-cs*5,sy-sn*2.4,gx+cs*18,gy+sn*8.64,s.glow,1.3);c.fillStyle=s.glow;c.beginPath();c.arc(gx+cs*18,gy+sn*8.64,1.8,0,TAU);c.fill();}
 }
 const depthSort=(a,b)=>a.depth-b.depth;
 H.draw=function(c,r,id,quality='high'){const s=H.styles[id],q=r.q; c.lineCap='round';c.lineJoin='round';
  const queue=r.queue;for(let i=0;i<queue.length;i++){const part=queue[i];part.depth=0;switch(part.id){case 0:part.depth=q[62]-2;break;case 1:part.depth=q[74]-1;break;case 2:case 3:part.depth=(q[part.id===2?14:23]+q[part.id===2?20:29])/2;break;case 4:part.depth=q[2];break;case 5:part.depth=q[5];break;case 6:part.depth=q[11];break;case 7:case 8:part.depth=q[part.id===7?35:44];break;case 9:case 10:part.depth=q[part.id===9?38:47]+.1;break;case 11:part.depth=q[56]+.3;break;default:part.depth=1e3;}}
  queue.sort(depthSort);
  for(const part of queue){switch(part.id){case 0:cloth(c,r,s);break;case 1:if(id==='ilya'){limb(c,q,J.quiver,J.quiverTop,5,6,'#403c2c',s.metal);for(let k=-1;k<=1;k++){const x=q[75]+k*3,y=q[76];line(c,x,y,x+2,y-12,s.metal,1);line(c,x+2,y-12,x-1,y-8,s.glow,1.7);}}break;
   case 2:case 3:{const h=part.id===2?J.hipL:J.hipR,k=h+1,f=h+2;limb(c,q,h,k,5*s.width,3.8,s.cloth,s.light);limb(c,q,k,f,3.8,3,'#283235',s.metal);const x=q[f*3],y=q[f*3+1];c.fillStyle='#27312e';c.strokeStyle=s.metal;c.lineWidth=.7;c.beginPath();c.ellipse(x+Math.cos(r.moveYaw)*3,y+Math.sin(r.moveYaw)*1.5,5.5,3,0,0,TAU);c.fill();break;}
   case 4:break;case 5:torso(c,r,s,id);if(id==='sol'){const x=q[3],y=q[4]+3;c.fillStyle=s.glow;c.beginPath();c.arc(x,y,3.2,0,TAU);c.fill();c.strokeStyle=s.metal;c.lineWidth=1.2;c.beginPath();c.arc(x,y,6,0,TAU);c.stroke();}break;case 6:head(c,r,s,id);break;
   case 7:case 8:{const shoulder=part.id===7?J.shoulderL:J.shoulderR;limb(c,q,shoulder,shoulder+1,5.5*s.width,3.4,s.cloth,s.light);limb(c,q,shoulder+1,shoulder+2,4,2.8,'#3a4541',s.metal);if(id==='orren'){c.fillStyle=s.light;c.strokeStyle=s.metal;c.lineWidth=1;c.beginPath();c.ellipse(q[shoulder*3],q[shoulder*3+1],10,6,-.2,0,TAU);c.fill();}break;}
   case 9:case 10:{const k=(part.id===9?J.handL:J.handR)*3;c.fillStyle=s.skin;c.beginPath();c.ellipse(q[k],q[k+1],3,3.5,0,0,TAU);c.fill();break;}
   case 11:if(id==='ilya')bow(c,r,s);if(id==='vesper')for(const hand of [J.handL,J.handR]){const k=hand*3,sign=hand===J.handL?1:-1;line(c,q[k],q[k+1],q[k]+Math.cos(r.yaw)*18,q[k+1]+Math.sin(r.yaw)*9-sign*5,s.metal,3);line(c,q[k],q[k+1],q[k]+Math.cos(r.yaw)*18,q[k+1]+Math.sin(r.yaw)*9-sign*5,s.glow,1);}break;
  }}
  if(r.release>.1&&id==='ilya'){c.globalAlpha*=r.release;line(c,q[54],q[55],q[54]+Math.cos(r.yaw)*14,q[55]+Math.sin(r.yaw)*7,s.glow,2);c.globalAlpha/=r.release;}
 };
 R.player=function(c,p){if(!H.enabled.has(p.hero.id))return H.oldPlayer.call(this,c,p);const r=H.solve(this.g,p,this.dtSlice||.016,this.frameDepth),quality=A.ArtSlice?.quality()||'high';
  c.save();c.translate(p.x,p.y);c.fillStyle='#07101866';c.beginPath();c.ellipse(2,3,18+r.walk*2+(r.dashing?8:0),7,0,0,TAU);c.fill();
  if(r.dashing&&quality!=='low'){c.save();c.globalAlpha=.13;c.translate(-Math.cos(r.moveYaw)*17,-Math.sin(r.moveYaw)*17);H.draw(c,r,p.hero.id,quality);c.restore();}
  H.draw(c,r,p.hero.id,quality);
  if(r.ult){c.globalAlpha=.5*r.cast;c.strokeStyle=H.styles[p.hero.id].glow;c.lineWidth=1.6;c.beginPath();c.ellipse(0,0,22+(1-r.cast)*20,9+(1-r.cast)*8,0,0,TAU);c.stroke();c.globalAlpha=1;}
  if(r.hurt>.05){c.globalAlpha=r.hurt*.5;line(c,-8,-57,4,-67,'#ffdfcf',2);c.globalAlpha=1;}
  if(p.healAnim>0&&quality!=='low'){c.fillStyle=H.styles[p.hero.id].glow;c.globalAlpha=.65;for(let i=0;i<4;i++){const t=(r.clock*1.8+i*.25)%1;c.beginPath();c.arc(Math.sin(i*2)*18*(1-t),-10-t*48,1.5,0,TAU);c.fill();}c.globalAlpha=1;}
  c.restore();for(let i=0;i<(this.g.weapons?.length||0);i++){if(i===0&&(p.hero.id==='ilya'&&['bow','thornbow'].includes(this.g.weapons[i].id)||p.hero.id==='vesper'&&this.g.weapons[i].id==='daggers'))continue;const w=this.g.weapons[i],k=i===0?J.handR*3:J.quiver*3,a=i===0&&['sol','orren'].includes(p.hero.id)?-Math.PI/2+r.release*1.5:w.aim23??r.yaw;this.weaponSlice(c,w,p.x+r.q[k]+(i?i===1?-20:20:0),p.y+r.q[k+1],a,i===0?.8:.65);}
 };
 const weapons=G.updateWeapons;G.updateWeapons=function(dt){const w=this.weapons?.[0],shots=w?.shots23||0,result=weapons.call(this,dt);if(w&&(w.shots23||0)>shots){const r=H.get(this.player);r.attackAt=r.clock;}return result;};
 for(const method of ['cast','castSecondary','castUltimate']){const original=G[method];G[method]=function(...args){const p=this.player,before=method==='cast'?(p.cooldowns[args[0]]||0):method==='castSecondary'?p.secondaryCd:p.ultCd;let result;this.rigCast30=method;try{result=original.apply(this,args);}finally{this.rigCast30=null;}const after=method==='cast'?(p.cooldowns[args[0]]||0):method==='castSecondary'?p.secondaryCd:p.ultCd;if(after>before){const r=H.get(p);r.castAt=r.clock;r.castType=method==='castUltimate'?'ultimate':method==='castSecondary'?'secondary':'active';r.castDuration=method==='castUltimate'?.95:.48;r.castKind=A.Catalog?.get('skills',args[0])?.color||'nature';if(method==='castSecondary')r.attackAt=r.clock;}return result;};}
 const hurt=G.hurt;G.hurt=function(...args){const hp=this.player.hp,result=hurt.apply(this,args),lost=hp-this.player.hp;if(lost>0){const r=H.get(this.player);r.hurtAt=r.clock;r.hurtPower=clamp(lost/this.stats.maxHp*7,.2,1);const e=this._enemySource;r.hurtYaw=e?Math.atan2(e.y-this.player.y,e.x-this.player.x):r.yaw;}return result;};
 // Render-only muzzle offset: projectile collisions, range, timing and hitbox stay
 // unchanged. The first 100 ms visually connect the existing trajectory to bow.
 const bullet=G.bullet;G.bullet=function(x,y,a,n,element,o={}){const b=bullet.call(this,x,y,a,n,element,{muzzleX30:0,muzzleY30:0,...o});if(b&&!o.enemy&&!o.ricochet3&&(o.weapon23===this.weapons?.[0]?.id||this.rigCast30==='castSecondary')&&this.player.hero.id==='ilya'&&Math.hypot(x-this.player.x,y-this.player.y)<40){let r=H.get(this.player);if(r.frame===-1)r=H.solve(this,this.player,.001,this.renderer.frameDepth);b.muzzleX30=r.q[J.bowGrip*3]+this.player.x-x;b.muzzleY30=r.q[J.bowGrip*3+1]+this.player.y-y;}return b;};
 const projectile=R.drawProjectile;R.drawProjectile=function(c,b){const t=Math.max(0,1-(b.age||0)/.1);if(t>0&&b.muzzleY30!==undefined){c.save();c.translate(b.muzzleX30*t,b.muzzleY30*t);projectile.call(this,c,b);c.restore();}else projectile.call(this,c,b);};
 // Settlement remains immediate and combat is already stopped. Only revealing
 // the result panel waits briefly so the death pose is visible, never simulation.
 const results=A.UI.prototype.results;A.UI.prototype.results=function(result){const g=this.g,p=g.player;if(!result.win&&p?.hp<=0&&!g.abandonedRun){const rig=H.get(p);rig.deadAt=rig.clock;g.state='results';g.input.clear();this.overlay.replaceChildren();clearTimeout(this.deathPanel30);this.deathPanel30=setTimeout(()=>{if(g.player===p&&g.state==='results')results.call(this,result);},650);return;}return results.call(this,result);};
})(window.Aeren);

;
'use strict';
(function(A){
 const S=A.Save,P=A.UI.prototype,G=A.Game.prototype,B=window.AEREN_RELEASE,K=window.AEREN_STORAGE;
 A.Build=B;A.Data.version=B.gameVersion;document.title='AEREN '+B.gameVersion+' Release Candidate';
 A.Locale.add(`
Po zdobyciu|On acquisition|Beim Erhalt
Odblokowuje tę umiejętność.|Unlocks this ability.|Schaltet diese Fähigkeit frei.
NOWA UMIEJĘTNOŚĆ|NEW ABILITY|NEUE FÄHIGKEIT
Strzałki wybierają kartę · Enter zatwierdza. Następnie wybierzesz wyposażenie. Limit: 4 zaklęcia samoczynne, 3 aktywne, 8 talentów i 2 dary legendarne.|Arrow keys select a card · Enter confirms. Next, choose equipment. Limits: 4 automatic spells, 3 active abilities, 8 talents and 2 legendary gifts.|Pfeiltasten wählen eine Karte · Enter bestätigt. Danach wählst du Ausrüstung. Limits: 4 automatische Zauber, 3 aktive Fähigkeiten, 8 Talente und 2 legendäre Gaben.
Pokaż / ukryj szczegóły kart|Show / hide card details|Kartendetails anzeigen / ausblenden
Przeskok na dodatkowe cele|Chains to additional targets|Sprünge zu zusätzlichen Zielen
Co 5. atak: rozszczepiona salwa|Every 5th attack: split volley|Jeder 5. Angriff: geteilte Salve
pozostało|remaining|übrig
Przedmioty nie zajmują nieskończonego plecaka. Gdy miejsca są pełne, wybierasz co zastąpić. Przelosowania są zapisywane.|Equipment slots are limited. When full, choose what to replace. Rerolls are saved.|Ausrüstungsplätze sind begrenzt. Sind sie voll, wählst du einen Ersatz. Neuwürfe werden gespeichert.
Darmowe przelosowanie|Free reroll|Kostenloser Neuwurf
Kuźnia|Forge|Schmiede

Profil i pomoc|Profile and help|Profil und Hilfe
Przywróć ustawienia domyślne|Restore default settings|Standardeinstellungen wiederherstellen
Kopia profilu|Export profile backup|Profilsicherung exportieren
Raport diagnostyczny|Diagnostic report|Diagnosebericht
Niedostępne w tym wydaniu.|Unavailable in this release.|In dieser Version nicht verfügbar.
Kontroler: obsługa eksperymentalna. Zalecane klawiatura i mysz.|Controller support is experimental. Keyboard and mouse recommended.|Controller-Unterstützung ist experimentell. Tastatur und Maus empfohlen.
Nie udało się zapisać postępu|Progress could not be saved|Fortschritt konnte nicht gespeichert werden
Poprzedni zapis został zachowany. Sprawdź wolne miejsce.|The previous save was preserved. Check available storage.|Der vorherige Spielstand wurde beibehalten. Prüfe den verfügbaren Speicherplatz.
Wstrzymano grę z powodu błędu|Game paused because of an error|Spiel wegen eines Fehlers pausiert
Zapisz raport diagnostyczny w ustawieniach.|Export a diagnostic report in Settings.|Exportiere einen Diagnosebericht in den Einstellungen.
Raport diagnostyczny znajdziesz w ustawieniach.|A diagnostic report is available in Settings.|Ein Diagnosebericht ist in den Einstellungen verfügbar.
To lokalne wydanie Release Candidate. Automatyczne aktualizacje nie są jeszcze udostępnione. Nową paczkę instaluj ręcznie; zapis pozostaje na tym komputerze.|This is a local Release Candidate. Automatic updates are not available yet. Install new packages manually; your save stays on this computer.|Dies ist ein lokaler Release Candidate. Automatische Updates sind noch nicht verfügbar. Installiere neue Pakete manuell; dein Spielstand bleibt auf diesem Computer.
`);
 const ranges={scale:[.5,1.5,1],particles:[0,1,1],shake:[0,1,.6],master:[0,1,.55],music:[0,1,.25],sfx:[0,1,.65],hudOpacity:[.65,1,.94],flash3:[0,1,1],damageSize3:[.8,1.8,1],playerFX3:[.15,1,.85],statusSize3:[.75,2,1]};
 const defaults={auto:true,autoAim:true,numbers:true,hudLayout:'auto',hudSize:'medium',hudAlign:'center',lowHP:'subtle',weaponStats:true,enemyOutline3:true,altThreat3:false,skillAim3:false,pauseChoices3:true,threat3:'standard',history3:true,cues3:true,lowFX:false,language:'en',bindings:{}};
 for(const [key,range]of Object.entries(ranges))defaults[key]=range[2];
 function settings(){const s=S.data.settings;for(const [key,[min,max,fallback]]of Object.entries(ranges)){const n=Number(s[key]);s[key]=Number.isFinite(n)?Math.max(min,Math.min(max,n)):fallback;}for(const [key,values]of Object.entries({hudLayout:['auto','classic','round'],hudSize:['small','medium','large'],hudAlign:['left','center','right'],lowHP:['full','subtle','off'],threat3:['standard','high','max'],language:['pl','en','de']}))if(!values.includes(s[key]))s[key]=defaults[key];for(const [key,value]of Object.entries(defaults))if(typeof value==='boolean'&&typeof s[key]!=='boolean')s[key]=value;if(!s.bindings||typeof s.bindings!=='object'||Array.isArray(s.bindings))s.bindings={};delete s.bindings.debug;}
 let transaction=false;
 function atomic(action){if(transaction)return action();let before;try{before=K.capture();localStorage.setItem(K.journal,JSON.stringify(before));transaction=true;const ok=action();if(ok===false)throw Error('save');K.validate(K.capture());localStorage.removeItem(K.journal);S.error=false;return ok;}catch(e){S.error=true;if(before)try{K.restore(before);localStorage.removeItem(K.journal);}catch(ignored){}A.game?.ui?.toast('Nie udało się zapisać postępu','Poprzedni zapis został zachowany. Sprawdź wolne miejsce.');return false;}finally{transaction=false;}}
 const load=S.load;S.load=function(){const fresh=!K.keys.some(key=>localStorage.getItem(key)!==null);const d=load.call(this);if(fresh)d.settings.language='en';settings();d.gameVersion=B.gameVersion;d.saveSchemaVersion=1;d.buildId=B.buildId;return d;};
 for(const method of ['write','writeMeta23','writeRun','clearRun']){const old=S[method];S[method]=function(...args){if(method==='write')settings();if(method==='writeRun')args[0]={...args[0],gameVersion:B.gameVersion,saveSchemaVersion:2,buildId:B.buildId};return atomic(()=>old.apply(this,args));};}
 // Public builds retain developer source externally, but expose no debug controls.
 A.Controls.rows.splice(0,A.Controls.rows.length,...A.Controls.rows.filter(row=>row[0]!=='debug'));const tap=A.Controls.tap;A.Controls.tap=function(input,id){return id==='debug'?false:tap.call(this,input,id);};
 const bind=A.Controls.bind;A.Controls.bind=function(id,code){return id==='debug'?'Niedostępne w tym wydaniu.':bind.call(this,id,code);};
 P.controls=function(){return '<div class="hint">'+A.Controls.rows.map(([id,label])=>'<kbd>'+A.Controls.label(id)+'</kbd> '+(id==='dash'?'Unik':label)).join(' · ')+'<br>Kontroler: obsługa eksperymentalna. Zalecane klawiatura i mysz.</div>';};
 // A settings redraw must not enqueue the generic first-button focus callback.
 const focus=P.focus;P.focus=function(...args){if(!this.restoringSettings100)return focus.apply(this,args);};
 const oldSettings=P.settings;P.settings=function(...args){
  const previous=this.overlay.querySelector('.panel'),active=document.activeElement;
  const saved=this.g.state==='settings'&&previous?{panel:previous.scrollTop,overlay:this.overlay.scrollTop,x:scrollX,y:scrollY,action:active?.dataset.action,value:active?.dataset.value,setting:active?.dataset.setting}:null;
  this.restoringSettings100=!!saved;
  try{oldSettings.apply(this,args);}finally{this.restoringSettings100=false;}
  const panel=this.overlay.querySelector('.panel');
  panel.insertAdjacentHTML('beforeend','<h2>Profil i pomoc</h2><p>AEREN '+B.gameVersion+' · '+B.buildId+'</p><div class="actions">'+this.button('Przywróć ustawienia domyślne','defaults100')+this.button('Kopia profilu','backup100')+this.button('Raport diagnostyczny','diagnostics100')+'</div>');
  A.Locale?.refresh();
  if(saved){const target=[...panel.querySelectorAll('[data-action],[data-setting]')].find(e=>saved.setting?e.dataset.setting===saved.setting:saved.action&&e.dataset.action===saved.action&&e.dataset.value===saved.value);target?.focus({preventScroll:true});panel.scrollTop=saved.panel;this.overlay.scrollTop=saved.overlay;window.scrollTo(saved.x,saved.y);}
 };
 const menu=P.menu;P.menu=function(...args){menu.apply(this,args);this.overlay.querySelector('main')?.insertAdjacentHTML('beforeend','<p class="hint">AEREN '+B.gameVersion+' · Release Candidate</p>');};
 const action=P.action;P.action=function(id,value){if(id==='updates'){this.panel('Aktualizacje','AEREN '+B.gameVersion,'<p>To lokalne wydanie Release Candidate. Automatyczne aktualizacje nie są jeszcze udostępnione. Nową paczkę instaluj ręcznie; zapis pozostaje na tym komputerze.</p>','menu');return;}if(id==='defaults100'){S.data.settings={...defaults,bindings:{}};S.write();A.Locale?.set('en');this.settings(this.settingsBack23||'menu');return;}if(id==='backup100'){K.download('AEREN-profil.json',K.capture());return;}if(id==='diagnostics100'){K.download('AEREN-diagnostyka.json',A.diagnostic100());return;}return action.call(this,id,value);};
 let lastError=null;
 A.diagnostic100=()=>({...B,platform:navigator.platform,viewport:{width:innerWidth,height:innerHeight},state:A.game?.state||'startup',error:lastError,modules:'runtime',date:new Date().toISOString()});
 A.reportError100=function(error){lastError={type:String(error?.name||'Error').slice(0,50),code:'AEREN-RUNTIME'};if(A.game){if(A.game.state==='playing')A.game.pause();A.game.ui.toast('Wstrzymano grę z powodu błędu','Zapisz raport diagnostyczny w ustawieniach.');}};
 window.addEventListener('error',e=>{A.reportError100(e.error);});window.addEventListener('unhandledrejection',e=>{A.reportError100(e.reason);});
 // Stop already scheduled combat effects when leaving active gameplay.
 const stop=()=>{if(A.Audio.ctx){const state=A.SoundFX?.state(A.Audio.ctx,A.Audio.master);for(const group of [...(state?.groups||[])])group.stop();}};
 for(const method of ['pause','finish']){const original=G[method];G[method]=function(...args){stop();return original.apply(this,args);};}
 window.addEventListener('blur',()=>{if(A.game?.state==='playing')A.game.pause();stop();});document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});
 const oldExport=A.Endgame.export;A.Endgame.export=()=>({...oldExport(),gameVersion:B.gameVersion,buildId:B.buildId,saveSchemaVersion:B.saveSchemaVersion});
})(window.Aeren);

;
'use strict';
(function(A){
  A.Save.load();
  const game=new A.Game(document.getElementById('game'));
  game.ui=new A.UI(game);
  game.renderer=new A.Renderer(game);
  A.game=game;
  A.installNavigationGuard(game);
  game.ui.menu();
  let last=performance.now(),smooth=16.67;
  function frame(now){
    const elapsed=Math.min(.1,(now-last)/1000);
    last=now;
    smooth=smooth*.95+elapsed*1000*.05;
    game.fps=1000/Math.max(1,smooth);
    try{
      if(game.hitStop>0){
        game.hitStop-=elapsed;
      }
      else{
        let remaining=elapsed;
        while(remaining>0){const step=Math.min(remaining,1/60);game.update(step);remaining-=step;}
      }
      if(game.state==='playing'||game.state==='menu')game.effects(elapsed);
      game.renderer.render(elapsed);
      game.ui.update(elapsed);
    }
    catch(error){
      A.reportError100(error);
      if(game.state==='playing')game.pause();
      if(!game.lastError){
        game.lastError=error;
        game.ui.toast('Wstrzymano grę z powodu błędu','Raport diagnostyczny znajdziesz w ustawieniach.');
      }
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})(window.Aeren);

;
'use strict';
(function(A){
 const themes=[
  {name:'Szepty podziemi',bpm:66,root:38,scale:[0,2,3,5,7,8,10],chords:[0,5,3,4],lead:'plucked',melody:[0,-1,4,2,1,-1,3,-1,2,4,6,-1,4,2,1,-1],tone:650,drums:.55},
  {name:'Lodowe wspomnienie',bpm:58,root:45,scale:[0,2,3,5,7,8,10],chords:[0,3,5,4],lead:'bell',melody:[7,-1,4,-1,6,4,2,-1,3,-1,5,4,2,-1,0,-1],tone:1400,drums:.12},
  {name:'Korzenie zmierzchu',bpm:76,root:43,scale:[0,2,3,5,7,9,10],chords:[0,3,1,4],lead:'harp',melody:[0,2,4,-1,3,2,1,-1,2,4,5,4,3,-1,1,0],tone:1100,drums:.3},
  {name:'Serce popiołu',bpm:92,root:38,scale:[0,1,3,5,7,8,10],chords:[0,1,5,4],lead:'plucked',melody:[0,0,4,-1,1,0,3,-1,4,3,1,0,5,-1,4,-1],tone:950,drums:.95},
  {name:'Lament umarłych',bpm:52,root:36,scale:[0,2,3,5,6,8,10],chords:[0,5,3,0],lead:'choir',melody:[4,-1,3,-1,2,-1,0,-1,5,-1,4,3,2,-1,0,-1],tone:520,drums:.18},
  {name:'Wrota Otchłani',bpm:104,root:35,scale:[0,1,3,5,6,8,10],chords:[0,1,4,0],lead:'bell',melody:[0,-1,1,0,4,-1,3,1,0,4,5,-1,4,1,0,-1],tone:820,drums:1}
 ];
 const frequency=n=>440*Math.pow(2,(n-69)/12),degree=(theme,n)=>theme.root+theme.scale[((n%7)+7)%7]+12*Math.floor(n/7);
 // Each floor keeps its instrumentation and motif; faster low-register ostinati
 // drive combat. The sanctuary and guardian use independent compositions.
 const tempos=[96,88,104,120,92,132];
 themes.forEach((t,i)=>{t.bpm=tempos[i];t.root-=i===1?5:2;t.drums=Math.max(.45,t.drums);});
 const menuTheme={name:'Przysięga w cieniu',bpm:68,root:33,scale:[0,1,3,5,7,8,10],chords:[0,5,1,0],lead:'choir',melody:[0,-1,-1,2,-1,1,-1,-1,4,-1,3,-1,1,-1,0,-1],tone:680,drums:.22};
 const bossThemes=themes.map((t,i)=>({...t,name:'Strażnik · '+t.name,bpm:t.bpm+18,root:t.root-5,scale:[0,1,3,5,6,8,11],chords:[0,1,4,0],melody:[0,0,1,0,4,3,1,-1,0,4,5,4,1,0,3,1],drums:1.15,lead:i===1?'bell':'choir',tone:900}));
 const M=A.Music={themes,menuTheme,bossThemes,layer:null,timer:null,context:null,voices:0,fading:new Set()};
 M.scene=function(g){const index=Math.max(0,Math.min(5,g?.biome||0));
  const inRun=g?.player?.runId&&!g.endSaved&&['playing','paused','levelup','gear','replace','equip','event','sliceChoice','decision3','build','market28','potionShop28'].includes(g.state);
  return {index:inRun?index:0,mode:!inRun?'menu':g.boss?.hp>0&&!g.boss.dead?'boss':'explore'};
 };
 function voice(ctx,out,midi,time,duration,volume,kind='pad',pan=0){
  const envelope=ctx.createGain(),filter=ctx.createBiquadFilter(),stereo=ctx.createStereoPanner();
  filter.type='lowpass';filter.frequency.value=kind==='pad'?1200:kind==='choir'?950:kind==='harp'?2600:4500;stereo.pan.value=pan;
  envelope.connect(filter);filter.connect(stereo);stereo.connect(out);
  const attack=kind==='pad'?.65:kind==='choir'?.28:.012,end=time+duration;
  envelope.gain.setValueAtTime(0,time);envelope.gain.linearRampToValueAtTime(volume,time+Math.min(attack,duration*.2));envelope.gain.exponentialRampToValueAtTime(.0001,end);
  const partials=kind==='bell'?[[1,1],[2.01,.32],[3.98,.1]]:kind==='choir'?[[1,1],[2,.2],[3,.08]]:kind==='pad'?[[1,1],[1.003,.4],[2,.1]]:[[1,1],[2,.24]];
  let left=partials.length;M.voices++;
  for(const [ratio,amp]of partials){const osc=ctx.createOscillator(),gain=ctx.createGain();osc.type=kind==='harp'||kind==='plucked'?'triangle':'sine';osc.frequency.value=frequency(midi)*ratio;gain.gain.value=amp;osc.connect(gain);gain.connect(envelope);osc.start(time);osc.stop(end+.03);osc.onended=()=>{osc.disconnect();gain.disconnect();if(--left===0){envelope.disconnect();filter.disconnect();stereo.disconnect();M.voices--;}};}
 }
 function drum(ctx,out,time,volume,high=false){const osc=ctx.createOscillator(),gain=ctx.createGain();osc.type='sine';osc.frequency.setValueAtTime(high?160:85,time);osc.frequency.exponentialRampToValueAtTime(high?65:34,time+.18);gain.gain.setValueAtTime(.0001,time);gain.gain.linearRampToValueAtTime(volume,time+.006);gain.gain.exponentialRampToValueAtTime(.0001,time+.45);osc.connect(gain);gain.connect(out);osc.start(time);osc.stop(time+.5);osc.onended=()=>{osc.disconnect();gain.disconnect();};}
 M.createLayer=function(ctx,index,mode='explore'){
  const theme=mode==='menu'?menuTheme:mode==='boss'?bossThemes[index]:themes[index],input=ctx.createGain(),filter=ctx.createBiquadFilter(),gain=ctx.createGain(),delay=ctx.createDelay(2),feedback=ctx.createGain(),wet=ctx.createGain(),limiter=ctx.createDynamicsCompressor();
  filter.type='lowpass';filter.frequency.value=theme.tone*2;input.connect(filter);filter.connect(gain);filter.connect(delay);delay.delayTime.value=60/theme.bpm*.75;feedback.gain.value=.24;wet.gain.value=.24;delay.connect(feedback);feedback.connect(delay);delay.connect(wet);wet.connect(gain);
  limiter.threshold.value=-14;limiter.knee.value=15;limiter.ratio.value=4;limiter.attack.value=.01;limiter.release.value=.3;gain.connect(limiter);limiter.connect(ctx.destination);gain.gain.value=0;
  return {index,mode,theme,input,gain,step:0,next:ctx.currentTime+.05,dispose(){if(this.disposed)return;this.disposed=true;clearTimeout(this.disposeTimer);for(const n of [input,filter,gain,delay,feedback,wet,limiter])n.disconnect();M.fading.delete(this);}};
 };
 M.schedule=function(ctx,layer,time){
  const t=layer.theme,step=layer.step++,beat=60/t.bpm,bar=Math.floor(step/8),chord=t.chords[Math.floor(bar/2)%t.chords.length];
  if(step%8===0){for(const [i,n]of [chord,chord+2,chord+4].entries())voice(ctx,layer.input,degree(t,n)+12,time,beat*5,.065,'pad',(i-1)*.48);voice(ctx,layer.input,degree(t,chord)-12,time,beat*4,.095,'pad');}
  const note=t.melody[step%t.melody.length];
  if(note>=0){const variation=Math.floor(bar/8)%2?7:0;voice(ctx,layer.input,degree(t,note+variation)+12,time,beat*(t.lead==='choir'?3:2),t.lead==='bell'?.08:.09,t.lead,Math.sin(step*.7)*.35);}
  if(step%4===0)drum(ctx,layer.input,time,.13*t.drums);
  if(step%8===6)drum(ctx,layer.input,time,.065*t.drums,true);
  if(layer.mode!=='menu'){
   const bass=[0,0,4,0,2,0,4,1][step%8];
   voice(ctx,layer.input,degree(t,chord+bass)-12,time,beat*.7,.07,'plucked',-.2);
   if(step%4===2)drum(ctx,layer.input,time,.06*t.drums,true);
   if(layer.mode==='boss'&&step%2===1){drum(ctx,layer.input,time,.05,true);voice(ctx,layer.input,degree(t,chord+4),time,beat*.4,.035,'plucked',.3);}
  }
 };
 M.tick=function(){
  const ctx=A.Audio.ctx;if(!ctx||ctx.state==='closed'){M.stop();return;}if(ctx.state!=='running')return;
  const g=A.game,s=A.Save.data.settings,{index,mode}=M.scene(g);
  if(M.context!==ctx){M.layer?.dispose();for(const old of M.fading)old.dispose();M.layer=null;M.context=ctx;}
  if(!M.layer||M.layer.index!==index||M.layer.mode!==mode){const old=M.layer;M.layer=M.createLayer(ctx,index,mode);if(old){old.gain.gain.cancelScheduledValues(ctx.currentTime);old.gain.gain.setTargetAtTime(0,ctx.currentTime,.35);M.fading.add(old);old.disposeTimer=setTimeout(()=>old.dispose(),2400);if(M.fading.size>2)M.fading.values().next().value.dispose();}}
  const layer=M.layer,quiet=!g||['menu','settings','paused','results','market28','potionShop28'].includes(g.state),target=document.hidden?0:Math.max(0,s.master)*Math.max(0,s.music)*(quiet?.55:1)*1.6;
  layer.gain.gain.setTargetAtTime(target,ctx.currentTime,.18);
  if(document.hidden||target===0){for(const old of M.fading)old.gain.gain.setTargetAtTime(0,ctx.currentTime,.03);layer.next=ctx.currentTime+.08;return;}
  if(layer.next<ctx.currentTime-.2)layer.next=ctx.currentTime+.03;
  while(layer.next<ctx.currentTime+.18){M.schedule(ctx,layer,layer.next);layer.next+=30/layer.theme.bpm;}
 };
 M.stop=function(){if(M.timer)clearInterval(M.timer);M.timer=null;if(M.layer)M.layer.dispose();for(const old of M.fading)old.dispose();M.layer=null;};
 const init=A.Audio.init;A.Audio.init=function(){init.call(this);if(this.ctx&&!M.timer){M.context=this.ctx;M.timer=setInterval(M.tick,80);M.tick();}};
 A.Audio.update=function(){}; // The music clock continues smoothly during reward choices.
 window.addEventListener('pagehide',M.stop);
 document.addEventListener('visibilitychange',()=>{if(document.hidden&&M.layer&&A.Audio.ctx)M.layer.gain.gain.setTargetAtTime(0,A.Audio.ctx.currentTime,.06);else if(!document.hidden&&A.Audio.ctx)A.Audio.init();});
})(window.Aeren);
