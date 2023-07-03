export  function average(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum = sum + numbers[i]
    }
//  return numbers.filter(n => (n + n.length) / n)
  return sum / numbers.length
}
