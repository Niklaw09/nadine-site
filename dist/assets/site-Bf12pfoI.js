(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const a={teamName:"The Nadine Krisa Peckins Team",agentName:"Nadine Krisa Peckins",brokerage:"Keller Williams Real Estate",officeStreet:"749 Northern Boulevard, Suite A",officeCity:"South Abington Township, PA 18411",license:"PA RS348943",phone:"(570) 533-1178",officePhone:"(570) 585-5800",email:"wesellthe570@gmail.com",searchUrl:"https://yourrealtorchick.kw.com/search",facebookUrl:"https://www.facebook.com/nadine.krisa.peckins/",creditName:"High Point Perspective",creditUrl:"https://highpointperspective.com"},m=[["index.html","Home"],["team.html","Meet the Team"],["marketing.html","Our Marketing"],["process.html","Selling Process"],["communities.html","Communities"],["contact.html","Contact"]];let d=location.pathname.split("/").pop()||"index.html";d.includes(".")||(d+=".html");const v=e=>e===d,h=()=>`<a href="tel:${a.phone.replace(/[^\d+]/g,"")}">${a.phone}</a>`,p=()=>`<a href="tel:${a.officePhone.replace(/[^\d+]/g,"")}">${a.officePhone}</a>`,f=()=>`<a href="mailto:${a.email}">${a.email}</a>`,i=document.querySelector("[data-site-header]");if(i){const e=i.hasAttribute("data-over-hero");i.className=`site-header${e?" over-hero":""}`,i.innerHTML=`
    <div class="wrap header-inner">
      <a class="brand" href="index.html" aria-label="${a.teamName}, home">
        <span class="brand-name">Nadine Krisa Peckins</span>
        <span class="brand-sub">Team · Keller Williams</span>
      </a>
      <nav class="nav" id="site-nav" aria-label="Main">
        ${m.map(([n,r])=>`<a href="${n}"${v(n)?' aria-current="page"':""}>${r}</a>`).join("")}
        <a href="${a.searchUrl}" target="_blank" rel="noopener">Search Homes <span aria-hidden="true">↗</span></a>
        <a class="btn btn-brass nav-cta" href="home-value.html">Home Value</a>
      </nav>
      <button class="menu-btn" aria-expanded="false" aria-controls="site-nav">
        <span class="sr-only">Menu</span><span class="bars" aria-hidden="true"></span>
      </button>
    </div>`;const t=i.querySelector(".menu-btn");t.addEventListener("click",()=>{const n=i.classList.toggle("menu-open");t.setAttribute("aria-expanded",String(n)),document.body.classList.toggle("no-scroll",n)});const o=()=>i.classList.toggle("scrolled",window.scrollY>40);o(),window.addEventListener("scroll",o,{passive:!0})}const l=document.querySelector("[data-site-footer]");l&&(l.className="site-footer",l.innerHTML=`
    <div class="wrap footer-grid">
      <div>
        <p class="footer-brand">${a.teamName}</p>
        <p>${a.brokerage}<br>${a.officeStreet}<br>${a.officeCity}</p>
      </div>
      <div>
        <p class="footer-label">Contact</p>
        <p>Cell ${h()}<br>Office ${p()}<br>${f()}</p>
        <p><a href="${a.facebookUrl}" target="_blank" rel="noopener">Facebook</a></p>
      </div>
      <div>
        <p class="footer-label">Explore</p>
        <p>${m.map(([e,t])=>`<a href="${e}">${t}</a>`).join("<br>")}<br>
        <a href="${a.searchUrl}" target="_blank" rel="noopener">Search Homes ↗</a></p>
      </div>
      <div class="footer-cta">
        <p class="footer-label">Thinking of selling?</p>
        <a class="btn btn-brass" href="home-value.html">Request your home's value</a>
      </div>
    </div>
    <div class="wrap legal">
      <p>${a.agentName}, Realtor® · License ${a.license} · ${a.brokerage}. Each Keller Williams® office is independently owned and operated.</p>
      <p><span class="eho">Equal Housing Opportunity</span> · We are committed to the Fair Housing Act. · <a href="privacy.html">Privacy</a> · © ${new Date().getFullYear()} ${a.teamName}</p>
      ${`<p class="credit">Website &amp; real estate media by <a href="${a.creditUrl}" target="_blank" rel="noopener">${a.creditName}</a></p>`}
    </div>`);if(!document.body.hasAttribute("data-no-sticky")){const e=document.createElement("div");e.className="sticky-cta",e.innerHTML=`<a class="btn btn-brass" href="home-value.html">Request your home's value</a>${`<a class="btn btn-ghost-dark" href="tel:${a.phone.replace(/[^\d+]/g,"")}">Call</a>`}`,document.body.append(e)}document.querySelectorAll("[data-phone]").forEach(e=>e.innerHTML=h());document.querySelectorAll("[data-office-phone]").forEach(e=>e.innerHTML=p());document.querySelectorAll("[data-email]").forEach(e=>e.innerHTML=f());document.querySelectorAll("[data-office]").forEach(e=>e.innerHTML=`${a.officeStreet}<br>${a.officeCity}`);document.querySelectorAll("[data-search-link]").forEach(e=>e.href=a.searchUrl);document.documentElement.classList.add("hide-review");document.querySelectorAll(".photo img").forEach(e=>{const t=()=>{var o;return(o=e.closest(".photo"))==null?void 0:o.classList.add("is-placeholder")};e.addEventListener("error",t),e.complete&&e.naturalWidth===0&&t()});const b=window.matchMedia("(prefers-reduced-motion: reduce)").matches;document.querySelectorAll("video[data-hero-video]").forEach(e=>{var o;if(b||(o=navigator.connection)!=null&&o.saveData)return e.remove();e.addEventListener("error",()=>e.remove(),!0),e.addEventListener("canplay",()=>e.classList.add("ready"));const t=window.matchMedia("(max-width: 760px) and (orientation: portrait)").matches;e.src=t&&e.dataset.srcMobile||e.dataset.src});const u="IntersectionObserver"in window&&!b?new IntersectionObserver(e=>e.forEach(t=>t.isIntersecting&&(t.target.classList.add("in"),u.unobserve(t.target))),{threshold:.15,rootMargin:"0px 0px -40px 0px"}):null;document.querySelectorAll(".reveal").forEach(e=>u?u.observe(e):e.classList.add("in"));document.querySelectorAll("form[data-lead-form]").forEach(e=>{const t=e.querySelector(".form-status");e.querySelector('button[type="submit"]');const o=(n,r)=>{t.textContent=n,t.dataset.kind=r};e.addEventListener("submit",async n=>{if(n.preventDefault(),!(!e.reportValidity()||Object.fromEntries(new FormData(e)).botcheck)){o("This form isn’t connected yet. (Site setup: add the form key in src/config.js.)","error");return}})});if(document.body.hasAttribute("data-loop")){const e=document.querySelector(".hero");if(e){const t=e.cloneNode(!0);t.classList.add("hero-clone"),t.setAttribute("aria-hidden","true"),t.inert=!0,t.querySelectorAll("video").forEach(r=>r.remove()),t.querySelectorAll("[id]").forEach(r=>r.removeAttribute("id")),document.body.append(t);let o=!1;const n=()=>{o||t.getBoundingClientRect().top<=1&&(o=!0,window.scrollTo({top:0,behavior:"instant"}),requestAnimationFrame(()=>o=!1))};window.addEventListener("scroll",n,{passive:!0})}}
