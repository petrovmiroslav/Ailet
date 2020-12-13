import './modernizr.js';


export default class Sphere {
  constructor (canvas) {
    this.canvas = canvas;
    this.ON = false;
    this.sphereRad = 280;
    this.radius_sp = 1;
    this.canvasSupport = Modernizr.canvas;
    this.timer = 0;

    this.displayWidth;
    this.displayHeight;
    this.timer;
    this.wait;
    this.count;
    this.numToAddEachFrame;
    this.particleList;
    this.recycleBin;
    this.particleAlpha;
    this.r;
    this.g;
    this.b;
    this.fLen;
    this.m;
    this.projCenterX;
    this.projCenterY;
    this.zMax;
    this.turnAngle;
    this.turnSpeed;
    this.sphereCenterX;
    this.sphereCenterY; 
    this.sphereCenterZ;
    this.particleRad;
    this.zeroAlphaDepth;
    this.randAccelX;
    this.randAccelY;
    this.randAccelZ;
    this.gravity;
    this.rgbString;
    this.p;
    this.outsideTest;
    this.nextParticle;
    this.sinAngle;
    this.cosAngle;
    this.rotX;
    this.rotZ;
    this.depthAlphaFactor;
    this.i;
    this.theta;
    this.phi;
    this.x0;
    this.y0;
    this.z0;

    this.onTimer = this.onTimer.bind(this);

    this.init();
  }

  start () {
    if (this.ON) return;
    
    this.timer = setInterval(this.onTimer, 10/24);
    this.ON = true;
  }

  stop () {
    if (!this.ON) return;

    clearInterval(this.timer);
    this.ON = false;
  }

  getSphereRad (canvas) {
		return Math.min(canvas.offsetWidth * 0.25, canvas.offsetHeight * 0.25);
	}

  init () {
    if (!this.canvasSupport) {
      this.start = this.stop = () => {};
      return;
    }
    
    this.context = this.canvas.getContext("2d");
    this.sphereRad = this.getSphereRad(this.canvas);

    this.wait = 1;
		this.count = this.wait - 1;
		this.numToAddEachFrame = 8;
		
		//particle color
		this.r = 30;
		this.g = 160;
    this.b = 198;
    
    this.rgbString = "rgba("+ this.r + "," + this.g + "," + this.b + ","; //partial string for color which will be completed by appending alpha value.
		this.particleAlpha = 1; //maximum alpha
		
		this.displayWidth = this.canvas.width;
		this.displayHeight = this.canvas.height;
		
		this.fLen = 320; //represents the distance from the viewer to z=0 depth.
		
		//projection center coordinates sets location of origin
		this.projCenterX = this.displayWidth/2;
		this.projCenterY = this.displayHeight/2;
		
		//we will not draw coordinates if they have too large of a z-coordinate (which means they are very close to the observer).
		this.zMax = this.fLen-2;
		
		this.particleList = {};
		this.recycleBin = {};
		
		//random acceleration factors - causes some random motion
		this.randAccelX = 0.1;
		this.randAccelY = 0.1;
		this.randAccelZ = 0.1;
		
		this.gravity = -0; //try changing to a positive number (not too large, for example 0.3), or negative for floating upwards.
		
		this.particleRad = 2.5;
		
		this.sphereCenterX = 0;
		this.sphereCenterY = 0;
		this.sphereCenterZ = -3 - this.sphereRad;
		
		//alpha values will lessen as particles move further back, causing depth-based darkening:
		this.zeroAlphaDepth = -750; 
		
		this.turnSpeed = 4*Math.PI/1200; //the sphere will rotate at this speed (one complete rotation every 1600 frames).
		this.turnAngle = 0; //initial angle
  }

