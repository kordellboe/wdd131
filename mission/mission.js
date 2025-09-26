
let selectElem = document.querySelector('select');
let logo = document.querySelector('#byui-logo');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            logo.src = 'byui-logo-white.png';
    } else {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            logo.src = 'byui-logo-blue.webp';
    }
}           
                    