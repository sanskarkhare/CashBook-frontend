import React, { createContext } from 'react';

type transactionsObject = { id: number, remark: string, amount: number };

const transactions: transactionsObject[] = [
    { "id": 0, "remark": "Beer", "amount": 200 },
    { "id": 1, "remark": "Pen", "amount": 20 }
] 

const initialState: any = {
    transactions
}

export const GlobalContext = createContext(initialState);
export const HelperContext = createContext<any>({});