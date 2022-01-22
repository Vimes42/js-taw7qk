/* Čti od uživatele čísla tak dlouho , dokud nezadá 0 a vždy
vypiš NAAKUMULOVANÝ součet těchto čísel
Vstup : 2
Výstup : 2
Vstup : 4
Výstup : 6
Vstup : 11
Výstup : 17
Vstup : 0 */

let cislo1 = Number(prompt('Zadej číslo'))

for(i=cislo1;i>0;i=0){
  console.log(i)
}
let cislo2 = Number(prompt('Zadej další číslo'))

for(i=cislo2;i>0;i=0){
  console.log(i + cislo1)
}

let cislo3 = Number(prompt('Zadej další číslo'))

for(i=cislo3;i>0;i=0){
  console.log(i + cislo1 + cislo2)
}

let cislo4 = Number(prompt('Zadej další číslo'))

for(i=cislo4;i>0;i=0){
  console.log(i + cislo1 + cislo2 + cislo3)
}