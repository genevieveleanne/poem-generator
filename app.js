function displayPoem(event) {
  event.preventDefault();

  let poem = document.querySelector("#poem");
  poem.innerHTML = "The poem will go here";
}

let poemGeneratorForm = document.querySelector("#poem-generator-form");
poemGeneratorForm.addEventListener("submit", displayPoem);
