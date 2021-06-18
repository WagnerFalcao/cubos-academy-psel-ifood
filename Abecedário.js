
function solucao(letra, palavras) {
    let resultado = 0
    
    
    
    for (let item of palavras){
      if(item[0] !== letra){
      resultado ++ 
    }
    }
    console.log(resultado)    
    }
    
    function processData(input) {
        const {letra, palavras} = JSON.parse(input)[0];
        solucao(letra, palavras);
    } 