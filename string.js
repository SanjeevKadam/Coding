function reverseString(str) {
    return str.split("").reverse().join(""); // built-in function

    let reverseStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i]
    }
    return reverseStr; // with-out built-in function

    let reverseStr = '';
    let i = 0, j = str.length - 1;
    while (i <= j) {
        reverseStr += str[i];
        i++
    }
    return reverseStr; // with-out built-in function
}
console.log(reverseString("hello")); // Output: "olleh"
