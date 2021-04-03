import styled from 'styled-components';


export const ParaRemark = styled.p`
    font-size: 20px;
    font-family: sans-serif;
    font-weight: lighter;
    color: #262626;
    padding-left: 0;
    margin-left: 0;
`;

export const ParaAmount = styled.p`
    font-size: 20px;
    font-family: sans-serif;
    font-weight: lighter;
    color: #262626;


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

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: 20rem;
    margin: 2rem 3rem 2rem 3rem;
    border-radius: 10px;

    > h1 {
        display: flex;
        justify-content: center;
        align-items: center;
    }
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
    background: #dcdcdc;
`