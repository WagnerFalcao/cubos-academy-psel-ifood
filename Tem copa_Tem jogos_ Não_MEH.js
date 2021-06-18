
function solucao(ano) {
	let primeiraCopa = 2022


let resposta = "JOGOS"

if (ano % 2 != 0 ){
  resposta = "MEH"
}else {
  while ( primeiraCopa <= ano  ) {
    if ( primeiraCopa == ano ){
      resposta = "COPA"
    }
      primeiraCopa += 4
  }
}

console.log(resposta)
}