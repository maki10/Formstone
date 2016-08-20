/*! formstone v1.2.2 [viewer.js] 2016-08-20 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./transition"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(){}function d(){}function e(){L=a(H.base),console.log(L)}function f(a){var c,d="";a.images=[],a.source=!1,a.gallery=!1,a.isMobile=b.isMobile,a.isTouch=b.support.touch,a.isAnimating=!0,a.isZooming=!1,a.tapTimer=null,a.loaded=!1,a.doRAF=!1,a.zooming=!1,a.doTouch=a.isMobile&&a.isTouch,a.margin=0,a.margin*=2,a.thisClasses=[I.base,I.animating,I.loading,a.customClass,a.theme],a.$images=this.find("img").addClass(I.source),a.index=0,a.total=a.$images.length-1,a.$images.length>1&&(a.gallery=!0);for(var f=0;f<a.$images.length;f++)c=a.$images.eq(f),a.images.push(c.attr("src"));d+='<div class="'+I.wrapper+'">',d+='<div class="'+I.viewport+'"></div>',d+='<div class="'+I.controls+'">',d+='<button type="button" class="'+[I.control,I.zoom_out].join(" ")+'">'+a.labels.zoom_out+"</button>",d+='<button type="button" class="'+[I.control,I.zoom_in].join(" ")+'">'+a.labels.zoom_in+"</button>",a.gallery&&(d+='<button type="button" class="'+[I.control,I.control_previous].join(" ")+'">'+a.labels.previous+"</button>",d+='<button type="button" class="'+[I.control,I.control_next].join(" ")+'">'+a.labels.next+"</button>"),d+="</div>",d+="</div>",this.addClass(a.thisClasses.join(" ")).prepend(d),a.$wrapper=this.find(H.wrapper),a.$viewport=this.find(H.viewport),a.$controlBox=this.find(H.controls),a.$controls=this.find(H.control),e(),D(a),h(a,a.images[a.index]),console.log(a)}function g(a){}function h(b,c,d){b.$container=a('<div class="'+I.container+'"><img></div>'),b.$image=b.$container.find("img"),b.$viewport.append(b.$container),b.$image.one(J.load,function(){i(b),b.loaded=!0,b.doTouch&&b.$viewport.fsTouch({pan:!0,scale:!0}).on(J.scaleStart,b,w).on(J.scaleEnd,b,y).on(J.scale,b,x),d&&b.$el.trigger(J.loaded)}).attr("src",c).addClass(I.image),(b.$image[0].complete||4===b.$image[0].readyState)&&b.$image.trigger(J.load),b.source=c}function i(a){j(a),k(a),a.containerTop=a.viewportHeight/2,a.containerLeft=a.viewportWidth/2,m(a),a.imageHeight=a.naturalHeight,a.imageWidth=a.naturalWidth,q(a),l(a),n(a),o(a),p(a),a.doRAF=!0}function j(a){var b=F(a.$image);a.naturalHeight=b.naturalHeight,a.naturalWidth=b.naturalWidth,a.ratioHorizontal=a.naturalHeight/a.naturalWidth,a.ratioVertical=a.naturalWidth/a.naturalHeight,a.isWide=a.naturalWidth>a.naturalHeight}function k(a){a.viewportHeight=a.$viewport.outerHeight(),a.viewportWidth=a.$viewport.outerWidth()}function l(a){a.imageHeight<=a.viewportHeight?(a.containerMinTop=a.viewportHeight/2,a.containerMaxTop=a.viewportHeight/2):(a.containerMinTop=a.viewportHeight-a.imageHeight/2,a.containerMaxTop=a.imageHeight/2),a.imageWidth<=a.viewportWidth?(a.containerMinLeft=a.viewportWidth/2,a.containerMaxLeft=a.viewportWidth/2):(a.containerMinLeft=a.viewportWidth-a.imageWidth/2,a.containerMaxLeft=a.imageWidth/2)}function m(a){a.isWide?(a.imageMinWidth=a.viewportWidth,a.imageMinHeight=a.imageMinWidth*a.ratioHorizontal,a.imageMinHeight>a.viewportHeight&&(a.imageMinHeight=a.viewportHeight,a.imageMinWidth=a.imageMinHeight*a.ratioVertical)):(a.imageMinHeight=a.viewportHeight,a.imageMinWidth=a.imageMinHeight*a.ratioVertical,a.imageMinWidth>a.viewportWidth&&(a.imageMinWidth=a.viewportWidth,a.imageMinHeight=a.imageMinWidth*a.ratioHorizontal)),(a.imageMinWidth>a.naturalWidth||a.imageMinHeight>a.naturalHeight)&&(a.imageMinHeight=a.naturalHeight,a.imageMinWidth=a.naturalWidth),a.imageMaxHeight=a.naturalHeight,a.imageMaxWidth=a.naturalWidth}function n(a){a.imageTop=-(a.imageHeight/2),a.imageLeft=-(a.imageWidth/2)}function o(a){a.lastContainerTop=a.containerTop,a.lastContainerLeft=a.containerLeft,a.lastImageHeight=a.imageHeight,a.lastImageWidth=a.imageWidth,a.lastImageTop=a.imageTop,a.lastImageLeft=a.imageLeft}function p(a){a.renderContainerTop=a.lastContainerTop,a.renderContainerLeft=a.lastContainerLeft,a.renderImageTop=a.lastImageTop,a.renderImageLeft=a.lastImageLeft,a.renderImageHeight=a.lastImageHeight,a.renderImageWidth=a.lastImageWidth}function q(a){a.imageHeight=a.imageMinHeight,a.imageWidth=a.imageMinWidth}function r(a){a.imageHeight<a.imageMinHeight&&(a.imageHeight=a.imageMinHeight),a.imageHeight>a.imageMaxHeight&&(a.imageHeight=a.imageMaxHeight),a.imageWidth<a.imageMinWidth&&(a.imageWidth=a.imageMinWidth),a.imageWidth>a.imageMaxWidth&&(a.imageWidth=a.imageMaxWidth)}function s(a){a.containerTop<a.containerMinTop&&(a.containerTop=a.containerMinTop),a.containerTop>a.containerMaxTop&&(a.containerTop=a.containerMaxTop),a.containerLeft<a.containerMinLeft&&(a.containerLeft=a.containerMinLeft),a.containerLeft>a.containerMaxLeft&&(a.containerLeft=a.containerMaxLeft)}function t(a){null===a.tapTimer?a.tapTimer=K.startTimer(a.tapTimer,500,function(){u(a)}):(u(a),z(a))}function u(a){K.clearTimer(a.tapTimer),a.tapTimer=null}function v(a){a.$container.css({top:a.containerTop,left:a.containerLeft}),a.$image.css({height:a.imageHeight,width:a.imageWidth,top:a.imageTop,left:a.imageLeft})}function w(a){var b=a.data;t(b),o(b)}function x(a){var b=a.data;u(b),b.doRAF=!1,b.zooming=!1;b.imageHeight>b.imageMinHeight+1;b.containerTop=b.lastContainerTop+a.deltaY,b.containerLeft=b.lastContainerLeft+a.deltaX,b.imageHeight=b.lastImageHeight*a.scale,b.imageWidth=b.lastImageWidth*a.scale,l(b),s(b),r(b),n(b),v(b)}function y(a){var b=a.data;b.zooming||(o(b),p(b),b.doRAF=!0)}function z(a){var b=a.imageHeight>a.imageMinHeight+1;a.zooming=!0,o(a),p(a),b?(a.imageHeight=a.imageMinHeight,a.imageWidth=a.imageMinWidth):(a.imageHeight=a.imageMaxHeight,a.imageWidth=a.imageMaxWidth),l(a),s(a),n(a),a.doRAF=!0}function A(){K.iterate.call(L,B)}function B(a){a.doRAF&&(a.enertia=.2,a.renderContainerTop+=Math.round((a.containerTop-a.renderContainerTop)*a.enertia),a.renderContainerLeft+=Math.round((a.containerLeft-a.renderContainerLeft)*a.enertia),a.renderImageTop+=Math.round((a.imageTop-a.renderImageTop)*a.enertia),a.renderImageLeft+=Math.round((a.imageLeft-a.renderImageLeft)*a.enertia),a.renderImageHeight+=Math.round((a.imageHeight-a.renderImageHeight)*a.enertia),a.renderImageWidth+=Math.round((a.imageWidth-a.renderImageWidth)*a.enertia),a.$container.css({top:a.renderContainerTop,left:a.renderContainerLeft}),a.$image.css({height:a.renderImageHeight,width:a.renderImageWidth,top:a.renderImageTop,left:a.renderImageLeft}))}function C(a){}function D(a){}function E(a){}function F(a){var b=a[0],c=new Image;return"undefined"!=typeof b.naturalHeight?{naturalHeight:b.naturalHeight,naturalWidth:b.naturalWidth}:"img"===b.tagName.toLowerCase()&&(c.src=b.src,{naturalHeight:c.height,naturalWidth:c.width})}var G=b.Plugin("viewer",{widget:!0,defaults:{customClass:"",labels:{count:"of",next:"Next",previous:"Previous",zoom_in:"Zoom In",zoom_out:"Zoom Out"},theme:"fs-light"},classes:["source","wrapper","viewport","container","image","controls","control_previous","control_next","zoom_in","zoom_out","animating","loading","scaling","zooming"],events:{loaded:"loaded",ready:"ready"},methods:{_setup:c,_construct:f,_destruct:g,_resize:d,_raf:A,resize:E,load:h,unload:C}}),H=G.classes,I=H.raw,J=G.events,K=G.functions,L=(b.window,b.$window,[])});