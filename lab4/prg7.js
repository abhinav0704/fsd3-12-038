import http from "http";
import { addUsers, getUsers } from "./users.js";

const server = http.createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    res.end(JSON.stringify(getUsers()));
  } else if (req.url === "/api/users" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const user = JSON.parse(body);
      // console.log(user);
      const userCreated = addUsers(user);
      res.end(JSON.stringify({ msg: "add users", userCreated }));
    });
  } else if (req.url.startswith("/api/users/1") && req.method == "GET") {
    const userId = Number(req.url.split("/").pop());
    res.end(
      JSON.stringify({ msg: `showing details of users with id ${userId}` }),
    );
  } else if (req.url === "/api/users/1" && req.method === "PUT") {
    res.end(JSON.stringify({ msg: "update user 1" }));
  } else if (req.url === "/api/users/1" && req.method === "DELETE") {
    res.end(JSON.stringify({ msg: "remove 1" }));
  } else {
    res.statusCode = 404;
    res.end();
  }
});
server.listen(3000, () => console.log("prg7 is running..."));
