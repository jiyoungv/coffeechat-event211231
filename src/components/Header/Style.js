import styled from 'styled-components';

export const Headers = styled.header`
    z-index: 100;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 415px;
    height: 48px;
    background: #fff;
    transition: background 0.3s, box-shadow 0.3s;
    .header-logo {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
    }
`;