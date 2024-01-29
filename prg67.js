pattern="ABCABBCCA"
//w a p to print the first recursive letter =A

character=Array.from(pattern)
console.log(character);

obj={}

for(let item of character){
    if(item in obj){
        console.log('first recursive letter is :',item);
        break
    }
    else{
        obj[item]=1
    }
}