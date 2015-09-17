/*! formstone v0.8.13 [upload.js] 2015-09-17 | MIT License | formstone.it */

!function(a,b){"use strict";function c(a){if(b.support.file){var c="";c+='<div class="'+r.target+'">',c+=a.label,c+="</div>",c+='<input class="'+r.input+'" type="file"',a.multiple&&(c+=" multiple"),c+=">",this.addClass(r.base).append(c),a.$input=this.find(q.input),a.queue=[],a.total=0,a.uploading=!1,a.disabled=!0,this.on(s.click,q.target,a,g).on(s.dragEnter,a,i).on(s.dragOver,a,j).on(s.dragLeave,a,k).on(s.drop,q.target,a,l),a.$input.on(s.change,a,h),f.call(this,a)}}function d(a){b.support.file&&(a.$input.off(s.namespace),this.off([s.click,s.dragEnter,s.dragOver,s.dragLeave,s.drop].join(" ")).removeClass(r.base).html(""))}function e(a){a.disabled||(this.addClass(r.disabled),a.$input.prop("disabled",!0),a.disabled=!0)}function f(a){a.disabled&&(this.removeClass(r.disabled),a.$input.prop("disabled",!1),a.disabled=!1)}function g(a){t.killEvent(a);var b=a.data;b.disabled||b.$input.trigger(s.click)}function h(a){t.killEvent(a);var b=a.data,c=b.$input[0].files;!b.disabled&&c.length&&m(b,c)}function i(a){t.killEvent(a);var b=a.data;b.$el.addClass(r.dropping)}function j(a){t.killEvent(a);var b=a.data;b.$el.addClass(r.dropping)}function k(a){t.killEvent(a);var b=a.data;b.$el.removeClass(r.dropping)}function l(a){t.killEvent(a);var b=a.data,c=a.originalEvent.dataTransfer.files;b.$el.removeClass(r.dropping),b.disabled||m(b,c)}function m(a,b){for(var c=[],d=0;d<b.length;d++){var e={index:a.total++,file:b[d],name:b[d].name,size:b[d].size,started:!1,complete:!1,error:!1,transfer:null};c.push(e),a.queue.push(e)}a.uploading||(v.on(s.beforeUnload,function(){return a.leave}),a.uploading=!0),a.$el.trigger(s.start,[c]),n(a)}function n(a){var b=0,c=[];for(var d in a.queue)!a.queue.hasOwnProperty(d)||a.queue[d].complete||a.queue[d].error||c.push(a.queue[d]);a.queue=c;for(var e in a.queue)if(a.queue.hasOwnProperty(e)){if(!a.queue[e].started){var f=new FormData;f.append(a.postKey,a.queue[e].file);for(var g in a.postData)a.postData.hasOwnProperty(g)&&f.append(g,a.postData[g]);o(a,a.queue[e],f)}if(b++,b>=a.maxQueue)return;d++}0===b&&(v.off(s.beforeUnload),a.uploading=!1,a.$el.trigger(s.complete))}function o(b,c,d){d=b.beforeSend.call(u,d),c.size>=b.maxSize?(c.error=!0,b.$el.trigger(s.fileError,[c,"Too large"]),n(b)):(c.started=!0,c.transfer=a.ajax({url:b.action,data:d,type:"POST",contentType:!1,processData:!1,cache:!1,xhr:function(){var d=a.ajaxSettings.xhr();return d.upload&&d.upload.addEventListener("progress",function(a){var d=0,e=a.loaded||a.position,f=a.total;a.lengthComputable&&(d=Math.ceil(e/f*100)),b.$el.trigger(s.fileProgress,[c,d])},!1),d},beforeSend:function(){b.$el.trigger(s.fileStart,[c])},success:function(a){c.complete=!0,b.$el.trigger(s.fileComplete,[c,a]),n(b)},error:function(a,d,e){c.error=!0,b.$el.trigger(s.fileError,[c,e]),n(b)}}))}var p=b.Plugin("upload",{widget:!0,defaults:{action:"",beforeSend:function(a){return a},customClass:"",label:"Drag and drop files or click to select",leave:"You have uploads pending, are you sure you want to leave this page?",maxQueue:2,maxSize:5242880,multiple:!0,postData:{},postKey:"file"},classes:["input","target","multiple","dropping","disabled"],methods:{_construct:c,_destruct:d,disable:e,enable:f}}),q=p.classes,r=q.raw,s=p.events,t=p.functions,u=b.window,v=b.$window;s.complete="complete",s.fileStart="filestart",s.fileProgress="fileprogress",s.fileComplete="filecomplete",s.fileError="fileerror",s.start="start"}(jQuery,Formstone);