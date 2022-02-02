const porducts = [
    {name: 'leptop', price: 43000},
    {name: 'shirt', price: 500},
    {name: 'watch', price: 3680},
    {name: 'phone', price: 55000},
];

let totalPrice = 0;

for(const porduct of porducts){
    totalPrice = totalPrice + porduct.price;
}
// console.log(totalPrice);

const card = [
    {name: 'leptop', price: 43000, quantity: 1},
    {name: 'shirt', price: 500, quantity: 8},
    {name: 'watch', price: 3680, quantity: 3},
    {name: 'phone', price: 55000, quantity: 1},
];

let cardTotel = 0;
for(const product of card){
    console.log(product);
    const priceTotel = product.price * product.quantity;
    cardTotel = cardTotel + priceTotel;
}

console.log(cardTotel);