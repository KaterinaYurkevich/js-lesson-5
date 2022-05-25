// 1)

// 1-ый вариант

let someText = prompt('Please, write some text', 'Mozart');

function isMozartHere(str) {
    if (!str) return console.log("You didn't enter a text");

    let promStr = str.toLowerCase().trim();

    let newStr = promStr[0].toUpperCase() + promStr.slice(1);

    return newStr.includes('Mozart');
};

let result = isMozartHere(someText);

console.log(someText);
console.log(result);

// 2-ой вариант

let someNextText = prompt('Please, write some text', 'Mozart');

function isMozartHere(str) {
    if (!str) return console.log("You didn't enter a text");

    if (str.includes('Mozart') || str.includes('MOZART') || str.includes('mozart')) {
        return true;
    } else return false;
};

let nextResult = isMozartHere(someNextText);

console.log(someNextText);
console.log(nextResult);

// 2)

let someAnotherText = prompt('Please, write some text', '');

function showUppercaseFirstLetter(str) {
    if (!str) return console.log("You didn't enter a text");

    let newStr = str.toLowerCase().trim();

    return newStr[0].toUpperCase() + newStr.slice(1);
};

let anotherResult = showUppercaseFirstLetter(someAnotherText);

console.log(someAnotherText);
console.log("It's a result: ", anotherResult);

// 3)

let arr = ["Идиот", "Игрок", "Униженные и оскорбленные", "Братья Карамазовы"];

console.log("МАссив: ", arr);
console.log("Длина массива: ", arr.length);
console.log("Последний элемент массива: ", arr[arr.length - 1]);
console.log("Предпоследний элемент массива: ", arr[arr.length - 2]);

// 4)

let javaScriptTypes = ["number", "null", "undefined", "string"];

javaScriptTypes.push("BigInt", "symbol", "boolean", "object");

console.log(javaScriptTypes);

// 5)

let someStr = "Роман «1984» наряду с такими произведениями, как «Мы» Евгения Замятина (1920), «О дивный новый мир» Олдоса Хаксли (1932) и «451 градус по Фаренгейту» Рэя Брэдбери (1953) считается одним из образцов антиутопии.";

function showSubstrFromStr(str, substr) {
    return str.substr(str.indexOf(substr), substr.length);
}

let someSubstr = "451 градус по Фаренгейту";

let resultSubstr = showSubstrFromStr(someStr, someSubstr);

console.log(resultSubstr);

// 6)

function showRandomNumber(min, max) {
    let number = min + Math.random() * (max - min);
    return Math.round(number);
}

console.log(showRandomNumber(1, 100));

// 7)

let textStr = "Я учу JavaScript очень мало";

textStr = textStr.replace("мало", "много");

console.log(textStr);

// 8)

let myStr = "Дорогой, а вдруг он потеряется?";

function isSubstrInStr(substr) {
    if (myStr.includes(substr)) {
        return console.log(`В этой строке есть подстрока: ${substr}`);
    } else return console.log(`В этой строке нет подстроки: ${substr}`);
}

let mySubstr = "вдруг";
let anotherSubstr = "рассвет";

isSubstrInStr(mySubstr);
isSubstrInStr(anotherSubstr);

// 9)

let arrOfColors = ["Blue", "Red", "Purple", "Yellow"];
console.log("МАссив: ", arrOfColors);

arrOfColors.pop();
console.log("МАссив: ", arrOfColors);

arrOfColors.push("Green");
console.log("МАссив: ", arrOfColors);

arrOfColors.shift();
console.log("МАссив: ", arrOfColors);

arrOfColors.unshift("White");
console.log("МАссив: ", arrOfColors);