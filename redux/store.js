import { createStore,applyMiddleware } from "redux";
// import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from "./rooReducer";
import AsyncStorage from '@react-native-async-storage/async-storage';


// const composeEnhancers = composeWithDevTools({})


const initialStore ={
    cartReducer: { 
        // cartItems: JSON.parse(localStorage.getItem('cartItems')) ?? []
        cartItems: AsyncStorage.getItem('cartItems') ?? []

    }
}

export const store = createStore(rootReducer, initialStore)