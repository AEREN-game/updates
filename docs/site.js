'use strict';
const worlds=['Podziemia Żelaznej Pieczęci','Lodowe Pustkowia','Prastary Las','Ogniste Rozpadliny','Wąwóz Umarłych','Szósty Krąg Piekła'];
document.querySelectorAll('[data-world]').forEach(button=>button.addEventListener('click',()=>{
 const i=Number(button.dataset.world),src='assets/world-'+(i+1)+'.jpg';
 document.querySelectorAll('[data-world]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 const img=document.getElementById('world-image');img.src=src;img.alt=worlds[i];
 document.getElementById('world-name').textContent=worlds[i];document.getElementById('world-count').textContent='0'+(i+1)+' / 06';
 const zoom=document.getElementById('world-zoom');zoom.dataset.image=src;zoom.dataset.caption=worlds[i]+' — przygotowana scena demonstracyjna.';
}));
const dialog=document.getElementById('lightbox');let opener;
document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{opener=button;const img=document.getElementById('lightbox-image');img.src=button.dataset.image;img.alt=button.dataset.caption;document.getElementById('lightbox-caption').textContent=button.dataset.caption;dialog.showModal();}));
document.getElementById('close-lightbox').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>opener?.focus({preventScroll:true}));
