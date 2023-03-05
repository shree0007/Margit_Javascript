function randomNum(){
    const numberOne = Number(prompt("first number"));
    const numberTwo = Number(prompt("second number"));
    const numberThree = Number(prompt("third number"));

    if (numberOne>=0 || numberTwo>=0 || numberThree>=0){
        console.log(`sum of numbers is ${numberOne+numberTwo+numberThree}`);
    }
    if (numberOne>=0 && numberTwo>=0 && numberThree>=0){
        console.log(`multiplication of numbers is ${numberOne*numberTwo*numberThree}`);
    }
    else if (numberOne<0 && numberTwo<0 && numberThree<0){
        console.log("Only negatives");
    }

}
randomNum();



// alternative shorter method !!

//function randomNum(){
//const numberOne = Number(prompt("first number"));
  //  const numberTwo = Number(prompt("second number"));
    //const numberThree = Number(prompt("third number"));

    //const sum=numberOne+numberTwo+numberThree
    //const multiply=numberOne*numberTwo*numberThree

    //if (numberOne>=0 || numberTwo>=0 || numberThree>=0){
      //  console.log(`sum of numbers is ${sum}`);
    //}
    //if (numberOne>=0 && numberTwo>=0 && numberThree>=0){
      //  console.log(`multiplication of numbers is ${multiply}`);
    //}
    //else if (numberOne<0 && numberTwo<0 && numberThree<0){
      //  console.log("Only negatives");
    //}

//}
//randomNum();


