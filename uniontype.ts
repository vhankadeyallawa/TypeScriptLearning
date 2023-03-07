var sn: string | number;

sn = 'codemind';
sn = 100; 

type Test =
string | string[]            // easy to using code readblity ,code standerd

function formatCommandLine(input: Test){         //string | string[]) {     // nrrmal use input: any ,after union using string | string[]  //function declaration & arguments  
    let line = '';
    if (typeof input === 'string') {         //=== means cheack values as well as data type
        line = input.trim();
    }
     
    else {
        line = input.map(x => x.trim()).join(' ');
    }
    return line;
}
console.log(formatCommandLine('hello ')); // hello
console.log(formatCommandLine(['hello ', 'world '])); // helloword
// console.log(formatCommandLine(123457));

// class Person1 {
//     public fname: string;
//     public age: number;

//     // parameterised constructor .
//     constructor(fname: string, age: number) { //not using class prperty
//         this.fname = fname;
//         this.age = age;
//     }
// }

// const jack = new Person1('Jack', 30);
// console.log(jack.fname, jack.age);
// }

class Person1 {
    
    // parameterised constructor .
    constructor(public fname: string,public age: number) {   //using class parameter proprty..... standerd code
        
    }
}

const jack = new Person1('Jack', 30);
console.log(jack.fname, jack.age);

//json strict.ts
// function add(first: number, second: number){ 
//     return second + first;
// }

// add(1 , 2);

// add('hello', 'word'); 

// let empId : number   = 101;

// empId = null;