// let CategoryWiseData = [
//     {
//         Category1: [
//             { Items1 },
//             { Items2 }
//         ]
//     },
//     {
//         Category2: [
//             { Items1 },
//             { Items2 }
//         ]
//     }
// ]
let productsData = [
    {
        "category": "Sporing Goods",
        "price": "$49.99",
        "stocked": true,
        "name": "Football"
    },
    {
        "category": "Sporting Goods",
        "price": "$9.99",
        "stocked": true,
        "name": "Baseball"
    },
    {
        "category": "Sporting Goods",
        "price": "$29.99",
        "stocked": false,
        "name": "Basketball"
    },
    {
        "category": "Electronics",
        "price": "$99.99",
        "stocked": true,
        "name": "iPod Touch"
    },
    {
        "category": "Electronics",
        "price": "$399.99",
        "stocked": false,
        "name": "iPhone 5"
    },
    {
        "category": "Electronics",
        "price": "$199.99",
        "stocked": true,
        "name": "Nexus 7"
    }
]

const distinctCateg = [...new Set(productsData.map(uni => uni.category))];
console.log(distinctCateg);
let finalData={};
distinctCateg.map((category) => {
    let tempItems = productsData.filter(productItem => productItem.category === category);
    console.log(tempItems);
    finalData[category] = tempItems;
});
console.log(finalData);
