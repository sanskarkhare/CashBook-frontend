import React from 'react'
import GlobalContext, { initialState } from './GlobalState';



const GlobalProvider: React.FC = ({ children }) => {
    return (
        
            <GlobalContext.Provider value={{transactions: initialState.transactions, error: initialState.error, loading: initialState.loading}}>
                {children}
            </GlobalContext.Provider>
        
    )
}

export default GlobalProvider;


