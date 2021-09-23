import listSource from "./saida.json";

const orderedList = listSource;

const paciente = [];

orderedList.map((value) => {
  let getName = value[0].split(";")[0];
  let getLocal = value[0].split(";")[1].split(" ")[1];
  let getHorario = value[1].split(" ")[1].split(".")[0].split(":");
  let getNovoHorario = `${getHorario[0]}:${getHorario[1]}`;

  return paciente.push({
    nome: getName,
    local: getLocal,
    horario: getNovoHorario,
  });
});

console.log(paciente);

export { paciente };
