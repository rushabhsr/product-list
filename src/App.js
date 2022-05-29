import './App.css';
import Input from './Components/Input';
import Table from './Components/Table';

function App() {
  const productTableData = {
    "headers": [
      "Name",
      "Price",
    ],
    "products": [
      {
        "category": "Sporting Goods",
        "price": "$49.99",
        "stocked": true,
        "name": "Football"
      },
      {
        "category": "Sporting Goods",
        "price": "$9.99",
        "stocked": true,
        "name": "Baseball"
      },
      {
        "category": "Sporting Goods",
        "price": "$29.99",
        "stocked": false,
        "name": "Basketball"
      },
      {
        "category": "Electronics",
        "price": "$99.99",
        "stocked": true,
        "name": "iPod Touch"
      },
      {
        "category": "Electronics",
        "price": "$399.99",
        "stocked": false,
        "name": "iPhone 5"
      },
      {
        "category": "Electronics",
        "price": "$199.99",
        "stocked": true,
        "name": "Nexus 7"
      }
    ]
  }

  return (
    <div className='main'>
      <h1>Product List</h1>
      <Input type={"text"} placeholder={"Search.."} />
      <Input type={"checkbox"} text={"Only Show Products in Stock"} />
      <Table productTableData={productTableData}/>
    </div>
  );
}
export default App;
