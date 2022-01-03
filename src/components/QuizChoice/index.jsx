import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { QuizChoices } from './Style';

const QuizChoice = ({ quizNumber, choiceNumber, choiceText, selectNumber, setSelectNumber }) => {
    const [check, setCheck] = useState(false);
    const onChangeCheck = useCallback((number) => (e) => {
        setSelectNumber(number);
    }, [setSelectNumber]);

    useEffect(() => {
        if (choiceNumber === selectNumber) {
            setCheck(true);
        } else {
            setCheck(false);
        }
    }, [choiceNumber, selectNumber]);

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
                {choiceText}
            </label>
        </QuizChoices>
    );
};

QuizChoice.propTypes = {
    quizNumber: PropTypes.number,
    choiceNumber: PropTypes.number,
    choiceText: PropTypes.string,
    selectNumber: PropTypes.number,
    setSelectNumber: PropTypes.func,
};

export default QuizChoice;