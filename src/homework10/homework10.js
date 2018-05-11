import './homework10.scss'

const NameField = document.querySelector('.name-field');
const CommentField = document.querySelector('.comment-field');
const btnAdd = document.querySelector('#btnAdd');
const Time = document.querySelector('.time');

btnAdd.onclick = AddElement;


function AddElement() {
    let NameUser = NameField.value;
    NameField.value = '';
    let Comment = CommentField.value;
    CommentField.value = '';
    const newElement = document.createElement('div');
    const newField = document.createElement('div');
    nameContain.appendChild(newElement).innerHTML = NameUser;
    nameContain.appendChild(newField).innerHTML = Comment;
    newElement.classList.add('text-name');
    newField.classList.add('text');
    let TimeZone = new Date();
    const TimeField = document.createElement('div');
    nameContain.appendChild(TimeField).innerHTML = TimeZone.toLocaleString();
    TimeField.classList.add('bottom-line');
}
