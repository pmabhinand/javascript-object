numarray =[10,20,30,40,30,20,50,30,60,70,10,40,80]
//w a p to print the number count
//output={10:2,20:2,30:3,.......}

output={}

for(let num of numarray){
    if(num in output){
        output[num]+=1
    }
    else{
        output[num]=1
    } 
}

console.log(output);

console.log('--------------------------------------------');


//array method

op={}
numarray.forEach(item =>item in op?op[item]+=1:op[item]=1);
console.log(op);
