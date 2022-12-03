"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mock_database_json_1 = __importDefault(require("../mock-database.json"));
// initialize configuration
dotenv_1.default.config();
// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;
const app = (0, express_1.default)();
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.get('/search', (req, res) => {
    // Do something when someone makes request to /search
    // Get value from searchquery param
    const { searchQuery } = req.query;
    if (searchQuery) {
        // search titles by queries:
        const results = mock_database_json_1.default.filter(r => r.title.includes(searchQuery.toString()) ||
            r.shortDescription.includes(searchQuery.toString()) ||
            r.description.includes(searchQuery.toString()));
        res.send(results);
    }
    res.end();
});
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map