let marks=[100,38,78];
let sum=marks.reduce((previousValue,CurrentValue)=>previousValue+CurrentValue,0)
let sum1=marks.reduceRight((previousValue,CurrentValue)=>{
     previousValue=previousValue+CurrentValue;
     console.log(CurrentValue);
     return previousValue
},0);
//previousvalue=0
//currentvalue=100[previousvalue=previousvalue+currentvalue] [prevoius value=0+100][pv=100]
//currentvalue=38 =>38+100=138
//currentvalue=78=>78+138=216

console.log(sum)
console.log(`sum=${sum1}`);

//reduceRight