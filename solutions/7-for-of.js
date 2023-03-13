// BEGIN
export default calculateAverage = (massiv) => {
    let summa = 0;
    if (massiv.length === 0) {
        return null;
    }
    for (let temperatura of massiv) {
        summa += temperatura;
    }
    return (summa/massiv.length);
}
// END