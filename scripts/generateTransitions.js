///////// Generate Projects Cards
let cards = "";
let transitionCSS = "";
const projects = [
	{
		id: "goquest",
		name: "GOquest",
		url: "projects/goquest.html",
		git_url: "https://github.com/BrunoPoiano/goquest",
		description:
			"A API Client tool for designing and testings REST, WebSockets and HTTP compatible protocols direct on the terminal.",
	},

	{
		id: "ascii-image-generator",
		name: "ASCII Image Generator",
		url: "projects/asciigenerator.html",
		git_url: "https://github.com/BrunoPoiano/ascii-image-generator",
		description: "Convert images into ASCII art using a web interface.",
	},

	{
		id: "screen-recorder",
		name: "Screen Recorder",
		url: "projects/screen-recorder.html",
		git_url: "https://github.com/BrunoPoiano/screen-recorder",
		description: "Simple screen recorder app built with React and Electron.",
	},

	{
		id: "docker-tui",
		name: "Docker-tui",
		url: "projects/docker-tui.html",
		git_url: "https://github.com/BrunoPoiano/docker-tui",
		description: "A terminal user interface to interact with docker containers",
	},

	{
		id: "ollama-webui",
		name: "Ollama Webui",
		url: "projects/ollama-webui.html",
		git_url: "https://github.com/BrunoPoiano/ollama-webuio",
		description: "WebUi to interact with Local LLM ollama",
	},

	{
		id: "personal-website",
		name: "This Page",
		url: "projects/personal-website.html",
		git_url: "https://github.com/BrunoPoiano/Personal-Website",
		description: "Personal website - In construction",
	},
];

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

console.log(cards);
console.log(transitionCSS);
