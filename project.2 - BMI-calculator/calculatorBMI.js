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

    console.log("------------------------------------------")

    makeDiv(age, sex, weight, height, BMI);

    console.log("------------------------------------------")
}

function makeDiv(age, sex, weight, height, BMI) {
    var divBMI = document.createElement("div");
    divBMI.id = "div_BMI";

    var divTop = document.createElement("div");
    divTop.id = "div_BMI_top";

    var divTopRight = document.createElement("div");
    divTopRight.id = "div_BMI_top_right";

    var divTop1 = document.createElement("div");
    divTop1.id = "div_BMI_top_1";
    divTop1.innerHTML = "<h1>Your BMI Result</h1>";

    var divTop2 = document.createElement("div");
    divTop2.id = "div_BMI_top_2";

    let result;

    switch (true) {
        case BMI < 16:
            result = "Underweight";
            break;
        case BMI >= 16 && BMI <= 16.9:
            result = "Severely underweight";
            break;
        case BMI >= 17 && BMI <= 18.5:
            result = "Underweight";
            break;
        case BMI >= 18.5 && BMI <= 24.9:
            result = "Normal weight";
            break;
        case BMI >= 25 && BMI <= 29.9:
            result = "Overweight";
            break;
        case BMI >= 30 && BMI <= 34.9:
            result = "Obesity Class I";
            break;
        case BMI >= 35 && BMI <= 39.9:
            result = "Obesity Class II";
            break;
        case BMI >= 40:
            result = "Obesity Class III";
            break;
        default:
            result = "Invalid BMI range";
    }

    console.log(result);

    divTop2.innerHTML = `<p>Your result indicates:</p><h3>${result}</h3>`;

    var divTopLeft = document.createElement("div");
    divTopLeft.id = "div_BMI_top_left";

    var divTop3 = document.createElement("div");
    divTop3.id = "div_BMI_top_3";
    divTop3.innerHTML = `<h1>${BMI}</h1>`;

    var divBottom = document.createElement("div");
    divBottom.id = "div_BMI_bottom";

    var divGender = document.createElement("div");
    divGender.className = "align_left";

    let gender;
    if (sex.value == 1) {
        gender = "Woman"
    } else {
        gender = "Man"
    }
    divGender.innerHTML = `<p>Gender</p><h3 class="blue">${gender}</h3>`;

    var divWeight = document.createElement("div");
    divWeight.className = "align_left_border";
    divWeight.innerHTML = `<p>Weight</p><h3 class="blue">${weight}</h3>`;

    var divHeight = document.createElement("div");
    divHeight.className = "align_left_border";
    divHeight.innerHTML = `<p>Height</p><h3 class="blue">${height}</h3>`;

    var divHealthyWeight = document.createElement("div");
    divHealthyWeight.className = "align_left_border";

    var weight1 = 18.5 * (height * height);
    var fixedWeight1 = Math.floor(weight1).toString().slice(0, 2);
    console.log(fixedWeight1);

    var weight2 = 24.9 * (height * height);
    var fixedWeight2 = Math.floor(weight2).toString().slice(0, 2);
    console.log(fixedWeight2);

    divHealthyWeight.innerHTML = `<p>Healthy Weight:</p><h3 class="blue">${fixedWeight1} - ${fixedWeight2} Kg</h3>`;

    divTopRight.appendChild(divTop1);
    divTopRight.appendChild(divTop2);

    divTopLeft.appendChild(divTop3);

    divTop.appendChild(divTopRight);
    divTop.appendChild(divTopLeft);

    divBottom.appendChild(divGender);
    divBottom.appendChild(divWeight);
    divBottom.appendChild(divHeight);
    divBottom.appendChild(divHealthyWeight);

    divBMI.appendChild(divTop);
    divBMI.appendChild(divBottom);

    var container = document.getElementById("container");
    container.appendChild(divBMI);

    console.log("Div created!")
}
