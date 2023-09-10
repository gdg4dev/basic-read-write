const fs = require('fs')
const path = require('path')

const response = {
    statusCode: 200,
    error: false,
    message: "ok!",
    data: {}
}

const errorMessageHandler = (e) => {
    response.statusCode = 500
    response.error = true
    response.message = e
    return response
}

const writeDataToFile = (rawData, fileName, callback) => {
    try {
        // let jsonData = JSON.parse(rawData)
        let fileName1 = (["", undefined, null].includes(fileName)) ? "main.json" : fileName
        fs.writeFileSync( path.join(__dirname, `../database/${fileName1}`) , JSON.stringify(rawData), {encoding: "utf-8"})
        callback(response)
    } catch (e) {
        console.log(e)
        callback(errorMessageHandler(e))
    }
}

const getDataFromFile = (fileName, callback) => {
    try {
        let fileName1 = (["", undefined, null].includes(fileName)) ? "main.json" : fileName
        let fileData = fs.readFileSync(path.join(__dirname, `../database/${fileName1}`), {encoding: "utf-8"})
        response.data = JSON.parse(fileData)
        callback(response)
    } catch (e) {
        console.log(e)
        callback(errorMessageHandler(e))
    }
}

module.exports = {getDataFromFile, writeDataToFile}