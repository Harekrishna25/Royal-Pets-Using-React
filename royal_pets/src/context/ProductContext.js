import { createContext, useContext, useEffect, useReducer } from "react";
import ProductData from "../ProductData";
import reducer from '../Reducer/ProductReducer';

const AppContext = createContext();

const initialState = {
    isLoading: false,
    isError:false,
    products: [],
    isSingleLoading: false,
    singleProduct:{}
};

const AppProvider = ({children, products}) =>{
    const [state, dispatch] = useReducer(reducer, initialState)

    const getProducts =()=>{
        dispatch({type: "SET_LOADING"})
        try{
        const products = ProductData;
        dispatch({type: "SET_API_DATA", payload: products })
        } catch (error){
            dispatch({type: "API_ERROR"})
        }
    }

    // my 2nd API call

    const getSingleProduct = () =>{
        dispatch({type: "SET_SINGLE_LOADING"})
        try{
            const singleProduct = ProductData;
            dispatch({type: "SET_SINGLE_PRODUCT", payload: singleProduct })
        } catch (error){
            dispatch({type: "SET_SINGLE_ERROR"})
        }
    }

    useEffect(()=>{
        getProducts(products)
    },[]);
    
    return <AppContext.Provider value={{...state, getSingleProduct}}>
                {children}
            </AppContext.Provider> ;
}

// custom hooks:

const useProductContext = () =>{
    return useContext(AppContext);
}

export {AppProvider, AppContext,useProductContext};