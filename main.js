var x = 14;

if(x > 12) {

    console.log(x);
    console.log('grooving with if');
}


else {
    console.log('too small');

}
// 1. initialize
// 2. Condition
// 3. Post Loop Action 
for(var i = 0; i < x; i++) {
    console.log(i);

}

function sayHello() {

    console.log('hi');
}
if(x % 2 === 0) {
    sayHello();
}

function evenOrOdd(){

    var y = 4; 

    if( y % 2 === 0) {

        console.log('even');
    }

    else {
        console.log('odd');
    }


}