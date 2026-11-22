(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();const d=matchMedia("(prefers-reduced-motion: reduce)").matches,c=(t,e=document)=>e.querySelector(t),u=(t,e=document)=>[...e.querySelectorAll(t)];u(".reveal").forEach(t=>{const o=[...t.parentElement.children].filter(n=>n.classList.contains("reveal")).indexOf(t);o>0&&(t.style.transitionDelay=`${Math.min(o,5)*90}ms`)});const A=new IntersectionObserver(t=>t.forEach(e=>e.isIntersecting&&(e.target.classList.add("in"),A.unobserve(e.target))),{threshold:.2});u(".reveal-clip").forEach(t=>d?t.classList.add("in"):A.observe(t));function $(t){const e=t.textContent.trim();t.innerHTML=e.split(/\s+/).map(o=>`<span class="w">${o}</span>`).join(" ")}const v=u("[data-split]"),N=()=>v.forEach(t=>t.querySelector(".w")||$(t));v.forEach($);new MutationObserver(()=>queueMicrotask(()=>(N(),m()))).observe(document.documentElement,{attributes:!0,attributeFilter:["lang"]});const T=t=>t.toLocaleString(document.documentElement.lang==="en"?"en-GB":"ro-RO"),q=new IntersectionObserver(t=>t.forEach(e=>{if(!e.isIntersecting)return;q.unobserve(e.target);const o=e.target,n=Number(o.dataset.count),a=o.firstChild,r=performance.now(),i=h=>{const l=Math.min(1,(h-r)/1600);a.textContent=T(Math.round(n*(1-Math.pow(1-l,3)))),l<1&&requestAnimationFrame(i)};requestAnimationFrame(i)}),{threshold:.6});d||u("[data-count]").forEach(t=>q.observe(t));const L=c(".hero__frame"),z=c(".hero__bg"),f=c(".hero__top"),M=c(".hero__cards"),_=c(".hero__rail"),S=c(".hero__line");function m(){const t=scrollY,e=innerHeight,o=document.documentElement.scrollHeight-e;if(L&&!d){const n=L.offsetHeight,a=Math.min(1,t/n);z.style.transform=`translate3d(0, ${t*.3}px, 0) scale(${1+a*.08})`,f&&(f.style.transform=`translate3d(0, ${t*-.12}px, 0)`,f.style.opacity=String(1-Math.min(1,a*1.6))),M&&(M.style.transform=`translate3d(0, ${t*-.05}px, 0)`)}_&&_.style.setProperty("--rail",Math.min(1,t/Math.max(1,o)).toFixed(3)),S&&S.style.setProperty("--progress",`${Math.min(100,t/Math.max(1,o)*100)}%`),v.forEach(n=>{const a=n.getBoundingClientRect(),r=n.querySelectorAll(".w"),i=d?1:Math.max(0,Math.min(1,(e*.85-a.top)/(a.height+e*.35))),h=Math.round(i*r.length);r.forEach((l,B)=>l.classList.toggle("on",B<h))})}let p=0;addEventListener("scroll",()=>p||(p=requestAnimationFrame(()=>(p=0,m()))),{passive:!0});addEventListener("resize",m);m();const x=[{href:"rezidential.html",ro:"Rezidențial",en:"Residential"},{href:"comercial.html",ro:"Comercial",en:"Commercial"},{href:"kituri.html",ro:"Kituri",en:"Kits"},{href:"proiecte.html",ro:"Proiecte",en:"Projects"},{href:"blog.html",ro:"Blog",en:"Blog"},{href:"despre.html",ro:"Despre noi",en:"About"}],O="0733 365 765",C="tel:+40733365765",k="info@esolar.ro",D=`
  <a class="logo" href="./" aria-label="eSolar, acasă" data-en-aria="eSolar, home">
    <img src="brand/esolar-mark.png" alt="eSolar" width="131" height="36" />
  </a>`;function j(t){const e=x.map(o=>`<a href="${o.href}" data-en="${o.en}"${t===o.href?' aria-current="page"':""}>${o.ro}</a>`).join("");return`
  <div class="site-header__inner wrap">
    ${D}
    <nav class="nav" aria-label="Principal">${e}</nav>
    <div class="header-actions">
      <div class="lang" role="group" aria-label="Limba / Language">
        <button type="button" data-lang="ro">RO</button>
        <button type="button" data-lang="en">EN</button>
      </div>
      <button class="theme-toggle" type="button" aria-label="Schimbă tema" data-en-aria="Switch theme">
        <svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
        <svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
      </button>
      <a class="btn-pair header-cta" href="contact.html"><span class="btn" data-en="Free quote">Ofertă gratuită</span><span class="btn-pair__arrow" aria-hidden="true">↗</span></a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Meniu" data-en-aria="Menu">
        <span></span><span></span>
      </button>
    </div>
  </div>
  <div class="mobile-menu" id="mobile-menu" hidden>
    <nav class="wrap">${e}
      <a href="contact.html" data-en="Contact">Contact</a>
      <a class="btn btn--sun" href="contact.html" data-en="Get a free quote">Cere ofertă gratuită</a>
      <a class="mobile-menu__phone" href="${C}">${O}</a>
    </nav>
  </div>`}function Y(){const t=new Date().getFullYear();return`
  <div class="footer-frame">
    <div class="footer-bg" aria-hidden="true"><img src="img/landscape.jpg" alt="" loading="lazy" /></div>
    <div class="footer-top">
      <p class="footer-claim" data-en-html="Your energy.<br><span>From your own roof.</span>">Energia ta.<br><span>De pe acoperișul tău.</span></p>
      <div class="footer-top__side">
        <span class="footer-tagline">energy one click away</span>
        <a class="btn-pair btn-pair--light" href="contact.html"><span class="btn" data-en="Get a free quote">Cere ofertă gratuită</span><span class="btn-pair__arrow" aria-hidden="true">↗</span></a>
      </div>
    </div>
    <div class="footer-cols">
      <div class="footer-col footer-col--wide">
        <h4 data-en="Menu">Meniu</h4>
        <div class="footer-col__links footer-col__links--2">
          ${x.map(e=>`<a href="${e.href}" data-en="${e.en}">${e.ro}</a>`).join("")}
          <a href="contact.html" data-en="Contact">Contact</a>
        </div>
      </div>
      <div class="footer-col">
        <h4 data-en="Solutions">Soluții</h4>
        <div class="footer-col__links">
          <a href="rezidential.html" data-en="For homes">Pentru case</a>
          <a href="comercial.html" data-en="For businesses">Pentru firme</a>
          <a href="kituri.html" data-en="Solar kits">Kituri fotovoltaice</a>
          <a href="rezidential.html#baterii" data-en="Batteries & storage">Baterii și stocare</a>
        </div>
      </div>
      <div class="footer-col">
        <h4 data-en="Talk to us">Vorbește cu noi</h4>
        <div class="footer-col__links">
          <a href="${C}">${O}</a>
          <a href="mailto:${k}">${k}</a>
          <a href="https://www.facebook.com/EsolarRomania" target="_blank" rel="noopener">Facebook</a>
          <span data-en="Mon–Fri, 8:30–16:00">Luni–Vineri, 8:30–16:00</span>
          <span data-en="Timișoara · Bucharest">Timișoara · București</span>
        </div>
      </div>
    </div>
    <div class="footer-legal">
      <span>© ${t} eSolar · Amur Solar Energy SRL</span>
      <nav aria-label="Legal">
        <a href="confidentialitate.html" data-en="Privacy">Confidențialitate</a>
        <a href="confidentialitate.html#cookie" data-en="Cookies">Cookie-uri</a>
        <a href="https://anpc.ro/" target="_blank" rel="noopener">ANPC</a>
        <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener" data-en="ADR">SAL</a>
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener" data-en="ODR">SOL</a>
      </nav>
      <span data-en="Made in Romania, powered by the sun.">Făcut în România, alimentat de soare.</span>
    </div>
    <div class="footer-mark" aria-hidden="true"><img src="brand/esolar-mark-xl.png" alt="" loading="lazy" /></div>
  </div>`}const P="esolar-lang";function K(){try{return localStorage.getItem(P)||"ro"}catch{return"ro"}}function H(t){document.documentElement.lang=t,document.querySelectorAll("[data-en]").forEach(e=>{"ro"in e.dataset||(e.dataset.ro=e.textContent.trim()),e.textContent=t==="en"?e.dataset.en:e.dataset.ro}),document.querySelectorAll("[data-en-html]").forEach(e=>{"roHtml"in e.dataset||(e.dataset.roHtml=e.innerHTML),e.innerHTML=t==="en"?e.dataset.enHtml:e.dataset.roHtml}),document.querySelectorAll("[data-en-placeholder]").forEach(e=>{"roPlaceholder"in e.dataset||(e.dataset.roPlaceholder=e.placeholder),e.placeholder=t==="en"?e.dataset.enPlaceholder:e.dataset.roPlaceholder}),document.querySelectorAll("[data-en-aria]").forEach(e=>{"roAria"in e.dataset||(e.dataset.roAria=e.getAttribute("aria-label")||""),e.setAttribute("aria-label",t==="en"?e.dataset.enAria:e.dataset.roAria)}),document.querySelectorAll(".lang button").forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.lang===t)));try{localStorage.setItem(P,t)}catch{}}const G=location.pathname.split("/").pop()||"index.html",s=document.createElement("header");s.className="site-header";s.innerHTML=j(G);document.body.prepend(s);const y=document.createElement("footer");y.className="site-footer";y.innerHTML=Y();document.body.append(y);document.querySelectorAll(".lang button").forEach(t=>t.addEventListener("click",()=>H(t.dataset.lang)));const g=s.querySelector(".menu-toggle"),V=s.querySelector(".mobile-menu");g.addEventListener("click",()=>{const t=g.getAttribute("aria-expanded")!=="true";g.setAttribute("aria-expanded",String(t)),V.hidden=!t,document.body.classList.toggle("menu-open",t),s.classList.toggle("is-open",t)});const w=document.querySelector(".hero__frame"),F=()=>{const t=w?w.getBoundingClientRect().bottom+scrollY-s.offsetHeight-24:8;s.classList.toggle("is-scrolled",scrollY>t);const e=document.elementFromPoint(innerWidth/2,s.offsetHeight+2);s.classList.toggle("over-dark",!!(e!=null&&e.closest(".section--night, .footer-frame, .cta, .hero__frame")))};addEventListener("scroll",F,{passive:!0});F();const b="IntersectionObserver"in window?new IntersectionObserver(t=>t.forEach(e=>{e.isIntersecting&&(e.target.classList.add("in"),b.unobserve(e.target))}),{threshold:.12}):null;document.querySelectorAll(".reveal, .footer-mark").forEach(t=>b?b.observe(t):t.classList.add("in"));const I=matchMedia("(prefers-color-scheme: dark)"),R=()=>document.documentElement.dataset.theme?document.documentElement.dataset.theme==="dark":I.matches,E=()=>document.documentElement.classList.toggle("is-dark",R());I.addEventListener("change",E);s.querySelector(".theme-toggle").addEventListener("click",()=>{const t=R()?"light":"dark";document.documentElement.classList.add("theme-anim"),document.documentElement.dataset.theme=t;try{localStorage.setItem("esolar-theme",t)}catch{}E(),setTimeout(()=>document.documentElement.classList.remove("theme-anim"),450)});E();H(K());
