import React from 'react';
import { Heros } from './Style';
import hero_title from '../../assets/images/hero_title.png';

const Hero = () => {
    return (
        <Heros>
            <div className="hero-inner">
                <div className="hero-title">
                    <h2>LAUNCHING EVENT</h2>
                    <h1>
                        <figure>
                            <img src={hero_title} alt="인맥이 못하면 커피챗이 한다." />
                        </figure>
                    </h1>
                </div>
                <div className="hero-txt">
                    <h6>
                        커피챗은 국내 최초 1:1 익명 기반<br/>
                        커리어 대화 연결 플랫폼입니다.
                    </h6>
                    <p>
                        네트워크에만 의존했던 지난 날을 뛰어 넘어<br/>
                        누구나 원하는 정보와 경험에<br/>
                        조금 더 쉽게 더 자주 다가갈 수 있도록<br/>
                        커피챗만의 방식으로 사람과 대화를 연결합니다.<br/><br/>
                        새로운 대화로 경험을 나누는<br/>
                        여러분을 위해 이벤트를 준비했어요.<br/>
                        커피챗과 함께 지금 시작해보세요.                    
                    </p>
                </div>
            </div>
        </Heros>
    );
};

export default Hero;