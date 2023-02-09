// Wood Calculator : 1 chair = 1CF (Cubic Feet)
//                   1 Table = 3CF 
//                   1 Bed   = 5CF 


function woodCalculator (Chair, Table, Bed){
    if (Chair < 0 || Table < 0 || Bed < 0){
        return "<<<<<<Invalid Input>>>>>>"
    }
    else{
        Chair = Chair * 1;
        Table = Table * 3;
        Bed   = Bed * 5;
        let totalWood = Chair + Table + Bed;
        return totalWood;
    }
}

//Put your input in this order No. of (Chair, Table, Bed)
console.log("Total Wood Needed ", woodCalculator(6,5,9),"Cubic Feet \n");
console.log("Total Wood Needed ", woodCalculator(-6,5,9),"Cubic Feet \n");
console.log("Total Wood Needed ", woodCalculator(-6,-5,9),"Cubic Feet \n");
console.log("Total Wood Needed ", woodCalculator(-6,5,-9),"Cubic Feet \n");