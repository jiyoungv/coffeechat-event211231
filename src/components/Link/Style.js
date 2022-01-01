import styled from 'styled-components';
import { clearFix } from '../../styles/Mixin';
import link_arrow from '../../assets/images/link_arrow.svg';
import link_bg1 from '../../assets/images/link_bg1.png';

export const Links = styled.section`
    padding: 62px 0 53px;
    background: #060606;

    .link-content {
        max-width: 335px;
        margin: 0 auto;
    }

    .link-list {
        ${clearFix};
        margin: -7.5px;
    }

    .link-item {
        float: left;
        position: relative;
        width: 160px;
        height: 180px;
        margin: 7.5px;
        padding: 38px 20px 0;
        border-radius: 20px;
        background: #F5F6F7 center/cover no-repeat;
        color: #C4C4C4;

        > a {
            color: white;
        }

        h6 {
            margin-bottom: 20px;
            font-size: 12px;
            font-weight: 700;
            line-height: 1;
            letter-spacing: 0.1em;
        }

        h5 {
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 0;

            &.type2 {
                letter-spacing: 0.1em;
            }

            &.type3 {
                padding-top: 12px;
            }
        }

        &.live {
            color: white;

            .link-item-arrow {
                background-color: #353AF6;
                box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
            }
        }
    }

    .link-item-arrow {
        position: absolute;
        right: 10px;
        bottom: 18px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #C4C4C4 url(${link_arrow}) center no-repeat;
        text-indent: -9999px;
    }

    .link-item1 {
        background-image: url(${link_bg1});
    }

    .link-item2 {
        // background-image: url(${link_bg1});
    }
    
    .link-item3 {
        // background-image: url(${link_bg1});
    }
    
    .link-item4 {
        // background-image: url(${link_bg1});
    }    
`;