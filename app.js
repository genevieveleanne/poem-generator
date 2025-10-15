function displayPoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "The poem will go here",
    autoStart: true,
    delay: 75,
  });
}

let poemGeneratorForm = document.querySelector("#poem-generator-form");
poemGeneratorForm.addEventListener("submit", displayPoem);
