var canvas;
var ctx;
var mobs = []

function World() {
  this.canvas = document.createElement('canvas')
  this.canvas.width = window.innerWidth
  this.canvas.height = window.innerHeight
  document.body.appendChild(this.canvas)
  this.canvas.onclick = reset
  this.ctx = this.canvas.getContext('2d')
  this.ctx.lineCap = "round"

  this.mobs = []
}
Object.assign(World.prototype, {
  update: function() {
    for(var i in this.mobs) this.mobs[i].update(this)
  },
  draw: function() {
    for(var i in this.mobs) this.mobs[i].draw(this)
  },
  parallax: function(mouseX, mouseY, speed) {
  	var obj = this.canvas;
  	var parentObj = obj.parentNode,
  	containerWidth = parseInt( parentObj.offsetWidth ),
  	containerHeight = parseInt( parentObj.offsetHeight );
  	obj.style.left = - ( ( ( mouseX - ( parseInt( obj.offsetWidth ) / 2 ) ) / containerWidth ) * speed ) + 'px';
  	obj.style.top = - ( ( ( mouseY - ( parseInt( obj.offsetHeight ) / 2 ) ) / containerHeight ) * speed ) + 'px';
  }
})

function Mob(self,world) {
  this.x = Math.random() * (world.canvas.width/2) + world.canvas.width/4
  this.y = Math.random() * (world.canvas.height/2) + world.canvas.height/4
  this.vel_x = Math.random() * 8 - 4
  this.vel_y = Math.random() * 8 - 4
  this.size = Math.random() * 40 + 5
  this.moves = true
  Object.assign(this,self)
  this.last_x = this.x
  this.last_y = this.y
}
Object.assign(Mob.prototype, {
  spawnStatic: function(world){
    world.mobs.push((new Mob({
      moves:false,
      x: this.x + Math.random()*50-25,
      y: this.y + Math.random()*50-25,
      size: this.size + Math.random()*40
    },world)))
  },
  update: function(world) {
    if(this.moves) {
      this.x += this.vel_x
      this.y += this.vel_y
      var mid_x = world.canvas.width/2
      var mid_y = world.canvas.height/2
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
      this.destroy(world)
    }
    else if(this.moves && (Math.random() < .1)){
      this.spawnStatic(world)
    }
  },
  draw: function(world) {
    var alpha = Math.random()*.1+ .1
    world.ctx.strokeStyle = 'rgba(0,0,0,'+alpha+')'
    if(Math.random() < .5) this.drawLine(world)
    world.ctx.setTransform(-1,0,0,1,world.canvas.width,0)
    if(Math.random() < .5) this.drawLine(world)
    world.ctx.setTransform(1,0,0,1,0,0)
    this.last_x = this.x + Math.random() * this.size - this.size/2
    this.last_y = this.y + Math.random() * this.size - this.size/2
    if(!this.moves && (Math.random() < .2)) {
      this.destroy(world)
    }
  },
  destroy: function(world) {
    world.mobs.splice(world.mobs.indexOf(this),1)
  },
  drawLine: function(world) {
    world.ctx.beginPath()
    world.ctx.lineWidth = this.size
    world.ctx.moveTo(this.last_x,this.last_y)
    world.ctx.lineTo(this.x,this.y)
    world.ctx.stroke()
  }
})



var layers = []
function init() {
  // layers = [new World(), new World(), new World(), new World(), new World(), new World()]

  for(var i = 0; i <= 10; i++) layers.push((new World()))
	document.body.onmousemove = function(e) {
    for(var i in layers) layers[i].parallax(e.clientX,e.clientY,50*(i-5))
	}
  reset()
  update()
}

function reset() {
  for(var i in layers) {
    var layer = layers[i]
    layer.ctx.clearRect(0,0,layer.canvas.width,layer.canvas.height)
    layer.mobs = []
    for(var i = 0; i < 2; i++) layer.mobs.push((new Mob({},layer)))
  }
}

function update(time){
  for(var i in layers) layers[i].update()
  for(var i in layers) layers[i].draw()
  window.requestAnimationFrame(update)
}
init()
