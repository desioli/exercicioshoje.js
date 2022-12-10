function fahrenheitToCelsius(fahrenheit){
    let celsius = +((5 * (fahrenheit - 32)) / 9).toFixed(2);
    return celsius;
  }
  
  console.log(fahrenheitToCelsius(fahrenheit = 102.2))