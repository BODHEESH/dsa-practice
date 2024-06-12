// const myPromise = new Promise((resolve, reject) => {
//     const success = false;
//     if (success) {
//         resolve('Promise fulfilled!');
//     } else {
//         reject('Promise rejected.');
//     }
// });

// myPromise
//     .then(result => {
//         console.log(result); // 'Promise fulfilled!'
//     })
//     .catch(error => {
//         console.error(error); // 'Promise rejected.'
//     });






/* -------------------------------------------------------------------------- */
/*                                 Promise.all                                */
/* -------------------------------------------------------------------------- */


// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then(values => {
//     console.log(values); // [3, 42, 'foo']
// }).catch(error => {
//     console.error(error);
// });




/* -------------------------------------------------------------------------- */
/*                             Promise.allSettled                             */
/* -------------------------------------------------------------------------- */


// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(reject, 100, 'foo');
// });

// Promise.allSettled([promise1, promise2]).then(results => {
//     results.forEach((result) => {
//         if (result.status === 'fulfilled') {
//             console.log('Fulfilled:', result.value);
//         } else {
//             console.log('Rejected:', result.reason);
//         }
//     });
// });

/* -------------------------------------------------------------------------- */
/*                                Promise.race                                */
/* -------------------------------------------------------------------------- */

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one');
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'two');
// });

// Promise.race([promise1, promise2]).then(value => {
//     console.log(value); // 'two' (the fastest one)
// }).catch(error => {
//     console.error(error);
// });



/* -------------------------------------------------------------------------- */
/*                                 Promise.any                                */
/* -------------------------------------------------------------------------- */

// const promise1 = Promise.reject('Error 1');
// const promise2 = new Promise((resolve) => {
//     setTimeout(resolve, 100, 'Success 2');
// });
// const promise3 = new Promise((resolve) => {
//     setTimeout(resolve, 200, 'Success 3');
// });

// Promise.any([promise1, promise2, promise3]).then(value => {
//     console.log(value); // 'Success 2'
// }).catch(error => {
//     console.error(error); // AggregateError: All promises were rejected
// });


/* -------------------------------------------------------------------------- */
/*                              Combined promises                             */
/* -------------------------------------------------------------------------- */

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Data fetched'), 1000);
    });
};

const processData = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${data} and processed`), 1000);
    });
};

fetchData()
    .then(data => processData(data))
    .then(result => console.log(result)) // 'Data fetched and processed'
    .catch(error => console.error(error));
