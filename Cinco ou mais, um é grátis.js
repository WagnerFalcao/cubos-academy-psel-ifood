
function solucao(precos) {
    
    const resultadoSoma = (precos) => {
        let resultado = 0;
      const desconto = precos.length >= 5;
      
      precos.sort(function (primeiro, segundo){
            return primeiro - segundo;
      });
      
        for(i = 0; i < precos.length; i++){
            resultado += precos[i];
      }
      
      if(desconto){
          return resultado - precos[0];
      }
      
      return resultado;
    };
    
    const resultado = resultadoSoma(precos);
    
    console.log(resultado)
    }