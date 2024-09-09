let res = [];
function prefixSum(arr){
    let temp = 0;
    for(let i=0; i<arr.length; i++){
        temp += arr[i];
        res[i] = temp;
    }
return res;
}

let nums = [1, 2, 3, 4, 5, 6];
console.log(prefixSum(nums)) //  [1, 3, 6, 10, 15, 21].


// let j=3, i=1;
// console.log(res[j]-res[i-1])

