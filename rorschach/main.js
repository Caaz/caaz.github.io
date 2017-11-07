var canvas;
var ctx;
var mobs = []
function Mob(self) {
  this.x = Math.random() * (canvas.width/2) + canvas.width/4
  this.y = Math.random() * (canvas.height/2) + canvas.height/4
  this.vel_x = Math.random() * 8 - 4
  this.vel_y = Math.random() * 8 - 4
  this.size = Math.random() * 40 + 5
  this.moves = true
  Object.assign(this,self)
  this.last_x = this.x
  this.last_y = this.y
  if(!this.moves && (Math.random() < .1)) {
    this.spawnStatic()
  }
}
Object.assign(Mob.prototype, {
  spawnStatic: function(){
    mobs.push((new Mob({
      moves:false,
      x: this.x + Math.random()*50-25,
      y: this.y + Math.random()*50-25,
      size: this.size + Math.random()*40
    })))
  },
  update: function() {
    if(this.moves) {
      this.x += this.vel_x
      this.y += this.vel_y
      var mid_x = canvas.width/2
      var mid_y = canvas.height/2
      var ran = Math.random() * (this.size/10) - .3
      if(this.x > mid_x) this.vel_x -= .2 * ran
      else this.vel_x += .2 * ran
      if(this.y > mid_y) this.vel_y -= .2 * ran
      else this.vel_y += .2 * ran
      this.vel_x += Math.random()*.2 - .1
      this.vel_y += Math.random()*.2 - .1
    }

    this.size -= Math.random()*3 - 1.2
    if(this.size <= 0) {
      this.destroy()
    }
    else if(this.moves && (Math.random() < .1)){
      this.spawnStatic()
    }
  },
  draw: function() {
    var alpha = Math.random()*.1+ .1
    ctx.strokeStyle = 'rgba(0,0,0,'+alpha+')'
    if(Math.random() < .5) this.drawLine()
    ctx.setTransform(-1,0,0,1,canvas.width,0)
    if(Math.random() < .5) this.drawLine()
    ctx.setTransform(1,0,0,1,0,0)
    this.last_x = this.x + Math.random() * this.size - this.size/2
    this.last_y = this.y + Math.random() * this.size - this.size/2
    if(!this.moves && (Math.random() < .2)) {
      this.destroy()
    }
  },
  destroy: function() {
    mobs.splice(mobs.indexOf(this),1)
  },
  drawLine: function() {
    ctx.beginPath()
    ctx.lineWidth = this.size
    ctx.moveTo(this.last_x,this.last_y)
    ctx.lineTo(this.x,this.y)
    ctx.stroke()
  }
})
function reset() {
  ctx.clearRect(0,0,canvas.width,canvas.height)
  mobs = []
  for(var i = 0; i < 30; i++) mobs.push((new Mob()))
}
function init() {
  console.log('Initialization');
  canvas = document.createElement('canvas')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  document.body.appendChild(canvas)
  canvas.onclick = reset
  ctx = canvas.getContext('2d')
  ctx.lineCap = "round"
  reset()
  update()
}

function update(time){
  for(var i in mobs) mobs[i].update()
  draw(time, ctx)
  window.requestAnimationFrame(update)
}

function draw(time, ctx) {
  for(var i in mobs) mobs[i].draw()
}

init()
