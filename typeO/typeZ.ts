

declare function createObject(o:object |null):object;
function asignObject(o:object | number):object{
    return {in:o};
}
let c = asignObject(null);
let a:boolean = false;
a = true;
let b:number = 6.5;
b = 6;

let d = asignObject(6);
console.log(c);

function convertType(n:number):String{
    return n.toString();
}

let s:any = "hi";
const lenght:number = (<string>s).length;
lenght++;
console.log(lenght);
