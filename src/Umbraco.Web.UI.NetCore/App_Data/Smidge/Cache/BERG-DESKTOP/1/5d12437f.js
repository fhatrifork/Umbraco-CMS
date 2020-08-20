!function(m){"use strict";var i=function(e){var n=e,t=function(){return n};return{get:t,set:function(e){n=e},clone:function(){return i(t())}}},e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=function(e){return{isFullscreen:function(){return null!==e.get()}}},n=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),g=function(e,n){e.fire("FullscreenStateChanged",{state:n})},w=n.DOM,r=function(e,n){var t,r,l,i,o,c,s=m.document.body,u=m.document.documentElement,d=n.get(),a=function(){var e,n,t,i;w.setStyle(l,"height",(t=m.window,i=m.document.body,i.offsetWidth&&(e=i.offsetWidth,n=i.offsetHeight),t.innerWidth&&t.innerHeight&&(e=t.innerWidth,n=t.innerHeight),{w:e,h:n}).h-(r.clientHeight-l.clientHeight))},h=function(){w.unbind(m.window,"resize",a)};if(t=(r=e.getContainer()).style,i=(l=e.getContentAreaContainer().firstChild).style,d)i.width=d.iframeWidth,i.height=d.iframeHeight,d.containerWidth&&(t.width=d.containerWidth),d.containerHeight&&(t.height=d.containerHeight),w.removeClass(s,"mce-fullscreen"),w.removeClass(u,"mce-fullscreen"),w.removeClass(r,"mce-fullscreen"),o=d.scrollPos,m.window.scrollTo(o.x,o.y),w.unbind(m.window,"resize",d.resizeHandler),e.off("remove",d.removeHandler),n.set(null),g(e,!1);else{var f={scrollPos:(c=w.getViewPort(),{x:c.x,y:c.y}),containerWidth:t.width,containerHeight:t.height,iframeWidth:i.width,iframeHeight:i.height,resizeHandler:a,removeHandler:h};i.width=i.height="100%",t.width=t.height="",w.addClass(s,"mce-fullscreen"),w.addClass(u,"mce-fullscreen"),w.addClass(r,"mce-fullscreen"),w.bind(m.window,"resize",a),e.on("remove",h),a(),n.set(f),g(e,!0)}},l=function(e,n){e.addCommand("mceFullScreen",function(){r(e,n)})},o=function(t){return function(e){var n=e.control;t.on("FullscreenStateChanged",function(e){n.active(e.state)})}},c=function(e){e.addMenuItem("fullscreen",{text:"Fullscreen",shortcut:"Ctrl+Shift+F",selectable:!0,cmd:"mceFullScreen",onPostRender:o(e),context:"view"}),e.addButton("fullscreen",{active:!1,tooltip:"Fullscreen",cmd:"mceFullScreen",onPostRender:o(e)})};e.add("fullscreen",function(e){var n=i(null);return e.settings.inline||(l(e,n),c(e),e.addShortcut("Ctrl+Shift+F","","mceFullScreen")),t(n)})}(window);