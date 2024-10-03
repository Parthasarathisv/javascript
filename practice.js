let marks=[100,38,78,43,59,98,29,56,32,89,82,84];
 const greater =marks.filter((mark)=>mark>80)
 console.log(greater)
 console.log(greater.length)
 const less=marks.filter((mark)=>mark<35)
 console.log(less)
  console.log(less.length)
 const mark100=marks.filter((mark)=>mark==100)
 console.log(mark100.length)
 
 const comparefn=(a,b)=>a-b
 const comparefn1=(a,b)=>b-a
 marks.sort(comparefn)
 console.log(marks)
 marks.sort(comparefn1)
 console.log(marks)


