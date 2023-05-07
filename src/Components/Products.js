import React from 'react';
import "../App.css";

function Products({ state, dispatch }) {
  return (
    <div className="products-container">
      {
        state.products.length > 0 &&
        state.products.map((prod, index) => {
          return (
            <div key={`prod${prod.id}`} className="product">
              <img
              className="prod-thumbnail"
              src={prod.thumbnail} 
              alt={prod.description} 
              />
              <div className="prod-details">
                <p className="prod-title">{prod.title}</p>
                <p className="prod-price">Rs. {prod.price}</p>
              </div>
              {
                state.cart.some(cartProd => cartProd.id === prod.id)
                  ?
                  <button 
                  className="btn-remove"
                  onClick={() => dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: {
                      id: prod.id
                    }
                  })}
                  >
                    Remove from Cart
                  </button>
                  :
                  <button 
                  className="btn-add" 
                  onClick={() => dispatch({ payload: {
                    id: prod.id,
                    title: prod.title,
                    thumbnail: prod.thumbnail,
                    price: prod.price,
                    qty: 1
                  }, type: "ADD_TO_CART" })}
                  >
                    Add to Cart
                  </button>
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Products