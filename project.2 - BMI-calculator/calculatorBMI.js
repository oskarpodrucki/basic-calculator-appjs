function getData() {
    var age = document.getElementById("input_age").value;
    var sex = document.querySelector('input[name="sex"]:checked');
    var weight = document.getElementById("input_weight").value;
    var height = document.getElementById("input_height").value;

    switch (true) {
        case age === "" || isNaN(age) || age < 1 || age > 99:
            alert("Podaj poprawny wiek.");
            return;
        case sex === null:
            alert("Wybierz płeć.");
            return;
        case weight === "" || isNaN(weight) || weight < 20 || weight > 150:
            alert("Podaj poprawną wagę.");
            return;
        case height === "" || isNaN(height) || height < 100 || height > 250:
            alert("Podaj poprawny wzrost.");
            return;
        default:
            alert("Wszystkie dane poprawne")
            console.log("Wiek:", age);
            console.log("Płeć:", sex.value);
            console.log("Waga:", weight);
            console.log("Wzrost:", height);
    }
}
