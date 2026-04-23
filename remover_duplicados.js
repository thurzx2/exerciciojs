function RemoverValoresDuplicados(array){
    return array.reduce((acc, atual)=>{
    if(acc.includes(atual)){
        return acc
    }else{
        return [...acc, atual]
    }
    }, [])
}

console.log(RemoverValoresDuplicados([1, 1, 1, 1, 1, 5, 6, ]))