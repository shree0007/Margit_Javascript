function myFunction(c, a, b){
    return a+b+c;
}
function myFunction(){
    return 'Hello world';
}

myFunction1(1, 2, 3)
myFunction2();
myFunction3(a);


const myFunction4 = () => {
    return 'Hello world'
};

const myFunction5 = (a) => {
    return a;
};
const myFunction6 = (c, b, a) => {
    return a+b+c;
};

function awesomeFunction (a, b){
    return a+b;
}
const awesomeFunction = (a, b) => a + b;


myFunction4();
myFunction5('Hello world');
myFunction6(10, 11, 12);


