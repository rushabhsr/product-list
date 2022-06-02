const productTableData = require('./ProductData.json')
// console.log(productTableData);
// productTableData.headers.map((header) => {
//     console.log(productTableData.products[header.toLowerCase()])
//     Object.fromEntries(Object.entries(obj).filter(([key]) => key.includes('Name')));
// })

let columnsPresent = productTableData.headers.map((header) => header.toLowerCase());
// productTableData.products.forEach((product) => {
//     // console.log("Keys: " + Object.keys(product))
//     const filtered = Object.keys(product)
//         .filter(key => columnsPresent.includes(key))
//         .reduce((obj, key) => {
//             obj[key] = product[key];
//             return obj;
//         }, {});
//     console.log(filtered);
//     // elements.push(filtered);
//     console.log(Object.values(filtered).map((item) => `<td>${item}</td>`));
// })
productTableData.products.forEach((product) => {
    // console.log("Keys: " + Object.keys(product))
    console.log("<tr>")
    const filtered = Object.keys(product)
        .filter(key => {
            if (columnsPresent.includes(key)) {
                console.log(`<td>${product[key]}</td>`)
            }
        })
    console.log("</tr>")
    // console.log(Object.values(filtered).map((item) => `<td>${item}</td>`));
})
// console.log(elements);

