function contarvogais(texto){
    const vogais ='aeiou'
    let total = 0
    texto = texto.toLowerCase()
    const VogaisMapeadas = [...texto].reduce((acc, char)=>{
        if(vogais.includes(char)){
            acc[char] = (acc[char]??0)+1
            total ++
            return acc
    
        }else{
            return acc
        }

    },{})
    return{
    total:total, vogais:VogaisMapeadas
    }
}

console.log(contarvogais("eu sou muito guis"))