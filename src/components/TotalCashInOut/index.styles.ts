import styled from 'styled-components';

export const SignPara = styled.p`
    font-size: 2rem;
    font-weight: bold;
    color: green;
    background-color: lightgreen;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin: 5px;
    display: flex;
    justify-content: center;
`

export const SignParaMinus = styled(SignPara)`
    font-size: 2rem;
    color: red;
    background-color: #F08080;
`

export const Header = styled.header`
    color: #555555;
    font-family: Arial, Helvetica, sans-serif;
`

export const AmountPara = styled.p`
    font-size: 2rem;
    font-weight: 600;
    margin: 5px 0 0 5px;
`

export const HeaderAmountWrapper = styled.div`
    display: flex;
    flex-direction: column;

`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const BodyWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 3rem 15rem 1rem 15rem;
`
