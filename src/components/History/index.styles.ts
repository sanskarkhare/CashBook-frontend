import styled from 'styled-components';

export const Header = styled.header`
    color: #323232;
    font-weight: lighter;
    font-size: 1.2rem;
    font-family: sans-serif;
`;
export const Para = styled.p`
    font-size: 1.6rem;
    font-family: sans-serif;
    font-weight: bold;
    color: #191919;
`;

export const Wrapper = styled.div`
    margin: 5rem 0 5rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const HeaderParaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Hr = styled.hr`
    border: 0;
    clear:both; 
    width: 20vw;               
    background-color:grey;
    height: 1.5px;
`