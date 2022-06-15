import express from "express";

export const app = express();

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

