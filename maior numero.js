function maiornumero(nums){
    return nums.reduce((acc, num)=>{
        if(num>acc){
            return num
        }else{
            return acc
        }
    }, nums[0])
}

console.log(maiornumero([10,8,30,15,11]))