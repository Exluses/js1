// BEGIN
export default bubbleSort = (mas) => {
    let variable;
    for (let x = mas.length - 1; x > 0; x--)
    {
    for (let y = 0; y < x; y++)
    {
    if (mas[y] > mas[y + 1])
    {
    variable = mas[y];
    mas[y] = mas[y + 1];
    mas[y + 1] = variable;
    }
    }
    }
    return mas;
};
// END