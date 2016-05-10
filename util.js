exports.sort = function (arr) {
    return arr.slice().sort(function (a, b) {
        return a - b;
    })
};
exports.sameArray = function (a, b) {
    return a.every(function (v, i) {
        return v === b[i];
    });
};