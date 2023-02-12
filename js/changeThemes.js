const theme = document.querySelector('.lightAndDarkTheme');
const themeIcon = document.querySelector('.lightAndDarkTheme img');
const themeSection = document.querySelector(' .mainSection');
const body = document.querySelector('body');


// console.log(theme)
// console.log(body)
let flagTheme = true;
theme.addEventListener('click', () => {
if (flag == true) {
    body.classList.add('bodyDarkTheme');
    themeSection.classList.add('mainSectionBlack');
    themeIcon.src = './img/sunStar.png';
    flag = false;
}

else {
    body.classList.remove('bodyDarkTheme');
    themeSection.classList.remove('mainSectionBlack');
    themeIcon.src = './img/moon.png';
    flag = true;
}
});