let resultArray = []
const sum = () => {
    if (resultArray[resultArray.length - 1] === "+" || resultArray[resultArray.length - 1] === "-" || resultArray[resultArray.length - 1] === "*" || resultArray[resultArray.length - 1] === "/") {
        console.log("passei por aqui, sum");
        document.getElementById("result").value = ""
        setTimeout(function () {
            document.getElementById("result").value = ""
            for (let index = 0; index < (resultArray.length); index++) {
                document.getElementById("result").value += resultArray[index]
            }
        }, 300);
    } else if (resultArray.length != 0) {
        document.getElementById("result").value += "+"
        resultArray[resultArray.length] = "+"
        console.log(resultArray);
    }
}
const sub = () => {
    if (resultArray[resultArray.length - 1] === "+" || resultArray[resultArray.length - 1] === "-" || resultArray[resultArray.length - 1] === "*" || resultArray[resultArray.length - 1] === "/") {
        console.log("passei por aqui, sub");
        document.getElementById("result").value = ""
        setTimeout(function () {
            document.getElementById("result").value = ""
            for (let index = 0; index < (resultArray.length); index++) {
                document.getElementById("result").value += resultArray[index]
            }
        }, 300);
    } else if (resultArray.length != 0) {
        document.getElementById("result").value += "-"
        resultArray[resultArray.length] = "-"
        console.log(resultArray);
    }
}
const mult = () => {
    if (resultArray[resultArray.length - 1] === "+" || resultArray[resultArray.length - 1] === "-" || resultArray[resultArray.length - 1] === "*" || resultArray[resultArray.length - 1] === "/") {
        console.log("passei por aqui, mult");
        document.getElementById("result").value = ""
        setTimeout(function () {
            document.getElementById("result").value = ""
            for (let index = 0; index < (resultArray.length); index++) {
                document.getElementById("result").value += resultArray[index]
            }
        }, 300);
    } else if (resultArray.length != 0) {
        document.getElementById("result").value += "*"
        resultArray[resultArray.length] = "*"
        console.log(resultArray);
    }
}
const div = () => {
    if (resultArray[resultArray.length - 1] === "+" || resultArray[resultArray.length - 1] === "-" || resultArray[resultArray.length - 1] === "*" || resultArray[resultArray.length - 1] === "/") {
        console.log("passei por aqui, div");
        document.getElementById("result").value = ""
        setTimeout(function () {
            document.getElementById("result").value = ""
            for (let index = 0; index < (resultArray.length); index++) {
                document.getElementById("result").value += resultArray[index]
            }
        }, 300);
    } else if (resultArray.length != 0) {
        document.getElementById("result").value += "/"
        resultArray[resultArray.length] = "/"
        console.log(resultArray);
    }
}
const one = () => {
    document.getElementById("result").value += "1"
    resultArray[resultArray.length] = "1"
    console.log(resultArray);
}
const two = () => {
    document.getElementById("result").value += "2"
    resultArray[resultArray.length] = "2"
    console.log(resultArray);
}
const three = () => {
    document.getElementById("result").value += "3"
    resultArray[resultArray.length] = "3"
    console.log(resultArray);
}
const four = () => {
    document.getElementById("result").value += "4"
    resultArray[resultArray.length] = "4"
    console.log(resultArray);
}
const five = () => {
    document.getElementById("result").value += "5"
    resultArray[resultArray.length] = "5"
    console.log(resultArray);
}
const six = () => {
    document.getElementById("result").value += "6"
    resultArray[resultArray.length] = "6"
    console.log(resultArray);
}
const seven = () => {
    document.getElementById("result").value += "7"
    resultArray[resultArray.length] = "7"
    console.log(resultArray);
}
const eight = () => {
    document.getElementById("result").value += "8"
    resultArray[resultArray.length] = "8"
    console.log(resultArray);
}
const nine = () => {
    document.getElementById("result").value += "9"
    resultArray[resultArray.length] = "9"
    console.log(resultArray);
}
const zero = () => {
    document.getElementById("result").value += "0"
    resultArray[resultArray.length] = "0"
    console.log(resultArray);
}
const dot = () => {
    document.getElementById("result").value += "."
    resultArray[resultArray.length] = "."
    console.log(resultArray);
}
const C = () => {
    resultArray = []
    result = ""
    document.getElementById("result").value = ""
}
let result = ""
const equal = () => {
    if (resultArray[resultArray.length - 1] === "+" || resultArray[resultArray.length - 1] === "-" || resultArray[resultArray.length - 1] === "*" || resultArray[resultArray.length - 1] === "/") {
        resultArray[resultArray.length - 1] = ""
        console.log("tira final");
        console.log(resultArray);
    }
    for (let index = 0; index < resultArray.length; index++) {
        if (index === 0) {
            result = resultArray[index]
            console.log(result);
        } else {
            result += resultArray[index]
            console.log(result);
        }
    }
    result = eval(result)
    resultArray = []
    resultArray[0] = result
    console.log(result)
    document.getElementById("result").value = result


}