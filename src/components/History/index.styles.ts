import styled from 'styled-components';

// export const Header = styled.header`
//     color: #323232;
//     font-weight: lighter;
//     font-size: 1.2rem;
//     font-family: sans-serif;
// `;

export const ParaRemark = styled.p`
    font-size: 20px;
    font-family: sans-serif;
    font-weight: lighter;
    color: grey;
`;

export const ParaAmount = styled.p`
    font-size: 20px;
    font-family: sans-serif;
    font-weight: lighter;
    color: gray;

`
export const ParaWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    margin-bottom: 1px;
    background: whitesmoke;
`

// export const Wrapper = styled.div`
//     margin: 5rem 0 5rem 0;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-evenly;
// `;

// export const HeaderParaWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// `
// export const Hr = styled.hr`
//     border: 0;
//     clear:both; 
//     width: 20vw;               
//     background-color:grey;
//     height: 1.5px;
// `
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: 20rem;
    margin-bottom: 3rem;
`

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    padding-bottom: 20px;
    background: white;
`