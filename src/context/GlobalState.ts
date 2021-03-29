import { createContext } from 'react';

// type transactionsObject = { id: number, remark: string, amount: number };

const transactions: { id: number, remark: string, amount: number }[] = [
    { "id": 0, "remark": "Beer", "amount": 200 },
    { "id": 1, "remark": "Pen", "amount": 20 }
] 



export const initialState = {
    transactions,
    error: null,
    loading: true
}

export type userState = typeof initialState;


export const context = createContext<typeof initialState>(initialState);
// export const HelperContext = createContext<any>({});

