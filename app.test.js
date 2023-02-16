const { findMedian, findMode, findMean} = require('./helpers')
// console.log(MarkovMachine, 'i am line 2')

test('median should return the middle number in a sorted list that has an odd amount of total values', function () {
    let median = findMedian('1,3,5');
    expect(median).toEqual(3);
  });

test('median should return the middle number in a sorted list that has an even amount of total values', function () {
    let median = findMedian('1,3,5,7');
    expect(median).toEqual(4);
  });

test('mode should return the most frequent number in the list', function () {
    let mode = findMode([1,3,5,7,3]);
    expect(mode).toEqual(3);
  });

test('Mean should return the average', function () {
    let mean = findMean('1,3,5,7');
    expect(mean).toEqual(4);
  });