//meta characters are characters with special meaning e.g dot(.)

//.dot can only be used for one character
//* can be used to replace multiple characters

/*let regex= /we.come/;
let str1=" to our youtube channel.welcome back";
let output= regex.test(str1) ;
console.log(output);

let op=regex.exec(str1);
console.log(op);
*/


/*
let regex= /ch*l/;
let str1="welcome to our youtube channel.welcome back";
let output= regex.test(str1) ;
console.log(output);

let op=regex.exec(str1);
console.log(op);
*/

/*
//^ only returns true if the string starts with that word


//let regex= /^welcome/;
//let str1="welcome  to our youtube channel.welcome back";
let regex= /^welcome/;
let str1="to our youtube channel.welcome back";
let output= regex.test(str1) ;
console.log(output);

let op=regex.exec(str1);
console.log(op);
*/


//the dollar $ sign only returns true if the string ends with the given word

/*
let regex= /back $/;
let str1="welcome  to our youtube channel.welcome back";

let output= regex.test(str1) ;
console.log(output);

let op=regex.exec(str1);
console.log(op);

*/

// ? the optional character
//returns true if the last character, just before the ? exits or does not, but cannot be replaced by another character

let regex= /wel?come?/;
let str1="weicome  to our youtube channel.back";

let output= regex.test(str1) ;
console.log(output);

let op=regex.exec(str1);
console.log(op);





