// BEGIN
export default getTotalAmount = (massiv, money) => {
    let summa = 0;
    for (let temp of massiv)
    {
        if (temp.slice(0, 3) === money)
        {
           summa += Number(temp.slice(4));
        }
    }
    return summa;
}
// END