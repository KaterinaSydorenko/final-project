import './homework14.scss'


const WRAPPER_CONTAINER = 'wrapper';
const TOGGLE_LAMP = 'toggle__lamp';
const BTN_ADD = 'add__toggle';


const TOGGLE = `
<div class="box">
    <div class="${TOGGLE_LAMP}">OFF</div>
</div>
`;

class ToggleLamp {
    constructor(rootElement) {
        this.rootElement = rootElement;

        this.render();
    }

    render() {
        this.rootElement.classList.add(WRAPPER_CONTAINER);

        this.btnToggle()
    }

    btnToggle() {
        this.btn = document.createElement('div');
        this.btn.classList.add(BTN_ADD);
        this.btn.textContent = 'Click';
        this.rootElement.appendChild(this.btn);

        this.btn.addEventListener('click', () => {
            this.toggleCreate();
        })
    }


    toggleCreate() {
        this.toggle = document.createElement('div');
        this.rootElement.classList.add(TOGGLE_LAMP);
        this.toggle.innerHTML = TOGGLE;
        this.rootElement.appendChild(this.toggle);

        this.toggleON();
    }

    toggleON() {
        this.toggle.addEventListener('click', () => {
            this.isEnableToggle();
        });
    }

    isEnableToggle() {
        const changeToggle = this.toggle.querySelector(`.${TOGGLE_LAMP}`);
        let isEnabled = changeToggle.classList.contains('active');
        changeToggle.classList.toggle('active');
        if (isEnabled === false) {
            changeToggle.textContent = 'ON';
            changeToggle.classList.add(`${TOGGLE_LAMP}_active`)
        } else {
            changeToggle.textContent = 'OFF';
            changeToggle.classList.remove(`${TOGGLE_LAMP}_active`)
        }
    };
}

const
    toggleLamp = new ToggleLamp(document.querySelector('#appLampContainer'));


