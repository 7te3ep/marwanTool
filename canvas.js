const c = document.getElementById("canvas");
const ctx = c.getContext("2d");
c.width = 500
c.height = 500
ctx.clearRect(0, 0, c.width, c.height) 

export {ctx,c}