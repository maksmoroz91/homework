import {doTitleWord, fixSpace, countWords, countUniqueWords} from './operationsWithString.js';

let word = 'мАКСИМ';
console.log(doTitleWord(word));

let stringSpace = "Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.";
console.log(fixSpace(stringSpace));

console.log(countWords(fixSpace(stringSpace)));

let stringUnique = "Текст, в котором слово текст несколько раз встречается и слово тоже";
countUniqueWords(stringUnique);