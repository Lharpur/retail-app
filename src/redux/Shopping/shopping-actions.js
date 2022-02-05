import * as actionTypes from './shopping-types.js'

export const importProducts = (products) => {
  return {
    type: actionTypes.IMPORT_PRODUCTS,
    payload: products,
  }
}

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  }
}

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  }
}

export const adjustQty = (product, value) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: {
      id: product,
      qty: value,
    },
  }
}

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: {
      id: item,
    },
  }
}
