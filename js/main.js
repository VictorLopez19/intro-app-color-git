document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencias a los elementos del DOM
    const red = document.getElementById("red");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");
    const redInput = document.getElementById("red-input");
    const greenInput = document.getElementById("green-input");
    const blueInput = document.getElementById("blue-input");
    const colorBox = document.getElementById("color-box");
    const hexCode = document.getElementById("hex-code");
    const colorPicker = document.getElementById("color-picker");

    // Función para actualizar el color de la vista previa y el código hexadecimal
    function updateColor() {
        // Obtener valores RGB desde los sliders
        const r = parseInt(red.value);
        const g = parseInt(green.value);
        const b = parseInt(blue.value);

        // Convertir a formato RGB y hexadecimal
        const color = `rgb(${r}, ${g}, ${b})`;
        const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase();

        // Aplicar color al círculo de vista previa y actualizar el código hexadecimal
        colorBox.style.backgroundColor = color;
        hexCode.textContent = hex;
        colorPicker.value = hex;

        // Actualizar valores en los inputs numéricos
        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;
    }

    // Función para actualizar los sliders cuando se ingresan valores numéricos
    function updateSliders() {
        red.value = redInput.value;
        green.value = greenInput.value;
        blue.value = blueInput.value;
        updateColor();
    }

    // Función para actualizar los sliders y la vista previa cuando se usa el selector de color
    function updateFromColorPicker() {
        const hex = colorPicker.value;

        // Convertir código hexadecimal a valores RGB
        const r = parseInt(hex.substr(1, 2), 16);
        const g = parseInt(hex.substr(3, 2), 16);
        const b = parseInt(hex.substr(5, 2), 16);

        // Asignar valores a los sliders
        red.value = r;
        green.value = g;
        blue.value = b;
        updateColor();
    }

    // Asignar eventos a los sliders
    red.addEventListener("input", updateColor);
    green.addEventListener("input", updateColor);
    blue.addEventListener("input", updateColor);

    // Asignar eventos a los inputs numéricos
    redInput.addEventListener("input", updateSliders);
    greenInput.addEventListener("input", updateSliders);
    blueInput.addEventListener("input", updateSliders);

    // Asignar evento al selector de color
    colorPicker.addEventListener("input", updateFromColorPicker);

    // Inicializar con el color predeterminado
    updateColor();
});
