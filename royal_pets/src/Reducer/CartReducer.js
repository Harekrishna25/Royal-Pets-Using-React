const CartReducer = (state, action)=>{
    if(action.type==="ADD_TO_CART"){
        let {curElm} = action.payload;

        let cartProduct;

        cartProduct = {
            image: curElm.image,
            price: curElm.price,
            tittle: curElm.tittle,
        }
        return{
            ...state,
            cart: [...state.cart, cartProduct],
        }
    }
    return state;
}

export default CartReducer;