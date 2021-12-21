const quotes = [
    {
        quote: "인생은 자전거를 타는 것과 같다. 균형을 잡으려면 움직여야 한다.",
        author: "알버트 아인슈타인",
    },
    {
        quote: "삶은 즐겁다. 죽음은 평화롭다. 골칫거리는 바로 그 중간과정이다.",
        author: "아이작 아시모프",
    },
    {
        quote: "젊었을 때 배움을 게을리 한 사람은 과거를 상실하며 미래도 없다.",
        author: "에우리피데스",
    },
    {
        quote: "인생에 필요한 것은 무지와 확신 뿐이다. 그러면 성공은 확실하다.",
        author: "마크 트웨인",
    },
    {
        quote: "성공이란 열정을 잃지 않고 실패를 거듭할 수 있는 능력이다.",
        author: "윈스턴 처칠",
    },
    {
        quote: "결국 삶이란 여러분이 되고자 했던 완벽한 인격체로 거듭나는 것입니다.",
        author: "오프라 윈프리",
    },
    {
        quote: "설명하지마라-친구라면 설명할 필요가 없고, 적이라면 어차피 당신을 믿으려 하지 않을테니까.",
        author: "엘버트 허버드",
    },
    {
        quote: "친구를 고르는 데는 천천히, 친구를 바꾸는 데는 더 천천히.",
        author: "벤자민 프랭클린",
    },
    {
        quote: "게으름은 피곤하기 전에 쉬는 습관일 뿐.",
        author: "쥘 르나르",
    },
    {
        quote: "현재가 과거와 다르길 바란다면 과거를 공부하라.",
        author: "바뤼흐 스피노자",
    },
    {
        quote: "게으름은 즐겁지만 괴로운 상태다. 우리는 행복해지기 위해서 무엇인가 하고 있어야 한다.",
        author: "마하트마 간디",
    },
    {
        quote: "도전은 인생을 흥미롭게 만들며, 도전의 극복이 인생을 의미있게 한다.",
        author: "조슈아 J. 마린",
    },
    {
        quote: "극히 조심한다는 방침이야말로 가장 위험한 것이다.",
        author: "자와할랄 네루",
    },
    {
        quote: "천재는 거대한 인내일 뿐이다.",
        author: "뷔퐁",
    },
]

const quote = document.querySelector("#quote");
const author = document.querySelector("#author");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `'${todaysQuote.quote}'`;
author.innerText = `${todaysQuote.author}`;