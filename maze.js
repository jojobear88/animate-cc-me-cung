(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("GO", "bold 32px 'Arial Black'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-22.55);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AoqEVIAAopIRVAAIAAIpg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.5,-27.7,111.1,55.5);


(lib.next = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("NEXT LEVEL", "bold 36px 'Arial Black'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 53;
	this.text.lineWidth = 264;
	this.text.parent = this;
	this.text.setTransform(4.5,-32.15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("A3gE2IAAprMAvBAAAIAAJrg");
	this.shape.setTransform(0,-2.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.5,-34.1,301,68.30000000000001);


(lib.maze2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000FF").ss(10,1,1).p("EhLYgkPMAAABP/IV4AAIAA+oIKeAAIAAdsMAvpAAAIAAqeI+7AAIAAtmMBOHAAAIAAXmIXmAAMAAAhWFMh3NAAAMAAAAn2MBfnAAAIAA6QMgzaAAAIAAOsIcmAAIAAn+IRMAAIAAMMMhFDAAAIAA2WMBaJAAAMAAABEbIjwAAIAA9OMherAAAIAAfQIbMAAIAABkMghIAAAMAAAglWI6QAAMAAAAhSIigAAMAAAhF1");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.maze2, new cjs.Rectangle(-487.4,-284.9,974.9,569.9), null);


(lib.maze_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000FF").ss(10,1,1).p("Eg83gxaMCE2AAAIAAU6Mh7QAAAIAAIAIU5AAIAANfMBlMAAAMAAAA4cMiOyAAAMAAAglHMBsBAAAIAAaLI9tAAIAAyXMg/SAAAIAAVTMBh3AAAMAAAgk7MhkNAAAMAAAgl5MB3jAAAIAAomMh5IAAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.maze_1, new cjs.Rectangle(-465.7,-321.3,931.4,642.6), null);


(lib.lostText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("YOU LOST!\nClick start to restart the game!", "bold 53px 'Arial Black'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 77;
	this.text.lineWidth = 527;
	this.text.parent = this;
	this.text.setTransform(3.45,-127.65);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(10,1,1).p("Eg5Ugf/MBypAAAMAAAA//MhypAAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg5UAgAMAAAg//MBypAAAMAAAA//g");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lostText, new cjs.Rectangle(-371.9,-209.7,743.9,419.5), null);


(lib.lostMaze2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(10,1,1).p("EhLYgkPMAAABP/IV4AAIAA+oIKeAAIAAdsMAvpAAAIAAqeI+7AAIAAtmMBOHAAAIAAXmIXmAAMAAAhWFMh3NAAAMAAAAn2MBfnAAAIAA6QMgzaAAAIAAOsIcmAAIAAn+IRMAAIAAMMMhFDAAAIAA2WMBaJAAAMAAABEbIjwAAIAA9OMherAAAIAAfQIbMAAIAABkMghIAAAMAAAglWI6QAAMAAAAhSIigAAMAAAhF1");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lostMaze2, new cjs.Rectangle(-487.4,-284.9,974.9,569.9), null);


(lib.lostmaze = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(10,1,1).p("Eg8zgxaMCEyAAAIAAU6Mh7QAAAIAAIAIU5AAIAANfMBlMAAAMAAAA4cMiOyAAAMAAAglHMBsBAAAIAAaLI9tAAIAAyXMg/SAAAIAAVTMBh3AAAMAAAgk7MhkNAAAMAAAgl5MB3jAAAIAAomMh5EAAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lostmaze, new cjs.Rectangle(-465.7,-321.3,931.4,642.6), null);


(lib.end = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("END", "bold 32px 'Arial Black'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.lineWidth = 96;
	this.text.parent = this;
	this.text.setTransform(0,-22.55);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AssENIAAoZIZZAAIAAIZg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.end, new cjs.Rectangle(-81.2,-26.8,162.5,53.7), null);


(lib.winText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.next = new lib.next();
	this.next.name = "next";
	this.next.setTransform(11.55,116.8);

	this.text = new cjs.Text("CONGRATULATION!\nYOU WIN!!", "bold 53px 'Arial Black'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 77;
	this.text.lineWidth = 591;
	this.text.parent = this;
	this.text.setTransform(0.5,-125.85);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(10,1,1).p("Eg5Ugf/MBypAAAMAAAA//MhypAAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg5UAgAMAAAg//MBypAAAMAAAA//gA1tWqMAvBAAAIAAprMgvBAAAg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.next}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.winText, new cjs.Rectangle(-371.9,-209.7,743.9,419.5), null);


// stage content:
(lib.maze = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		stage.enableMouseOver();
		
		var root = this;
		var isPlaying = false;
		var isShowPopup = false;
		
		function init() {
			root.stop();
			root.startGame.visible = true;
			root.endGame.visible = false;
			root.lostMaze.visible = false;
			root.maze.visible = false;
		
			root.lostText.visible = false;
			root.winText.visible = false;
		}
		
		init();
		
		this.startGame.on("click", startTheGame);
		
		function startTheGame() {
			root.maze.visible = true;
			root.endGame.visible = true;
			root.lostMaze.visible = false;
			root.startGame.visible = false;
			root.lostText.visible = false;
			root.winText.visible = false;
			isPlaying = true;
			isShowPopup = false;
		}
		
		this.maze.addEventListener("mouseover", youLost);
		
		function youLost() {
			if(isPlaying && !isShowPopup){
				root.endGame.visible = false;
				root.lostMaze.visible = true;
				root.startGame.visible = true;
				root.lostText.visible = true;
				isPlaying = false;
				isShowPopup = true;
			}
		}
		
		this.endGame.addEventListener("mouseover", youWon);
		
		function youWon() {
			if(isPlaying && !isShowPopup){
				root.winText.visible = true;
				isPlaying = false;
				isShowPopup = true;
			}
		}
		
		this.winText.next.addEventListener("click", nextLevel);
		
		function nextLevel() {
			console.log("next game");
			var nextFrame = root.currentFrame + 1;
			root.gotoAndStop(nextFrame);
			init();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// winText
	this.winText = new lib.winText();
	this.winText.name = "winText";
	this.winText.setTransform(512.1,332.85);

	this.timeline.addTween(cjs.Tween.get(this.winText).wait(2));

	// lostText
	this.lostText = new lib.lostText();
	this.lostText.name = "lostText";
	this.lostText.setTransform(512.1,332.85);

	this.timeline.addTween(cjs.Tween.get(this.lostText).wait(2));

	// end
	this.endGame = new lib.end();
	this.endGame.name = "endGame";
	this.endGame.setTransform(650.1,564.45);

	this.timeline.addTween(cjs.Tween.get(this.endGame).wait(1).to({x:608.1,y:182.5},0).wait(1));

	// start
	this.startGame = new lib.start();
	this.startGame.name = "startGame";
	this.startGame.setTransform(58.1,70.8);

	this.timeline.addTween(cjs.Tween.get(this.startGame).wait(1).to({x:63.1},0).wait(1));

	// lostGame
	this.lostMaze = new lib.lostmaze();
	this.lostMaze.name = "lostMaze";
	this.lostMaze.setTransform(514.5,362.55);

	this.lostMaze_1 = new lib.lostMaze2();
	this.lostMaze_1.name = "lostMaze_1";
	this.lostMaze_1.setTransform(512.45,328.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lostMaze}]}).to({state:[{t:this.lostMaze_1}]},1).wait(1));

	// maze
	this.maze = new lib.maze_1();
	this.maze.name = "maze";
	this.maze.setTransform(514.5,362.55);

	this.maze_1 = new lib.maze2();
	this.maze_1.name = "maze_1";
	this.maze_1.setTransform(512.45,328.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.maze}]}).to({state:[{t:this.maze_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(514.6,425.3,485.4,258.59999999999997);
// library properties:
lib.properties = {
	id: '4AC0B30DB70BE849A3F4A001EC8015AE',
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFCC",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4AC0B30DB70BE849A3F4A001EC8015AE'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;