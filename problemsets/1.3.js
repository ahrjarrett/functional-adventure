// pure
function sum(numbers) {
  return numbers.reduce(function(sum, num) {
    return sum + num
  }, 0)
}

// pure
funtion getNumbers(coll) {
  return coll.map(function() {
    return Number(this.innerHTML)
  })
}

// impure - wiring
function updateView() {
  document.querySelector('.total')
    .text(sum(getNumbers(document.querySelectorAll('.line-item'))))
}

