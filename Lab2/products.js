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
        name: "apple",
        vegetarian: true,
        glutenFree: true,
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
var restrictions = {
    vegetarian: false,
    glutenFree: false,
    organic: false
}

function restrictProducts() {
    var product_list = [...this.products];

    // If any of the restrictions have been applied, we filter them out, otherwise we can keep the list as is
    if (restrictions.vegetarian || restrictions.glutenFree || restrictions.organic) {
        product_list = product_list.filter(function(prod) {
            return (!this.restrictions.vegetarian ? true : prod.vegetarian == this.restrictions.vegetarian) &&
                (!this.restrictions.glutenFree ? true : prod.glutenFree == this.restrictions.glutenFree) &&
                (!this.restrictions.organic ? true : prod.organic == this.restrictions.organic)
        });
    }

    // Sort by price
    product_list.sort(function(ch, ex) {
        if (ch.price < ex.price) {
            return -1;
        }
        if (ch.price > ex.price) {
            return 1;
        }
        return 0;
    });
    return product_list;
}



function getTotalPrice(chosenProducts) {
    totalPrice = 0;
    for (let i = 0; i < products.length; i += 1) {
        if (chosenProducts.indexOf(products[i].name) > -1) {
            totalPrice += products[i].price;
        }
    }
    return totalPrice;
}