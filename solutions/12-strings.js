// BEGIN
export default makeCensored = (string, value) => {
    let massiv = string.split(' ');
    const newmassiv = [];
    for (let slovo of massiv) 
    {
    if (value.includes(slovo)) 
    {
    newmassiv.push('$#%!');
    } 
    else 
    {
    newmassiv.push(slovo);
    }
    }
    return newmassiv.join(' ');
  }
// END