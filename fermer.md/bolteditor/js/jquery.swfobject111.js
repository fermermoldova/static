(function(g,i,j){function l(a,e){var b=(a[0]||0)-(e[0]||0);return b>0||!b&&a.length>0&&l(a.slice(1),e.slice(1))}function m(a){if(typeof a!=h)return a;var e=[],b="",d;for(d in a)b=typeof a[d]==h?m(a[d]):[d,n?encodeURI(a[d]):a[d]].join("="),e.push(b);return e.join("&")}var h="object",n=!0;try{var k=j.description||(new j("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")}catch(o){k="Unavailable"}var c=k.match(/\d+/g)||[0];g[i]={available:c[0]>0,activeX:j&&!j.name,version:{original:k,array:c,string:c.join("."),
major:parseInt(c[0],10)||0,minor:parseInt(c[1],10)||0,release:parseInt(c[2],10)||0},hasVersion:function(a){a=/string|number/.test(typeof a)?a.toString().split("."):/object/.test(typeof a)?[a.major,a.minor]:a||[0,0];return l(c,a)},encodeParams:!0,expressInstall:"expressInstall.swf",expressInstallIsActive:!1,create:function(a){if(!a.swf||this.expressInstallIsActive||!this.available&&!a.hasVersionFail)return!1;if(!this.hasVersion(a.hasVersion||1)){this.expressInstallIsActive=!0;if(typeof a.hasVersionFail==
"function"&&!a.hasVersionFail.apply(a))return!1;a={swf:a.expressInstall||this.expressInstall,height:137,width:214,flashvars:{MMredirectURL:location.href,MMplayerType:this.activeX?"ActiveX":"PlugIn",MMdoctitle:document.title.slice(0,47)+" - Flash Player Installation"}}}attrs={data:a.swf,type:"application/x-shockwave-flash",id:a.id||"flash_"+Math.floor(Math.random()*999999999),width:a.width||320,height:a.height||180,style:a.style||""};n=typeof a.useEncode!=="undefined"?a.useEncode:this.encodeParams;
a.movie=a.swf;a.wmode=a.wmode||"opaque";delete a.fallback;delete a.hasVersion;delete a.hasVersionFail;delete a.height;delete a.id;delete a.swf;delete a.useEncode;delete a.width;var e=document.createElement("div"),b=attrs,d=[],c;for(c in b)b[c]&&d.push([c,'="',b[c],'"'].join(""));var b=d.join(" "),f,d=[];for(f in a)d.push(['<param name="',f,'" value="',m(a[f]),'" />'].join(""));f=d.join("");f=["<object ",b,">",f,"</object>"];e.innerHTML=f.join.call(f,"");return e.firstChild}};g.fn[i]=function(a){var c=
this.find(h).andSelf().filter(h);/string|object/.test(typeof a)&&this.each(function(){var b=g(this),c;a=typeof a==h?a:{swf:a};a.fallback=this;if(c=g[i].create(a))b.children().remove(),b.html(c)});typeof a=="function"&&c.each(function(){var b=this;b.jsInteractionTimeoutMs=b.jsInteractionTimeoutMs||0;b.jsInteractionTimeoutMs<660&&(b.clientWidth||b.clientHeight?a.call(b):setTimeout(function(){g(b)[i](a)},b.jsInteractionTimeoutMs+66))});return c}})(jQuery,"flash",navigator.plugins["Shockwave Flash"]||
window.ActiveXObject);