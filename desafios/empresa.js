const user = {
  name: "Debora",
  business: {
    name: "Fantasia",
    color: "Azul",
    focus: "Programação",
    address: {
      street: "Rua ABC",
      number: 520,
    },
  },
};

console.log(
  `A empresa ${user.business.name} está localizada em ${user.business.address.street}, ${user.business.address.number}.`
);
