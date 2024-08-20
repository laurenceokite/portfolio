import './style.css';
import { SkillCard } from './skill-card';
import { UiCarousel } from './ui/carousel';
import { SquareTerminal, ChevronLeft, ChevronRight, Github, Linkedin, Mail } from "lucide-static";
import nodejsSvg from "./svg/node.svg";
import dotnetSvg from "./svg/dotnet.svg";
import golangSvg from "./svg/golang.svg";
import nginxSvg from "./svg/nginx.svg";
import dockerSvg from "./svg/docker.svg";
import linuxSvg from "./svg/linux.svg";
import typescriptSvg from "./svg/typescript.svg";
import viteSvg from "./svg/vite.svg";
import svelteSvg from "./svg/svelte.svg";
import vueSvg from "./svg/vue.svg";
import reactSvg from "./svg/react.svg";
import tailwindSvg from "./svg/tailwind.svg";
import { AudioOscillator } from './audio-oscillator';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="main-container">
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
      <p><span class="start">&rsaquo;</span>As a former food service professional in the beginning of my software development career, I feel I have found my path. The constant iteration and improvement, fast paced learning environment, and continual challenge have enamored me with the field and the art of software. I relish the feeling of a small win, a simple optimization or a moment to learn something new.</p>
      <p>Currently I am spending honing my development skills and deep-diving into new technologies. I love improving my development environment and workflow, and learning about design  patterns that I can apply in real business environments. I love working on the front- and back-end as well as on infrastructure development. My ethos in all three is the same: clean, simple design and great user experience<span class="end">.</span>
      </p>
    </section>

    
    <section class="skill-section">
        <h2 class="__title">
          Server-Side Technologies I Love ❤️
        </h2>

        <ui-carousel class="__carousel">
          <button slot="previous" class="__carousel-button">
            ${ChevronLeft}
          </button>
          <button slot="next" class="__carousel-button">
            ${ChevronRight}
          </button>

          <ul slot="items" class="skill-items" id="backend-skills">
          </ul>
        </ui-carousel>

    </section>
    <section class="skill-section">
      <h2 class="__title">
          I Build Blazingly Fast 🚀 Client-Side Apps with...
        </h2>
        <ui-carousel class="__carousel">
          <button slot="previous" class="__carousel-button">
            ${ChevronLeft}
          </button>
          <button slot="next" class="__carousel-button">
            ${ChevronRight}
          </button>

          <ul slot="items" class="__items" id="frontend-skills">
          </ul> 
        </ui-carousel>
    </section>
    <section class="oscillator-section">
        <div class="ui-card">
          <audio-oscillator></audio-oscillator>
        </div>
    </section>

  </div>
  <footer>
    Created by Laurence Okite &copy;2024
  </footer>
`;

customElements.define("audio-oscillator", AudioOscillator);
customElements.define("skill-card", SkillCard);
customElements.define("ui-carousel", UiCarousel);

type SkillCardModel = {
  title?: string;
  imageUrl?: string;
  blurbs?: string[];
}
const backendSkills = [
  {
    title: "NodeJS",
    imageUrl: nodejsSvg,
    blurbs: [
      "Write scalable, full-stack applications entirely in JavaScript.",
      "Ideal for chat apps, gaming, and live collaboration tools due to its non-blocking, event-driven architecture."
    ]
  },
  {
    title: ".NET",
    imageUrl: dotnetSvg,
    blurbs: [
      "Comprehensive set of libraries and tools for building enterprise-grade applications on Windows, Linux, and macOS.",
      "Supports multiple languages, including C#, F#, and C++."
    ]
  },
  {
    title: "Golang",
    imageUrl: golangSvg,
    blurbs: [
      "Compiled language with high performance and clean syntax. Brings a minimalistic approach to concurrent programming with goroutines and channels.",
      "Fast compilation times and a statically linked binary."
    ]
  },
  {
    title: "NGINX",
    imageUrl: nginxSvg,
    blurbs: [
      "Efficiently handles high traffic and concurrent connections with low resource usage, and provides built-in load balancing.",
      "Acts as a reverse proxy server to improve application security and performance."
    ]
  },
  {
    title: "Docker",
    imageUrl: dockerSvg,
    blurbs: [
      "Provides containerization to isolate applications and their dependencies, ensuring consistent environments.",
      "Manage and deploy different versions of applications with ease, optimize resource usage and speed up development and deployment cycles."
    ]
  },
  {
    title: "Linux",
    imageUrl: linuxSvg,
    blurbs: [
      "Free and open-source, with a large community of developers and extensive documentation.",
      "Reliable and stable, suitable for servers and critical applications."
    ]
  }
];

const frontendSkills = [
  {
    title: "Typescript",
    imageUrl: typescriptSvg,
    blurbs: ["TypeScript allows me to write JavaScript code that is self-documenting and type-safe at compile time. It's an indispensable tool for understanding complex codebases, catching errors early, and ensuring maintainability."]
  },
  {
    title: "Vite",
    imageUrl: viteSvg,
    blurbs: [
      "Vite provides a streamlined bundling alternative to Webpack, with instant hot module replacement and optimized build processes. It comes with sensible configuration out-of-the box, allowing me to focus on development rather than configuration."
    ]
  },
  {
    title: "Svelte",
    imageUrl: svelteSvg,
    blurbs: [
      "Svelte aims to make interacting with components feel like writing vanilla JS and HTML. It does this by providing a compiler, which not only gives a powerful syntax, but optimizes the output JavaScript."
    ]
  },
  {
    title: "NodeJS",
    imageUrl: vueSvg,
    blurbs: [
      "Vue.js is my go-to for building dynamic user interfaces. Vue's reactive primitives are push-based and similar to the newly popular Signals model. It uses a compiler to provide performance optimizations as well as using a virtual DOM at runtime."
    ]
  },
  {
    title: "React",
    imageUrl: reactSvg,
    blurbs: [
      "React is an industry juggernaut that doesn't opts for pull-based reactivity and a virtual DOM. I like its embrace of functional programming principles, which promotes modular components and enhances reusability."
    ]
  },
  {
    title: "Tailwind",
    imageUrl: tailwindSvg,
    blurbs: [
      "Tailwind provides consistent utility classes for quick prototyping. It only builds the classes you use, keeping your bundle size small."
    ]
  }
];

function makeSkillCard(model: SkillCardModel): SkillCard {
  const card = document.createElement("skill-card") as SkillCard;
  card.dataset.imageUrl = model.imageUrl;
  card.blurbs = model.blurbs ?? [];

  return card;
}

function makeSkillCardList(models: SkillCardModel[]): HTMLElement[] {
  return models.map(model => {
    const node = document.createElement("li");
    node.append(makeSkillCard(model));
    node.setAttribute("class", "ui-card __item");
    node.style.listStyleType = "none";
    return node;
  })
}
document.querySelector("#frontend-skills")?.append(...makeSkillCardList(frontendSkills));
document.querySelector("#backend-skills")?.append(...makeSkillCardList(backendSkills));
