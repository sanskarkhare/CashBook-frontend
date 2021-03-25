import React from 'react';
import { Header, SignPara, AmountPara, HeaderAmountWrapper, Wrapper, BodyWrapper, SignParaMinus } from './index.styles';


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
                    <hr />
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
