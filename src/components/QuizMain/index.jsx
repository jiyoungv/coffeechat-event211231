import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { QuizMains } from './Style';
import QuizChoice from '../QuizChoice';

const QuizMain = ({ logIn, data, quizNumber, lastQuizNumber, applyLoad, setQuizNumber, setHint, setApplyLoad }) => {
    const [selectNumber, setSelectNumber] = useState(0);

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        const correct = selectNumber === data.answer;
        const last = quizNumber === lastQuizNumber;

        if (!logIn) { // 로그인 체크
            window.location.href='https://coffeechat.kr/signUp';
            return;
        }

        if (selectNumber === 0) { // 라디오 체크 여부
            alert('답을 체크해주세요!');
            return;
        }

        if (!correct) { // 정답 여부 체크
            setHint(true);
            return;
        }
        
        if (!last) { // 마지막 퀴즈인지 체크
            setQuizNumber(quizNumber + 1);
            setSelectNumber(0);
            return;
        }

        setApplyLoad(true); // 이벤트 응모 요청
    }, [logIn, selectNumber, data.answer, setHint, quizNumber, lastQuizNumber, setQuizNumber, setApplyLoad]);

    return (
        <QuizMains>
            <div className="quiz-main-text">
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
                                    choiceText={choice}
                                    selectNumber={selectNumber}
                                    setSelectNumber={setSelectNumber} 
                                />
                            </div>
                        )
                    })}
                </div>
                <button type="submit" className={!applyLoad ? "quiz-form-button" : "quiz-form-button loading"}>
                    {!applyLoad ? "확인" : "정답 확인 중이에요!"}
                </button>
            </form>
        </QuizMains>
    );
};

QuizMain.propTypes = {
    logIn: PropTypes.bool,
    data: PropTypes.object,
    quizNumber: PropTypes.number,
    lastQuizNumber: PropTypes.number,
    applyLoad: PropTypes.bool,
    setQuizNumber: PropTypes.func,
    setHint: PropTypes.func,
    setApplyLoad: PropTypes.func,
};

export default QuizMain;