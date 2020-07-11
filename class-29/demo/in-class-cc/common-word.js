//pseudocode

let words = ['in', 'a', 'galaxy', 'far', 'far', 'away', 'in'];

let hashmap = new Array(100);

let commonWord = '';
let commonWordIndx = 0;
let commonWordCount = 0;

for (let i = 0; i < words.length; i++) {
    let indx = hash(words[i]);

    // collision
    if (hashmap[indx]) {
        // is colliding b/c same key, or bad hash function
        // if b/c same key:
        let newCount = hashmap[indx].count++;
        if (newCount > commonWordCount) {
            commonWordIndx = i;
            commonWordCount = newCount;
        }

        if (newCount === commonWordCount) {
            if (hashmap[indx].firstSeen < commonWordIndx)
                commonWordIndx = hashmap[indx];
        }
        hashmap[indx] = { ...hashmap[indx], count: newCount };
    }

    // no collision
    else {
        hashmap[indx] = { key: words[i], count: 1, firstSeen: i };
    }
}
