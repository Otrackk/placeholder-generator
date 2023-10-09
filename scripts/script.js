// API
var pixApi = "https://randomfox.ca/floof/";

// DOM VARIABLES
var startNow = $("#start-now");
var imgElement1 = $("#img-element1");
var imgElement2 = $("#img-element2");
var imgElement3 = $("#img-element3");
var displayImageDiv = $("#display-image");
var hereImage = $("#here-image");
var loader = $(".container-emoji");
loader.hide();

startNow.on("click", generation);

hereImage.hide();

function generation() {
    hereImage.fadeOut();
    imgElement1.fadeOut();
    imgElement2.fadeOut();
    imgElement3.fadeOut();
    loader.fadeIn();
    setTimeout(async function () {
        let userPrompt = document.getElementById("user-prompt").value;
        loader.fadeOut();
        let myApy = await fetch(`https://pixabay.com/api/?key=39719302-be6565da8abd4c2086fe22130&q=${userPrompt}&image_type=photo&pretty=true`);
        myApy = await myApy.json();
        let randomHit = Math.round(Math.random() * 17);

        imgElement1.attr("src", myApy.hits[randomHit].webformatURL);
        imgElement1.fadeIn();

        imgElement2.attr("src", myApy.hits[(randomHit + 1)].webformatURL);
        imgElement2.fadeIn();

        imgElement3.attr("src", myApy.hits[(randomHit + 2)].webformatURL);
        imgElement3.fadeIn();

        hereImage.fadeIn();
    }, 2000);

}