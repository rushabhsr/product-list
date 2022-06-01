import React from 'react'
import './Input.css'
const Input = (props) => {
    return (
        <div className='input-div'>
            <input type={props.type} placeholder={props.placeholder} onChange={props.onChange} checked={props.isChecked} />
            {props.text && <span>{props.text}</span>}
        </div>
    )
}

export default Input