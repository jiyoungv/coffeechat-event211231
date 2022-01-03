import styled from 'styled-components';

export const QuizHints = styled.article`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);

    .quiz-hint-txt {
        padding-top: 175px;
        text-align: center;

        figure {
            max-width: 100px;
            margin: 0 auto 10px;
        }
        
        p {
            font-size: 18px; 
            font-weight: 700;
            line-height: 1.4;
            letter-spacing: -0.03em;
            color: white;
        }
    }
`;