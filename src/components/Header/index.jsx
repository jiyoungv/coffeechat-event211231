import React from 'react';
import { Inners } from '../../styles/Common';
import { Headers } from './Style';
import img_cc_logotype_brand from '../../assets/images/img_cc_logotype_brand.svg';

function Header () {
    return (
        <Headers>
            <Inners>
                <div className='header-logo'>
                    <a href="https://www.coffeechat.kr/" rel="noreferrer" target="_blank">
                        <img src={img_cc_logotype_brand} alt="커피챗 로고" />
                    </a>
                </div>
            </Inners>
        </Headers>
    );
}

export default Header;