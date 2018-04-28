var faker = require("faker");

console.log("=============================");
console.log("\tWELCOME TO MY SHOP!!");
console.log("=============================");

for (var i = 1; i < 11; i++) {
    // var fakeProduct = faker.commerce.productName();
    // var fakePrice = faker.commerce.price();
    
    // console.log(i + ")\tProduct Name: " + fakeProduct + "\n"
    //         + "\tPrice: " + fakePrice + "\n")
    
    console.log(faker.fake(i + ")\tProduct Name: {{commerce.productName}}\n"
            + "\tPrice: ${{commerce.price}}\n"));
}