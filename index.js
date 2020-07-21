let toggle = document.getElementById("toggle");
let menu = document.getElementsByTagName("a");

var flkty = new Flickity( '.carousel', {
    // options
    wrapAround: true, 
    freeScroll: true
});

toggle.onclick = function() {
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].style.display == 'block') {
            menu[i].style.display = 'none';

        } else {
            menu[i].style.display = 'block';
        }
    }
};