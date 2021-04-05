import React, { useContext, useEffect } from 'react';
import AppContext from '../../context/GlobalState';
import { ParaRemark, ParaWrapper,ParaAmount, Wrapper, HeaderWrapper, Hr } from './index.styles';
import { useHistory } from 'react-router-dom';
import EditEntry from '../Pages/EditEntryPage';





const History: React.FC = ({children}) => {
    let history = useHistory();
       
    const { transactions, getTransactions, loading } = useContext(AppContext)

    useEffect(() => {
        getTransactions()
    }, [])

    return (
        <>

    <Wrapper>
            <HeaderWrapper>
               <h2>Remark</h2>
               <Hr />
               <h2>Amount</h2>
            </HeaderWrapper>
        {loading ? (<h1>Loading...</h1>) : (
        <>
            {transactions.map((transaction: any) => (
                
                
                
                <div key={transaction._id} className='HistoryDiv'> 

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

export default History;


