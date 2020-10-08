const developer = {
  name: "Debora",
  ages: 17,
  technology: [
    { name: "JavaScript", specialty: "Desktop" },
    { name: "JavaScript", specialty: "Web / Celular" },
  ],
};

console.log(
  `O usuário ${developer.name} tem ${developer.ages} anos e usa uma tecnologia ${developer.technology[0].name} com especialidade em ${developer.technology[0].specialty} .`
);
