const _ = require("lodash");
// BEGIN
export default countUniqChars = (stroka) => {
     if (stroka === '')
     {
     return 0;
     }
     let massiv = stroka.split('');
     let newmassiv = _.uniq(massiv);
     return newmassiv.length;
}
// END