const fs = require('fs')
const file = process.argv[2]
fs.readFile(file, (err, data) => {
    if (err) {
        console.log((''.toString()).split('\n').length-1)
    }
    else {
        console.log(('',data).toString().split('\n').length-1)
    }
})