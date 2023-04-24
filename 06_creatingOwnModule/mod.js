 console.log('Inside mod.js');

 function calculateAverage(arr){
    let sum = 0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum/arr.length;
 }

 module.exports = calculateAverage;