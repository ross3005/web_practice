const express = require("express")
const app = express()
const path = require("path")

app.use(express.static(path.join(__dirname, '/public')))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/html/index.html")
})

app.get("/production", (req, res) => {
    res.sendFile(__dirname + "/public/html/production.html")
})

app.get("/board", (req, res) => {
    res.sendFile(__dirname + "/public/html/board.html")
})

app.get("/kipa", (req, res) => {
    res.sendFile(__dirname + "/public/html/kipa.html")
})

app.get("/electricdrive", (req, res) => {
    res.sendFile(__dirname + "/public/html/electricdrive.html")
})

app.get("/automatization", (req, res) => {
    res.sendFile(__dirname + "/public/html/automatization.html")
})

app.get("/electricity", (req, res) => {
    res.sendFile(__dirname + "/public/html/electricity.html")
})

app.get("/service", (req, res) => {
    res.sendFile(__dirname + "/public/html/service.html")
})

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/public/html/contact.html")
})

app.listen(8080)
