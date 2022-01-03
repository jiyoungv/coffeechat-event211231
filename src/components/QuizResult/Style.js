import styled from 'styled-components';
import { colors } from '../../styles/Variable';
import quiz_bg from '../../assets/images/quiz_bg.png';

const { midnight500 } = colors;

export const QuizResults = styled.article`
    .quiz-result-info {
        padding: 30px 0 16px;
        background: #000;

        p {
            margin-top: 6px;
            text-align: center;
            font-size: 13px;
            color: rgba(255, 255, 255, 0.64);
        }
        
        figure {
            max-width: 248px;
            margin: 18px auto 0;
            
            &.type2 {
                margin-top: -8px;
                margin-bottom: -8px;
            }

            img {
                display: block;
            }
        }

        &.type2 {
            height: 285px;
            padding: 80px 0 0;
            background: #000 url(${quiz_bg}) center top/324px no-repeat;
        }
    }

    .quiz-result-desc {
        padding: 30px 0;
        background: #fafafa;

    }

    .quiz-result-desc-list {
        max-width: 375px;
        margin: 0 auto;
        padding: 0 24px;

        > li {
            position: relative;
            margin-bottom: 10px;
            padding-left: 12px;
            font-size: 12px;
            color: ${midnight500};

            &:last-child {
                margin-bottom: 0;
            }

            &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 7px;
                display: block;
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background: #737781;
            }
        }
    }
`;