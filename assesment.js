var a;
var b ;

function greatest(a,b){
    if( a > b ){
        console.log("A:",a, "is greater than B: ",b);
    }
    else if( b > a ){
        console.log("B: ",b, "is greater than A: ", a);
    }
    else {
        console.log ("Numbers are equal");
    }
    
}

greatest(a,b);
