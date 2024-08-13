import './style.css';
import { UiCard } from './ui/card';
import { UiCarousel } from './ui/carousel';
import { SquareTerminal, ChevronLeft, ChevronRight, Github, Linkedin, Mail } from "lucide-static";
import nodejsSvg from "./svg/node.svg";
import dotnetSvg from "./svg/dotnet.svg";
import golangSvg from "./svg/golang.svg";
import nginxSvg from "./svg/nginx.svg";
import dockerSvg from "./svg/docker.svg";
import linuxSvg from "./svg/linux.svg";
import typescriptSvg from "./svg/typescript.svg"
import viteSvg from "./svg/vite.svg"
import svelteSvg from "./svg/svelte.svg"
import vueSvg from "./svg/vue.svg"
import reactSvg from "./svg/react.svg"
import lessSvg from "./svg/less.svg"
import tailwindSvg from "./svg/tailwind.svg"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <header>
      <div class="title-container">
          
        <div class="icon">${SquareTerminal}</div>

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
              ${Mail}
            </div>
          </a>
        </li>
        <li>
          <a href="https://github.com/laurenceokite">
            <span class="visually-hidden">Github</span>
            <div class="link">
              ${Github}
            </div>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/laurenceokite">
            <span class="visually-hidden">LinkedIn</span>
            <div class="link">
              ${Linkedin}
            </div>
          </a>
        </li>

      </ul>
    </header>

    <section class="about-me">
      <p><span class="start">&rsaquo;&nbsp;</span>As a former food service professional in the beginning of my software development career, I feel I have found my path. The constant iteration and improvement, fast paced learning environment, and continual challenge have enamored me with the field and the art of software. I relish the feeling of a small win, a simple optimization or a moment to learn something new.</p>
      <p>Currently I am spending honing my development skills and deep-diving into new technologies. I love improving my development environment and workflow, and learning about design  patterns that I can apply in real business environments. I love working on the front- and back-end as well as on infrastructure development. My ethos in all three is the same: clean, simple design and great user experience<span class="end">.</span>
      </p>
    </section>
    <section class="skill-section">
      <h2 class="title">
        Server-Side Technologies I Love ❤️
      </h2>

      <ui-carousel class="skill-carousel">
        <button slot="previous" class="button">
          ${ChevronLeft}
        </button>
        <button slot="next" class="button">
          ${ChevronRight}
        </button>

        <ul slot="items" class="skill-items">
          <li class="item">
            <h3 class="visually-hidden">Node JS</h3>
            <ui-card class="skill-card">
              <div class="container">
              <img 
                class="nodejs"
                alt=""
                src="${nodejsSvg}"
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
              <h3 class="visually-hidden">.NET Core</h3>
              <div class="container">
              <img 
                class="dotnet"
                alt=""
                src="${dotnetSvg}"
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
              <h3 class="visually-hidden">Golang</h3>
              <div class="container">
              <img 
                class="golang"
                alt=""
                src="${golangSvg}"
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

              <h3 class="visually-hidden">NGINX</h3>
              <div class="container">
                <img 
                  class="nginx"
                  alt=""
                  src="${nginxSvg}"
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
              <h3 class="visually-hidden">Docker</h3>
              <div class="container">
              <img 
                class="docker"
                alt=""
                src="${dockerSvg}"
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
              <h3 class="visually-hidden">Linux</h3>
              <div class="container">
              <img 
                class="linux"
                alt=""
                src="${linuxSvg}"
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
        I Build Blazingly Fast 🚀 Client-Side Apps with...
      </h2>
      <ui-carousel class="skill-carousel">
        <button slot="previous" class="button">
          ${ChevronLeft}
        </button>
        <button slot="next" class="button">
          ${ChevronRight}
        </button>
        <ul slot="items" class="skill-items">
          <li class="item">
            <h3 class="visually-hidden">Typescript</h3>
            <ui-card class="skill-card">
              <div class="container">
                <img 
                  class="typescript"
                  alt=""
                  src="${typescriptSvg}"
                >
                <div class="skill-text">
                  <p>
                      TypeScript allows me to write JavaScript code that is self-documenting and type-safe at compile time. It's an indispensable tool for moving quickly in complex codebases, catching errors early, and ensuring maintainable, scalable solutions.
                  </p>
                </div>
              </div>
            </ui-card>
          </li>
          <li class="item">
            <h3 class="visually-hidden">Vite</h3>
            <ui-card class="skill-card">
              <div class="container">
                <img 
                  class="vite"
                  alt=""
                  src="${viteSvg}"
                >
                <div class="skill-text">
                  <p>
                      Vite provides a lightning-fast development environment, with instant hot module replacement and optimized build processes. It takes the pain out of setting up modern web projects, letting me focus on coding rather than configuration.
                  </p>
                </div>
              </div>
            </ui-card>
          </li>
          <li class="item">
            <h3 class="visually-hidden">Svelte</h3>
            <ui-card class="skill-card">
              <div class="container">
                <img 
                  class="svelte"
                  alt=""
                  src="${svelteSvg}"
                >
                <div class="skill-text">
                  <p>
                      Svelte is a revolutionary framework that compiles components to highly efficient JavaScript, reducing the overhead typically associated with frameworks. This means faster load times and smoother user experiences, with minimal effort.
                  </p>
                </div>
              </div>
            </ui-card>
          </li>
          <li class="item">
            <h3 class="visually-hidden">Vue JS</h3>
            <ui-card class="skill-card">
              <div class="container">
                <img 
                  class="vue"
                  alt=""
                  src="${vueSvg}"
                >
                <div class="skill-text">
                  <p>
                      Vue.js is my go-to for building intuitive and dynamic user interfaces. Its reactive data binding and component-based architecture make it easy to create sophisticated apps that are both fast and flexible.
                  </p>
                </div>
              </div>
            </ui-card>
          </li>
          <li class="item">
            <h3 class="visually-hidden">React</h3>
            <ui-card class="skill-card">
              <div class="container">
                <img 
                  class="react"
                  alt=""
                  src="${reactSvg}"
                >
                <div class="skill-text">
                  <p>
                      React is an industry juggernaut that has revolutionized front-end development with its powerful component-based architecture and virtual DOM. I appreciate its embrace of functional programming principles, which promotes modular, composable code and enhances reusability.
                  </p>
                </div>
              </div>
            </ui-card>
          </li>
          <li class="item">
            <h3 class="visually-hidden">Less</h3>
            <ui-card class="skill-card">
              <div class="container">
                <img 
                  class="less"
                  alt=""
                  src="${lessSvg}"
                >
                <div class="skill-text">
                  <p>
                      Less extends CSS with powerful features like variables, nesting, and mixins, making stylesheets more maintainable and modular. It streamlines the process of managing complex styles, keeping code DRY and clean.
                  </p>
                </div>
              </div>
            </ui-card>
          </li>
          <li class="item">
            <h3 class="visually-hidden">Tailwind</h3>
            <ui-card class="skill-card">
              <div class="container">
                <img 
                  class="tailwind"
                  alt=""
                  src="${tailwindSvg}"
                  style="--drop-shadow-color: #689f63"
                >
                <div class="skill-text">
                  <p>
                      Tailwind CSS arms me with the power to design directly in my markup with utility-first classes, allowing for rapid prototyping and consistent styling. It's a game-changer for building responsive, modern UIs with ease.
                  </p>
                </div>
              </div>
            </ui-card>
          </li>
      </ui-carousel>
    </section>
  </div>
`;

customElements.define("ui-card", UiCard);
customElements.define("ui-carousel", UiCarousel);
