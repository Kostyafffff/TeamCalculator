const clickOnNumber = e => {
    if (!e || !e.target.innerHTML) {
        return
    }

    //проверка на наличие точки в строке
    if (e.target.innerHTML === '.'){
        let inputString = document.getElementById('inputField').value;

        if(inputString.indexOf('.', 0) >= 0){

            return
        }
    }

    //проверка на 0 вначале строки, если вначале стоит 0 и при этом длинна строки не более 1, то выходим из функции
    if (e.target.innerHTML==='0'){
        let inputString = document.getElementById('inputField').value;
        console.log(inputString.charAt('0'));
        if(inputString.charAt(0) === '0' && inputString.length <= 1){
            return
        }
    }

    document.getElementById('inputField').value += e.target.innerHTML;
};

const Clear = e => {
    //если передается true то чищу всю модель кроме результата
    if (e && e.target.clearAll === true) {
        setToModel(null, 'firstValue');
        setToModel(null, 'secondValue');
        setToModel(null, 'result');
        setToModel('', 'sign');
    }
    document.getElementById("inputField").value = "";
};

const clickOnSign = e => {
    if (!e || !e.target.innerHTML) {
        return
    }

    if (model.result === null) {
        if (model.sign === '') {
            setToModel(document.getElementById("inputField").value, 'firstValue');
        } else {
            setToModel(document.getElementById("inputField").value, 'secondValue');
        }
    }else {
        //прошлый результат переношу в поле первого числа и очищаю поле результата что бы начался новый цикл расчета
        setToModel(model.result, 'firstValue');
        setToModel(null, 'result');
        Clear();
        // return clickOnNumber();

    }

    Clear();

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
        return
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

    result.toPrecision(3);
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


const init = () => {
    numberButtons = document.getElementsByClassName('number-button');
    for (let i = 0; i < numberButtons.length; i++) {
        numberButtons[i].addEventListener('click', clickOnNumber, true);
    }

    signButtons = document.getElementsByClassName('sign-button');
    for (let i = 0; i < signButtons.length; i++) {
        signButtons[i].addEventListener('click', clickOnSign, true);
    }

    clearInput = document.getElementById("clearButton");
    clearInput.addEventListener("click", Clear, true);
    clearInput.clearAll = true;

    const defaultZero = document.getElementById("inputField").defaultValue = '0';
};

init();