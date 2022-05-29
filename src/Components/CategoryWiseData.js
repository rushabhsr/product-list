import React from 'react'
import Items from './Items';

const CategoryWiseData = (props) => {
    let productsData = props.allProducts;
    // console.log(productsData)
    const distinctCateg = [...new Set(productsData.map(uni => uni.category))];
    // console.log("Category:" + category);
    return (
        distinctCateg.map((category, index) =>
            <React.Fragment key={category + "" + index}>
                <tr><th colSpan={2}>{category}</th></tr>
                <Items categoryData={productsData.filter(productItem => productItem.category === category)} />
            </React.Fragment>
        )
    )
}

export default CategoryWiseData