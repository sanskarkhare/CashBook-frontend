import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    width: 100vw;

   > button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        color: white;
        height: 10vh;
        width: 15vw;
        background-color: #6A5ACD;
        border-radius: 5%;
        outline: none;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        border: none;
        margin-right: 1rem;
        cursor: pointer;
        transition: all .3s ease-in-out;
        &:hover {
            transform: scale(1.1);
        }
    }
`

export const LabelWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`
    color: #6a5acd;
`

export const Input = styled.input`
    width: 15vw;
    height: 5vh;
    outline: none;
    border: 2px solid #cccccc;
    font-size: 1.2rem;
   
`
export const SaveBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: white;
    height: 10vh;
    width: 15vw;
    background-color: #6A5ACD;
    border-radius: 5%;
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
