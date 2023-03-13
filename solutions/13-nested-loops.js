const _ = require("lodash"); 

// BEGIN
export default getSameCount = (massiv1, massiv2) => {
    const newmassiv1 = _.uniq(massiv1);
    const newmassiv2 = _.uniq(massiv2);
    let kolich = 0;

    for(let x = 0; x < newmassiv1.length; x++)

    {

    for(let y = 0; y < newmassiv2.length; y++)

    {

    if( newmassiv1[x] === newmassiv2[y])

    {

    kolich = kolich + 1;

    }
    }
    }
    return kolich;
}
// END