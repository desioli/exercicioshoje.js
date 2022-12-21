const calculatorOfIMC = (height, weight) => {
    const result = weight / (height * height)
    
    if (result < 18.5) {
        return "Abaixo do peso\n"
    } else if (result > 18.5  &&  result < 24.9) {
        return "Normal\n"
    } else if (result > 24.9 && result < 30) {
        return "Sobrepeso\n"
    } else if (result > 30) {
        return "Obesidade\n"
    } 
}

console.log(calculatorOfIMC(1.65, 82)) 
