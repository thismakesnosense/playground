class human{
    number:number = 0;
    increment(n:number):void{
        this.number++
    }
}
class student extends human{
   
}
const person = new student();
person.increment(5);
console.log(person.number);