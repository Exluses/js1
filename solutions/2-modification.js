// BEGIN
export const swap = (variable) => {
    let newperem;
    if(variable.length > 1)
    {
    newperem = variable[0];
    variable[0] = variable[variable.length - 1];
    variable[variable.length - 1] = newperem;
    return variable; }
    else
    {
    return variable;
    }
    }
// END