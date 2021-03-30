import React from 'react';
import { Header, SignPara, AmountPara, HeaderAmountWrapper, Wrapper, BodyWrapper, SignParaMinus, Hr } from './index.styles';
import GlobalProvider from '../../context/GlobalState';


const TotalCash: React.FC = () => {
    return (
        <>
            <BodyWrapper>
                <Wrapper>
                    <SignPara>+</SignPara>
                    <HeaderAmountWrapper>
                        <Header>Total Cash In</Header>
                        <AmountPara>1000</AmountPara>
                    </HeaderAmountWrapper>
                </Wrapper>
                    <Hr />
                <Wrapper>
                    <SignParaMinus>-</SignParaMinus>
                    <HeaderAmountWrapper>
                        <Header>Total Cash Out</Header>
                        <AmountPara>1000</AmountPara>
                    </HeaderAmountWrapper>
                </Wrapper>
           
            </BodyWrapper>
            
        </>
    )
}

export default TotalCash;
