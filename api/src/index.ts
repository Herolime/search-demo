import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import Mock from '../mock-database.json'

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;

const app = express();

app.use(cors())

// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.get('/search', (req, res) => {
    // Do something when someone makes request to /search
    // Get value from searchquery param
    const { searchQuery } = req.query

    if (searchQuery) {
        // search titles by queries:
        const results = Mock.filter(r => r.title.includes(searchQuery.toString()) ||
            r.shortDescription.includes(searchQuery.toString()) ||
            r.description.includes(searchQuery.toString()))
        res.send(results)
    }
    res.end()
});

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});