import React, { useState } from 'react';
import { Quizs } from './Style';
import { Subs } from '../../styles/Common';
import quizData from '../../data/quizData';
import QuizContent from '../QuizContent';
import QuizHint from '../QuizHint';

const Quiz = () => {
    const [currentQuizNumber, setCurrentQuizNumber] = useState(1);
    const [hint, setHint] = useState(false);

    return (
        <Quizs>
            <div className="quiz-inner">
                <Subs>
                    <h6><b>QUIZ</b></h6>
                    <h2><b>커피챗 퀴즈</b></h2>
                    <p>본 이벤트는 로그인 후 참여 가능합니다</p>
                </Subs>
                <QuizContent 
                    quizNumber={currentQuizNumber} 
                    lastQuizNumber={quizData.length}
                    data={quizData[currentQuizNumber - 1]}
                    setCurrentQuizNumber={setCurrentQuizNumber}
                    setHint={setHint}
                />
            </div>
            {hint && <QuizHint hint={quizData[currentQuizNumber - 1].hint} />}
        </Quizs>
    );
};

export default Quiz;