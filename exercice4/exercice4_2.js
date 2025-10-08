const user = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  salary: 1000,
  profesion: "Barro man",
};

function userData(user) {
  const annualSalary = calculateAnnualSalary(user.salary); 
  const fullName = userName(user); 

  return `${fullName} y cobro ${annualSalary}€ al año`;
}

function userName(user) {
  const { name, lastName } = user;
  return "Me llamo " + name + " " + lastName;
}

function calculateAnnualSalary(salary) {
  return salary * 12;
}

console.log(userData(user));