import styled from 'styled-components';
import { colors } from './Variable';
import { clearFix, fontBold } from './Mixin';

const { midnight400, midnight500, midnight600 } = colors;

export const Inners = styled.div`
    position: relative;
    height: 100%;
    margin: 0 24px;

    ${clearFix}
`;

export const Layouts = styled.div`
    min-width: 320px;
    max-width: 414px;
    margin: 0 auto;
`;

export const Subs = styled.div`
    text-align: center;

    h2 {
        margin-bottom: 10px;
        font-size: 20px;
        ${fontBold}
        line-height: 1.4;
        letter-spacing: -0.03em;
        color: ${midnight600};
        ${props => props.type2 && 'color: white'};
    }

    h6 {
        margin-bottom: 10px;
        font-size: 12px;
        ${fontBold}
        letter-spacing: 0.1em;
        color: #250CD0;
        ${props => props.type2 && 'color: #E467A6'};
    }

    p {
        font-size: 13px;
        color: ${midnight500};

        &.type2 {
            margin-bottom: 10px;
            color: ${midnight400};
        }
    }
`;