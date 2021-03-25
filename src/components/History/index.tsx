import React from 'react'

 let transactions: { id: number, item: string, amount: number }[] = [
     { "id": 0, "item": "Beer", "amount": 200  }
 ];




const History: React.FC = () => {
    return (
        <>
            {transactions.map((transaction) => (
                <p key={transaction.id}>{transaction.item}</p>
            ))}
        </>
    )
}

export default History
