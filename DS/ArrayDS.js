//using contructor
function Array(){
    this.node = {};
    this.size = 0;
    this.add = (x)=>{this.node[++(this.size)] = x};
    this.get = (index)=>{return this.node[index]};
    this.remove = (index)=>{delete this.node[index]; (this.size)--}
}
/*
//Usage
let array = new Array();
array.add(10);
console.log(array);
console.log(array.get(1));
array.remove(1);
console.log(array);
*/