const jsonButton = document.querySelector('#generate');
const buttonContainer = document.querySelector('#buttonContainer');
const display = document.querySelector('#displayContainer');
const collection = ['another', 'more', 'next', 'continue', 'keep going', 'click me', 'a new one'];

const generateJson = () => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            renderResponse(xhr.response);
            changeButton;
        }
    }

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.send();
}