// Focused changes to the existing version 9 maquette.
const providerCopy = {
  es: {nav:'Proveedores', title:'Dónde encontrar mis guitarras.', note:'Listado de proveedores pendiente de completar.', back:'Inicio'},
  fr: {nav:'Revendeurs', title:'Où trouver mes guitares.', note:'La liste des revendeurs reste à compléter.', back:'Accueil'},
  en: {nav:'Dealers', title:'Where to find my guitars.', note:'The dealer list is yet to be added.', back:'Home'}
};
function renderProviders(){
  const c=providerCopy[lang];
  main.innerHTML=`<section class="practical-page providers-page"><a class="breadcrumbs" href="#/">← ${c.back}</a><p class="eyebrow">${c.nav}</p><h1>${c.title}</h1><p class="practical-lead">${c.note}</p></section>`;
  applyLanguage();
}
updateNav=function(){
  const labels={es:['Guitarras','Tu guitarra','Proveedores','Contacto'],fr:['Guitares','Votre guitare','Revendeurs','Contact'],en:['Guitars','Your guitar','Dealers','Contact']}[lang];
  const nav=document.querySelector('header nav');
  nav.innerHTML=`<a href="#/guitars">${labels[0]}</a><a href="#passport">${labels[1]}</a><a href="#/providers">${labels[2]}</a><details class="contact-menu"><summary>${labels[3]}</summary><div class="contact-submenu"><a href="#contact">${labels[3]}</a><a href="#/order">${practical[lang].order}</a></div></details>`;
  document.querySelector('.brand').href='#/';
  renderPracticalFooter();
};
// Move the complete text block by the distance between its two text elements.
const heroTextObserver=new ResizeObserver(entries=>{
  for(const {target:block} of entries){
    const title=block.querySelector('h1');
    const subtitle=block.querySelector('.intro');
    if(title&&subtitle)block.style.setProperty('--hero-text-shift',Math.max(0,subtitle.offsetTop-title.offsetTop)+'px');
  }
});
const homeBeforePhotoUpdate=renderHome;
renderHome=function(){
  homeBeforePhotoUpdate();
  const photo=document.querySelector('.hero-photo img');
  photo.src='assets/real/real-top.jpg';
  photo.alt={es:'Guitarra real de Víctor Iermito: tapa de cedro y roseta original',fr:'Guitare de Victor Iermito : table en cèdre et rosace originale',en:'Victor Iermito guitar: cedar soundboard and original rosette'}[lang];
  photo.setAttribute('fetchpriority','high');
  const title=document.querySelector('.hero h1');
  title.textContent=tr('hero').replace(/<br\s*\/?\s*>/gi,' ').replace(/<[^>]*>/g,'');
  heroTextObserver.disconnect();
  heroTextObserver.observe(document.querySelector('.hero-copy'));
  const contact=document.querySelector('.contact');
  contact.insertAdjacentHTML('beforeend',`<p class="contact-order"><a class="text-link" href="#/order">${practical[lang].order} ↗</a></p>`);
  const socials=document.querySelector('.socials');
  if(socials){
    const facebook=socials.querySelector('a[href*="facebook.com"]');
    const instagram=socials.querySelector('a[href*="instagram.com"]');
    if(facebook){facebook.setAttribute('aria-label','Facebook');facebook.innerHTML='<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="#1877F2"/><path fill="white" d="M18.4 32V19.6h4.2l.6-4.8h-4.8v-3.1c0-1.4.4-2.3 2.4-2.3h2.6V5.1c-.4-.1-2-.2-3.8-.2-3.7 0-6.2 2.2-6.2 6.3v3.6H9.2v4.8h4.2V32z"/></svg>';}
    if(instagram){instagram.setAttribute('aria-label','Instagram');instagram.innerHTML='<svg viewBox="0 0 32 32" aria-hidden="true"><defs><radialGradient id="instagram-colors" cx=".25" cy="1" r="1.2"><stop stop-color="#FFDC80"/><stop offset=".3" stop-color="#F77737"/><stop offset=".6" stop-color="#E1306C"/><stop offset="1" stop-color="#833AB4"/></radialGradient></defs><rect width="32" height="32" rx="8" fill="url(#instagram-colors)"/><rect x="6.5" y="6.5" width="19" height="19" rx="5.5" fill="none" stroke="white" stroke-width="2.2"/><circle cx="16" cy="16" r="4.6" fill="none" stroke="white" stroke-width="2.2"/><circle cx="22.2" cy="9.8" r="1.4" fill="white"/></svg>';}
  }
  // One opaque full-width layer covers the photograph, including section margins.
  const hero=document.querySelector('.hero');
  const content=document.createElement('div');
  content.className='home-content';
  while(hero.nextSibling)content.append(hero.nextSibling);
  main.append(content);
  // Preserve the listening section, without the video link.
  document.querySelector('.listen .button')?.remove();
};
document.addEventListener('keydown',e=>{if(e.key==='Escape'){const menu=document.querySelector('.contact-menu[open]');if(menu){menu.open=false;menu.querySelector('summary').focus()}}});
document.addEventListener('click',e=>{const menu=document.querySelector('.contact-menu[open]');if(menu&&!menu.contains(e.target))menu.open=false;});
const measureHeader=()=>document.documentElement.style.setProperty('--header-height',document.querySelector('header').getBoundingClientRect().height+'px');
new ResizeObserver(measureHeader).observe(document.querySelector('header'));
route();
measureHeader();
