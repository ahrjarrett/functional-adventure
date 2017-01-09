// #1: SUM

/* imperative implementation */
function sum(numbers) {
  let sum = 0
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


// #2: DOM MANIPULATION

/* side-effects */
function updateView() {
  let sum = 0

  document.querySelectorAll('.line-item').each(function(){
    sum += Number(this.innerHTML)
  })

  document.querySelector('.total').text(sum)
}

/* more responsible side-effects */
function getNumbers(collection) {
  return collection.map(function(){
    return Number(this.innerHTML)
  })
}

function updateView2() {
  document.querySelector('.total')
    .text(sum(getNumbers(document.querySelectorAll('.line-item'))))
}
