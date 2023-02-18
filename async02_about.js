// 예제2

function work(){
    setTimeout(() => {
        const start = Date.now();
        for(let i = 0; i<1000000000; i++){}
        const end = Date.now();
        console.log(end-start+'ms');
    } , 0)//실제는 0이 아니라 4
}

console.log('처음 작업!');
work();
console.log('다음 작업!');