
//1 Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)

for (let i=1; i<100; i+=2){
    console.log(i);
}

console.log('#########');

//2 Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line.

let answer= ' ';
let end= 98;

for (let i=2; i<100; i+=2){
    answer += ' ' + i + ' ';
    answer += ' ' + end + ' ';
    end -= 2;
}
console.log(answer);

console.log('#########');

//3 Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)

let distance, time;

while (distance !=0){
    distance = Number (prompt('Enter distance in km'));

    if (distance==0){
        console.log('distance 0 - game over');
        break;
    }

    time = Number (prompt('Enter times in h'));
    let average = distance/time;
    console.log('average is :', average);
}




//4 Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.

let count=0;
for(let i=0; i<20; i++ ){
    let num=Number(prompt('Enter a number'));
    if (num%2==0){
        count++;
    }
    
}
console.log(`The number of even numbers is ${count}`);



//5 Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers.


let num;
let avg;
let sum=0
let countM=0;
while (num!==0){
    num=Number(prompt('Enter a number'));

    if (num==0){
     console.log('game over');
     break;

    }
    countM++;
    sum=sum+num;
    avg= sum/countM;

    
}
console.log('Average',avg);



//6 Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.

let avrg;
let countN=0;
let sumN=0;


for (i=0; i<25; i++){
    let numN= Number(prompt('Enter a number'));

    countN++;
    sumN=sumN+numN;
    avrg= sumN/countN;
}
console.log('Average is', avrg);


//7 Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.








//8 Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave.

//9 Make a program that asks ten numbers and in the end prints out two biggest numbers.

//10 Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number.




