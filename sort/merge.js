/**
 * @param a {Array}
 * @returns {Array}
 */
module.exports = function mergeSort (a) {
    if (a.length === 0) {
        return [];
    }

    divideAndConquer(a, 0, a.length, []);
    return a;
};

/**
 * @pre j > i 即 j - i >= 1
 * @param a
 * @param i
 * @param j
 * @param temp
 * @post a[i, j)内有序
 */
function divideAndConquer (a, i, j, temp) {
    var n = j - i;
    if (n === 1) {
        return;
    }
    
    var k = i + Math.ceil((j - i) / 2);
    divideAndConquer(a, i, k, temp);
    divideAndConquer(a, k, j, temp);
    merge(a, i, k, j, temp);

    for (var k0 = i; k0 < j; ++k0) {
        a[k0] = temp[k0];
    }
}

/**
 * 将a[i, k)与a[k, j)归并至b[i, j)中
 * @pre i < k < j
 * @pre a[i, k)与a[k, j)内已各自有序
 * 
 * @param a {Array} source
 * @param i
 * @param k
 * @param j
 * @param b {Array} target
 * @returns {Array} b
 */
function merge (a, i, k, j, b) {
    var k1 = i, k2 = k;
    
    while (k1 < k && k2 <j) {
        if (a[k1] > a[k2]) {
            b[k1 + k2 - k] = a[k2++];
        } else {
            b[k1 + k2 - k] = a[k1++];
        }
    }
    for (k1; k1 < k; ++k1) {
        b[k1 + k2 - k] = a[k1];
    }
    for (k2; k2 < j; ++k2) {
        b[k1 + k2 - k] = a[k2];
    }

    return b;
}
