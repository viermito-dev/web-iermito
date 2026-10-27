// Focused changes to the existing version 9 maquette.
const providerCopy = {
  es:{nav:'Puntos de venta',title:'Dónde encontrar mis guitarras',back:'Inicio'},
  fr:{nav:'Points de vente',title:'Où trouver mes guitares',back:'Accueil'},
  en:{nav:'Dealers',title:'Where to find my guitars',back:'Home'}
};
const dealers=[{"name": "La Guitarrería de París", "url": "https://www.laguitarreriadeparis.com/", "image": "assets/dealers/guitarreria-paris.png", "lightLogo": false}, {"name": "Casa Luthier", "url": "https://casaluthier.com/es/", "image": "assets/dealers/casa-luthier.png", "lightLogo": false}, {"name": "London Guitar Studio", "url": "https://www.londonguitarstudio.com/", "image": "assets/dealers/london-guitar-studio.png", "lightLogo": false}, {"name": "Salotto", "url": "https://www.salotto-kyoto.com/top", "image": "assets/dealers/salotto.png", "lightLogo": false}, {"name": "Larghetto", "url": "https://www.larghetto.eu/", "image": "assets/dealers/larghetto.png", "lightLogo": true}, {"name": "Vincenti Guitares", "url": "https://www.vincenti-guitares.com/", "image": "assets/dealers/vincenti-guitares.png", "lightLogo": false}, {"name": "Guitarras de Luthier", "url": "https://www.guitarrasdeluthier.com/", "image": "assets/dealers/guitarras-de-luthier.png", "lightLogo": false}];
function renderProviders(){
  const c=providerCopy[lang];
  main.innerHTML=`<section class="practical-page providers-page"><a class="breadcrumbs" href="#/">← ${c.back}</a><p class="eyebrow">${c.nav}</p><h1>${c.title}</h1><div class="dealer-grid">${dealers.map(d=>`<a class="dealer-card" href="${d.url}" target="_blank" rel="noopener" aria-label="${d.name}" title="${d.name}"><span class="dealer-logo${d.lightLogo?' dealer-logo-light':''}"><img src="${d.image}" alt="${d.name}" loading="lazy"></span></a>`).join('')}</div></section>`;
  applyLanguage();
}
updateNav=function(){
  const labels={es:['Guitarras','Tu guitarra',providerCopy.es.nav,'Contacto'],fr:['Guitares','Votre guitare',providerCopy.fr.nav,'Contact'],en:['Guitars','Your guitar','Dealers','Contact']}[lang];
  const nav=document.querySelector('header nav');
  nav.innerHTML=`<a href="#/guitars">${labels[0]}</a><a href="#passport">${labels[1]}</a><a href="#/providers">${labels[2]}</a><details class="contact-menu"><summary>${labels[3]}</summary><div class="contact-submenu"><a href="#/contact">${labels[3]}</a><a href="#/order">${practical[lang].order}</a></div></details>`;
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
  const contactButton=contact.querySelector('.button');
  contactButton.href='#/contact';contactButton.removeAttribute('target');
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
const contactCopy={
 es:{nav:'Contacto',home:'Inicio',title:'Hablemos de tu próxima guitarra.',intro:'Para consultar por un instrumento, conversar sobre un encargo o concertar una visita al taller.',workshop:'El taller',phone:'Teléfono',email:'Correo',country:'Francia',appointment:'Visitas con cita previa',whatsapp:'Contactar por WhatsApp'},
 fr:{nav:'Contact',home:'Accueil',title:'Parlons de votre prochaine guitare.',intro:'Pour vous renseigner sur un instrument, discuter d’une commande ou organiser une visite à l’atelier.',workshop:'L’atelier',phone:'Téléphone',email:'E-mail',country:'France',appointment:'Visite sur rendez-vous',whatsapp:'Contacter par WhatsApp'},
 en:{nav:'Contact',home:'Home',title:'Let’s talk about your next guitar.',intro:'To enquire about an instrument, discuss a commission or arrange a visit to the workshop.',workshop:'The workshop',phone:'Phone',email:'Email',country:'France',appointment:'Visits by appointment',whatsapp:'Contact via WhatsApp'}
};
function renderContact(){
  // Reuse the existing branded social icons without duplicating their definitions.
  renderHome();
  const social=main.querySelector('.socials').outerHTML;
  heroTextObserver.disconnect();
  const c=contactCopy[lang];
  main.innerHTML=`<section class="contact-page practical-page"><a class="breadcrumbs" href="#/">${c.home} / ${c.nav}</a><p class="eyebrow">${c.nav}</p><h1>${c.title}</h1><p class="contact-intro">${c.intro}</p><div class="contact-columns"><div><h2>${c.workshop}</h2><address>103 rue Raspail<br>94700 Maisons-Alfort, ${c.country}</address><p class="appointment-note">${c.appointment}</p></div><div class="contact-direct"><h2>${c.phone}</h2><div class="contact-phone"><a class="whatsapp-link" href="https://wa.me/33688401450" target="_blank" rel="noopener" aria-label="${c.whatsapp}" title="${c.whatsapp}"><svg viewBox="0 0 32 32" aria-hidden="true"><path fill="#25D366" d="M16 1.5A14.3 14.3 0 0 0 3.6 22.9L1.5 30.5l7.8-2A14.3 14.3 0 1 0 16 1.5z"/><path fill="none" stroke="white" stroke-width="1.7" d="M16 4.2a11.7 11.7 0 0 0-10 17.8l-1.4 5 5.1-1.3A11.7 11.7 0 1 0 16 4.2z"/><path fill="white" d="M11.3 9.6c-.3-.7-.6-.7-1-.7h-.7c-.4 0-.8.2-1.1.6-.4.4-1.4 1.4-1.4 3.4s1.5 3.9 1.7 4.2c.2.3 2.9 4.5 7.1 6.1 3.5 1.3 4.2 1 5 .9.7-.1 2.4-1 2.7-1.9.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.9-.5l-2.7-1.3c-.4-.2-.7-.3-1 .2l-1.3 1.5c-.2.3-.5.3-.9.1-1.3-.6-2.4-1.2-3.4-2.3-.8-.9-1.4-1.9-1.6-2.3-.2-.4 0-.6.2-.8l.7-.8c.2-.3.3-.5.4-.8.1-.3.1-.5 0-.8l-1-2.6z"/></svg></a><a href="tel:+33688401450">+33 6 88 40 14 50</a></div><h2>${c.email}</h2><a class="contact-email" href="mailto:info@victoriermito.com">info@victoriermito.com</a></div></div><div class="contact-bottom"><a class="text-link" href="#/order">${practical[lang].order} ↗</a>${social}</div></section>`;
  applyLanguage();
}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){const menu=document.querySelector('.contact-menu[open]');if(menu){menu.open=false;menu.querySelector('summary').focus()}}});
document.addEventListener('click',e=>{const menu=document.querySelector('.contact-menu[open]');if(menu&&!menu.contains(e.target))menu.open=false;});
const measureHeader=()=>document.documentElement.style.setProperty('--header-height',document.querySelector('header').getBoundingClientRect().height+'px');
new ResizeObserver(measureHeader).observe(document.querySelector('header'));
route();
measureHeader();
