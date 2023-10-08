import express from 'express'

const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// });

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Joke 1",
            joke: "What do you call a very small valentine? A valen-tiny!",
        },
        {
            id: 2,
            title: "Joke 2",
            joke: "What did the dog say when he rubbed his tail on the sandpaper? Rough, rough!",
        },
        {
            id: 3,
            title: "Joke 3",
            joke: "Why don't sharks like to eat clowns? Because they taste funny!",
        },
        {
            id: 4,
            title: "Joke 4",
            joke: "I wouldn't buy anything with velcro. It's a total rip-off!",
        },
        {
            id: 5,
            title: "Joke 5",
            joke: "What is a vampire's favorite fruit? A neck-tarine!",
        }
    ];
    res.send(jokes);
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
});