// преобразовать словосочетание в имя переменной в формате camelCase


function convertPhraseToVariableName(phrase) {
    let specialSymbols = [" ", "-", ":", "_"];
    let phraseSymbols = phrase.split("");
    let delimiterSymbol = "#";

    specialSymbols.forEach(specialSymbol => {
        phraseSymbols = phraseSymbols.map(phraseSymbol => phraseSymbol === specialSymbol ? delimiterSymbol : phraseSymbol);
    });
    phraseSymbols = removeExtraSymbols(phraseSymbols, delimiterSymbol);
    let variableName = phraseSymbols.join("").split(delimiterSymbol).map((word, index) => {
        let firstLetter = word[0];
        firstLetter = getUpperOrLowerCaseValue(firstLetter, index);
        return firstLetter + word.substr(1);
    }).join("");

    return variableName;
}

// вспомогательные функции

function removeExtraSymbols(array, extraSymbol) {
    let currentArray = array.slice();
    let length;
    
    while (currentArray.join("").includes(extraSymbol.repeat(2))) {
        length = currentArray.length;
        for (let i = 0; i < length; i++) {
            if (currentArray[i] === extraSymbol && currentArray[i + 1] === extraSymbol) currentArray.splice(i, 1);
        }
    }
    if (currentArray[0] === extraSymbol) currentArray.splice(0, 1);
    if (currentArray[currentArray.length - 1] === extraSymbol) currentArray.splice(currentArray.length - 1);

    return currentArray;
}

function getUpperOrLowerCaseValue(symbol, condition) {
    return typeof symbol === "string" ? (condition ? symbol.toUpperCase() : symbol.toLowerCase()) : "";
}