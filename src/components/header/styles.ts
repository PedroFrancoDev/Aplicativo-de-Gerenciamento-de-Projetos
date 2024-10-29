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
            
    @media (max-width: 806px) {
        > div {
            margin-right: 0 !important;
        }

        svg:first-child {
            display: block !important;
        }
    }

    h1 {
        font-size: 18px;
        display: flex;
        align-items: center;
        font-weight: 600;

        img {
            width: 45px;
        }

         @media (max-width: 374px) {
            font-size: 14px;
         }
    }
`;