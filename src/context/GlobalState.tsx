import React, { useReducer, createContext } from 'react'
import axios from 'axios';
import { AppReducer } from './AppReducer';


export type MyState = {
    transactions: {id: number, amount: number, remark: string|null}[],
    error: string|null,
    loading: boolean,
}

export const initialState: MyState = {
    transactions: [],
    error: null,
    loading: true,
}

// const AppContext = createContext<{state: MyState; dispatch: React.Dispatch<any>}>({
//     state: initialState, dispatch: () => null
// });

const AppContext = createContext<any>(initialState)

export const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    async function getTransactions() {
        try {
            const res = await axios.get('http://localhost:5000/');

            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data,
            })
        }
        catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
    }


    return(
        <AppContext.Provider value={{transactions: state.transactions, 
                                     error: state.error,
                                     loading: state.loading, getTransactions}}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;


// export const GlobalProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(AppReducer, initialState)

//     async function getTransactions() {
//         try {
//             const res = await axios.get('https://fbp-backend.herokuapp.com/');

//             dispatch({
//                 type: 'GET_TRANSACTIONS',
//                 payload: res.data.data,
//             })
//         }
//         catch (err) {
//             dispatch({
//                 type: 'TRANSACTION_ERROR',
//                 payload: err.response.data.error
//             })
//         }
//     }

// }






