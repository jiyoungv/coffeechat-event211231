import styled from 'styled-components';
import { fontBold } from '../../styles/Mixin';

export const Videos = styled.section`
    padding-top: 30px;
    background: #060606;

    .video-txt {
        text-align: center;

        h2 {
            margin-bottom: 20px;
            font-size: 20px;
            ${fontBold}
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

    .video-youtube {
        margin-top: 20px;
        position: relative;
        height: 0;
        padding-bottom: 56.25%;
        background: #2E2E2E;

        iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
`;