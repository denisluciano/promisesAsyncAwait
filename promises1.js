/**
 Promises é um objeto usado para processamento assíncrono.
 Um promise é a representação de um valor que pode estar disponíve
 agora, no futuro ou nunca.
 Uma promises tem alguns estados, que são eles 
 - pending: Aguardando uma resposta
 - fulfilled: Sucesso na operação, a promessa foi cumprida com sucesso
 - rejected: Houve um problema e a promessa foi rejeitada(falha)
 - settled: Já foi rejeitada ou realizada
 */

let promisse1 = new Promise((resolve,reject) =>{
    
    setTimeout(()=>{
        a = 2 //se for 1 da resolve
        if(a == 1){
            resolve("passou-se 2 segundos e deu sucesso na promisse1")
        }else{
            reject("deu ruim depois 2 segundos")
        }
        
    }, 2000)
})

setTimeout(()=>{
    console.log(promisse1)
    
}, 1000)

setTimeout(()=>{
    console.log(promisse1)
    
}, 3000)

promisse1
.then((result) => {
    console.log(result)
})
.catch(err =>{
    console.log(err)
})


/////// => ATÉ AQUI O BÁSICO DE PROMISES

/* Promises.all recebe um array de promisses recebe um array de promisses e 
só executa o then quando todas e as promisses forem executadas; ou ainda 
chega no catch se alguma delas derem erro
*/