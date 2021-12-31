import React from 'react';
import { Hints } from './Style';

const Hint = () => {
    return (
        <Hints>
            <div className="hint-txt">
                <h2><b>잠깐!</b></h2>
                <p>                    
                    커피챗 퀴즈 풀기 전,<br/>
                    커피챗의 새로운 영상을 확인해보세요.<br/> 
                    퀴즈에 대한 힌트가 숨겨져 있답니다. <i>😎</i>
                </p>
            </div>
            <div className="hint-youtube">
                영상
            </div>
            <div className="hint-youtube">
                영상
            </div>
        </Hints>
    );
};

export default Hint;