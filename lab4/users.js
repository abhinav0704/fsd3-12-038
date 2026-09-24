// users.js
let users = [
  {
    id: 1,
    name: "Arpita",
    mob: "46545xxx81",
    email: "arpita.example@gmail.com",
  },
  {
    id: 2,
    name: "Aditi",
    mob: "46885xx266",
    email: "aditi.example@gmail.com",
  },
  {
    id: 3,
    name: "chota aayush ",
    mob: "876543",
    email: "ik3adfsdk324353425@gmail.com",
  },
];

let nextId=3;
const getAllUsers=()=>{
    return users;
}
const getUserById=(pid)=>{
users.find((user)=>user.id==pid)
return found;
}
export const getUsers=()=> users;
export const addUsers=(user)=>{
    user.id=nextId++;
    users.push(user);
    return user;
};

const updateUser=(pid,updateData)=>{
        const index=users.findIndex((user)=>user.id==pid)
        if(index==-1){
            return false;
        }
        updateData.id=pid;
        user[index]=updateData;
        return updateData;

}
// You can also export other functions later, like addUser, deleteUser, etc.
// abhishek is a badgay and he is not a complete boy