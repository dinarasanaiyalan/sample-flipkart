document.write("Variables...")
//global variable
var a = 10; // number
var a1 = "Ten"; // string
var a2 = true; // boolean
var a3 = undefined; // undefined
var a4 = null; // null

var markList = [10,20,30,40];

//function syntax
/*
function fun_name(){
    code
}
*/

function show(){
    var b = 20; // local variable
    console.log("b = "+(b++));
    console.log("a = "+a);
    console.log("b = "+(b));
    document.write("Variable a value is : "+a)
}

function if_else(){
    var num1 = 10;
    let num2 = "10";

    if(num1 == num2){
        alert("Equal")
    } else {
        alert("Not Equal")
    }
}

function else_if(){
    var num = 3;
    if(num == 1){
        alert("Value of num is : 1");
    } else if(num == 2){
        alert("Value of num is : 2");
    } else if(num == 3){
        alert("Value of num is : 3");
    } else if(num == 4){
        alert("Value of num is : 4");
    } else {
        alert("Value of num is : "+num);
    }

}

function switchExample(){
    var num = 4;
    switch(num){
        case 1 : alert("Num value incremented : "+(++num));
                break;
        case 2 : alert("Num value decremented : "+(--num));
                break;
        case 4 : alert("Num value decremented : "+((++num)+(num)));
                break;
        default : alert("Non of the cases are matched.");
                break;
    }

    var name="Ramesh";
    switch(name){
        case "Rajesh" : alert("Rajesh");
                break;
        case "Ramesh" : alert("Ramesh");
                break;
        case "Kamesh" : alert("Kamesh");
                break;
        default : alert("Non of the cases are matched.");
                break;
    }
}

function forloop(){
    var i=1;
    for(; i<=100; i++){// 101 <= 100
        // console.log(i);
        // for even number
        if(i%2 == 0){
            console.log(i)
        }
         // for odd number
         if(i%2 != 0){
            console.log(i)
        }
    }
}

function whileloop(){
    var i=10;
    while(i>=1){// 10>=1, 9>=1,,,,, 1>=1, 0>=1 // 9
        console.log(i);// 10
        i--;// 10 9 8 7 6 ,,,,,
    }
}

function dowhileloop(){

    var i=0;
    do{
        console.log(i);
        i++;
    } while(i<10);

}

function cube(num1){
    var result = num1*num1*num1;
    return result;
}

function getUserName(){
    var user = document.getElementById("username").value
    // document.write(user);
    document.write(cube(4));
}

// object creation using literal
var emp = {empId:1002, empName:"Ramesh", empAddress:"Chennai", empSalary:25000.45};

console.log("Employee Name : "+emp.empName);

// object creation using instance of object
var std = new Object();
std.id = 102;
std.name = "Rajesh";
std.address = "Vadapalani";

console.log("Student Name and Address : "+std.name+" "+std.address);

function staff(staffId, staffName, subject){
    this.staffId = staffId;
    this.staffName = staffName;
    this.subject = subject;
}

var staffObj = new staff(1011, "Kamesh", "JavaScript");
console.log("Staff Name and Subject : "+staffObj.staffName+" "+staffObj.subject);

std.marks = 450;
console.log("Student Marks : "+std.marks);

// Array Creation using array literal
var marks = [90,87,90,89,78];
console.log(marks[3]);
function loopMarks(){
    for(var i=0; i<marks.length; i++){
        // debugger
        console.log(marks[i]);
    }
}
loopMarks();

// array creation using instance of array
var furitsList = new Array();
furitsList[0] = "Apple";
furitsList[1] = "Banana";
furitsList[2] = "Grapes";

console.log(furitsList[1]);

var stdNameList = new Array("Akash","Bharath","Chandru","Dinagaran");
console.log(stdNameList[3]);

var concatedArray = furitsList.concat(stdNameList);
console.log("==============================================");
function loopFuritsList(){
    for(var i=0; i<concatedArray.length; i++){
        console.log(concatedArray[i]);
    }
}
loopFuritsList();

console.log("==============================================");

var concatedArrayTwo = furitsList.concat(marks);
var result = 0;
function concatedArrayTwoIteration(){
    for(var i=0; i<marks.length; i++){
        result += marks[i];
    }
}
concatedArrayTwoIteration();
console.log("==============================================");
console.log(result);
console.log("==============================================");
var numbers = [10,20,30,40,50,60];
var subArray = numbers.copyWithin(0,2);
debugger
function copywithinarrayExample(){
    for(var i=0; i<subArray.length; i++){
        console.log(subArray[i]);
    }
}
copywithinarrayExample();