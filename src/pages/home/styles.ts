import { styled } from "styled-components";

export const Main = styled.main`
    display: flex;

    > section {
        width: 100%;
        margin-left: 266px;

        > section {
            padding: 90px 30px 30px 30px;

            ul {
                display: grid;
                 gap: 16px;
                grid-template-columns: repeat(5, 1fr); 
            }

             > div {
                display: flex;
                align-items: center;
                background-color: white;
                padding: 25px 20px;
                border-radius: 8px;
                margin-bottom: 20px;
                

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