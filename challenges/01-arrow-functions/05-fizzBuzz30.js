//assign fizzBuzz30 an arrow function that does not take any inputs.  fizzBuzz30 should output an array of all the numbers from
//1 through 30 replacing numbers divisible by 3 with 'fizz', numbers divisible by 5 with 'buzz' and numbers divisible by 3 and 5 with
//'fizzbuzz'

let fizzBuzz30 = () => {
    let result = []
    for (let i = 1; i <= 30; i++) {
        if ( i % 15 === 0) {
            result.push('fizzbuzz')
        } else if ( i % 5 === 0){
            result.push('buzz')
        } else if ( i % 3 === 0){
           result.push('fizz') 
        } else {
            result.push(i)
        }
    }
    return result 
}








//Do not edit
module.exports = fizzBuzz30;