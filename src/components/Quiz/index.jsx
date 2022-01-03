import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Quizs } from './Style';
import { Subs } from '../../styles/Common';
import quizData from '../../data/quizData';
import QuizMain from '../QuizMain';
import QuizHint from '../QuizHint';
import QuizResult from '../QuizResult';
import quiz_emoji1 from '../../assets/images/quiz_emoji1.png';
import quiz_emoji2 from '../../assets/images/quiz_emoji2.png';
import quiz_result from '../../assets/images/quiz_result.png';

const Quiz = () => {    
    const [quizNumber, setQuizNumber] = useState(1);
    const [hint, setHint] = useState(false);
    const [userInfo, setUserInfo] = useState(null); // 유저 정보
    const [logIn, setLogIn] = useState(false); // 로그인 체크
    const [applyLoad, setApplyLoad] = useState(false); // 이벤트 응모 요청
    const [applyDone, setApplyDone] = useState(false); // 이벤트 응모 완료
    const [close, setClose] = useState(false); // 선착순 5000명 마감
    const [duplicate, setDuplicate] = useState(false); // 중복 참여

    useEffect(() => {
        // 유저 정보 API 요청
        // axios.get('http://localhost:3001/user', { withCredentials: true })
        //     .then((res) => {
        //         setUserInfo(res.data);
        //         setLogIn(true);
        //     })
        //     .catch((err) => {
        //         console.error(err);
        //     });
        
        // 임시
        setUserInfo({ id: 'user1' });
        setLogIn(true);
    }, []);

    useEffect(() => {
        if (userInfo && applyLoad) {
            // 이벤트 응모 API 요청
            // axios.post('http://localhost:3001/apply', userInfo, { withCredentials: true })
            //     .then((res) => {
            //         setClose(res.data.close);
            //         if (!res.data.close) { // 선착순 5000명 이하일 때만 중복 참여 확인
            //             setDuplicate(res.data.duplicate);
            //         }
            //         setApplyDone(true);
            //         setApplyLoad(false);
            //     })
            //     .catch((err) => {
            //         console.error(err);
            //         setApplyLoad(false);
            //     });

            // 임시
            setTimeout(() => {
                setClose(false);
                setDuplicate(false);
                setApplyDone(true);
                setApplyLoad(false);
            }, 3000);
        }
    }, [userInfo, applyLoad]);

    return (
        <Quizs>
            {!applyDone
                ? <article className="quiz-area">
                    <div className="quiz-area-inner">
                        <Subs>
                            <h6>QUIZ</h6>
                            <h2>커피챗 퀴즈</h2>
                            <p>본 이벤트는 로그인 후 참여 가능합니다</p>
                        </Subs>
                        <QuizMain
                            logIn={logIn}
                            data={quizData[quizNumber - 1]}
                            quizNumber={quizNumber} 
                            lastQuizNumber={quizData.length}
                            applyLoad={applyLoad}
                            setQuizNumber={setQuizNumber}
                            setHint={setHint}
                            setApplyLoad={setApplyLoad}
                        />
                    </div>
                </article>
                : <QuizResult close={close} duplicate={duplicate} />
            }
            {hint && <QuizHint hint={quizData[quizNumber - 1].hint} setHint={setHint} />}
            
            {/* 빠른 이미지 로딩을 위해 넣음 */}
            <img src={quiz_emoji1} alt="" className="hidden" />
            <img src={quiz_emoji2} alt="" className="hidden" />
            <img src={quiz_result} alt="" className="hidden" />
        </Quizs>
    );
};

export default Quiz;