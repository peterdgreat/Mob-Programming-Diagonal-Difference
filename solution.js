function diagonalDifference(arr) {
    // Write your code here
    const primaryDiagonal=[];
    const secondaryDiagonal=[];
    for(let i=0; i<arr.length; i++){
        primaryDiagonal.push(arr[i][i]);
        secondaryDiagonal.push(arr[i][arr.length-i-1]);
    }
    const primarySum= primaryDiagonal.reduce((a,b)=> a+b);
    const secondarySum = secondaryDiagonal.reduce((a,b)=> a+b);
    return Math.abs(primarySum-secondarySum);
    
  
}
