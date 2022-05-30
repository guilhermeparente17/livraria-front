import styled from 'styled-components'

export const ButtonFormat = styled.button`
    width: 200px;
    height: 50px;
    border-radius: 25px;
    border: 0;
    cursor: pointer;
    background-color: #F79311;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    transition: 0.2s ease-in-out;

    &:hover {
        background-color: #E06104;
        transition: 0.2s ease-in-out
    }
`;