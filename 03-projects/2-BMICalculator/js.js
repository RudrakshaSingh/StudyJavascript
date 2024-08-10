const form = document.querySelector("form");
//form is sumbitted in 2 ways
//1.get   2.post
//when sumbits the value is send to url or server
//in this program we have to stop this default  function as we have no server

form.addEventListener("submit", function (e) {
    e.preventDefault();

    //parseInt=Converts a string to an integer.
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    //we are taking these inside function as we want the value when it is clicked event if we take these outside it will take value whemn the page is loaded which will be empty so it will get empty value

    const results = document.querySelector("#results");

    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = `please give a valid height ${height}`;
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2); //till 2 decimal
        results.innerHTML = `<span>${bmi}</span>`;
    }
});
