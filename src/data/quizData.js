import shortid from 'shortid';

const quizData = [
    {
        id: shortid.generate(),
        title: `
            ‘<span className="quiz-content-line type2"></span> 이 못하면 커피챗이 한다’에<br/>
            들어갈 단어는?
        `,
        choice: ['검색', '인맥', '운명', '인스타그램'],
        answer: 2,
        hint: {
            emojiType: 1,
            message: `
                이벤트 페이지 맨 위 상단을<br/>
                유심히 보세요!
            `,            
        },
    },
    {
        id: shortid.generate(),
        title: `
            ‘국내 최초 1:1 익명 기반<br/>
            커리어 대화 연결 플랫폼의 이름은?
        `,
        choice: ['커피톡', '카피캣', '커피챗', '티타임'],
        answer: 3,
        hint: {
            emojiType: 1,
            message: `
                Coffeechat : )
            `,            
        },
    },
    {
        id: shortid.generate(),
        title: `
            커피챗 프리 런칭 편에 등장하는<br/>
            인물은 총 <span className="quiz-content-line"></span>명? 
        `,
        description: `
            (단, 강아지 제외 / 중복 등장 제외)
        `,
        choice: ['5명', '7명', '8명', '10명'],
        answer: 4,
        hint: {
            emojiType: 1,
            message: `
                영상을 자세히 보아야 알 수 있어요.
            `,            
        },
    },
    {
        id: shortid.generate(),
        title: `
            커피챗을 가장 많이한 파트너<br/>
            '키코'님은 총 <span className="quiz-content-line"></span>번?
        `,
        description: `
            (21년 12월 31일 기준)<br/>
            커피챗 파트너란? 정보와 경험을 나누어 주는 분들이에요!
        `,
        choice: ['8번', '50번', '70번', '175번'],
        answer: 4,
        hint: {
            emojiType: 2,
            message: `
                무려 100회 이상 커피챗 했어요!
            `,            
        },
    }, 
    {
        id: shortid.generate(),
        title: `
            전 세계 <span className="quiz-content-line"></span>개국 다양한 커리어의<br/>
            사람들과 커피챗 할 수 있어요
        `,
        choice: ['1개국', '10개국', '25개국', '60개국'],
        answer: 3,
        hint: {
            emojiType: 2,
            message: `
                20 이상 30 이하 랍니다.
            `,            
        },
    },        
];

export default quizData;