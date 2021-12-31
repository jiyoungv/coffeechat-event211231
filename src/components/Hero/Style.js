import styled from 'styled-components';
import { fontFamily } from '../../styles/Variable';
import hero_bg from '../../assets/images/hero_bg.png';

const { gilroy } = fontFamily;

export const Heros = styled.section`
    padding: 40px 0 45px;
    background: url(${hero_bg}) center/cover no-repeat;

    .hero-inner {
        max-width: 280px;
        margin: 0 auto;
    }

    .hero-title {
        margin-bottom: 65px;

        h2 {
            margin-bottom: 24px;
            font-family: ${gilroy};
            font-size: 14px;
            letter-spacing: 0.1em;
            color: #2332E6;
        }

        figure {
            max-width: 200px;
        }
    }

    .hero-txt {
        text-align: center;
        
        h6 {
            margin-bottom: 20px;
            color: white;
        }

        p {
            font-size: 14px;
            color: #EAEAEA;
        }
    }
`;