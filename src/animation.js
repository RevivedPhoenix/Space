let isCheckboxAll = false;
let isRangeAll = false;

const  button = document.getElementById("button1");
button.setAttribute("disabled", "disabled");

const checkbox = document.querySelectorAll(".checkbox1");
for(let i=0; i<checkbox.length; i++){
    checkbox[i].setAttribute("disabled", "disabled");
}

const range = document.querySelectorAll(".range1");
for(let i = 0; i<range.length; i++){
    range[i].setAttribute("disabled", "disabled");
}

let buttonOk = document.getElementById("subbut");
buttonOk.onclick = function(e){
    e.preventDefault();

    const pass = document.getElementById("key");
    if (pass.value === "TrustNo1"){
        for(let i = 0; i<checkbox.length; i++) {
            checkbox[i].removeAttribute("disabled");
        }
        for(let i = 0; i<range.length; i++) {
            range[i].removeAttribute("disabled");
        }

        pass.setAttribute("disabled", "disabled");
        buttonOk.setAttribute("disabled", "disabled");
    } else {
        alert("Invalid password");
    }
};
let r1 = document.getElementById("range1");
function rangeFunction(value){
    r1.value = value;
    isTrue();
}
let r2 = document.getElementById("range2");
function rangeFunction2(value){
    r2.value = value;
    isTrue();
}
let r3 = document.getElementById("range3");
function rangeFunction3(value){
    r3.value = value;
    isTrue();
}
let r4 = document.getElementById("range4");
function rangeFunction4(value){
    r4.value = value;
    isTrue();
}
let r5 = document.getElementById("range5");
function rangeFunction5(value){
    r5.value = value;
    isTrue();
}
function isTrue(){
    if(r1.value === r2.value && r1.value === r3.value && r2.value === r3.value && r1.value === r4.value && r2.value === r4.value && r3.value === r4.value && r1.value === r5.value && r2.value === r5.value && r3.value === r5.value && r4.value === r5.value && r1.value === r1.max && r2.value === r2.max && r3.value === r3.max && r4.value === r4.max && r5.value === r5.max){
        isRangeAll = true;
    }
    launch();
}

let chbox1 = document.getElementById("chbox1")
function checkboxFunc(){
    if (chbox1.checked) {
        chbox1.value = "true"
    }
    else {
        chbox1.value = "false"
    }
    isChecked()
}
let chbox2 = document.getElementById("chbox2")
function checkboxFunc2(){
    if (chbox2.checked) {
        chbox2.value = "true"
    }
    else {
        chbox2.value = "false"
    }
    isChecked()
}
let chbox3 = document.getElementById("chbox3")
function checkboxFunc3(){
    if (chbox3.checked) {
        chbox3.value = "true"
    }
    else {
        chbox3.value = "false"
    }
    isChecked()
}
let chbox4 = document.getElementById("chbox4")
function checkboxFunc4(){
    if (chbox4.checked) {
        chbox4.value = "true"
    }
    else {
        chbox4.value = "false";
    }
    isChecked()
}
let chbox5 = document.getElementById("chbox5")
function checkboxFunc5(){
    if (chbox5.checked) {
        chbox5.value = "true"
    }
    else {
        chbox5.value = "false";
    }
    isChecked()
}
let chbox6 = document.getElementById("chbox6")
function checkboxFunc6(){
    if (chbox6.checked) {
        chbox6.value = "true"
    }
    else {
        chbox6.value = "false";
    }
    isChecked()
}
function isChecked(){
    if (chbox1.value === "true" && chbox2.value === "true" && chbox3.value === "true" && chbox4.value === "true" && chbox5.value === "true" && chbox6.value === "true") {
        isCheckboxAll = true;
    }
    launch();
}
function launch() {
    if (isCheckboxAll && isRangeAll) {
        button.removeAttribute("disabled");
        button.onclick = function (e) {
            e.preventDefault();
            animateRocket();
        }
    }
}
function animateRocket(){
    let rocket = document.querySelector(".rocket");
    let x = Number(getComputedStyle(rocket).left.substr(0, getComputedStyle(rocket).left.length - 2));
    rocket.style.left = 10 + x + "px";
}
