export default function handleData(listSource) {
  const handle = Object.values(listSource);
  const list = Object.values(handle);

  const paciente = [];

  list.map((value) => {
    let getName = value[0].split(";")[0];
    let getKey = value[0].split(":")[0];
    let getLocal = value[0].split(";")[1].split(" ")[1];
    let getHorario = value[1].split(" ")[1].split(".")[0].split(":");
    let getNovoHorario = `${getHorario[0]}:${getHorario[1]}`;
    let fullName = getName;
    let id = value[1].split(" ")[1]



    getName.includes("LAB") && handleLab() || getName.includes("MARC") && handleMarc() || handleAmb()


    if(getName.includes("LAB_PREF" || "MARC_PREF")){
      getKey = `PREFERENCIAL - ${getKey}`
    }



   function handleLab(){
      return paciente.push({
        nome: getKey,
        nomeCompleto: getKey,
        local: "Laboratório",
        horario: getNovoHorario,
        id: id
      });
    }

    function handleMarc(){
      
      return paciente.push({
        nome: getName.split(":")[0],
        nomeCompleto: getKey,
        local: `SAME - Guichê: ${value[0].split(";")[1]}`,
        horario: getNovoHorario,
        id: id
      });

    }

    function handleAmb(){
      return paciente.push({
        nome: getName,
        nomeCompleto: fullName,
        local: `Consultório: ${getLocal}`,
        horario: getNovoHorario,
        id: id
      });

    }


    if (getName.length >= 5) {
      getName = getName.split(" ");
      getName = `${getName[0]}   ${getName[getName.length - 1]}`;
    }


  });
  console.log(paciente)
  return paciente;
}
