const removeFromArray = function(arr,...target) {
    const index=arr.indexOf(target)
    if(index!==-1){arr.splice(index,1);}


    return arr;
    

};

// Do not edit below this line
module.exports = removeFromArray;
