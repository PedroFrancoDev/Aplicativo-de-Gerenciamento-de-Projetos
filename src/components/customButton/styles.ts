import { styled } from "styled-components";

type Props = {
    $isLoading: boolean,
}


export const Button = styled.button<Props>`
    background: var(--blue400);
    padding: 14px 15px;
    color: var(--white);
    border-radius: 8px;
    margin-top: 18px;
    opacity: ${(props) => props.$isLoading ? "calc(90%)" : "calc(100%)"};
`;