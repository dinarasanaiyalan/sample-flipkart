var arr = [2,45,76,35,8];
var result = arr.find(ar => ar>35);
console.log(result);
console.log("================================");
function display(x){
    console.log(x);
}

arr.find(display)
console.log("================================");
result = arr.findIndex(ar => ar>35);
console.log(result);

console.log("foreach method : ================================");
arr.forEach(a => {
    console.log(a);
})