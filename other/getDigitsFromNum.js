/**
 * SET n to 1
 * SET prevRem to 0
 * SET digits to stack
 *
 * WHILE true
 *  SET remainder to (num%10^n)
 *  SET digit
 *  ADD digit to digits
 *  IF num/10^n is less than 1 then break
 *  SET prevRem to remainder
 *  INCREMENT n by 1
 * ENDWHILE
 *
 * RETURN digits
 *
*/


function getDigits(num){

    let n = 1
    let prevRem = 0
    const digits = []

    while(n<10){
        const remainder = num%(10**n)
        const digit = (remainder - prevRem)/(10**(n-1))
        // console.log(digit)

        digits.push(digit)
        if(num/(10**n)<1) break;

        prevRem = remainder
        n++
    }
    return digits
}

console.log('0 ->' + getDigits(0))
console.log('000 ->'+ getDigits(000))
console.log('1 ->' +getDigits(1))
console.log('1234 ->'+ getDigits(1234))
console.log('100 ->'+ getDigits(100))
console.log('99 ->'+ getDigits(99))






















