// let firstName="harkirat";
// let age =18;
// let isMarried= false

// console.log("this person is "+firstName+" and is "+age+" years old. Is he married? "+isMarried);


//* if else statement

// 

//* loops

// let answer = 0;
// for(let i=0; i<100; i++){
//     answer= answer +i;
//     console.log(answer);        

// }


//* Arrays

const ages = [18, 20, 22, 24, 26, 28, 30];
const numberOfpeople = ages.length;

for (let i=0; i<numberOfpeople; i++){
    
    if (ages[i] %2==0) {
        console.log(ages[i]);
    }
}

// //* write a program to find biggest number in array 

// const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const numberOfNumbers = numbers.length;





//* to find gender of person

const person1 = "Roshan";
const gender1 = "Male"
const person2 = "Harkirat";
const gender2 = "Female"

const personArray=["Roshan","Harkirat"];
const genderArray=["Male","Female" ];

for (let i=0; i<personArray.length; i++){
    if (genderArray[i]="male") {
        console.log(personArray[i]+" is a male");
    }
}




