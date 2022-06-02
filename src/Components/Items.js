import React from 'react'
import './Items.css'
import ItemData from './ItemData'

const Items = (props) => {
    let columnsPresent = props.columns.map((header) => header.toLowerCase());
    return (
        props.categoryData.map((product, index) =>
            <tr key={"product" + index} className={!product.stocked ? "red-class" : ""}>
                <ItemData product={product} columnsPresent={columnsPresent} />
            </tr>
        )
    )
}

export default Items