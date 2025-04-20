const reverseString = function(input) {
let result="";
let n = input.length;
for(let i=n-1 ;i>=0;i--){
    result = result+input[i]
}
return result;
};

// Do not edit below this line
module.exports = reverseString;
