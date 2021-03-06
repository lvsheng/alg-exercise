/**
 * 思路：min(min(a), min(b)) === min(a.concat(b))。去除最小后再递归处理剩余
 * @param a {Array}
 * @param b {Array}
 * @returns {Array}
 */
module.exports = function (a, b) {
    var c = [];
    var i = 0;
    var j = 0;
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            c[i + j] = a[i++];
        } else {
            c[i + j] = b[j++];
        }
    }
    for (i; i < a.length; ++i) {
        c[i + j] = a[i];
    }
    for (j; j < b.length; ++j) {
        c[i + j] = b[j];
    }
    return c;
};
