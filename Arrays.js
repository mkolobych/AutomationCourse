// 1. створити масив з цифрами [1,1,1,2,3,4,5,5,66,6,6,7,77,8,8,8888,9];
// 2. перебрати масив і до кожного числа додати 5, і вивести результат в консоль
let ArraysTrain = [1, 1, 1, 2, 3, 4, 5, 5, 66, 6, 6, 7, 77, 8, 8, 8888, 9];
for(let i = 0; i < ArraysTrain.length; i++){
   console.log(ArraysTrain [i] +5)
}

//3. створити на базі масиву Set унікальних значень
let ArraysTrain1 = [1, 1, 1, 2, 3, 4, 5, 5, 66, 6, 6, 7, 77, 8, 8, 8888, 9];
let SetTrain = new Set(ArraysTrain1);
console.log (SetTrain);

//4. ітерувати через сет і кожне число збільшити на 2, далі вивести суму всіх елементів;
let Arr = [1, 1, 1, 2, 3, 4, 5, 5, 66, 6, 6, 7, 77, 8, 8, 8888, 9];
let Settt = new Set(Arr);
for (let SSS of Settt){
console.log (SSS + 2);
}

//5. створити мапу з літерами алфівіту, і значеннями з сету {"a" : 1, "b" : 2 ....}
let Arr = [1, 1, 1, 2, 3, 4, 5, 5, 66, 6, 6, 7, 77, 8, 8, 8888, 9];
let uniqueValuesMap = new Map();
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let uniqueNumbersSet = new Set();

for (let value of Arr) {
    uniqueNumbersSet.add(value);
}

let index = 0;
for (let value of uniqueNumbersSet) {
    let key = alphabet[index];
    uniqueValuesMap.set(key, value);
    index++;
}

console.log(uniqueValuesMap);

//6. зробити конкатенацію ключів з мапи. 
let myMap = new Map();
myMap.set("a", 1);
myMap.set("b", 2);
myMap.set("c", 3);
myMap.set("d", 3);
myMap.set("e", 3);
myMap.set("f", 3);

let concatenatedKeys = Array.from(myMap.keys()).join('');

console.log(concatenatedKeys);




