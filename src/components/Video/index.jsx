import React from 'react';
import { Videos } from './Style';

const Video = () => {
    return (
        <Videos>
            <div className="video-txt">
                <h2>잠깐!</h2>
                <p>                    
                    커피챗 퀴즈 풀기 전,<br/>
                    커피챗의 새로운 영상을 확인해보세요.<br/> 
                    퀴즈에 대한 힌트가 숨겨져 있답니다. <i>😎</i>
                </p>
            </div>
            <div className="video-youtube">
                <iframe src="https://www.youtube.com/embed/kchsBKsumrE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="video-youtube">
                <iframe src="https://www.youtube.com/embed/wmfFr3fB-Og" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </Videos>
    );
};

export default Video;