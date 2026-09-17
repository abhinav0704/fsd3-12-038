import http from "http";
import { getUsers, addUser } from "./users.js"; // import both functions

const server = http.createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    res.end(JSON.stringify(getUsers()));
  } else if (req.url === "/api/users" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const user = JSON.parse(body); // parse incoming JSON
      const userCreated = addUser(user); // call addUser
      res.end(JSON.stringify({ msg: "user added", userCreated }));
    });
  } else if (req.url === "/api/users/1" && req.method === "GET") {
    res.end(JSON.stringify({ msg: "single user with id 1" }));
  } else if (req.url === "/api/users/1" && req.method === "PUT") {
    res.end(JSON.stringify({ msg: "update user 1" }));
  } else if (req.url === "/api/users/1" && req.method === "DELETE") {
    res.end(JSON.stringify({ msg: "remove 1" }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ msg: "Not Found" }));
  }
});

server.listen(3000, () => console.log("prg7 is running"));
