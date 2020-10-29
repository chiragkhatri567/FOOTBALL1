

var officers  =  [
    {  id:20, name: 'Venkatesh', years:14},
    {  id:21, name: 'Ragavi',years:8},
    {  id:22, name: 'Prasanth',years:7},
    {  id:23, name: 'Veeranaveen',years:6},
    ]
    
    var ids=officers.map(function (officer){
        return officer.id;
    })
    console.log(ids);
    
    var ids=officers.map((officer)=>{
        return officer.id;
    })
    console.log(ids);
    
    var totalYears = officers.reduce ( (total,year)=>{
        return total+year.years;
    },0);
    
    console.log(totalYears);
    
    var totalYears = officers.reduce ( (total,year)=>total+year.years,0);
    console.log(totalYears);
    