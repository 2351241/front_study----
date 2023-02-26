const arr = [10, 20, 30, 40, 50]

// 일반 함수 형태
arr.map(function(item, index){
    console.log(index+"번 값", item);
})

// 화살표 함수 형태
arr.map((item, index)=>{
    console.log(index+"번 값", item);
})