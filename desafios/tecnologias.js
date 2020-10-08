const usuarios = [
  { nome: "Debora", tecnologias: ["HTML", "CSS"] },
  { nome: "Luisa", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Zandonai", tecnologias: ["HTML", "Node.js"] },
];

for (let usuario of usuarios) {
  console.log(
    ` ${usuario.nome} trabalha com ${usuario.tecnologias.join(",")} `
  );
}

// Busca por tecnologia
function checaSeUsuarioUsaCSS(usuario) {
  for (let tecnologia of usuario.tecnologias) {
    if (tecnologia == "CSS") return true;
  }

  return false;
}

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
  }
}
