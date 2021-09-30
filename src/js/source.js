export default function handleData(listSource) {
  const handle = Object.values(listSource);
  const list = Object.values(handle);

  const paciente = [];

  list.map((value) => {
    let getName = value[0].split(";")[0];
    let getNameLab = value[0].split(":")[0];
    let getLocal = value[0].split(";")[1].split(" ")[1];
    let getHorario = value[1].split(" ")[1].split(".")[0].split(":");
    let getNovoHorario = `${getHorario[0]}:${getHorario[1]}`;
    let fullName = getName;
    let id = value[1].split(" ")[1]

    if (getName.length >= 5) {
      getName = getName.split(" ");
      getName = `${getName[0]}   ${getName[getName.length - 1]}`;
    }

    if(getName.includes("LAB_PREF")){
      getNameLab = `PREFERENCIAL - ${getNameLab}`
    }

    if (getLocal !== "DO") {
      return paciente.push({
        nome: getName,
        nomeCompleto: fullName,
        local: `Consultório: ${getLocal}`,
        horario: getNovoHorario,
        id: id
      });
    } else {
      return paciente.push({
        nome: getNameLab,
        nomeCompleto: getNameLab,
        local: "Laboratório",
        horario: getNovoHorario,
        id: id
      });
    }
  });
  return paciente;
}
