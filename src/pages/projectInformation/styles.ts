import { styled } from "styled-components";

export const GlobalSection = styled.section`
    padding: 30px;
    background-color: var(--white);
    height: 100vh;
    
    div {
        display: flex;
        flex-direction: column;
        width: 100%;

        img {
        width: 100%;
        border-radius: 8px;
        height: 500px;

        @media (max-width: 668px) {
            height: 300px;
        }
    }

        h2 {
            margin-top: 10px;
            font-size: 20px;
            margin-bottom: 5px;
        }

        p {
            color: var(--gray200);
            line-height: 17.7px;
            font-size: 15px;
        }
    }
`;