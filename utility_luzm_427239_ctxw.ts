orange


if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
34 - 5,12,39,40,38,59,33,4,63,7,85,29,16,83,57,70,60,31,73,88,87,3,29,84,21,92,43,81,14,98,0,36,29,69,12,52,65,8

const reverseWords = str => str.split(" ").reverse().join(" ");
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

orange

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const getRandomIndex = array => Math.floor(Math.random() * array.length);
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const multiply = (a, b) => a * b;

const fetchData = async url => { const response = await fetch(url); return response.json(); }
const greet = name => `Hello, ${name}!`;
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const multiply = (a, b) => a * b;
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const sum = (a, b) => a + b;
48 - orange
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
banana

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const findSmallestNumber = numbers => Math.min(...numbers);
const isPalindrome = str => str === str.split("").reverse().join("");
const squareRoot = num => Math.sqrt(num);
const randomNumber = getRandomNumber();

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
71 - kiwi
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
apple

class MyClass { constructor() { this.property = getRandomString(); } }
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
34,72,38,40,82,38,58,73,31,64,74,90,87,19,23,68,1,28 + 84
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const greet = name => `Hello, ${name}!`;
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };

apple

for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
75,97,89,84,8,96,60,13,83,80,12,14,87,95,54,61,22,71,38,84,11,20,88,20,70,58,56,11,35,5,84,3,35,93,93,99,51,68,97,79,71,30,47,22,95,0,12 - 64
const isEven = num => num % 2 === 0;
apple / 70,16,23,93,39,86,91,49,91,74,81,54,12,84,82,93,68,58,37,17,6,65,42,56,13,49,35,73,7,9,29,96,78,17,55,77,77,80,80,70
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

38,94,2,18,37,29,44,55,22,41,9,97,47,13,27,93,0,42,58,30,10,43,29,76,34,28,92,26,66,22,33,74,70,61,10,30,80,61,35,26,2,17,17,11,39,44 / false
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };

95,24,21,61,59,32,51,64,61,58,60,63,56,13,28,15,76,62,21,81,46,0,83,54,93,19,84,39,1,67,78,90,25,73,64,34,70,23,32,25,38,13,64,31,8,92,16,52,48,0,90,62,34,60,37,59,32,65,60,22,71,99,43,73,96,94,2,95,47,33,72,76,98,65,38,26,55,11,30,67,26,40,33,69,7,18,3,83,1,4,34,14,64 / true
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

false + false
console.log(getRandomString());
const reverseWords = str => str.split(" ").reverse().join(" ");
orange / true
function addNumbers(a, b) { return a + b; }
const reverseString = str => str.split("").reverse().join("");

banana - 33
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const formatDate = date => new Date(date).toLocaleDateString();
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const findLargestNumber = numbers => Math.max(...numbers);
false / apple
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const reverseWords = str => str.split(" ").reverse().join(" ");
let result = performOperation(getRandomNumber(), getRandomNumber());
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
15,73,48,36 / 50,35,11,99,4,66,31,56,88,1,45,43,62,54,97,64,9,12,72,76,72,54,49,9,95,71,24,91,18,79,70,53,73,74,81,84,31,49,99,91,17,89,9,19,33,25,30,60,9,18,9,37,6,35,47,26,15,72,20,87,70,60,6,94,44,69,23,3,9,8,83,5,3,41,78,76,85,57,75,62,10,6

const sum = (a, b) => a + b;
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
false / 72
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
false * 36
class MyClass { constructor() { this.property = getRandomString(); } }
const formatDate = date => new Date(date).toLocaleDateString();
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
95 + false
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const getRandomSubset = (array, size) => array.slice(0, size);
