
function solucao(obj) {
	if (!obj.temIngresso) {
   console.log("ACESSO NEGADO")
   
 } else if (obj.idade >= obj.censura || obj.estaComPais) {
      
   if(obj.idade < 18){
           console.log("MEIA")
   } else if (obj.temCarteirinha){
           console.log("MEIA")
   }else{
           console.log("INTEIRA")
   }
   
 } else {
   console.log("ACESSO NEGADO")
 }
}
