import React, { useContext, useEffect } from 'react'
import { Header, Para, Wrapper, HeaderParaWrapper, Hr } from './index.styles';
import AppContext from '../../context/GlobalState';





const History: React.FC = () => {
       
    const { transactions, getTransactions, loading } = useContext(AppContext)

    useEffect(() => {
        getTransactions()
    }, [])



    return (
        
        <>  {loading && <HeaderParaWrapper><h1>LOADING...</h1></HeaderParaWrapper>}
            <Wrapper>
                <HeaderParaWrapper>
                    <Header>Details</Header>
                    <Hr />
                    {transactions.map((transaction: any) => (
                        <Para key={transaction.id}>{transaction.remark}</Para>
                    ))}
                </HeaderParaWrapper>
                
                <HeaderParaWrapper>
                    <Header>Amount</Header>
                    <Hr />
                    {transactions.map((transaction: any) => (
                        <Para key={transaction.id}>{transaction.amount}</Para>
                    ))}
                </HeaderParaWrapper>
                
            </Wrapper>
        </>
    )
}

export default History
