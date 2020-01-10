const fs = require('fs')
const file = process.argv[2]
const str = fs.readFileSync(file).toString().split('\n').length-1

console.log(str)
