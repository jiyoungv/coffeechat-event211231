import styled from 'styled-components';
import { clearFix } from '../../styles/Mixin';

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

        > li {
            float: left;
            width: 160px;
            height: 180px;
            margin: 7.5px;
            border-radius: 20px;
            background: #F5F6F7;
        }
    }
`;