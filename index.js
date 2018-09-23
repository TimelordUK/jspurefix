let fs = require('fs')
let xml2js = require('xml2js')
let path = require('path')

let fixFile = 'ice-tc.xml'
let parser = new xml2js.Parser()
fs.readFile(path.join(__dirname, fixFile), (err, data) => {
  parser.parseString(data, (err, result) => {
    console.dir(result)
    let x = JSON.stringify(result, null, 4)

    console.log(x)
    console.log('Done')
  })
})
