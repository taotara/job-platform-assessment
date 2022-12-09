import styled from 'styled-components';


export const Wrapper = styled.header`
    background-color: var(--mainBlue);
    width: 100%;
`;

export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;

    @media screen and (min-width: 1024px) {
        width: 80%;
    }
`;

export const Logo = styled.img`
    width: 100px;
    padding: 20px 0;
`;