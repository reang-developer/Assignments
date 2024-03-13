var a;
var b;
var c;

function largest(a,b,c){
if(a>b && a>c){
    console.log("A is the largest number:" ,a);
}
else if(b>a && b>c){
    console.log("B is the largest number:" ,b);
}
else if (c>a && c>b){
    console.log("C is the largest number:" ,c);
}
else{
    console.log("All numbers are equal" ,a,b,c);
}
}

largest(a,b,c);