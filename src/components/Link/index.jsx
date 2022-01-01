import React from 'react';
import { Links } from './Style';

const Link = () => {
    return (
        <Links>
            <article className="link-content">
                <ul className="link-list">
                    <li className="link-item link-item1 live">
                        <a href="/" title="퀴즈로 만나는 새로운 커리어 연걸, 커피챗">
                            <h6><b>EVENT 01</b></h6>
                            <h5><b>퀴즈로 만나는 <br/>새로운 커리어 연결, <br/>커피챗</b></h5>
                            <span className="link-item-arrow">화살표</span>
                        </a>
                    </li>
                    <li className="link-item link-item2">
                        <h6><b>EVENT 02</b></h6>
                        <h5 className="type2"><b>COMING SOON</b></h5>
                        <h5><b>1/24(월) Open</b></h5>
                        <span className="link-item-arrow">화살표</span>
                    </li>
                    <li className="link-item link-item3">
                        <h6><b>EVENT 03</b></h6>
                        <h5 className="type2"><b>COMING SOON</b></h5>
                        <h5><b>2/7(월) Open</b></h5>
                        <span className="link-item-arrow">화살표</span>
                    </li>
                    <li className="link-item link-item4">
                        <h6><b>SPECIAL</b></h6>
                        <h5 className="type2 type3"><b>COMING SOON</b></h5>
                        <span className="link-item-arrow">화살표</span>
                    </li>
                </ul>
            </article>
        </Links>
    );
};

export default Link;