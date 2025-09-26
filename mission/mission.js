
let selectElem = document.querySelector('select');
let logo = document.querySelector('#byui-logo');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
            document.body.style.backgroundColor = '#201f1fff';
            document.body.style.color = '#ffffffcc';
            logo.src = 'byui-logo-white.png';
    } else {
            document.body.style.backgroundColor = '#d7ecf6ff'; // I used # instead of 'white' to get pratice 
            document.body.style.color = '#000000ff';
            logo.src = 'byui-logo-blue.webp';
    }
}           
                    