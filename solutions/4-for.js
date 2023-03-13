// BEGIN
export default addPrefix = (names, prefix) => {
    const newnames = [];
    for (let i = 0; i < names.length; i++) {
    newnames[i] = `${prefix} ${names[i]}`;}
    return newnames;
    };

// END