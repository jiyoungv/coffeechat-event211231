import styled from 'styled-components';
import hero_bg from '../../assets/images/hero_bg.png';

export const Heros = styled.section`
    padding: 40px 0 45px;
    background: url(${hero_bg}) center/cover no-repeat;

    .hero-inner {
        max-width: 280px;
        margin: 0 auto;
    }

    .hero-title {
        margin-bottom: 75px;

        h2 {
            margin-bottom: 28px;
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 0.1em;
            color: #2332E6;
        }

        figure {
            max-width: 200px;

            img {
                display: block;
            }
        }
    }

    .hero-txt {
        text-align: center;
        
        h6 {
            margin-bottom: 20px;
            font-weight: 700;
            color: white;
        }

        p {
            font-size: 14px;
            color: #EAEAEA;
        }
    }
`;