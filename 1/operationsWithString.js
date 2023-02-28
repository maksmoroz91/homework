export {doTitleWord, fixSpace, countWords, countUniqueWords};

function doTitleWord(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function fixSpace(str) {
    str = str.replace(/([,.])/g, '$1 ');
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ' &&
            (str[i + 1] === ',' || str[i + 1] === '.' || str[i + 1] === ' ')) {
            continue;
        }
        result += str[i];
    }

    return result.trim();
}

function countWords(str) {
    return str.split(' ').length;
}

function countUniqueWords(str) {
    let arrWords = str.replace(/([.,])/g, '').toLowerCase().split(' ');
    let uniqueWords = {};

    for (let word of arrWords) {
        if (uniqueWords[word]) {
            uniqueWords[word] += 1;
        } else {
            uniqueWords[word] = 1;
        }
    }

    let arrCountUnique = Object.entries(uniqueWords).sort(([, a], [, b]) => b - a);

    console.log('Слово:'.padEnd(15), 'Сколько раз встречается в тексте:\n');

    for (let [word, count] of arrCountUnique) {

        console.log(`${word.padEnd(15)} ${count} ${wordEnding(count)}`);
    }

    function wordEnding(value) {
        if ([2, 3, 4].includes(value) ||
            (value > 20 && [2, 3, 4].includes(value % 10))) {
            return 'раза';
        }
        return 'раз';
    }
}
