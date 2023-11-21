function getData() {
    var age = document.getElementById("input_age").value;
    var sex = document.querySelector('input[name="sex"]:checked');
    var weight = document.getElementById("input_weight").value;
    var height = document.getElementById("input_height").value;

    switch (true) {
        case age === "" || isNaN(age) || age < 1 || age > 99:
            alert("Please enter a valid age.");
            return;
        case sex === null:
            alert("Select gender.");
            return;
        case weight === "" || isNaN(weight) || weight < 20 || weight > 150:
            alert("Please enter a valid weight.");
            return;
        case height === "" || isNaN(height) || height < 100 || height > 250:
            alert("Please enter a valid height.");
            return;
        default:
            alert("All data entered correctly.")
            console.log("------------------------------------------")

            console.log("Age:", age);
            console.log("Gender:", sex.value);
            console.log("Weight:", weight);
            console.log("Height:", height);

            calcBMI(age, sex, weight, height);
    }
}

function calcBMI(age, sex, weight, height) {
    console.log("------------------------------------------")

    var container = document.getElementById("container");
    container.innerHTML = "";

    console.log("Age:", age);
    console.log("Gender:", sex.value);
    console.log("Weight:", weight);
    console.log("Height:", height);

    console.log("------------------------------------------")

    var newHeight = height / 100;
    console.log(newHeight)

    var BMI = weight / (newHeight * newHeight)
    BMI = BMI.toFixed(2)
    console.log(BMI)

    makeDiv(age, sex, weight, height, BMI)

    console.log("------------------------------------------")

    const div = document.createElement("div")

    const div_top = document.createElement("div")
    const div_top_1 = document.createElement("div")
    const div_top_2 = document.createElement("div")
    const div_top_3 = document.createElement("div")

    const div_bottom = document.createElement("div")
    const div_bottom_1 = document.createElement("div")
    const div_bottom_2 = document.createElement("div")
    const div_bottom_3= document.createElement("div")
    const div_bottom_4 = document.createElement("div")

}

