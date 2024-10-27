import { styled } from 'styled-components';

export const Card = styled.li`

    background-color: var(--white);
    border-radius: 8px;
    width: 260px;
    user-select: none;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: start;
    transition: 0.5s;
   
    &:hover {
         border: 1px solid var(--blue400);
    }

     > img {
        width: 100%;
        border-top-left-radius: 8px;
         border-top-right-radius: 8px;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 20px;
        h2 {
            font-size: 16px;
            margin-bottom: 5px;
        }

        p {
            font-size: 14px;
            text-justify: auto;
            color: var(--gray200);
            margin-bottom: 10px;
            line-height: 17.7px;
        }

        small {
            width: 100%;
            font-size: 11px;
            display: flex;
            align-items: center;

            > svg {
                color: var(--blue400);
                margin-right: 5px;
            }
        }

        
    }
`;