$(document).ready(function() {
    $("#toggle").on("click", function() {
        ($(".item").toggleClass("active"));
    });
});