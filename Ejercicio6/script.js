function number(nums) {

    let x = nums;

    for(let i= x.length-1; i>=0; i--){

        if(x[i] === 0){

            x.push(0) 

            x.splice(i,1)

        }

    }

    return x

};