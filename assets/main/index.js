System.register("chunks:///_virtual/Background.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Bird.ts"],(function(e){var i,t,n,a,o,r,s,l,c,h,u,p,d,m,b,g,v,y;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){o=e.cclegacy,r=e._decorator,s=e.Node,l=e.Prefab,c=e.Button,h=e.Label,u=e.Camera,p=e.instantiate,d=e.Vec3,m=e.Sprite,b=e.RigidBody2D,g=e.randomRangeInt,v=e.Component},function(e){y=e.Bird}],execute:function(){var f,S,w,T,B,P,D,G,M,C,z,O,_,R,k,x,E,F,L,H,N,U,A,I,j,V,q,J,K,Q,W,X,Y,Z,$,ee,ie,te,ne,ae,oe;o._RF.push({},"03f1cDa26xO+o/841HpNnCG","Background",void 0);var re=r.ccclass,se=r.property,le=e("GameStatus",function(e){return e[e.Game_Ready=0]="Game_Ready",e[e.Game_Playing=1]="Game_Playing",e[e.Game_Over=2]="Game_Over",e[e.Game_Paused=3]="Game_Paused",e}({}));e("Background",(f=re("Background"),S=se({type:s}),w=se({type:l}),T=se({type:s}),B=se({type:s}),P=se({type:s}),D=se({type:s}),G=se({type:c}),M=se({type:y}),C=se({type:h}),z=se({type:h}),O=se({type:h}),_=se({type:c}),R=se({type:c}),k=se({type:s}),x=se({type:s}),E=se({type:s}),F=se({type:h}),L=se({type:h}),H=se({type:u}),f((A=i((U=function(e){function i(){for(var i,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return i=e.call.apply(e,[this].concat(o))||this,n(i,"parentBackground",A,a(i)),n(i,"prefabPipa",I,a(i)),n(i,"pipaa",j,a(i)),n(i,"spGameOver",V,a(i)),n(i,"spGetReady",q,a(i)),n(i,"spFlappyBird",J,a(i)),n(i,"startBtn",K,a(i)),n(i,"bird",Q,a(i)),n(i,"score",W,a(i)),n(i,"panelScore",X,a(i)),n(i,"highScore",Y,a(i)),n(i,"pauseBtn",Z,a(i)),n(i,"continueBtn",$,a(i)),n(i,"panel",ee,a(i)),n(i,"goldMedal",ie,a(i)),n(i,"silverMedal",te,a(i)),n(i,"continueTimer",ne,a(i)),n(i,"invisibleLabel",ae,a(i)),n(i,"mainCamera",oe,a(i)),i.gameScore=0,i.counter=0,i.highScoreData=0,i.speedMultiplier=1,i.time=0,i.countDownTime=5,i.invisibleTimer=0,i.gameStatus=le.Game_Ready,i.pipa=[],i}t(i,e);var o=i.prototype;return o.start=function(){var e=p(this.prefabPipa),i=p(this.prefabPipa);e.setParent(this.node.parent),e.setPosition(new d(200,0,0)),i.setParent(this.node.parent),i.setPosition(new d(350,0,0)),this.pipa.push(e),this.pipa.push(i),this.pipaa.addChild(this.pipa[0]),this.pipaa.addChild(this.pipa[1])},o.onLoad=function(){this.spGameOver.active=!1,this.spGetReady.active=!0,this.spFlappyBird.active=!0,this.continueBtn.node.active=!1,this.score.node.active=!1,this.panel.active=!1,this.goldMedal.active=!1,this.silverMedal.active=!1,this.highScore.node.active=!1,this.panelScore.node.active=!1,this.continueTimer.node.active=!1,this.invisibleLabel.node.active=!1,this.startBtn.node.on(s.EventType.TOUCH_END,this.touchStartBtn,this),this.pauseBtn.node.on(s.EventType.TOUCH_END,this.touchPauseBtn,this),this.continueBtn.node.on(s.EventType.TOUCH_END,this.touchContinueBtn,this),this.bird.birdParticle.node.active=!1,this.bird.node.getComponent(m).grayscale=!1},o.touchStartBtn=function(){this.startBtn.node.active=!1,this.gameStatus=le.Game_Playing,this.spGameOver.active=!1,this.spGetReady.active=!1,this.spFlappyBird.active=!1,this.score.node.active=!0,this.panel.active=!1,this.goldMedal.active=!1,this.silverMedal.active=!1,this.highScore.node.active=!1,this.panelScore.node.active=!1;for(var e=0;e<this.pipa.length;e++){var i=this.pipa[e].getPosition();i.x-=200,this.pipa[e].setPosition(i)}var t=this.bird.node.getPosition();t.y=0,this.bird.node.setPosition(t),this.bird.node.setRotationFromEuler(0,0,0),this.gameScore=0,this.counter=0,this.speedMultiplier=1,this.score.string=this.gameScore.toString(),this.bird.node.getComponent(b).enabled=!1,this.invisibleTimer=0,this.invisibleLabel.node.active=!0,this.bird.birdParticle.node.active=!0,this.bird.node.active=!0,this.bird.node.getComponent(m).grayscale=!0,this.bird.node.getComponent(m).enabled=!0},o.touchPauseBtn=function(){this.gameStatus=le.Game_Paused,this.continueBtn.node.active=!0,this.bird.speedTurun=0,this.score.node.active=!1,this.countDownTime=5},o.touchContinueBtn=function(){this.continueBtn.node.active=!1,this.continueTimer.node.active=!0,this.continueTimer.string="5",this.scheduleOnce((function(){this.countDownTime--;var e=Math.ceil(this.countDownTime);this.continueTimer.string=""+e,this.scheduleOnce((function(){this.countDownTime--;var e=Math.ceil(this.countDownTime);this.continueTimer.string=""+e,this.scheduleOnce((function(){this.countDownTime--;var e=Math.ceil(this.countDownTime);this.continueTimer.string=""+e,this.scheduleOnce((function(){this.countDownTime--;var e=Math.ceil(this.countDownTime);this.continueTimer.string=""+e,this.scheduleOnce((function(){this.countDownTime--;var e=Math.ceil(this.countDownTime);this.continueTimer.string=""+e,this.scheduleOnce((function(){this.countDownTime--;var e=Math.ceil(this.countDownTime);this.continueTimer.string=""+e,this.gameStatus=le.Game_Playing,this.score.node.active=!0,this.continueTimer.node.active=!1}),1)}),1)}),1)}),1)}),1)}),1)},o.gameOver=function(){this.startShake(),this.spGameOver.active=!0,this.startBtn.node.active=!0,this.highScore.node.active=!0,this.panelScore.node.active=!0,this.gameStatus=le.Game_Over,this.gameScore<=20?this.silverMedal.active=!0:this.goldMedal.active=!0,this.gameScore>this.highScoreData&&(this.highScoreData=this.gameScore),this.highScore.string=this.highScoreData.toString(),this.panelScore.string=this.gameScore.toString(),this.score.string=this.gameScore.toString(),this.panel.active=!0,this.gameScore=0,this.bird.birdExplode.node.active=!0,this.scheduleOnce((function(){this.bird.birdExplode.node.active=!1}),.5),this.bird.node.getComponent(m).enabled=!1,this.bird.birdParticle.node.active=!1},o.update=function(e){if(this.gameStatus===le.Game_Playing){this.invisibleTimer>300&&(this.bird.node.getComponent(b).enabled=!0,this.invisibleLabel.node.active=!1,this.bird.node.getComponent(m).grayscale=!1),this.invisibleTimer++,this.time++,this.counter++,20==this.counter&&(this.gameScore++,this.score.string=this.gameScore.toString(),this.counter=0,this.speedMultiplier+=.015);var i=this.node.getPosition();i.x-=57.6*e*this.speedMultiplier,i.x<=-288&&(i.x+=288),this.node.setPosition(i);for(var t=0;t<this.pipa.length;t++){var n=this.pipa[t].getPosition();if(n.x-=57.6*e*this.speedMultiplier,n.x<=-200)n.y=g(-100,100),n.x+=400,1==g(0,2)?this.pipa[t].setRotationFromEuler(0,0,180):this.pipa[t].setRotationFromEuler(0,0,0);this.pipa[t].setPosition(n)}}},o.startShake=function(){var e=this;this.scheduleOnce((function(){e.stopShake()}),5),this.schedule((function(){var i=2*(Math.random()-.5)*5,t=2*(Math.random()-.5)*5;e.mainCamera.node.setPosition(new d(i,t,0))}),.005,Math.floor(10))},o.stopShake=function(){this.unscheduleAllCallbacks(),this.mainCamera.node.setPosition(new d(0,0,0))},i}(v)).prototype,"parentBackground",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=i(U.prototype,"prefabPipa",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=i(U.prototype,"pipaa",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),V=i(U.prototype,"spGameOver",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),q=i(U.prototype,"spGetReady",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),J=i(U.prototype,"spFlappyBird",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),K=i(U.prototype,"startBtn",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Q=i(U.prototype,"bird",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),W=i(U.prototype,"score",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),X=i(U.prototype,"panelScore",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Y=i(U.prototype,"highScore",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Z=i(U.prototype,"pauseBtn",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),$=i(U.prototype,"continueBtn",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ee=i(U.prototype,"panel",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ie=i(U.prototype,"goldMedal",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),te=i(U.prototype,"silverMedal",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ne=i(U.prototype,"continueTimer",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ae=i(U.prototype,"invisibleLabel",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),oe=i(U.prototype,"mainCamera",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=U))||N));o._RF.pop()}}}));

System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Background.ts"],(function(e){var t,i,n,r,o,s,a,u,l,c,d,p,h,b,g;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){o=e.cclegacy,s=e._decorator,a=e.ParticleSystem2D,u=e.input,l=e.Input,c=e.Collider2D,d=e.Contact2DType,p=e.Vec3,h=e.Component},function(e){b=e.Background,g=e.GameStatus}],execute:function(){var y,f,v,T,m,P,C,k,B;o._RF.push({},"72e24RlvpZD56e9G/VIV2Uk","Bird",void 0);var D=s.ccclass,R=s.property;e("Bird",(y=D("Bird"),f=R({type:b}),v=R({type:a}),T=R({type:a}),y((C=t((P=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))||this).speedTurun=100,t.time=0,n(t,"background",C,r(t)),n(t,"birdExplode",k,r(t)),n(t,"birdParticle",B,r(t)),t}i(t,e);var o=t.prototype;return o.start=function(){u.on(l.EventType.TOUCH_START,this.onInputRecieved,this),this.node.getComponent(c).on(d.BEGIN_CONTACT,this.onCollide,this)},o.onCollide=function(e,t){if(0==t.tag){this.background.gameOver();var i=this.node.getPosition();this.birdExplode.node.setPosition(i)}this.speedTurun=0},o.onInputRecieved=function(e){this.speedTurun=100},o.update=function(e){if(this.background.gameStatus==g.Game_Playing){var t=this.node.getPosition();this.speedTurun-=300*e,t.y+=this.speedTurun*e,this.node.setPosition(t),this.birdParticle.node.setPosition(new p(-40,t.y,0));var i=this.speedTurun;i>=30?i=30:i<=-30&&(i=-30),this.node.setRotationFromEuler(0,0,i)}},t}(h)).prototype,"background",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=t(P.prototype,"birdExplode",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=t(P.prototype,"birdParticle",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=P))||m));o._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,p=t.Label,c=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[c.WHITE,c.BLACK,c.RED,c.GREEN,c.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=h(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(p);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=c.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?h(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(p);this.labelComponentList[this.labelComponentList.length]=S;var x=h(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(p)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(p)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Background.ts","./Bird.ts"],(function(){return{setters:[null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});