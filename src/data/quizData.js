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
        description: '설명설명',
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
            3
        `,
        description: '설명설명',
        choice: ['1', '2', '3', '4'],
        answer: 3,
        hint: {
            emojiType: 1,
            message: `
                hint
            `,            
        },
    },      
];

export default quizData;