/* Exemplo3 */



/* Versão usando async await */
async function main(){
    try{
        if(await getResultado(5) > 10){
            console.log("o valor é maior que 10")
            if(await getResultado2(3) < 10){
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
function getResultado2(parametro){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            reject(parametro * 2.5);
        },2000)
    })
}