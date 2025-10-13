let t1 = [1,2,3];
let t2 = [2,2,2];
let t3 = [1,2,3,4,5,6];

//SUM
console.log(t1.reduce((acc,t1) => acc + t1,0));
console.log(t2.reduce((acc,t2) => acc + t2,0));
console.log(t3.reduce((acc,t3) => acc + t3,0));

console.log("-----------------------");

//SUM ODDS
console.log( t1 ? 
    t1.filter((t1) => t1 & 1).reduce((acc,t1) => acc+t1,0) 
    : NaN);
console.log( t2 ?
    t2.filter((t2) => t2 & 1).reduce((acc,t2) => acc + t2,0)
    : NaN);
console.log( t3 ?
    t3.filter((t3) => t3 & 1).reduce((acc,t3) => acc + t3,0)
    : Nan);

console.log("-----------------------");

//PRODUCT
console.log(t1.reduce((acc,t1) => acc*t1,1));
console.log(t2.reduce((acc,t2) => acc*t2,1));
console.log(t3.reduce((acc,t3) => acc*t3,1));
