import styled from 'styled-components';
import { fontFamily, colors } from './Variable';
import { clearFix } from './Mixin';

const { gilroy } = fontFamily;
const { midnight500, midnight600 } = colors;

export const Inners = styled.div`
    position: relative;
    height: 100%;
    margin: 0 24px;

    ${clearFix}
`;

export const Layouts = styled.div`
    min-width: 320px;
    max-width: 414px;
    margin: 0 auto 24px;
`;

export const Subs = styled.div`
    text-align: center;

    h2 {
        margin-bottom: 10px;
        font-size: 20px;
        letter-spacing: -0.03em;
        color: ${midnight600};
    }

    h6 {
        margin-bottom: 10px;
        font-family: ${gilroy};
        font-size: 12px;
        letter-spacing: 0.1em;
        color: #250CD0;
    }

    p {
        margin-bottom: 10px;
        font-size: 13px;
        color: ${midnight500};

        &:last-child {
            margin-bottom: 0;
        }
    }
`;