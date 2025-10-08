const user = {
  name: "Álvaro",
  last: "Morón",
  age: 30,
  nationality: "Morocco",
};

const nationalityNotAviable = "España";
const minimunAge = 30;

function foreigner(user) {
  if (user.nationality !== nationalityNotAviable) {
    if (user.age === minimunAge) {
      return "Apto para la ayuda del gobierno";
    } else {
      return "No es apto para la ayuda del gobierno";
    }
  } else {
    return "No es apto para la ayuda del gobierno";
  }
}

console.log(foreigner(user));
