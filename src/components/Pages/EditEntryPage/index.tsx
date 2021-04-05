import React, { useContext } from 'react';
import { Wrapper, Label, LabelWrapper, Input, SaveBtn, DeleteBtn } from './index.styles';
import { MdDelete } from 'react-icons/md';
import AppContext from '../../../context/GlobalState';




const EditEntry:React.FC = () => {
    const { transactions } = useContext(AppContext);
    const { amount, remark } = transactions;

    return (
        <>

         <form >
             <Wrapper>
                 <h1>Update Entry</h1>
                 <DeleteBtn title="Delete History"><MdDelete size={50}/></DeleteBtn>
                <LabelWrapper>
                    <Label>Amount: </Label>
                    <Input value={amount} type="number" placeholder="Enter Amount..."></Input>
                </LabelWrapper>
                <LabelWrapper>
                    <Label>Remark: {remark}</Label>
                    <Input value={remark} type="text" placeholder="Enter remark..."></Input>
                </LabelWrapper>

               <SaveBtn type='submit'>Update</SaveBtn>
             </Wrapper>
          </form>

        </>
    )
}

export default EditEntry
