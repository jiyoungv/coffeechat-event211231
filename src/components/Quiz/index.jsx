import React from 'react';
import { Quizs } from './Style';
import { Subs } from '../../styles/Common';
import QuizContent from '../QuizContent';

const Quiz = () => {
    return (
        <Quizs>
            <div className="quiz-inner">
                <Subs>
                    <h6><b>QUIZ</b></h6>
                    <h2><b>커피챗 퀴즈</b></h2>
                    <p>본 이벤트는 로그인 후 참여 가능합니다</p>
                </Subs>
                <QuizContent />
            </div>
        </Quizs>
    );
};

export default Quiz;