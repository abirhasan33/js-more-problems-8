/*
cheirWord = 3cft/cheir
tebleWord = 10cft/teble
bedWord = 30cft /bed
*/

function wordCalator(cherQuantity, tabelQuantity, bedQuantity){
    const perCheir = 3;
    const perTeble = 10;
    const perBed = 30;
//================ cheir tebil khat dam =======================
    const cheirWoodQuantity = perCheir * cherQuantity;
    const tebelWoodQuantity = perTeble * tabelQuantity;
    const bedWoodQuantity = perBed * bedQuantity;

    const totalQuantity = cheirWoodQuantity + tebelWoodQuantity + bedWoodQuantity;
    return totalQuantity;
}
const firstOftion = wordCalator(1, 1, 1);
console.log(firstOftion);


function marktIsGo(kobutorPrice, murguPrice, hasPrice){
    const porKobotor = 150;
    const porMurgu = 300;
    const porHas = 400;

    const marctePiriceKobutor = porKobotor * kobutorPrice;
    const marctePiriceMurgu = porMurgu * murguPrice;
    const marctePiriceHas = porHas * hasPrice;

    const allMarctPrice = marctePiriceKobutor + marctePiriceMurgu + marctePiriceHas;
    return allMarctPrice;
}

const allPrice = marktIsGo(1, 1, 1);
console.log(allPrice);