//a static method does not need an instance of a class to be created so as to be used.
class square{
    constructor(_width){
        this.width=_width;
        this.length=_width;
    }
    static equals(a,b){
        return a.width * a.length===b.width * b.length;
    }
    static isvalid(width,length){
        return width===length;
    }
}
let square1=new square(8);
let square2=new square(8);
console.log(square.equals(square1,square2)); 
console.log(square.isvalid(6,6));
