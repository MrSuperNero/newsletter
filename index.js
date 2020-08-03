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
