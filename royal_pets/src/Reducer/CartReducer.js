const CartReducer = (state, action)=>{
    if(action.type==="ADD_TO_CART"){
        let {curElm} = action.payload;

        let cartProduct;

        cartProduct = {
            id: curElm.id,
            image: curElm.image,
            price: curElm.price,
            tittle: curElm.tittle,
        }
        return{
            ...state,
            cart: [...state.cart, cartProduct],
        }
    }
    if(action.type === "REMOVE_ITEM"){
        let updateCart = state.cart.filter((curItem)=>curItem.id !== action.payload);
        return {
            ...state,
            cart: updateCart,
        }
    }
    return state;
}

export default CartReducer;