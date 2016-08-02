function fizzbuzz(number) {
  var output = ''

  if(number % 3 == 0)
    output += 'Fizz'

  if(number % 5 == 0)
    output += 'Buzz'

  return output || number
}

for(i = 0; i < 100; i++){
  console.log(fizzbuzz(i))
}
