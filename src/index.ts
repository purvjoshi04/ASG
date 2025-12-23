import express, {type Express} from "express";
import os from "os";

export const app:Express = express();

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/cpu", (req, res) => {
    for(let i = 0; i < 100000000; i++) {
        Math.random();
    }
    res.send("Hello world");
});

app.get('/host', (req, res) => {
    res.send(os.hostname())
})