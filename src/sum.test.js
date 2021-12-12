const sum = require('./sum');

test ("sum of 2 numbers", ()=>{

    expect(sum(1,2)).toBe(3);
});