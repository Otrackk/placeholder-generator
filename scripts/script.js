// API
var foxApi = "https://randomfox.ca/floof/";

// DOM VARIABLES
var startNow = $("#start-now");
var imgElement = $("#img-element");
var displayImageDiv = $("#display-image");
var hereImage = $("#here-image");
var loader = $(".container-emoji");
loader.hide();

startNow.on("click", generation);

hereImage.hide();

function generation() {
    hereImage.fadeOut();
    imgElement.fadeOut();
    loader.fadeIn();
    setTimeout(async function () {
        loader.fadeOut();
        let myApy = await fetch(foxApi);
        myApy = await myApy.json();
        imgElement.attr("src", myApy.image);
        imgElement.fadeIn();
        hereImage.fadeIn();
    }, 2000);

}