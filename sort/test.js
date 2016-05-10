var util = require('../util');
var bubble = require('./bubble');

[
    [1, 3, 6, 8, 20, 2, 4, 0],
    [123, 4243, 2, 12, 8, 1, 0, 4, 5, 2, 112, 3, 56]
].forEach(function (arr) {
        var result = bubble(arr.slice());
        console.log(arr, result);
        console.assert(util.sameArray(util.sort(arr), result));
    });
