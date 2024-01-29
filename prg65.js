text="hai hello all hello world"

//w a p to print the word count from the given string
//output={hai:1,hello:2,all:1,world:1}



textarray=text.split(' ')
console.log(textarray);

wc={}

for(let item of textarray){
    if(item in wc){
        wc[item]+=1
    }
    else{
        wc[item]=1
    }
}

console.log(wc);

console.log('---------------------------------');



//using array method

wc1={}

text.split(' ').forEach(item=>item in wc1?wc1[item]+=1:wc1[item]=1);
console.log(wc1);

console.log('-----------------------------------------');





