/*function spinWords(str) {
    let s = str.split(' ');
    console.log(s);

    var res = s.map((el) => {
        if (el.length > 4) {
            (el = el.split('').reverse().join(''));
        }
        return el;
    });

    return (res.join(' '));
}

console.log(spinWords("hello my world"));
*/
/*
function duplicateEncode(word) {
    word = word.toLowerCase();
    let res = "";
    for (letter of word) {
        if (word.indexOf(letter) == word.lastIndexOf(letter)) {
            res = res + "(";
        } else {
            res = res + ")";
        }
    }
    return (res);
}
console.log(duplicateEncode("fFFFuhljk"));
*/
/*
function isIsogram(str) {
    let count = 0;
    let res = true;
    let s = str.toLowerCase().split('');

    s.forEach((e) => {
        s.forEach((el) => {
            if (el == e) {
                count++;
            }
        })
        count > 1 ? res = false : count = 0;;
    })
    return res;
}

console.log(isIsogram("nbutreeSSS"));
*/

function secondIndex(text, symbol) {
    text = text.split('');
    console.log(text);
    let count = 0;
    //let index;
    for(let el of text)(el, index) => {
        if (el == symbol) {
            count++;
            if (count == 2) {
                console.log(index);
                return index;
            }
        }
    }
}

console.log(secondIndex('wfrftf', 'f'));