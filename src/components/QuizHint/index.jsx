import React, { useMemo } from 'react';
import parse from 'html-react-parser';
import { QuizHints } from './Style';
import quiz_emoji1 from '../../assets/images/quiz_emoji1.png';
import quiz_emoji2 from '../../assets/images/quiz_emoji2.png';

const QuizHint = ({ hint }) => {
    const emoji = useMemo(() => {
        if (hint.emojiType === 1) {
            return quiz_emoji1;
        } else if (hint.emojiType === 2) {
            return quiz_emoji2;
        }
    }, [hint.emojiType]);

    return (
        <QuizHints>
            <div className="quiz-hint-txt">
                <figure>
                    <img src={emoji} alt="" />
                </figure>
                <p>{parse(hint.message)}</p>
            </div>
        </QuizHints>
    );
};

export default QuizHint;