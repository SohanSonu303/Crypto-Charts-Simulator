let chartlabels=[];
let chartdata=[];
async function checkingpastdata(){
   const datafromapi= await fetch('/getapidata');
   const data=await datafromapi.json();
   console.log(data[0].values);
   

   for(i in data[0].values){
       chartdata.push(data[0].values[i].high);
       //console.log(data[0].values[i].high);
       chartlabels.push(data[0].values[i].datetime);
   }
   makechart(chartlabels,chartdata);

}
checkingpastdata();

