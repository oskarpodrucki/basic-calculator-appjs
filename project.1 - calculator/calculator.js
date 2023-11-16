function appendToScreen(value) {
    var screen = document.getElementById("value");
    console.log(screen.value);

    screen.value = screen.value + value


    console.log(screen.value);
}

function clearScreen() {

    document.getElementById("value").value = ""

}

function toogleSing() {

    var number = document.getElementById("value").value

    var newNumber = number - (number * 2)

    document.getElementById("value").value = newNumber
    console.log(newNumber)

}

function percentCalc() {

    var number = document.getElementById("value").value

    var newNumber = number / 100

    document.getElementById("value").value = newNumber
    console.log(newNumber)

}