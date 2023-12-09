const themeSwitch = document.querySelector('.switch');
const themeValue = document.querySelector('#dark-mode');

themeSwitch.addEventListener('click', () => {
    const main = document.querySelector('body');
    const card = document.querySelectorAll('.card');
    const h2 = document.querySelectorAll('h2');
    const h3 = document.querySelectorAll('h3');
    const p = document.querySelectorAll('p');
    const li = document.querySelectorAll('li');


    const banner = document.querySelector('.banner > h2');
    const footerp = document.querySelector('#footer_p');


    if (themeValue.checked) {
        main.style.backgroundColor = 'var(--dark-bg)';

        card.forEach((i) => (i.style.setProperty('background-color', 'var(--dark-cards)')));
        h2.forEach((i) => (i.style.setProperty('color', 'white')));
        h3.forEach((i) => (i.style.setProperty('color', 'white')));
        p.forEach((i) => (i.style.setProperty('color', 'white')));
        li.forEach((i) => (i.style.setProperty('color', 'white')));
        footerp.style.color = 'black';

        banner.style.color = 'white';
    }
    else {
        main.style.backgroundColor = 'white';
        card.forEach((i) => (i.style.setProperty('background-color', 'var(--sand)')));
        h2.forEach((i) => (i.style.setProperty('color', 'black')));
        h3.forEach((i) => (i.style.setProperty('color', 'black')));
        p.forEach((i) => (i.style.setProperty('color', 'black')));
        li.forEach((i) => (i.style.setProperty('color', 'black')));
        footerp.style.color = 'black';

        banner.style.color = 'white';
    }
});