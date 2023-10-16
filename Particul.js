export class Particul {
   constructor({state}){
      this.state = state
      this.history = []
   }

   update(){
      this.history.push(this.state)
   }

   disintegrates(){
      return this.history[Math.floor(Math.random()*this.history.length)]
   }

}