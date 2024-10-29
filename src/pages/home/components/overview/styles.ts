import styled from 'styled-components';

export const Container = styled.section`
    section {
       height: 330px;
       margin-bottom: 60px;
    }

    @media (max-width: 722px) {
        section {
            margin-bottom: 24px;
            height: 100%;
        }
    }
`;
