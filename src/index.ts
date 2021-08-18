import express from "express";
import route from "./routes/routing"
const app = express();

const port = 3000;

app.listen(port, ()=> {
    console.log(`Listening on port ${port}.`);
})

app.use(express.json()); //to extract that data within the endpoints, the Express application needs to convert that data to JSON.
app.use(route);