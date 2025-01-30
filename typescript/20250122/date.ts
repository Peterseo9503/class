(function printNow() {
    const today = new Date();

    const dayNames = ['(일요일)', '(월요일)', '(화요일)', '(수요일)', '(목요일)', '(금요일)', '(토요일)'];

    const day: string = dayNames[today.getDay()];
    const year: number = today.getFullYear();
    const month: number = today.getMonth()+1;
    const date: number = today.getDate();
    let hour: number = today.getHours();
    let minute: string | number = today.getMinutes();
    let second: string | number = today.getSeconds();

    const ampm = hour >= 12 ? 'PM' : 'AM';

    hour %= 12;
    hour = hour || 12; //이게 뭔고..?

    minute = minute < 10 ? '0' + String(minute) : minute;
    second = second < 10 ? '0' + String(second) : second;

    const now = `${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second} ${ampm}`;

    console.log(now);
    setTimeout(printNow, 1000);
}());