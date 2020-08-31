function asignObject(o) {
    return { "in": o };
}
var c = asignObject(null);
var a = false;
a = true;
var b = 6.5;
b = 6;
var d = asignObject(6);
console.log(c);
function convertType(n) {
    return n.toString();
}
var s = "hi";
var lenght = s.length;
lenght++;
console.log(lenght);
