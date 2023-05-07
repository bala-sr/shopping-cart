export const cartReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD_TO_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      return { ...state, cart: [ ...state.cart, action.payload ] };
    case "REMOVE_FROM_CART": 
      return { ...state, cart: state.cart.filter(p => p.id !== action.payload.id )};
    case "INCREASE_QTY":
      return { ...state, cart: state.cart.filter(p => p.id === action.payload.id ? p.qty = action.payload.qty : p.qty) };
    case "DECREASE_QTY":
    return { ...state, cart: state.cart.filter(p => p.id === action.payload.id ? p.qty = action.payload.qty : p.qty) };
    default:
      break;
  }
}