  onTimer() {
		//if enough time has elapsed, we will add new particles.		
		this.count++;
			if (this.count >= this.wait) {
						
			this.count = 0;
			for (let i = 0; i < this.numToAddEachFrame; i++) {
				this.theta = Math.random()*2*Math.PI;
				this.phi = Math.acos(Math.random()*2-1);
				this.x0 = this.sphereRad*Math.sin(this.phi)*Math.cos(this.theta);
				this.y0 = this.sphereRad*Math.sin(this.phi)*Math.sin(this.theta);
				this.z0 = this.sphereRad*Math.cos(this.phi);
				
				//We use the addParticle function to add a new particle. The parameters set the position and velocity components.
				//Note that the velocity parameters will cause the particle to initially fly outwards away from the sphere center (after
				//it becomes unstuck).
				// let p = this.addParticle(this.x0, this.sphereCenterY + this.y0, this.sphereCenterZ + this.z0, 0.002*this.x0, 0.002*this.y0, 0.002*this.z0);
				
				// //we set some "envelope" parameters which will control the evolving alpha of the particles.
				// p.attack = 50;
				// p.hold = 50;
				// p.decay = 100;
				// p.initValue = 0;
				// p.holdValue = this.particleAlpha;
				// p.lastValue = 0;
				
				// //the particle will be stuck in one place until this time has elapsed:
				// p.stuckTime = 90 + Math.random()*20;
				
				// p.accelX = 0;
				// p.accelY = this.gravity;
        // p.accelZ = 0;
        

        this.p = this.addParticle(this.x0, this.sphereCenterY + this.y0, this.sphereCenterZ + this.z0, 0.002*this.x0, 0.002*this.y0, 0.002*this.z0);
				
				//we set some "envelope" parameters which will control the evolving alpha of the particles.
				this.p.attack = 50;
				this.p.hold = 50;
				this.p.decay = 100;
				this.p.initValue = 0;
				this.p.holdValue = this.particleAlpha;
				this.p.lastValue = 0;
				
				//the particle will be stuck in one place until this time has elapsed:
				this.p.stuckTime = 90 + Math.random()*20;
				
				this.p.accelX = 0;
				this.p.accelY = this.gravity;
				this.p.accelZ = 0;
			}
		}
		
		//update viewing angle
		this.turnAngle = (this.turnAngle + this.turnSpeed) % (2*Math.PI);
		this.sinAngle = Math.sin(this.turnAngle);
		this.cosAngle = Math.cos(this.turnAngle);

		//background fill
		this.context.fillStyle = "#0F001E";
		this.context.fillRect(0,0,this.displayWidth,this.displayHeight);
		
		//update and draw particles
		this.p = this.particleList.first;
		while (this.p != null) {
			//before list is altered record next particle
			this.nextParticle = this.p.next;
			
			//update age
			this.p.age++;
			
			//if the particle is past its "stuck" time, it will begin to move.
			if (this.p.age > this.p.stuckTime) {	
				this.p.velX += this.p.accelX + this.randAccelX*(Math.random()*2 - 1);
				this.p.velY += this.p.accelY + this.randAccelY*(Math.random()*2 - 1);
				this.p.velZ += this.p.accelZ + this.randAccelZ*(Math.random()*2 - 1);
				
				this.p.x += this.p.velX;
				this.p.y += this.p.velY;
				this.p.z += this.p.velZ;
			}
			
			/*
			We are doing two things here to calculate display coordinates.
			The whole display is being rotated around a vertical axis, so we first calculate rotated coordinates for
			x and z (but the y coordinate will not change).
			Then, we take the new coordinates (rotX, y, rotZ), and project these onto the 2D view plane.
			*/
			this.rotX =  this.cosAngle*this.p.x + this.sinAngle*(this.p.z - this.sphereCenterZ);
			this.rotZ =  -this.sinAngle*this.p.x + this.cosAngle*(this.p.z - this.sphereCenterZ) + this.sphereCenterZ;
			this.m = this.radius_sp * this.fLen/(this.fLen - this.rotZ);
			this.p.projX = this.rotX*this.m + this.projCenterX;
			this.p.projY = this.p.y*this.m + this.projCenterY;
				
			//update alpha according to envelope parameters.
			if (this.p.age < this.p.attack+this.p.hold+this.p.decay) {
				if (this.p.age < this.p.attack) {
					this.p.alpha = (this.p.holdValue - this.p.initValue)/this.p.attack*this.p.age + this.p.initValue;
				}
				else if (this.p.age < this.p.attack+this.p.hold) {
					this.p.alpha = this.p.holdValue;
				}
				else if (this.p.age < this.p.attack+this.p.hold+this.p.decay) {
					this.p.alpha = (this.p.lastValue - this.p.holdValue)/this.p.decay*(this.p.age-this.p.attack-this.p.hold) + this.p.holdValue;
				}
			}
			else {
				this.p.dead = true;
			}
			
			//see if the particle is still within the viewable range.
			if ((this.p.projX > this.displayWidth)||(this.p.projX<0)||(this.p.projY<0)||(this.p.projY>this.displayHeight)||(this.rotZ>this.zMax)) {
				this.outsideTest = true;
			}
			else {
				this.outsideTest = false;
			}
			
			if (this.outsideTest||this.p.dead) {
				this.recycle(this.p);
			}
			
			else {
				//depth-dependent darkening
				this.depthAlphaFactor = (1-this.rotZ/this.zeroAlphaDepth);
				this.depthAlphaFactor = (this.depthAlphaFactor > 1) ? 1 : ((this.depthAlphaFactor<0) ? 0 : this.depthAlphaFactor);
				this.context.fillStyle = this.rgbString + this.depthAlphaFactor*this.p.alpha + ")";
				
				//draw
				this.context.beginPath();
				this.context.arc(this.p.projX, this.p.projY, this.m*this.particleRad, 0, 2*Math.PI, false);
				this.context.closePath();
				this.context.fill();
			}
			
			this.p = this.nextParticle;
		}
  }
  
