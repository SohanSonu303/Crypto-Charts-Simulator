async function makechart(labelss,datat){
    console.log('array values',labelss,datat);
    new Chart(document.getElementById("myChart"), {
        type: 'line',
        data: {
        //   labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        labels: labelss,
          datasets: [
            {
              label: "Price in USD",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            //   data: [2478,5267,734,784,433]
            data: datat
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
          }
        }
    });

}