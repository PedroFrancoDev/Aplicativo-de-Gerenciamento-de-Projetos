import { styled } from "styled-components";

export const Main = styled.main`
    height: 100vh;
    display: flex;

    img {
       width: 100%&;
    }

    section {
        padding: 30px;
        width: 500px;

        h1 {
            font-weight: 600;
            font-size: 27px;
        }

        form {
            height: 100%;

            display: block;
            display: flex;
            justify-content: center;
            flex-direction: column;

            h2 {
                color: var(--blue400);
                font-size: 30px;
                line-height: 38px;
                font-weight: 600;
                margin-bottom: 50px;

                span {
                    font-weight: normal;
                }
            }

            small {
                color: var(--blue400);
                font-size: 16px;
                margin-top: 10px;
                text-align: end;
                cursor: pointer;
            }

            small:hover {
                opacity: calc(90%);
            }
        }
    }
`;