const dino = document.getElementById("dino"),
    cactus = document.getElementById("cactus");

document.addEventListener("keyup", function (event) {
    boz();
});

function boz() {
    if (dino.classList != "boz") {
        dino.classList.add("boz")
    }

    setTimeout(function () {
        dino.classList.remove("boz")
    }, 400);
}

let isAlive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusleft = parseInt(window.getComputedStyle(dino).getPropertyValue("left"));

    if (cactusleft < 70 && cactusleft > 0 && dinoTop >= 140) {

    }


})