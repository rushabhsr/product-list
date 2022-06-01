import React from 'react'
import './Items.css'

const Items = (props) => {
    return (
        props.categoryData.map((item, index) =>
            <React.Fragment key={item + "" + index}>
                <tr className={!item.stocked ? "red-class" : ""}><td>{item.name}</td><td>{item.price}</td></tr>
            </React.Fragment>
        )
    )
}

export default Items