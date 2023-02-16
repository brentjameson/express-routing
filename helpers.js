const ExpressError = require('./expressError')

function findMean(nums) {
    const numsArrayString = nums.split(',')
    const numsArray = numsArrayString.map(num => parseInt(num));
    if(numsArray.includes(NaN)) {
        throw new ExpressError("You must only enter numbers", 400);
    }
        
    console.log(numsArray, 'line 10')
    const sumNums = numsArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue
        );
    const mean = sumNums / numsArray.length
    console.log(sumNums)
    console.log(mean)
    return mean

}
function findMedian(nums) {
    const numsArrayString = nums.split(',')
    const numsArray = numsArrayString.map(num => parseInt(num));
    
    if(numsArray.includes(NaN)) {
      throw new ExpressError("You must only enter numbers", 400);
  }
    const numsArraySorted = numsArray.sort(function(a,b){
        return a-b;
      });
    const halfIndex = Math.floor(numsArraySorted.length / 2);

    if (numsArraySorted.length % 2 === 0) {
        const medianEven = (numsArraySorted[halfIndex - 1] + numsArraySorted[halfIndex]) / 2.0;
        return medianEven
    }

    medianOdd = numsArraySorted[halfIndex]
    return medianOdd

}

function createFrequencyCounter(arr) {
    return arr.reduce(function(acc, next) {
      acc[next] = (acc[next] || 0) + 1;
      return acc;
    }, {});
  }
  
  /**
   * Find the most common element in the array
   * @param {Array} arr any array
   */
  function findMode(arr) {
    let freqCounter = createFrequencyCounter(arr);
  
    let count = 0;
    let mostFrequent;
  
    for (let key in freqCounter) {
      if (freqCounter[key] > count) {
        mostFrequent = key;
        count = freqCounter[key];
      }
    }
  
    return +mostFrequent;
  }





module.exports = {
    createFrequencyCounter,
    findMean,
    findMedian,
    findMode,
  };