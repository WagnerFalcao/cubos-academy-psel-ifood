function solucao(tempo, distancia) {
	
    if (tempo < 5 ){
      calculoViagem = 600
    }else if ( tempo >= 5 && tempo <= 60 ){
        calculoViagem = (tempo * 100) + (distancia * 50)
    }else {
    
      if (distancia < 100){
        calculoViagem = (distancia * 2) *100
      }else {
        calculoViagem = (distancia * 1.5)*100
      }
    }
    
    console.log(calculoViagem )
    
    }