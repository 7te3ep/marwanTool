import {Particul} from './Particul.js'

export class Simulation {
   constructor({p,q,size,limit,ctx,states,c,chart,dataset,lineChart,lineDataset}){
      this.states = states
      this.p = p
      this.q = q
      this.limit = limit
      this.particul = new Particul({state:states.rest})
      this.chart = chart
      this.dataset = dataset
      this.ctx = ctx
      this.c = c
      this.size = size
      this.lineChart = lineChart
      this.lineDataset = lineDataset
   }

   start(){
      this.dataset[0] = 0
      this.dataset[1] = 0
      this.dataset[2] = 0
      let first = Date.now()
      for (let i = 0; i < this.limit; i ++){
         this.step()
      }
      let end = Date.now()
      this.updateChart()
      this.drawAll()
      console.log(end-first)
   }

   updateChart(){
      this.particul.history.forEach((state)=>{
         this.dataset[state.value-1] += 1
      })
      this.lineDataset.length = 0 
      this.particul.history.forEach((item)=>this.lineDataset.push(item.value))
      this.chart.update()
      this.lineChart.update()
   }

   drawAll(){
      this.ctx.clearRect(0, 0, this.c.width, this.c.height) 
      let margin = this.size / 1.5
      if (margin > 10) margin = 10
      let x = margin
      let y = margin
      this.particul.history.forEach((particul)=>{
         this.ctx.fillStyle = particul.color
         this.ctx.beginPath();
         this.ctx.arc(x+this.size, y+this.size, this.size, 0 , 2 * Math.PI)
         this.ctx.fill()
         x += this.size*2 + margin
         if (x > this.c.width - this.size * 2){
            x = margin 
            y += this.size * 2 + margin
         } 
      })
   }

   step(){
      this.particul.update()
      if (this.particul.state.value == 1 && this.tryMutation(this.p)) this.particul.state = this.states.excited 
      else if (this.particul.state.value == 2 && this.tryMutation(this.q))this.particul.state = this.particul.disintegrates()
   }

   tryMutation(ratio){
      if (Math.random()<=ratio) return true
      else return false
   }
}