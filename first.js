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
