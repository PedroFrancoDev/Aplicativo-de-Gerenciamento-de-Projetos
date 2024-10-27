import { styled } from "styled-components"

export const HeaderStyle = styled.header`
            background-color: var(--white);
            border-bottom: 2px solid #eee;
            padding: 20px 30px;
            width: 100%;
            color: var(--textColor);
            position: fixed;

            display:  flex;
            align-items: center;
            justify-content: space-between;    
    > div {
        position: relative;
        width: 150px;
        display: flex;
        justify-content: end;
        margin-right: 266px;

        ul {
            position: absolute;
            background-color: var(--white);
            border-radius: 8px;
            border-top-right-radius: 0px;

            border: 1px solid $eee;
            box-shadow: 3px 3px 15px var(--black700);
            width: 100%;
            margin-top: 25px;
            z-index: 99;

            li {
                color: var(--red500);
                   padding: 10px 15px;
                   cursor: pointer;
                   text-align: center;

                   display: flex;
                   align-items: center;
                   
                   svg {
                    margin-right: 10px;
                   }
            }
        }
    }    
`;