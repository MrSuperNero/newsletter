const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    cursor.setAttribute("style", `top: ${e.pageY - cursor.offsetHeight / 2}px; left: ${e.pageX - cursor.offsetWidth / 2}px;`);
});