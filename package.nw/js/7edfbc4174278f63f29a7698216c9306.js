'use strict';!function(require,directRequire){function a(b){if(null===b||b===void 0||'object'!=typeof b)return b;if(Array.isArray(b)){const c=[];for(let d=0;d<b.length;++d)c[d]=a(b[d]);return c}const c={};for(const d in b)c[d]=a(b[d]);return c}const b=require('fs'),c=require('path'),d=require('./72653d4b93cdd7443296229431a7aa9a.js'),e=require('mkdir-p'),f=require('rmdir'),g=require('glob'),h=require('./6bf6a06ed411430adf3758f647290535.js'),i=require('crypto'),j=`-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCZm2cFP/uF81V5KH/B9dn/g7WA
CM3yu0P7n9sm/O6c58HTYI0+xugCfwMuoX7hyU4jkWbZ/BYK7IgWhmVfiRtgomJe
wuZlxfGUpmrr1PA2KbYVpPW0V6e/2uZu1Ev3xU7PkHKYf4AKgPO8w98hvKlUJRbk
H4AYMxX6eL9j9qCBGQIDAQAB
-----END PUBLIC KEY-----`;module.exports={mkdirAsync:function(a){return new Promise((b,c)=>{e(a,(a)=>{return a?c(a):b()})})},fsRmdirAsync:function(a){return new Promise((b,c)=>{f(a,(a)=>{return a?c(a):b()})})},fsRenameAsync:function(a,c){return new Promise((d,f)=>{b.rename(a,c,(a)=>{return a?f(a):d()})})},fsReadFileAsync:function(a,c=''){return new Promise((d,f)=>{b.readFile(a,c,(a,b)=>{return a?f(a):d(b)})})},unpackBuffer:function(a,b=void 0){return new Promise((c,d)=>{let e;try{e=h(a,b)}catch(a){return d(a)}return c(e)})},fsRmdir:f,mkdirP:e,fsExistsAsync:function(a){return new Promise((c)=>{b.exists(a,(a)=>{return c(a)})})},verifyBufferWithHash:function(a,b){const c=Buffer.from(b,'base64'),d=i.createHash('md5');d.update(a);const e=d.digest('hex'),f=i.createVerify('RSA-SHA1');return f.update(e),!!f.verify(j,c)},randomString:function(a=12){const b='-_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'+Date.now();let c='';for(let d=0;d<a;d++){const a=Math.floor(Math.random()*b.length);c+=b.substring(a,a+1)}return c},dangerousCloneJSON:a}}(require('lazyload'),require);