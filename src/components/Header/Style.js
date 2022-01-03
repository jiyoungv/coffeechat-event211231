import styled from 'styled-components';

export const Headers = styled.header`
    z-index: 100;
    position: sticky;
    top: 0;

    .header-area {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        max-width: 414px;        
        height: 48px;
        background: #fff;        
    }

    .header-logo {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);

        img {
            display: block;
        }
    }
`;