// if statements

/* if(condition){
//run your statement
} */
let age = 25;

// if(age > 20){
//     console.log('Your age is incorrect!');
// }

let password = 'password123';

if(password.includes('@')){
    console.log('Your password is correct!');
}else if(password.length < 8){
    console.log('Your password is not strong enough');
}
else{
    console.log('Your Password is incorrect');
}