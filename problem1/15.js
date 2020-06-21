let number = prompt("Add number")
let last;
let result = "";
function reverseNum(number) {
    if (number >= 0) {
        for (i = 0; i < number.length + 1; i++) {
            last = number.slice(number.length - i, number.length - i + 1)
            result += last
        }
        alert(result)
    } else if (number < 0) {
        for (i = 0; i < number.length ; i++) {
            last = number.slice(number.length - i, number.length - i+1)
            result += last
        }
        alert("-"+result)
    }

} reverseNum(number)