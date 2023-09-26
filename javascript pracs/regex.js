/*
var regex =/java/
var sentence="I am learning javascript";
var output=regex.exec(sentence);
console.log(output);
// regular expressions are case sensitive, but can be made uncase sensitive using the modifier

var regex= /LEARN/i
var sentence="I am learning javascript";
var output=regex.exec(sentence);
console.log(output);
*/

/*var word=/Emma/g
var string="My name is Emma. Could you please say hi to Emma kindly";
 var result=word.exec(string);
 
 console.log(result);
 result=word.exec(string);
 console.log(result);

 result=word.exec(string);
 console.log(result);
 */

 /*var word = /Emma/g;
var string = "My name is Emma. Could you please say hi to Emma kindly";

var result;
while ((result = word.exec(string)) !== null) {
  console.log("Index:", result.index);
}
*/

//the test () this only returns a boolean value, true or false , if the regular expression exists
/*var regex=/her/i
var mystring="Hi there";
var output=regex.test(mystring);
console.log(output);
*/

//match () 
//we pass the regular expression as a parameter
/*var regex=/there/g
var mystring="Hi there.say hello there.hi there";
var output =mystring.match(regex);
console.log(output);
*/

//the replace function
var regex=/there/g
var mystring="Hi there.say hello there.hi there";
var output=mystring.replace(regex,"their");
console.log(output);








