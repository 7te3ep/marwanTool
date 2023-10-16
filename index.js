import {Simulation} from './Simulation.js'
import {ctx,c} from './canvas.js'
import { chart,lineChart, dataset,lineDataset } from './Chart.js'

let simulation

const size = document.getElementById('size')
const sizeValue = document.getElementById('sizeValue')
const limit = document.getElementById('limit')
const limitValue = document.getElementById('limitValue')
const start = document.getElementById('start')
const P = document.getElementById('P')
const Pvalue = document.getElementById('Pvalue')
const Q = document.getElementById('Q')
const Qvalue = document.getElementById('Qvalue')

size.addEventListener('input',(e)=>{
   if (!simulation) return
   simulation.size =parseInt(size.value)
   sizeValue.innerHTML =parseInt(size.value)
   simulation.drawAll()
})

limit.addEventListener('input',(e)=>{
   if (!simulation) return
   limitValue.innerHTML =parseInt(limit.value)
})

P.addEventListener('input',(e)=>{
   if (!simulation) return
   Pvalue.innerHTML =parseFloat(P.value)
})

Q.addEventListener('input',(e)=>{
   if (!simulation) return
   Qvalue.innerHTML =parseFloat(Q.value)
})

const states = {
   rest:{value:1,color:'#36a3ebc0'},
   excited:{value:2,color:'#ff6385c5'},
   disintegrates:{value:3,color:'#cb65febd'}
}
start.addEventListener('click',()=>{
   startSim()
})
startSim()


function startSim(){
   simulation = new Simulation({p:parseFloat(P.value),q:parseFloat(Q.value),size:parseInt(size.value),limit:parseInt(limit.value),ctx:ctx,states:states,c:c,chart:chart,dataset:dataset,lineChart:lineChart,lineDataset:lineDataset})
   simulation.start()
}