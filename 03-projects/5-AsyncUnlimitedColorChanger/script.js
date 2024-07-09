//hex code values are(0123456789ABCDEF) and has 6 values at atime
const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;

const startChangingColor = function () {
    function ChangeBG() {
        document.body.style.backgroundColor = randomColor();
    }

    //intervalid is null
    if (!intervalId) {
        intervalId = setInterval(ChangeBG, 500);
    }
};
const stopChangingColor = function () {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
