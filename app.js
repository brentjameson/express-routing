const express = require('express')
const { findMode, findMean, findMedian, createFrequencyCounter } = require('./helpers');
const ExpressError = require('./expressError')

const app = express();



app.get('/mean', function(request, response ) {
    if (!request.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
      }
    // debugger
    console.log(request.query)
    // throw new ExpressError("Not Found!", 404);
    const nums = request.query.nums
    
    // debugger
    return response.json({ operation: "mean", value: findMean(nums)});
}) 


app.get('/median', function(request, response ) {
    // debugger
    if (!request.query.nums) {
      throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    const nums = request.query.nums
    return response.json({ operation: "median", value: findMedian(nums) });
})


app.get('/mode', function(request, response ) {
    // debugger
    if (!request.query.nums) {
      throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    console.log(request.query)
    const nums = request.query.nums
    console.log(nums, 'i am nums')
    const numsArrayString = nums.split(',')
    const numsArray = numsArrayString.map(num => parseInt(num));
    mode = "7"
    if(numsArray.includes(NaN)) {
      throw new ExpressError("You must only enter numbers", 400);
    }
    
    return response.json({ operation: "mode", value: findMode(numsArray) });
}) 
        
    
    
        
      
    app.use(function(err,request,response,next){
        // the default status is 500 Internal Server Error
        let status = err.status || 500;
        let message = err.message;

        // set the status and alert the user
        return response.status(status).json({
            error: {message, status}
        });
    });





app.listen(3000, function() {
    console.log('App on port 3000')
})