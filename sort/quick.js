/**
 * 思路：
 *  分治。与merge主要工作在自底向上合并不同，快排主要工作在自顶向下拆分子问题
 *  在a[p, r]中，采用从两头向中间遍历的方式，保证左边小右边大（必要时对停滞两节点采取交换）
 *    最终得到q: a[p, q-1] <= a[q] <= a[q+1, r]
 * @param a
 * @returns {Array} a
 */
module.exports = function quickSort (a) {
    if (a.length === 0) return a;
    divideAndConquer(a, 0, a.length - 1);
    return a;
};
function divideAndConquer (a, p, r) {
    if (r <= p) return; //只有一个元素，已完成
    var q = partition(a, p, r);
    divideAndConquer(a, p, q-1);
    divideAndConquer(a, q+1, r);
}
/**
 * @pre a[p, r]
 * @param a
 * @param p
 * @param r
 * @return {int} q
 */
function partition (a, p, r) {
    var x = a[p];
    var i = p + 1;
    var j = r;
    while (true) {
        while (a[i] < x && i < r) ++i; //此时a[i] >= x || i === r
        while (a[j] > x) --j; //此时a[j] <= x
        if (i >= j) break;
        else swap(a, i, j); //若i===r,则i>=j已break。故此处交换后a[i]<=x, a[j]>=x。可继续
    }
    //此时i >= j。a[j]<=x,a[i]>=x(即便i===r,若j!==r，则a[i]>=x，若j===r，则a[i]===a[j]<=x)。故a[j]定<=x
    swap(a, p, j); //此后a[p]<=x===a[j]<=a[j+]
    return j;
}
function swap (a, i, j) {
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}