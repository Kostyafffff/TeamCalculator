const clickOnNumber = e => {
    if (!e || !e.target.innerHTML) {
        return;
    }

    if (model.result !== null) {
        setToModel(model.result, 'firstValue');
        setToModel(null, 'result');
        document.getElementById("inputField").value = "";
    }

    let inputString = document.getElementById('inputField').value;

    //проверка на наличие точки в строке
    if (e.target.innerHTML === '.' && inputString.indexOf('.', 0) >= 0) {
        return;
    }

    //проверка на 0 вначале строки, если вначале стоит 0 и при этом длинна строки не более 1, то выходим из функции
    if (e.target.innerHTML === '0' && inputString.charAt(0) === '0' && inputString.length <= 1) {
        return;
    }

    //не больше 8 чисел в поле ввода
    if (inputString.length >= 8) {
        return;
    }

    //начальное число всегда 0, но при вводе чего-то другого меняется
    if (inputString.charAt(0) === '0' && e.target.innerHTML !== '0' && e.target.innerHTML !== '.' && inputString.length <= 1) {
        document.getElementById("inputField").value = "";
    }

    document.getElementById('inputField').value += e.target.innerHTML;
};

const Clear = e => {
    //если передается true то чищу всю модель кроме результата
    setToModel(null, 'firstValue');
    setToModel(null, 'secondValue');
    setToModel(null, 'result');
    setToModel('', 'sign');

    document.getElementById("inputField").value = "0";
};

const clickOnSign = e => {
    if (!e || !e.target.innerHTML) {
        return;
    }

    if (model.sign === '') {
        setToModel(document.getElementById("inputField").value, 'firstValue');
    } else {
        setToModel(document.getElementById("inputField").value, 'secondValue');
    }

    document.getElementById("inputField").value = "";

    //если знак = то просто считает, если знак иной, то считает учитывая новый знак
    if (e.target.innerHTML !== '=') {
        makeResult();
        setToModel(e.target.innerHTML, 'sign');
    } else {
        makeResult();
    }
};

const makeResult = () => {
    if (model.sign === '' || model.firstValue === null || model.secondValue === null) {
        return;
    }

    let result = null;

    switch (model.sign) {
        case "+" :
            result = Number(model.firstValue) + Number(model.secondValue);
            break;
        case "-" :
            result = Number(model.firstValue) - Number(model.secondValue);
            break;
        case "×" :
            result = Number(model.firstValue) * Number(model.secondValue);
            break;
        case "÷" :
            result = Number(model.firstValue) / Number(model.secondValue);
            break;
    }

    // result.toPrecision(3);
    setToModel(result, 'result');
    document.getElementById("inputField").value = result;

    //очищаю для второго цикла расчетов
    setToModel(null, 'firstValue');
    setToModel(null, 'secondValue');
    setToModel('', 'sign');
};


const setToModel = (value, field) => {
    model[field] = value;
};

const onKeyDown = e => {
    const grandedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
    // const grandedKeys = '0123456789.';

    if (!grandedKeys.includes(e.key)){
        console.log(e.key);
        return;
    }else{
        return false;
    }

};

const init = () => {
    numberButtons = document.getElementsByClassName('number-button');
    signButtons = document.getElementsByClassName('sign-button');
    clearInput = document.getElementById("clearButton");
    input = document.getElementById('inputField');

    for (let i = 0; i < numberButtons.length; i++) {
        numberButtons[i].addEventListener('click', clickOnNumber, false);
    }

    for (let i = 0; i < signButtons.length; i++) {
        signButtons[i].addEventListener('click', clickOnSign, false);
    }

    clearInput.addEventListener("click", Clear, false);

    // input.addEventListener('keydown', onKeyDown, false);
};

init();