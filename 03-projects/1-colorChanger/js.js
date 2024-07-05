const buttons = document.querySelectorAll(".button");
// console.log(buttons); //=>node list

const body = document.querySelector("body");

buttons.forEach(function (button) {
    // console.log(button);
    button.addEventListener("click", function (event) {
        // console.log(event); //pinter event
        // console.log(event.target); //kis target se event mila hai

        if (event.target.id === "grey") {
            body.style.backgroundColor = event.target.id;
        } else if (event.target.id === "white") {
            body.style.backgroundColor = event.target.id;
        } else if (event.target.id === "blue") {
            body.style.backgroundColor = event.target.id;
        } else if (event.target.id === "yellow") {
            body.style.backgroundColor = event.target.id;
        } else if (event.target.id === "purple") {
            body.style.backgroundColor = event.target.id;
        }
    });
});
