console.log("Helllo world!!!!!!!!!!!!1")

arr="i love my country";
let count=0;
function myfunc(msg){
    for(let i of msg){
        if (i ==="a"||i==="A"||i ==="e"||i==="E"||i ==="i"||i==="I"||i ==="o"||i==="O"||i ==="U"||i==="u"){
            count=count+1;
        }
    }
}
myfunc(arr)
console.log(count);

// ternary operatert

let x=prompt("Enter your age budyy!!");
let y= x>18 ? "You can vote budyy":"You cannot vote buddy";
console.log(y)









// #fibbonaci
function fibb(n){           
    if (n==0){
        return 0;
    }
    else if(n==1){
        return 1;
    }
    else{ return fibb(n-1)+fibb(n-2);

    }
}
let n=5;
x=fibb(n);
console.log(x)
