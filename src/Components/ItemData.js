import React from 'react'

const ItemData = (props) => {
    console.log(props.product)
    console.log(props.columnsPresent)
    return (
        props.columnsPresent.map((key) =>
            <td> {props.product[key].toString()}</td>
        )
    )
}

export default ItemData