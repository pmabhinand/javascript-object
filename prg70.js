accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]


//1. total number of accounts

console.log('total number of accounts');
console.log(accounts.length);

console.log('---------------------------------------');




//2. print account number whose ac_type is savings

accounts.filter(num=>num.ac_type=='savings').forEach(data=>console.log(data.acno))
console.log('-------------------------------------------');






//3.print the balance of accnount number 1000

data=accounts.find(ac=>ac.acno==1000)
console.log(data.balance);

console.log('---------------------------------------');




//4. print all gpay transactions

acc=accounts.map(data=>data.transaction)
console.log(acc.flat().filter(item=>item.mode=='gpay').forEach(num=>console.log(num)));

console.log('------------------------------------------');




  
//5. print all transaction whose amount > 5000

acc=accounts.map(data=>data.transaction)
console.log(acc.flat().filter(item=>item.amount>5000).forEach(num=>console.log(num)));

console.log('------------------------------------------');





 
//6. print credit transaction of account 1002

credittrans=accounts.map(data=>data.transaction).flat().filter(item=>item.to==1002)

console.log(credittrans);

console.log('--------------------------------------------');





 
//7. print debit transaction of account 1002

debittrans=accounts.find(data=>data.acno==1002).transaction
console.log(debittrans);

console.log('---------------------------------------------');


//8. print transaction history of 1002

his={
    credit:credittrans,
    debit:debittrans
}
console.log(his);
console.log('------------------------------------------');

//another method ,array

hist=[credittrans,debittrans]
console.log(hist);

console.log('----------------------------------------');




//9. print highest balance account details

high=accounts.reduce((num1,num2)=>num1.balance>num2.balance?num1:num2)
console.log(high);