const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();
const app = express();
const docs = require('./apiDomumentation');
const swaggerUI = require("swagger-ui-express");

try {
    const db = require("./models");
    db.sequelize.sync();
} catch (error) {
    console.log(error);
}
// const db = require("./models");
// db.sequelize.sync();

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

// simple route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to sequelize & layered architechture application."
    });
});

// route for swagger open-api documentation
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(docs));
// route for swagger open-api documentation

require("./routes/tutorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});