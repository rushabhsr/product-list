import React from 'react'
import Items from './Items';

const CategoryWiseData = (props) => {
    let productsData = props.allProducts;
    if (props.searchString !== "") {
        productsData = productsData.filter(productItem => productItem.name.toLowerCase().includes(props.searchString.toLowerCase()))
    }
    // console.log(productsData)
    const distinctCateg = [...new Set(productsData.map(uni => uni.category))];
    // console.log("Category:" + category);
    return (
        distinctCateg.map((category, index) =>
            <React.Fragment key={category + "" + index}>
                <tr><th colSpan={props.columns.length}>{category}</th></tr>
                <Items categoryData={productsData.filter(productItem => productItem.category === category)}
                    columns={props.columns}
                />
            </React.Fragment>
        )
    )
}

export default CategoryWiseData