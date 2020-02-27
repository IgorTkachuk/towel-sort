// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    matrix.forEach((el, idx) => {
        if (idx % 2) el.reverse();
    });

    return matrix.flat();
};
