let n = prompt("Add n")
let x = 0
let y = 1
let newX;
let newY;
//0 1 1 2 3 5 8 13...
//x y newX newX newX...
function result(n) {
        if (n == 1) {
            alert(x)
        } else if (n == 2) {
            alert(y)
        } else if (n != 1 && n != 2) {
            for (i = 2; i < n; i++) {
            newX=x+y
            x=y
            y=newX
            }alert(newX)
        }
} result(n)