const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 1초 기다리지 않고 '바로' 나오게 만들고
getClock();
// '1초마다' 초가 바뀌도록 interval 사용
setInterval(getClock, 1000);

