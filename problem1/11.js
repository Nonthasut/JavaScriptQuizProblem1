let a;
let b = Infinity;
let c = Infinity;
let d = Infinity;
while (true) {
    a = prompt("Add data");
    if (Number(a) < b) {
        b = Number(a)
    }
    if (b < c) {
        c = Number(b)
        b = Infinity
    }
    if (c < d) {
        d = Number(c)
        c = Infinity
    }
    if (a === "stop") {
        alert(b + "," + c + "," + d)
        break;
    }

}