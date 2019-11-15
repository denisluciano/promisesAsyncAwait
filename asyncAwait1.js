
/*
Basicamente o async await é um açucar sintático para usarmos promises.
Abaixo que iremos fazer é dois códigos que fazem a mesma coisa, só pra entender
como funciona de fato
*/


/* Usando promises jeito tradicional  */
// getResultado(5).then((result)=>{
//     if(result > 10){
//         console.log("o valor é maior que 10");
//     }
// })

/* Versão usando async await */
async function main(){
    if(await getResultado(5) > 10){
        console.log("o valor é maior que 10")
    }
}
main();




function getResultado(parametro){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(parametro * 2.5);
        },2000)
    })
}