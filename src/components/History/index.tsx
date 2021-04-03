import React, { useContext, useEffect } from 'react'
// import { Header, Para, Wrapper, HeaderParaWrapper, Hr } from './index.styles';
import AppContext from '../../context/GlobalState';
import { ParaRemark, ParaWrapper,ParaAmount, Wrapper, HeaderWrapper } from './index.styles';





const History: React.FC = () => {
       
    const { transactions, getTransactions, loading } = useContext(AppContext)

    useEffect(() => {
        getTransactions()
    }, [])

    return (
        <>

<Wrapper>
            <HeaderWrapper>
               <h2>Remark</h2>
               <h2>Amount</h2>
            </HeaderWrapper>
        {loading ? (<h1>Loading...</h1>) : (
        <>
            {transactions.map((transaction: any) => (
                <div key={transaction._id}> 

                    <ParaWrapper>
                        <ParaRemark>{transaction.remark}</ParaRemark>
                        <ParaAmount>{transaction.amount}</ParaAmount>
                    </ParaWrapper>
                    
                </div>
            ))}
        </>
        )}
</Wrapper>
        </>
    )
}

export default History
