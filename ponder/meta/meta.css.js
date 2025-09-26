const PI = 3.14;
let radius = 3;
           
let area = radius * radius * PI;
console.log(area);

radius = 20;

area = radius * radius * PI;
console.log(area);


const one = 1;
const two = '2';
                    
let result = one + Number(two); 
console.log(result);

let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
//console.log(student); //does not work, can't access a block variable outside the block
                    

let selectElem = document.getElementById('webdevlist');

let topics = document.querySelectorAll('.topic');


selectElem.addEventListener('change', function(){

    topics.forEach(topic => {
        topic.classList.remove("highlight");
    })
    
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.getElementById(codeValue).classList.add("highlight");

    const image = document.querySelector('img');
    image.setAttribute('src', 'images/597-5977109_html5-css3-javascript-logos-html-css-icon-png.png');
    image.setAttribute('alt', 'HTML, CSS and JavaScript logos');
    document.body.classname = 'blue';
    document.body.style.backgroundColor = 'aliceblue';

})
                