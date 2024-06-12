

const fs = require('fs');

fs.readFile('example.txt', () => {
    console.log('File Read Complete');

    setTimeout(() => {
        console.log('Timeout inside I/O');
    }, 0);

    setImmediate(() => {
        console.log('Immediate inside I/O');
    });

    process.nextTick(() => {
        console.log('Next Tick inside I/O');
    });
});

console.log('Reading File');


// logging order
// Reading File
// File Read Complete
// Next Tick inside I / O
// Immediate inside I / O
// Timeout inside I / O


// -------------------------------------------------------------------------------------



// console.log('Start');

// process.nextTick(() => {
//     console.log('Next Tick');
// });

// setTimeout(() => {
//     console.log('Timeout');
// }, 0);

// setImmediate(() => {
//     console.log('Immediate');
// });

// console.log('End');



// logging order

// Start
// End
// Next Tick
// Timeout
// Immediate