/* Čti od uživatele čísla tak dlouho , dokud nezadá 0 a vždy
vypiš NAAKUMULOVANÝ součet těchto čísel
Vstup : 2
Výstup : 2
Vstup : 4
Výstup : 6
Vstup : 11
Výstup : 17
Vstup : 0 */

let cislo = Number(prompt('Zadej číslo'))
let soucet = 0;

while (cislo !== 0){
  soucet = soucet + cislo;
  cislo = Number(prompt("Zadej."))
  
}

console.log("Celkový soucet:" + soucet);