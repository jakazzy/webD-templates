const input = document.querySelector("#search");
const button = document.querySelector("#button-submit");
const display = document.querySelector("#display");


const url = "https://api.datamuse.com/words?";
const queryParam = "rel_rhy=";
const urlParam = url + queryParam;
const rhymeWords = () => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            return xhr.response;
        }
    }

    xhr.open("GET", );
    xhr.send();
}