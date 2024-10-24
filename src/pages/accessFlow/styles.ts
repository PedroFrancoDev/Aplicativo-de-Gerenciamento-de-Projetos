import { styled } from "styled-components";

export const Main = styled.main`
    height: 100vh;
    display: flex;

    img {
       width: 75%;
    }

    section {
        padding: 30px;
        width: 25%;

        h1 {
            font-weight: 600;
            font-size: 27px;

            svg {
                margin-right: 20px;
                cursor: pointer;
                color: var(--blue400);
            }
        }

        form {
            height: 100%;

            display: block;
            display: flex;
            justify-content: center;
            flex-direction: column;

            .goToRegister {
               background: var(--white);
                padding: 18px 15px;
                border-radius: 8px;
                margin-top: 18px;
                border: 0.5px solid var(--blue400);
            }

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