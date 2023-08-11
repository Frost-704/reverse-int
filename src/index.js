module.exports = function reverse (n) {
    const abs = Math.abs(n);
    const str = abs.toString();
    let result = [];
    for (let i = str.length - 1; i >= 0; i -= 1) {
      result.push(str[i]);
    }
    return Number(result.join(''));
}
