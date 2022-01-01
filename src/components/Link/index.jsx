import React from 'react';
import { Links } from './Style';

const Link = () => {
    return (
        <Links>
            <article className="link-content">
                <ul className="link-list">
                    <li className="link-item link-item1 live">
                        <a href="/" title="퀴즈로 만나는 새로운 커리어 연걸, 커피챗">
                            <h6>EVENT 01</h6>
                            <h5>퀴즈로 만나는 <br/>새로운 커리어 연결, <br/>커피챗</h5>
                            <span className="link-item-arrow">화살표</span>
                        </a>
                    </li>
                    <li className="link-item link-item2">
                        <h6>EVENT 02</h6>
                        <h5 className="type2">COMING SOON</h5>
                        <h5>1/24(월) Open</h5>
                        <span className="link-item-arrow">화살표</span>
                    </li>
                    <li className="link-item link-item3">
                        <h6>EVENT 03</h6>
                        <h5 className="type2">COMING SOON</h5>
                        <h5>2/7(월) Open</h5>
                        <span className="link-item-arrow">화살표</span>
                    </li>
                    <li className="link-item link-item4">
                        <h6>SPECIAL</h6>
                        <h5 className="type2 type3">COMING SOON</h5>
                        <span className="link-item-arrow">화살표</span>
                    </li>
                </ul>
            </article>
        </Links>
    );
};

export default Link;