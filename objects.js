// Obiekty to kolekcje nieuporządkowanych danych. Posiadają właściwości w postaci par: klucza oraz wartości

//Tworzenie obiektu
const myObj = {};
const myObj2 = new Object(); //z pomocą konstruktora

//Przykładowy obiekt:
const team = {
    name: 'Przeprogramowani', //właściwość
    members_count: 3,
    count: function() { //metoda
        return this.members_count;
    }
}

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



