function sleep(ms){
    return new Promise( (resolve, reject)=>{
        setTimeout(resolve, ms)
    })
}

async function process(){
    console.log('1 - Hello, This is aync test!')
    await sleep(3000);
    console.log('2 - this code start in 5minutes!')
}

process().then( ()=> {console.log('3 - async test is done')});


