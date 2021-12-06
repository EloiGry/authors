const { application } = require('express')
const express = require('express')
const app = express()
const port = 5000


const authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]

// app.get('/go', (req, res) => {
//     res.send('Authors API')
// })

// app.get('/authors/:id', (req, res)=> {
//     const { id } = req.params
//     const find = authors[id -1]
//     res.send(`${find.name}, ${find.nationality}`)
// })

// app.get('/authors/:id/books/', (req, res)=> {
//     const { id } = req.params
//     const find = authors[id -1]
//     res.send(find.books.join(', '))
// })

app.get('/json/authors/:id', (req, res)=> {
    const { id } = req.params
    const find = authors[id -1]
    res.json({ 
        name : `${find.name}`, 
        nationality : `${find.nationality}`})
})

app.get('/json/authors/:id/books/', (req, res)=> {
    const { id } = req.params
    const find = authors[id -1]
    res.json({books : [`${find.books}`]})
})



app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })