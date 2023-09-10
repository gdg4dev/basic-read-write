const express = require('express')
const app = express()
const PORT = process.env.PORT || 3030
const fs = require('fs')
const { writeDataToFile, getDataFromFile } = require('./utils/utils')

app.post("/writeData", (req, res) => {
    let {rawData, fileName} = req.query
    writeDataToFile(rawData, fileName, (r) => {
        res.statusCode = r.statusCode
        res.statusMessage = r.message
        res.json({error: r.error, data: r.data })
    })
})

app.get("/getData", (req,res) => {
    let {fileName} = req.query
    getDataFromFile(fileName, (r) => {
        res.statusCode = r.statusCode
        res.statusMessage = r.message
        res.json({error: r.error, data: r.data })
    })
})

app.listen(PORT, () => console.log("server has started on the port -> ", PORT))