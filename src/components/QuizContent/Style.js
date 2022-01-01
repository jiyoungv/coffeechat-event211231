import styled from 'styled-components';
import { clearFix } from '../../styles/Mixin';

export const QuizContents = styled.article`
    margin: 30px 0;
    padding: 0 40px 30px;
    border-radius: 20px;
    background: #F5F7FA;
  
    .quiz-content-text {
        min-height: 175px;
        text-align: center;

        h2 {
            font-size: 18px;
            font-weight: 700;
            line-height: 1.4;
            letter-spacing: -0.03em;
            color: #2332E6;
        }

        h6 {
            font-size: 40px;
            line-height: 1.4;
            letter-spacing: 0.1em;
            color: #FF5CAE;
        }

        small {
            display: block;
            margin-top: 3px;
            font-size: 10px;
            color: rgba(0, 0, 0, 0.64);
        }
    }

    .quiz-content-line {
        display: inline-block;
        width: 30px;
        height: 2px;
        background: #353AF6;

        &.type2 {
            width: 49px;
        }
    }

    .quiz-form-choice {
        ${clearFix};

        > div {
            float: left;
            width: 50%;
            margin-top: 18px;
        
            &:nth-child(even) {
                padding-left: 38px;
            }

            &:nth-child(-n+2) {
                margin-top: 0;
            }
        }
    }

    .quiz-form-button {
        display: block;
        width: 100%;
        margin-top: 20px;
        padding: 10px;
        border-radius: 4px;
        text-align: center;
        font-weight: 700;
        background: linear-gradient(135deg, #353AF6 0%, #353AF6 100%);
        box-shadow: 0px 2px 16px rgba(108, 163, 245, 0.48);
        color: white;
    }
`;