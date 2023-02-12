contact = document.querySelector('.contact'); // то на что нажимают

// то что всплывает
popUp = document.querySelector('.popUp');


contact.addEventListener('click', showContacts); // вызов функции


function showContacts () {
    /* Тут вызываем функцию с параметром который содержит другую функцию,
    получается что мы вызываем  по сути две функции 
    1. первая функция showPopUp() отвечает за раскрытие всплывающего меню, строка 44 

    2. функция внешняя show() получает флажок и на основе возвращенного флажка решает, 
    будет ли скрыт контент*/
    show(showPopUp());
}

function show (flag) {

    if (flag === false) {
        setTimeout(() => {
            feedback = document.querySelector('.feedbackNoActive'); // поиск блока
            feedback.classList.add("feedbackActive"); // добавление класса стилей
            
             /* 
             этот метод сразобает из-за приоритетности стилей, можно было и удалить стиль 
             с последующим подключением нового, но я решил сделать так
             */
        }, 500);

    }
    else {

        setTimeout(() => {
            feedback = document.querySelector('.feedbackNoActive');
            feedback.classList.remove("feedbackActive");
            
        }, 100); 
    }
}

// 
let  flag = true; // для переключения (глобальная переменная) Думаю можно переиспользовать
function showPopUp(){

if(flag == true) { // переключатель вкл

    popUp.style.height = '150px'; // стиль который разворачивает выподающее меню
    flag = false; // флажок переключился

    return flag; /* возврат для совмещения с другими функциями (на основе этого возврата будет 
    определено  следующее => будет ли дочерний элемент скрыт или показан) */
}
else { // переключатель выкл


    // тут все точно так же как и в теле true, но немного наоборот, принципы соблюдены такие же
    popUp.style.height = '0px';
    flag = true

    return flag;
}
    
}


