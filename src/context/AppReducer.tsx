import React, { useReducer } from 'react';
import { initialState, MyState } from './GlobalState'

type MyAction = 
    | { type: 'GET_TRANSACTIONS' | 'TRANSACTION_ERROR' | 'ADD_TRANSACTIONS'; payload: any }



export const AppReducer =  (state: MyState , action: MyAction) => {
    switch(action.type){

        case 'GET_TRANSACTIONS' :
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }

        case 'TRANSACTION_ERROR': 
            return {
                ...state,
                error: action.payload
            }    
        
        case 'ADD_TRANSACTIONS':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }

        default: 
                return state;

    }
}