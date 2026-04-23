function somarArray(nums){
    const soma = nums.reduce((acc,guis)=>{
        return acc + guis
    },0)
    return soma
}

console.log(somarArray([1,2,3,4,5]))