

function solucao(produtos) {
    let produtoTotal = 0
    let produtoTopTotal = 0
    let percentual = 0
    
    for (let i = 0 ; i < produtos.length ; i++){
    if ( produtos[i].preco > 10000){
       produtoTopTotal += produtos[i].preco 
     }
     produtoTotal += produtos[i].preco 
    }
    
    
    percentual = (produtoTopTotal / produtoTotal )
    
    
    console.log({totalTop: produtoTopTotal, percentual: percentual})
        
    }