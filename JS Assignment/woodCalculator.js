// Wood Calculator : 1 chair = 1CF (Cubic Feet)
//                   1 Table = 3CF 
//                   1 Bed   = 5CF 

function woodCalculator (type, quantity){
    let totalWood = 0;
    
    if (quantity == 0 || quantity < 0){
        return "Invalid Input"
    }
    else{
        if (type == "Bed" || type == "bed"){
            type = "Bed";
        }
        else if (type == "Table" || type == "table"){
            type = "Table";
        }
        else if(type == "Chair" || type == "chair"){
            type = "Chair";
        }
        else {
            return "Invalid item type, please select between 'Bed', 'Cahir', 'Table'";
        }


        switch (type){
            case "Bed":
                totalWood = quantity * 5
                break;

            case "Table":
                totalWood = quantity * 3
                break;

            case "Chair":
                totalWood = quantity * 1
                break;
        }
    }
    return `Total wood needed for ${quantity} ${type} is ${totalWood} Cubic Feet`;
}

console.log(woodCalculator("bed", 59),"\n");
console.log(woodCalculator("chair", 59),"\n");
console.log(woodCalculator("Table", 9),"\n");
console.log(woodCalculator("Table", 0),"\n");
console.log(woodCalculator("Table", -9),"\n");
console.log(woodCalculator("able", 9),"\n");
