document.addEventListener("DOMContentLoaded", function () {
    const red = document.getElementById("red");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");
    const redInput = document.getElementById("red-input");
    const greenInput = document.getElementById("green-input");
    const blueInput = document.getElementById("blue-input");
    const colorBox = document.getElementById("color-box");
    const hexCode = document.getElementById("hex-code");
    const colorPicker = document.getElementById("color-picker");

    function updateColor() {
        const r = parseInt(red.value);
        const g = parseInt(green.value);
        const b = parseInt(blue.value);
        const color = `rgb(${r}, ${g}, ${b})`;
        const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase();

        colorBox.style.backgroundColor = color;
        hexCode.textContent = hex;
        colorPicker.value = hex;

        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;
    }

    function updateSliders() {
        red.value = redInput.value;
        green.value = greenInput.value;
        blue.value = blueInput.value;
        updateColor();
    }

    function updateFromColorPicker() {
        const hex = colorPicker.value;
        const r = parseInt(hex.substr(1, 2), 16);
        const g = parseInt(hex.substr(3, 2), 16);
        const b = parseInt(hex.substr(5, 2), 16);

        red.value = r;
        green.value = g;
        blue.value = b;
        updateColor();
    }

    red.addEventListener("input", updateColor);
    green.addEventListener("input", updateColor);
    blue.addEventListener("input", updateColor);

    redInput.addEventListener("input", updateSliders);
    greenInput.addEventListener("input", updateSliders);
    blueInput.addEventListener("input", updateSliders);

    colorPicker.addEventListener("input", updateFromColorPicker);

    updateColor();
});
