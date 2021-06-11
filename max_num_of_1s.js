let a=[]
function matrix(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        //console.log(matrix[row])
        let c=0
        for(let j=0;j<matrix[row].length;j++){
        if (matrix[row][j]===1){
            c=c+1
        }
        }
        a.push(c)
    }
    let max = Math.max( ...a )
    console.log(a.indexOf(max))
}
let m = [[0,1,1,0,0], [0,1,1],[0,1,1,1,1,1,1]];
matrix(m);