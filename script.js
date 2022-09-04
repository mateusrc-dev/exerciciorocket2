const students = [
  {
    name: "Mateus",
    noteOne: 7.5,
    noteTwo: 7.2
  },
  {
    name: "Amanda",
    noteOne: 6.5,
    noteTwo: 4.2
  },
  {
    name: "Rosangela",
    noteOne: 8.8,
    noteTwo: 7.0
  },
  {
    name: "João",
    noteOne: 6.8,
    noteTwo: 5.9
  }
]

function media(note1, note2) {
  return ((note1 + note2) / 2).toFixed(1)
}
for (let i = 0; i < students.length; i++) {
  if (media(students[i].noteOne, students[i].noteTwo) >= 7) {
    alert(`
    A média do aluno(a) ${students[i].name} é: ${media(students[i].noteOne, students[i].noteTwo)}
    Parabéns ${students[i].name}, você foi aprovado(a) no concurso`)
  } else {
    alert(`
    A média do aluno(a) ${students[i].name} é: ${media(students[i].noteOne, students[i].noteTwo)}
    Não foi dessa vez, ${students[i].name}, Tente novamente!`)
  }
}