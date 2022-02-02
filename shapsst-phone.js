const phones = [
    {name: 'samsung s5', price: 45000, camara: 10, sotorag: 32},
    {name: 'walton mi1', price: 15000, camara: 8, sotorage: 16},
    {name: 'shomi 5i', price: 12000, camara: 16, sotorage: 12},
    {name: 'nokia n95', price: 8000, camara: 4, sotorage: 4},
    {name: 'vivo 5i', price: 14000, camara: 16, sotorage: 5},
    {name: 'opop a5', price: 27000, camara: 8, sotorage: 64}
];

let cheapest = phones[0];
for(const phone of phones){
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest);