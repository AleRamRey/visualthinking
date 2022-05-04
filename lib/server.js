const StudentController = require("./../lib/controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "VisualThinking Api welcome!"});
});

app.listen(port, () => {
    console.log(`VisualThinking API in localhost:${port}`);
});