function staircase(n) {
  // Write your code here
  let stringOne = '#'
  let stringTwo = ' '
  for (let i = 1; i <= n; i++) {
    console.log(stringTwo.repeat(n-i) + stringOne.repeat(i));
  }

}

