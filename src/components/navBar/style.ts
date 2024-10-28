import { styled } from "styled-components";

type ButtonProps = {
    $isActive: boolean,
}

type AsideProps = {
    $showMobileMenu: boolean,
}

export const Aside = styled.aside<AsideProps>`

   >section {
    background-color: var(--white);
    height: 100vh;
    width: 266px;
    padding: 23px 18px;
    overflow-y: auto;
    position: fixed;

   > small:first-child {
       display: none;
    }

    @media (max-width: 806px) {
        z-index: 888;
        > small:first-child {
            display: block;
            display: flex;
            justify-content: end;
        }
    }
   }

   @media (max-width: 806px) {
        width: 100%;
        background-color: var(--blasck200);
        height: 100vh;
        overflow-x: auto;
        position: fixed;
        z-index: 999;

        display: ${prop => prop.$showMobileMenu ? "block" : "none"};
    }

    section {
        margin-bottom: 33px;

    >div {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;

        color: var(--textColor);

        > div {
            width: 132px;
            height: 132px;
            border-radius: 50%;

            margin-bottom: 5.91px;
            background-color: var(--blue400);

            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--white);
            
            h1 {
                font-size: 32px;
                font-weight: normal;
                color: var(--white);
            }
        }

        strong {
            font-size: 21.7px;
            font-weight: 700;
            line-height: 23.64px;
        }

        span {
            font-size: 14.81px;
            font-weight: 400;
            line-height: 15.37px;
        }
    }
}

section {
    margin-bottom: 30px;

    h1 {
        color: var(--textColor);
        font-size: 18px;
        font-weight: 600;
        line-height: 17.73px;
        margin-bottom: 4px;
    }

    p {
        color: var(--gray200);
        font-size: 12px;
        font-weight: 400;
        line-height: 14.89px;
        margin-bottom: 10px;
    }
}
`;

export const Button = styled.button<ButtonProps>`
        width: 100%;
        height: 44px;
        border-radius: 6px;
        background: ${props => props.$isActive ? "var(--blue800)" : "transparent"};

        display: flex;
        justify-content: start;
        align-items: center;
        border: none;
        font-weight: 500;
        font-size: 13px;
        line-height: 15.73px;

        display: flex;
        align-items: center;

        text-align: start;
        color: ${props => props.$isActive ? "var(--blue400)" : "var(--gray200)"};


        >svg {
            margin: 0px 10px;
            font-size: 20px;
        }

        transition: 0.2s;

         &:hover {
            color: var(--blue400);
         }
`;