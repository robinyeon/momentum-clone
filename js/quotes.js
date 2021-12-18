const quotes = [
    {
        quote: "기다린다 월급날",
        author: "이영현",
    },
    {
        quote: "이 또한 지나가리라",
        author: "민아영",
    },
    {
        quote: "눕지 못하면 실외다",
        author: "구아영",
    },
    {
        quote: "발등에 불 떨어져서 정수리만 남았다",
        author: "강서진",
    },
    {
        quote: "어떻게든 일단 살아남자 그거면 됐다",
        author: "김주이",
    },
    {
        quote: "무언가를 간절히 원할 때 온 우주는 자네의 소망이 실현되도록 도와준다네",
        author: "김도이",
    },
    {
        quote: "우리는 잘못이 없어",
        author: "임예은",
    },
    {
        quote: "\"내 너 그럴 줄 알았다\" 알았으면 제발 미리 말 해줘라",
        author: "정효윤",
    },
    {
        quote: "끝날때까지 끝난게 아니다",
        author: "김윤수",
    },
    {
        quote: "우리 죽지말고 불행하게 오래오래 살아요",
        author: "권수완",
    },
    {
        quote: "연습만이 살 길",
        author: "강글솜",
    },
    {
        quote: "사람은 누구나 청개구리가 한 마리씩 살고있어",
        author: "문다혜",
    },
]

const quote = document.querySelector("#quote");
const author = document.querySelector("#author");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `'${todaysQuote.quote}'`;
author.innerText = `${todaysQuote.author}`;