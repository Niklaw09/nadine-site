(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();const r={teamName:"The Nadine Krisa Peckins Team",agentName:"Nadine Krisa Peckins",brokerage:"Keller Williams Real Estate",officeStreet:"749 Northern Boulevard, Suite A",officeCity:"South Abington Township, PA 18411",license:"PA RS348943",searchUrl:"https://yourrealtorchick.kw.com/search",facebookUrl:"https://www.facebook.com/nadine.krisa.peckins/"},m=[["index.html","Home"],["team.html","Meet the Team"],["marketing.html","Our Marketing"],["process.html","Selling Process"],["communities.html","Communities"],["contact.html","Contact"]];let d=location.pathname.split("/").pop()||"index.html";d.includes(".")||(d+=".html");const v=e=>e===d,p=e=>`<span class="needed">[${e} needed]</span>`,h=()=>p("Phone"),f=()=>p("Email"),i=document.querySelector("[data-site-header]");if(i){const e=i.hasAttribute("data-over-hero");i.className=`site-header${e?" over-hero":""}`,i.innerHTML=`
    <div class="wrap header-inner">
      <a class="brand" href="index.html" aria-label="${r.teamName}, home">
        <span class="brand-name">Nadine Krisa Peckins</span>
        <span class="brand-sub">Team · Keller Williams</span>
      </a>
      <nav class="nav" id="site-nav" aria-label="Main">
        ${m.map(([o,a])=>`<a href="${o}"${v(o)?' aria-current="page"':""}>${a}</a>`).join("")}
        <a href="${r.searchUrl}" target="_blank" rel="noopener">Search Homes <span aria-hidden="true">↗</span></a>
        <a class="btn btn-brass nav-cta" href="home-value.html">Home Value</a>
      </nav>
      <button class="menu-btn" aria-expanded="false" aria-controls="site-nav">
        <span class="sr-only">Menu</span><span class="bars" aria-hidden="true"></span>
      </button>
    </div>`;const t=i.querySelector(".menu-btn");t.addEventListener("click",()=>{const o=i.classList.toggle("menu-open");t.setAttribute("aria-expanded",String(o)),document.body.classList.toggle("no-scroll",o)});const s=()=>i.classList.toggle("scrolled",window.scrollY>40);s(),window.addEventListener("scroll",s,{passive:!0})}const l=document.querySelector("[data-site-footer]");l&&(l.className="site-footer",l.innerHTML=`
    <div class="wrap footer-grid">
      <div>
        <p class="footer-brand">${r.teamName}</p>
        <p>${r.brokerage}<br>${r.officeStreet}<br>${r.officeCity}</p>
      </div>
      <div>
        <p class="footer-label">Contact</p>
        <p>${h()}<br>${f()}</p>
        <p><a href="${r.facebookUrl}" target="_blank" rel="noopener">Facebook</a></p>
      </div>
      <div>
        <p class="footer-label">Explore</p>
        <p>${m.map(([e,t])=>`<a href="${e}">${t}</a>`).join("<br>")}<br>
        <a href="${r.searchUrl}" target="_blank" rel="noopener">Search Homes ↗</a></p>
      </div>
      <div class="footer-cta">
        <p class="footer-label">Thinking of selling?</p>
        <a class="btn btn-brass" href="home-value.html">Request your home's value</a>
      </div>
    </div>
    <div class="wrap legal">
      <p>${r.agentName}, Realtor® · License ${r.license} · ${r.brokerage}. Each Keller Williams® office is independently owned and operated.</p>
      <p><span class="eho">Equal Housing Opportunity</span> · We are committed to the Fair Housing Act. · <a href="privacy.html">Privacy</a> · © ${new Date().getFullYear()} ${r.teamName}</p>
    </div>`);if(!document.body.hasAttribute("data-no-sticky")){const e=document.createElement("div");e.className="sticky-cta",e.innerHTML=`<a class="btn btn-brass" href="home-value.html">Request your home's value</a>`,document.body.append(e)}document.querySelectorAll("[data-phone]").forEach(e=>e.innerHTML=h());document.querySelectorAll("[data-email]").forEach(e=>e.innerHTML=f());document.querySelectorAll("[data-office]").forEach(e=>e.innerHTML=`${r.officeStreet}<br>${r.officeCity}`);document.querySelectorAll("[data-search-link]").forEach(e=>e.href=r.searchUrl);document.querySelectorAll(".photo img").forEach(e=>{const t=()=>{var s;return(s=e.closest(".photo"))==null?void 0:s.classList.add("is-placeholder")};e.addEventListener("error",t),e.complete&&e.naturalWidth===0&&t()});const b=window.matchMedia("(prefers-reduced-motion: reduce)").matches;document.querySelectorAll("video[data-hero-video]").forEach(e=>{var t;if(b||(t=navigator.connection)!=null&&t.saveData)return e.remove();e.addEventListener("error",()=>e.remove(),!0),e.addEventListener("canplay",()=>e.classList.add("ready")),e.src=e.dataset.src});const u="IntersectionObserver"in window&&!b?new IntersectionObserver(e=>e.forEach(t=>t.isIntersecting&&(t.target.classList.add("in"),u.unobserve(t.target))),{threshold:.15,rootMargin:"0px 0px -40px 0px"}):null;document.querySelectorAll(".reveal").forEach(e=>u?u.observe(e):e.classList.add("in"));document.querySelectorAll("form[data-lead-form]").forEach(e=>{const t=e.querySelector(".form-status");e.querySelector('button[type="submit"]');const s=(o,a)=>{t.textContent=o,t.dataset.kind=a};e.addEventListener("submit",async o=>{if(o.preventDefault(),!(!e.reportValidity()||Object.fromEntries(new FormData(e)).botcheck)){s("This form isn’t connected yet. (Site setup: add the form key in src/config.js.)","error");return}})});
