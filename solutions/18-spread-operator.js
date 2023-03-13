// BEGIN
 export const flatten = (array) => {
    const s = []
    for (const item of array) 
    {
    console.log(item)
    console.log(Array.isArray(item))
    if (Array.isArray(item) === true) 
    {
    console.log('Array', item)
    s.push(...item)
    }
    else 
    {
    s.push(item)
    } 
    }
    console.log(s)
    return s
    };
// END