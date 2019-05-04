//for loops

/* for(initialization;condition;increment){

    //run your statement
} */

/* for(let i = 0; i < 6; i++){
    console.log(i);
}
console.log('loop finished'); */

const names = ['Michael', 'Max', 'Kyle', 'Paul', 'John'];

for(let i = 0; i < names.length; i++){
    

    let html = `
        <li>${names[i]}</li>

    `;

    // console.log(html);
    document.write(html);

}