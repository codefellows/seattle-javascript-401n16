// default the original hash tables to use a "fake" hash function, with guaranteed 0 collisions
// >>> Two arrays

// what is a hash table / hashmap >> an array with gaps
// where a function determines where things should go

let synArray = new Array(15);
let antArray = new Array(20);

const hash = (key, hashMapSize) => {
    let sum = 0;

    for (i in key) {
        let letter = key.charCodeAt(i);
        sum += letter;
    }

    sum *= 599;
    return sum % hashMapSize;
};

if (synArray[hash('fond', 15)])
    synArray[hash('fond', 15)] = {synArray[hash('fond', 15)], next: ['fond', 'enamored']};
else 
    synArray[hash('fond', 15)] = ['fond', 'enamored'];

if (synArray[hash('wrath', 15)])
    synArray[hash('wrath', 15)] = {synArray[hash('wrath', 15)], next: ['wrath', 'anger']};
else 
    synArray[hash('wrath', 15)] = ['wrath', 'anger'];


if (antArray[hash('fond', 20)])
    antArray[hash('fond', 20)] = {prev: antArray[hash('fond', 20)], next: ['fond', 'averse']};
else 
    antArray[hash('fond', 20)] = ['fond', 'averse'];

if (antArray[hash('wrath', 20)])
    antArray[hash('wrath', 20)] = { prev: antArray[hash('wrath', 20)], next: ['wrath', 'delight']};
else 
    antArray[hash('wrath', 20)] = ['wrath', 'delight'];


const leftJoin = (table01, table02) => {
    for(let i = 0; i < table02.length; i++) {
        if(!table02[i]) {
            continue; 
        } else if (table02[i].length) {
            let rightEntry = table02[i]; 
            let key = rightEntry[0]; 
            let value = rightEntry[1]; 

            let indx = hash(key, table01.length); 
            let leftEntry = table01[indx]; 

            if (!leftEntry) {
                table01[indx] = [key, null, value]; 
            } else if (leftEntry.length) {
                table01[indx].push(value); 
            } else if (leftEntry.next) {
                let current =  leftEntry.prev

                while(current) {
                    if (current[0] === key) {
                        current.push(value); 
                        break; 
                    }

                    current = current.next; 
                }
            }
        } else  if (table02[i].next) {
            // collision 
        }
    }
}