'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('path'),b=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),c=require('classnames'),d=require('react'),e=require('redux'),f=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),g=require('./a1dd553cc059d528bb0ef56afed53968.js'),{default_backgroundColor:h,default_tabBarBorderBlackColor:i,default_tabBarBorderWhiteColor:j}=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),k=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),{connect:l}=require('react-redux');class m extends d.Component{constructor(a){super(a),this.state={animationType:'none',show:!1}}componentDidMount(){}componentWillUnmount(){}clickTab(a){let b=a.currentTarget,c=b.dataset,d=c.name.replace(/\.html$/,''),e=c.index,f=this.props.list[e];g.triggerOnEvent({eventName:'onTabItemTap',data:{pagePath:d,index:parseInt(e),text:f.text,iconPath:f.iconPath,selectedIconPath:f.selectedIconPath}}),this.props.switchTab(d,e)}renderTop(){let a=this.props,{tabBar:b,tabIndex:e}=this.props,g=a.position||'bottom',h=a.list||[],k={};k.backgroundColor=a.backgroundColor,k.borderColor='white'===a.borderStyle?j:i,k.color=a.color,k.zIndex=5,k.display=-1==e?'none':'',k.height=a.height;const l='white'===a.borderStyle?j:i,m=a.selectedColor?a.selectedColor:a.color;let n=h.map((b,g)=>{let h=g==e&&a.selectedColor?{color:a.selectedColor}:{color:a.color},i=g==e?b.selectedIconPath:b.iconPath,j=i?{}:f.displayNone;return i=i?`${this.props.baseURL}${i}?r=${Math.random()}`:'',d.createElement('div',{className:c('weui-navbar__item',{"weui-bar__item_on":g==e}),style:h,"data-name":b.pagePath,"data-index":g,onClick:this.clickTab.bind(this),key:g},b.text,d.createElement('div',{className:'weui-navbar__item-border',style:{borderColor:m}}))});return d.createElement('div',{className:'weui-navbar',style:k},n,d.createElement('div',{className:'weui-navbar-border',style:{borderColor:l}}))}renderBottom(){let a=this.props,b=a.tabIndex,e=a.position||'bottom',g=a.list||[],h={};h.backgroundColor=a.backgroundColor,h.borderColor='white'===a.borderStyle?j:i,h.color=a.color,h.position='absolute',h.zIndex=5,h.display=0<=b?'':'none',h.height=a.height;const k={backgroundColor:'white'===a.borderStyle?j:i};let l=g.map((e,g)=>{let h=g==b&&a.selectedColor?{color:a.selectedColor}:{color:a.color},i=g==b?e.selectedIconPath:e.iconPath,j=i?{}:f.displayNone;i=i?`${this.props.baseURL}${i}?r=${Math.random()}`:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';let k={position:'absolute',top:0,right:-6};return e.badge&&'none'!=e.badge.type||(k.display='none'),e.badge&&e.badge.backgroundColor&&(k.backgroundColor=e.badge.backgroundColor),d.createElement('a',{className:`weui-tabbar__item ${g==b?'weui-tabbar__item_on':''}`,"data-index":g,"data-name":e.pagePath,onClick:this.clickTab.bind(this),key:g},d.createElement('span',{style:{display:'inline-block',position:'relative'}},d.createElement('img',{src:i,className:'weui-tabbar__icon'}),d.createElement('span',{className:c('weui-badge',{"weui-badge_dot":e.badge&&'redDot'==e.badge.type}),style:k},e.badge&&'text'==e.badge.type&&e.badge.text)),d.createElement('p',{className:'weui-tabbar__label',style:h},e.text))});return d.createElement('div',{className:'weui-tabbar',style:h,onAnimationEnd:this.onAnimationEnd},d.createElement('div',{className:'weui-tabbar-border',style:k}),l)}render(){let a=this.props.position;return'top'==a?this.renderTop():this.renderBottom()}}module.exports=l((a)=>{let b=a.simulator.webviewInfos[a.simulator.currentWebviewID]||{},c=a.toolbar.deviceInfo;return _extends({},a.simulator.tabbar,{height:c.tabbarHeight,statusbarHeight:c.statusbarHeight,navigationbarHeight:c.navigationbarHeight,tabIndex:b.tabbarIndex,baseURL:`http://127.0.0.1:${global.proxyPort}/__pageframe__/`})},(a)=>{return{switchTab:k.bindActionCreators(b.switchTab,a)}})(m)}(require('lazyload'),require);