  addParticle(x0,y0,z0,vx0,vy0,vz0) {
		var newParticle;
		var color;
		
		//check recycle bin for available drop:
		if (this.recycleBin.first != null) {
			newParticle = this.recycleBin.first;
			//remove from bin
			if (newParticle.next != null) {
				this.recycleBin.first = newParticle.next;
				newParticle.next.prev = null;
			}
			else {
				this.recycleBin.first = null;
			}
		}
		//if the recycle bin is empty, create a new particle (a new ampty object):
		else {
			newParticle = {};
		}
		
		//add to beginning of particle list
		if (this.particleList.first == null) {
			this.particleList.first = newParticle;
			newParticle.prev = null;
			newParticle.next = null;
		}
		else {
			newParticle.next = this.particleList.first;
			this.particleList.first.prev = newParticle;
			this.particleList.first = newParticle;
			newParticle.prev = null;
		}
		
		//initialize
		newParticle.x = x0;
		newParticle.y = y0;
		newParticle.z = z0;
		newParticle.velX = vx0;
		newParticle.velY = vy0;
		newParticle.velZ = vz0;
		newParticle.age = 0;
		newParticle.dead = false;
		if (Math.random() < 0.5) {
			newParticle.right = true;
		}
		else {
			newParticle.right = false;
		}
		return newParticle;		
  }
  
  recycle(p) {
		//remove from particleList
		if (this.particleList.first == p) {
			if (p.next != null) {
				p.next.prev = null;
				this.particleList.first = p.next;
			}
			else {
				this.particleList.first = null;
			}
		}
		else {
			if (p.next == null) {
				p.prev.next = null;
			}
			else {
				p.prev.next = p.next;
				p.next.prev = p.prev;
			}
		}
		//add to recycle bin
		if (this.recycleBin.first == null) {
			this.recycleBin.first = p;
			p.prev = null;
			p.next = null;
		}
		else {
			p.next = this.recycleBin.first;
			this.recycleBin.first.prev = p;
			this.recycleBin.first = p;
			p.prev = null;
		}
	}

}