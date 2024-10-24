import { styled } from "styled-components";

export const Main = styled.main`
    height: 100vh;
    display: flex;

    img {
       width:1200px;
    }

    section {
        padding: 30px;
        width: 100%;

        h1 {
            font-weight: 600;
            font-size: 27px;
        }

        form {
            width: 100%;
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
        }
    }
`;