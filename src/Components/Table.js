import React from 'react'
import CategoryWiseData from './CategoryWiseData';
import './Table.css'
const Table = (props) => {
  // let productItems = props.productTableData.products.map((product) =>
  //   <tr>
  //     <td>{product.name}</td><td>{product.price}</td>
  //   </tr>
  // );
  // console.log(productItems);
  return (
    <table>
      <thead><tr>{props.productTableData.headers.map((header,index) => <th key={index}>{header}</th>)}</tr></thead>
      <tbody>
        <CategoryWiseData allProducts={props.productTableData.products} />
      </tbody>
    </table>
  )
}

export default Table