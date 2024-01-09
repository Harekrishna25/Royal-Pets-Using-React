import { createContext, useContext, useReducer } from "react";
import { useFilterContext } from "./FilterProductContext";
import reducer from "../Reducer/CartReducer";

const CartContext = createContext();
const initialState ={
    cart: [],
    total_item: "",
    total_amount: "",
    shipping_fee: 100,
}

const CartProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducer, initialState);

    const AddCart = (curElm) =>{
        dispatch({type: "ADD_TO_CART", payload: {curElm}})
    };

    const removeItem = (id) =>{
        dispatch({type:"REMOVE_ITEM", payload: id})
    }
    return <CartContext.Provider value={{...state, AddCart, removeItem}}>
        {children}
    </CartContext.Provider>
}

const useCartContext =() =>{
    return useContext(CartContext);
}

export { useCartContext, CartProvider, CartContext}