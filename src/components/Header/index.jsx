import React from 'react';
import { Inners } from '../../styles/Common';
import { Headers } from './Style';
import img_cc_logotype_brand from '../../assets/images/img_cc_logotype_brand.svg';

function Header () {
    return (
        <Headers>
            <div className="header-area">
                <Inners>
                    <div className="header-logo">
                        <a href="https://www.coffeechat.kr/" rel="noreferrer" target="_blank">
                            <img src={img_cc_logotype_brand} alt="커피챗 로고" />
                        </a>
                    </div>
                </Inners>
            </div>
        </Headers>
    );
}

export default Header;