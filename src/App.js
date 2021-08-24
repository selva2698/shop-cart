import { createContext, useContext, useState } from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';
import './App.css';
const Counter = createContext(null);
function App() {
  const products = [{Name: "Fancy Product",price: "$40.00 - $80.00",quantity: 0},
                    {Name: "Special Item",price: " $18.00",quantity: 0},
                    {Name: "Sale Item",price: " $25.00",quantity: 0},
                    {Name: "Popular Item",price: "$40.00",quantity: 0},
                    {Name: "Sale Item",price: " $25.00",quantity: 0},
                    {Name: "Fancy Product",price: "$120.00 - $280.00",quantity: 0},
                    {Name: "Special Item",price: " $18.00",quantity: 0},
                    {Name: "Popular Item",price: "$40.00",quantity: 0},];
  const [count, setCount] = useState(0); 
  return (
    <>
        <h1 className="shopclass">Welcome to our Kart</h1>
      <div className="header">
        <button className="header-button" ><ShoppingCartIcon />
          <div className=" header-button-text">Cart</div>
          <div className="total-quantity">{count}</div> 
        </button>
      </div>
      <div className="container">
        {products.map(({ Name, price, quantity }) => (
          <Counter.Provider value={{ count, setCount }}>   
            <Product product={Name} price={price} quantity={quantity}/>
          </Counter.Provider>
        ))}
      </div>
      <div className="footer">Copyright &#169; Your Website 2021</div>
    </>
  );
}
function Product({ product, price, quantity }) {
  return (
    <div className="card">
      <div className="sizediv">450 x 300</div>
      <div className="content">
        <span className="sale">Sale</span>
        <h2>{product}</h2>
        <div className="rating"></div>
        <p className="price">{price}</p>
      </div><Cartbutton quantity={quantity}/></div>
  );
}
function Cartbutton({ quantity }) {
  const [additem, setAdd] = useState(0);
  const { count, setCount } = useContext(Counter);
  return (
    <div className="cartquantity" >
      <div className="changequantity"
        style={{ display: additem === 0 ? "none" : "block" }}>
        <button onClick={() => { setAdd(additem - 1); setCount(count - 1) }}>
          <RemoveShoppingCartIcon /></button>
        <span className="additem">{quantity = additem} </span>
        <button onClick={() => { setAdd(additem + 1); setCount(count + 1) }}>
          <AddShoppingCartIcon /></button><br />
          <button onClick = {()=>{ setAdd(0); setCount(count - additem)}}><DeleteIcon /></button>
      </div>
      <div className="zeroquantity"
        style={{ display: additem !== 0 ? "none" : "block" }}>
        <button className="add-to-cart" onClick={() => { setAdd(additem + 1); setCount(count + 1) }}>Add to cart</button>
      </div>

    </div>
  );
}
export default App;