// BEGIN
export const get = (massiv, index, strdef = null) => {
    if (index <= (massiv.length - 1) && index >= 0) {
    return massiv[index]; }
    else 
    {
    return strdef;
    }
    };
// END