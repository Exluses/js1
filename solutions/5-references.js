// BEGIN
export const reverse = (array) => {
    let n_half = Math.floor(array.length / 2);
    let n = array.length - 1;
    let temp;
    let i;
    for (i = 0; i != n_half; i++) {
        temp = array[i];
        array[i] = array[n-i];
        array[n - i] = temp;
    }
}

let array = ["john", "smith", "karl"];
reverse(array);
console.log(array);
// END