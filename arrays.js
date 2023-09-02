// Tablica to rodzaj obiektu, z pomocą którego przechowujemy wiele wartości pod jedną zmienną. Każdy element tablicy jest oznaczony indeksem rozpoczynającym się od zera
// Deklarowanie tablicy

const arrAlternative = new Array();
const arr = [1, 2, 'text', [3, 4, 5], { el: 'value' }]; // tego typu dane mogę zapisywać w tablicy

// Dodawanie elementów do tablicy
arr.push(1); // Dodawanie na koniec tablicy  //Rolą metody push jest wepchnięcie elementu na końcu tablicy
arr.unshift(3); // Dodawanie na początku tablicy

// Usuwanie elementów z tablicy 

arr.pop(); // usuwa ostatni element tablicy
arr.shift(); // usuwanie pierwszy element tablicy

// Usuwanie konkretnego elementu tablicy - metoda splice

const range = [1, 5, 10];


range.splice(0, 1); // pierwszy parametr - od elementu którego indeksu zaczynamy, drugi parametr - ile elementów usuwamy
range.splice(-1, 1); // usunięcie ostatniego elementu tablicy

// *Liczenie indeksów zaczynamy od zera

//  Modyfikacja elementów tablicy - metoda splice
range.splice(0, 1, 9, 12, 13); // Wartości, które chcemy dodać podajemy jako kolejne parametry

// Wycinanie elementów tablicy - metoda slice

const newRange = [9, 8, 5];
const fragment = newRange.slice(0, 2); // wycina elementy - pierwszy parametr - od elementu którego indeksu zaczynamy, drugi parametr - ile elementów wycinamy i przypisujemy je do nowej zmiennej (oryginalna tablica newRange nie zostaje w żaden sposób naruszona)
const fragment2 = newRange.slice(-2) // wycina dwa ostatnie elementy tablicy newRange i przypisuje do zmiennej fragment2 
console.log(fragment); [ 9, 8];

// Odczytywanie elementów tablicy

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers[0]); //odwołujemy się do konkretnego elementu, który przekazujemy w nawiasie kwadratowym zaraz po nazwie identyfikatora tablicy
console.log(numbers[numbers.length - 1]); // indeks elementów zakończy się na 9, więc jeżeli od liczby elementów odejmiemy 1, to otrzymamy dokładnie indeks jednego elementu

// Nadpisywanie elementów tablicy

numbers[0] = 5; 
console.log(numbers); // 5, 2, 3, 4, 5, 6, 7, 8, 9, 10; Przy const nie jesteśmy w stanie zmienić wartości całej tablicy, ale jesteśmy w stanie nadpisywać poszczególne jej elementy


// Łączenie dwóch tablic

const names1 = ['Sam', 'Dean', 'Castiel'];
const names2 = ['Jessica', 'Lisa'];
const family = names1 + names2;
const truefamily = names1.concat(names2); // ['Sam', 'Dean', 'Castiel', 'Jessica', 'Lisa']
const superfamily = [...names1, ...names2]; //łączenie za pomocą operatora spread

// Tablice wielowymiarowe - to takie, które zawierają wewnąrz siebie inne tablice i do elementu zagnieżdżonych tablic

const tictactoe = [
    ['', 'x', ''],
    ['', '', ''],
    ['', '', ''],
];

// Odwołanie się do konkretnego elementu wielowymiarowej tablicy

tictactoe[1][1] = 'o';
console.log(tictactoe); // [ ['', 'x', ''], ['', 'o', ''], ['', '', ''] ]










