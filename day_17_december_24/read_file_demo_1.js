const fs = require('fs');

fs.readFile('./day_17_notes.txt', (err, data) => {
    console.log(data.toString())
})


// read content from 2 files , write the contents into 3rd file
fs.readFile('file_1.txt', (err, data1) => {  // callback hell
    fs.readFile('file_2.txt', (err, data2) => {
        fs.writeFile('file_3.txt', data1, data2, (err, data1) => {
        })
    })
})