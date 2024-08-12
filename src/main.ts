import './style.css';
import { UiCard } from './ui/card';
import { UiCarousel } from './ui/carousel';
import { SquareTerminal, ChevronLeft, ChevronRight, Github, Linkedin, Mail } from "lucide-static";

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
          ${ChevronLeft}
        </button>
        <button slot="next" class="button">
          ${ChevronRight}
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
          ${ChevronLeft}
        </button>
        <button slot="next" class="button">
          ${ChevronRight}
        </button>
      </ui-carousel>
    </section>
  </div>
`;

customElements.define("ui-card", UiCard);
customElements.define("ui-carousel", UiCarousel);
