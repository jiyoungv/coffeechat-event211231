import styled from 'styled-components';
import { hidden } from '../../styles/Mixin';
import { colors } from '../../styles/Variable';

const { midnight500 } = colors;

export const QuizChoices = styled.div`
    display: flex;
    align-items: center;

    input {
        ${hidden}

        &:checked + label {
            i {
                border-color: #353AF6;
                background: #353AF6;
                color: #fff;
            }
        }
    }

    label {
        font-size: 13px;
        font-weight: 700;
        color: ${midnight500};
        cursor: pointer;

        i {
            display: inline-block;
            width: 22px;
            height: 22px;
            line-height: 22px;
            margin-right: 8px;
            border: 1px solid #C4C4C4;
            border-radius: 50%;
            text-align: center;
            color: #737781;
        }
    }
`;