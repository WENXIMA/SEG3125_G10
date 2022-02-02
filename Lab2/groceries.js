var products = [{
        name: "brocoli",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 1.99
    },
    {
        name: "bread",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        price: 2.35
    },
    {
        name: "salmon",
        vegetarian: false,
        glutenFree: true,
        organic: true,
        price: 10.00
    },
    {
        name: "banana",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 0.75
    },
    {
        name: "yogurt",
        vegetarian: true,
        glutenFree: false,
        organic: true,
        price: 1.00
    },
    {
        name: "beef",
        vegetarian: false,
        glutenFree: true,
        organic: true,
        price: 15.00
    },
    {
        name: "chicken-wings",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        price: 12.00
    },
    {
        name: "green-onions",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 2.75
    },
    {
        name: "rice",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 20.00
    },
    {
        name: "penautes",
        vegetarian: true,
        glutenFree: false,
        organic: true,
        price: 3.75
    }
];


function restrictListProducts(prods, restriction) {
    let product_names = [];
    for (let i = 0; i < prods.length; i += 1) {

        if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)) {
            product_names.push(prods[i].name);
        } else if ((restriction == "Vegetarian" && restriction == "Organic") && (prods[i].vegetarian == true) && (prods[i].organic == true)) {
            product_names.push(prods[i].name);
        }
        if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)) {
            product_names.push(prods[i].name);
        } else if (((restriction == "GlutenFree" && restriction == "Organic") && (prods[i].glutenFree == true) && (prods[i].organic == true))) {
            product_names.push(prods[i].name);
        }
        if ((restriction == "Organic") && (prods[i].organic == true)) {
            product_names.push(prods[i].name);
        }
        if ((restriction == "None")) {
            product_names.push(prods[i].name);
        } else if (((restriction == "Vegetarian" && restriction == "GlutenFree" && restriction == "Organic") && (prods[i].glutenFree == true) && (prods[i].organic == true))) {
            product_names.push(prods[i].name);
        }
    }
    product_names.sort(function(a, b) {
        return a - b
    });

    return product_names;


}


// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
    totalPrice = 0;
    for (let i = 0; i < products.length; i += 1) {
        if (chosenProducts.indexOf(products[i].name) > -1) {
            totalPrice += products[i].price;
        }
    }
    return totalPrice;
}