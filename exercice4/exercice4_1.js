//exercice1
var user = {
  name: "Pedro",
  lastName: "Sánchez",
  age: 45,
  profession: "Barro man",
};

console.log(userName(user));

function userName(user) {
  const { name, lastName } = user;
  return "Me llamo " + name + " " + lastName;
}
