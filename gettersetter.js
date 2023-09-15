class square{
    constructor(_legth){
        this.length=_legth;
        this.width=_legth;
        }
        get area(){
            return this.width * this.length;
        }
        set area(area)
        {
            this.width=Math.sqrt(area);
            this.length=this.width;
        }
}
let square1= new square(4);
console.log(square1.area)
square1.area=36;
console.log("width",square1.width)
console.log("length",square1.length)