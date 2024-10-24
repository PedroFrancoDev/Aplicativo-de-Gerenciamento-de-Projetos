import { styled } from "styled-components";

export const InputSection = styled.div`
padding: 0px;
display: flex;
flex-direction: column;
gap: 10px;
margin-bottom: 10px;

align-items: start;
    label {
        font-size: 17px;
    }

    input {
        width: 100%;
        padding: 18px 15px;
        border-radius: 8px;
        border: 2px solid #eee;

      font-size: 15px;
    }
`;