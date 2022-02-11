class calculator {
    operand1;
    operand2;
    operation;
    result;

    setOperand1(_operand1){
        this.operand1 = _operand1
    }

    setOperand2(_operand2){
        this.operand2 = _operand2
    }

    setOperation(_operation){
        this.operation = _operation
    }

    getResult(){
        switch(this.operation){
            case'/':
                this.result = this.operand1 / this.operand2
                break
            case '*':
                this.result = this.operand1 * this.operand2
                break
            case '+':
                this.result = this.operand1 + this.operand2
                break
            case '-':
                this.result = this.operand1 - this.operand2
                break
        }
        return this.result
    }

    clearCalculator(){
        this.operation = ""
        this.operand1 = 0
        this.operand2 = 0
        this.result = 0
        $("#result").val("")
    }
}

const calc = new calculator()
const visor = $("#result")
let valor = ""

//iniciando a config de funcionamento da calculadora

$(".btn").click(function(){
    valor += this.value
    visor.val(valor)
})
//reconhecendo a operação
$(".oper").click(function(){
    calc.setOperation(this.value)
    
    calc.setOperand1(parseFloat(visor.val()))
    visor.val("");
    valor = ""
})
$(".igual").click(function(){
    calc.setOperand2(parseFloat(visor.val()))
    visor.val(calc.getResult())
    valor = ""
})

$(".clear").click(function(){
    calc.clearCalculator()
    valor = ""
})
