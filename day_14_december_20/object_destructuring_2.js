function createLaptop(brand, model, price, year, RAM, hd) {
    // do something
    console.log(brand, model, price, year, RAM, hd)
}
createLaptop('HP', 'ProBook', 50000, 2025, '16GB', '1TB');


/* function makeLaptop(laptopObj) {
    console.log(laptopObj.brand)
    console.log(laptopObj.model)
    console.log(laptopObj.price)
    console.log(laptopObj.year)
    console.log(laptopObj.RAM)
    console.log(laptopObj.hdd)
} */
function makeLaptop({brand, model, price, year, RAM, hdd}) {
    console.log(brand)
    console.log(model)
    console.log(price)
    console.log(year)
    console.log(RAM)
    console.log(hdd)
}
makeLaptop({
    brand: 'HP', model: 'ProBook', price: 50000, year: 2025, RAM: '16GB', hdd: '1TB'
})