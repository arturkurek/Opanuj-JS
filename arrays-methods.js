const arr = [1, 2, 3, 4, 16, 14, 5];

// reverse -odwrócenie tablicy (odwrócenie kolejności elementów)

arr.reverse(); // [5, 14, 16, 4, 3, 2, 1]

// Modyfikacja zawartości tablicy przy pomocy const jest możliwa, np. poprzez metodę push, ale nie można przypisać nowej tablicy (taka sytuacja, może mieć miejsce w przypadku typów złożonych, takich jak tablice czy obiekty)

arr.sort((prev, next) => next - prev);  // niejawne zwrócenie wartości // w metodzie sort wartości są traktowane jako tekst czy ciągi znaków [1, 14, 16, 2, 3, 4, 5]

// W przypadku dodania 14 znajdzie się ona po 1 i przed 16, ponieważ zostaną porównane jedynki oraz 4 i 6 

// callback - to funkcja, która jest przekazywana jako argument do innej funkcji po to, aby było można ją później wykonać

//Jak działa sort?
// pary porównywane od końca

arr.sort(sortAsc);
console.log (sortAsc);
// function sortAsc(prev, next) {
//     console.log(prev, next);
//     if (prev > next) {
//         return 1;
//     }
//     if ( prev === next) {
//         return 0;
//     }
//     if (next > prev) {
//         return -1;
//     }
// }
const sortAsc = (prev, next) => next - prev;


// forEach - iteruj po tablicy

arr.forEach(el => {
    console.log(el);
})

// map - iteruj i zwróć wynik dla każdego elementu (zwraca nową tablicę, stara tablica pozostaje nienaruszona, możemy zmodyfikować wartość każdego elementu)

const mapped = arr.map(el => {
    return el + 1;
})

// reduce - oblicz pojedynczą wartość dla wszystkich elementów tablicy

const sum = arr.reduce((total, item, index, array) => { // total - bieżący wynik naszej metody, item - bieżący element naszej tablicy, index to bieżący index, a array to tablica
    return total += item;
}, 0); // 0 to drugi argument przypisany do naszej tablicy, jest to wartość początkowa

// filter - filtorwanie elementów tablicy na podstawie warunku

const filtered = arr.filter(el => {
    return el < 4; // [1, 2, 3] - nowa tablica
})

// split & join

const user = 'Adam Gospodarczyk';
const userDetails = user.split(' '); 
console.log(userDetails); // ['Adam', 'Gospodarczyk']; - zamieniliśmy ciąg znaków na tablicę
const joined = userDetails.join('-').toLowerCase();

// searching - proste przeszukiwanie tablic, istnieją do tego biblioteki, które robią to bardziej szczegółowo

const toSearch = ['Adam', 'Przemek', 'Marcin'];

toSearch.indexOf('Marcin'); // 2, jak nie znajdzie indexu, to zwróci -1
toSearch.includes('Adam'); // true, jak nie znajdzie, to false
toSearch.find(el => el === 'Adam'); // Adam - zostanie zwrócony pierwszy element spełniający warunek
toSearch.findIndex(el => el === 'Adam'); // 0 - to samo co powyżej, tylko że index

const myArray = [];
typeof myArray; //object
Array.isArray(myArrray); //odwołanie się do klasy Array i wykonanie metody isArray;






