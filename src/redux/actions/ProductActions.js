import { ActionTypes } from "../contants/Actions-type";

export const setProdects = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProdect = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
