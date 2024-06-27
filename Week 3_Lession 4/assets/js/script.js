// Creazione Variabili

const extractedN = [];
let randomN;
let numbCell;
const extractedNumbCell = [];
// let allCell;
// let randomN;

// Funzioni

window.addEventListener('load', init);


function init() {
    createArea();
    const btnEstraiNum = document.getElementById('btnEstraiRandom');
    btnEstraiNum.addEventListener('click', generateRandom);
    const btnGeneraCartella = document.getElementById('btnCartelle');
    btnGeneraCartella.addEventListener('click', generaCartella);
}


function createArea() {
    const tombolaArea = document.getElementById('tombolaArea');
    for (i = 0; i < 90; i++) {
        const singleCell = document.createElement('div');
        const numb = singleCell.innerText = i + 1;
        singleCell.classList.add('singleCell');
        tombolaArea.appendChild(singleCell);
    }
};


function generateRandom() {
    let randomN = Math.floor(Math.random() * 90) + 1;
    const randomNumArea = document.getElementById('areaTextRandomN');
    randomNumArea.innerText = randomN;
    extractedN.push(randomN);
    colorCell(randomN);
};


function colorCell(number) {
    let allCell = document.querySelectorAll('.singleCell');
    allCell[number - 1].classList.add('colora')
};


function generaCartella() {
    const cartellaArea = document.getElementById('areaCartella');
    for (i = 0; i < 20; i++) {
        const singleCell = document.createElement('div');
        const numbCell = Math.floor(Math.random() * 90) + 1;
        singleCell.innerText = numbCell;
        singleCell.classList.add('singleCell');
        cartellaArea.appendChild(singleCell);
    };
};


