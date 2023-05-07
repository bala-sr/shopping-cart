import React, { useEffect, useState } from 'react';
import "../App.css";

function Cart({ state, dispatch }) {
  console.log("State: ", state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(
      state.cart.reduce((acc, currentItem) => acc + (currentItem.qty * currentItem.price), 0)
      );
  }, [state.cart]);

  return (
    <div className="cart-container">
      <h3 className="heading">Cart</h3>
      {
        state.cart.length > 0
          ?
          <>
            {
            state.cart.map((item, index) => {
              return (
                <div className="cart-item" key={`item${item.id}`}>
                  <p className="item">{item.title}</p>
                  <div className="qty-container">
                    <button onClick={() => dispatch({
                      type: "DECREASE_QTY",
                      payload: {
                        id: item.id,
                        qty: item.qty - 1
                      }
                    })}>-</button>
                    <p>{item.qty}</p>
                    <button onClick={() => dispatch({
                      type: "INCREASE_QTY",
                      payload: {
                        id: item.id,
                        qty: item.qty + 1
                      }
                    })}>+</button>
                  </div>
                  <p>Rs.{item.price * item.qty}</p>
                </div>
              )
            })
            }
            <div className="total">
                <p>Total</p>
                <p>
                  Rs.{totalAmount}
                </p>
            </div>
          </>
          :
          <p className="cart-empty"><i>Cart is empty</i></p>
      }
    </div>
  )
}

export default Cart