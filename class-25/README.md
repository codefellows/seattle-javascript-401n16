# Class 25 --- DSA: HashTables

## Lecture Videos

[Saturday Morning](https://www.youtube.com/watch?v=pKM4VvEtolc) || [Saturday Afternoon](https://www.youtube.com/watch?v=xJMo1mMRp60)

## Lecture Overview

We've now reached the end of our React Basics module, which covered the fundamental concepts of the React library, d As we review those topics today, we'll also be covering a new data structure, HashTables. 

At the end of this class, you'll be able to:

-   [x] Define what a HashTable is 
-   [x] Understand why HashTables are effective for storing
-   [x] Understand what a hashing algorithm is
-   [x] Understand rehashing and collisions 
-   [x] Have a solid understanding of past module topics such as:
    -   [x] The basics of SASS
    -   [x] How to implement a simple React application
    -   [x] Understanding how to build component based UI
    -   [x] Be familiar with UI testing procedures
    -   [x] Understand react routing

Prior to class, review the readings below and answer the discussion questions in your reading repository.

## Reading

HashTables are a data structure that utilize key value pairs to efficiently store and retrieve data. The following terminology is used when talking about HashTables:
1. *Hash* - A hash is the result of some algorithm taking an incoming string and converting it into a value that could be used for either security or some other purpose. In the case of a HashTable, it is used to determine the index of the array. 
2. *Buckets* - A bucket is what is contained in each index of the array of the hashtable. Each index is a bucket. An index could potentially contain multiple key/value pairs if a collision occurs. 
3. *Collisions* -  A collision is what happens when more than one key gets hashed to the same location of the hashtable.

The basic idea of a hashtable is the ability to store a key-value pair into a data structure, and quickly retrieve the value as long as you know the key. This is similar to the quick access of array items; as long as you know the index of the item you're looking for, you can retrieve it in O(1) time. 

HashTables use an algorithm to generate a unique index for each unique key. This algorithm is known as a `hash`, or a hash function. So, instead of knowing the index number of what you're looking for, you really only need to know a little bit of data about the value you're trying to access. For example, if you want to retrieve user data for 'Sarah Smalls', you may only have to know her first and last name, which acts as the "key". Giving the key to a hash function will return the index where the data is stored. 

Let's say we have data of Seattle neighborhood names and their corresponding zip codes.

```js
["Greenwood:98103", "Downtown:98101", "Alki Beach:98116", "Bainbridge Island:98110", ...]
```

Now, we want to be able to search through the data to look up a neighborhood and obtain it's zip code. We could do this using a for loop that looks through each piece of data one by one until it finds the neighborhood name, then returns the zip code there. This would be an `O(N)` read operation because it requires searching through each piece of data to find the one piece we want.

If we know the index of the information we want, we can access that information in `O(1)` time. Hash functions take advantage this. Instead of adding elements to an array from beginning to end, the hash function places each item at a precise index location, based off its key. The index is calculated in constant time, so saving and retrieving data is only `O(1)`.

It's very important that hash functions are deterministic: their output is determined only by their input. Hash functions should never have randomness to them. The same key should always produce the same hash code/index.

A HashTable traditionally is created from an array. While hash functions can be very diverse and varied, a possible series of operations in a hash function might be: 

1. Add or multiply all the ASCII values together.
1. Multiply it by a prime number such as 599.
1. Use modulo to get the remainder of the result, when divided by the total size of the array.
1. Insert into the array at that index.

```
Key = "Cat"
Value = "Josie"

67 + 97 + 116 = 280

280 * 599 = 69648

69648 % 1024 = 16

Key gets placed at index 16 
```

We now know that our key `Cat` maps to index 16 of the array. We can view into this index and find "Josie", our value quickly. 

A *collision* occurs when more than one key hashes to the same index in an array. A "perfect hash function" will **never** have any collisions. To put this into perspective, the worst possible hash function is one that hashes every single key to the same exact index of an array. The more keys you have hashed to a specific index, the more key/value pair combos you can potentially have. 

A HashTable needs to be able to handle two keys resolving to the same index. Otherwise, data could be lost as two different keys begin to overwrite each other at their position on the array. Typically a collission is handled by setting the value at the collided index to a *list* instead of an individual value. This can be either an array or LinkedList, though traditionally it has been a LinkedList. Now, if two keys resolve to the same index in the array then their key/value pairs can be added to the end of a list. 

Since different keys can lead to the same index, it's important to store the entire key/value pair in the bucket, not just the value. If only values were stored in buckets then it would be impossible to determine which value to return when a key led you to an index.

In this example, the two different keys `"Pioneer Square"` and `"Alki Beach"` happen to ultimately resolve to the same index. When we look at the index, we see a representation of a LinkedList that exists there. Pioneer Square was added first, so it's at the front of the list. Then there's Alki Beach as the second
element in the linked list. Notice that both of them store the entire key/value pair.

```js
hashTable.Add("Pioneer Square", 98104);
hashTable.Add("Alki Beach", 98116);
```

```
Index 92: [{Pioneer Square: 98104} --> {Alki Beach: 98116}]
```

HashTables can be of any size, but the smaller the HastTable the higher volume of collisions. It's possible to compute the "load factor" of a HashTable, which tells us how full the HashTable is. A HashTable can start with a small size, calculate its load factor, recognize when it gets too full and automatically grow and add more indices to itself to accommodate more data.

Here is an overview of the methods in a HashTable class. 

* `add(key, value)` - sends a key through a hash function to compute the index of where the value should be placed. Then, stores the key and value at that index or handles a collision. 
* `find(key)` - hashes the key and goes to the index returned. Once there, it grabs the correct value data to return, handling collisions if needed. 
* `contains(key)` - hashes the key and returns a boolean if that key exists in the HashTable. 
* `getHash(key)` - returns the index a key-value pair should be stored at. 

### External Reading / Viewing

Save or skim through the following links to help broaden your understanding.

| Links                                                        |
| ------------------------------------------------------------ |
| [What is a HashTable Data Structure?](https://www.youtube.com/watch?v=MfhjkfocRR0) |
| [Basics of HashTables](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/) |
| [HashTable - Wikipedia](https://en.wikipedia.org/wiki/Hash_table) |

## Discussion Questions

Create a new markdown page in your reading notes repo for this class. On that page, answer the following questions. You will not be graded on correctness, but rather on your attempt to answer the question. Once you've created your new page, submit a link to that page using the canvas discussion entry field. Links should be somewhat of the format `https://USERNAME.github.io/reading-notes/class-##-reading`.

1. Is a HashTable useful for search or sorting operations? Why? 
2. What makes a good hash function? 
3. Why should you try to reduce the number of collisions?
4. What is stored at each index of a HashTable? Why?  
