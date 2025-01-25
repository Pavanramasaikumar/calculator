let a;
let b;
let r;
function update() {
    document.getElementById("res").textContent = r;
}
function getInputValues() {
    a = parseInt(document.getElementById("a").value);
    b = parseInt(document.getElementById("b").value);
}
function add() {
    getInputValues();
    r=a+b;
    update();
}
function mul() {
    getInputValues();
    r=a*b;
    update();
}
function sub() {
    getInputValues();
    r=a-b;
    update();
}
function div() {
    getInputValues();
    r=a/b;
    update();
}
function mod() {
    getInputValues();
    r=a%b;
    update();
}