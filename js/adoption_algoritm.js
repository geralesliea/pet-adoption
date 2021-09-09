function GetValue(params) {
  let value = params.options[params.selectedIndex].value;
  return value
}

function AdoptionAlgoritm(params) {
  let answer_one = document.getElementById("answer-one")
  let answer_two = document.getElementById("answer-two")
  let answer_three = document.getElementById("answer-three")
  let answer_four = document.getElementById("answer-four")
  let answer_five = document.getElementById("answer-five")

  let value_1 = GetValue(answer_one)
  let value_2 = GetValue(answer_two)
  let value_3 = GetValue(answer_three)
  let value_4 = GetValue(answer_four)
  let value_5 = GetValue(answer_five)

  console.log("value_1", value_1, value_2, value_3, value_4, value_5)
  let result = document.getElementById("result")
  if (value_1 == "Casa" && value_2 == "Si" && value_3 == "Si" && value_4 == "No" && value_5 == "Si") {
    result.innerHTML = 'tu mascota elegida es perro'
    console.log("te toco perro")
  }
  else if(value_1 == "Departamento" && value_2 == "No" && value_3 == "Si" && value_4 == "No" && value_5 == "No"){
    result.innerHTML = 'tu mascota elegida es gato'
    console.log("te toco gato")
  }
  else{
    result.innerHTML = 'todavia no tenemos una mascota para ti'
    console.log("todavia no tenemos una mascota para ti")
  }
}