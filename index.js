let a;
let b;
let t;
let r;
function update() {
    document.getElementById("res").textContent = r;
}
function getInputValues() {
    a = parseInt(document.getElementById("a").value);
    b = parseInt(document.getElementById("b").value);
}
function getinput(){
    t=parseInt(document.getElementById("c").value);
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
    if(b==0){
        r="division is not posible";
    }
    else{
        r=a/b;
    }
    update();
}
function mod() {
    getInputValues();
    r=a%b;
    update();
}
function pow(){
    getInputValues();
    r=Math.pow(a,b);
    update();
}
function sqrt(){
    getInputValues();
    r=Math.sqrt(a);
    update();
}
function log(){
    getInputValues();
    r=Math.log10(a);
    update();
}
function sin(){
    getinput();
    r=Math.ceil(Math.sin(t));
    update();
}
function cos(){
    getinput();
    r=Math.ceil(Math.cos(t));
    update();
}
function tan(){
    getinput();
    r=Math.ceil(Math.tan(t));
    if (r==-1){
        r="∞";
    }
    update();
}