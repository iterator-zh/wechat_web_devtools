'use strict';!function(require,directRequire){const a=require('react'),b=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),c=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),d=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),{connect:e}=require('react-redux');class f extends a.Component{constructor(a){super(a),this.state={}}componentWillReceiveProps(){}onResume(){this.props.setDebugger({resume:Date.now()})}onStepOver(){this.props.setDebugger({stepOver:Date.now()})}render(){let b=this.props;return a.createElement('div',{className:'ui-mask',ref:'container',style:b.show?{opacity:'0.999999'}:c.displayNone},a.createElement('div',{className:'break-point'},a.createElement('div',{className:'break-point-bd'},a.createElement('p',null,'Paused in Debugger')),a.createElement('div',{className:'break-point-ft'},a.createElement('a',{className:'break-point-action',title:'\u7EE7\u7EED\u6267\u884C\u811A\u672C'},a.createElement('i',{className:'ui-icon-go-ahead',onClick:this.onResume.bind(this)})),a.createElement('a',{className:'break-point-action',title:'\u5355\u6B65\u8DF3\u8FC7'},a.createElement('i',{className:'ui-icon-skip',onClick:this.onStepOver.bind(this)})))))}}module.exports=e((a)=>{let b=a.toolbar.deviceInfo,c=a.toolbar.deviceScale,d=(b.screenWidth+100)*c,e=Math.min(Math.max(a.window.simulator.width,d)-100*c,b.screenWidth);global.onlySimulator&&(d=b.screenWidth*c);let f=a.simulator.devtoolsDebugger&&a.simulator.devtoolsDebugger.paused;return{width:e,show:f,debuggerPaused:f}},(a)=>{return{setDebugger:b.bindActionCreators(d.setDebugger,a)}})(f)}(require('lazyload'),require);