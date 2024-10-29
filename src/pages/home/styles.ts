import { styled } from "styled-components";

export const Main = styled.main`
    display: flex;

    @media (max-width: 806px) {
        display: block;
        section {
             margin-left: 0 !important;
        }
    }

    > section {
        width: 100%;
        margin-left: 266px;

        > section {
            padding: 115px 30px 30px 30px;

            ul {
               display: grid;
                grid-template-columns: repeat(5, 1fr);
                gap: 20px;
                width: 100%;
                justify-content: start;
            }

            @media (max-width: 1429px) {
                ul {
                    grid-template-columns: repeat(3, 1fr);
                }
            }

             @media (max-width: 1196px) {
                ul {
                    grid-template-columns: repeat(2, 1fr);
                }
            }

            @media (max-width: 905px) {
                ul {
                    grid-template-columns: repeat(2, 1fr);
                }
            }

            @media (max-width: 513px) {
                ul {
                    grid-template-columns: repeat(1, 1fr);
                }
            }


                > div {
                display: flex;
                align-items: center;
                background-color: white;
                padding: 25px 20px;
                border-radius: 8px;
                margin-bottom: 20px;
                
                button {
                    background-color: var(--blue400);
                    color: var(--white);
                    margin-left: auto;
                    padding: 10px 12px;
                    border-radius: 4px;
                    font-weight: 400;

                    display: flex;
                    align-items: center;
                }

                svg {
                    margin-right: 10px;
                    color: var(--textColor);
                }

                section {
                    h1 {
                        color: var(--textColor);
                        font-size: 25px;
                        font-weight: 600;
                        margin-bottom: 5px;

                         @media (max-width: 374px) {
                            font-size: 20px;
                        }
                    }

                    p {
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 16.8px;
                        color: var(--blue400);
                    }
                
            }
         }
        }
    }
`;

export const ModalContainer = styled.section`
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (max-width: 514px) {
        
    }

     textarea {
        border-color: #dfdfdf;
        background-color: #fdfcfb;
        transition: border-color 0.2s ease-in-out;
        font-size: 16px;
        line-height: 22px;
        font-weight: normal;
        font-style: normal;
        height: 200px;
        padding: 10px 20px;

        border-width: 1px;
        border-style: solid;
        appearance: none;
        border-radius: 8px;
        width: 100%;
        resize: none;
        color: var(--textColor);
    }

    > section {
        display: flex;
        gap: 15px;

        div {
            width: 100%;
            height: 100%;
        }

        > input {
            width: 100%;


        @media (max-width: 514px) {
            background-color: red;
        }
        }
    }
`;