let itemName = document.querySelector('.itemName');  // имя предмета
let numberLessons = document.querySelector('.numberLessonsInput'); // сколько уроков было
const printRatings = document.querySelector('.forRating'); // поле для добавление инпутов 
const button = document.querySelector('.button');


button.addEventListener('click', addBlocks);

function addBlocks () {
    addInputForRating(+numberLessons.value);
}


function addInputForRating (numberInput) {

    // очистка родительского блока
    while (printRatings.firstChild) {
        printRatings.removeChild(printRatings.firstChild);
    }

    // блок добавления элемента
    for(let i = 1; i <= numberInput; i++) {
        let elem = document.createElement("input");
        elem.className = 'inputForRating'
        elem.type = 'number';
        elem.min = '2';
        elem.max = '5';
        elem.placeholder = `${i}`;
        printRatings.append(elem);
    }    

    
 
}

// ==================     часть с выводом блоков закончена     ========================



const checkingButton = document.querySelector('.checkingButton');

// пропуски 
const noValidOmissionsInput = document.querySelector('.noValidOmissionsInput');

checkingButton.addEventListener('click', countingResult);

function countingResult () {

  
    if (((+numberLessons.value - +noValidOmissionsInput.value) / 10) > 0.1  &&  +noValidOmissionsInput.value < +numberLessons.value) {
        console.log((+numberLessons.value - +noValidOmissionsInput.value) / 10);
        printResult(calculateRating(addInMemoryArrayAndBlock()));
    }

    else {
        printResult(false);
    }
}

function addInMemoryArrayAndBlock () {
    let inputValue = document.querySelectorAll('.inputForRating');
    let arrayRating = [];

    inputValue.forEach((item) => {
       arrayRating.push(+item.value)
    });


    return arrayRating;

}

function calculateRating (arrayRating) {
    
    if(arrayRating.length == 0) {
        return fatalError = "error";
    }

    else {
            let summ = 0;

        for (let index = 0; index < arrayRating.length; index++) {
        
        summ += arrayRating[index];
        }
    
        summ = summ / arrayRating.length

        
        if (summ < 4) {
            return false;
        }
        else if (summ > 4 && summ <=5) {
            return true;
        }
    }
}


function printResult (result) {


    let message = document.createElement("p");
    message.textContent 
    message.className = 'messageResultError';
   

    if(result === true) {
        message.textContent = "Зачет будет поставлен автоматом, можете не переживать :)";
    }
    else {
        if (result == fatalError) {
            message.textContent = "Вы допустили критическую ошибку, введите оценки, для этого подтвердите колличество оценок"
        }

        else {
            message.textContent = "Придется потрудиться";
        }
    }

    const print = document.querySelector('.inputRating');

    
    while (print.firstChild) {
        print.removeChild(print.firstChild);
    }

    print.append(message);
    
}