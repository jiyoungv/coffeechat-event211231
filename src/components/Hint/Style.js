import styled from 'styled-components';

export const Hints = styled.section`
    padding-top: 30px;
    background: #060606;

    .hint-txt {
        text-align: center;

        h2 {
            margin-bottom: 20px;
            font-size: 20px;
            font-weight: 700;
            line-height: 1.4;
            letter-spacing: -0.03em;
            color: #FDFDFF;
        }

        p {
            font-size: 13px;
            color: rgba(255, 255, 255, 0.64);

            i {
                color: white;
            }
        }
    }

    .hint-youtube {
        margin-top: 20px;
        background: #2E2E2E;
    }
`;