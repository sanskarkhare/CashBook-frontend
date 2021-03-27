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
    background-color: #f08080;
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
    flex: 50%;
    justify-content: center;
    align-items: center;
`

export const BodyWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem;
    margin: 3rem 15rem 1rem 15rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`
export const Hr = styled.hr`
    border: 0;
    clear:both; 
    width: 1.5px;               
    background-color:grey;
    height: 10vh;
    margin: auto;
`