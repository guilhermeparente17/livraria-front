import styled from 'styled-components'

export const CreateBookContainer = styled.div`
    padding: 40px;
`;

export const CreateBookTitle = styled.h1`
    color: #fff;
    margin-bottom: 20px;
`;

export const CreateBookContent = styled.div`
    width: 100%;
    height: 700px;
    background-color: #fff;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CreateBookInsert = styled.div`
    width: ${(props) => props.width};
    height: 90%;
    /* background-color: #000; */
    margin: 0px 25px;
`;

export const CreateBookForm = styled.form`
    padding: 40px;
`;

export const CreateBookInputContent = styled.div`
    display: flex;
    flex-direction: ${(props) => props.direction || 'column'};
    margin-bottom: 50px;
    margin-right: ${(props) => `${props.margin}px` || ''};
`;

export const CreateBookLabel = styled.label`
    font-size: 25px;
    font-weight: 900;
`;

export const CreateBookInput = styled.input`
    width: 100%;
    height: 45px;
    padding: 5px;
    font-size: 25px;
    font-weight: 400;
    outline: none;
    border:none;
    border-bottom: 1px solid black;
`;

export const CreateBookTextArea = styled.textarea`
    font-size: 25px;
    outline: none;
    margin-top: 10px;
`;

export const CreateBookButtons = styled.div`

`;

export const CreateBookButton = styled.button`
    width: 200px;
    height: 50px;
    margin-right: 40px;
    border:0;
    border-radius: 25px;
    background-color: ${(props) => props.bgColor || ''};
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`;

export const CreateBookImg = styled.img`
    width: 100%;
    height: 100%;
    
`;
