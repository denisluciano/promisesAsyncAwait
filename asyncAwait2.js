/* Exemplo mais completo */


/* Usando promises jeito tradicional  */
// getResultado(5)
// .then((result)=>{
//     if(result > 10){
//         console.log("o valor é maior que 10");
//         getResultado(3)
//         .then(result2 => {
//             if(result2 < 10){
//                 console.log("o valor é menor que 10");
//             }
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     }
// })
// .catch(err => {
//     console.log(err)
// })



/* Versão usando async await */
async function main(){
    try{
        if(await getResultado(5) > 10){
            console.log("o valor é maior que 10")
            if(await getResultado(3) < 10){
                console.log("o valor é menor que 10")
            }
        }
    } catch(err) {
        console.log(err)
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