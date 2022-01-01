import React from 'react';
import { Infos } from './Style';
import { Subs } from '../../styles/Common';
import info_coupon from '../../assets/images/info_coupon.png';

const Info = () => {
    return (
        <Infos>
            <Subs>
                <h6>EVENT</h6>
                <h2>커피챗 캠페인 런칭 기념 퀴즈 이벤트</h2>
                <p><b>1/10(월) - 1/31(월)</b></p>
                <p>
                    커피챗을 알아보는 퀴즈를 맞혀보세요.<br/>
                    퀴즈를 다 맞혔다면 네이버페이 1,000 포인트도 드려요.<br/>
                    (선착순 5,000명)
                </p>
            </Subs>
            <figure className="info-img">
                <img src={info_coupon} alt="" />
            </figure>
        </Infos>
    );
};

export default Info;