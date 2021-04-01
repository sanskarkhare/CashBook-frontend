import React, { useState, useContext } from 'react'
import { Wrapper, Label, Input, LabelWrapper } from './index.styles';
import AppContext from '../../context/GlobalState';

const CashInPage = () => {

    const { addTransactions } = useContext(AppContext);

    const [amount, setAmount] = useState<number>(0);
    const [remark, setRemark] = useState<any>('');

   const onSubmit = (e : React.SyntheticEvent) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            amount,
            remark,
        }
        addTransactions(newTransaction)
        window.location.pathname='/';
   }

    return (
        <>

         <form onSubmit={onSubmit}>
             <Wrapper>
                <LabelWrapper>
                    <Label>Amount: </Label>
                    <Input value={amount} onChange={(e: any) => setAmount(e.target.value)} type="number" placeholder="Enter Amount..."></Input>
                </LabelWrapper>
                <LabelWrapper>
                    <Label>Remark: </Label>
                    <Input value={remark} type="text" onChange={(e: any) => setRemark(e.target.value)} placeholder="Enter remark..."></Input>
                </LabelWrapper>

               <button type='submit'>Save</button>
             </Wrapper>
             
         </form>
        </>
    )
}

export default CashInPage;
