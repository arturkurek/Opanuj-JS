// Funkcja - fragment kodu, który możemy wykonywać wiele razy, wywołując go 

// Aby wykorzystać kod, który jest w funkcji musimy go WYWOŁAĆ

// Function declaration         *parametry - informacje, które przekazujemy do funkcji w postaci zmiennych 

function sayHelloTo(user) {
    return `Cześć ${user}!`;    //*return - określamy z jego pomocą, co dana funkcja ma zwracać - inaczej jaki jest wynik danej funkcji, jakie wartości ma zwracać
}

// Function expression
const result = sayHelloTo('Adam'); //*argumenty - wartości, które przypisujemy do parametrów w momencie wywołania 
console.log(result);    //Cześć Adam

//Funnkcja anonimowa to taka, która nie ma nazwy, więc nie mamy do niej dostępu po deklaracji funkcji, natomiast po przypisaniu do konkretnej zmiennej możemy ją wywołać posługując się nazwą tej zmiennej. Z funkcją anonimową mamy do czynienia w wyrażeniu funkcyjnym

// Hoisting - podnoszenie. Przy function declaration można wywołać daną funkcję przed jej faktycznym zadeklarowaniem, przy function expression jest to niemożliwe, bo nie możemy dostać się do zmiennej, która nie została jeszcze utworzona.