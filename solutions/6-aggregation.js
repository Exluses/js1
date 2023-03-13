// BEGIN
export const calculateSum = (coll) => {
    if (coll.length === 0) 
    {
        return 0;
    }
    let summa = 0;
    for (let i = 0; i < coll.length; i +=1) 
    {
    if (coll[i] % 3 === 0) 
    {
        summa += coll[i];
    }
    }
    return summa;
}
// END