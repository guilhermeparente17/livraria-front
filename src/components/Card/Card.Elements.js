import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 380px;
    height: 550px;
    margin: 15px;

    background-color: #fff;
    display: flex;
    flex-direction: column;
    color: black;
`;

export const CardImage = styled.img`
    width: 100%;
    height: 360px;
`;

export const CardTitle = styled.h2`
    
`;

export const CardDescription = styled.p`
    font-size: 14px;
`;

export const CardButtons = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CardContent = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CardButton = styled.button`
    width: 150px;
    height: 50px;
    background-color: ${(props) => props.bgColor};
    border: 0;
    border-radius: 20px;
    margin-top: 30px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
`;