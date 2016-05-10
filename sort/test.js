var util = require('../util');
var list = [require('./bubble'), require('./merge')];

[
    [1, 3, 6, 8, 20, 2, 4, 0],
    [123, 4243, 2, 12, 8, 1, 0, 4, 5, 2, 112, 3, 56]
].forEach(function (arr) {
        var rightResult = util.sort(arr);
        list.forEach(function (func) {
            var result = func(arr.slice());

            console.log(func.name, arr, result);
            console.assert(util.sameArray(rightResult, result)); 
        });
    });
