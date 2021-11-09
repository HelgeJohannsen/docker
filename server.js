'use strict';

const express = require('express');
const { join } = require("path");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(express.static(join(__dirname, "public")));

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.get("/auth_config.json", (req, res) => {
    res.sendFile(join(__dirname, "auth_config.json"));
});

app.get("/*", (_, res) => {
    res.sendFile(join(__dirname, "index.html"));
});

process.on("SIGINT", function() {
    process.exit();
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
