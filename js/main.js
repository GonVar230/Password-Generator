const slider = document.querySelector(".slider");
const fill = document.querySelector(".slider-fill");
const thumb = document.querySelector(".slider-thumb");
const lengthSpan = document.querySelector("#length");

const MIN = 0;
const MAX = 20;

let isDragging = false;

function updateSlider(clientX) {
    const rect = slider.getBoundingClientRect();
    let percent = (clientX - rect.left) / rect.width;

    // limitar valores
    percent = Math.max(0, Math.min(1, percent));

    const value = Math.round(MIN + percent * (MAX - MIN));

    fill.style.width = `${percent * 100}%`;
    thumb.style.left = `${percent * 100}%`;
    lengthSpan.textContent = value;
}

// mouse down
thumb.addEventListener("mousedown", () => {
    isDragging = true;
});

// mouse move
document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
});

// mouse up
document.addEventListener("mouseup", () => {
    isDragging = false;
});

// click en la barra
slider.addEventListener("click", (e) => {
    updateSlider(e.clientX);
});