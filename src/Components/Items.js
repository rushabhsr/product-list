import React from 'react'

const Items = (props) => {
    return (
        props.categoryData.map((item, index) =>
            <React.Fragment key={item + "" + index}>
                <tr><td>{item.name}</td><td>{item.price}</td></tr>
            </React.Fragment>
        )
    )
}

export default Items