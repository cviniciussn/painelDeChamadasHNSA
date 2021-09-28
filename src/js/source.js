//import listSource from "./saida.json";
export default function handleData(listSource) {
const handle = Object.values(listSource)
const list = Object.values(handle)

  const paciente = [];

  list.map((value) => {
    let getName = value[0].split(";")[0];
    let getLocal = value[0].split(";")[1].split(" ")[1];
    let getHorario = value[1].split(" ")[1].split(".")[0].split(":");
    let getNovoHorario = `${getHorario[0]}:${getHorario[1]}`;
    let fullName = getName;

    if (getName.length >= 4) {
      getName = getName.split(" ");
      getName = `${getName[0]}   ${ getName[getName.length - 1] }`;
    }

    if (getLocal !== "DO") {
      return paciente.push({
        nome: getName,
        nomeCompleto: fullName,
        local: getLocal,
        horario: getNovoHorario,
      });
    } else {
      return;
    }
  });
  return paciente;
}
