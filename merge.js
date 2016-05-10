module.exports = function (a, b) {
    a = a.slice();
    b = b.slice();
    var c = [];
    while (a.length && b.length) {
        console.log(a, b, c);
        if (a[0] < b[0]) {
            c.push(a.shift());
        } else {
            c.push(b.shift());
        }
    }
    return c.concat(a).concat(b);
};
