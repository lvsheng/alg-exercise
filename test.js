var merge = require('./merge');
[
    [
        [1, 3, 5, 10, 12],
        [2, 3, 4, 6, 7, 8, 9]
    ]
].forEach(function (arrs) {
        var a = arrs[0];
        var b = arrs[1];
        console.log(a, b, merge(a, b));
    });
