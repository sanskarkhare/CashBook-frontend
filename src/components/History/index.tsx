import React, { useContext } from 'react'
import { Header, Para, Wrapper, HeaderParaWrapper, Hr } from './index.styles';
import { context } from '../../context/GlobalState';




const History: React.FC = () => {

    const { transactions } = useContext(context);

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
