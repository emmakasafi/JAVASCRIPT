function student(){
    var regnumber=document.getElementById("reg").value;
    var myregnumber=/P15[1000-9999]2021/i
    if ((myregnumber.test(regnumber)))
    {
        alert("valid reg number"); 

    }
    else
    {
        alert("Invalid reg number");
    }
}