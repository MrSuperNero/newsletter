const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 37.5)+"px; left: "+(e.pageX - 37.5)+"px;");
});