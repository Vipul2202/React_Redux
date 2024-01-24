// import { type } from "os";
import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
// export const upstate =() =>{
// type: ActionTypes.upstate,
// payload: product,
// }

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
// export const vip = () => {
// return{
// type: ActionTypes.vip,
// // payload:pay,
// }
// }
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

//  export const upDate = () =>{
//   return {
//     type: ActionTypes.upDate,
//     // payload: pay,
//   };
// };
// export const todo = () =>{
//   return {
// type: ActionTypes.Todo,
//   };
// };

// export  const remove = () => {
//   return {
//     type: ActionTypes.Remove ,
//   }
// };
// // export const datafetch = () = {
// // //   return {
// // //     type: ActionTypes.datafetch,
// // //     payload:pay,
// // //   }
// // // }
