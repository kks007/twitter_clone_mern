import express from 'express';

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
    res.send("Hello World!");
})



app.listen(PORT, () => {

    console.log("listening on port 4000");
});