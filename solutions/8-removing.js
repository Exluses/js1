// BEGIN
export default getSameParity = (massiv) => {
    const newmassiv = [];
    let variable = Math.abs(massiv[0] % 2);

    for (let i = 0; i < massiv.length; i += 1) {
        if (Math.abs(massiv[i] % 2) === variable) 
        {
            newmassiv.push(massiv[i]);
        }
    }
    return newmassiv;
}

// END