/* Napište funkci , která vypíše součet , rozdíl , násobek a podíl
2 zadaných čísel , rozdíl zobrazte jako absolutni hodnotu */
// Math.abs()

function dveCisla (x,y){
  let soucet = x+y; 
  let rozdil = Math.abs(x-y);
  let soucin = x*y;
  let podil = x/y;

  console.log(soucet);
  console.log(rozdil);
  console.log(soucin)
  console.log(podil);
}

dveCisla (6,9);