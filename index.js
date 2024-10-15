import express from "express";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    next();
});

app.get("/", (req, res, next) => {
    res.sendFile("./index.html", {root: "."});
});

app.post("/", (req, res, next) => {
    console.log(req.body);
    res.sendStatus(201);
});

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
})