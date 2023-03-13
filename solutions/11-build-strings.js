// BEGIN
    export default buildDefinitionList = (massiv) => {
    let variable = '<dl>';
    if(massiv.length === 0)
    {
        return '';
    }
    for(let y = 0 ; y < massiv.length; y++)
    {
        variable += `<dt>${massiv[y][0]}</dt><dd>${massiv[y][1]}</dd>`
    }
    return (variable + '</dl>');
    };
// END