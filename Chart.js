let dataset = [
   0, 0, 0
]

let lineDataset = [
   1,2,3,4,5,6,7,8
]

let chart =  new Chart(document.getElementById('chart'), {
   type: 'bar',
   data: {
     labels: ['Repos', 'Exité'],
     datasets: [{label: 'States of the particul',data:dataset ,borderWidth: 1,backgroundColor: [ '#36a3ebc0','#ff6385c5'],}]},
     options: {scales: {y:{beginAtZero: true }}, responsive: true}
});

let lineChart =  new Chart(document.getElementById('lineChart'), {
   type: 'line',
   data: {
     labels: test(10000) ,
     datasets: [{label: "State",data:lineDataset ,borderWidth: 1,backgroundColor: [ '#36a3ebc0','#ff6385c5'],}]},
     options: {scales: {x: { type: 'linear'}}, responsive: true}
});

function test(len){
   console.log('UPDATE');
   let arr = []
   for (let i = 0;i<len;i++){
      arr.push(i)
   }
   return arr
}

export {chart,lineChart,dataset,lineDataset}