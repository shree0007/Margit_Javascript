//Make a program that ask for one number from the user. Then the program finds out if the number is positive and if the number is divisible by 2. Message ‘’number .. is even” is printed else “number … is odd” is printed.


function oddOreven(){
    const oneNumber= Number (prompt("Give me one number"));

    if (oneNumber >=0 && oneNumber%2==0){
        console.log(`${oneNumber}  is even`);
    }

    else if (oneNumber>=0 && oneNumber%2 !==0){
        console.log(`${oneNumber}  is odd`);
    }
    else{
        console.log(`${oneNumber}  is negative number`);
    }
}
oddOreven();


//Another way of doing:

//const oddEven = () => {
  //  let num = Number(prompt('Enter your number'));
    //let text;
  
    //if (num >= 0 && num % 2 == 0) {
      //text = `${num} is even`;
    //} else if (num >= 0 && num % 2 !== 0) {
      //text = `${num} is odd`;
    //} else {
      //text = `${num} is negative number`;
    //}
    //alert(`Number ${text}`);
  //};
