import * as actionTypes from './shopping-types'

const INITIAL_STATE = {
  products: [],
  cart: [],
  currentItem: [],
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.IMPORT_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      }
    case actionTypes.ADD_TO_CART:
      const item = state.products.find(
        (product) => product.album_id === action.payload.id,
      )
      const inCart = state.cart.find((item) =>
        item.album_id === action.payload.id ? true : false,
      )
      return {
        //Ternary Operators
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.album_id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item,
            )
          : [...state.cart, { ...item, qty: 1 }],
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.album_id !== action.payload.id),
      }
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.album_id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item,
        ),
      }
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      }
    default:
      return state
  }
}

export default shopReducer
