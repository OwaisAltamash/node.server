// const os = require("os");
// console.log(os.homedir());

// const pokemon = require("pokemon");
// console.log(pokemon.all());

// ###################### server #########################
// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.end("Working")
// });

// server.listen(4000, "localhost", () => {
//     console.log("Server is working on http://localhost:4000)");
// });


// ############## but good practice is this #####################
const http = require("http");

const PORT = 2000;
const hostname = "localhost";

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        return res.end("<h1>HOME PAGE</h1>");
    }
    if (req.url === "/about") {
        return res.end("<h1>ABOUT PAGE</h1>");
    }
    if (req.url === "/contact") {
        return res.end("<h1>CONTACT PAGE</h1>");
    }
    if (req.url === "/service") {
        return res.end("<h1>SERVICE PAGE</h1>");
    }
    else{
        return res.end("<h1>Error 404 Page not found </h1>");
    }
});

server.listen(PORT, hostname, () => {
    console.log(`Server is working on http://${hostname}:${PORT})`);
});