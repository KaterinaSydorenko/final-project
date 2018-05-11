import './homework11.scss'


function button(htmlElement) {
    console.log(htmlElement);
    const btnOn = htmlElement.querySelector('.btn');
    const light = htmlElement.querySelector('.light');
    btnOn.onclick = function () {
        light.classList.toggle('active')
    }
}

button(document.querySelector('#first'));
button(document.querySelector('#second'));
button(document.querySelector('#third'));


