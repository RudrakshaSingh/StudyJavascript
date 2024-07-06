clock = document.getElementById("clock");

// let date = new Date();
// console.log(date.toLocaleTimeString());
//to mak ethis update each second

setInterval(() => {
    let date = new Date();

    clock.innerHTML = date.toLocaleTimeString();
}, 1000); //in millisecond
