const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
// const multer = require('multer');
const bodyParser = require('body-parser');

const db = require('./config/key');
const blog = require('./routes/api/blog');
const users = require('./routes/api/newUser');

const app = express();

app.use(express.static(path.resolve(__dirname, "../dist")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// Multer


mongoose.connect(db.mongoURI, {
        useNewUrlParser: true
    })
    .then(console.log("db connected"))
    .catch(e => console.log("error", e))

app.use("/api/blog", blog);
app.use("/api", users);

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist/index.html"))
})

const Port = process.env.PORT || 4000;
app.listen(Port, () => console.log(`Server is running at ${Port}`));