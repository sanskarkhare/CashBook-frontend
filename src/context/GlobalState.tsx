import React, { useReducer, createContext } from 'react'
import axios from 'axios';
import { AppReducer } from './AppReducer';




export type MyState = {
    transactions: Array<{id: number, amount: number, remark: string|null}>,
    error: string|null,
    loading: boolean,
}

export const initialState: MyState = {
    transactions: [],
    error: null,
    loading: true,
}

type MyFunction = {
    getTransactions: () => Promise<void>,
    addTransactions: (transaction: any) => Promise<void>
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

    async function addTransactions(transaction: any) {

        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }

        try {
            const res = await axios.post('http://localhost:5000/', transaction, config )

            dispatch({
                type: 'ADD_TRANSACTIONS',
                payload: res.data.data
            })
        }
        catch(err) {
            dispatch({
                type: 'TRANSACTION_ERROR'  ,
                payload: err.response.data.error,
            })
        }
    }


    return(
        <AppContext.Provider value={{transactions: state.transactions, 
                                     error: state.error,
                                     loading: state.loading, 
                                     getTransactions,
                                     addTransactions
                                    }}
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






