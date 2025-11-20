// import bcrypt from "bcryptjs";
// console.log(bcrypt.compareSync("admin123", "$2a$10$xuG2hMP7Ey/n1FEbjjlHeOjPRnITSWMVBvQziuG2jVJozIhKkGdvO"));

import bcrypt from "bcryptjs";

const hash = bcrypt.hashSync("admin123", 10);
console.log("Generated:", hash);

console.log("Check:", bcrypt.compareSync("admin123", hash));
console.log(bcrypt.hashSync("admin123", 10));