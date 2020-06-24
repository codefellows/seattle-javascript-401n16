// what does a hash table consist of?

class HashTable {
    constructor(initSize) {
        this.map = new Array(initSize);
    }

    add(key, value) {
        let addIndx = this.hash(key);

        if (this.map[addIndx]) {
            // collision
            // this.map[addIndx] = { key: key, val: value, next: this.map[addIndx]}
            let current = this.map[addIndx];

            while (current.next) {
                // everything here is solving for same key being hashed
                if (current.key === key) {
                    if (current.val === value) return;
                    if (current.val.length) current.val.push(value);
                    else current.val = [current.val, value];
                    return;
                }
                current = current.next;
                console.log('loop');
            }

            // if you don't care about same key being hashed, then you can just
            // push the item to the beginning or end of the linked list
            current.next = {
                key: key,
                val: value,
            };
        } else
            this.map[addIndx] = {
                key: key,
                val: value,
            };
    }

    get(key) {
        let indx = this.hash(key);

        if (this.map[indx]) {
            let current = this.map[indx];

            while (current) {
                if (current.key === key) return current.val;
                current = current.next;
            }
        }

        return null;
    }

    contains(key) {
        let val = this.get(key);
        if (!val) return false;
        else return true;
    }

    hash(key) {
        let sum = 0;
        for (let i in key) {
            sum += key.charCodeAt(i);
        }

        sum *= 599;
        sum %= this.map.length;
        return sum;
    }
}

const myMap = new HashTable(200);

myMap.add('ace', 'correct');
myMap.add('cae', 'gib');

myMap.get('cae');

module.exports = HashTable;
