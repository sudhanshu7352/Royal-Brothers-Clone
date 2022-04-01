const express = require('express');
const connect = require("./configs/db");
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();

const port = process.env.PORT || 80;

const { login, register } = require("./controllers/auth.controller");


app.use(cors(corsOptions));

app.use(express.json());


app.post("/register", register);

app.post("/login", login);

app.listen(port, async () => {
    try{
        await connect();
        console.log(`Server is running on port ${port}`);
    } catch(err) {
        console.log(err);
    }
})

