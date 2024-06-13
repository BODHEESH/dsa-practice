function fibonacciSeries(n) {
    let series = [0, 1];
    for (let i = 2; i <= n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series;
}

// console.log(fibonacciSeries(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


/* -------------------------------------------------------------------------- */
/*                                  METHOD 2                                  */
/* -------------------------------------------------------------------------- */

// Nth fibonacci number 

function fibonacci(n) {
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return n ? b : a;
}

console.log(fibonacci(8)); // Output: 21



// temp  * 1 
// a     0 1 
// b     1 1
// n     5 5
