!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var a=e();for(var n in a)("object"==typeof exports?exports:t)[n]=a[n]}}(window,function(){return function(t){var e={};function a(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=2)}([function(t,e,a){"use strict";e.__esModule=!0;var n=function(t){for(var e=arguments.length,a=Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];var r;if(window.hasOwnProperty("wx")&&window.wx.hasOwnProperty(t))return(r=window.wx)[t].apply(r,a)},r="${env}",o=0,i=0,l=0,u=0;function f(t){for(var e,a=arguments.length,n=Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];(e=console).log.apply(e,["WXRank:",t].concat(n))}function c(t){if("production"!=r){for(var e,a=arguments.length,n=Array(a>1?a-1:0),o=1;o<a;o++)n[o-1]=arguments[o];(e=console).log.apply(e,["WXRank:",t].concat(n))}}e.default={getOffestX:function(){return o},getOffestY:function(){return i},getDesignWidth:function(){return l},getDesignHeight:function(){return u},init:function(t){f("init..."),f("wxrank version:3.7.5"),Laya.MiniAdpter.init(!0,!0),Laya.init(750,1334),function(t){n("onMessage",function(e){t&&t(e)})}(function(e){try{"filedata"===e.isLoad?(Laya.MiniFileMgr.ziyuFileData[e.url]=e.data,Laya.loader.load(e.url)):"filenative"==e.isLoad?e.isAdd?Laya.MiniFileMgr.filesListObj[e.url]=e.data:delete Laya.MiniFileMgr.filesListObj[e.url]:(c("message:",e),e.action&&"initRank"===e.action&&e.data?(Laya.stage.width=e.data.width,Laya.stage.height=e.data.height,o=e.data.offsetX,i=e.data.offsetY,l=e.data.designWidth,u=e.data.designHeight,Laya.stage.frameRate=Laya.Stage.FRAME_SLOW,Laya.stage.scaleMode=Laya.Stage.SCALE_EXACTFIT):t&&t(e))}catch(t){c("Error",t)}})},setUserCloudStorage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n("setUserCloudStorage",t)},getUserCloudStorage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n("getUserCloudStorage",t)},removeUserCloudStorage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n("removeUserCloudStorage",t)},getFriendCloudStorage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n("getFriendCloudStorage",t)},getGroupCloudStorage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n("getGroupCloudStorage",t)},getUserInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n("getUserInfo",t)},printDebug:c,printLog:f}},function(t,e,a){"use strict";e.__esModule=!0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function r(t){if("string"==typeof t)try{return JSON.parse(t)}catch(e){return t}return t}function o(t,e){var a=e.split("|"),n=a[0],o=r(t);t?t[n]?o=r(t[n]):n.split(".").forEach(function(t){o=null!=o&&null!==o[t]&&void 0!==o[t]?r(o[t]):null}):o=null;for(var i=[],l=1;l<a.length;l+=2){var u=a[l],f=a.length>l+1?a[l+1]:"";i.push({action:u,target:f})}for(var c=null,s=0;s<i.length;s++){var d=i[s],g=d.action,y=d.target;"default"===g&&(c=y),null!=o?"eq"===g&&y!==o.toString()||"neq"===g&&y===o.toString()||"gt"===g&&o<=y||"egt"===g&&o<y||"lt"===g&&o>=y||"elt"===g&&o>y||"like"===g&&o.toString().indexOf(y)<0?o=null:"sub"===g?o.toString().length>Number(y)&&(o=o.toString().substr(0,Number(y))+"..."):"append"===g&&(o=o.toString()+y):o=null}return null===o&&(o=c),o}e.setLocationSelf=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;i=t,l=e},e.bindView=function t(e,a){for(var u=this,f=r(a),c=0;c<e.numChildren;c++){var s=e.getChildAt(c);if(s.name){var d=o(f,s.name);null!=d?(s.visible=!0,s instanceof Laya.List?function(){var e=s;e.array=[],e.repeatY>1&&e.repeatY>=e.repeatX&&!e.vScrollBarSkin?e.vScrollBarSkin=null:e.repeatX>1&&e.repeatX>=e.repeatY&&!e.hScrollBarSkin?e.hScrollBarSkin=null:e.vScrollBarSkin||e.hScrollBarSkin||(e.vScrollBarSkin=null),e.renderHandler=Laya.Handler.create(u,function(a,r){var o=e.array[r];"object"===(void 0===o?"undefined":n(o))&&Object.assign(o,{index:r}),t(a,o)},null,!1),e.array=d;var a=e.array.findIndex(function(t){return!0===t.self});-1!=a&&i?e.scrollTo(l+a):e.scrollTo(0)}():s instanceof Laya.FontClip?s.value=""+d:s instanceof Laya.Label?s.text=""+d:s instanceof Laya.Text?s.text=""+d:s instanceof Laya.Image?s.skin=d:s instanceof Laya.Box?t(s,d):s.value=d):s.visible=!1}}};var i=!1,l=0},function(t,e,a){"use strict";var n=function(t){return t&&t.__esModule?t:{default:t}}(a(0)),r=a(3),o=a(1);n.default.init(function(t){"showRank"===t.action&&t.data?(0,r.showRank)(t.data.ui):"hideRank"===t.action&&t.data?(0,r.hideRank)():"setRankKey"===t.action&&t.data?(0,r.setRankKey)(t.data.key,t.data.count,t.data.offset):"setRankScore"===t.action&&t.data?(0,r.setRankScore)(t.data.key,t.data.score,t.data.extraData):"setRankLocationSelf"===t.action&&t.data&&(0,o.setLocationSelf)(t.data.enable,t.data.offset)})},function(t,e,a){"use strict";e.__esModule=!0,e.setRankKey=function(t,e,a){l=t,s=e,d=a,g()},e.setRankScore=function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=[{key:t,value:JSON.stringify({wxgame:{score:e,update_time:Math.floor(Date.now()/1e3)},extraData:a})}];n.default.setUserCloudStorage({KVDataList:r,success:function(){t==l&&g()}})},e.showRank=function(t){u&&JSON.stringify(t)===JSON.stringify(u)||(u=t,function(){if(u)if(Laya.stage.destroyChildren(),u instanceof Array)u.forEach(function(t){var e=Laya.View.createComp(t);e&&((0,r.bindView)(e,i),Laya.stage.addChild(e))});else{var t=Laya.View.createComp(u);t&&(t.x=n.default.getOffestX(),t.y=n.default.getOffestY(),(0,r.bindView)(t,i),Laya.stage.addChild(t))}}()),g()},e.hideRank=function(){u=null,Laya.stage.destroyChildren()};var n=function(t){return t&&t.__esModule?t:{default:t}}(a(0)),r=a(1),o=a(4),i={},l=null,u=null,f=!0,c=null,s=100,d=0;function g(){c||(c=setTimeout(function(){c=null,u&&l&&f&&(f=!1,(0,o.fetchRankData)(l,s,d,function(t){n.default.printDebug("rankData:",t),i=t,f=!0;for(var e=0;e<Laya.stage.numChildren;e++)(0,r.bindView)(Laya.stage.getChildAt(e),i)}))},200))}},function(t,e,a){"use strict";e.__esModule=!0,e.fetchRankData=function(t,e,a,n){var i={};r(function(r){o(r,t,e,a,function(t){Object.assign(i,t),n&&n(i)})})};var n=function(t){return t&&t.__esModule?t:{default:t}}(a(0)),r=function(t){n.default.getUserInfo({openIdList:["selfOpenId"],success:function(e){var a=e.data[0],n={playerId:a.openId,nickname:a.nickName,avatarUrl:a.avatarUrl};t&&t(n)}})},o=function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments[4];n.default.getFriendCloudStorage({keyList:[e],success:function(n){var i=[];n&&n.data&&n.data.length>0&&(i=n.data);var l,u=-1,f=null,c=null,s=i.map(function(t){var a={};t.KVDataList.forEach(function(t){a[t.key]=t.value});var n,r=t.openid,o=t.nickname,i=t.avatarUrl,l=0,u=0,f=function(t){if("string"==typeof t)try{return JSON.parse(t)}catch(e){return t}return t}(a[e])||{};return n=f.extraData||"",f.wxgame&&(u=f.wxgame.score||0,l=f.wxgame.update_time||0),{playerId:r,nickname:o,avatarUrl:i,score:u,timestamp:l,extraData:n}}).sort(function(t,e){return e.score-t.score}).splice(r,a).map(function(e,a){var n=e.nickname===t.nickname&&e.avatarUrl===t.avatarUrl;return n&&(c=e,u=a,f={score:e.score,extraData:e.extraData}),Object.assign(e,{self:n,rank:a+1}),e});l=u<=0?s.slice(0,3):s.slice(u-1,u+2),o&&o({selfInfo:t,rankList:s,rankSelf:c,selfData:f,rankThree:l})}})}}])});