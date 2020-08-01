let firstName = document.querySelector("#first-name"),
    lastName = document.querySelector("#last-name"),
    email = document.querySelector("#email"),
    streetName = document.querySelector("#street-name"),
    mother = document.querySelector("#mother"),
    pet = document.querySelector("#pet");

var translated, skewed = false;

firstName.addEventListener("mouseover", function() {
    firstName.style.transform  = 'rotate(-60deg)';
});

firstName.addEventListener("mouseout", function() {
    firstName.style.transform  = 'rotate(0deg)';
});

lastName.addEventListener("click", function() {
    if (!translated) {
        lastName.style.transform  = 'translate(20px, 100px)';
        translated = true;
    } else {
        lastName.style.transform  = 'translate(0px, 0px)';
        translated = false;
    }
});

email.addEventListener("click", function() {
    email.style.transform = "scale(0.5)";
});

streetName.addEventListener("mouseover", function() {
    if (!skewed) {
        streetName.style.transform = "skew(15deg, 30deg)";
        skewed = !skewed;
    } else {
        streetName.style.transform = "skew(0deg, 0deg)";
        skewed = !skewed;
    }
});

mother.addEventListener("click", function() {
    mother.style.transform = "scaleY(3.0)";
});

pet.addEventListener("click", function () {
    pet.style.opacity = "0";
});