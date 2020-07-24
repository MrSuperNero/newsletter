let toggle = document.getElementById("toggle");
let menu = document.getElementsByTagName("a");

var flkty = new Flickity( '.carousel', {
    // options
    wrapAround: true, 
    freeScroll: true,
    pageDots: false,
    arrowShape: { 
        x0: 35,
        x1: 20, y1: 25,
        x2: 70, y2: 50,
        x3: 70
    },
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