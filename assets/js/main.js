// --------------------------- Gsap Animation -------------------- //
let timeline = gsap.timeline({
    defaults: {
        duration: 1.3,
        ease: "power3.inOut",
    },
});

timeline.to(".image-wrap", {
    height: "550px",
    backgroundSize: "100%",
    duration: 1.5,
    ease: "power4.inOut",
}).to(".image-wrap", {
    height: "250px",
    duration: 1.3,
    y: "0",
    ease: "power3.inOut",
}, 1.5).from(".big-name", {
    y: getYDistance(".big-name"),
}, 1.5).from(".hide", {
    opacity: "0",
}, 1.5)

function getYDistance(el) {
    return window.innerHeight - document.querySelector(el).getBoundingClientRect().top;
}





// --------------------- Cursor Animation -------------------------- //
const cursor_circle = document.querySelector(".cursor-circle"),
    cursor = document.querySelectorAll(".cursor"),
    elements = document.querySelectorAll(".getHover");

window.addEventListener("mousemove", (e) => {
    let xPosition = e.clientX;
    let yPosition = e.clientY;

    cursor.forEach(el => {
        el.style.transform = `translate(calc(-50% + ${xPosition}px), calc(-50% + ${yPosition}px))`;
        el.style.opacity = "1";
    })
})

elements.forEach(el => {
    el.addEventListener("mouseover", () => {
        cursor_circle.classList.add("biggerCursor");
    });
    el.addEventListener("mouseout", () => {
        cursor_circle.classList.remove("biggerCursor");
    });
});