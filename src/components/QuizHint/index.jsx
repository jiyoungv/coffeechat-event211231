import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { QuizHints } from './Style';
import quiz_emoji1 from '../../assets/images/quiz_emoji1.png';
import quiz_emoji2 from '../../assets/images/quiz_emoji2.png';

const QuizHint = ({ hint, setHint }) => {
    const onClickHint = useCallback(() => {
        setHint(false);
    }, [setHint]);

    const emoji = useMemo(() => {
        if (hint.emojiType === 1) {
            return quiz_emoji1;
        } else if (hint.emojiType === 2) {
            return quiz_emoji2;
        }
    }, [hint.emojiType]);

    return (
        <QuizHints onClick={onClickHint}>
            <div className="quiz-hint-txt">
                <figure>
                    <img src={emoji} alt="" />
                </figure>
                <p>{parse(hint.message)}</p>
            </div>
        </QuizHints>
    );
};

QuizHint.propTypes = {
    hint: PropTypes.object,
    setHint: PropTypes.func,
};

export default QuizHint;