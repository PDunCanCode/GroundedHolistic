import bcrypt from "bcryptjs";

const users = [
  {
    name: "Paul David",
    email: "pause.duncna@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Maleficent",
    email: "maleficent@example.com",
    password: bcrypt.hashSync("maleficentpw", 10),
  },
  {
    name: "Azriel Abyss",
    email: "Azriel@exampl.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
