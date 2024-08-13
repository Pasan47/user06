var courseName = "fullstack";
const age = 65;
console.log(courseName);
console.log(age);

function displayDetails(){
    console.log(courseName);
    console.log(age);
}

displayDetails();

const num1 = 12;
const num2 = 2;

function addFunction(num1,num2){
    return num1+num2
}

function changePasanDiv(){
    const div = document.getElementsByClassName("Nelumi");
    div.innerHtml = "Fullstack";
}

const element = document.createElement("div");
element.innerText = "Organization";
element.innerHTML = '<p>Hello World</p>';
document.getElementById("slt").append(element);
document.getElementsByClassName("nelumi").append(element);


