let toggle = document.getElementById("toggle");
let menu = document.getElementsByTagName("a");

toggle.onclick = function() {
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].style.display == 'block') {
            menu[i].style.display = 'none';
        } else {
            menu[i].style.display = 'block';
        }
    }
};