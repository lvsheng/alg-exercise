module.exports = function bubbleSort (a) {
    var n = a.length;
    var t;
    for (var i = 0; i < n - 1; ++i) {
        for (var j = n - 1; j > i; --j) {
            if (a[j - 1] > a[j]) {
                t = a[j - 1];
                a[j - 1] = a[j];
                a[j] = t;
            }
        }
    }
    return a;
};
