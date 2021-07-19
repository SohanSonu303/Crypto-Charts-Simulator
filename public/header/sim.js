let mon_val=0;
let xlabels;
let ylabels;
async function myfun(){
  await clicked();
  await getcurrentprice();
const labels = xlabels;
  const data = {
    labels: labels,
    datasets: [{
      label: 'Sonu Coin',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: ylabels,
    }]
  };
  const config = {
    type: 'bar',
    data,
    options: {
      scales: {
        y: {
            
            suggestedMax: 60
        }
    }
    }
  };
  var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
  

  setTimeout(function(){
    myChart.destroy();
    
    myfun();
  }, 10000);
}
myfun();

async function clicked(){
  const but_cl=await fetch('/getsimdata');
  const butt=await but_cl.json();
  xlabels=butt.m_fi_lab;
  ylabels=butt.yvalues;
}

function getylabels(){
  return ylabels[11];
}
