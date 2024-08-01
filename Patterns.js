
function prefixSum(arr) {
    let n = arr.length;
    let prefix = new Array(n);
    prefix[0] = arr[0];
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + arr[i];
    }
    return prefix;
}

function rangeSum(prefix, i, j) {
    if (i === 0) return prefix[j];
    return prefix[j] - prefix[i - 1];
}

let arr = [1, 2, 3, 4, 5];
let prefix = prefixSum(arr);
console.log(rangeSum(prefix, 1, 3)); // Output: 9
