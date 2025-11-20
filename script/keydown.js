document.addEventListener("keydown", function(e) {
    if (e.key === "Backspace") {
        buttonC();
    }
    switch (e.key) {
        case "1":
            button1();
            break;
        case "2":
            button2();
            break;
        case "3":
            button3();
            break;
        case "4":
            button4();
            break;
        case "5":
            button5();
            break;
        case "6":
            button6();
            break;
        case "7":
            button7();
            break;
        case "8":
            button8();
            break;
        case "9":
            button9();
            break;
        case "0":
            button0();
            break;
        case ".":
            buttonPoint();
            break;
        case "+":
            buttonPlus();
            break;
        case "-":
            buttonMinus();
            break;
        case "*":
        case "x":
            buttonMultiplication();
            break;
        case "/":
            buttonDivision();
            break;
        case "Enter":
        case "=":
            equals();
            break;
        case "c":
        case "C":
            buttonC();
            break;
        case "a":
        case "A":
            buttonAC();
            break;
        default:
            break;
    }
});