import React, { useState, useCallback } from 'react';
import { QuizContents } from './Style';

const QuizContent = () => {
    const [check, setCheck] = useState(false);
    const onChangeCheck = useCallback((e) => {
        setCheck(e.target.checked);
    }, []);


    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
    }, []);

    return (
        <QuizContents>
            <div className="quiz-content-text">
                <h6>Q1.</h6>
                <h2>
                    ‘<span className="quiz-content-line"></span>’ 이 못하면 커피챗이 한다'에<br/>
                    들어갈 단어는? 
                </h2>
            </div>
            <form onSubmit={onSubmitForm}>
                <div>
                    <input type="checkbox" name="" checked={check} onChange={onChangeCheck} />
                    <label htmlFor=""></label>
                </div>
                <button type="submit" className="quiz-content-button"><b>확인</b></button>
            </form>
        </QuizContents>
    );
};

export default QuizContent;