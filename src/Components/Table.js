import React from 'react'
import './Table.css'
const Table = (props) => {
  let productItems = props.productTableData.products.map((product) =>
    <tr>
      <td>{product.name}</td><td>{product.price}</td><td>{product.category}</td>
    </tr>
  );
  console.log(productItems);
  return (
    <table>
      <thead><tr>{props.productTableData.headers.map((header) => <th>{header}</th>)}</tr></thead>
      <tbody>
        {productItems}
      </tbody>
    </table>
  )
}

export default Table