/* imperative implementation */
function sum(numbers) {
  const sum = 0
  for (let i = 0, l = numbers.length; i < l; i++) {
    sum += numbers[i]
  }
  return sum
}

/* functional implementation */
function sum2(numbers) {
  return numbers.reduce(function(sum, num) {
    return sum + num
  }, 0)
}
