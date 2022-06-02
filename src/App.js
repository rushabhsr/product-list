import { useState } from 'react';
import './App.css';
import Input from './Components/Input';
import Table from './Components/Table';
import productTableData from './ProductData.json';

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [searchString, setIsSearchString] = useState("");
  const handleChangeOnCheckBox = (isChecked) => {
    setIsChecked(!isChecked);
    console.log("Currently Checkbox Status" + isChecked)
    // console.log("Data: " + JSON.stringify(productTableData.products.filter(productItem => productItem.stocked)));
    // setCurrentTableData(productTableData.products.filter(productItem => productItem.stocked))
    // setCurrentTableData(productTableData);}
  };
  const handleSearch = (e) => {
    console.log("Search String: " + e.target.value)
    setIsSearchString(e.target.value);
  }

  return (
    <div className='main'>
      <h1>Product List</h1>
      <Input type={"text"} placeholder={"Search.."} onChange={handleSearch} />
      <Input type={"checkbox"} text={"Only Show Products in Stock"} isChecked={isChecked} onChange={() => handleChangeOnCheckBox(isChecked)} />
      <Table productTableData={productTableData} isChecked={isChecked} searchString={searchString} />
    </div>
  );
}
export default App;
