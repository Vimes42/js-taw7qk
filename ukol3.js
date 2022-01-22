/* 1) Přijměte jméno jako vstup od uživatele, dale nechte zadat jeho vek a vypište na základě věku jednu ze dvou vět ve tvaru: 
a) Vaše jméno je Marian, je vám 30 let a tak máte právo řídit auto.b) Vaše jméno je Marian, je vám 14 let a tak musíte počkat ještě 4 let, než budete moci řídit auto.*/

let jmeno = prompt('Zadej své jméno')

let vek = Number(prompt('Zadej svůj věk'))

let plnoletost = (18-vek)

if(vek >= 18){
  console.log('Vaše jméno je ' + jmeno + ', je Vám ' + vek + ' a tak máte právo řídit auto.');
}else{
  console.log('Vaše jméno je ' + jmeno + ', je Vám ' + vek + ' a tak musíte počkat ještě ' + plnoletost + ' roky, než budete moci řídit auto.');
}