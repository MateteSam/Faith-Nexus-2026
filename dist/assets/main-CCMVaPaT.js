(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();function m(){const t=document.createElement("nav");t.innerHTML=`
        <div class="nav-content">
            <a href="/" class="logo">
                <img src="/logo.png" alt="Faith Nexus Logo">
            </a>
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
                <div class="theme-toggle" id="theme-toggle" style="cursor: pointer; margin-left: 20px; font-size: 1.2rem;">
                    🌙
                </div>
                <a href="/registration.html" class="btn btn-primary" style="padding: 8px 16px; margin-left: 20px;">Tickets</a>
            </div>
        </div>
    `,document.body.prepend(t);const n=document.getElementById("theme-toggle"),o=localStorage.getItem("theme")||"dark",r=e=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e),n.innerText=e==="light"?"🔆":"🌙"};r(o),n.addEventListener("click",()=>{const e=document.documentElement.getAttribute("data-theme");r(e==="light"?"dark":"light")}),window.addEventListener("scroll",()=>{window.scrollY>50?t.classList.add("scrolled"):t.classList.remove("scrolled")})}function u(){const t=document.createElement("footer");t.innerHTML=`
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
    `,document.body.appendChild(t)}document.addEventListener("DOMContentLoaded",()=>{m(),u();const t=document.querySelectorAll(".number");if(t.length>0){const r=new IntersectionObserver(e=>{e.forEach(a=>{a.isIntersecting&&(f(a.target),r.unobserve(a.target))})},{threshold:.5});t.forEach(e=>r.observe(e))}if(new URLSearchParams(window.location.search).get("tab")==="play"){const r=document.getElementById("play-section");r&&(r.classList.add("active"),r.scrollIntoView({behavior:"smooth"}))}s("virtual-timer","2026-03-27T00:00:00"),s("summit-timer","2026-10-20T00:00:00");const o=new IntersectionObserver(r=>{r.forEach(e=>{e.isIntersecting&&(e.target.classList.add("active"),o.unobserve(e.target))})},{threshold:.1});document.querySelectorAll(".reveal, .reveal-luxury, .medallion-card, .benefit-card, .challenge-card").forEach(r=>o.observe(r))});function s(t,n){const o=document.getElementById(t);if(!o)return;const r=new Date(n).getTime(),e=()=>{const a=new Date().getTime(),i=r-a;if(i<0)return;const l=Math.floor(i/(1e3*60*60*24)),c=Math.floor(i%(1e3*60*60*24)/(1e3*60*60)),d=Math.floor(i%(1e3*60*60)/(1e3*60)),h=Math.floor(i%(1e3*60)/1e3);o.querySelector(".days").innerText=l.toString().padStart(2,"0"),o.querySelector(".hours").innerText=c.toString().padStart(2,"0"),o.querySelector(".minutes").innerText=d.toString().padStart(2,"0"),o.querySelector(".seconds").innerText=h.toString().padStart(2,"0")};setInterval(e,1e3),e()}function f(t){const n=parseInt(t.innerText.replace(/[^0-9]/g,""));let o=0;const r=n/50,e=setInterval(()=>{o+=r,o>=n?(t.innerText=n.toLocaleString()+(t.innerText.includes("+")?"+":t.innerText.includes("K")?"K":t.innerText.includes("M")?"M":""),clearInterval(e)):t.innerText=Math.floor(o).toLocaleString()+(t.innerText.includes("+")?"+":t.innerText.includes("K")?"K":t.innerText.includes("M")?"M":"")},20)}
