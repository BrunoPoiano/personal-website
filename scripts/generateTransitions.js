///////// Generate Projects Cards
let cards = "";
let transitionCSS = "";
const projects = [
  {
    id: "goquest",
    name: "GOquest",
    url: "projects/goquest.html",
    git_url: "",
    description:
      "A API Client tool for designing and testings REST, WebSockets and HTTP compatible protocols direct on the terminal.",
  },

  {
    id: "ascii-image-generator",
    name: "ASCII Image Generator",
    url: "projects/asciigenerator.html",
    git_url: "",
    description: "Convert images into ASCII art using a web interface.",
  },

  {
    id: "screen-recorder",
    name: "Screen Recorder",
    url: "",
    git_url: "",
    description: "Simple screen recorder app built with React and Electron.",
  },

  {
    id: "docker-tui",
    name: "Docker-tui",
    url: "",
    git_url: "",
    description: "A terminal user interface to interact with docker containers",
  },
];

document.head.appendChild(style);
projects.forEach((project) => {
  cards += `
          <div class="cards">
            <h3>
              <a class="title-transition-${project.id}" href="${project.url}">
              ${project.name}
              </a>
              <a href="${project.git_url}"> <i class="fa-brands fa-github"></i></a>
            </h3>
            <p>${project.description}</p>
          </div>
            `;
  transitionCSS += `
    .title-transition-${project.id} {
      view-transition-name: title-${project.id};
    }
  `;
});

console.log(projects);
console.log(transitionCSS);
