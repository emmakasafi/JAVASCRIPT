 var regex=/\d321/
 var str1="users phone numbeer is 987654a3210";
 // \d only checks for numeric values
 var output=regex.exec(str1);
 console.log(output);