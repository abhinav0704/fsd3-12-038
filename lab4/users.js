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
    name: "Aditi",
    mob: "46885xxxxx",
    email: "aditi.example@gmail.com",
  },
];

let nextId = 3;

// Named export
export const getUsers = () =>
 users;

export const addUser = (user) => {
  user.id = nextId++; // assign a new unique id
  users.push(user); // add the user to the array
  return user; // return the newly added user
};

// You can also export other functions later, like addUser, deleteUser, etc.
