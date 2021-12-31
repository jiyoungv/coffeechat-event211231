import React from 'react';
import { Quizs } from './Style';
import { Subs } from '../../styles/Common';

const Quiz = () => {
    return (
        <Quizs>
            <Subs>
                <h6><b>QUIZ</b></h6>
                <h2><b>커피챗 퀴즈</b></h2>
                <p>본 이벤트는 로그인 후 참여 가능합니다</p>
            </Subs>
            <article>
                퀴즈퀴즈
            </article>
        </Quizs>
    );
};

export default Quiz;