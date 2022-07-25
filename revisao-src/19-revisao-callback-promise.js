function upload () {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            console.log("02 - UPLOAD Concluído")
            resolve()
        }, 2000)
    })
   
}

async function uploadDefoto () {
    console.log("01 - UPLOAD Iniciando")
    await upload()
    console.log("03 - Execução finalizada")
}

uploadDefoto()