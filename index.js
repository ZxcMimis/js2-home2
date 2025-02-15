
const input = document.querySelector(".slider__input");
const img = document.querySelector(".slider__image");

// 1





input.addEventListener("input", _.debounce(() => {
    const size = input.value;
    img.style.width = `${size}%`
}, 100))

// 2

const boxes = document.querySelector("#box")



document.addEventListener("mousemove", _.debounce((events) => {
    const mouseX = events.clientX;
    const mouseY = events.clientY;
    box.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
}, 150))