// Leap Year have 29 days on February 
// It happenes due to the earths rotation arround sun
//A leap year is a calendar year that contains an additional day added to keep the calendar year synchronized with the astronomical year or seasonal year.

// Is leap year every 4 or 5 years?
// The Solar year is 365.2422 days long, a length which no calendar year can accommodate. By having leap years every four years we ensure that the months consistently match up with the seasons.
// After every 3 year the 4th year is considered Leap Year 


// What are the conditions of Leap Year?
// It must be divisable by 4; It means 'Year' % 4 == 0;

// It must not be divisable by 100, 
// So every 100 years we don't have a leap year, and that gets us 365.24 days per year (1 day less in 100 year = -0.01 days per year). Closer, but still not accurate enough!
// So, 'Year' % 100 !=0;

// It must be divisable by 400, 
// So another rule says that every 400 years is a leap year again. This gets us 365.2425 days per year (1 day regained every 400 years = 0.0025 days per year), which is close enough to 365.242375 not to matter much.
// So, 'Year' % 400 ==0;

// So, if "Year" % 4 == 0 and "Year" % 100 != 0 or "Year" % 400 == 0; then it is a Leap Year.

function isLeapYear(year){
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        const leapYear = year +" is a Leap Year";
        return leapYear;
    }
    else{
        const leapYear = year +" is not a Leap Year";
        return leapYear;
    }
}
console.log(isLeapYear(2024));
console.log(isLeapYear(2022));
console.log(isLeapYear(2000));


//using loop to find Leap Year and Array to store 
let leapYearArray = [];
let notLeapYearArray = [];
for (var i = 1971; i < 2025; i++){
    if ((i % 4 == 0) && (i % 100 != 0) || (i % 400 == 0)){
        leapYearArray.push(i);
    }
    else{
        notLeapYearArray.push(i);
    }
}
console.log("leap years are: ",leapYearArray);
console.log("non-leap years are: ",notLeapYearArray);