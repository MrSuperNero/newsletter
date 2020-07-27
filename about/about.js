var title = document.getElementById('title');

var titleType = new Typewriter(title, {

});

titleType.start()
    .typeString('Welcome, poor souls.')
    .pauseFor(2000)
    .deleteAll()
    .typeString('I mean, welcome, loyal followers.');