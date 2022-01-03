import React from 'react';
import PropTypes from 'prop-types';
import { QuizResults } from './Style';
import { Subs } from '../../styles/Common';
import quiz_result from '../../assets/images/quiz_result.png';

const QuizResult = ({ close, duplicate }) => {
    return (
        <QuizResults>
            <div className={close ? "quiz-result-info type2" : "quiz-result-info"}>
                <Subs type2>
                    <h6>congratulation!</h6>
                    <h2>
                        축하합니다.<br/>
                        커피챗 퀴즈를 통과하셨어요!                    
                    </h2>
                </Subs>
                {duplicate && <p>이미 참여하신 고객입니다.</p>}
                {close &&
                    <p>
                        선착순 5,000명 마감되어서 아쉽지만<br/>
                        다음에 또 참여해주세요.
                    </p>
                }
                {close ||
                    <figure className={duplicate ? "type2" : ""}>
                        <img src={quiz_result} alt="" />
                    </figure>
                }
            </div>
            <div className="quiz-result-desc">
                <ul className="quiz-result-desc-list">
                    <li>
                        ID 1개 당 1회 참여 가능합니다.<br/>
                        (퀴즈를 중복으로 풀 수 있으나 최초 1회 참여만 인정합니다)
                    </li>
                    <li>2/3(목) 일괄 지급합니다.</li>
                    <li>휴대폰 번호가 올바르지 않을 경우, 지급되지 않을 수 있습니다.</li>
                    <li>기타 비정상적인 방법을 통해 금전적인 이득을 취하기 위해 이벤트에 참여한 것으로 판단될 경우, 지급되지 않을 수 있습니다.</li>
                </ul>
            </div>
        </QuizResults>
    );
};

QuizResult.propTypes = {
    close: PropTypes.bool,
    duplicate: PropTypes.bool,
};

export default QuizResult;