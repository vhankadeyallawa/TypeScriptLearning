confirm('please enter the marks?');
var num1 = Number(prompt('Maths Marks:'));
console.log(`Maths marks:${num1}`);

var num2 = Number(prompt('Physics Marks'));
console.log(`Physicas marks:${num2}`);

var num3 = Number(prompt('chemistry Marks'));
console.log(`chemestry marks:${num3}`);

console.log("Total Addition of  marks:");
console.log(num1 + num2 + num3);

var Avarage =(num1+num2+num3)/3;
console.log("The Avarage of three subjects :"+Avarage);

if (Avarage<70) {
    console.log(`The grade is C`);

} else if((Avarage>70<90)){
    
    console.log(`The grade is B`);
    
} else if(Avarage>90) {

    console.log(`Congratulations your grade is A`)
}
 else {
    
    console.log(`Low grade`);

}
