document.addEventListener("DOMContentLoaded", function () {
    // Pobierz elementy kalkulatora
    const screen = document.getElementById("value");

    const buttons = document.querySelectorAll("button");

    // Dodaj obsługę kliknięcia dla każdego przycisku
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            handleButtonClick(button.innerHTML)
        });
    });

    // Obsługa kliknięcia przycisku
    function handleButtonClick(value) {
        switch (value) {
            case "=":
                calculateResult();
                break;
            case "AC":
                clearScreen();
                break;
            case "%":
                percentCalc();
                break;
            case "+/-":
                toggleSign();
                break;
            default:
                appendToScreen(value);
        }
    }

    // Dodawanie wartości do ekranu
    function appendToScreen(value) {
        screen.value += value;
    }

    // Czyszczenie ekranu
    function clearScreen() {
        screen.value = "";
    }

    // Zmiana znaku liczby
    function toggleSign() {
        var number = parseFloat(screen.value);
        var newNumber = -number;
        screen.value = newNumber.toString();
        console.log(newNumber);
    }

    // Obliczenia procentowe
    function percentCalc() {
        var number = parseFloat(screen.value);
        var newNumber = number / 100;
        try {
            screen.value = newNumber.toString();
            console.log(newNumber);
        } catch (error) {
            screen.value = "Error"
            setTimeout(hideError, 1000);
        }
    }

// Obliczanie wyniku
function calculateResult() {
    try {
        // Sprawdź, czy dzielnik nie jest równy zero
        if (screen.value.includes('/0')) {
            var error = new Error('Dzielenie przez 0');
            screen.value = error;
            throw error; // Rzucamy błąd, aby przerwać dalsze obliczenia
        }
        screen.value = eval(screen.value);
    } catch (error) {
        setTimeout(hideError, 10000);
    }
}

    // Funkcja usuwająca Error
    function hideError() {
        screen.value = "";
    }
});
