import { styled } from "styled-components";

export const Main = styled.main`
    height: 100vh;
    display: flex;

    @media (max-width: 728px) {
        overflow-y: hidden;
        overflow-x: hidden;
     }

    img {
       width: 75%;
    }

    @media (max-width: 1287px) {
        img {
           flex: 1;
        }
        
        section {
          width: 50%;
        }
    }

    @media (max-width: 1020px) {
        img {
           display: none;
        }

       display: flex;
       justify-content: center;
    }


    @media (max-width: 1020px) and (min-width: 589px) {
        section {
            margin-left: 110px;
            margin-right: 110px;
        }
    }


    section {
        padding: 30px 25px 0px 25px;
        width: 500px;

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
            display: block;
            display: flex;
            justify-content: center;
            flex-direction: column;
            height: 90vh;

            .goToRegister {
                background: var(--white);
                padding: 14px 15px;
                border-radius: 8px;
                margin-top: 18px;
                border: 0.5px solid var(--blue400);
            }

            > span {
                color: var(--red500);
                font-size: 15px;
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