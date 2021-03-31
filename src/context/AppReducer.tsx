import React, { useReducer } from 'react';
import { initialState, MyState } from './GlobalState'

type MyAction = 
    | { type: 'GET_TRANSACTIONS' | 'TRANSACTION_ERROR'; payload: any }



export const AppReducer =  (state: any , action: { type: any; payload: any; }) => {
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

        default: 
                return state;

    }
}