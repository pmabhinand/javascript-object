products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only

for(let pro of products){
    console.log(pro.pName);
}

console.log('-------------------------------');

// using array method  :   products.map(num=>num.pName).forEach(num1=>console.log(num1))


//2. print all mobile details whose display is lcd

/*for(let pro of products){
    if(pro.display=='lcd'){
        console.log(pro);
    }
}
console.log('-----------------------------');
*/
//using array method

products.filter(data=>data.display=='lcd').forEach(item=>console.log(item))
console.log('------------------------------------');




//3. print 5g mobile phone name

for(let pro of products){
    if(pro.band=='5g'){
        console.log(pro.pName);
    }
}
console.log('-----------------------');

//using array method :        products.filter(data=>data.band=='5g').forEach(num=>console.log(num.pName))



//4. sort mobile based on price

products.sort((num1,num2)=>num1.price-num2.price).forEach(item=>console.log(item.pName))


console.log('------------------------------');



//5. print costly mobile

cos=products.reduce((num1,num2)=>num1.price>num2.price?num1:num2)
console.log(cos.pName);

console.log('---------------------------------------------');


//6. print low cost mobile

low=products.reduce((num1,num2)=>num1.price<num2.price?num1:num2)
console.log(low.pName);