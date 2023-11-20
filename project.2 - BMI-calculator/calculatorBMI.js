function calcBMI(){
    var age = document.getElementById("input_age").value
    console.log(age)

    var sex = document.querySelector('input[name="sex"]:checked').value;
    console.log(sex)

    var weight = document.getElementById("input_weight").value
    console.log(weight)

    var height = document.getElementById("input_height").value
    console.log(height)
}