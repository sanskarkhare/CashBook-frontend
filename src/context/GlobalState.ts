import { createContext, useReducer } from 'react';


export interface MyState {
    transactions: { id: number, remark: string, amount: number }[],
    error: string | null,
    loading: boolean
}


export const initialState: MyState = {
    transactions: [
        { "id": 0, "remark": "Beer", "amount": 200 },
        { "id": 1, "remark": "Pen", "amount": 20 }
    ],
    error: null,
    loading: true
}

// export type userState = typeof initialState;


const GlobalContext = createContext<MyState>(initialState);

export default GlobalContext;








