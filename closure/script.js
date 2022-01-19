function mult(x){
    let number = 0
         function operador(){
          number++
      if (number > 10){
              number = 0
      }
      
      console.log(number*x)
      }
      return operador
    }
    
    document.getElementById("bt1").onclick = mult(3)
    document.getElementById("bt2").onclick = mult(5)
    document.getElementById("bt3").onclick = mult(7)
    document.getElementById("bt4").onclick = mult(9)
