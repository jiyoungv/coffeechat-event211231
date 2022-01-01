import React, { useState, useCallback } from 'react';
import { QuizChoices } from './Style';

const QuizChoice = ({ quizNumber, choiceNumber, text, setSelectNumber }) => {
    const [check, setCheck] = useState(false);
    const onChangeCheck = useCallback((number) => (e) => {
        setCheck(e.target.checked);
        setSelectNumber(number);
    }, [setSelectNumber]);

    return (
        <QuizChoices>
            <input 
                type="radio" 
                name={`quiz${quizNumber}-choice`} 
                id={`quiz${quizNumber}-choice${choiceNumber}`}
                checked={check} 
                onChange={onChangeCheck(choiceNumber)} 
            />
            <label htmlFor={`quiz${quizNumber}-choice${choiceNumber}`}>
                <i>{choiceNumber}</i>
                {text}
            </label>
        </QuizChoices>
    );
};

export default QuizChoice;