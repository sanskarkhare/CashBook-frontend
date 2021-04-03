import styled from 'styled-components';

export const InBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: white;
    height: 10vh;
    width: 15vw;
    background-color: #3AB98C;
    border-radius: 10px;
    outline: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border: none;
    margin-right: 1rem;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
`
export const OutBtn = styled(InBtn)`
    background-color: #CB4544;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`
