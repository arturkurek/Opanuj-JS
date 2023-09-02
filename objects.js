// Obiekty to kolekcje nieuporządkowanych danych. Posiadają właściwości w postaci par: klucza oraz wartości
// Cały JavaScript zbudowany jest w oparciu o obiekty. Mamy możliwość dostępu zarówno do domyślnych obiektów jak i tworzenia własnych. Każdy obiekt podlega dziedziczeniu (np.   Pojazd to obiekt i Samochód to obiekt dziedziczący z niego)

//Tworzenie obiektu
const myObj = {};
const myObj2 = new Object(); //z pomocą konstruktora obiektów
// Twojerzenie z pomocą konstruktora - w następnych lekcjach

//Przykładowy obiekt:
const team = {
    name: 'Przeprogramowani', //właściwość
    members_count: 3,
    count: function() { //metoda
        return this.members_count;
    }
}

// W obiektach nie ma kolejności jak w tablicach, są nieuporządkowane

// Dodawanie właściwości
team.website = 'www.przeprogramowani.pl';
team['contact_email'] = 'przeprogramowani@gmail.com';
console.log(team);

// Odczytywanie właściwości:

console.log(team.name); // właściwości jest zmienną połączoną z obiektem
console.log(team['name']);
const property = 'name';
console.log(team[property]);

// Wywoływanie metod:
team.count();
team['count']();

// Usuwanie własciwości 
delete team.website;
console.log(team.website); //undefined

// Zagnieżdżanie właściwości
const user = {
    name: 'Przeprogramowani',
    address: {
        city: 'Kraków'
    }
}

user.address.city; // Kraków

//Metody obiektów

 Object.values(team); //wyrzuca wszystkie wartości
 Object.keys(team); //wyrzuca wszystkie klucze

 //iteorowanie po obiektach - wyniki te same co powyżej
 for (value of Object.values(team)) {
    console.log(value);
 }

 for (key of Object.keys(team)) {
    console.log(key); 
 }

 for (const [key, value] of Object.entries(team)) { //tutaj jest tzw. destrukturyzacja, o której będzie później
    console.log(value);
 }
const arr = Object.entries(team); //metoda entries przez destrukturyzację zamienia obiekt na tablicę, niedługo będzie metoda fromEntries, która zadziała odwrotnie

//Iterowanie po właściwościach (uwaga na właściwości obiektów nadrzędnych)

for (prop in team) {
    console.log(team[prop]); //odczytywanie wartości z właściwości
}

