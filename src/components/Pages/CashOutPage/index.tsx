import React from 'react'
import { Wrapper, Label, Input, LabelWrapper } from './index.styles'

const CashOutPage = () => {

   const onSubmit = (e : any) => {
        e.preventDefault();
        window.location.pathname='/';
   }

    return (
        <>

         <form onSubmit={onSubmit}>
             
             <Wrapper>
                <LabelWrapper>
                    <Label>-Amount: </Label>
                    <Input type="number"></Input>
                </LabelWrapper>
                <LabelWrapper>
                    <Label>Remark: </Label>
                    <Input type="text"></Input>
                </LabelWrapper>

               <button type='submit'>Save</button>
             </Wrapper>
             
         </form>
        </>
    )
}

export default CashOutPage;
