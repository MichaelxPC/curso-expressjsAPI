import express from 'express'

const app = express()

app.get('/', (req, res) => {
    console.log('express js');
    res.status(200)
    res.json({text: "This is a message from an API"})
})

export { app }