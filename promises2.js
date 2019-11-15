/////// => NO PROMISES1 VIMOS O BÁSICO

/* 
Promises.all recebe um array de promisses recebe um array de promisses e 
só executa o then quando todas e as promisses forem executadas; ou ainda 
chega no catch se alguma delas derem erro
*/

let promisse1 = new Promise((resolve,reject) =>{
    
    setTimeout(()=>{
        a = 1 //se for 1 da resolve
        if(a == 1){
            resolve("passou-se 3 segundos e deu sucesso na promises1")
        }else{
            reject("deu ruim depois 3 segundos promises1 ")
        }
        
    }, 3000)
})

let promisse2 = new Promise((resolve,reject) =>{
    
    setTimeout(()=>{
        a = 1 //se for 1 da resolve
        if(a == 1){
            resolve("passou-se 2 segundos e deu sucesso na promises2")
        }else{
            reject("deu ruim depois 2 segundos promises2")
        }
        
    }, 2000)
})

Promise.all([promisse1,promisse2])
.then(([result1, result2]) =>{
    console.log("todas as promisses foram resolvidas")
    console.log(result1,result2)
})
.catch(err =>{
    console.log(err)
})