var txtInput = document.querySelector(".text-input");
var outputTranslated = document.querySelector(".output-translated");
var buttonTranslate = document.querySelector(".translate-button");

var serverURL = "https://api.funtranslations.com/translate/pirate.json"

function getTranslationURL(text) {
    var encodedURI = encodeURI(text);
    return `${serverURL}?text=${encodedURI}`;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something went wrong with the server, please try again later");
}

function clickTranslate() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputTranslated.innerText = translatedText;
    })
    .catch(errorHandler)
};



buttonTranslate.addEventListener("click", clickTranslate);
