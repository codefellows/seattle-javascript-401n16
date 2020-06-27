// input is a string
// hash
// when you have a "collision" then return that word

'use strict';

function hash(key, size) {
    let sum = 0;
    for (let i in key) sum += key.charCodeAt(i);

    sum *= 599;

    return sum % size;
}

function repeatedWord(str) {
    let words = str.split(/[., -!?]/g);
    let hashmap = new Array(words.length * 5);

    for (let i = 0; i < words.length; i++) {
        if (words[i] === '') continue;
        let indx = hash(words[i].toLowerCase(), hashmap.length);
        //console.log(words[i].toLowerCase(), indx);

        // possible collision
        if (hashmap[indx]) {
            //console.log(words[i].toLowerCase(), indx);
            // collision is actually same key/value
            let item = hashmap[indx];
            //console.log(item);
            while (item) {
                if (item.key === words[i].toLowerCase()) return item.key;
                item = item.next;
            }

            // collision is correct collision

            hashmap[indx] = {
                key: words[i].toLowerCase(),
                next: hashmap[indx],
            };
        }

        // no collision
        else {
            hashmap[indx] = { key: words[i].toLowerCase() };
        }
    }

    return null;
}

// log a
console.log(
    repeatedWord('Once upon a time, there was a brave princess who...'),
);

// log it
console.log(
    repeatedWord(
        'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.....',
    ),
);

// log summer
console.log(
    repeatedWord(
        'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...',
    ),
);
