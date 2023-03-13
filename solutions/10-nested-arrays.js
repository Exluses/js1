// BEGIN

export default getSuperSeriesWinner = (massiv) => {
    let ussrvpered = 0;
    let canadaloxi = 0;
    for (let x = 0; x < massiv.length; x++) 
    {
        if (massiv[x][0] > massiv[x][1]) 
        {
            canadaloxi++;
        }
        else if (massiv[x][0] < massiv[x][1]) 
        {
            ussrvpered++; 
        }
    }
if (canadaloxi > ussrvpered) 
{
    return 'canada';
}
else if (canadaloxi === ussrvpered) 
{
    return null;
}
else 
{
    return 'ussr';
}

}
// END