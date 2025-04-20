const sumAll = function(value1,value2) {

    let result=0;
    
    //for value1 if bigger than value2
    if(value1>=value2){
    value1=value1+value2;
    value2 = value1-value2;
    value1 = value1-value2;
    }
    //error return 

    if((value1||value2)<0||!Number.isInteger(value1)||!Number.isInteger(value2)||Number.isNaN(value1)||Number.isNaN(value2))
    {
        return "ERROR"
    }

    for(let i = value1;i<=value2;i++)
    {
        result += i;
    }
    return result;

};

// Do not edit below this line
module.exports = sumAll;
