import react, { useEffect, useReducer } from "react";
import './App.css';
import axios from "axios";
import { cartReducer } from "./reducers/cartReducer";
import Products from "./Components/Products";
import Cart from "./Components/Cart";

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: []
  });

  const fetchProducts = async () => {
    let productsList = await axios.get("https://dummyjson.com/products");
    // console.log(productsList.data.products);
    dispatch({
      type: "ADD_TO_PRODUCTS",
      payload: productsList.data.products
    });
  };

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <div className="main-container">
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
