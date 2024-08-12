var g=Object.defineProperty;var f=(l,s,t)=>s in l?g(l,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[s]=t;var n=(l,s,t)=>f(l,typeof s!="symbol"?s+"":s,t);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();class w extends HTMLElement{constructor(){super();const s=this.attachShadow({mode:"open"}),t=document.createElement("template");t.innerHTML=`
      <div class="ui-card">
        <slot></slot>
      </div>

      <style id="style">
        .ui-card {
          position: relative;
          border: 2px solid #aaa;
          border-radius: 8px;
          box-shadow: 0 0 6px 3px #333;

          &::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(
              135deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(155, 155, 155, 0.1) 100%
            );
            pointer-events: none;
          }

          .title {
            position: absolute;
            right: 24px;
            top: 12px;
            margin: 0;
            font-weight: 500;
            font-size: 1.25rem;
            line-height: 1;
          }
        }
      </style>
    `,s.append(t.content.cloneNode(!0))}}class k extends HTMLElement{constructor(){var r,c,d,h,u,p;super();n(this,"prevButton");n(this,"nextButton");n(this,"track");n(this,"items",[]);n(this,"trackWidth",0);n(this,"visibleWidth",0);n(this,"itemWidth",0);n(this,"visibleItems",0);n(this,"index",0);n(this,"gapWidth",10);n(this,"marginBleed",8);const t=this.attachShadow({mode:"open"}),a=document.createElement("template");a.innerHTML=`
      <div class="carousel">
        <div class="button previous">
          <slot name="previous"></slot>
        </div>
        <div class="container">
          <slot name="items"></slot>
        </div>
        <div class="button next">
          <slot name="next"></slot>
        </div>
      </div>

      <style>
        .carousel {
          position: relative;
        }

        .container {
          overflow: hidden;
          margin: -${this.marginBleed}px;
          
          @media (pointer: coarse) {
            overflow: scroll;
          }
        }

        .button {
          position: absolute;
          bottom: 0;
          top: 0;
          z-index: 90;

          &.previous {
            left: 0;
          }

          &.next {
            right: 0;
          }

          @media (pointer: coarse) {
            display: none;
          }
        }

        ::slotted(ul) {
          display: grid;
          grid-template-rows: 1fr; 
          grid-auto-flow: column;
          gap: ${this.gapWidth}px;
          padding: 0 ${this.marginBleed}px;
          transition: transform 0.5s ease-in-out;
        }
      </style>
    `,t.append(a.content.cloneNode(!0));const e=(r=this.shadowRoot)==null?void 0:r.querySelector('slot[name="previous"]'),i=(c=this.shadowRoot)==null?void 0:c.querySelector('slot[name="next"]'),o=(d=this.shadowRoot)==null?void 0:d.querySelector('slot[name="items"]');this.prevButton=e==null?void 0:e.assignedElements()[0],this.nextButton=i==null?void 0:i.assignedElements()[0],this.track=o==null?void 0:o.assignedElements()[0],this.items=Array.from(((h=this.track)==null?void 0:h.children)??[]),(u=this.prevButton)==null||u.addEventListener("click",()=>this.move(-1)),(p=this.nextButton)==null||p.addEventListener("click",()=>this.move(1))}connectedCallback(){this.updatePosition()}move(t){!this.track||this.items.length===0||(this.trackWidth=this.track.scrollWidth??0,this.visibleWidth=this.track.clientWidth??0,this.itemWidth=this.items[0].clientWidth+this.gapWidth||0,this.visibleItems=Math.floor(this.visibleWidth/this.itemWidth),this.index=(this.index||0)+t*this.visibleItems,this.index=Math.max(0,Math.min(this.index,this.items.length-this.visibleItems)),this.updatePosition())}updatePosition(){if(!this.prevButton||!this.nextButton)return;this.prevButton.disabled=this.index===0,this.nextButton.disabled=this.index+this.visibleItems>=this.items.length;const t=-Math.min(this.trackWidth-this.visibleWidth,this.index*this.itemWidth);this.track&&(this.track.style.transform=`translateX(${t}px)`)}}/**
 * @license lucide-static v0.426.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=`
<svg
  class="lucide lucide-chevron-left"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m15 18-6-6 6-6" />
</svg>
`;/**
 * @license lucide-static v0.426.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=`
<svg
  class="lucide lucide-chevron-right"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m9 18 6-6-6-6" />
</svg>
`;/**
 * @license lucide-static v0.426.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=`
<svg
  class="lucide lucide-github"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
  <path d="M9 18c-4.51 2-5-2-7-2" />
</svg>
`;/**
 * @license lucide-static v0.426.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=`
<svg
  class="lucide lucide-linkedin"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
  <rect width="4" height="12" x="2" y="9" />
  <circle cx="4" cy="4" r="2" />
</svg>
`;/**
 * @license lucide-static v0.426.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=`
<svg
  class="lucide lucide-mail"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="20" height="16" x="2" y="4" rx="2" />
  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
</svg>
`;/**
 * @license lucide-static v0.426.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=`
<svg
  class="lucide lucide-square-terminal"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m7 11 2-2-2-2" />
  <path d="M11 13h4" />
  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
</svg>
`;document.querySelector("#app").innerHTML=`
  <div>
    <header>
      <div class="title-container">
          
        <div class="icon">${B}</div>

        <div class="main">
          <h1 class="name">
            Laurence Okite
          </h1>
          <p class="sub">Full Stack Developer</p>
        </div>

      </div>
      
      <ul class="header-links" aria-label="Follow or Reach Me at: ">
        <li>
          <a href="mailto:ljsokite@gmail.com">
            <span class="visually-hidden">Email</span>
            <div class="link">
              ${y}
            </div>
          </a>
        </li>
        <li>
          <a href="https://github.com/laurenceokite">
            <span class="visually-hidden">Github</span>
            <div class="link">
              ${x}
            </div>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/laurenceokite">
            <span class="visually-hidden">LinkedIn</span>
            <div class="link">
              ${b}
            </div>
          </a>
        </li>

      </ul>
    </header>

    <section class="about-me">
      <details>
      <summary>Read More About Me</summary>
      <p>As a former food service professional in the beginning of my software development career, I feel I have found my path. The constant iteration and improvement, fast paced learning environment, and continual challenge have enamored me with the field and the art of software. I relish the feeling of a small win, a simple optimization or a moment to learn something new.</p>
      <p>Currently I am spending honing my development skills and deep-diving into new technologies. I love improving my development environment and workflow, and learning about design  patterns that I can apply in real business environments. I consider myself a full-stack engineer and love working on front-end and back-end as well as infrastructure development. My strength and ethos in all three is the same; clean and simple design, and great UX.
      </p>
      </details>
    </section>
    <section class="skill-section">
      <h2 class="title">
        Server-Side Technologies I Love ❤️
      </h2>

      <ui-carousel class="skill-carousel">
        <button slot="previous" class="button">
          ${m}
        </button>
        <button slot="next" class="button">
          ${v}
        </button>

        <ul slot="items" class="skill-items">
          <li class="item">
            <ui-card class="skill-card">
              <div class="container">
              <img 
                class="nodejs"
                alt=""
                src="src/svg/node.svg"
                style="--drop-shadow-color: #689f63"
              >
              <ul class="skill-text">
                <li>Write scalable, full-stack applications entirely in JavaScript.</li>
                <li>Ideal for chat apps, gaming, and live collaboration tools due to its non-blocking, event-driven architecture.</li>
              </ul>
                </div>
            </ui-card>
          </li>

          <li>
            <ui-card class="skill-card">

              <div class="container">
              <img 
                class="dotnet"
                alt=""
                src="src/svg/dotnet.svg"
                style="--drop-shadow-color: #512BD4"
              >
              <ul class="skill-text">
                <li>Comprehensive set of libraries and tools for building enterprise-grade applicationst on Windows, Linux, and macOS.</li>
                <li>Supports multiple languages, including C#, F#, and C++.</li>
              </ul>
              </div>

            </ui-card>
          </li>

          <li>
            <ui-card class="skill-card">

              <div class="container">
              <img 
                class="golang"
                alt=""
                src="src/svg/golang.svg"
                style="--drop-shadow-color: #00ACD7"
              >
              <ul class="skill-text">
                <li>
                    Compiled language with high performance and clean syntax. Brings a minimalistic approach to concurrent programming with goroutines and channels.</li>
                <li>Fast compilation times and a statically linked binary.</li>
              </ul>
            </div>

            </ui-card>
          </li>

          <li>
            <ui-card class="skill-card">

              <div class="container">
                <img 
                  class="nginx"
                  alt=""
                  src="src/svg/nginx.svg"
                  style="--drop-shadow-color: #090"
                >
                <ul class="skill-text">
                  <li>
                    Efficiently handles high traffic and concurrent connections with low resource usage, and provides built-in load balancing. 
                  </li>
                  <li>
                    Acts as a reverse proxy server to improve application security and performance, and can be used to offload SSL/TLS termination, securely handling encryption.
                  </li>
                </ul>
              </div>
            </ui-card>
          </li>

          <li>
            <ui-card class="skill-card">

              <div class="container">
              <img 
                class="docker"
                alt=""
                src="src/svg/docker.svg"
                style="--drop-shadow-color: #394d54"
              >
              <ul class="skill-text">
                <li>Provides containerization to isolate applications and their dependencies, ensuring consistent environments.</li>
                <li>Manage and deploy different versions of applications with ease, optimize resource usage and speed up development and deployment cycles.</li>
              </ul>
                </div>
            </ui-card>
          </li>
          <li>
            <ui-card class="skill-card">
              <div class="container">
              <img 
                class="linux"
                alt=""
                src="src/svg/linux.svg"
                style="--drop-shadow-color: #ccc"
              >
              <ul class="skill-text">
                <li>Free and open-source, with a large community of developers and extensive documentation.</li>
                <li>Reliable and stable, suitable for servers and critical applications.</li>
              </ul>
                </div>
            </ui-card>
          </li>
        </ul>
      </ui-carousel>

      <h2 class="title">
        I Build Blazingly Fast &trade; 🚀 Front-Ends with...
      </h2>
      <ui-carousel class="skill-carousel">
        <button slot="previous" class="button">
          ${m}
        </button>
        <button slot="next" class="button">
          ${v}
        </button>
      </ui-carousel>
    </section>
  </div>
`;customElements.define("ui-card",w);customElements.define("ui-carousel",k);
