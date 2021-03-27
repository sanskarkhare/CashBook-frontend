import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { Header, Para, Wrapper, HeaderParaWrapper, Hr } from './index.styles';




const History: React.FC = () => {

    const { transactions } = useContext(GlobalContext);

    return (
        <>  
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
