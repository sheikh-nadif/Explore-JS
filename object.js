var objStudentDetails1 = {id:69, name: "XY"}; //Declare objects
var objStudentDetails2 = {id:96, name: "XX"};
console.log(objStudentDetails1);
console.log(objStudentDetails2, "\n");

var accessObjectType1 = objStudentDetails1.name; //Access Obj :Type1
console.log(accessObjectType1);

var accessObjectType2 = objStudentDetails1['id'] //Access Obj :Type2
console.log(accessObjectType2);

var accessObjectType3 = "name";                  //Access Obj :Type3
var studentName = objStudentDetails2[accessObjectType3];
console.log(studentName, "\n");


//Edit objects
objStudentDetails1.name = "Chunchunmaru"; //Type 1
objStudentDetails1["id"]= "1026969"       //Type 2

var newName = "name";
var newID   = "id";
objStudentDetails2[newName]= "Kokiburi";  //Type 3
objStudentDetails2[newID]= "2053696";     //Type 3

console.log(objStudentDetails1);
console.log(objStudentDetails2);

