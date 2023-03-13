// BEGIN (write your solution here)
export const getWeekends = (view) => {
    const long = ['saturday', 'sunday'];
    const short = ['sat', 'sun'];
    switch (view) 
    {
      case 'long':
        return long;
      case 'short':
        return short;
      default:
        return long;
    }
  }
// END
