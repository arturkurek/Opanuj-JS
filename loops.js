// Wykonanie określonego kodu dowolną ilość razy 

// Zatrzymanie pętli lub kontynuacja - wyrażenia break i continue


//Pętla for

for (let i = 1; i <= 10; i++) {           // 3 wyrażenia: definiowanie, warunek, wykonanie
    console.log(i);                     // uważać na niebezpieczeństwo zawieszenia programu 
}

//Pętle zagnieżdżone                    // Pętla zagnieżdżona będzie wykonywać się w całość za każdym obrotem pętli w której się znajduje

for (let l = 0; l < 5; l++) {
    console.log(l); //0, 1, 2, 3, 4
    for (let m = 0; m < 5; m++) {
        console.log(m) // wykona się 25 razy 
    }
}

// Break / continue 

for (let i = 1; i <= 5; i++ ) {
    if (i == 3) break;          // przerwanie pętli 1, 2, 3 
    console.log(i);
}

for (let i = 1; i <= 5; i++ ) {
    if (i == 3) continue;       // kontynuowanie, inaczej przejście do wykonania kolejnego obrotu pętli w momencie i = 3    output: 1, 2, 4, 5
    console.log(i);           
}

// *Pamiętaj, że jeżeli zatrzymawsz pętlę, nie możesz jej od tak po prostu wznowić

// Pętla while (może nie wykonać się ani razu)

let j = 10;

while(j > 0) {
    console.log (j);
    j--;
}

// Pętla do while (zawsze wykona się przynajmniej raz)

let t = 0;
do {
    console.log(t);
    t--;
} while(t > 0);







