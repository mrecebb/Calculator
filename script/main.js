let monitorText = "0";
let memoryVariable = "";
let process = "";
let processStep = 0;
const maxNumberLength = 10;
const monitor = document.querySelector(".calculator .top-content .main-monitor p");
monitor.innerHTML = monitorText;


function button1() {
    check0();
    monitorText += "1";
    monitor.innerHTML = monitorText;
    formatMonitor();
}

function button2() {
    check0();
    monitorText += "2";
    monitor.innerHTML = monitorText;
    formatMonitor();
}

function button3() {
    check0();
    monitorText += "3";
    monitor.innerHTML = monitorText;
    formatMonitor();
}

function button4() {
    check0();
    monitorText += "4";
    monitor.innerHTML = monitorText;
    formatMonitor();
}

function button5() {
    check0();
    monitorText += "5";
    monitor.innerHTML = monitorText;
    formatMonitor();
}

function button6() {
    check0();
    monitorText += "6";
    monitor.innerHTML = monitorText;
    formatMonitor();
}

function button7() {
    check0();
    monitorText += "7";
    monitor.innerHTML = monitorText;
    formatMonitor();
}

function button8() {
    check0();
    monitorText += "8";
    monitor.innerHTML = monitorText;
    formatMonitor();
}

function button9() {
    check0();
    monitorText += "9";
    monitor.innerHTML = monitorText;
    formatMonitor();
}

function button0() {
    check0();
    monitorText += "0";
    monitor.innerHTML = monitorText;
    formatMonitor();
}

function buttonAC() {
    monitorText = "0";
    memoryVariable = "";
    process = "";
    processStep = 0;
    monitor.innerHTML = monitorText;
    formatMonitor();
}

function buttonC() {
    let newText = "";
    for (let i = 0; i < monitorText.length - 1; i++) {
        newText += monitorText.charAt(i);
    }
    monitorText = newText;
    if (monitorText.length === 0 || monitorText === "-") {
        monitorText = "0";
    }
    monitor.innerHTML = monitorText;
    formatMonitor();
}

function buttonPoint() {
    if (monitorText.includes(".")) return;
    check0();
    monitorText += ".";
    monitor.innerHTML = monitorText;
    formatMonitor();
}

function buttonPlus() {
    equals();
    memoryVariable = Number(monitorText);
    process = "+";
    monitorText = "0";
    monitor.innerHTML = monitorText;
    formatMonitor();
}

function buttonMinus() {
    equals();
    memoryVariable = Number(monitorText);
    process = "-";
    monitorText = "0";
    monitor.innerHTML = monitorText;
    formatMonitor();
}

function buttonMultiplication() {
    equals();
    memoryVariable = Number(monitorText);
    process = "*";
    monitorText = "0";
    monitor.innerHTML = monitorText;
    formatMonitor();
}

function buttonDivision() {
    equals();
    memoryVariable = Number(monitorText);  // 8
    process = "/";
    monitorText = "0";
    monitor.innerHTML = monitorText;
    formatMonitor();
}

function buttonReverse() {
    if (Number(monitorText) !== 0) {
        monitorText = String(-Number(monitorText));
        monitor.innerHTML = monitorText;
        formatMonitor();
    }
}

function equals() {
    switch (process) {
        case "+":
            monitorText = memoryVariable + Number(monitorText);
            break;
        case "-":
            monitorText = memoryVariable - Number(monitorText);
            break;
        case "*":
            monitorText = memoryVariable * Number(monitorText);
            break;
        case "/":
            monitorText = memoryVariable / Number(monitorText);
            break;
        default:
            return;
    }
    checkMonitorText();
    monitor.innerHTML = monitorText;
    formatMonitor();
}

function check0() {
    monitorText = String(monitorText);
    if (monitorText.startsWith("0")) {
        monitorText = monitorText.slice(1);
        check0();
    }
}

function checkMonitorText() {
    monitorText = String(monitorText);
    if (monitorText.length > maxNumberLength) {
        let newMonitorText = "";
        for (let i = 0; i < maxNumberLength; i++) {
            newMonitorText += monitorText.charAt(i);
        }
        monitorText = newMonitorText;
    }

    if (monitorText % 1 !== 0 && monitorText.endsWith("0")) {
        let newMonitorText = "";
        for (let i = 0; i < monitorText.length - 1; i++) {
            newMonitorText += monitorText.charAt(i);
        }
        monitorText = newMonitorText;
        checkMonitorText();
    }
}

function formatMonitor() {
    const p = document.querySelector('.main-monitor p');
    const text = p.innerText;

    let html = "";

    for (let char of text) {
        if (char === ".") {
            html += `<span class="dot">.</span>`;
        } else {
            html += `<span class="digit">${char}</span>`;
        }
    }

    p.innerHTML = html;
}
