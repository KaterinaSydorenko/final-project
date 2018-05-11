import './homework12.scss'

const accordionElement =document.querySelectorAll('.accordion');
function accordion (AccordionContainer) {
    const menu = AccordionContainer.querySelector('.accordion-menu');
    let isOpened = AccordionContainer.classList.contains('active');

    function open (){
        AccordionContainer.classList.add('active');
        isOpened = true;
        document.addEventListener('click', close);
    }
    function close () {
        AccordionContainer.classList.remove('active');
        isOpened = false;
        document.removeEventListener('click', close);
    }
    function accordionToggle() {
        if(isOpened){
            close();
        } else {
            open();
        }
    }

    menu.addEventListener('click', (objectPressed) => {
        console.log(objectPressed);
        objectPressed.stopPropagation();
        accordionToggle ();
    });

    menu.addEventListener('keypress', (objectPressed) => {
        console.log(objectPressed);
        if(objectPressed.keyCode === 13) {
            accordionToggle ();
        }
    });
}

accordionElement.forEach((el) => {
    accordion(el);
});

const btn = document.querySelector('.accordion-menu-list');
const btnLine = document.querySelector('.accordion-menu-list__line');

btn.addEventListener('click', () => {
    btnLine.classList.toggle('active');
});
