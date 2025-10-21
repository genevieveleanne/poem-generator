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
  let userInputValue = userInput.value;
  userInputValue = userInputValue.trim().toLowerCase();

  let apiKey = "1bac80fa0c32ft537387a483f19bf3fo";
  let prompt = `Please write a 4 line poem in English about ${userInputValue}`;
  let context =
    "You are a poet who loves to write poems that rhyme. Please separate the first three lines with a <br />.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);

  let poem = document.querySelector("#poem");
  poem.classList.remove("hidden");
  poem.innerHTML = `<span class="blink">⏳ Generating a poem about ${userInputValue}</span>`;
}

function handleSubmit(event) {
  event.preventDefault();

  getAiApi();
}

let poemGeneratorForm = document.querySelector("#poem-generator-form");
poemGeneratorForm.addEventListener("submit", handleSubmit);
