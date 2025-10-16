function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 75,
    cursor: "",
  });
}

function getAiApi() {
  let userInput = document.querySelector("#user-input");

  let apiKey = "1bac80fa0c32ft537387a483f19bf3fo";
  let prompt = `Please write a 4 line poem in English about ${userInput.value}`;
  let context =
    "You are a poet who loves to write poems that rhyme. Please separate the first three lines with a <br />.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

function handleSubmit(event) {
  event.preventDefault();

  getAiApi();
}

let poemGeneratorForm = document.querySelector("#poem-generator-form");
poemGeneratorForm.addEventListener("submit", handleSubmit);
