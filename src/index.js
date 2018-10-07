module.exports = function solveSudoku(matrix) {
    function solveSudokuTask(matrix) {
        let possibleSolution;
        //now we go through each element of our table
        for (let x = 0; x < 9; x++) {
            for (let y =0; y < 9; y++) {
                if (matrix[x][y] == 0) {
                    //in this condition we find the number of element from 1 to 9
                    for (let i = 1; i < 10; i++) {
                        if (check (matrix, x, y, i)) {
                            matrix[x][y] = i;
                            possibleSolution = solveSudokuTask(matrix);
                            if (possibleSolution) return true;
                            //if with this i we can't find the solution, next we check for next i in matrix[x][y]
                            matrix[x][y] = 0; 
                        }
                    }
                    return false; //if none of these solutions fit our conditions 
                }
            }
        }
        return true;
    }

    //this function checks if all indicies are correctly inserted
    function check(matrix, x, y, number) {
        //xBlock; yBlock is our start element is every section(left top element)
        let xBlock = Math.floor(x / 3) * 3;
        let yBlock = Math.floor(y / 3) * 3;
        //now let's check if this cell is empty or fulfilled
        for (let i = 0; i < 9; i++) {
            let xElem = Math.floor(i / 3);
            let yElem = i % 3;
            if (matrix[x][i] == number || matrix[i][y] == number || 
                matrix[xBlock + xElem][yBlock + yElem] == number) {
                return false;
            }
        }
        return true;
    }

    solveSudokuTask(matrix);
    return matrix;
}