// covert measurement between different units (Currently "Inch" to "Other" available)
// currently available units are:
// icnh, feet, kilometer(km), meter, mile, centimeter(cm)

function measurementCalculator (fromUnit, toUnit, valueConvert){
    let from = fromUnit;
    let to = toUnit;
    let value = valueConvert;
    let convert = 0;
    let switchCase = `${from} to ${to}`;

    switch (switchCase) {
        // icnh to other units
        case "inch to feet":
            convert = parseFloat(value/12).toFixed(2); //12 inch = 1 Feet
            break;
        case "inch to cm":
            convert = parseFloat(value*2.54).toFixed(2); //1 inch = 2.54 Centimeter
            break;
        case "inch to meter":
            convert = parseFloat(value/39.37).toFixed(2); //39.37 inch = 1 Meter
            break;
        case "inch to km":
            convert = parseFloat(value/39370).toFixed(2); //39370 inch = 1 Kilo-Meter
            break;
        case "inch to mile":
            convert = parseFloat(value/63360).toFixed(2); //63360 inch = 1 Mile
            break;
        // other units to inch
        case "feet to inch":
            convert = parseFloat(value*12).toFixed(2); //12 inch = 1 Feet
            break;
        case "cm to inch":
            convert = parseFloat(value/2.54).toFixed(2); //1 inch = 2.54 Centimeter
            break;
        case "meter to inch":
            convert = parseFloat(value*39.37).toFixed(2); //39.37 inch = 1 Meter
            break;
        case "km to inch":
            convert = parseFloat(value*39370).toFixed(2); //39370 inch = 1 Kilo-Meter
            break;
        case "mile to inch":
            convert = parseFloat(value*63360).toFixed(2); //63360 inch = 1 Mile
            break;

            
        default:
            console.log("Enter value in specified units");
            break;
    }
    return `${value} ${from} converted to ${to} is: ${convert} ${to}`;

}

console.log(measurementCalculator("feet", "inch", 145));
console.log(measurementCalculator("inch", "feet", 136),"\n");

console.log(measurementCalculator("cm", "inch", 19));
console.log(measurementCalculator("inch", "cm", 15687),"\n");

console.log(measurementCalculator("meter", "inch", 196));
console.log(measurementCalculator("inch", "meter", 12),"\n");

console.log(measurementCalculator("km", "inch", 10));
console.log(measurementCalculator("inch", "km", 15666),"\n");

console.log(measurementCalculator("mile", "inch", 89));
console.log(measurementCalculator("inch", "mile", 3256),"\n");