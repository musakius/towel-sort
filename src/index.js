// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix)) return [];
    let result = [];
    matrix.forEach((item, index) => {
        if (index % 2 != 0) {
            item.reverse().forEach((el) => {
                result.push(el);
            });
        } else {
            item.forEach((el) => {
                result.push(el);
            });
        }
    });
    return result;
};
