const splat_date = new Date()
const splat = splat_date.getFullYear()
number = splat/4
number2 = splat/100
number3 = splat/400
if(number === Math.floor(number) && (number2 !== Math.floor(number2))){
  console.log("It's a leap year!")
}
else {
  if(number3 === Math.floor(number3)){
    console.log("It's a leap year!")
  }
  else {
    console.log("It's not a leap year!")
  }
}