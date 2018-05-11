import './homework13.scss'

class Calculator {
    constructor (calcContainer){
        this.calcContainer = calcContainer;
        this.symbols = this.calcContainer.querySelectorAll('.symbol');
        this.result = this.calcContainer.querySelector('.resultContainer');

        this.symbols.forEach((symbol) =>{
            symbol.addEventListener('click', () =>{
                this.changeTitle(symbol.textContent);
            });
        });
    }
    changeTitle(text) {
        this.result.textContent = text;
    }

}
const calc = new Calculator(document.querySelector('#calculator'));


