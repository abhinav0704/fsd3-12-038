// users.js
let users = [
  {
    id: 1,
    name: "Aman Yadav",
    mob: "46545xxxxx",
    email: "aman.example@gmail.com",
  },
  {
    id: 2,
    name: "Amey Yadav",
    mob: "46885xxxxx",
    email: "amey.example@gmail.com",
  },
];

let nextId = 3;

// Named export
export function getUsers() {
  return users;
}

// You can also export other functions later, like addUser, deleteUser, etc.
