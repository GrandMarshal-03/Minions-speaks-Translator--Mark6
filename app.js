const inputText = document.querySelector(".text-input");
const btnTranslate = document.querySelector(".translate-button");
const translatedText = document.querySelector(".translated-txt");
const url = "https://api.funtranslations.com/translate/minion.json";

const translatedUrl = (text) => {
  return url + "?" + "text=" + text;
};

btnTranslate.addEventListener("click", () => {
  if (inputText.value) {
    //console.log(inputText.value);
    //translatedText.innerText = inputText.value;
    fetch(translatedUrl(inputText.value))
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        translatedText.innerText = json.contents.translated;
      });
  } else {
    alert("Please input text to be translated");
    translatedText.innerText = "";
  }
});
