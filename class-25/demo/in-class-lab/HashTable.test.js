const HashTable = require('./HashTable.js');

describe('HashTable tests', () => {
    const map = new HashTable(20);

    it('Adds a key/value to your hashtable', () => {
        map.add('ace', 'a playing card with a value of one');
        expect(map.contains('ace')).toBe(true);
        let indx = map.hash('ace');
        expect(map.map[indx].val).toEqual('a playing card with a value of one');
    });

    it('handles a collision within the hashtable', () => {
        map.add('cae', 'gibberish');
        expect(map.contains('ace')).toBe(true);
        expect(map.contains('cae')).toBe(true);
        let indx = map.hash('cae');
        let indx2 = map.hash('ace');
        expect(indx).toBe(indx2);
        expect(map.map[indx].val).toEqual('a playing card with a value of one');
        expect(map.map[indx].next.val).toEqual('gibberish');
    });
});

/*
Adding a key/value to your hashtable results in the value being in the data structure
Retrieving based on a key returns the value stored
Successfully returns null for a key that does not exist in the hashtable
Successfully handle a collision within the hashtable
Successfully retrieve a value from a bucket within the hashtable that has a collision
Successfully hash a key to an in-range value
*/
