function aposenta (idadeAtual , idadeRequerida) {
    return idadeAtual >= idadeRequerida ? "A pessoa está apta a se aposentar por idade" : "A pessoa NÃO está apta a se aposentar por idade"
}
let verificaidade = aposenta (59, 60)
console.log(verificaidade)

