const display=document.getElementById("display");
function append(input){
    display.value +=input;
}
function cleardis(){
    display.value="";
}
function equaldis(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="error";
    }
}
function onestepback(){
    display.value=display.value.slice(0,-1);
}