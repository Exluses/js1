// BEGIN
export const getMax = (massiv) =>{
    if (massiv.length === 0) {
    return null; }
    let [firstNumber, ...massivCopy] = massiv;
    for(let item of massivCopy) {
    if(item > firstNumber) {
    firstNumber = item; }
    }
    return firstNumber;
};
// END