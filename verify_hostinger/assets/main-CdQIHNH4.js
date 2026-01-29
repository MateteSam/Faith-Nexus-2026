(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function u(){const t=document.createElement("nav");t.innerHTML=`
        <div class="nav-content">
            <a href="/" class="logo">
                <img src="/logo.png" alt="Faith Nexus Logo">
            </a>
            
            <!-- Mobile Toggle -->
            <button class="mobile-toggle" aria-label="Toggle Menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>

            <div class="nav-links">
                <a href="/">Home</a>
                <a href="/about.html">About</a>
                <a href="/creators.html">Creators</a>
                <a href="/covenant.html">Covenant</a>
                <a href="/exhibition.html">Exhibition</a>
                <a href="/pitches.html">Pitches</a>
                <a href="/partners.html">Partners</a>
                <a href="/faithnexus100.html">FN100</a>
                
                <div class="nav-dropdown">
                    <a href="#" class="dropdown-trigger">Summit Info <span class="caret">▾</span></a>
                    <div class="dropdown-content">
                        <a href="/hospitality.html">Travel & Hospitality</a>
                        <a href="/speakers.html">Speakers</a>
                        <a href="/media.html">Media & Resources</a>
                        <a href="/faq.html">FAQ</a>
                        <a href="/contact.html">Contact</a>
                    </div>
                </div>

                <a href="/summit.html">Programme</a>
                <a href="/virtual.html">Virtual Activation</a>
                <a href="/registration.html" class="btn btn-primary" style="padding: 8px 16px; margin-left: 20px;">Tickets</a>
            </div>
        </div>
    `,document.body.prepend(t);const i=t.querySelector(".mobile-toggle"),r=t.querySelector(".nav-links");i&&r&&(i.addEventListener("click",()=>{i.classList.toggle("active"),r.classList.toggle("mobile-active"),document.body.classList.toggle("no-scroll")}),r.querySelectorAll("a").forEach(a=>{a.addEventListener("click",()=>{i.classList.remove("active"),r.classList.remove("mobile-active"),document.body.classList.remove("no-scroll")})})),window.addEventListener("scroll",()=>{window.scrollY>50?t.classList.add("scrolled"):t.classList.remove("scrolled")})}function f(){const t=document.createElement("footer");t.innerHTML=`
        <div class="container">
            <div class="footer-content">
                <div class="footer-col">
                    <a href="/" class="footer-logo">
                        <img src="/logo.png" alt="Faith Nexus">
                    </a>
                    <p style="color: var(--text-secondary); margin-top: 20px;">
                        Raising, resourcing and releasing a generation of Spirit-filled content creators to disciple nations.
                    </p>
                </div>
                <div class="footer-col">
                    <h4>Explore</h4>
                    <ul>
                        <li><a href="/about.html">What is Faith Nexus?</a></li>
                        <li><a href="/summit.html">Programme Overview</a></li>
                        <li><a href="/virtual.html">Virtual Activation</a></li>
                        <li><a href="/registration.html">Registration & Tickets</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Initiatives</h4>
                    <ul>
                        <li><a href="/faithnexus100.html">FaithNexus100</a></li>
                        <li><a href="/covenant.html">Covenant Conversations</a></li>
                        <li><a href="/exhibition.html">Industry Exhibition</a></li>
                        <li><a href="/pitches.html">Kingdom Pitch Challenge</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="/partners.html">Partners & Sponsors</a></li>
                        <li><a href="/hospitality.html">Travel & Hospitality</a></li>
                        <li><a href="/faq.html">FAQ</a></li>
                        <li><a href="/contact.html">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                &copy; 2026 Faith Nexus. All Rights Reserved. Hosted by <a href="https://wcccs.africa" style="color: var(--primary-gold); text-decoration: none;">WCCCS</a>.
            </div>
        </div>
    `,document.body.appendChild(t)}document.addEventListener("DOMContentLoaded",()=>{u(),f();const t=document.querySelectorAll(".number");if(t.length>0){const a=new IntersectionObserver(e=>{e.forEach(o=>{o.isIntersecting&&(m(o.target),a.unobserve(o.target))})},{threshold:.5});t.forEach(e=>a.observe(e))}if(new URLSearchParams(window.location.search).get("tab")==="play"){const a=document.getElementById("play-section");a&&(a.classList.add("active"),a.scrollIntoView({behavior:"smooth"}))}s("virtual-timer","2026-05-02T00:00:00"),s("summit-timer","2026-10-20T00:00:00");const r=new IntersectionObserver(a=>{a.forEach(e=>{e.isIntersecting&&(e.target.classList.add("active"),r.unobserve(e.target))})},{threshold:.1});document.querySelectorAll(".reveal, .reveal-luxury, .medallion-card, .benefit-card, .challenge-card").forEach(a=>r.observe(a))});function s(t,i){const r=document.getElementById(t);if(!r)return;const a=new Date(i).getTime(),e=()=>{const o=new Date().getTime(),n=a-o;if(n<0)return;const l=Math.floor(n/(1e3*60*60*24)),c=Math.floor(n%(1e3*60*60*24)/(1e3*60*60)),d=Math.floor(n%(1e3*60*60)/(1e3*60)),h=Math.floor(n%(1e3*60)/1e3);r.querySelector(".days").innerText=l.toString().padStart(2,"0"),r.querySelector(".hours").innerText=c.toString().padStart(2,"0"),r.querySelector(".minutes").innerText=d.toString().padStart(2,"0"),r.querySelector(".seconds").innerText=h.toString().padStart(2,"0")};setInterval(e,1e3),e()}function m(t){const i=parseInt(t.innerText.replace(/[^0-9]/g,""));let r=0;const a=i/50,e=setInterval(()=>{r+=a,r>=i?(t.innerText=i.toLocaleString()+(t.innerText.includes("+")?"+":t.innerText.includes("K")?"K":t.innerText.includes("M")?"M":""),clearInterval(e)):t.innerText=Math.floor(r).toLocaleString()+(t.innerText.includes("+")?"+":t.innerText.includes("K")?"K":t.innerText.includes("M")?"M":"")},20)}
