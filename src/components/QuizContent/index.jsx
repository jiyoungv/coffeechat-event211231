import React, { useState, useCallback } from 'react';
import parse from 'html-react-parser';
import { QuizContents } from './Style';
import QuizChoice from '../QuizChoice';

const QuizContent = ({ quizNumber, lastQuizNumber, data, setCurrentQuizNumber, setHint }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [selectNumber, setSelectNumber] = useState(0);

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();

        if (isLoggedIn) { // 1. 로그인 Y
            console.log('로그인 Y')
            if (selectNumber === data.answer) { // 2. 정답 Y
                console.log('정답 Y')
                if (quizNumber === lastQuizNumber) { // 3. 마지막 문제 Y
                    console.log('마지막 문제 Y')
                    // if (true) { // 4. 선착순 5000명 안 Y
                    //     if (true) { // 5. 최초 참여 Y
                    //         // 1회 참여 결과
                    //     } else { // 5. 최초 참여 N
                    //         // 중복 참여 결과
                    //     }
                    // } else { // 4. 선착순 5000명 안 N
                    //     // 5000명 초과 결과
                    // }
                } else { // 3. 마지막 문제 N
                    console.log('마지막 문제 N')
                    setCurrentQuizNumber(quizNumber + 1);
                }
            } else { // 2. 정답 N
                console.log('정답 N')
                setHint(true);
            }
        } else { // 1. 로그인 N
            console.log('로그인 N')
            window.location.href='https://coffeechat.kr/signUp';
        }
    }, [isLoggedIn, selectNumber, data.answer, quizNumber, lastQuizNumber, setCurrentQuizNumber, setHint]);

    return (
        <QuizContents>
            <div className="quiz-content-text">
                <h6>{`Q${quizNumber}.`}</h6>
                <h2>{parse(data.title)}</h2>
                {data.description &&
                    <small>{parse(data.description)}</small>
                }
            </div>
            <form className="quiz-form" onSubmit={onSubmitForm}>
                <div className="quiz-form-choice">
                    {data.choice.map((choice, choiceNumber) => {
                        return (
                            <div key={choice + choiceNumber}>
                                <QuizChoice 
                                    quizNumber={quizNumber} 
                                    choiceNumber={choiceNumber + 1} 
                                    text={choice} 
                                    setSelectNumber={setSelectNumber} 
                                />
                            </div>
                        )
                    })}
                </div>
                <button type="submit" className="quiz-form-button">확인</button>
            </form>
        </QuizContents>
    );
};

export default QuizContent;