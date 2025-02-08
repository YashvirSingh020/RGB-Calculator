// Select elements
let red = document.querySelector("#redcolor");
let green = document.querySelector("#greencolor");
let blue = document.querySelector("#bluecolor");
let color = document.querySelector("#colorPicker");
let result = document.querySelector("#calculate");
let clear = document.querySelector("#clear");
let resultText = document.querySelector(".result");

function rgbToHex(r, g, b) {
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));
    color.value = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase();
}


color.addEventListener('input', function (event) {
    let hex = event.target.value; 
    hex = hex.replace('#', '');     

    
    red.value = parseInt(hex.substring(0, 2), 16);
    green.value = parseInt(hex.substring(2, 4), 16);
    blue.value = parseInt(hex.substring(4, 6), 16);
});


red.addEventListener('input', function () {
    let r = parseInt(red.value);
    let g = parseInt(green.value);
    let b = parseInt(blue.value);
    rgbToHex(r, g, b);  
});

green.addEventListener('input', function () {
    let r = parseInt(red.value);
    let g = parseInt(green.value);
    let b = parseInt(blue.value);
    rgbToHex(r, g, b);  
});

blue.addEventListener('input', function () {
    let r = parseInt(red.value);
    let g = parseInt(green.value);
    let b = parseInt(blue.value);
    rgbToHex(r, g, b);  // Convert and update color picker
});

result.addEventListener('click', function() {
    let r = parseInt(red.value);
    let g = parseInt(green.value);
    let b = parseInt(blue.value);

    if (isNaN(r) || isNaN(g) || isNaN(b)) {
        resultText.innerHTML = "Please enter valid RGB values!";
        resultText.classList.remove("hide");
        return; 
    }

    let ratio = r * 0.2126 + g * 0.7152 + b * 0.0722;

    resultText.innerHTML = `CONTRAST RATIO = ${ratio.toFixed(2)}`;
    resultText.classList.remove("hide");
});

clear.addEventListener('click',function(){
    resultText.classList.add("hide");
    red.value = 0;
    green.value = 0;
    blue.value = 0;
    color.value = `#FFFFFF`;
});