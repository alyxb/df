(function(a){var
b=undefined}(function(){return this}()));(function(o){"use strict";var
gU="q",en="i",an="img",gu="Invalid_argument",cX="Map.bal",eb='"',c1=",",dY=1255,ea="<",ge=255,gI=0x800,dX="jsError",am=0x8000,gT="data-text-indent-alt",b9="th",aB=256,W="style",ao="!",dW="\n}",gd="End_of_file",gt="align",gH="text-align",cP="center",gG="data-main",gc="Failure",bj="label",aS="col",X=0xff,gb="data-converted-paragraph",s=50834029,bq="title",dV="code",d4="del",k=-579472809,b8="font",gs="strike",I="contents",dU="dfn",bT="height",gr="abbr",em="samp",b=-841728391,d$=0xf,E=698996132,b7=128,ga=0xdc00,gq="Sys_blocked_io",aR="p",el="start",gS="fd ",aE="form",B=248,ek="DeltaViewInsertion",ej="var",f$="data-list-level",gF="Division_by_zero",ei=" {\n",b6=">",gR=1027,gE="<\/",eh="em",f_="Sys_error",dT="cite",bm="noframes",c7="caption",Y="ol",P=246,a8="td",aQ="object",d3="[endif]",b5="noscript",c0="optgroup",dS="kbd",gD="buffer.ml",b0="h5",cO="int_of_string",aD="table",cN="dt",bR="tbody",gp=127,bS=1024,R="script",f9="display",go=" : flags Open_rdonly and Open_wronly are not compatible",cZ="colgroup",gQ="mso-list",c6="button",b4="h1",bP="h6",aA="head",bZ="h3",gP="([^/]*)",f8=512,gn="-",gC="br",f7=0x7ff0,gm=" : file already exists",eg="b",a3=0xffffff,az="body",dR="u",gl="startfragment",d2="strong",gO="Out_of_memory",bO="\n",c5="big",bN="h2",Z="ul",cY=254,ef="index out of bounds",f6="bdo",gB=100,bY="pre",cW="select",V="tr",c4="_bigarr02",gA=" : flags Open_text and Open_binary are not compatible",cM="area",ee="@",bX="tfoot",bp="isindex",aC=0xffff,cV="basefont",cL="input",gj="wordimport.js",cU="none",gk=12520,be="span",dQ=3257036,ay=-804212868,bM="thead",d_=17731,f5="lexing: empty token",cT="small",aZ="--",Q="li",cS="menu",bQ=1000,g="",gz="Stack_overflow",b3="sub",dP="v:shape",bL="address",d1="^",bo=749117977,bi=0x3f,gx="tab-interval",gy="Not_found",d9=65599,a2="link",gi="src",c3="frame",bW="dd",gh="Match_failure",f4=", ",dO="ins",b2="html",f3="static/",h=781665294,c2="iframe",ed=252,ec="tt",gN=0xf0,gM="<![endif]",a5="dir",dN="data-list-type",bh="param",a7="width",bK="class",gw=0x3FFFFFFF,gv=1026,gL="map",a6="fieldset",u="src/main/re/css_parser.ml",a1="a",bV="sup",d8="?",cK="list-style",bd=" ",_=0x80,f2="Undefined_recursive_module",bl="base",cR="legend",a0=-810056052,a4=":",gK="list-style-type",bk="option",cQ="applet",gg=0xe0,bU="hr",f1="cleanDocument",bJ="h4",l=-936778451,cJ="Set.bal",gf=0xdfff,bg="div",ax="/",d7="compare: functional value",gJ="Assert_failure",d0="s",aP="meta",dZ=1073741823,d6="true",j=870530776,cI="textarea",bf="dl",aO=250,d5="acronym",bn="frameset",b1="blockquote";function
sw(d,b,e,c,f){if(c<=b)for(var
a=1;a<=f;a++)e[c+a]=d[b+a];else
for(var
a=f;a>=1;a--)e[c+a]=d[b+a];return 0}function
db(c,b,a){var
d=String.fromCharCode;if(b==0&&a<=4096&&a==c.length)return d.apply(null,c);var
e=g;for(;0<a;b+=bS,a-=bS)e+=d.apply(null,c.slice(b,b+Math.min(a,bS)));return e}function
c9(b){if(o.Uint8Array)var
c=new(o.Uint8Array)(b.l);else
var
c=new
Array(b.l);var
e=b.c,d=e.length,a=0;for(;a<d;a++)c[a]=e.charCodeAt(a);for(d=b.l;a<d;a++)c[a]=0;b.c=c;b.t=4;return c}function
aU(d,e,b,f,c){if(c==0)return 0;if(f==0&&(c>=b.l||b.t==2&&c>=b.c.length)){b.c=d.t==4?db(d.c,e,c):e==0&&d.c.length==c?d.c:d.c.substr(e,c);b.t=b.c.length==b.l?0:2}else
if(b.t==2&&f==b.c.length){b.c+=d.t==4?db(d.c,e,c):e==0&&d.c.length==c?d.c:d.c.substr(e,c);b.t=b.c.length==b.l?0:2}else{if(b.t!=4)c9(b);var
g=d.c,h=b.c;if(d.t==4)if(f<=e)for(var
a=0;a<c;a++)h[f+a]=g[e+a];else
for(var
a=c-1;a>=0;a--)h[f+a]=g[e+a];else{var
i=Math.min(c,g.length-e);for(var
a=0;a<i;a++)h[f+a]=g.charCodeAt(e+a);for(;a<c;a++)h[f+a]=0}}return 0}function
ac(a){return a}function
a9(a,b,c,d,e){aU(ac(a),b,c,d,e);return 0}function
b$(a,b){switch(a.t&6){default:if(b>=a.c.length)return 0;case
0:return a.c.charCodeAt(b);case
4:return a.c[b]}}function
g5(a,c,b){b&=X;if(a.t!=4){if(c==a.c.length){a.c+=String.fromCharCode(b);if(c+1==a.l)a.t=0;return 0}c9(a)}a.c[c]=b;return 0}function
ad(c,a){if(c.fun)return ad(c.fun,a);if(typeof
c!=="function")return c;var
b=c.length|0;if(b===0)return c.apply(null,a);var
e=a.length|0,d=b-e|0;if(d==0)return c.apply(null,a);else
if(d<0)return ad(c.apply(null,a.slice(0,b)),a.slice(b));else
return function(){var
e=arguments.length==0?1:arguments.length,d=new
Array(a.length+e);for(var
b=0;b<a.length;b++)d[b]=a[b];for(var
b=0;b<arguments.length;b++)d[a.length+b]=arguments[b];return ad(c,d)}}function
td(b,a){throw[0,b,a]}function
hm(b,a){if(b==0)return g;if(a.repeat)return a.repeat(b);var
d=g,c=0;for(;;){if(b&1)d+=a;b>>=1;if(b==0)return d;a+=a;c++;if(c==9)a.slice(0,1)}}function
aG(a){if(a.t==2)a.c+=hm(a.l-a.c.length,"\0");else
a.c=db(a.c,0,a.c.length);a.t=0}function
ho(a){if(a.length<24){for(var
b=0;b<a.length;b++)if(a.charCodeAt(b)>gp)return false;return true}else
return!/[^\x00-\x7f]/.test(a)}function
eC(e){for(var
k=g,c=g,h,f,i,a,b=0,j=e.length;b<j;b++){f=e.charCodeAt(b);if(f<_){for(var
d=b+1;d<j&&(f=e.charCodeAt(d))<_;d++);if(d-b>f8){c.substr(0,1);k+=c;c=g;k+=e.slice(b,d)}else
c+=e.slice(b,d);if(d==j)break;b=d}a=1;if(++b<j&&((i=e.charCodeAt(b))&-64)==b7){h=i+(f<<6);if(f<gg){a=h-0x3080;if(a<_)a=1}else{a=2;if(++b<j&&((i=e.charCodeAt(b))&-64)==b7){h=i+(h<<6);if(f<gN){a=h-0xe2080;if(a<gI||a>=0xd7ff&&a<0xe000)a=2}else{a=3;if(++b<j&&((i=e.charCodeAt(b))&-64)==b7&&f<0xf5){a=i-0x3c82080+(h<<6);if(a<0x10000||a>0x10ffff)a=3}}}}}if(a<4){b-=a;c+="\ufffd"}else
if(a>aC)c+=String.fromCharCode(0xd7c0+(a>>10),ga+(a&0x3FF));else
c+=String.fromCharCode(a);if(c.length>bS){c.substr(0,1);k+=c;c=g}}return k+c}function
aF(c,a,b){this.t=c;this.c=a;this.l=b}aF.prototype.toString=function(){switch(this.t){case
9:return this.c;default:aG(this);case
0:if(ho(this.c)){this.t=9;return this.c}this.t=8;case
8:return this.c}};aF.prototype.toUtf16=function(){var
a=this.toString();if(this.t==9)return a;return eC(a)};aF.prototype.slice=function(){var
a=this.t==4?this.c.slice():this.c;return new
aF(this.t,a,this.l)};function
g4(a){return new
aF(0,a,a.length)}function
a(a){return g4(a)}function
eA(c,b){td(c,a(b))}var
x=[0];function
G(a){eA(x.Invalid_argument,a)}function
b_(){G(ef)}function
w(a,b){if(b>>>0>=a.length-1)b_();return a}function
ae(a){if((a.t&6)!=0)aG(a);return a.c}var
tq=Math.log2&&Math.log2(1.1235582092889474E+307)==1020;function
tp(a){if(tq)return Math.floor(Math.log2(a));var
b=0;if(a==0)return-Infinity;if(a>=1)while(a>=2){a/=2;b++}else
while(a<1){a*=2;b--}return b}function
et(c){var
a=new(o.Float32Array)(1);a[0]=c;var
b=new(o.Int32Array)(a.buffer);return b[0]|0}var
g9=Math.pow(2,-24);function
hj(a){throw a}function
eB(){hj(x.Division_by_zero)}function
m(b,c,a){this.lo=b&a3;this.mi=c&a3;this.hi=a&aC}m.prototype.caml_custom="_j";m.prototype.copy=function(){return new
m(this.lo,this.mi,this.hi)};m.prototype.ucompare=function(a){if(this.hi>a.hi)return 1;if(this.hi<a.hi)return-1;if(this.mi>a.mi)return 1;if(this.mi<a.mi)return-1;if(this.lo>a.lo)return 1;if(this.lo<a.lo)return-1;return 0};m.prototype.compare=function(a){var
b=this.hi<<16,c=a.hi<<16;if(b>c)return 1;if(b<c)return-1;if(this.mi>a.mi)return 1;if(this.mi<a.mi)return-1;if(this.lo>a.lo)return 1;if(this.lo<a.lo)return-1;return 0};m.prototype.neg=function(){var
a=-this.lo,b=-this.mi+(a>>24),c=-this.hi+(b>>24);return new
m(a,b,c)};m.prototype.add=function(a){var
b=this.lo+a.lo,c=this.mi+a.mi+(b>>24),d=this.hi+a.hi+(c>>24);return new
m(b,c,d)};m.prototype.sub=function(a){var
b=this.lo-a.lo,c=this.mi-a.mi+(b>>24),d=this.hi-a.hi+(c>>24);return new
m(b,c,d)};m.prototype.mul=function(a){var
b=this.lo*a.lo,c=(b*g9|0)+this.mi*a.lo+this.lo*a.mi,d=(c*g9|0)+this.hi*a.lo+this.mi*a.mi+this.lo*a.hi;return new
m(b,c,d)};m.prototype.isZero=function(){return(this.lo|this.mi|this.hi)==0};m.prototype.isNeg=function(){return this.hi<<16<0};m.prototype.and=function(a){return new
m(this.lo&a.lo,this.mi&a.mi,this.hi&a.hi)};m.prototype.or=function(a){return new
m(this.lo|a.lo,this.mi|a.mi,this.hi|a.hi)};m.prototype.xor=function(a){return new
m(this.lo^a.lo,this.mi^a.mi,this.hi^a.hi)};m.prototype.shift_left=function(a){a=a&63;if(a==0)return this;if(a<24)return new
m(this.lo<<a,this.mi<<a|this.lo>>24-a,this.hi<<a|this.mi>>24-a);if(a<48)return new
m(0,this.lo<<a-24,this.mi<<a-24|this.lo>>48-a);return new
m(0,0,this.lo<<a-48)};m.prototype.shift_right_unsigned=function(a){a=a&63;if(a==0)return this;if(a<24)return new
m(this.lo>>a|this.mi<<24-a,this.mi>>a|this.hi<<24-a,this.hi>>a);if(a<48)return new
m(this.mi>>a-24|this.hi<<48-a,this.hi>>a-24,0);return new
m(this.hi>>a-48,0,0)};m.prototype.shift_right=function(a){a=a&63;if(a==0)return this;var
c=this.hi<<16>>16;if(a<24)return new
m(this.lo>>a|this.mi<<24-a,this.mi>>a|c<<24-a,this.hi<<16>>a>>>16);var
b=this.hi<<16>>31;if(a<48)return new
m(this.mi>>a-24|this.hi<<48-a,this.hi<<16>>a-24>>16,b&aC);return new
m(this.hi<<16>>a-32,b,b)};m.prototype.lsl1=function(){this.hi=this.hi<<1|this.mi>>23;this.mi=(this.mi<<1|this.lo>>23)&a3;this.lo=this.lo<<1&a3};m.prototype.lsr1=function(){this.lo=(this.lo>>>1|this.mi<<23)&a3;this.mi=(this.mi>>>1|this.hi<<23)&a3;this.hi=this.hi>>>1};m.prototype.udivmod=function(e){var
c=0,b=this.copy(),a=e.copy(),d=new
m(0,0,0);while(b.ucompare(a)>0){c++;a.lsl1()}while(c>=0){c--;d.lsl1();if(b.ucompare(a)>=0){d.lo++;b=b.sub(a)}a.lsr1()}return{quotient:d,modulus:b}};m.prototype.div=function(a){var
b=this;if(a.isZero())eB();var
d=b.hi^a.hi;if(b.hi&am)b=b.neg();if(a.hi&am)a=a.neg();var
c=b.udivmod(a).quotient;if(d&am)c=c.neg();return c};m.prototype.mod=function(b){var
a=this;if(b.isZero())eB();var
d=a.hi;if(a.hi&am)a=a.neg();if(b.hi&am)b=b.neg();var
c=a.udivmod(b).modulus;if(d&am)c=c.neg();return c};m.prototype.toInt=function(){return this.lo|this.mi<<24};m.prototype.toFloat=function(){return(this.hi<<16)*Math.pow(2,32)+this.mi*Math.pow(2,24)+this.lo};m.prototype.toArray=function(){return[this.hi>>8,this.hi&X,this.mi>>16,this.mi>>8&X,this.mi&X,this.lo>>16,this.lo>>8&X,this.lo&X]};m.prototype.lo32=function(){return this.lo|(this.mi&X)<<24};m.prototype.hi32=function(){return this.mi>>>8&aC|this.hi<<16};function
c_(b,c,a){return new
m(b,c,a)}function
cb(a){if(!isFinite(a)){if(isNaN(a))return c_(1,0,f7);return a>0?c_(0,0,f7):c_(0,0,0xfff0)}var
f=a==0&&1/a==-Infinity?am:a>=0?0:am;if(f)a=-a;var
b=tp(a)+1023;if(b<=0){b=0;a/=Math.pow(2,-gv)}else{a/=Math.pow(2,b-gR);if(a<16){a*=2;b-=1}if(b==0)a/=2}var
d=Math.pow(2,24),c=a|0;a=(a-c)*d;var
e=a|0;a=(a-e)*d;var
g=a|0;c=c&d$|f|b<<4;return c_(g,e,c)}function
bu(a){return a.toArray()}function
g1(c,b,g){c.write(32,b.dims.length);c.write(32,b.kind|b.layout<<8);if(b.caml_custom==c4)for(var
a=0;a<b.dims.length;a++)if(b.dims[a]<aC)c.write(16,b.dims[a]);else{c.write(16,aC);c.write(32,0);c.write(32,b.dims[a])}else
for(var
a=0;a<b.dims.length;a++)c.write(32,b.dims[a]);switch(b.kind){case
2:case
3:case
12:for(var
a=0;a<b.data.length;a++)c.write(8,b.data[a]);break;case
4:case
5:for(var
a=0;a<b.data.length;a++)c.write(16,b.data[a]);break;case
6:for(var
a=0;a<b.data.length;a++)c.write(32,b.data[a]);break;case
8:case
9:c.write(8,0);for(var
a=0;a<b.data.length;a++)c.write(32,b.data[a]);break;case
7:for(var
a=0;a<b.data.length/2;a++){var
e=bu(b.get(a));for(var
d=0;d<8;d++)c.write(8,e[d])}break;case
1:for(var
a=0;a<b.data.length;a++){var
e=bu(cb(b.get(a)));for(var
d=0;d<8;d++)c.write(8,e[d])}break;case
0:for(var
a=0;a<b.data.length;a++){var
e=et(b.get(a));c.write(32,e)}break;case
10:for(var
a=0;a<b.data.length/2;a++){var
d=b.get(a);c.write(32,et(d[1]));c.write(32,et(d[2]))}break;case
11:for(var
a=0;a<b.data.length/2;a++){var
f=b.get(a),e=bu(cb(f[1]));for(var
d=0;d<8;d++)c.write(8,e[d]);var
e=bu(cb(f[2]));for(var
d=0;d<8;d++)c.write(8,e[d])}break}g[0]=(4+b.dims.length)*4;g[1]=(4+b.dims.length)*8}function
gZ(a){switch(a){case
7:case
10:case
11:return 2;default:return 1}}function
sy(c,e){var
b=o,a;switch(c){case
0:a=b.Float32Array;break;case
1:a=b.Float64Array;break;case
2:a=b.Int8Array;break;case
3:a=b.Uint8Array;break;case
4:a=b.Int16Array;break;case
5:a=b.Uint16Array;break;case
6:a=b.Int32Array;break;case
7:a=b.Int32Array;break;case
8:a=b.Int32Array;break;case
9:a=b.Int32Array;break;case
10:a=b.Float32Array;break;case
11:a=b.Float64Array;break;case
12:a=b.Uint8Array;break}if(!a)G("Bigarray.create: unsupported kind");var
d=new
a(e*gZ(c));return d}function
eu(c){var
a=new(o.Int32Array)(1);a[0]=c;var
b=new(o.Float32Array)(a.buffer);return b[0]}function
cc(a){return new
m(a[7]<<0|a[6]<<8|a[5]<<16,a[4]<<0|a[3]<<8|a[2]<<16,a[1]<<0|a[0]<<8)}function
ev(d){var
f=d.lo,g=d.mi,b=d.hi,c=(b&0x7fff)>>4;if(c==2047)return(f|g|b&d$)==0?b&am?-Infinity:Infinity:NaN;var
e=Math.pow(2,-24),a=(f*e+g)*e+(b&d$);if(c>0){a+=16;a*=Math.pow(2,c-gR)}else
a*=Math.pow(2,-gv);if(b&am)a=-a;return a}function
ep(b){var
d=b.length,c=1;for(var
a=0;a<d;a++){if(b[a]<0)G("Bigarray.create: negative dimension");c=c*b[a]}return c}function
sR(b,a){return new
m(b&a3,b>>>24&X|(a&aC)<<8,a>>>16&aC)}function
ew(a){return a.hi32()}function
ex(a){return a.lo32()}var
sz=c4;function
aT(c,d,b,a){this.kind=c;this.layout=d;this.dims=b;this.data=a}aT.prototype.caml_custom=sz;aT.prototype.offset=function(b){var
c=0;if(typeof
b==="number")b=[b];if(!(b
instanceof
Array))G("bigarray.js: invalid offset");if(this.dims.length!=b.length)G("Bigarray.get/set: bad number of dimensions");if(this.layout==0)for(var
a=0;a<this.dims.length;a++){if(b[a]<0||b[a]>=this.dims[a])b_();c=c*this.dims[a]+b[a]}else
for(var
a=this.dims.length-1;a>=0;a--){if(b[a]<1||b[a]>this.dims[a])b_();c=c*this.dims[a]+(b[a]-1)}return c};aT.prototype.get=function(a){switch(this.kind){case
7:var
d=this.data[a*2+0],b=this.data[a*2+1];return sR(d,b);case
10:case
11:var
e=this.data[a*2+0],c=this.data[a*2+1];return[cY,e,c];default:return this.data[a]}};aT.prototype.set=function(a,b){switch(this.kind){case
7:this.data[a*2+0]=ex(b);this.data[a*2+1]=ew(b);break;case
10:case
11:this.data[a*2+0]=b[1];this.data[a*2+1]=b[2];break;default:this.data[a]=b;break}return 0};aT.prototype.fill=function(b){switch(this.kind){case
7:var
c=ex(b),e=ew(b);if(c==e)this.data.fill(c);else
for(var
a=0;a<this.data.length;a++)this.data[a]=a%2==0?c:e;break;case
10:case
11:var
d=b[1],f=b[2];if(d==f)this.data.fill(d);else
for(var
a=0;a<this.data.length;a++)this.data[a]=a%2==0?d:f;break;default:this.data.fill(b);break}};aT.prototype.compare=function(b,g){if(this.layout!=b.layout||this.kind!=b.kind){var
e=this.kind|this.layout<<8,f=b.kind|b.layout<<8;return f-e}if(this.dims.length!=b.dims.length)return b.dims.length-this.dims.length;for(var
a=0;a<this.dims.length;a++)if(this.dims[a]!=b.dims[a])return this.dims[a]<b.dims[a]?-1:1;switch(this.kind){case
0:case
1:case
10:case
11:var
c,d;for(var
a=0;a<this.data.length;a++){c=this.data[a];d=b.data[a];if(c<d)return-1;if(c>d)return 1;if(c!=d){if(!g)return NaN;if(c==c)return 1;if(d==d)return-1}}break;case
7:for(var
a=0;a<this.data.length;a+=2){if(this.data[a+1]<b.data[a+1])return-1;if(this.data[a+1]>b.data[a+1])return 1;if(this.data[a]>>>0<b.data[a]>>>0)return-1;if(this.data[a]>>>0>b.data[a]>>>0)return 1}break;case
2:case
3:case
4:case
5:case
6:case
8:case
9:case
12:for(var
a=0;a<this.data.length;a++){if(this.data[a]<b.data[a])return-1;if(this.data[a]>b.data[a])return 1}break}return 0};function
br(c,d,b,a){this.kind=c;this.layout=d;this.dims=b;this.data=a}br.prototype=new
aT();br.prototype.offset=function(a){if(typeof
a!=="number")if(a
instanceof
Array&&a.length==1)a=a[0];else
G("Ml_Bigarray_c_1_1.offset");if(a<0||a>=this.dims[0])b_();return a};br.prototype.get=function(a){return this.data[a]};br.prototype.set=function(a,b){this.data[a]=b;return 0};br.prototype.fill=function(a){this.data.fill(a);return 0};function
gX(c,d,a,b){var
e=gZ(c);if(ep(a)*e!=b.length)G("length doesn't match dims");if(d==0&&a.length==1&&e==1)return new
br(c,d,a,b);return new
aT(c,d,a,b)}function
aa(a){eA(x.Failure,a)}function
gY(b,v,r){var
i=b.read32s();if(i<0||i>16)aa("input_value: wrong number of bigarray dimensions");var
p=b.read32s(),j=p&X,o=p>>8&1,h=[];if(r==c4)for(var
a=0;a<i;a++){var
n=b.read16u();if(n==aC){var
t=b.read32u(),u=b.read32u();if(t!=0)aa("input_value: bigarray dimension overflow in 32bit");n=u}h.push(n)}else
for(var
a=0;a<i;a++)h.push(b.read32u());var
d=ep(h),f=sy(j,d),g=gX(j,o,h,f);switch(j){case
2:for(var
a=0;a<d;a++)f[a]=b.read8s();break;case
3:case
12:for(var
a=0;a<d;a++)f[a]=b.read8u();break;case
4:for(var
a=0;a<d;a++)f[a]=b.read16s();break;case
5:for(var
a=0;a<d;a++)f[a]=b.read16u();break;case
6:for(var
a=0;a<d;a++)f[a]=b.read32s();break;case
8:case
9:var
s=b.read8u();if(s)aa("input_value: cannot read bigarray with 64-bit OCaml ints");for(var
a=0;a<d;a++)f[a]=b.read32s();break;case
7:var
e=new
Array(8);for(var
a=0;a<d;a++){for(var
c=0;c<8;c++)e[c]=b.read8u();var
q=cc(e);g.set(a,q)}break;case
1:var
e=new
Array(8);for(var
a=0;a<d;a++){for(var
c=0;c<8;c++)e[c]=b.read8u();var
k=ev(cc(e));g.set(a,k)}break;case
0:for(var
a=0;a<d;a++){var
k=eu(b.read32s());g.set(a,k)}break;case
10:for(var
a=0;a<d;a++){var
m=eu(b.read32s()),l=eu(b.read32s());g.set(a,[cY,m,l])}break;case
11:var
e=new
Array(8);for(var
a=0;a<d;a++){for(var
c=0;c<8;c++)e[c]=b.read8u();var
m=ev(cc(e));for(var
c=0;c<8;c++)e[c]=b.read8u();var
l=ev(cc(e));g.set(a,[cY,m,l])}break}v[0]=(4+i)*4;return gX(j,o,h,f)}function
gW(a,b,c){return a.compare(b,c)}function
c$(a,b){return Math.imul(a,b)}function
J(b,a){a=c$(a,0xcc9e2d51|0);a=a<<15|a>>>32-15;a=c$(a,0x1b873593);b^=a;b=b<<13|b>>>32-13;return(b+(b<<2)|0)+(0xe6546b64|0)|0}function
sM(a,b){a=J(a,ex(b));a=J(a,ew(b));return a}function
er(a,b){return sM(a,cb(b))}function
g0(c){var
b=ep(c.dims),d=0;switch(c.kind){case
2:case
3:case
12:if(b>aB)b=aB;var
e=0,a=0;for(a=0;a+4<=c.data.length;a+=4){e=c.data[a+0]|c.data[a+1]<<8|c.data[a+2]<<16|c.data[a+3]<<24;d=J(d,e)}e=0;switch(b&3){case
3:e=c.data[a+2]<<16;case
2:e|=c.data[a+1]<<8;case
1:e|=c.data[a+0];d=J(d,e)}break;case
4:case
5:if(b>b7)b=b7;var
e=0,a=0;for(a=0;a+2<=c.data.length;a+=2){e=c.data[a+0]|c.data[a+1]<<16;d=J(d,e)}if((b&1)!=0)d=J(d,c.data[a]);break;case
6:if(b>64)b=64;for(var
a=0;a<b;a++)d=J(d,c.data[a]);break;case
8:case
9:if(b>64)b=64;for(var
a=0;a<b;a++)d=J(d,c.data[a]);break;case
7:if(b>32)b=32;b*=2;for(var
a=0;a<b;a++)d=J(d,c.data[a]);break;case
10:b*=2;case
0:if(b>64)b=64;for(var
a=0;a<b;a++)d=er(d,c.data[a]);break;case
11:b*=2;case
1:if(b>32)b=32;for(var
a=0;a<b;a++)d=er(d,c.data[a]);break}return d}function
sP(a,b){b[0]=4;return a.read32s()}function
s8(a,b){switch(a.read8u()){case
1:b[0]=4;return a.read32s();case
2:aa("input_value: native integer value too large");default:aa("input_value: ill-formed native integer")}}function
sU(c,d){var
b=new
Array(8);for(var
a=0;a<8;a++)b[a]=c.read8u();d[0]=8;return cc(b)}function
sT(e,d,b){var
c=bu(d);for(var
a=0;a<8;a++)e.write(8,c[a]);b[0]=8;b[1]=8}function
sQ(a,b,c){return a.compare(b)}function
sS(a){return a.lo32()^a.hi32()}var
aV={"_j":{deserialize:sU,serialize:sT,fixed_length:8,compare:sQ,hash:sS},"_i":{deserialize:sP,fixed_length:4},"_n":{deserialize:s8,fixed_length:4},"_bigarray":{deserialize:function(a,b){return gY(a,b,"_bigarray")},serialize:g1,compare:gW,hash:g0},"_bigarr02":{deserialize:function(a,b){return gY(a,b,c4)},serialize:g1,compare:gW,hash:g0}};function
eq(a){return aV[a.caml_custom]&&aV[a.caml_custom].compare}function
g6(f,c,d,e){var
b=eq(c);if(b){var
a=d>0?b(c,f,e):b(f,c,e);if(e&&a!=a)return d;if(+a!=+a)return+a;if((a|0)!=0)return a|0}return d}function
bv(a){return a
instanceof
aF}function
cd(a){return bv(a)}function
g7(a){if(typeof
a==="number")return bQ;else
if(bv(a))return ed;else
if(cd(a))return 1252;else
if(a
instanceof
Array&&a[0]===a[0]>>>0&&a[0]<=ge){var
b=a[0]|0;return b==cY?0:b}else
if(a
instanceof
String)return gk;else
if(typeof
a=="string")return gk;else
if(a
instanceof
Number)return bQ;else
if(a&&a.caml_custom)return dY;else
if(a&&a.compare)return 1256;else
if(typeof
a=="function")return 1247;else
if(typeof
a=="symbol")return 1251;return 1001}function
g_(a,b){if(a<b)return-1;if(a==b)return 0;return 1}function
g3(a,b){a.t&6&&aG(a);b.t&6&&aG(b);return a.c<b.c?-1:a.c>b.c?1:0}function
da(a,b){return g3(a,b)}function
c8(a,b,d){var
e=[];for(;;){if(!(d&&a===b)){var
f=g7(a);if(f==aO){a=a[1];continue}var
g=g7(b);if(g==aO){b=b[1];continue}if(f!==g){if(f==bQ){if(g==dY)return g6(a,b,-1,d);return-1}if(g==bQ){if(f==dY)return g6(b,a,1,d);return 1}return f<g?-1:1}switch(f){case
247:G(d7);break;case
248:var
c=g_(a[2],b[2]);if(c!=0)return c|0;break;case
249:G(d7);break;case
250:G("equal: got Forward_tag, should not happen");break;case
251:G("equal: abstract value");break;case
252:if(a!==b){var
c=g3(a,b);if(c!=0)return c|0}break;case
253:G("equal: got Double_tag, should not happen");break;case
254:G("equal: got Double_array_tag, should not happen");break;case
255:G("equal: got Custom_tag, should not happen");break;case
1247:G(d7);break;case
1255:var
i=eq(a);if(i!=eq(b))return a.caml_custom<b.caml_custom?-1:1;if(!i)G("compare: abstract value");var
c=i(a,b,d);if(c!=c)return d?-1:c;if(c!==(c|0))return-1;if(c!=0)return c|0;break;case
1256:var
c=a.compare(b,d);if(c!=c)return d?-1:c;if(c!==(c|0))return-1;if(c!=0)return c|0;break;case
1000:a=+a;b=+b;if(a<b)return-1;if(a>b)return 1;if(a!=b){if(!d)return NaN;if(a==a)return 1;if(b==b)return-1}break;case
1001:if(a<b)return-1;if(a>b)return 1;if(a!=b){if(!d)return NaN;if(a==a)return 1;if(b==b)return-1}break;case
1251:if(a!==b){if(!d)return NaN;return 1}break;case
1252:var
a=ae(a),b=ae(b);if(a!==b){if(a<b)return-1;if(a>b)return 1}break;case
12520:var
a=a.toString(),b=b.toString();if(a!==b){if(a<b)return-1;if(a>b)return 1}break;case
246:case
254:default:if(a.length!=b.length)return a.length<b.length?-1:1;if(a.length>1)e.push(a,b,1);break}}if(e.length==0)return 0;var
h=e.pop();b=e.pop();a=e.pop();if(h+1<a.length)e.push(a,b,h+1);a=a[h];b=b[h]}}function
bs(a,b){return c8(a,b,true)}function
L(a){if(a<0)G("Bytes.create");return new
aF(a?2:9,g,a)}function
bt(a,b){return+(c8(a,b,false)==0)}function
sF(a,c,b,d){if(b>0)if(c==0&&(b>=a.l||a.t==2&&b>=a.c.length))if(d==0){a.c=g;a.t=2}else{a.c=hm(b,String.fromCharCode(d));a.t=b==a.l?0:2}else{if(a.t!=4)c9(a);for(b+=c;c<b;c++)a.c[c]=d}return 0}var
hh=0;function
S(){return hh++}function
ey(a){return a.toUtf16()}if(o.process&&o.process.cwd)var
ca=o.process.cwd().replace(/\\/g,ax);else
var
ca="/static";if(ca.slice(-1)!==ax)ca+=ax;function
s1(a){a=ey(a);if(a.charCodeAt(0)!=47)a=ca+a;var
d=a.split(ax),b=[];for(var
c=0;c<d.length;c++)switch(d[c]){case"..":if(b.length>1)b.pop();break;case".":break;case"":if(b.length==0)b.push(g);break;default:b.push(d[c]);break}b.orig=a;return b}function
sC(a){return new
aF(4,a,a.length)}function
tl(e){for(var
f=g,b=f,a,i,c=0,h=e.length;c<h;c++){a=e.charCodeAt(c);if(a<_){for(var
d=c+1;d<h&&(a=e.charCodeAt(d))<_;d++);if(d-c>f8){b.substr(0,1);f+=b;b=g;f+=e.slice(c,d)}else
b+=e.slice(c,d);if(d==h)break;c=d}if(a<gI){b+=String.fromCharCode(0xc0|a>>6);b+=String.fromCharCode(_|a&bi)}else
if(a<0xd800||a>=gf)b+=String.fromCharCode(gg|a>>12,_|a>>6&bi,_|a&bi);else
if(a>=0xdbff||c+1==h||(i=e.charCodeAt(c+1))<ga||i>gf)b+="\xef\xbf\xbd";else{c++;a=(a<<10)+i-0x35fdc00;b+=String.fromCharCode(gN|a>>18,_|a>>12&bi,_|a>>6&bi,_|a&bi)}if(b.length>bS){b.substr(0,1);f+=b;b=g}}return f+b}function
sD(a){var
b=9;if(!ho(a))b=8,a=tl(a);return new
aF(b,a,a.length)}function
aJ(a){return sD(a)}function
v(a){eA(x.Sys_error,a)}function
tb(a){a=ae(a);v(a+": No such file or directory")}function
g2(){G(ef)}function
sB(b,a){if(a>>>0>=b.l)g2();return b$(b,a)}function
af(a){return a.l}function
gV(){}function
F(a){this.data=a}F.prototype=new
gV();F.prototype.truncate=function(a){var
b=this.data;this.data=L(a|0);aU(b,0,this.data,0,a)};F.prototype.length=function(){return af(this.data)};F.prototype.write=function(b,d,g,a){var
c=this.length();if(b+a>=c){var
e=L(b+a),f=this.data;this.data=e;aU(f,0,this.data,0,c)}a9(d,g,this.data,b,a);return 0};F.prototype.read=function(c,a,d,b){var
e=this.length();aU(this.data,c,a,d,b);return 0};F.prototype.read_one=function(a){return sB(this.data,a)};F.prototype.close=function(){};F.prototype.constructor=F;function
$(b,a){this.content={};this.root=b;this.lookupFun=a}$.prototype.nm=function(a){return this.root+a};$.prototype.lookup=function(b){if(!this.content[b]&&this.lookupFun){var
c=this.lookupFun(a(this.root),a(b));if(c!==0)this.content[b]=new
F(ac(c[1]))}};$.prototype.exists=function(a){if(a==g)return 1;var
c=a+ax,d=new
RegExp(d1+c);for(var
b
in
this.content)if(b.match(d))return 1;this.lookup(a);return this.content[a]?1:0};$.prototype.readdir=function(c){var
f=c==g?g:c+ax,h=new
RegExp(d1+f+gP),d={},b=[];for(var
e
in
this.content){var
a=e.match(h);if(a&&!d[a[1]]){d[a[1]]=true;b.push(a[1])}}return b};$.prototype.is_dir=function(a){var
d=a==g?g:a+ax,e=new
RegExp(d1+d+gP),f=[];for(var
c
in
this.content){var
b=c.match(e);if(b)return 1}return 0};$.prototype.unlink=function(a){var
b=this.content[a]?true:false;delete
this.content[a];return b};$.prototype.open=function(a,b){if(b.rdonly&&b.wronly)v(this.nm(a)+go);if(b.text&&b.binary)v(this.nm(a)+gA);this.lookup(a);if(this.content[a]){if(this.is_dir(a))v(this.nm(a)+" : is a directory");if(b.create&&b.excl)v(this.nm(a)+gm);var
c=this.content[a];if(b.truncate)c.truncate();return c}else
if(b.create){this.content[a]=new
F(L(0));return this.content[a]}else
tb(this.nm(a))};$.prototype.register=function(b,a){if(this.content[b])v(this.nm(b)+gm);if(bv(a))this.content[b]=new
F(a);if(cd(a))this.content[b]=new
F(ac(a));else
if(a
instanceof
Array)this.content[b]=new
F(sC(a));else
if(typeof
a==="string")this.content[b]=new
F(g4(a));else
if(a.toString){var
c=ac(aJ(a.toString()));this.content[b]=new
F(c)}else
v(this.nm(b)+" : registering file with invalid content type")};$.prototype.constructor=$;function
p(a){return af(a)}function
as(b,a){return b$(b,a)}function
sx(d){var
c=p(d),b=new
Array(c),a=0;for(;a<c;a++)b[a]=as(d,a);return b}function
eo(a){if(a.t!=4)c9(a);return a.c}function
sE(b,a,c){if(a>>>0>=b.l)g2();return g5(b,a,c)}function
aq(a){this.fs=require("fs");this.fd=a}aq.prototype=new
gV();aq.prototype.truncate=function(a){try{this.fs.ftruncateSync(this.fd,a|0)}catch(a){v(a.toString())}};aq.prototype.length=function(){try{return this.fs.fstatSync(this.fd).size}catch(a){v(a.toString())}};aq.prototype.write=function(f,b,c,e){var
a=sx(b);if(!(a
instanceof
o.Uint8Array))a=new(o.Uint8Array)(a);var
d=o.Buffer.from(a);try{this.fs.writeSync(this.fd,d,c,e,f)}catch(a){v(a.toString())}return 0};aq.prototype.read=function(g,d,c,f){var
a=eo(d);if(!(a
instanceof
o.Uint8Array))a=new(o.Uint8Array)(a);var
e=o.Buffer.from(a);try{this.fs.readSync(this.fd,e,c,f,g)}catch(a){v(a.toString())}for(var
b=0;b<f;b++)sE(d,c+b,e[c+b]);return 0};aq.prototype.read_one=function(c){var
b=new(o.Uint8Array)(1),a=o.Buffer.from(b);try{this.fs.readSync(this.fd,a,0,1,c)}catch(a){v(a.toString())}return a[0]};aq.prototype.close=function(){try{this.fs.closeSync(this.fd)}catch(a){v(a.toString())}};aq.prototype.constructor=aq;function
ap(a){this.fs=require("fs");this.root=a}ap.prototype.nm=function(a){return this.root+a};ap.prototype.exists=function(a){try{return this.fs.existsSync(this.nm(a))?1:0}catch(a){v(a.toString())}};ap.prototype.readdir=function(a){try{return this.fs.readdirSync(this.nm(a))}catch(a){v(a.toString())}};ap.prototype.is_dir=function(a){try{return this.fs.statSync(this.nm(a)).isDirectory()?1:0}catch(a){v(a.toString())}};ap.prototype.unlink=function(a){try{var
b=this.fs.existsSync(this.nm(a))?1:0;this.fs.unlinkSync(this.nm(a))}catch(a){v(a.toString())}return b};ap.prototype.open=function(f,c){var
a=require("constants"),b=0;for(var
e
in
c)switch(e){case"rdonly":b|=a.O_RDONLY;break;case"wronly":b|=a.O_WRONLY;break;case"append":b|=a.O_WRONLY|a.O_APPEND;break;case"create":b|=a.O_CREAT;break;case"truncate":b|=a.O_TRUNC;break;case"excl":b|=a.O_EXCL;break;case"binary":b|=a.O_BINARY;break;case"text":b|=a.O_TEXT;break;case"nonblock":b|=a.O_NONBLOCK;break}try{var
d=this.fs.openSync(this.nm(f),b);return new
aq(d)}catch(a){v(a.toString())}};ap.prototype.rename=function(b,a){try{this.fs.renameSync(this.nm(b),this.nm(a))}catch(a){v(a.toString())}};ap.prototype.constructor=ap;var
bx=ca.match(/[^\/]*\//)[0];function
tm(){return typeof
o.process!=="undefined"&&typeof
o.process.versions!=="undefined"&&typeof
o.process.versions.node!=="undefined"&&o.process.platform!=="browser"}var
cf=[];if(tm())cf.push({path:bx,device:new
ap(bx)});else
cf.push({path:bx,device:new
$(bx)});cf.push({path:bx+f3,device:new
$(bx+f3)});function
hp(b){var
f=s1(b),b=f.join(ax),e=b+ax,c;for(var
d=0;d<cf.length;d++){var
a=cf[d];if(e.search(a.path)==0&&(!c||c.path.length<a.path.length))c={path:a.path,device:a.device,rest:b.substring(a.path.length,b.length)}}return c}function
g8(c,b){var
c=typeof
c=="string"?a(c):c,b=typeof
b=="string"?a(b):b,d=hp(c);if(!d.device.register)aa("cannot register file");d.device.register(d.rest,b);return 0}function
sG(){var
b=o.caml_fs_tmp;if(b)for(var
a=0;a<b.length;a++)g8(b[a].name,b[a].content);o.caml_create_file=g8;o.caml_fs_tmp=[];return 0}function
sH(a,b){return+(c8(a,b,false)>=0)}function
es(d,b){var
e=b.length,a,c;for(a=0;a+4<=e;a+=4){c=b.charCodeAt(a)|b.charCodeAt(a+1)<<8|b.charCodeAt(a+2)<<16|b.charCodeAt(a+3)<<24;d=J(d,c)}c=0;switch(e&3){case
3:c=b.charCodeAt(a+2)<<16;case
2:c|=b.charCodeAt(a+1)<<8;case
1:c|=b.charCodeAt(a);d=J(d,c)}d^=e;return d}function
sN(a,b){return es(a,ae(b))}function
sK(d,b){var
e=b.length,a,c;for(a=0;a+4<=e;a+=4){c=b[a]|b[a+1]<<8|b[a+2]<<16|b[a+3]<<24;d=J(d,c)}c=0;switch(e&3){case
3:c=b[a+2]<<16;case
2:c|=b[a+1]<<8;case
1:c|=b[a];d=J(d,c)}d^=e;return d}function
sJ(a,b){switch(b.t&6){default:aG(b);case
0:a=es(a,b.c);break;case
2:a=sK(a,b.c)}return a}function
sL(a){a^=a>>>16;a=c$(a,0x85ebca6b|0);a^=a>>>13;a=c$(a,0xc2b2ae35|0);a^=a>>>16;return a}function
sI(j,l,n,m){var
f,g,h,d,c,b,a,e,i;d=l;if(d<0||d>aB)d=aB;c=j;b=n;f=[m];g=0;h=1;while(g<h&&c>0){a=f[g++];if(a&&a.caml_custom){if(aV[a.caml_custom]&&aV[a.caml_custom].hash){var
k=aV[a.caml_custom].hash(a);b=J(b,k);c--}}else
if(a
instanceof
Array&&a[0]===(a[0]|0))switch(a[0]){case
248:b=J(b,a[2]);c--;break;case
250:f[--g]=a[1];break;default:var
o=a.length-1<<10|a[0];b=J(b,o);for(e=1,i=a.length;e<i;e++){if(h>=d)break;f[h++]=a[e]}break}else
if(bv(a)){b=sJ(b,a);c--}else
if(cd(a)){b=sN(b,a);c--}else
if(typeof
a==="string"){b=es(b,a);c--}else
if(a===(a|0)){b=J(b,a+a+1);c--}else
if(a===+a){b=er(b,a);c--}}b=sL(b);return b&gw}function
sO(e,h,a){var
c=0;function
g(a){h--;if(e<0||h<0)return;if(a
instanceof
Array&&a[0]===(a[0]|0))switch(a[0]){case
248:e--;c=c*d9+a[2]|0;break;case
250:h++;g(a);break;default:e--;c=c*19+a[0]|0;for(var
b=a.length-1;b>0;b--)g(a[b])}else
if(bv(a)){e--;switch(a.t&6){default:aG(a);case
0:for(var
f=a.c,d=af(a),b=0;b<d;b++)c=c*19+f.charCodeAt(b)|0;break;case
2:for(var
j=a.c,d=af(a),b=0;b<d;b++)c=c*19+j[b]|0}}else
if(cd(a)){var
i=ae(a);for(var
f=i,d=i.length,b=0;b<d;b++)c=c*19+f.charCodeAt(b)|0}else
if(typeof
a==="string")for(var
f=a,d=a.length,b=0;b<d;b++)c=c*19+f.charCodeAt(b)|0;else
if(a===(a|0)){e--;c=c*d9+a|0}else
if(a===+a){e--;var
l=bu(cb(a));for(var
b=7;b>=0;b--)c=c*19+l[b]|0}else
if(a&&a.caml_custom)if(aV[a.caml_custom]&&aV[a.caml_custom].hash){var
k=aV[a.caml_custom].hash(a)|0;c=c*d9+k|0}}g(a);return c&gw}function
ta(c){var
a=0,e=p(c),b=10,d=1;if(e>0)switch(as(c,a)){case
45:a++;d=-1;break;case
43:a++;d=1;break}if(a+1<e&&as(c,a)==48)switch(as(c,a+1)){case
120:case
88:b=16;a+=2;break;case
111:case
79:b=8;a+=2;break;case
98:case
66:b=2;a+=2;break;case
117:case
85:a+=2;break}return[a,d,b]}function
hi(a){if(a>=48&&a<=57)return a-48;if(a>=65&&a<=90)return a-55;if(a>=97&&a<=122)return a-87;return-1}function
g$(f){var
h=ta(f),c=h[0],i=h[1],d=h[2],g=p(f),j=-1>>>0,e=c<g?as(f,c):0,b=hi(e);if(b<0||b>=d)aa(cO);var
a=b;for(c++;c<g;c++){e=as(f,c);if(e==95)continue;b=hi(e);if(b<0||b>=d)break;a=d*a+b;if(a>j)aa(cO)}if(c!=g)aa(cO);a=i*a;if(d==10&&(a|0)!=a)aa(cO);return a|0}function
sV(){var
b=o.console?o.console:{},c=["log","debug","info","warn","error","assert",a5,"dirxml","trace","group","groupCollapsed","groupEnd","time","timeEnd"];function
d(){}for(var
a=0;a<c.length;a++)if(!b[c[a]])b[c[a]]=d;return b}function
sW(c){var
d=c.length,b=new
Array(d+1);b[0]=0;for(var
a=0;a<d;a++)b[a+1]=c[a];return b}function
sX(d){return function(){var
b=arguments.length;if(b>0){var
c=new
Array(b);for(var
a=0;a<b;a++)c[a]=arguments[a];return ad(d,c)}else
return ad(d,[undefined])}}function
sY(d){return function(){var
c=arguments.length,b=new
Array(c+1);b[0]=this;for(var
a=0;a<c;a++)b[a+1]=arguments[a];return ad(d,b)}}function
O(b){b=ae(b);var
d=b.length/2,c=new
Array(d);for(var
a=0;a<d;a++)c[a]=(b.charCodeAt(2*a)|b.charCodeAt(2*a+1)<<8)<<16>>16;return c}function
sZ(b,t,a){var
n=2,o=3,r=5,d=6,h=7,g=8,j=9,m=1,l=2,q=3,s=4,p=5;if(!b.lex_default){b.lex_base=O(b[m]);b.lex_backtrk=O(b[l]);b.lex_check=O(b[p]);b.lex_trans=O(b[s]);b.lex_default=O(b[q])}var
e,c=t,k=eo(a[n]);if(c>=0){a[h]=a[r]=a[d];a[g]=-1}else
c=-c-1;for(;;){var
f=b.lex_base[c];if(f<0)return-f-1;var
i=b.lex_backtrk[c];if(i>=0){a[h]=a[d];a[g]=i}if(a[d]>=a[o])if(a[j]==0)return-c-1;else
e=aB;else{e=k[a[d]];a[d]++}if(b.lex_check[f+e]==c)c=b.lex_trans[f+e];else
c=b.lex_default[c];if(c<0){a[d]=a[h];if(a[g]==-1)aa(f5);else
return a[g]}else
if(e==aB)a[j]=0}}function
a_(c){var
b=0;for(var
a=c.length-1;a>=0;a--){var
d=c[a];b=[0,d,b]}return b}function
aW(a,d){if(a<0)b_();var
a=a+1|0,b=new
Array(a);b[0]=0;for(var
c=1;c<a;c++)b[c]=d;return b}function
th(b){return a(db(b,0,b.length))}var
s2=function(){function
l(a,b){return a+b|0}function
a(d,a,c,f,b,e){a=l(l(a,d),l(f,e));return l(a<<b|a>>>32-b,c)}function
g(c,b,d,e,h,f,g){return a(b&d|~b&e,c,b,h,f,g)}function
h(d,b,e,c,h,f,g){return a(b&c|e&~c,d,b,h,f,g)}function
i(c,b,d,e,h,f,g){return a(b^d^e,c,b,h,f,g)}function
j(c,b,d,e,h,f,g){return a(d^(b|~e),c,b,h,f,g)}function
k(f,n){var
e=n;f[e>>2]|=_<<8*(e&3);for(e=(e&~0x3)+8;(e&0x3F)<60;e+=4)f[(e>>2)-1]=0;f[(e>>2)-1]=n<<3;f[e>>2]=n>>29&0x1FFFFFFF;var
k=[0x67452301,0xEFCDAB89,0x98BADCFE,0x10325476];for(e=0;e<f.length;e+=16){var
a=k[0],b=k[1],c=k[2],d=k[3];a=g(a,b,c,d,f[e+0],7,0xD76AA478);d=g(d,a,b,c,f[e+1],12,0xE8C7B756);c=g(c,d,a,b,f[e+2],17,0x242070DB);b=g(b,c,d,a,f[e+3],22,0xC1BDCEEE);a=g(a,b,c,d,f[e+4],7,0xF57C0FAF);d=g(d,a,b,c,f[e+5],12,0x4787C62A);c=g(c,d,a,b,f[e+6],17,0xA8304613);b=g(b,c,d,a,f[e+7],22,0xFD469501);a=g(a,b,c,d,f[e+8],7,0x698098D8);d=g(d,a,b,c,f[e+9],12,0x8B44F7AF);c=g(c,d,a,b,f[e+10],17,0xFFFF5BB1);b=g(b,c,d,a,f[e+11],22,0x895CD7BE);a=g(a,b,c,d,f[e+12],7,0x6B901122);d=g(d,a,b,c,f[e+13],12,0xFD987193);c=g(c,d,a,b,f[e+14],17,0xA679438E);b=g(b,c,d,a,f[e+15],22,0x49B40821);a=h(a,b,c,d,f[e+1],5,0xF61E2562);d=h(d,a,b,c,f[e+6],9,0xC040B340);c=h(c,d,a,b,f[e+11],14,0x265E5A51);b=h(b,c,d,a,f[e+0],20,0xE9B6C7AA);a=h(a,b,c,d,f[e+5],5,0xD62F105D);d=h(d,a,b,c,f[e+10],9,0x02441453);c=h(c,d,a,b,f[e+15],14,0xD8A1E681);b=h(b,c,d,a,f[e+4],20,0xE7D3FBC8);a=h(a,b,c,d,f[e+9],5,0x21E1CDE6);d=h(d,a,b,c,f[e+14],9,0xC33707D6);c=h(c,d,a,b,f[e+3],14,0xF4D50D87);b=h(b,c,d,a,f[e+8],20,0x455A14ED);a=h(a,b,c,d,f[e+13],5,0xA9E3E905);d=h(d,a,b,c,f[e+2],9,0xFCEFA3F8);c=h(c,d,a,b,f[e+7],14,0x676F02D9);b=h(b,c,d,a,f[e+12],20,0x8D2A4C8A);a=i(a,b,c,d,f[e+5],4,0xFFFA3942);d=i(d,a,b,c,f[e+8],11,0x8771F681);c=i(c,d,a,b,f[e+11],16,0x6D9D6122);b=i(b,c,d,a,f[e+14],23,0xFDE5380C);a=i(a,b,c,d,f[e+1],4,0xA4BEEA44);d=i(d,a,b,c,f[e+4],11,0x4BDECFA9);c=i(c,d,a,b,f[e+7],16,0xF6BB4B60);b=i(b,c,d,a,f[e+10],23,0xBEBFBC70);a=i(a,b,c,d,f[e+13],4,0x289B7EC6);d=i(d,a,b,c,f[e+0],11,0xEAA127FA);c=i(c,d,a,b,f[e+3],16,0xD4EF3085);b=i(b,c,d,a,f[e+6],23,0x04881D05);a=i(a,b,c,d,f[e+9],4,0xD9D4D039);d=i(d,a,b,c,f[e+12],11,0xE6DB99E5);c=i(c,d,a,b,f[e+15],16,0x1FA27CF8);b=i(b,c,d,a,f[e+2],23,0xC4AC5665);a=j(a,b,c,d,f[e+0],6,0xF4292244);d=j(d,a,b,c,f[e+7],10,0x432AFF97);c=j(c,d,a,b,f[e+14],15,0xAB9423A7);b=j(b,c,d,a,f[e+5],21,0xFC93A039);a=j(a,b,c,d,f[e+12],6,0x655B59C3);d=j(d,a,b,c,f[e+3],10,0x8F0CCC92);c=j(c,d,a,b,f[e+10],15,0xFFEFF47D);b=j(b,c,d,a,f[e+1],21,0x85845DD1);a=j(a,b,c,d,f[e+8],6,0x6FA87E4F);d=j(d,a,b,c,f[e+15],10,0xFE2CE6E0);c=j(c,d,a,b,f[e+6],15,0xA3014314);b=j(b,c,d,a,f[e+13],21,0x4E0811A1);a=j(a,b,c,d,f[e+4],6,0xF7537E82);d=j(d,a,b,c,f[e+11],10,0xBD3AF235);c=j(c,d,a,b,f[e+2],15,0x2AD7D2BB);b=j(b,c,d,a,f[e+9],21,0xEB86D391);k[0]=l(a,k[0]);k[1]=l(b,k[1]);k[2]=l(c,k[2]);k[3]=l(d,k[3])}var
o=new
Array(16);for(var
e=0;e<4;e++)for(var
m=0;m<4;m++)o[e*4+m]=k[e]>>8*m&0xFF;return o}return function(h,g,f){var
e=[];switch(h.t&6){default:aG(h);case
0:var
d=h.c;for(var
a=0;a<f;a+=4){var
b=a+g;e[a>>2]=d.charCodeAt(b)|d.charCodeAt(b+1)<<8|d.charCodeAt(b+2)<<16|d.charCodeAt(b+3)<<24}for(;a<f;a++)e[a>>2]|=d.charCodeAt(a+g)<<8*(a&3);break;case
4:var
c=h.c;for(var
a=0;a<f;a+=4){var
b=a+g;e[a>>2]=c[b]|c[b+1]<<8|c[b+2]<<16|c[b+3]<<24}for(;a<f;a++)e[a>>2]|=c[a+g]<<8*(a&3)}return th(k(e,f))}}();function
s3(c,b,a){return s2(ac(c),b,a)}var
ar=new
Array();function
ez(c){var
a=ar[c];if(!a.opened)v("Cannot flush a closed channel");if(!a.buffer||a.buffer==g)return 0;if(a.fd&&x.fds[a.fd]&&x.fds[a.fd].output){var
b=x.fds[a.fd].output;switch(b.length){case
2:b(c,a.buffer);break;default:b(a.buffer)}}a.buffer=g;return 0}function
hl(e,f){var
b=ar[e],d=a(f),c=p(d);b.file.write(b.offset,d,0,c);b.offset+=c;return 0}function
tn(a){var
a=eC(a),b=o;if(b.process&&b.process.stdout&&b.process.stdout.write)b.process.stderr.write(a);else{if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
c=b.console;c&&c.error&&c.error(a)}}function
to(a){var
a=eC(a),b=o;if(b.process&&b.process.stdout&&b.process.stdout.write)b.process.stdout.write(a);else{if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
c=b.console;c&&c.log&&c.log(a)}}function
dc(c,e,d,a){if(x.fds===undefined)x.fds=new
Array();a=a?a:{};var
b={};b.file=d;b.offset=a.append?d.length():0;b.flags=a;b.output=e;x.fds[c]=b;if(!x.fd_last_idx||c>x.fd_last_idx)x.fd_last_idx=c;return c}function
tr(c,b,g){var
a={};while(b){switch(b[1]){case
0:a.rdonly=1;break;case
1:a.wronly=1;break;case
2:a.append=1;break;case
3:a.create=1;break;case
4:a.truncate=1;break;case
5:a.excl=1;break;case
6:a.binary=1;break;case
7:a.text=1;break;case
8:a.nonblock=1;break}b=b[2]}if(a.rdonly&&a.wronly)v(ae(c)+go);if(a.text&&a.binary)v(ae(c)+gA);var
d=hp(c),e=d.device.open(d.rest,a),f=x.fd_last_idx?x.fd_last_idx:0;return dc(f+1,hl,e,a)}dc(0,hl,new
F(L(0)));dc(1,to,new
F(L(0)));dc(2,tn,new
F(L(0)));function
s4(c){var
b=x.fds[c];if(b.flags.wronly)v(gS+c+" is writeonly");var
a={file:b.file,offset:b.offset,fd:c,opened:true,out:false,refill:null};ar[a.fd]=a;return a.fd}function
hb(c){var
b=x.fds[c];if(b.flags.rdonly)v(gS+c+" is readonly");var
a={file:b.file,offset:b.offset,fd:c,opened:true,out:true,buffer:g};ar[a.fd]=a;return a.fd}function
s5(){var
b=0;for(var
a=0;a<ar.length;a++)if(ar[a]&&ar[a].opened&&ar[a].out)b=[0,ar[a].fd,b];return b}function
aI(a){return a}function
s6(g,d,h,f){var
b=ar[g];if(!b.opened)v("Cannot output to a closed channel");var
a;if(h==0&&af(d)==f)a=d;else{a=L(f);aU(d,h,a,0,f)}var
i=aI(a),c=ae(i),e=c.lastIndexOf("\n");if(e<0)b.buffer+=c;else{b.buffer+=c.substr(0,e+1);ez(g);b.buffer+=c.substr(e+1)}return 0}function
hc(b,a,d,c){return s6(b,ac(a),d,c)}function
s7(c,b){var
d=a(String.fromCharCode(b));hc(c,d,0,1);return 0}function
hd(b,a){if(a==0)eB();return b%a}function
s0(d,a,c,f){for(;;){var
b=d.charCodeAt(a);a++;if(b==X)return;var
e=d.charCodeAt(a);a++;if(e==X)c[b+1]=f;else
c[b+1]=c[e+1]}}function
ha(d,a,c){for(;;){var
b=d.charCodeAt(a);a++;if(b==X)return;var
e=d.charCodeAt(a);a++;if(e==X)c[b+1]=-1;else
c[b+1]=c[e+1]}}function
s9(a,D,b){var
t=2,u=3,A=5,f=6,i=7,h=8,n=9,j=10,r=1,p=2,y=3,B=4,v=5,s=6,q=7,z=8,C=9,w=10,x=11;if(!a.lex_default){a.lex_base=O(a[r]);a.lex_backtrk=O(a[p]);a.lex_check=O(a[v]);a.lex_trans=O(a[B]);a.lex_default=O(a[y])}if(!a.lex_default_code){a.lex_base_code=O(a[s]);a.lex_backtrk_code=O(a[q]);a.lex_check_code=O(a[w]);a.lex_trans_code=O(a[C]);a.lex_default_code=O(a[z])}if(a.lex_code==null)a.lex_code=ae(a[x]);var
e,c=D,o=eo(b[t]);if(c>=0){b[i]=b[A]=b[f];b[h]=-1}else
c=-c-1;for(;;){var
g=a.lex_base[c];if(g<0){var
d=a.lex_base_code[c];ha(a.lex_code,d,b[j]);return-g-1}var
l=a.lex_backtrk[c];if(l>=0){var
d=a.lex_backtrk_code[c];ha(a.lex_code,d,b[j]);b[i]=b[f];b[h]=l}if(b[f]>=b[u])if(b[n]==0)return-c-1;else
e=aB;else{e=o[b[f]];b[f]++}var
k=c;if(a.lex_check[g+e]==c)c=a.lex_trans[g+e];else
c=a.lex_default[c];if(c<0){b[f]=b[i];if(b[h]==-1)aa(f5);else
return b[h]}else{var
m=a.lex_base_code[k],d;if(a.lex_check_code[m+e]==k)d=a.lex_trans_code[m+e];else
d=a.lex_default_code[k];if(d>0)s0(a.lex_code,d,b[j],b[f]);if(e==aB)b[n]=0}}}function
s_(a,b){return+(c8(a,b,false)!=0)}function
hg(d,c){var
b=new
Array(c+1);b[0]=d;for(var
a=1;a<=c;a++)b[a]=0;return b}function
s$(a,b){a[0]=aO;a[1]=b;return 0}function
bw(a){if(a
instanceof
Array&&a[0]==a[0]>>>0)return a[0];else
if(bv(a))return ed;else
if(cd(a))return ed;else
if(a
instanceof
Function||typeof
a=="function")return 247;else
if(a&&a.caml_custom)return ge;else
return bQ}function
ab(b,c,a){if(a&&o.toplevelReloc)b=o.toplevelReloc(a);x[b+1]=c;if(a)x[a]=c}var
hf={};function
te(a,b){hf[ae(a)]=b;return 0}function
tf(a){a[2]=hh++;return a}function
sA(a,b){if(a===b)return 1;a.t&6&&aG(a);b.t&6&&aG(b);return a.c==b.c?1:0}function
e(a,b){return sA(a,b)}function
tg(){G(ef)}function
aH(b,a){if(a>>>0>=p(b))tg();return as(b,a)}function
f(a,b){return 1-e(a,b)}function
ti(){return[0,a("js_of_ocaml")]}function
tj(){return 0x7FFFFFFF/4|0}function
tc(){hj(x.Not_found)}function
hn(c){var
a=o,b=ey(c);if(a.process&&a.process.env&&a.process.env[b]!=undefined)return aJ(a.process.env[b]);if(o.jsoo_static_env&&o.jsoo_static_env[b])return aJ(o.jsoo_static_env[b]);tc()}function
tk(){var
a=new
Date().getTime(),b=a^0xffffffff*Math.random();return[0,b]}function
ce(a){var
b=1;while(a&&a.joo_tramp){a=a.joo_tramp.apply(null,a.joo_args);b++}return a}function
n(b,a){return{joo_tramp:b,joo_args:a}}function
hk(a){return a}function
he(a){return hf[a]}function
D(a){if(a
instanceof
Array)return a;if(o.RangeError&&a
instanceof
o.RangeError&&a.message&&a.message.match(/maximum call stack/i))return hk(x.Stack_overflow);if(o.InternalError&&a
instanceof
o.InternalError&&a.message&&a.message.match(/too much recursion/i))return hk(x.Stack_overflow);if(a
instanceof
o.Error&&he(dX))return[0,he(dX),a];return[0,x.Failure,aJ(String(a))]}function
c(a,b){return a.length==1?a(b):ad(a,[b])}function
d(a,b,c){return a.length==2?a(b,c):ad(a,[b,c])}function
al(a,b,c,d){return a.length==3?a(b,c,d):ad(a,[b,c,d])}function
dM(a,b,c,d,e){return a.length==4?a(b,c,d,e):ad(a,[b,c,d,e])}function
f0(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):ad(a,[b,c,d,e,f])}sG();var
eE=[B,a(f_),-2],cg=[B,a(gc),-3],dd=[B,a(gu),-4],r=[B,a(gy),-7],q=[B,a(gJ),-11],ch=[0,a(g),0,0,-1],eN=[0,a(g),1,0,0],av=[0,a("\0\0\x01\0\xf9\xff\0\0A\0\xa3\0\xfd\xff\0\0\x01\0\xff\xff\xf1\0 \0\x80\0\xfd\xff\x01\0@\x01\x8e\x01.\x000\0\xfd\xff\x04\0\0\0\xff\xff\x7f\0\xa0\0\xfe\xff\xff\xff\xee\0\x0e\x01\xfd\xff\xfe\xff\x02\0\xff\xff\0\x02\xf7\xffr\x02\xf9\xff\xfa\xff\xfb\xff\x84\x02\0\0\xf8\x02\xff\xff\xfe\xff\xfe\x02\xf9\xff\x04\x03\xfb\xff\xfc\xff\x02\0\n\x03\xff\xff\xfe\xff\x03\0\xff\xffu\0\xff\xff"),a("\xff\xff\x07\0\xff\xff\x05\0\xff\xff\x03\0\xff\xff\x01\0\xff\xff\xff\xff\x04\0\xff\xff\x03\0\xff\xff\x01\0\xff\xff\0\0\xff\xff\x03\0\xff\xff\x01\0\xff\xff\xff\xff\xff\xff\x02\0\xff\xff\xff\xff\xff\xff\x04\0\xff\xff\xff\xff\x03\0\xff\xff\xff\xff\xff\xff\x07\0\xff\xff\xff\xff\xff\xff\x03\0\x02\0\x07\0\xff\xff\xff\xff\xff\xff\xff\xff\x05\0\xff\xff\xff\xff\x02\0\x05\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff"),a("\x01\0\x01\0\0\0\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\xff\xff\f\0\f\0\0\0\xff\xff\xff\xff\xff\xff\x12\0\x12\0\0\0\xff\xff\xff\xff\0\0\x18\0\x18\0\0\0\0\0\x1c\0\x1c\0\0\0\0\0\xff\xff\0\0#\0\0\0#\0\0\0\0\0\0\0#\0\xff\xff#\0\0\0\0\0.\0\0\0.\0\0\0\0\0\xff\xff.\0\0\0\0\x005\0\0\x007\0\0\0"),a("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0(\0(\x001\x001\0(\0\0\x001\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0(\0\x07\x001\0\0\0\0\x006\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\t\0\x04\0\x0f\0\x15\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x05\0\0\0\x03\0\xff\xff\x16\0\x06\0 \0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x14\0\x0e\0\xff\xff\0\0\x05\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\n\0\0\0\0\0\0\0\0\0\0\0\0\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\x008\0\0\0\0\0\0\0\n\0\0\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\xff\xff\x1a\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x05\0\x05\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\xff\xff\0\0\0\0\0\0\0\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0\0\0\x02\0\xff\xff\x05\0\xff\xff\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\n\0\n\0\r\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\x1e\0\x1f\0\x13\0\0\0\xff\xff\0\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\xff\xff\xff\xff\0\0\0\0\n\0\0\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\x10\0\0\0\0\0\0\0\0\0\x19\0\xff\xff\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\0\0\0\0\0\0\0\0\x10\0\xff\xff\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\0\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\0\0\0\0\0\0\0\0\0\0\0\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\0\0\0\0\0\0\0\0\x10\0\x1d\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0(\0(\0\0\0\0\0(\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0(\0\0\0%\0\0\0\0\0\0\0\0\0$\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0)\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'\0\0\0\0\0&\0*\0\0\0\0\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0\0\0\0\0\0\0\0\0'\0\0\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0\xff\xff\xff\xff\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\xff\xff\0\0\0\0\xff\xff\xff\xff\0\0\xff\xff\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\xff\xff\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\xff\xff\xff\xff'\0'\0\0\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0\0\0\0\0\xff\xff\xff\xff\0\0\0\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0\0\0\0\0\0\0\0\0'\0\0\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0\0\0\"\0\xff\xff\xff\xff\0\0\0\0\xff\xff\0\x001\x001\0\0\0\0\x001\0\0\0\xff\xff\xff\xff\0\0\0\0\xff\xff\0\0\xff\xff\xff\xff\0\0\0\0\xff\xff\xff\xff\0\0\xff\xff\0\0\0\0\0\x001\0\xff\xff0\0\0\0\0\0\0\0\xff\xff/\0\xff\xff\0\0\0\0\0\0\xff\xff\xff\xff\xff\xff2\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\xff\xff+\0\0\0\0\0\0\0\0\0\0\x003\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\x004\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0-\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\xff\xff"),a("\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff(\0(\x001\x001\0(\0\xff\xff1\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff(\0\x03\x001\0\xff\xff\xff\xff5\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x07\0\b\0\x03\0\x0e\0\x14\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x03\0\xff\xff\0\0\x01\0\x15\0\x03\0\x1f\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x11\0\x0b\0\x12\0\xff\xff\x03\0\xff\xff\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x04\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\x007\0\xff\xff\xff\xff\xff\xff\x04\0\xff\xff\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\f\0\x17\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x05\0\x05\0\xff\xff\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x18\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\xff\xff\xff\xff\0\0\x01\0\x05\x005\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\n\0\n\0\x0b\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\x1b\0\x1b\0\x11\0\xff\xff\x12\0\xff\xff\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\x1c\0\x1c\0\xff\xff\xff\xff\n\0\xff\xff\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff7\0\xff\xff\xff\xff\xff\xff\xff\xff\x0f\0\xff\xff\xff\xff\xff\xff\xff\xff\x17\0\f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\xff\xff\xff\xff\xff\xff\xff\xff\x0f\0\x18\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x10\0\x10\0\xff\xff\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\xff\xff\xff\xff\xff\xff\xff\xff\x10\0\x1b\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0!\0!\0\xff\xff\xff\xff!\0\x1c\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff!\0\xff\xff!\0\xff\xff\xff\xff\xff\xff\xff\xff!\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff!\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff!\0\xff\xff\xff\xff!\0!\0\xff\xff\xff\xff!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0\xff\xff\xff\xff\xff\xff\xff\xff!\0\xff\xff!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0#\0#\0\xff\xff\xff\xff#\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff'\0'\0\xff\xff\xff\xff'\0#\0\xff\xff#\0\xff\xff\xff\xff\xff\xff\xff\xff#\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff'\0\xff\xff'\0\xff\xff\xff\xff\xff\xff\xff\xff'\0\xff\xff\xff\xff\xff\xff#\0#\0'\0'\0\xff\xff'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0\xff\xff\xff\xff'\0'\0\xff\xff\xff\xff'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0\xff\xff\xff\xff\xff\xff\xff\xff'\0\xff\xff'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0\xff\xff!\0)\0)\0\xff\xff\xff\xff)\0\xff\xff,\0,\0\xff\xff\xff\xff,\0\xff\xff.\0.\0\xff\xff\xff\xff.\0\xff\xff2\x002\0\xff\xff\xff\xff2\0)\0\xff\xff)\0\xff\xff\xff\xff\xff\xff,\0)\0,\0\xff\xff\xff\xff\xff\xff.\0,\0.\0\xff\xff\xff\xff\xff\xff2\0.\x002\0,\0\xff\xff\xff\xff\xff\xff2\0\xff\xff\xff\xff\xff\xff)\0)\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff,\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff.\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff2\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff#\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff'\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff)\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff,\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff.\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff2\0"),a(g),a(g),a(g),a(g),a(g),a(g)],e2=a_([a(aR),a(bf),a(bg),a(cP),a(b5),a(bm),a(b1),a(aE),a(bp),a(bU),a(aD),a(a6),a(bL),a(b4),a(bN),a(bZ),a(bJ),a(b0),a(bP),a(bY),a(Z),a(Y),a(a5),a(cS)]),ss=[0,a(b8),[0,a(cV),0]],st=[0,a(a6),[0,a(bp),[0,a(c2),0]]],fh=a(c1),fi=a(a4),fj=a(c1),fk=a(a4),fl=a(ee),ft=a_([a(aR),a(bf),a(bg),a(cP),a(b5),a(bm),a(b1),a(aE),a(bp),a(bU),a(aD),a(a6),a(bL),a(b4),a(bN),a(bZ),a(bJ),a(b0),a(bP),a(bY),a(Z),a(Y),a(a5),a(cS)]),su=[0,a(cV),0],sv=[0,a(a6),[0,a(bp),[0,a(c2),0]]],fx=a("o:spid"),fy=a("id"),cw=[0,a(f1)];ab(11,[B,a(f2),-12],f2);ab(10,q,gJ);ab(9,[B,a(gq),-10],gq);ab(8,[B,a(gz),-9],gz);ab(7,[B,a(gh),-8],gh);ab(6,r,gy);ab(5,[B,a(gF),-6],gF);ab(4,[B,a(gd),-5],gd);ab(3,dd,gu);ab(2,cg,gc);ab(1,eE,f_);ab(0,[B,a(gO),-1],gO);var
hx=a("Bytes.blit"),hw=a("String.sub / Bytes.sub"),hD=a("String.contains_from / Bytes.contains_from"),hA=a(g),hz=a(g),hy=a("String.concat"),hG=a("Array.blit"),hL=a("Set.remove_min_elt"),hM=[0,0,0,0],hN=[0,0,0],hO=[0,a("set.ml"),569,18],hH=a(cJ),hI=a(cJ),hJ=a(cJ),hK=a(cJ),hT=a("Map.remove_min_elt"),hU=[0,0,0,0],hV=[0,a("map.ml"),399,10],hW=[0,0,0],hP=a(cX),hQ=a(cX),hR=a(cX),hS=a(cX),hX=a("Stdlib.Stack.Empty"),hZ=a("CamlinternalLazy.Undefined"),h4=a("Buffer.add: cannot grow buffer"),h3=[0,a(gD),93,2],h2=[0,a(gD),94,2],h5=a("x"),sq=a("OCAMLRUNPARAM"),so=a("CAMLRUNPARAM"),h6=a(g),ig=a(g),il=a(g),ik=a(g),ii=a(g),ir=[2,a(ea)],is=[2,a(ea)],kg=a(g),kh=a(g),kJ=a(bd),kK=a('="'),kL=a(eb),kF=a(ao),kG=a(aZ),kH=a(d8),kR=a("<?"),kS=a(I),kT=a(b6),kU=a("<!--"),kV=a(I),kW=a("-->"),kX=a("<!"),kY=a(I),kZ=a(b6),kI=a(ea),kM=a("/>"),kN=a(b6),kO=a(b6),kP=a(gE),kQ=a(b6),kE=a("&quot;"),k0=a("write"),ku=a(g),kv=a(gE),kw=a(I),kx=a(aZ),ky=a(I),kz=a(ao),kA=a(I),kB=a(d8),kC=a(g),kq=[0,0,0],kr=[0,0,1],ks=[0,0,0],kt=[0,0,1],kp=[0,a("netstring/code/src/netstring/nethtml.ml"),356,27],ko=a(g),kl=a(g),km=[0,a0,dQ],kn=[0,a0,dQ],kk=a(g),kf=a(g),it=a("Nethtml.End_of_scan"),iu=a("Nethtml.Found"),iv=[0,[0,a(bn),[0,j,[0,k,[0,a(bn),[0,a(c3),[0,a(bm),0]]]]]],[0,[0,a(c3),[0,j,s]],0]],iw=a_([k,a(aA),a(bq),a(bl),a(R),a(W),a(aP),a(a2),a(aQ),a(az),a(bn)]),ix=a(b2),iy=[0,a(W),[0,j,bo]],iz=[0,a(aP),[0,j,s]],iA=[0,a(bl),[0,j,s]],iB=[0,a(bq),[0,j,[0,k,0]]],iC=[0,a(aA),[0,j,[0,k,[0,a(bq),[0,a(bl),[0,a(R),[0,a(W),[0,a(aP),[0,a(a2),[0,a(aQ),0]]]]]]]]]],iD=[0,a(a8),[0,j,h]],iE=[0,a(b9),[0,j,h]],iF=[0,a(V),[0,j,[0,k,[0,a(b9),[0,a(a8),0]]]]],iG=[0,a(aS),[0,j,s]],iH=[0,a(cZ),[0,j,[0,k,[0,a(aS),0]]]],iI=[0,a(bX),[0,j,[0,k,[0,a(V),0]]]],iJ=[0,a(bR),[0,j,[0,k,[0,a(V),0]]]],iK=[0,a(bM),[0,j,[0,k,[0,a(V),0]]]],iL=[0,a(c7),[0,j,b]],iM=[0,a(cR),[0,j,b]],iN=[0,a(bk),[0,j,[0,k,0]]],iO=[0,a(c0),[0,j,[0,k,[0,a(bk),0]]]],iP=[0,a(Q),[0,j,h]],iQ=[0,a(bW),[0,j,h]],iR=[0,a(cN),[0,j,b]],iS=[0,a(d4),[0,a0,h]],iT=[0,a(dO),[0,a0,h]],iU=[0,a(bh),[0,j,s]],iV=[0,a(a2),[0,j,s]],iW=[0,a(cM),[0,j,s]],iY=[0,k,[0,a(R),0]],iZ=a(az),i0=[0,a(bp),[0,l,s]],i1=[0,a(bm),[0,l,h]],i2=[0,a(cP),[0,l,h]],i3=[0,a(bL),[0,l,b]],i5=[0,k,[0,a(cR),0]],i6=a(a6),i7=[0,a(aD),[0,l,[0,k,[0,a(c7),[0,a(aS),[0,a(cZ),[0,a(bM),[0,a(bX),[0,a(bR),[0,a(V),0]]]]]]]]]],i8=[0,a(bU),[0,l,s]],i_=[0,k,[0,a(R),0]],i$=[0,a(aE),0],ja=a(aE),jc=[0,k,[0,a(R),0]],jd=a(b1),je=[0,a(b5),[0,l,h]],jf=[0,a(bg),[0,l,h]],jg=[0,a(bf),[0,l,[0,k,[0,a(cN),[0,a(bW),0]]]]],jh=[0,a(bY),[0,l,[0,E,[0,[0,a(an),[0,a(aQ),[0,a(cQ),[0,a(c5),[0,a(cT),[0,a(b3),[0,a(bV),ss]]]]]]],b]]]],ji=[0,k,[0,a(Q),0]],jj=a(cS),jk=[0,k,[0,a(Q),0]],jl=a(a5),jm=[0,a(Y),[0,l,[0,k,[0,a(Q),0]]]],jn=[0,a(Z),[0,l,[0,k,[0,a(Q),0]]]],jo=[0,a(bP),[0,l,b]],jp=[0,a(b0),[0,l,b]],jq=[0,a(bJ),[0,l,b]],jr=[0,a(bZ),[0,l,b]],js=[0,a(bN),[0,l,b]],jt=[0,a(b4),[0,l,b]],ju=[0,a(aR),[0,l,b]],jv=[0,a(c6),[0,b,[0,E,[0,[0,a(a1),[0,a(cL),[0,a(cW),[0,a(cI),[0,a(bj),[0,a(c6),[0,a(aE),st]]]]]]],h]]]],jw=[0,a(bj),[0,b,[0,E,[0,[0,a(bj),0],b]]]],jx=[0,a(cI),[0,b,[0,k,0]]],jy=[0,a(cW),[0,b,[0,k,[0,a(c0),[0,a(bk),0]]]]],jz=[0,a(cL),[0,b,s]],jA=[0,a(c2),[0,b,h]],jB=[0,a(cV),[0,b,s]],jC=[0,a(b8),[0,b,b]],jE=[0,k,[0,a(bh),0]],jF=a(cQ),jG=[0,a(gU),[0,b,b]],jI=[0,k,[0,a(cM),0]],jJ=a(gL),jK=[0,a(R),[0,b,bo]],jM=[0,k,[0,a(bh),0]],jN=a(aQ),jO=[0,a(an),[0,b,s]],jP=[0,a(a1),[0,b,[0,E,[0,[0,a(a1),0],b]]]],jQ=[0,a(gC),[0,b,s]],jR=[0,a(f6),[0,b,b]],jS=[0,a(be),[0,b,b]],jT=[0,a(b3),[0,b,b]],jU=[0,a(bV),[0,b,b]],jV=[0,a(d5),[0,b,b]],jW=[0,a(gr),[0,b,b]],jX=[0,a(dT),[0,b,b]],jY=[0,a(ej),[0,b,b]],jZ=[0,a(dS),[0,b,b]],j0=[0,a(em),[0,b,b]],j1=[0,a(dV),[0,b,b]],j2=[0,a(dU),[0,b,b]],j3=[0,a(d2),[0,b,b]],j4=[0,a(eh),[0,b,b]],j5=[0,a(gs),[0,b,b]],j6=[0,a(d0),[0,b,b]],j7=[0,a(dR),[0,b,b]],j8=[0,a(cT),[0,b,b]],j9=[0,a(c5),[0,b,b]],j_=[0,a(eg),[0,b,b]],j$=[0,a(en),[0,b,b]],ka=[0,a(ec),[0,b,b]],kd=[0,a(az),[0,a(aD),[0,a(Y),[0,a(Z),[0,a(bf),0]]]]],k2=[0,0,0],k4=a(g),k3=a(g),k_=a(bd),k8=a("' is invalid"),k9=a("document list level '"),k5=a("\xef\x82\xb7"),k6=a("\xef\x82\xa7"),k7=a("o"),lg=a(b2),lj=[0,a("src/main/re/html/htmlStd.re"),138,9],k$=a(I),la=a(d3),lb=a(ao),lc=a_([a(bL),a("article"),a("aside"),a("audio"),a(b1),a("canvas"),a(bW),a(bg),a(bf),a(a6),a("figcaption"),a("figure"),a("footer"),a(aE),a(b4),a(bN),a(bZ),a(bJ),a(b0),a(bP),a("header"),a("hgroup"),a(bU),a(Q),a(b5),a(Y),a("output"),a(aR),a(bY),a("section"),a(aD),a(bR),a(a8),a(bX),a(b9),a(bM),a(V),a(Z),a("video")]),ld=[0,a(az),[0,a(aA),[0,a(b2),[0,a(a2),[0,a(aP),[0,a(W),[0,a(dP),0]]]]]]],lh=[0,a(g)],lw=a(aR),lu=a(gH),lt=a(gt),lv=[0,a(gH)],lr=a(gt),lp=a(an),ll=a(gi),lm=a(gi),ln=a("file:"),lo=a("data-image-src"),l8=a(bd),l7=a(bO),l4=a(":level"),l2=a(bd),lV=a(dW),lW=a(ei),lX=a(dW),lY=a(ei),lZ=a(ee),l0=a(dW),l1=a(ei),l3=a(g),l5=a(g),l6=a("@list "),lT=a(f4),lR=[0,a("\n  ")],lS=a("  "),lQ=a(g),lO=a("color"),lP=a(bd),lL=a('""'),lM=a(";"),lN=a(a4),lB=a(c1),lC=a(g),lD=a(ao),lE=a(bd),lF=a(g),lA=[0,a(g),0],lG=a(g),lH=a(f4),ly=a(eb),lz=a(eb),lI=[0,a("font-family"),0],mm=[0,a(u),155,8],mn=[0,a(u),170,12],mo=[0,a(u),182,4],mp=[0,a(u),202,12],mq=[0,a(u),214,8],mr=[0,a(u),292,4],ms=[0,a(u),306,8],mt=[0,a(u),314,4],mu=[0,a(u),343,8],mv=a("Internal failure -- please contact the parser generator's developers.\n%!"),mw=[0,a(u),350,4],mx=[0,a(u),368,8],my=[0,a(u),390,16],mz=[0,a(u),394,12],mA=[0,a(u),494,8],mB=[0,a(u),598,8],mC=[0,a(u),615,12],mD=[0,a(u),627,4],mE=[0,a(u),648,8],mF=[0,a(u),656,4],mG=[0,a(u),673,8],mH=[0,a(u),699,4],mI=[0,a(u),724,12],mJ=[0,a(u),728,8],mK=[0,a(u),865,8],mL=[0,a(u),892,8],me=a(ee),mb=a("list"),md=a(a4),mc=a(g),l$=a(c1),ma=a(g),l_=[0,a(g),0],l9=a("Css_parser.MenhirBasics.Error"),mP=a(")"),mQ=a("' ("),mR=a("Unexpected char: '"),mM=a("Css_lexer.SyntaxError"),mN=[0,a('\0\0\xeb\xff\x14\0\x03\0\x01\0\xd7\0\x0e\0H\x01\x9d\0\xf1\xff\x03\0\x06\0\x11\0u\x01\xe8\x01B\x02\x9c\x02\xf6\x02\x02\0\x1e\0\xf7\xff\xf8\xff\xf9\xff\xfa\xff\xfb\xff\xfc\xff\b\0\x01\0\xfe\xff\xff\xff\xf6\xff\xf5\xff\x12\0P\x03\xaa\x03|\0\xf4\xff\x04\x04^\x04\xc8\x01\x90\x04\x13\0\xbd\x04\xed\xff0\x05\x15\0\x16\0\x17\0\xf0\xff2\x052\x001\x054\0\x0b\0\x12\0\x0e\0"\0\xa1\x05\xa2\x055\0\xa3\x05\xa7\x05\xa8\x05\xa9\x05\xad\x051\x003\0\xee\xffY\0Z\0\xec\xff\\\0]\0'),a("\xff\xff\xff\xff\x14\0\x14\0\x14\0\x10\0\x14\0\x14\0\x14\0\xff\xff\x14\0\x14\0\x14\0\x10\0\r\0\x10\0\x10\0\x10\0\x14\0\x14\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x02\0\x01\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x10\0\x10\0\xff\xff\xff\xff\x10\0\x10\0\xff\xff\f\0\xff\xff\x10\0\xff\xff\r\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x0f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff"),a("\x01\0\0\0\xff\xff\xff\xff\x05\0\xff\xff\xff\xff3\x001\0\0\0.\0-\0\t\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\xff\xff\0\0\0\0\0\0\0\0\x05\0\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff'\0'\0'\0\xff\xff\0\0\xff\xff\t\0/\0\t\0\0\x001\x001\x003\x003\0\xff\xff\xff\xff\xff\xff\xff\xff9\x009\x009\x009\x009\x009\x009\x009\0\xff\xff\xff\xff\0\0D\0G\0\0\0G\0G\0"),a("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1a\0\x1c\0\x1c\0\0\0\x1b\0\0\0\0\0\0\0\x1a\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1a\0\x05\0\b\0\x05\0A\0\x05\0\x06\0\x07\0\x1a\0\0\0\t\0\x05\0\x19\0\x0f\0\r\0\x02\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x15\0\x16\0\x03\0\x05\0D\0\x1f\0\x14\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x1e\0\x04\x009\0B\0\x05\0C\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x11\0\x05\0\x05\0\x10\0\x05\0\x05\0\x05\0\x05\0\x05\0\x18\0\x12\0\x17\0\x13\x005\x006\x007\x008\0E\0E\0#\0H\0H\0\0\0F\0\0\0\0\0F\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0#\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0$\0\0\0\xff\xff#\0\0\0\xff\xff\0\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x000\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\x0b\0\x0b\0\x0b\0\x0b\0\x0b\0\x0b\0\x0b\0\x0b\0\x0b\0\x0b\0\x0b\0\x0b\0\x0b\0\x0b\0\x0b\0\x0b\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\x05\x002\0\x05\0\0\0\x05\0\0\0\0\0\0\0\x1d\0\xff\xff\x05\0\xff\xff\x05\0\x05\0\xff\xff\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\xff\xff\xff\xff\xff\xff\x05\0\xff\xff\xff\xff\xff\xff\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\xff\xff \0\xff\xff\xff\xff\x05\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\xff\xff\0\0\0\0\xff\xff\0\0\0\0\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x000\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x05\0\0\0\x05\0\0\0\x05\0\0\0\0\0\xff\xff\0\0\0\0\x05\0\0\0\x05\0\x05\x004\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0\0\0\0\0\0\0\x05\0\0\0\0\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0 \0\xff\xff\0\0\x05\0\xff\xff\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0(\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x05\0\0\0\x05\0\0\0\x05\0\0\0\0\0\0\0\0\0\0\0\x05\0\0\0\x05\0\r\0\0\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\0\0\0\0)\0\x05\0\0\0\0\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0 \0\0\0\0\0\x05\0\xff\xff\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0\x05\0\0\0\x05\0\0\0\0\0\0\0\0\0\0\0\x05\0\0\0*\0\r\0\0\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\0\0\0\0\0\0\x05\0\0\0\0\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0 \0\0\0\0\0\x05\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0\x05\0\0\0\x05\0\0\0\0\0\0\0\0\0\0\0\x05\0\xff\xff\x05\0\x05\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0\0\0\0\0\x05\0\0\0\0\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0 \0\0\0\0\0\x05\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0%\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0\x05\0\0\0\x05\0\0\0\0\0\0\0\0\0\0\0\x05\0\0\0\x05\0\x05\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0\0\0\0\0\x05\0\0\0\0\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0 \0\0\0\0\0\x05\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0!\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0\x05\0\0\0\x05\0\0\0\0\0\0\0\0\0\0\0\x05\0\0\0\x05\0\x05\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0\0\0\0\0\x05\0\0\0\0\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0 \0\0\0\0\0\x05\0\0\0\x05\0\"\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0\x05\0\0\0\x05\0\0\0\0\0#\0\0\0\0\0\x05\0\0\0\x05\0\x05\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0\0\0\0\0\x05\0\0\0\0\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0 \0\0\0\0\0\x05\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0\x05\0\0\0\x05\0\0\0\0\0\0\0\0\0\0\0\x05\0\0\0\x05\0\x05\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0\0\0\0\0\x05\0\0\0\0\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0 \0\0\0\0\0\x05\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0&\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0\x05\0\0\0\x05\0\0\0\0\0'\0\0\0\0\0\x05\0\0\0\x05\0\x05\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0\0\0\xff\xff\x05\0\0\0\xff\xff\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0(\0 \0\0\0\0\0\x05\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0\0\0\0\0\0\0\0\0\x05\0\0\0\x05\0\0\0\x05\0\0\0\0\0\0\0\0\0\0\0\x05\0\0\0\x05\0\x05\0)\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0\0\0\0\0\x05\0+\0\0\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0 \0\0\0\0\0\x05\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0\0\0\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x05\0\0\0\x05\x000\0\x05\0\0\0\0\x000\0\0\0\0\0\x05\0\0\0\x05\0\x05\0\0\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0\0\0\0\0\0\0\x05\0\0\0\0\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0 \x004\x002\0\x05\0\xff\xff\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0:\0:\0:\0\0\0\0\0\0\0:\0:\0:\0\0\0\0\0\0\0:\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0@\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0;\0;\0;\0\0\0\0\0\0\0;\0;\0;\0\0\0\0\0\0\0;\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0<\0\0\0\0\0>\0\0\0=\0\0\0\0\0\0\0?\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\xff\xff\xff\xff\0\0\0\0\0\0\xff\xff\xff\xff\xff\xff\0\0\0\0\0\0\xff\xff"),a('\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\x1b\0\xff\xff\0\0\xff\xff\xff\xff\xff\xff\x1a\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\0\0\0\0\x03\0\0\0\0\0\0\0\x1a\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x02\0\x12\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x13\0\0\x008\0A\0\0\0B\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x06\x005\x006\x007\0D\0E\0#\0G\0H\0\xff\xffE\0\xff\xff\xff\xffH\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff#\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff#\0\xff\xff\b\0#\0\xff\xff\b\0\xff\xff#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\b\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x05\0\b\0\x05\0\xff\xff\x05\0\xff\xff\xff\xff\xff\xff\0\0\x04\0\x05\0\n\0\x05\0\x05\0\x0b\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\f\0 \0)\0\x05\0-\0.\0/\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\x002\0\x05\x004\0;\0\x05\0\xff\xff\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x07\0\xff\xff\xff\xff\x07\0\xff\xff\xff\xff\xff\xffD\0E\0\xff\xffG\0H\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x07\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\r\0\xff\xff\r\0\xff\xff\r\0\xff\xff\xff\xff\b\0\xff\xff\xff\xff\r\0\xff\xff\r\0\r\0\x07\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\xff\xff\xff\xff\xff\xff\r\0\xff\xff\xff\xff\xff\xff\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\xff\xff\r\0\'\0\xff\xff\r\0\'\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\r\0\xff\xff\'\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x0e\0\xff\xff\x0e\0\xff\xff\x0e\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x0e\0\xff\xff\x0e\0\x0e\0\xff\xff\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\xff\xff\xff\xff\'\0\x0e\0\xff\xff\xff\xff\xff\xff\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\xff\xff\x0e\0\xff\xff\xff\xff\x0e\0\x07\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0f\0\xff\xff\x0f\0\xff\xff\x0f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x0f\0\xff\xff\x0f\0\x0f\0\xff\xff\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\xff\xff\xff\xff\xff\xff\x0f\0\xff\xff\xff\xff\xff\xff\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\xff\xff\x0f\0\xff\xff\xff\xff\x0f\0\xff\xff\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x10\0\xff\xff\x10\0\xff\xff\x10\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x10\0\'\0\x10\0\x10\0\xff\xff\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\xff\xff\xff\xff\xff\xff\x10\0\xff\xff\xff\xff\xff\xff\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\xff\xff\x10\0\xff\xff\xff\xff\x10\0\xff\xff\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x11\0\xff\xff\x11\0\xff\xff\x11\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x11\0\xff\xff\x11\0\x11\0\xff\xff\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\xff\xff\xff\xff\xff\xff\x11\0\xff\xff\xff\xff\xff\xff\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\xff\xff\x11\0\xff\xff\xff\xff\x11\0\xff\xff\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0!\0\xff\xff!\0\xff\xff!\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff!\0\xff\xff!\0!\0\xff\xff!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0\xff\xff\xff\xff\xff\xff!\0\xff\xff\xff\xff\xff\xff!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0\xff\xff!\0\xff\xff\xff\xff!\0\xff\xff!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0"\0\xff\xff"\0\xff\xff"\0\xff\xff\xff\xff"\0\xff\xff\xff\xff"\0\xff\xff"\0"\0\xff\xff"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0\xff\xff\xff\xff\xff\xff"\0\xff\xff\xff\xff\xff\xff"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0\xff\xff"\0\xff\xff\xff\xff"\0\xff\xff"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0%\0\xff\xff%\0\xff\xff%\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff%\0\xff\xff%\0%\0\xff\xff%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0\xff\xff\xff\xff\xff\xff%\0\xff\xff\xff\xff\xff\xff%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0\xff\xff%\0\xff\xff\xff\xff%\0\xff\xff%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0&\0\xff\xff&\0\xff\xff&\0\xff\xff\xff\xff&\0\xff\xff\xff\xff&\0\xff\xff&\0&\0\xff\xff&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0\xff\xff\xff\xff(\0&\0\xff\xff(\0\xff\xff&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0(\0&\0\xff\xff\xff\xff&\0\xff\xff&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff*\0\xff\xff*\0\xff\xff*\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff*\0\xff\xff*\0*\0(\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0\xff\xff\xff\xff\xff\xff*\0*\0\xff\xff\xff\xff*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0\xff\xff*\0\xff\xff\xff\xff*\0\xff\xff*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0\xff\xff\xff\xff\xff\xff3\x001\0\xff\xff3\x001\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff,\0\xff\xff,\x001\0,\0\xff\xff\xff\xff3\0\xff\xff\xff\xff,\0\xff\xff,\0,\0\xff\xff,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0\xff\xff\xff\xff\xff\xff,\0\xff\xff\xff\xff\xff\xff,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0\xff\xff,\x003\x001\0,\0(\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\x009\0:\0<\x009\0:\0<\0=\0>\0?\0=\0>\0?\0@\0\xff\xff\xff\xff@\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff9\0:\0<\0\xff\xff\xff\xff\xff\xff=\0>\0?\0\xff\xff\xff\xff\xff\xff@\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff?\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff9\0:\0<\0\xff\xff\xff\xff\xff\xff=\0>\0?\0\xff\xff\xff\xff\xff\xff@\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff:\0\xff\xff\xff\xff=\0\xff\xff<\0\xff\xff\xff\xff\xff\xff>\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff3\x001\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff9\0:\0<\0\xff\xff\xff\xff\xff\xff=\0>\0?\0\xff\xff\xff\xff\xff\xff@\0'),a("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\t\0\x03\0\0\0\x07\0\x04\0\0\0\0\0\0\0\0\0\t\0\x0b\0\x05\0\r\0\x0f\0\x11\0\x13\0\x19\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"),a("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\t\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"),a("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x06\0\x06\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x06\0\x06\0\x06\0\x06\0\0\0\0\0\0\0\0\0\x06\0\x06\0\x06\0\x06\0\x06\0\x06\0\x06\0\x06\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"),a("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\0\0\0\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0e\0\0\0\x11\0\0\0\x11\0\0\0\x11\0\0\0\x11\0\0\0\x11\0\0\0\x01\0\0\0\0\0\0\0\x11\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0e\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0e\0\0\0\x0e\0\0\0\0\0\0\0\x0e\0\0\0\0\0\x0e\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"),a("\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x07\0\b\x001\0\x07\0\b\x001\x003\0\xff\xff9\x003\0:\x009\0<\0:\0=\0<\0>\0=\0?\0>\0\xff\xff?\0\xff\xff\0\0@\0\b\x001\0@\0\0\0\x07\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff3\x009\0\xff\xff:\0\xff\xff<\0\xff\xff=\0\xff\xff>\0\xff\xff?\0\xff\xff8\0\xff\xff\xff\xff\xff\xff@\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff?\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x07\0\b\x001\0\xff\xff\xff\xff\xff\xff3\0\xff\xff9\0\xff\xff:\0\xff\xff<\0\xff\xff=\0\xff\xff>\0\xff\xff?\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff@\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff:\0\xff\xff=\0\xff\xff\xff\xff\xff\xff<\0\xff\xff\xff\xff>\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff2\0\x07\0\b\x001\x004\0;\0\xff\xff3\0\xff\xff9\0\xff\xff:\0\xff\xff<\0\xff\xff=\0\xff\xff>\0\xff\xff?\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff@\0"),a("\xff\x03\xff\x02\xff\xff\x03\xff\xff\x01\x02\0\x03\xff\x04\xff\xff\x03\x04\x04\xff\xff")],mW=a(W),mU=a(": "),mV=a(": syntax error parsing:"),mS=a(gn),mT=a(a4),mX=a(az),m3=a(bO),m0=a(W),m1=[1,a(bO)],m2=a(bO),mZ=a(bO),mY=a(W),m4=[0,[0,a(bn),[0,j,[0,k,[0,a(bn),[0,a(c3),[0,a(bm),0]]]]]],[0,[0,a(c3),[0,j,s]],0]],m5=a_([k,a(aA),a(bq),a(bl),a(R),a(W),a(aP),a(a2),a(aQ),a(az),a(bn)]),m6=a(b2),m7=[0,a(W),[0,j,bo]],m8=[0,a(aP),[0,j,s]],m9=[0,a(bl),[0,j,s]],m_=[0,a(bq),[0,j,[0,k,0]]],m$=[0,a(aA),[0,j,[0,k,[0,a(bq),[0,a(bl),[0,a(R),[0,a(W),[0,a(aP),[0,a(a2),[0,a(aQ),0]]]]]]]]]],na=[0,a(a8),[0,j,h]],nb=[0,a(b9),[0,j,h]],nc=[0,a(V),[0,j,[0,k,[0,a(b9),[0,a(a8),0]]]]],nd=[0,a(aS),[0,j,s]],ne=[0,a(cZ),[0,j,[0,k,[0,a(aS),0]]]],nf=[0,a(bX),[0,j,[0,k,[0,a(V),0]]]],ng=[0,a(bR),[0,j,[0,k,[0,a(V),0]]]],nh=[0,a(bM),[0,j,[0,k,[0,a(V),0]]]],ni=[0,a(c7),[0,j,b]],nj=[0,a(cR),[0,j,b]],nk=[0,a(bk),[0,j,[0,k,0]]],nl=[0,a(c0),[0,j,[0,k,[0,a(bk),0]]]],nm=[0,a(Q),[0,j,h]],nn=[0,a(bW),[0,j,h]],no=[0,a(cN),[0,j,b]],np=[0,a(d4),[0,a0,h]],nq=[0,a(dO),[0,a0,h]],nr=[0,a(bh),[0,j,s]],ns=[0,a(a2),[0,j,s]],nt=[0,a(cM),[0,j,s]],nv=[0,k,[0,a(R),0]],nw=a(az),nx=[0,a(bp),[0,l,s]],ny=[0,a(bm),[0,l,h]],nz=[0,a(cP),[0,l,h]],nA=[0,a(bL),[0,l,b]],nC=[0,k,[0,a(cR),0]],nD=a(a6),nE=[0,a(aD),[0,ay,[0,k,[0,a(c7),[0,a(aS),[0,a(cZ),[0,a(bM),[0,a(bX),[0,a(bR),[0,a(V),0]]]]]]]]]],nF=[0,a(bU),[0,l,s]],nH=[0,k,[0,a(R),0]],nI=[0,a(aE),0],nJ=a(aE),nL=[0,k,[0,a(R),0]],nM=a(b1),nN=[0,a(b5),[0,l,h]],nO=[0,a(bg),[0,l,h]],nP=[0,a(bf),[0,ay,[0,k,[0,a(cN),[0,a(bW),0]]]]],nQ=[0,a(bY),[0,l,[0,E,[0,[0,a(aQ),[0,a(cQ),[0,a(c5),[0,a(cT),[0,a(b3),[0,a(bV),[0,a(b8),su]]]]]]],b]]]],nR=[0,k,[0,a(Q),0]],nS=a(cS),nT=[0,k,[0,a(Q),0]],nU=a(a5),nV=[0,a(Y),[0,ay,[0,k,[0,a(Q),0]]]],nW=[0,a(Z),[0,ay,[0,k,[0,a(Q),0]]]],nX=[0,a(bP),[0,l,b]],nY=[0,a(b0),[0,l,b]],nZ=[0,a(bJ),[0,l,b]],n0=[0,a(bZ),[0,l,b]],n1=[0,a(bN),[0,l,b]],n2=[0,a(b4),[0,l,b]],n3=[0,a(aR),[0,l,b]],n4=[0,a(c6),[0,b,[0,E,[0,[0,a(a1),[0,a(cL),[0,a(cW),[0,a(cI),[0,a(bj),[0,a(c6),[0,a(aE),sv]]]]]]],h]]]],n5=[0,a(bj),[0,b,[0,E,[0,[0,a(bj),0],b]]]],n6=[0,a(cI),[0,b,[0,k,0]]],n7=[0,a(cW),[0,b,[0,k,[0,a(c0),[0,a(bk),0]]]]],n8=[0,a(cL),[0,b,s]],n9=[0,a(c2),[0,b,h]],n_=[0,a(cV),[0,b,s]],n$=[0,a(b8),[0,b,h]],ob=[0,k,[0,a(bh),0]],oc=a(cQ),od=[0,a(gU),[0,b,h]],of=[0,k,[0,a(cM),0]],og=a(gL),oh=[0,a(R),[0,b,bo]],oj=[0,k,[0,a(bh),0]],ok=a(aQ),ol=[0,a(an),[0,b,s]],om=[0,a(a1),[0,b,[0,E,[0,[0,a(a1),0],b]]]],on=[0,a(gC),[0,b,s]],oo=[0,a(f6),[0,b,h]],op=[0,a(be),[0,b,h]],oq=[0,a(b3),[0,b,h]],or=[0,a(bV),[0,b,h]],os=[0,a(d5),[0,b,h]],ot=[0,a(gr),[0,b,h]],ou=[0,a(dT),[0,b,h]],ov=[0,a(ej),[0,b,h]],ow=[0,a(dS),[0,b,h]],ox=[0,a(em),[0,b,h]],oy=[0,a(dV),[0,b,h]],oz=[0,a(dU),[0,b,h]],oA=[0,a(d2),[0,b,h]],oB=[0,a(eh),[0,b,h]],oC=[0,a(gs),[0,b,h]],oD=[0,a(d0),[0,b,h]],oE=[0,a(dR),[0,b,h]],oF=[0,a(cT),[0,b,h]],oG=[0,a(c5),[0,b,h]],oH=[0,a(eg),[0,b,h]],oI=[0,a(en),[0,b,h]],oJ=[0,a(ec),[0,b,h]],o0=a(W),oZ=a(aA),oX=a(az),oY=a(b2),oU=a(aA),oV=a(W),oT=a(W),oQ=a(I),oR=a(aZ),oS=a(gl),oP=a(aA),oO=a(az),oL=[0,1],oM=[0,0],oN=[0,1],oW=[1,a(aP),[0,[0,a("http-equiv"),a("Content-Type")],[0,[0,a("content"),a("text/html; charset=utf-8")],0]],0,0],pC=a(I),pD=a(ao),pE=a(I),pF=a("[if !msEquation]"),pG=a(ao),pH=a(I),pI=a(d3),pA=[0,a("data-ms-equation"),a(d6)],pp=a(I),pq=a(ao),pr=a(I),ps=a("[if !vml]"),pt=a(ao),pu=a(I),pv=a(d3),pn=a(dP),pi=a(an),pj=a(an),ph=a(an),pk=a(an),pd=a(dP),pb=a("v:imagedata"),pc=a(an),o$=a("vshapedata"),o8=[0,[0,a("rtf-data-image"),a(d6)],0],o9=a("data-image-id"),o5=a("rotation"),o1=a("-90"),o2=a("90"),o3=a(bT),o4=a(a7),o6=a(bT),o7=a(a7),o_=a("unsupported"),pg=a(an),pl=a("[if gte vml 1]>"),pm=a(gM),pw=a(aZ),py=a("[if gte msEquation"),pz=a(gM),pJ=a(aZ),pL=[0,0],pO=a(I),pP=a("[if !supportLists]"),pQ=a(ao),pR=a(aZ),qy=a(f$),qz=a(Q),qA=a(bK),qC=[0,a(gb),a(d6)],qB=a(Q),qv=a(a4),qw=a(a4),qx=a(dN),qu=a(gn),qD=a(Z),qE=a(aR),qs=[0,0,0],qr=[0,0,0,0],qp=a(cK),qq=[0,a(cU),0],qt=[0,0,0],qn=a("mso-text-indent-alt"),qo=a(gT),qk=a("mso-level-legacy"),ql=a("yes"),qm=[0,a(Z),0,0],qh=a(f9),qi=a(cU),qj=[0,a(cK)],qe=a("margin-top"),qf=a("margin-bottom"),p8=[0,[0,a(Z),0]],p2=a("alpha-lower"),p3=a("alpha-upper"),p4=a("bullet"),p5=a("image"),p6=a("roman-lower"),p7=a("roman-upper"),p9=[0,[0,a(Y),[0,a("upper-roman")]]],p_=[0,[0,a(Y),[0,a("lower-roman")]]],p$=[0,[0,a(Y),[0,a("upper-alpha")]]],qa=[0,[0,a(Y),[0,a("lower-alpha")]]],qb=a("mso-level-number-format"),qc=[0,a(Y),0],pZ=[0,[0,a(Z),[0,a("square")]]],p0=[0,[0,a(Z),[0,a("circle")]]],p1=a("mso-level-text"),pY=a("0"),pX=a(el),pU=[0,a(gK)],pV=a(Z),pW=a("mso-level-start-at"),pS=[0,[0,a(cK)],[0,[0,a(cU),0]]],pT=a(Q),pN=a(gQ),qL=[0,1],qK=a(Y),qH=a(el),qI=a(dN),qJ=a(el),qF=a_([a(b8),a(be),a(eg),a(en),a(dR),a(b3),a(bV),a(eh),a(d2),a(em),a(d5),a(dT),a(dV),a(dU),a(dS),a(ec),a(d0),a(dO),a(d4),a(ej),a(aA)]),rg=a(be),rd=a(bK),re=a(ek),rc=a(ek),ra=a(bK),rb=a(ek),q_=a(bK),q$=a("Apple-converted-space"),q3=a(I),qZ=a(aZ),q0=a("---"),qY=a(I),qT=a(gl),qU=a("endfragment"),qV=a("[if "),qW=a("[endif"),qR=a(a1),qP=a("name"),qQ=a("OLE_LINK"),q4=a(ao),q6=[0,a("lang"),[0,a("onmouseover"),[0,a("onmouseout"),[0,a(dN),0]]]],q7=[0,a(bK),[0,a(gb),[0,a(f$),[0,a(gT),0]]]],ru=a(bg),rs=a("mso-element"),rt=[0,a("para-border-div"),0],rq=a("border"),ro=a("margin-left"),rp=a("data-border-margin"),rm=a(aR),ri=a(be),rj=a(a5),rk=a(be),rl=a(a5),rM=a("mso-"),rN=a(gQ),rA=a("font-stretch"),rB=a("font-variant-caps"),rC=a("text-decoration"),rD=a("text-indent"),rE=a("text-transform"),rF=a("vertical-align"),rG=a("white-space"),rH=a("word-spacing"),rK=a("baseline"),rJ=a("normal"),rL=a(cU),rI=a("0px"),rw=[0,a(gK),[0,a(cK),[0,a(f9),0]]],ry=a_([a("layout-grid-mode"),a("tab-stops"),a(gx),a("text-underline"),a("text-effect"),a("text-line-through"),a("page"),a("font-color"),a("horiz-align"),a("language"),a("separator-image"),a("table-border-color-dark"),a("table-border-color-light"),a("vert-align"),a("widows"),a("letter-spacing"),a("caret-color"),a("orphans")]),rP=[0,a(aD),[0,a(V),[0,a(a8),[0,a(aS),0]]]],r4=a(bT),r5=a(a7),r3=[0,a(a8),[0,a(aS),0]],r2=a(V),r0=a(a7),r1=a(bT),rZ=a(aD),rX=a(aD),rW=a(a7),rU=a(a7),rT=a("px"),rS=[0,a(a7),[0,a(bT),0]],r9=a(gx),r_=a("data-tab-interval"),r8=[0,1],r7=[0,0],sa=a("Js_of_ocaml__Js.Error"),sb=a(dX),si=a(g),sj=a(f1),se=a("function"),sn=a("ephox.wimp");function
eD(a){throw[0,cg,a]}function
M(a){throw[0,dd,a]}S(0);function
i(d,c){var
a=p(d),e=p(c),b=L(a+e|0);a9(d,0,b,0,a);a9(c,0,b,a,e);return aI(b)}function
hq(a){try{var
b=[0,g$(a)];return b}catch(a){a=D(a);if(a[1]===cg)return 0;throw a}}function
y(a,b){if(a){var
c=a[1];return[0,c,y(a[2],b)]}return b}s4(0);var
de=hb(1);hb(2);function
df(a){hc(de,a,0,p(a));s7(de,10);return ez(de)}function
hr(b){function
a(b){var
a=b;for(;;){if(a){var
c=a[2],d=a[1];try{ez(d)}catch(a){a=D(a);if(a[1]!==eE)throw a;var
e=a}var
a=c;continue}return 0}}return a(s5(0))}function
eF(h,g,f){var
a=g,e=f;for(;;){var
b=c(e,0);if(b){var
i=b[2],a=d(h,a,b[1]),e=i;continue}return a}}function
hs(a){var
b=a-192|0,c=0;if(30<b>>>0){if(!(25<(b+gp|0)>>>0))c=1}else
if(23!==b)c=1;return c?a+32|0:a}var
dg=tj(0),by=(4*dg|0)-1|0;function
ht(a){return 25<(a-65|0)>>>0?a:a+32|0}S(0);var
hu=ti(0);function
aX(c){var
b=0,a=c;for(;;){if(a){var
b=b+1|0,a=a[2];continue}return b}}function
bz(d,c){var
a=d,b=c;for(;;){if(a){var
e=[0,a[1],b],a=a[2],b=e;continue}return b}}function
C(a){return bz(a,0)}typeof
hu==="number";function
ag(b,a){if(a){var
d=a[2],e=c(b,a[1]);return[0,e,ag(b,d)]}return 0}function
a$(d,b){var
a=b;for(;;){if(a){var
e=a[2];c(d,a[1]);var
a=e;continue}return 0}}function
aY(f,e,c){var
b=e,a=c;for(;;){if(a){var
g=a[2],b=d(f,b,a[1]),a=g;continue}return b}}function
ba(c,a,b){if(a){var
e=a[1];return d(c,e,ba(c,a[2],b))}return b}function
at(e,d){var
a=d;for(;;){if(a){var
f=a[2],b=c(e,a[1]);if(b)return b;var
a=f;continue}return 0}}function
eG(d,c){var
a=c;for(;;){if(a){var
e=a[2],b=0===bs(a[1],d)?1:0;if(b)return b;var
a=e;continue}return 0}}function
bb(d,c){var
a=c;for(;;){if(a){var
b=a[1],e=a[2],f=b[2];if(0===bs(b[1],d))return f;var
a=e;continue}throw r}}var
hv=L(0);function
dh(c,b,a){if(0<=b&&0<=a&&!((af(c)-a|0)<b)){var
d=L(a);aU(c,b,d,0,a);return d}return M(hw)}function
di(c,b,a){return aI(dh(c,b,a))}function
eH(c){var
a=c-9|0,b=0;if(4<a>>>0){if(23===a)b=1}else
if(2!==a)b=1;return b?1:0}function
eI(g,b){var
d=af(b);if(0===d)return b;var
e=L(d),f=d-1|0,h=0;if(!(f<0)){var
a=h;for(;;){g5(e,a,c(g,b$(b,a)));var
i=a+1|0;if(f!==a){var
a=i;continue}break}}return e}function
dj(b,c){var
a=L(b);sF(a,0,b,c);return aI(a)}function
ah(c,b,a){return aI(dh(ac(c),b,a))}function
ai(k,g){if(g){var
h=p(k),c=0,b=g,q=0;for(;;){if(b){var
i=b[1];if(b[2]){var
j=(p(i)+h|0)+c|0,m=b[2],n=c<=j?j:M(hy),c=n,b=m;continue}var
l=p(i)+c|0}else
var
l=c;var
f=L(l),e=q,d=g;for(;;){if(d){var
a=d[1];if(d[2]){var
o=d[2];a9(a,0,f,e,p(a));a9(k,0,f,e+p(a)|0,h);var
e=(e+p(a)|0)+h|0,d=o;continue}a9(a,0,f,e,p(a))}return aI(f)}}}return hz}function
eJ(c){var
a=c-9|0,b=0;if(4<a>>>0){if(23===a)b=1}else
if(2!==a)b=1;return b?1:0}function
eK(e,d,c,b){var
a=c;for(;;){if(d<=a)throw r;if(as(e,a)===b)return a;var
a=a+1|0;continue}}function
hB(a,b){return eK(a,p(a),0,b)}function
hC(b,a,d){var
c=p(b);if(0<=a&&!(c<a))try{eK(b,c,a,d);var
e=1;return e}catch(a){a=D(a);if(a===r)return 0;throw a}return M(hD)}function
eL(b,a){return hC(b,0,a)}function
dk(a){return aI(eI(ht,ac(a)))}var
hE=da;function
hF(a){return aI(eI(hs,ac(a)))}function
eM(e,b){var
d=b.length-1;if(0===d)return[0];var
f=aW(d,c(e,b[1])),g=d-1|0,h=1;if(!(g<1)){var
a=h;for(;;){f[1+a]=c(e,b[1+a]);var
i=a+1|0;if(g!==a){var
a=i;continue}break}}return f}S(0);function
au(f,e,a){var
c=sZ(f,e,a),d=0<=c?1:0,g=d?a[12]!==ch?1:0:d;if(g){a[11]=a[12];var
b=a[12];a[12]=[0,b[1],b[2],b[3],a[4]+a[6]|0]}return c}function
eO(e,d){var
f=e?e[1]:1,g=f?eN:ch,h=f?eN:ch,c=ac(d),a=af(c),b=L(a);aU(c,0,b,0,a);var
i=[0],j=1,k=0,l=0,m=0,n=0,o=0,q=p(d);return[0,function(a){a[9]=1;return 0},b,q,o,n,m,l,k,j,i,h,g]}function
z(a){return di(a[2],a[5],a[6]-a[5]|0)}function
dl(c,a,b){return di(c[2],a,b-a|0)}function
eP(e){function
p(a){return a?a[4]:0}function
f(b,e,a){var
c=b?b[4]:0,d=a?a[4]:0,f=d<=c?c+1|0:d+1|0;return[0,b,e,a,f]}function
g(b,e,a){var
g=b?b[4]:0,h=a?a[4]:0;if((h+2|0)<g){if(b){var
c=b[3],k=b[2],i=b[1],m=p(c);if(m<=p(i))return f(i,k,f(c,e,a));if(c){var
n=c[2],o=c[1],q=f(c[3],e,a);return f(f(i,k,o),n,q)}return M(hH)}return M(hI)}if((g+2|0)<h){if(a){var
j=a[3],l=a[2],d=a[1],r=p(d);if(r<=p(j))return f(f(b,e,d),l,j);if(d){var
s=d[2],t=d[1],u=f(d[3],l,j);return f(f(b,e,t),s,u)}return M(hJ)}return M(hK)}var
v=h<=g?g+1|0:h+1|0;return[0,b,e,a,v]}function
a(c,b){if(b){var
f=b[3],h=b[2],i=b[1],j=d(e[1],c,h);if(0===j)return b;if(0<=j){var
k=a(c,f);return f===k?b:g(i,h,k)}var
l=a(c,i);return i===l?b:g(l,h,f)}return[0,0,c,0,1]}function
h(a){return[0,0,a,0,1]}function
E(b,a){if(a){var
c=a[3],d=a[2];return g(E(b,a[1]),d,c)}return h(b)}function
F(b,a){if(a){var
c=a[2],d=a[1];return g(d,c,F(b,a[3]))}return h(b)}function
b(c,d,a){if(c){if(a){var
e=a[4],h=c[4],i=a[3],j=a[2],k=a[1],l=c[3],m=c[2],n=c[1];return(e+2|0)<h?g(n,m,b(l,d,a)):(h+2|0)<e?g(b(c,d,k),j,i):f(c,d,a)}return F(d,c)}return E(d,a)}function
j(c){var
a=c;for(;;){if(a){var
b=a[1];if(b){var
a=b;continue}return a[2]}throw r}}function
G(c){var
a=c;for(;;){if(a){var
b=a[1];if(b){var
a=b;continue}return[0,a[2]]}return 0}}function
H(b){var
a=b;for(;;){if(a){if(a[3]){var
a=a[3];continue}return a[2]}throw r}}function
R(b){var
a=b;for(;;){if(a){if(a[3]){var
a=a[3];continue}return[0,a[2]]}return 0}}function
s(a){if(a){var
b=a[1];if(b){var
c=a[3],d=a[2];return g(s(b),d,c)}return a[3]}return M(hL)}function
m(c,a){if(c){if(a){var
d=s(a);return b(c,j(a),d)}return c}return a}function
i(c,a){if(a){var
f=a[3],g=a[2],h=a[1],l=d(e[1],c,g);if(0===l)return[0,h,1,f];if(0<=l){var
j=i(c,f),m=j[3],n=j[2];return[0,b(h,g,j[1]),n,m]}var
k=i(c,h),o=k[2],p=k[1];return[0,p,o,b(k[3],g,f)]}return hM}var
u=0;function
S(a){return a?0:1}function
T(g,f){var
a=f;for(;;){if(a){var
h=a[3],i=a[1],b=d(e[1],g,a[2]),c=0===b?1:0;if(c)return c;var
j=0<=b?h:i,a=j;continue}return 0}}function
v(f,b){if(b){var
a=b[3],h=b[2],c=b[1],i=d(e[1],f,h);if(0===i){if(c){if(a){var
m=s(a);return g(c,j(a),m)}return c}return a}if(0<=i){var
k=v(f,a);return a===k?b:g(c,h,k)}var
l=v(f,c);return c===l?b:g(l,h,a)}return 0}function
k(d,c){if(d){if(c){var
g=c[4],e=c[2],h=d[4],f=d[2],m=c[3],n=c[1],o=d[3],p=d[1];if(g<=h){if(1===g)return a(e,d);var
j=i(f,c),q=j[1],r=k(o,j[3]);return b(k(p,q),f,r)}if(1===h)return a(f,c);var
l=i(e,d),s=l[1],t=k(l[3],m);return b(k(s,n),e,t)}return d}return c}function
n(a,d){if(a){if(d){var
e=a[3],f=a[2],g=a[1],c=i(f,d),h=c[1];if(c[2]){var
j=n(e,c[3]);return b(n(g,h),f,j)}var
k=n(e,c[3]);return m(n(g,h),k)}return 0}return 0}function
w(f,a){if(a){var
j=a[3],g=a[2],k=a[1],l=d(e[1],f,g);if(0===l)return 0;if(0<=l){var
h=w(f,j);if(h){var
m=h[2];return[0,b(k,g,h[1]),m]}return 0}var
i=w(f,k);if(i){var
n=i[2],o=i[1];return[0,o,function(a){return b(c(n,0),g,j)}]}return 0}return[0,0,function(a){return 0}]}function
I(g,f){var
a=g,b=f;for(;;){if(a&&b){var
h=a[3],i=a[2],j=a[1];if(a===b)return 0;var
d=w(i,b);if(d){var
k=d[2],e=I(j,d[1]);if(e){var
a=h,b=c(k,0);continue}return e}return 0}return 1}}function
o(a,d){if(a){if(d){var
e=a[3],f=a[2],g=a[1],c=i(f,d),h=c[1];if(c[2]){var
j=o(e,c[3]);return m(o(g,h),j)}var
k=o(e,c[3]);return b(o(g,h),f,k)}return a}return 0}function
l(d,c){var
a=d,b=c;for(;;){if(a){var
e=[0,a[2],a[3],b],a=a[1],b=e;continue}return b}}function
J(m,k){var
n=l(k,0),b=l(m,0),a=n;for(;;){if(b){if(a){var
f=a[3],g=a[2],h=b[3],i=b[2],c=d(e[1],b[1],a[1]);if(0===c){var
j=l(g,f),b=l(i,h),a=j;continue}return c}return 1}return a?-1:0}}function
U(b,a){return 0===J(b,a)?1:0}function
t(o,n){var
a=o,b=n;for(;;){if(a){if(b){var
h=b[3],i=b[1],c=a[3],f=a[2],g=a[1],j=d(e[1],f,b[2]);if(0===j){var
k=t(g,i);if(k){var
a=c,b=h;continue}return k}if(0<=j){var
l=t([0,0,f,c,0],h);if(l){var
a=g;continue}return l}var
m=t([0,g,f,0,0],i);if(m){var
a=c;continue}return m}return 0}return 1}}function
K(b,d){var
a=d;for(;;){if(a){var
e=a[3],f=a[2];K(b,a[1]);c(b,f);var
a=e;continue}return 0}}function
L(c,f,e){var
a=f,b=e;for(;;){if(a){var
g=a[3],h=a[2],i=d(c,h,L(c,a[1],b)),a=g,b=i;continue}return b}}function
N(b,g){var
a=g;for(;;){if(a){var
h=a[3],i=a[1],d=c(b,a[2]);if(d){var
e=N(b,i);if(e){var
a=h;continue}var
f=e}else
var
f=d;return f}return 1}}function
O(b,g){var
a=g;for(;;){if(a){var
h=a[3],i=a[1],d=c(b,a[2]);if(d)var
e=d;else{var
f=O(b,i);if(!f){var
a=h;continue}var
e=f}return e}return 0}}function
x(d,a){if(a){var
g=a[3],h=a[2],i=a[1],e=x(d,i),j=c(d,h),f=x(d,g);if(j){if(i===e&&g===f)return a;return b(e,h,f)}return m(e,f)}return 0}function
y(d,a){if(a){var
e=a[2],l=a[3],f=y(d,a[1]),g=f[2],h=f[1],n=c(d,e),i=y(d,l),j=i[2],k=i[1];if(n){var
o=m(g,j);return[0,b(h,e,k),o]}var
p=b(g,e,j);return[0,m(h,k),p]}return hN}function
z(a){if(a){var
b=a[1],c=z(a[3]);return(z(b)+1|0)+c|0}return 0}function
P(d,c){var
b=d,a=c;for(;;){if(a){var
e=a[2],f=a[1],b=[0,e,P(b,a[3])],a=f;continue}return b}}function
V(a){return P(0,a)}function
W(g,f){var
a=f;for(;;){if(a){var
b=a[2],h=a[3],i=a[1],c=d(e[1],g,b);if(0===c)return b;var
j=0<=c?h:i,a=j;continue}throw r}}function
X(f,j){var
b=j;for(;;){if(b){var
g=b[2],k=b[3],l=b[1];if(c(f,g)){var
d=g,a=l;for(;;){if(a){var
e=a[2],h=a[3],i=a[1];if(c(f,e)){var
d=e,a=i;continue}var
a=h;continue}return d}}var
b=k;continue}throw r}}function
Y(f,j){var
b=j;for(;;){if(b){var
g=b[2],k=b[3],l=b[1];if(c(f,g)){var
d=g,a=l;for(;;){if(a){var
e=a[2],h=a[3],i=a[1];if(c(f,e)){var
d=e,a=i;continue}var
a=h;continue}return[0,d]}}var
b=k;continue}return 0}}function
Z(f,j){var
b=j;for(;;){if(b){var
g=b[2],k=b[3],l=b[1];if(c(f,g)){var
d=g,a=k;for(;;){if(a){var
e=a[2],h=a[3],i=a[1];if(c(f,e)){var
d=e,a=h;continue}var
a=i;continue}return d}}var
b=l;continue}throw r}}function
_(f,j){var
b=j;for(;;){if(b){var
g=b[2],k=b[3],l=b[1];if(c(f,g)){var
d=g,a=k;for(;;){if(a){var
e=a[2],h=a[3],i=a[1];if(c(f,e)){var
d=e,a=h;continue}var
a=i;continue}return[0,d]}}var
b=l;continue}return 0}}function
$(g,f){var
a=f;for(;;){if(a){var
b=a[2],h=a[3],i=a[1],c=d(e[1],g,b);if(0===c)return[0,b];var
j=0<=c?h:i,a=j;continue}return 0}}function
A(g,f,c){var
h=0;if(0!==g){var
m=H(g);if(0<=d(e[1],m,f))h=1}if(!h){var
i=0;if(0!==c){var
l=j(c);if(0<=d(e[1],f,l))i=1}if(!i)return b(g,f,c)}return k(g,a(f,c))}function
B(b,a){if(a){var
d=a[3],e=a[2],f=a[1],g=B(b,f),h=c(b,e),i=B(b,d);if(f===g&&e===h&&d===i)return a;return A(g,h,i)}return 0}function
C(e,b){if(b){var
f=b[3],g=b[2],h=b[1],d=C(e,h),i=c(e,g),a=C(e,f);if(i){var
k=i[1];if(h===d&&g===k&&f===a)return b;return A(d,k,a)}if(d){if(a){var
l=s(a);return A(d,j(a),l)}return d}return a}return 0}function
aa(c){if(c){var
k=c[2],g=c[1];if(k){var
l=k[2],i=k[1];if(l){var
n=l[2],o=l[1];if(n){var
p=n[2],s=n[1];if(p){if(p[2]){var
b=e[1],x=function(j,g){if(2===j){if(g){var
n=g[2];if(n){var
o=n[1],k=g[1],J=n[2],y=d(b,k,o),K=0===y?[0,k,0]:0<y?[0,k,[0,o,0]]:[0,o,[0,k,0]];return[0,K,J]}}}else
if(3===j&&g){var
p=g[2];if(p){var
q=p[2];if(q){var
c=q[1],a=p[1],e=g[1],N=q[2],D=d(b,e,a);if(0===D)var
E=d(b,a,c),O=0===E?[0,a,0]:0<E?[0,a,[0,c,0]]:[0,c,[0,a,0]],r=O;else
if(0<D){var
F=d(b,a,c);if(0===F)var
s=[0,e,[0,a,0]];else
if(0<F)var
s=[0,e,[0,a,[0,c,0]]];else
var
G=d(b,e,c),P=0===G?[0,e,[0,a,0]]:0<G?[0,e,[0,c,[0,a,0]]]:[0,c,[0,e,[0,a,0]]],s=P;var
r=s}else{var
H=d(b,e,c);if(0===H)var
t=[0,a,[0,e,0]];else
if(0<H)var
t=[0,a,[0,e,[0,c,0]]];else
var
I=d(b,a,c),Q=0===I?[0,a,[0,e,0]]:0<I?[0,a,[0,c,[0,e,0]]]:[0,c,[0,a,[0,e,0]]],t=Q;var
r=t}return[0,r,N]}}}var
z=j>>1,A=m(z,g),L=A[1],B=m(j-z|0,A[2]),i=L,h=B[1],f=0,M=B[2];for(;;){if(i){if(h){var
u=h[2],v=h[1],w=i[2],l=i[1],x=d(b,l,v);if(0===x){var
i=w,h=u,f=[0,l,f];continue}if(0<=x){var
h=u,f=[0,v,f];continue}var
i=w,f=[0,l,f];continue}var
C=bz(i,f)}else
var
C=bz(h,f);return[0,C,M]}},m=function(j,g){if(2===j){if(g){var
m=g[2];if(m){var
n=m[1],k=g[1],J=m[2],y=d(b,k,n),K=0===y?[0,k,0]:0<=y?[0,n,[0,k,0]]:[0,k,[0,n,0]];return[0,K,J]}}}else
if(3===j&&g){var
o=g[2];if(o){var
p=o[2];if(p){var
c=p[1],a=o[1],e=g[1],N=p[2],D=d(b,e,a);if(0===D)var
E=d(b,a,c),O=0===E?[0,a,0]:0<=E?[0,c,[0,a,0]]:[0,a,[0,c,0]],q=O;else
if(0<=D){var
F=d(b,e,c);if(0===F)var
r=[0,a,[0,e,0]];else
if(0<=F)var
G=d(b,a,c),P=0===G?[0,a,[0,e,0]]:0<=G?[0,c,[0,a,[0,e,0]]]:[0,a,[0,c,[0,e,0]]],r=P;else
var
r=[0,a,[0,e,[0,c,0]]];var
q=r}else{var
H=d(b,a,c);if(0===H)var
s=[0,e,[0,a,0]];else
if(0<=H)var
I=d(b,e,c),Q=0===I?[0,e,[0,a,0]]:0<=I?[0,c,[0,e,[0,a,0]]]:[0,e,[0,c,[0,a,0]]],s=Q;else
var
s=[0,e,[0,a,[0,c,0]]];var
q=s}return[0,q,N]}}}var
z=j>>1,A=x(z,g),L=A[1],B=x(j-z|0,A[2]),i=L,h=B[1],f=0,M=B[2];for(;;){if(i){if(h){var
t=h[2],u=h[1],v=i[2],l=i[1],w=d(b,l,u);if(0===w){var
i=v,h=t,f=[0,l,f];continue}if(0<w){var
i=v,f=[0,l,f];continue}var
h=t,f=[0,u,f];continue}var
C=bz(i,f)}else
var
C=bz(h,f);return[0,C,M]}},r=aX(c),t=2<=r?m(r,c)[1]:c,j=function(b,a){if(!(3<b>>>0))switch(b){case
0:return[0,0,a];case
1:if(a)return[0,[0,0,a[1],0,1],a[2]];break;case
2:if(a){var
d=a[2];if(d)return[0,[0,[0,0,a[1],0,1],d[1],0,2],d[2]]}break;default:if(a){var
e=a[2];if(e){var
g=e[2];if(g)return[0,[0,[0,0,a[1],0,1],e[1],[0,0,g[1],0,1],2],g[2]]}}}var
h=b/2|0,i=j(h,a),c=i[2],l=i[1];if(c){var
m=c[1],k=j((b-h|0)-1|0,c[2]),n=k[2];return[0,f(l,m,k[1]),n]}throw[0,q,hO]};return j(aX(t),t)[1]}var
v=p[1];return a(v,a(s,a(o,a(i,h(g)))))}return a(s,a(o,a(i,h(g))))}return a(o,a(i,h(g)))}return a(i,h(g))}return h(g)}return u}function
Q(c,b){return eF(function(c,b){return a(b,c)},b,c)}function
ab(a){return Q(a,u)}function
D(a,d){if(a){var
b=a[1],c=l(a[2],a[3]);return[0,b,function(a){return D(c,a)}]}return 0}function
ac(a){var
b=l(a,0);return function(a){return D(b,a)}}return[0,u,S,T,a,h,v,k,n,I,o,J,U,t,K,B,L,N,O,x,C,y,z,V,j,G,H,R,j,G,i,W,$,X,Y,Z,_,aa,function(j,i){var
a=i,b=0;for(;;){if(a){var
c=a[3],f=a[2],k=a[1],g=d(e[1],f,j);if(0!==g){if(0<=g){var
a=k,b=[0,f,c,b];continue}var
a=c;continue}var
h=[0,f,c,b]}else
var
h=b;return function(a){return D(h,a)}}},ac,Q,ab]}function
dm(g){function
h(a){return a?a[5]:0}function
e(b,f,e,a){var
c=h(b),d=h(a),g=d<=c?c+1|0:d+1|0;return[0,b,f,e,a,g]}function
p(b,a){return[0,0,b,a,0,1]}function
a(b,g,f,a){var
i=b?b[5]:0,j=a?a[5]:0;if((j+2|0)<i){if(b){var
c=b[4],m=b[3],n=b[2],k=b[1],q=h(c);if(q<=h(k))return e(k,n,m,e(c,g,f,a));if(c){var
r=c[3],s=c[2],t=c[1],u=e(c[4],g,f,a);return e(e(k,n,m,t),s,r,u)}return M(hP)}return M(hQ)}if((i+2|0)<j){if(a){var
l=a[4],o=a[3],p=a[2],d=a[1],v=h(d);if(v<=h(l))return e(e(b,g,f,d),p,o,l);if(d){var
w=d[3],x=d[2],y=d[1],z=e(d[4],p,o,l);return e(e(b,g,f,y),x,w,z)}return M(hR)}return M(hS)}var
A=j<=i?i+1|0:j+1|0;return[0,b,g,f,a,A]}var
C=0;function
O(a){return a?0:1}function
m(e,c,b){if(b){var
f=b[4],i=b[3],j=b[2],h=b[1],o=b[5],k=d(g[1],e,j);if(0===k)return i===c?b:[0,h,e,c,f,o];if(0<=k){var
l=m(e,c,f);return f===l?b:a(h,j,i,l)}var
n=m(e,c,h);return h===n?b:a(n,j,i,f)}return[0,0,e,c,0,1]}function
P(e,c){var
a=c;for(;;){if(a){var
f=a[4],h=a[3],i=a[1],b=d(g[1],e,a[2]);if(0===b)return h;var
j=0<=b?f:i,a=j;continue}throw r}}function
Q(g,l){var
b=l;for(;;){if(b){var
h=b[2],m=b[4],n=b[3],o=b[1];if(c(g,h)){var
e=h,d=n,a=o;for(;;){if(a){var
f=a[2],i=a[4],j=a[3],k=a[1];if(c(g,f)){var
e=f,d=j,a=k;continue}var
a=i;continue}return[0,e,d]}}var
b=m;continue}throw r}}function
R(g,l){var
b=l;for(;;){if(b){var
h=b[2],m=b[4],n=b[3],o=b[1];if(c(g,h)){var
e=h,d=n,a=o;for(;;){if(a){var
f=a[2],i=a[4],j=a[3],k=a[1];if(c(g,f)){var
e=f,d=j,a=k;continue}var
a=i;continue}return[0,[0,e,d]]}}var
b=m;continue}return 0}}function
S(g,l){var
b=l;for(;;){if(b){var
h=b[2],m=b[4],n=b[3],o=b[1];if(c(g,h)){var
e=h,d=n,a=m;for(;;){if(a){var
f=a[2],i=a[4],j=a[3],k=a[1];if(c(g,f)){var
e=f,d=j,a=i;continue}var
a=k;continue}return[0,e,d]}}var
b=o;continue}throw r}}function
T(g,l){var
b=l;for(;;){if(b){var
h=b[2],m=b[4],n=b[3],o=b[1];if(c(g,h)){var
e=h,d=n,a=m;for(;;){if(a){var
f=a[2],i=a[4],j=a[3],k=a[1];if(c(g,f)){var
e=f,d=j,a=i;continue}var
a=k;continue}return[0,[0,e,d]]}}var
b=o;continue}return 0}}function
U(e,c){var
a=c;for(;;){if(a){var
f=a[4],h=a[3],i=a[1],b=d(g[1],e,a[2]);if(0===b)return[0,h];var
j=0<=b?f:i,a=j;continue}return 0}}function
V(f,e){var
a=e;for(;;){if(a){var
h=a[4],i=a[1],b=d(g[1],f,a[2]),c=0===b?1:0;if(c)return c;var
j=0<=b?h:i,a=j;continue}return 0}}function
n(c){var
a=c;for(;;){if(a){var
b=a[1];if(b){var
a=b;continue}return[0,a[2],a[3]]}throw r}}function
D(c){var
a=c;for(;;){if(a){var
b=a[1];if(b){var
a=b;continue}return[0,[0,a[2],a[3]]]}return 0}}function
W(b){var
a=b;for(;;){if(a){if(a[4]){var
a=a[4];continue}return[0,a[2],a[3]]}throw r}}function
X(b){var
a=b;for(;;){if(a){if(a[4]){var
a=a[4];continue}return[0,[0,a[2],a[3]]]}return 0}}function
s(b){if(b){var
c=b[1];if(c){var
d=b[4],e=b[3],f=b[2];return a(s(c),f,e,d)}return b[4]}return M(hT)}function
E(c,b){if(c){if(b){var
d=n(b),e=d[2],f=d[1];return a(c,f,e,s(b))}return c}return b}function
t(f,b){if(b){var
c=b[4],i=b[3],h=b[2],e=b[1],j=d(g[1],f,h);if(0===j)return E(e,c);if(0<=j){var
k=t(f,c);return c===k?b:a(e,h,i,k)}var
l=t(f,e);return e===l?b:a(l,h,i,c)}return 0}function
u(e,i,b){if(b){var
f=b[4],j=b[3],k=b[2],h=b[1],r=b[5],l=d(g[1],e,k);if(0===l){var
m=c(i,[0,j]);if(m){var
n=m[1];return j===n?b:[0,h,e,n,f,r]}return E(h,f)}if(0<=l){var
o=u(e,i,f);return f===o?b:a(h,k,j,o)}var
p=u(e,i,h);return h===p?b:a(p,k,j,f)}var
q=c(i,0);return q?[0,0,e,q[1],0,1]:0}function
F(b,c){var
a=c;for(;;){if(a){var
e=a[4],f=a[3],g=a[2];F(b,a[1]);d(b,g,f);var
a=e;continue}return 0}}function
v(b,a){if(a){var
d=a[5],e=a[4],f=a[3],g=a[2],h=v(b,a[1]),i=c(b,f);return[0,h,g,i,v(b,e),d]}return 0}function
w(b,a){if(a){var
c=a[2],e=a[5],f=a[4],g=a[3],h=w(b,a[1]),i=d(b,c,g);return[0,h,c,i,w(b,f),e]}return 0}function
G(c,e,d){var
a=e,b=d;for(;;){if(a){var
f=a[4],g=a[3],h=a[2],i=al(c,h,g,G(c,a[1],b)),a=f,b=i;continue}return b}}function
H(b,g){var
a=g;for(;;){if(a){var
h=a[4],i=a[1],c=d(b,a[2],a[3]);if(c){var
e=H(b,i);if(e){var
a=h;continue}var
f=e}else
var
f=c;return f}return 1}}function
I(b,g){var
a=g;for(;;){if(a){var
h=a[4],i=a[1],c=d(b,a[2],a[3]);if(c)var
e=c;else{var
f=I(b,i);if(!f){var
a=h;continue}var
e=f}return e}return 0}}function
J(d,c,b){if(b){var
e=b[4],f=b[3],g=b[2];return a(J(d,c,b[1]),g,f,e)}return p(d,c)}function
K(d,c,b){if(b){var
e=b[3],f=b[2],g=b[1];return a(g,f,e,K(d,c,b[4]))}return p(d,c)}function
b(d,g,f,c){if(d){if(c){var
h=c[5],i=d[5],j=c[4],k=c[3],l=c[2],m=c[1],n=d[4],o=d[3],p=d[2],q=d[1];return(h+2|0)<i?a(q,p,o,b(n,g,f,c)):(i+2|0)<h?a(b(d,g,f,m),l,k,j):e(d,g,f,c)}return K(g,f,d)}return J(g,f,c)}function
j(c,a){if(c){if(a){var
d=n(a),e=d[2],f=d[1];return b(c,f,e,s(a))}return c}return a}function
o(d,e,c,a){return c?b(d,e,c[1],a):j(d,a)}function
i(c,a){if(a){var
e=a[4],f=a[3],h=a[2],j=a[1],m=d(g[1],c,h);if(0===m)return[0,j,[0,f],e];if(0<=m){var
k=i(c,e),n=k[3],o=k[2];return[0,b(j,h,f,k[1]),o,n]}var
l=i(c,j),p=l[2],q=l[1];return[0,q,p,b(l[3],h,f,e)]}return hU}function
k(c,b,a){if(b){var
d=b[2],j=b[5],l=b[4],m=b[3],n=b[1];if(h(a)<=j){var
e=i(d,a),p=e[2],r=e[1],s=k(c,l,e[3]),t=al(c,d,[0,m],p);return o(k(c,n,r),d,t,s)}}else
if(!a)return 0;if(a){var
f=a[2],u=a[4],v=a[3],w=a[1],g=i(f,b),x=g[2],y=g[1],z=k(c,g[3],u),A=al(c,f,x,[0,v]);return o(k(c,y,w),f,A,z)}throw[0,q,hV]}function
l(d,c,a){if(c){if(a){var
j=a[3],e=a[2],k=c[3],f=c[2],u=a[4],v=a[1],w=c[4],x=c[1];if(a[5]<=c[5]){var
g=i(f,a),m=g[2],y=g[3],n=l(d,x,g[1]),p=l(d,w,y);return m?o(n,f,al(d,f,k,m[1]),p):b(n,f,k,p)}var
h=i(e,c),q=h[2],z=h[3],r=l(d,h[1],v),s=l(d,z,u);return q?o(r,e,al(d,e,q[1],j),s):b(r,e,j,s)}var
t=c}else
var
t=a;return t}function
x(c,a){if(a){var
g=a[4],h=a[3],i=a[2],k=a[1],e=x(c,k),l=d(c,i,h),f=x(c,g);if(l){if(k===e&&g===f)return a;return b(e,i,h,f)}return j(e,f)}return 0}function
y(c,a){if(a){var
e=a[2],i=a[4],k=a[3],f=y(c,a[1]),g=d(c,e,k),h=y(c,i);return g?b(f,e,g[1],h):j(f,h)}return 0}function
z(c,a){if(a){var
e=a[3],f=a[2],n=a[4],g=z(c,a[1]),h=g[2],i=g[1],o=d(c,f,e),k=z(c,n),l=k[2],m=k[1];if(o){var
p=j(h,l);return[0,b(i,f,e,m),p]}var
q=b(h,f,e,l);return[0,j(i,m),q]}return hW}function
f(d,c){var
a=d,b=c;for(;;){if(a){var
e=[0,a[2],a[3],a[4],b],a=a[1],b=e;continue}return b}}function
Y(j,i,h){var
r=f(h,0),b=f(i,0),a=r;for(;;){if(b){if(a){var
k=a[4],l=a[3],m=a[2],n=b[4],o=b[3],p=b[2],c=d(g[1],b[1],a[1]);if(0===c){var
e=d(j,p,m);if(0===e){var
q=f(l,k),b=f(o,n),a=q;continue}return e}return c}return 1}return a?-1:0}}function
Z(k,j,i){var
s=f(i,0),b=f(j,0),a=s;for(;;){if(b){if(a){var
l=a[4],m=a[3],n=a[2],o=b[4],p=b[3],q=b[2],c=0===d(g[1],b[1],a[1])?1:0;if(c){var
e=d(k,q,n);if(e){var
r=f(m,l),b=f(p,o),a=r;continue}var
h=e}else
var
h=c;return h}return 0}return a?0:1}}function
A(a){if(a){var
b=a[1],c=A(a[4]);return(A(b)+1|0)+c|0}return 0}function
L(d,c){var
b=d,a=c;for(;;){if(a){var
e=a[3],f=a[2],g=a[1],b=[0,[0,f,e],L(b,a[4])],a=g;continue}return b}}function
_(a){return L(0,a)}function
N(b,a){return eF(function(b,a){return m(a[1],a[2],b)},a,b)}function
$(a){return N(a,C)}function
B(a,e){if(a){var
b=a[2],c=a[1],d=f(a[3],a[4]);return[0,[0,c,b],function(a){return B(d,a)}]}return 0}function
aa(a){var
b=f(a,0);return function(a){return B(b,a)}}return[0,C,O,V,m,u,p,t,k,l,Y,Z,F,G,H,I,x,y,z,A,_,n,D,W,X,n,D,i,P,U,Q,R,S,T,v,w,aa,function(k,j){var
a=j,b=0;for(;;){if(a){var
c=a[4],f=a[3],e=a[2],l=a[1],h=d(g[1],e,k);if(0!==h){if(0<=h){var
a=l,b=[0,e,f,c,b];continue}var
a=c;continue}var
i=[0,e,f,c,b]}else
var
i=b;return function(a){return B(i,a)}}},N,$]}var
dn=[B,hX,S(0)];function
eQ(a){return[0,0,0]}function
dp(b,a){a[1]=[0,b,a[1]];a[2]=a[2]+1|0;return 0}function
bA(a){var
b=a[1];if(b){var
c=b[1];a[1]=b[2];a[2]=a[2]-1|0;return c}throw dn}function
hY(b,a){return a$(b,a[1])}var
h0=[B,hZ,S(0)];function
h1(a){throw h0}function
bB(a){var
d=a[1];a[1]=h1;try{var
b=c(d,0);s$(a,b);return b}catch(b){b=D(b);a[1]=function(a){throw b};throw b}}S(0);var
eR=[0,0];function
eS(a){eR[1]=[0,a,eR[1]];return 0}try{var
sr=hn(sq),eU=sr}catch(a){a=D(a);if(a!==r)throw a;try{var
sp=hn(so),eT=sp}catch(a){a=D(a);if(a!==r)throw a;var
eT=h6}var
eU=eT}var
h7=eL(eU,82),ci=[P,function(C){var
o=tk(0),c=[0,aW(55,0),0],l=0===o.length-1?[0,0]:o,h=l.length-1,b=0;for(;;){w(c[1],b)[1+b]=b;var
B=b+1|0;if(54!==b){var
b=B;continue}var
j=[0,h5],u=0,v=55,x=sH(55,h)?v:h,m=54+x|0;if(!(m<0)){var
d=u;for(;;){var
e=d%55|0,n=hd(d,h),y=w(l,n)[1+n],k=i(j[1],a(g+y));j[1]=s3(k,0,p(k));var
f=j[1],q=aH(f,3)<<24,r=aH(f,2)<<16,s=aH(f,1)<<8,t=((aH(f,0)+s|0)+r|0)+q|0,z=(w(c[1],e)[1+e]^t)&dZ;w(c[1],e)[1+e]=z;var
A=d+1|0;if(m!==d){var
d=A;continue}break}}c[2]=0;return c}}];function
dq(a,b){return 3<=a.length-1?sI(10,gB,a[3],b)&(a[2].length-1-1|0):hd(sO(10,gB,b),a[2].length-1)}function
eV(f,b){var
g=dq(f,b),c=w(f[2],g)[1+g];if(c){var
d=c[3],j=c[2];if(0===bs(b,c[1]))return j;if(d){var
e=d[3],k=d[2];if(0===bs(b,d[1]))return k;if(e){var
l=e[2],m=e[3];if(0===bs(b,e[1]))return l;var
a=m;for(;;){if(a){var
h=a[2],i=a[3];if(0===bs(b,a[1]))return h;var
a=i;continue}throw r}}throw r}throw r}throw r}function
h8(b,a){var
c=bw(a)===B?a:a[1];return te(b,c)}var
h9=2;function
h_(c){var
a=[0,0],d=p(c)-1|0,e=0;if(!(d<0)){var
b=e;for(;;){var
g=aH(c,b);a[1]=(223*a[1]|0)+g|0;var
h=b+1|0;if(d!==b){var
b=h;continue}break}}a[1]=a[1]&2147483647;var
f=dZ<a[1]?a[1]+2147483648|0:a[1];return f}var
dr=dm([0,da]),cj=dm([0,da]),ck=dm([0,g_]),eW=hg(0,0),h$=[0,0];function
eX(a){return 2<a?eX((a+1|0)/2|0)*2|0:a}function
eY(d){h$[1]++;var
b=d.length-1,c=aW((b*2|0)+2|0,eW);w(c,0)[1]=b;var
g=((eX(b)*32|0)/8|0)-1|0;w(c,1)[2]=g;var
e=b-1|0,h=0;if(!(e<0)){var
a=h;for(;;){var
f=(a*2|0)+3|0,i=w(d,a)[1+a];w(c,f)[1+f]=i;var
j=a+1|0;if(e!==a){var
a=j;continue}break}}return[0,h9,c,cj[1],ck[1],0,0,dr[1],0]}function
ds(b,d){var
a=b[2].length-1,e=a<d?1:0;if(e){var
c=aW(d,eW),f=b[2],h=0;if(0<=a&&!((f.length-1-a|0)<0)&&!((c.length-1-a|0)<0)){sw(f,0,c,0,a);h=1}if(!h)M(hG);b[2]=c;var
g=0}else
var
g=e;return g}var
eZ=[0,0],ia=[0,0];function
ib(a){var
b=a[2].length-1;ds(a,b+1|0);return b}function
ic(a,e){try{var
b=d(cj[28],e,a[3]);return b}catch(b){b=D(b);if(b===r){var
c=ib(a);a[3]=al(cj[4],e,c,a[3]);a[4]=al(ck[4],c,1,a[4]);return c}throw b}}function
id(a){var
b=a[1];a[1]=b+1|0;return b}function
ie(a,c){try{var
b=d(dr[28],c,a[7]);return b}catch(b){b=D(b);if(b===r){var
e=id(a);if(f(c,ig))a[7]=al(dr[4],c,e,a[7]);return e}throw b}}function
ih(b,a){var
c=p(b);return c<a?ii:ah(b,a,c-a|0)}var
ij=34;function
im(a){var
d=0;for(;;){var
b=au(av,d,a);if(7<b>>>0){c(a[1],a);var
d=b;continue}switch(b){case
0:return 0;case
1:return 3;case
2:return 6;case
3:var
e=z(a);return[0,ah(e,1,p(e)-1|0)];case
4:var
f=z(a);return[1,ah(f,2,p(f)-2|0)];case
5:return ir;case
6:return 13;default:return[2,z(a)]}}}function
e0(a){var
d=33;for(;;){var
b=au(av,d,a);if(9<b>>>0){c(a[1],a);var
d=b;continue}switch(b){case
0:return 9;case
1:return 10;case
2:return[3,p(z(a))];case
3:return[4,z(a)];case
4:return 11;case
5:return 12;case
6:return 12;case
7:return[5,z(a)];case
8:return 13;default:return 12}}}function
iq(a){var
b=55;for(;;){var
d=au(av,b,a);if(0===d)return dl(a,a[5],a[6]-1|0);c(a[1],a);var
b=d;continue}}function
ip(a){var
b=53;for(;;){var
d=au(av,b,a);if(0===d)return dl(a,a[5],a[6]-1|0);c(a[1],a);var
b=d;continue}}function
io(a,e){var
d=e;for(;;){var
b=au(av,d,a);if(7<b>>>0){c(a[1],a);var
d=b;continue}switch(b){case
0:return 9;case
1:return 10;case
2:return[3,p(z(a))];case
3:try{var
f=[5,ip(a)];return f}catch(a){return 12}case
4:try{var
g=[5,iq(a)];return g}catch(a){return 12}case
5:return[5,z(a)];case
6:return 13;default:return 12}}}var
aj=[B,it,S(0)],e1=[B,iu,S(0)];function
aK(b,a){return[0,d_,[0,b,a]]}var
iX=[0,iW,[0,iV,[0,iU,[0,iT,[0,iS,[0,iR,[0,iQ,[0,iP,[0,iO,[0,iN,[0,iM,[0,iL,[0,iK,[0,iJ,[0,iI,[0,iH,[0,iG,[0,iF,[0,iE,[0,iD,[0,iC,[0,iB,[0,iA,[0,iz,[0,iy,[0,[0,ix,[0,j,aK(h,iw)]],iv]]]]]]]]]]]]]]]]]]]]]]]]]],i4=[0,i3,[0,i2,[0,i1,[0,i0,[0,[0,iZ,[0,j,aK(h,iY)]],iX]]]]],i9=[0,i8,[0,i7,[0,[0,i6,[0,l,aK(h,i5)]],i4]]],jb=[0,[0,ja,[0,l,[0,E,[0,i$,aK(h,i_)]]]],i9],jD=[0,jC,[0,jB,[0,jA,[0,jz,[0,jy,[0,jx,[0,jw,[0,jv,[0,ju,[0,jt,[0,js,[0,jr,[0,jq,[0,jp,[0,jo,[0,jn,[0,jm,[0,[0,jl,[0,l,[0,E,[0,e2,jk]]]],[0,[0,jj,[0,l,[0,E,[0,e2,ji]]]],[0,jh,[0,jg,[0,jf,[0,je,[0,[0,jd,[0,l,aK(h,jc)]],jb]]]]]]]]]]]]]]]]]]]]]]]],jH=[0,jG,[0,[0,jF,[0,b,aK(h,jE)]],jD]],jL=[0,jK,[0,[0,jJ,[0,b,aK(h,jI)]],jH]],dt=[0,ka,[0,j$,[0,j_,[0,j9,[0,j8,[0,j7,[0,j6,[0,j5,[0,j4,[0,j3,[0,j2,[0,j1,[0,j0,[0,jZ,[0,jY,[0,jX,[0,jW,[0,jV,[0,jU,[0,jT,[0,jS,[0,jR,[0,jQ,[0,jP,[0,jO,[0,[0,jN,[0,b,aK(h,jM)]],jL]]]]]]]]]]]]]]]]]]]]]]]]]];function
kb(a){function
c(a){if(typeof
a==="number"){if(b===a)return h}else
if(E===a[1]){var
d=a[2],e=d[1];return[0,E,[0,e,c(d[2])]]}return a}return ag(function(d){var
e=d[2],f=e[2],a=e[1],g=d[1];return b===a?[0,g,[0,a,c(f)]]:[0,g,[0,a,f]]},a)}function
kc(a,f){return ag(function(b){var
c=b[2],d=c[2],e=c[1],a=b[1];if(l===e&&eG(a,f))return[0,a,[0,ay,d]];return[0,a,[0,e,d]]},a)}kc(kb(dt),kd);function
ke(b){var
e=kf;a:for(;;){var
f=17;for(;;){var
d=au(av,f,b);if(3<d>>>0){c(b[1],b);var
f=d;continue}switch(d){case
0:var
a=1;break;case
1:var
a=2;break;case
2:var
a=13;break;default:var
a=2}if(2===a){var
e=i(e,z(b));continue a}if(13<=a)throw aj;return e}}}function
e3(a){var
e=23;for(;;){var
d=au(av,e,a);if(2<d>>>0){c(a[1],a);var
e=d;continue}switch(d){case
0:var
b=4;break;case
1:var
b=13;break;default:var
b=5}if(5===b){var
f=z(a);return i(f,e3(a))}if(13<=b)throw aj;return kg}}function
e4(b){var
e=27;for(;;){var
d=au(av,e,b);if(4<d>>>0){c(b[1],b);var
e=d;continue}switch(d){case
0:var
a=7;break;case
1:var
a=7;break;case
2:var
a=13;break;case
3:var
a=8;break;default:var
a=8}if(8===a){var
f=z(b);return i(f,e4(b))}if(13<=a)throw aj;return kh}}function
ki(k){var
c=16,l=aX(k);for(;;){if(!(l<=c)&&!(dg<(c*2|0))){var
c=c*2|0;continue}if(h7){var
i=bw(ci),b=aO===i?ci[1]:P===i?bB(ci):ci;b[2]=(b[2]+1|0)%55|0;var
d=b[2],e=w(b[1],d)[1+d],f=(b[2]+24|0)%55|0,g=(w(b[1],f)[1+f]+(e^(e>>>25|0)&31)|0)&dZ,h=b[2];w(b[1],h)[1+h]=g;var
j=g}else
var
j=0;var
a=[0,0,aW(c,0),j,c];a$(function(x){var
y=x[1],I=x[2],g=dq(a,y),H=[0,y,I,w(a[2],g)[1+g]];w(a[2],g)[1+g]=H;a[1]=a[1]+1|0;var
v=a[2].length-1<<1<a[1]?1:0;if(v){var
k=a[2],l=k.length-1,f=l*2|0,m=f<dg?1:0;if(m){var
n=aW(f,0),h=aW(f,0),z=a.length-1<4?1:0,A=z||(a[4]<0?1:0),i=1-A;a[2]=n;var
q=l-1|0,D=0;if(!(q<0)){var
e=D;a:for(;;){var
b=w(k,e)[1+e];for(;;){if(b){var
o=b[1],B=b[2],C=b[3],j=i?b:[0,o,B,0],c=dq(a,o),p=w(h,c)[1+c];if(p)p[3]=j;else
w(n,c)[1+c]=j;w(h,c)[1+c]=j;var
b=C;continue}var
G=e+1|0;if(q!==e){var
e=G;continue a}break}break}}if(i){var
r=f-1|0,E=0;if(!(r<0)){var
d=E;for(;;){var
u=w(h,d)[1+d];if(u)u[3]=0;var
F=d+1|0;if(r!==d){var
d=F;continue}break}}var
s=0}else
var
s=i;var
t=s}else
var
t=m;return t}return v},k);return a}}var
du=eP([0,da]);function
kj(N,M,L,K,J,j){var
X=N?N[1]:dt,Y=M?M[1]:0,Z=L?L[1]:0,_=K?K[1]:0,$=J?J[1]:0,g=[0,kk],k=[0,0],a=[0,0],o=[0,du[1]],t=eQ(0),O=ki(X),m=$?function(a){return a}:hF;function
v(a){if(e(a,kl))return km;function
b(a){var
b=a[2];if(typeof
b!=="number"&&E===b[1])return[0,a[1],b[2][2]];return a}try{var
c=b(eV(O,a));return c}catch(a){a=D(a);if(a===r)return kn;throw a}}function
ac(k,j,f){var
c=v(f)[1];function
e(o){var
a=o;for(;;){if(typeof
a==="number"){if(dQ<=a){if(bo<=a){if(h<=a){var
g=b===c?1:0;if(g)var
i=g;else
var
p=l===c?1:0,i=p||(ay===c?1:0);return i}return 0}return s<=a?0:1}if(b<=a)return b===c?1:0;var
r=l===c?1:0,t=r||(ay===c?1:0);return t}var
d=a[1];if(d_<=d){if(E<=d)throw[0,q,kp];var
j=a[2],u=j[2],k=e(j[1]);if(k)return k;var
a=u;continue}if(-260921543<=d){var
m=a[2],v=m[2],n=e(m[1]),w=n?1-e(v):n;return w}return eG(f,a[2])}}var
a=a0===c?1:0;if(a)var
g=a;else{var
i=1-d(du[3],f,j);if(i)return e(v(k)[2]);var
g=i}return g}function
A(d){var
c=eQ(0),e=g[1],f=k[1],h=a[1],i=o[1];try{for(;;){if(ac(g[1],o[1],d)){var
j=0;return j}if(ay===v(g[1])[1])throw dn;var
b=bA(t);dp(b,c);var
l=b[4],m=b[3],n=b[2],p=b[1],q=C(a[1]),r=[0,[0,g[1],k[1],q]];g[1]=p;k[1]=n;o[1]=l;a[1]=[0,r,m];continue}}catch(b){b=D(b);if(b===dn)for(;;){if(0<c[2]){dp(bA(c),t);continue}g[1]=e;k[1]=f;a[1]=h;o[1]=i;return 0}throw b}}function
B(a){function
b(b){for(;;){var
a=b?io(j,44):e0(j);if(typeof
a!=="number"&&3===a[0])continue;return a}}function
e(j){var
c=j;for(;;){if(typeof
c==="number")switch(c){case
9:return kq;case
10:return kr;case
13:throw aj}else
if(4===c[0]){var
a=c[1],f=b(0);if(typeof
f==="number")switch(f){case
9:var
o=m(a);return[0,[0,[0,m(a),o],0],0];case
10:var
p=m(a);return[0,[0,[0,m(a),p],0],1];case
11:var
d=b(1);if(typeof
d==="number")switch(d){case
9:return ks;case
10:return kt;case
13:throw aj}else
switch(d[0]){case
4:var
q=d[1],h=e(b(0)),r=h[2],s=h[1];return[0,[0,[0,m(a),q],s],r];case
5:var
t=d[1],i=e(b(0)),u=i[2],v=i[1];return[0,[0,[0,m(a),t],v],u]}var
c=b(0);continue;case
13:throw aj}var
g=e(f),k=g[2],l=g[1],n=m(a);return[0,[0,[0,m(a),n],l],k]}var
c=b(0);continue}}return e(b(0))}function
F(d){a:for(;;){var
f=11;for(;;){var
b=au(av,f,j);if(3<b>>>0){c(j[1],j);var
f=b;continue}switch(b){case
0:var
g=z(j),a=[1,ah(g,2,p(g)-2|0)];break;case
1:var
a=is;break;case
2:var
a=13;break;default:var
a=[2,z(j)]}if(typeof
a==="number"){if(13===a)throw aj}else
switch(a[0]){case
1:var
h=a[1];return e(m(h),d)?ku:i(kv,i(h,F(d)));case
2:var
k=a[1];return i(k,F(d))}continue a}}}function
P(b){for(;;){var
a=e0(j);if(typeof
a==="number")if(11<=a){if(13<=a)throw aj}else
if(9<=a)return 0;continue}}try{a:for(;;){var
u=im(j);if(typeof
u==="number")switch(u){case
0:var
ad=ke(j);if(_)a[1]=[0,[0,[0,kx,[0,[0,kw,ad],0],0]],a[1]];continue;case
3:var
ae=e3(j);if(Y)a[1]=[0,[0,[0,kz,[0,[0,ky,ae],0],0]],a[1]];continue;case
6:var
af=e4(j);if(Z)a[1]=[0,[0,[0,kB,[0,[0,kA,af],0],0]],a[1]];continue;case
13:throw aj}else
switch(u[0]){case
0:var
n=m(u[1]),Q=v(n)[2];if(s===Q){var
ag=B(0)[1];A(n);a[1]=[0,[0,[0,n,ag,0]],a[1]];continue}if(bo===Q){var
R=B(0),ai=R[2],ak=R[1];A(n);if(ai)var
S=kC;else{var
al=F(n);P(0);var
S=al}a[1]=[0,[0,[0,n,ak,[0,[1,S],0]]],a[1]];continue}var
T=B(0),U=T[1],am=T[2];A(n);if(am)a[1]=[0,[0,[0,n,U,0]],a[1]];else{if(e(n,ko))var
G=0;else{var
aa=function(b){var
a=b[2];if(typeof
a!=="number"&&E===a[1])return a[2][1];return 0};try{var
ab=aa(eV(O,n)),G=ab}catch(a){a=D(a);if(a!==r)throw a;var
G=0,aG=a}}dp([0,g[1],k[1],a[1],o[1]],t);g[1]=n;k[1]=U;a[1]=0;a$(function(a){o[1]=d(du[4],a,o[1]);return 0},G)}continue;case
1:var
H=m(u[1]);P(0);var
V=e(H,g[1]);if(V)var
I=V;else
try{hY(function(c){return function(b){var
a=b[1];if(e(c,a))throw e1;if(ay===v(a)[1])throw r;return 0}}(H),t);var
aA=0,I=aA}catch(a){a=D(a);if(a===e1)var
W=1;else{if(a!==r)throw a;var
W=0}var
I=W,aH=a}if(I)for(;;){if(f(g[1],H)){var
w=bA(t),an=w[4],ao=w[3],ap=w[2],aq=w[1],ar=C(a[1]);a[1]=[0,[0,[0,g[1],k[1],ar]],ao];g[1]=aq;k[1]=ap;o[1]=an;continue}var
x=bA(t),as=x[4],at=x[3],aw=x[2],ax=x[1],az=C(a[1]);a[1]=[0,[0,[0,g[1],k[1],az]],at];g[1]=ax;k[1]=aw;o[1]=as;continue a}continue;case
2:a[1]=[0,[1,u[1]],a[1]];continue}continue}}catch(b){b=D(b);if(b===aj)for(;;){if(0<t[2]){var
y=bA(t),aB=y[4],aC=y[3],aD=y[2],aE=y[1],aF=C(a[1]);a[1]=[0,[0,[0,g[1],k[1],aF]],aC];g[1]=aE;k[1]=aD;o[1]=aB;continue}return C(a[1])}throw b}}function
kD(l,k,a,b){function
i(g){if(0===g[0]){var
h=g[1],d=h[2],b=h[1],m=h[3];if(f(b,kF)){if(f(b,kG)){if(f(b,kH)){try{var
o=s===bb(b,l)[2]?1:0,j=o}catch(a){a=D(a);if(a!==r)throw a;var
j=0}c(a,kI);c(a,b);a$(function(b){var
f=b[2],g=b[1];c(a,kJ);c(a,g);c(a,kK);function
d(b,a){try{var
c=hB(a,ij),f=ah(a,0,c),g=ih(a,c+1|0),h=e(f,il)?d(b,g):d([0,f,b],g);return h}catch(c){c=D(c);if(c===r)return e(a,ik)?b:[0,a,b];throw c}}c(a,ai(kE,C(d(0,f))));return c(a,kL)},d);if(j){var
n=k?kM:kN;return c(a,n)}c(a,kO);a$(i,m);c(a,kP);c(a,b);return c(a,kQ)}c(a,kR);c(a,bb(kS,d));return c(a,kT)}c(a,kU);c(a,bb(kV,d));return c(a,kW)}c(a,kX);c(a,bb(kY,d));return c(a,kZ)}return c(a,g[1])}try{var
d=a$(i,b);return d}catch(a){a=D(a);if(a===r)return eD(k0);throw a}}function
k1(b){return a(g+b)}function
K(b,a){return a?a[1]:b}function
cl(a,b){if(b)return b;var
c=bw(a);return aO===c?a[1]:P===c?bB(a):a}function
dv(b,a){return a?[0,c(b,a[1])]:0}function
cm(b,a){return a?c(b,a[1])?a:0:0}function
e5(a,b){if(b)return b[1];var
c=bw(a);return aO===c?a[1]:P===c?bB(a):a}function
aL(a,b){return a?c(b,a[1]):0}function
T(b,a){return dv(a,b)}function
e6(a){return a?[0,a[1],0]:0}function
e7(b,a){if(a){var
d=a[2],e=a[1],f=c(b,e),g=e7(b,d),h=e===f?1:0,i=h?d===g?1:0:h;return i?a:[0,f,g]}return a}function
U(d,a){if(a){var
e=a[2],f=a[1],g=c(d,f),b=U(d,e);return g?e===b?a:[0,f,b]:b}return a}function
ak(e,d){var
a=d;for(;;){if(a){var
f=a[2],b=c(e,a[1]);if(b)return b;var
a=f;continue}return 0}}function
dw(d,a){var
b=0;return ba(function(e,a){var
b=c(d,e);return b?[0,b[1],a]:a},a,b)}function
dx(e,d){var
a=d;for(;;){if(a){var
b=a[1];if(c(e,b))return[0,b];var
a=a[2];continue}return 0}}function
dy(d,c){var
b=d,a=c;for(;;){if(0===b)return a;if(a){var
b=b-1|0,a=a[2];continue}return 0}}function
dz(f){function
a(a,b){var
d=b[2],e=b[1];return c(f,a)?[0,[0,a,e],d]:[0,e,[0,a,d]]}return function(b){return ba(a,b,k2)}}function
cn(b,a){var
d=0;return ba(function(d,a){return y(c(b,d),a)},a,d)}function
dA(b,a){if(a){var
d=a[1],f=a[2];if(c(b,d)){var
e=dA(b,f);return[0,[0,d,e[1]],e[2]]}}return[0,0,a]}function
e8(b,a){return dA(function(a){return 1-c(b,a)},a)}function
e9(b){if(e(b,hA))var
f=b;else{var
h=0;if(eJ(as(b,0))||eJ(as(b,p(b)-1|0)))h=1;else
var
f=b;if(h){var
d=ac(b),g=af(d),a=[0,0];for(;;){if(a[1]<g&&eH(b$(d,a[1]))){a[1]++;continue}var
c=[0,g-1|0];for(;;){if(a[1]<=c[1]&&eH(b$(d,c[1]))){c[1]+=-1;continue}var
i=a[1]<=c[1]?dh(d,a[1],(c[1]-a[1]|0)+1|0):hv,f=aI(i);break}break}}}return e(f,k3)}function
aw(b,a){var
c=p(a);return p(b)<c?0:e(ah(b,0,c),a)}function
dB(c,b){var
d=p(c),a=p(b);return d<a?0:e(ah(c,d-a|0,a),b)}var
t=eP([0,hE]);function
e_(b){var
a=ah(b,5,p(b)-5|0);try{var
c=g$(a);return c}catch(a){a=D(a);if(a[1]===cg)throw[0,dd,i(k9,i(b,k8))];throw a}}function
e$(a){return a?[0,ai(k_,a)]:0}var
le=y(ld,lc),lf=c(t[37],le);function
co(a){return d(t[3],a,lf)}function
dC(b,a){return bt(a[1],b)}function
bc(a){function
b(b){return dC(a,b)}return function(a){return dx(b,a)}}function
dD(c,b,a){var
d=e7(function(a){var
d=a[1];return bt(c,d)?[0,d,b]:a},a);return d===a?[0,[0,c,b],a]:d}function
li(b,a){return aL(b,function(b){return 0===a[0]?[0,i(b,a[1])]:0})}function
fa(a){return aY(li,lh,a)}function
fb(b){function
c(a){if(1===a[0]&&e(a[1],b))return[0,a];return 0}return function(a){if(0===a[0])throw[0,q,lj];return dw(c,a[4])}}function
fc(a){return 0===a[0]?0:a[4]}function
dE(c,b,a){if(0===a[0])return 0;var
f=a[3],g=a[2];if(e(a[1],c))return d(b,g,f);var
h=a[4];return ak(function(a){return dE(c,b,a)},h)}function
cp(d,c,g,f,b){var
a=bt(c,d),e=a?0===b?1:0:a;return e}function
lk(k,j,i,h){var
b=c(dz(function(a){return e(a[1],ll)}),j),a=b[1],l=b[2];if(a){var
d=a[1];if(!f(d[1],lm)&&!a[2]){var
g=d[2];return aw(g,ln)?[0,[1,k,y(l,[0,[0,lo,g],0]),i,h]]:0}}return 0}var
lq=[0,function(c,b,g,f){var
a=e(c,lp),d=a?0!==b?1:0:a;return d},lk];function
fd(a){return e(a[1],lr)}function
ls(g,b,a,d){var
c=dx(fd,b);if(c){var
h=c[1][2],i=U(function(a){return f(a[1],lt)},b),j=at(function(a){return e(a[1][1],lu)},a)?a:[0,[0,lv,[0,[0,h,0]]],a];return[0,[1,g,i,j,d]]}return 0}var
lx=[0,function(c,b,f,d){var
a=e(c,lw);return a?at(fd,b):a},ls];function
cq(a){return eL(a,32)?i(lz,i(a,ly)):a}var
lJ=c(t[37],lI);function
lK(l){var
b=l[2][1],c=l[1][1];if(d(t[3],c,lJ)){var
a=aY(function(b,a){if(b){var
c=b[2],d=b[1];if(e(a,lB))return[0,lC,[0,cq(d),c]];if(aw(a,lD)){var
f=i(lE,a);return[0,lF,[0,i(cq(d),f),c]]}return[0,i(d,a),c]}return 0},lA,b);if(a){var
h=a[1];if(f(h,lG))var
m=a[2],j=[0,cq(h),m];else
var
j=a[2];var
k=j}else
var
k=a;var
g=ai(lH,C(k))}else
var
o=dB(c,lO)?b:ag(cq,b),g=ai(lP,o);var
n=0===p(g)?lL:g;return i(c,i(lN,i(n,lM)))}function
fe(a,b){var
c=a?a[1]:lQ;return ai(c,ag(lK,b))}function
dF(a){return i(lS,fe(lR,a))}function
lU(b){switch(b[0]){case
0:var
c=b[1],d=i(lW,i(dF(b[2]),lV));return i(ai(lT,c[1]),d);case
1:var
e=b[1];return i(lZ,i(e,i(lY,i(dF(b[2]),lX))));default:var
f=b[3],h=b[2],j=b[1][1],k=i(l1,i(dF(b[4]),l0)),l=i(K(l3,dv(function(a){return i(l2,a)},f)),k);return i(l6,i(j,i(K(l5,dv(function(b){return i(l4,a(g+b[1]))},h)),l)))}}function
bC(a){return ai(l8,a[1])}var
cr=[B,l9,S(0)];function
A(a){var
b=a[1],d=a[2];return[0,b,d,c(b,d),0]}function
N(j,d,c){var
a=d,b=c;for(;;)switch(b){case
0:throw cr;case
1:var
e=a[2],a=a[1],b=e;continue;case
2:var
f=a[2],a=a[1],b=f;continue;case
3:throw cr;case
4:var
g=a[2],a=a[1],b=g;continue;case
5:var
h=a[2],a=a[1],b=h;continue;case
6:var
i=a[2],a=a[1],b=i;continue;default:throw cr}}function
ff(a,e,d,c){if(a[4])throw[0,q,mF];var
b=a[3];if(typeof
b==="number"&&3===b)return K(0,c);if(a[4])throw[0,q,mG];a[4]=1;return N(a,e,d)}function
bD(a){df(mv);throw[0,q,mw]}function
fg(b,i,h){var
a=i,c=h,d=0;for(;;){if(2===c){var
f=a[2],g=[0,a[3],d],a=a[1],c=f,d=g;continue}if(3===c){if(b[4])throw[0,q,mB];var
e=b[3];if(typeof
e==="number"&&3===e)return d;if(b[4])throw[0,q,mC];b[4]=1;return N(b,a,c)}return bD(0)}}function
cH(i,a,f,l){var
b=f[2],c=f[1],k=f[3],j=[0,t[1],0],e=aY(function(a,b){var
c=b[1][1],e=a[1],f=a[2];return d(t[3],c,e)?a:[0,d(t[4],c,e),[0,b,f]]},j,k)[2];if(b)return 7<=b?ff(a,c,b,[0,e]):bD(0);if(a[4])throw[0,q,mm];var
g=a[3];if(typeof
g==="number"&&1===g){var
h=A(a);return i<50?cF(i+1|0,h,c,e):n(cF,[0,h,c,e])}if(a[4])throw[0,q,mn];a[4]=1;return N(a,c,b)}function
cG(d,b,m,l,k){var
a=[0,m,l,k];if(b[4])throw[0,q,mo];var
f=b[3];if(typeof
f==="number")switch(f){case
0:var
c=A(b),e=c[3];if(typeof
e==="number")switch(e){case
1:case
3:var
g=[0,0];return d<50?cH(d+1|0,c,a,g):n(cH,[0,c,a,g])}else
if(4===e[0]){var
h=e[1],i=6;return d<50?bI(d+1|0,c,a,i,h):n(bI,[0,c,a,i,h])}if(c[4])throw[0,q,mp];c[4]=1;return N(c,a,6);case
1:case
3:var
j=0;return d<50?cH(d+1|0,b,a,j):n(cH,[0,b,a,j])}if(b[4])throw[0,q,mq];b[4]=1;return N(b,a[1],a[2])}function
cF(c,a,o,e){var
g=o[3],x=0,A=o[2],B=o[1];if(g&&!f(g[1],me)){var
d=g[2],p=0;if(d&&!f(d[1],mb)){var
k=d[2];if(k){var
l=k[2],r=k[1];if(l){if(!f(l[1],md)){var
m=l[2];if(m){var
y=m[1],z=e$(m[2]),h=[2,[0,r],[0,[0,e_(y)]],z,e];p=1}}}else{var
h=[2,[0,r],0,0,e];p=1}}}if(!p)var
h=[1,ai(mc,d),e]}else
x=1;if(x)var
h=[0,[0,C(aY(function(a,b){if(a){var
c=a[2],d=a[1];return f(b,l$)?[0,i(d,b),c]:[0,ma,[0,d,c]]}return 0},l_,g))],e];var
b=[0,B,A,h];if(a[4])throw[0,q,mr];var
j=a[3];if(typeof
j==="number")switch(j){case
3:return fg(a,b,2);case
4:var
s=2;return c<50?bG(c+1|0,a,b,s):n(bG,[0,a,b,s]);case
5:var
t=2;return c<50?bF(c+1|0,a,b,t):n(bF,[0,a,b,t]);case
6:var
u=2;return c<50?bE(c+1|0,a,b,u):n(bE,[0,a,b,u])}else
if(4===j[0]){var
v=j[1],w=2;return c<50?bH(c+1|0,a,b,w,v):n(bH,[0,a,b,w,v])}if(a[4])throw[0,q,ms];a[4]=1;return N(a,b,2)}function
H(c,a,I,H,G){var
b=[0,I,H,G];if(a[4])throw[0,q,mt];var
d=a[3];if(typeof
d==="number")switch(d){case
4:var
p=4;return c<50?cy(c+1|0,a,b,p):n(cy,[0,a,b,p]);case
5:var
r=4;return c<50?cx(c+1|0,a,b,r):n(cx,[0,a,b,r]);case
2:case
6:if(a[4])throw[0,q,mu];a[4]=1;return N(a,b,4);default:var
e=b[1],h=b[2],g=[0,b[3],0];for(;;){if(4===h){var
E=e[2],F=[0,e[3],g],e=e[1],h=E,g=F;continue}if(5===h){var
i=e[2],f=e[1],j=[0,e[3],[0,g]];switch(i){case
6:var
l=f[2],m=f[1],o=[0,j,f[3]];return c<50?cG(c+1|0,a,m,l,o):n(cG,[0,a,m,l,o]);case
0:case
7:var
k=[0,j,0];return c<50?cG(c+1|0,a,f,i,k):n(cG,[0,a,f,i,k]);default:return bD(0)}}return bD(0)}}else
switch(d[0]){case
0:var
s=d[1],t=4;return c<50?cE(c+1|0,a,b,t,s):n(cE,[0,a,b,t,s]);case
1:var
u=d[1],v=4;return c<50?cD(c+1|0,a,b,v,u):n(cD,[0,a,b,v,u]);case
2:var
w=d[1],x=4;return c<50?cC(c+1|0,a,b,x,w):n(cC,[0,a,b,x,w]);case
3:var
y=d[1],z=4;return c<50?cB(c+1|0,a,b,z,y):n(cB,[0,a,b,z,y]);case
4:var
A=d[1],B=4;return c<50?cA(c+1|0,a,b,B,A):n(cA,[0,a,b,B,A]);default:var
C=d[1],D=4;return c<50?cz(c+1|0,a,b,D,C):n(cz,[0,a,b,D,C])}}function
cE(e,f,c,b,a){var
d=A(f);return e<50?H(e+1|0,d,c,b,a):n(H,[0,d,c,b,a])}function
cD(e,f,c,b,a){var
d=A(f);return e<50?H(e+1|0,d,c,b,a):n(H,[0,d,c,b,a])}function
cC(e,j,c,b,f){var
a=A(j),d=a[3];if(typeof
d==="number")switch(d){case
2:case
6:if(a[4])throw[0,q,mA];a[4]=1;return N(a,c,b)}else
if(4===d[0]){var
k=d[1],g=A(a),h=i(f,k);return e<50?H(e+1|0,g,c,b,h):n(H,[0,g,c,b,h])}return e<50?H(e+1|0,a,c,b,f):n(H,[0,a,c,b,f])}function
cB(e,f,c,b,a){var
d=A(f);return e<50?H(e+1|0,d,c,b,a):n(H,[0,d,c,b,a])}function
cA(e,f,c,b,a){var
d=A(f);return e<50?H(e+1|0,d,c,b,a):n(H,[0,d,c,b,a])}function
cz(e,f,c,b,a){var
d=A(f);return e<50?H(e+1|0,d,c,b,a):n(H,[0,d,c,b,a])}function
cy(d,e,b,a){var
c=A(e);return d<50?H(d+1|0,c,b,a,fh):n(H,[0,c,b,a,fh])}function
cx(d,e,b,a){var
c=A(e);return d<50?H(d+1|0,c,b,a,fi):n(H,[0,c,b,a,fi])}function
aN(c,a,z,y,x){var
b=[0,z,y,x];if(a[4])throw[0,q,mD];var
g=a[3];if(typeof
g==="number")switch(g){case
2:var
k=b[1],h=b[2],j=[0,b[3],0];for(;;){var
d=[0,k,h,j];switch(h){case
1:var
i=d[1],k=i[1],h=i[2],j=[0,i[3],d[3]];continue;case
2:case
3:if(a[4])throw[0,q,mx];var
l=a[3];if(typeof
l==="number"&&2===l){var
e=A(a),f=e[3];if(typeof
f==="number"){if(1===f){var
m=A(e),o=0;return c<50?cF(c+1|0,m,d,o):n(cF,[0,m,d,o])}}else
if(4===f[0]){var
p=f[1],r=0;return c<50?bI(c+1|0,e,d,r,p):n(bI,[0,e,d,r,p])}if(e[4])throw[0,q,my];e[4]=1;return N(e,d,0)}if(a[4])throw[0,q,mz];a[4]=1;return N(a,d[1],d[2]);default:return bD(0)}}case
4:var
s=1;return c<50?bG(c+1|0,a,b,s):n(bG,[0,a,b,s]);case
5:var
t=1;return c<50?bF(c+1|0,a,b,t):n(bF,[0,a,b,t]);case
6:var
u=1;return c<50?bE(c+1|0,a,b,u):n(bE,[0,a,b,u])}else
if(4===g[0]){var
v=g[1],w=1;return c<50?bH(c+1|0,a,b,w,v):n(bH,[0,a,b,w,v])}if(a[4])throw[0,q,mE];a[4]=1;return N(a,b,1)}function
bI(c,z,y,x,w){var
e=A(z),b=[0,y,x,[0,w]];if(e[4])throw[0,q,mH];var
f=e[3];if(typeof
f==="number"&&5===f){var
a=A(e),d=a[3];if(typeof
d==="number")switch(d){case
4:var
g=5;return c<50?cy(c+1|0,a,b,g):n(cy,[0,a,b,g]);case
5:var
h=5;return c<50?cx(c+1|0,a,b,h):n(cx,[0,a,b,h]);default:if(a[4])throw[0,q,mI];a[4]=1;return N(a,b,5)}else
switch(d[0]){case
0:var
i=d[1],j=5;return c<50?cE(c+1|0,a,b,j,i):n(cE,[0,a,b,j,i]);case
1:var
k=d[1],l=5;return c<50?cD(c+1|0,a,b,l,k):n(cD,[0,a,b,l,k]);case
2:var
m=d[1],o=5;return c<50?cC(c+1|0,a,b,o,m):n(cC,[0,a,b,o,m]);case
3:var
p=d[1],r=5;return c<50?cB(c+1|0,a,b,r,p):n(cB,[0,a,b,r,p]);case
4:var
s=d[1],t=5;return c<50?cA(c+1|0,a,b,t,s):n(cA,[0,a,b,t,s]);default:var
u=d[1],v=5;return c<50?cz(c+1|0,a,b,v,u):n(cz,[0,a,b,v,u])}}if(e[4])throw[0,q,mJ];e[4]=1;return N(e,b[1],b[2])}function
bH(e,f,c,b,a){var
d=A(f);return e<50?aN(e+1|0,d,c,b,a):n(aN,[0,d,c,b,a])}function
bG(d,e,b,a){var
c=A(e);return d<50?aN(d+1|0,c,b,a,fj):n(aN,[0,c,b,a,fj])}function
bF(d,e,b,a){var
c=A(e);return d<50?aN(d+1|0,c,b,a,fk):n(aN,[0,c,b,a,fk])}function
bE(d,e,b,a){var
c=A(e);return d<50?aN(d+1|0,c,b,a,fl):n(aN,[0,c,b,a,fl])}function
mf(a,b,c,d){return ce(bI(0,a,b,c,d))}function
mg(a,b,c,d){return ce(bH(0,a,b,c,d))}function
mh(a,b,c){return ce(bG(0,a,b,c))}function
mi(a,b,c){return ce(bF(0,a,b,c))}function
mj(a,b,c){return ce(bE(0,a,b,c))}function
mk(f,e){var
d=[0,f,e,0,0],c=[0,0,d[2][12]],a=A(d),b=a[3];if(typeof
b==="number"){if(3===b)return ff(a,c,7,0)}else
if(4===b[0])return mf(a,c,7,b[1]);if(a[4])throw[0,q,mK];a[4]=1;return N(a,c,7)}function
ml(f,e){var
d=[0,f,e,0,0],b=[0,0,d[2][12]],a=A(d),c=a[3];if(typeof
c==="number")switch(c){case
3:return fg(a,b,3);case
4:return mh(a,b,3);case
5:return mi(a,b,3);case
6:return mj(a,b,3)}else
if(4===c[0])return mg(a,b,3,c[1]);if(a[4])throw[0,q,mL];a[4]=1;return N(a,b,3)}var
fm=[B,mM,S(0)];function
mO(b){a:for(;;){b[10]=aW(5,-1);var
k=0;for(;;){var
d=s9(mN,k,b),j=0<=d?1:0,m=j?b[12]!==ch?1:0:j;if(m){b[11]=b[12];var
e=b[12];b[12]=[0,e[1],e[2],e[3],b[4]+b[6]|0]}if(20<d>>>0){c(b[1],b);var
k=d;continue}switch(d){case
0:return 3;case
1:var
f=b[12];b[12]=[0,f[1],f[2]+1|0,b[6],f[4]];continue a;case
2:continue a;case
3:return 4;case
4:return 2;case
5:return 1;case
6:return 0;case
7:return 5;case
8:return 6;case
9:return[3,z(b)];case
10:return[5,z(b)];case
11:return[4,z(b)];case
12:return[0,z(b)];case
13:return[2,z(b)];case
14:return[1,z(b)];case
15:var
n=w(b[10],0)[1];return[1,dl(b,w(b[10],1)[2],n)];case
16:return[4,z(b)];case
17:continue a;case
18:continue a;case
19:continue a;default:var
h=z(b),l=aH(h,0);if(aB<l)return[1,h];throw[0,fm,i(mR,i(h,i(mQ,i(a(g+l),mP))))]}}}}function
fn(c){var
d=c[11],b=c[12],e=i(mS,a(g+((b[4]-b[3]|0)+1|0))),f=i(mT,i(a(g+((d[4]-d[3]|0)+1|0)),e));return i(a(g+b[2]),f)}function
fo(c,a){var
b=eO(0,c);try{var
g=d(a,mO,b);return g}catch(a){a=D(a);if(a[1]===fm){var
e=i(mU,a[2]);df(i(fn(b),e));return 0}if(a===cr){var
f=i(mV,c);df(i(fn(b),f));return 0}throw a}}function
fp(a){return fo(a,ml)}function
dG(b){if(0===b[0])return e9(b[1]);var
d=b[4],e=f(b[1],mX);if(e){var
g=0!==d?1:0;if(g){var
a=d;for(;;){if(a){var
i=a[2],c=dG(a[1]);if(c){var
a=i;continue}return c}return 1}}var
h=g}else
var
h=e;return h}function
fq(a){var
b=0;return C(aY(function(f,a){if(0===a[0]){var
b=a[1],j=b[3],k=b[2],l=b[1],h=function(a){return fo(a[2],mk)},d=c(dz(function(a){return e(a[1],mW)}),k),i=d[2],g=aY(y,0,ag(h,d[1]));return[0,[1,l,i,g,fq(j)],f]}return[0,[0,a[1]],f]},b,a))}function
fr(c,j){var
b=c?c[1]:0;function
d(a){return i(mZ,dj(b*2|0,32))}var
k=0,a=aY(function(f,a){if(0===a[0])return[0,[1,a[1]],f];var
h=a[3],j=a[2],g=a[1],p=a[4],q=0===h?j:[0,[0,mY,fe(0,h)],j],k=fr([0,b+1|0],p),c=e(g,m0)?y([0,m1,k],[0,[1,d(0)],0]):k,o=0;if(c){var
l=c[1];if(0===l[0]&&co(l[1][1])){var
m=[0,[1,i(m2,dj((b+1|0)*2|0,32))],c];o=1}}if(!o)var
m=c;var
n=[0,[0,g,q,m]];return co(g)?[0,[1,d(0)],[0,n,f]]:[0,n,f]},k,j),h=0;if(a){var
f=a[1];if(0!==f[0]){var
n=0,l=a[2],m=f[1];if(0<b&&e(m,d(0))){var
g=[0,[1,i(m3,dj((b-1|0)*2|0,32))],l];h=1;n=1}}}if(!h)var
g=a;return C(g)}function
fs(u){var
d=0,a=u;for(;;){if(a){var
e=a[1],j=0;if(0===e[0]){var
f=a[2];if(f){var
g=f[1],k=e[1];if(0===g[0]){var
v=f[2],a=[0,[0,i(k,g[1])],v];continue}var
o=f[2],n=k,m=g,l=g[1];j=1}}else{var
h=a[2];if(h){var
s=h[1],z=e[1];if(0===s[0]){var
o=h[2],n=s[1],m=e,l=z;j=1}}}if(j&&co(l)&&e9(n)){var
a=[0,m,o];continue}var
b=a[1];if(0===b[0]){var
d=[0,[0,b[1]],d],a=a[2];continue}var
p=b[4],q=b[1],w=a[2],x=b[3],y=b[2];if(co(q)){var
c=p;for(;;){if(c){var
t=c[2];if(dG(c[1])){var
c=t;continue}}var
r=ba(function(b,a){if(dG(b)&&0===a)return a;return[0,b,a]},c,0);break}}else
var
r=p;var
d=[0,[1,q,y,x,fs(r)],d],a=w;continue}return C(d)}}S(0);S(0);function
aM(b,a){return[0,d_,[0,b,a]]}var
nu=[0,nt,[0,ns,[0,nr,[0,nq,[0,np,[0,no,[0,nn,[0,nm,[0,nl,[0,nk,[0,nj,[0,ni,[0,nh,[0,ng,[0,nf,[0,ne,[0,nd,[0,nc,[0,nb,[0,na,[0,m$,[0,m_,[0,m9,[0,m8,[0,m7,[0,[0,m6,[0,j,aM(h,m5)]],m4]]]]]]]]]]]]]]]]]]]]]]]]]],nB=[0,nA,[0,nz,[0,ny,[0,nx,[0,[0,nw,[0,j,aM(h,nv)]],nu]]]]],nG=[0,nF,[0,nE,[0,[0,nD,[0,l,aM(h,nC)]],nB]]],nK=[0,[0,nJ,[0,l,[0,E,[0,nI,aM(h,nH)]]]],nG],oa=[0,n$,[0,n_,[0,n9,[0,n8,[0,n7,[0,n6,[0,n5,[0,n4,[0,n3,[0,n2,[0,n1,[0,n0,[0,nZ,[0,nY,[0,nX,[0,nW,[0,nV,[0,[0,nU,[0,l,[0,E,[0,ft,nT]]]],[0,[0,nS,[0,l,[0,E,[0,ft,nR]]]],[0,nQ,[0,nP,[0,nO,[0,nN,[0,[0,nM,[0,l,aM(h,nL)]],nK]]]]]]]]]]]]]]]]]]]]]]]],oe=[0,od,[0,[0,oc,[0,b,aM(h,ob)]],oa]],oi=[0,oh,[0,[0,og,[0,b,aM(h,of)]],oe]],oK=[0,oJ,[0,oI,[0,oH,[0,oG,[0,oF,[0,oE,[0,oD,[0,oC,[0,oB,[0,oA,[0,oz,[0,oy,[0,ox,[0,ow,[0,ov,[0,ou,[0,ot,[0,os,[0,or,[0,oq,[0,op,[0,oo,[0,on,[0,om,[0,ol,[0,[0,ok,[0,b,aM(h,oj)]],oi]]]]]]]]]]]]]]]]]]]]]]]]]];function
fu(a){return fs(fq(kj([0,oK],oN,oM,oL,0,eO(0,a))))}function
fv(a){return[0,[0,o9,a],o8]}var
dH=fv(o_);function
fw(n,m,a){var
g=U(function(b){var
a=b[1],c=e(a,fx),d=c||e(a,fy);return d},n);function
o(c){var
b=c[2],a=p(b),d=7;return a<7?k4:ah(b,d,a-7|0)}var
q=c(bc(fx),g),r=K(dH,T(T(cl([P,function(a){return c(bc(fy),g)}],q),o),fv)),b=c(bc(o6),a),d=c(bc(o7),a),i=0;if(d&&b){var
j=b[1][2],k=d[1][2],l=function(b){if(f(b,o1)&&f(b,o2))return a;return dD(o4,j,dD(o3,k,a))},h=T(ak(function(a){return f(a[1][1],o5)?0:[0,bC(a[2])]},m),l);i=1}if(!i)var
h=0;return y(r,K(a,h))}function
fz(b,a){var
c=[1,o$,0,0,a];return dE(b,function(b,a){return[0,[0,b,a]]},c)}function
pa(f,d,a,c){function
e(b){var
c=b[2],e=fw(d,a,b[1]);return[0,e,y(c,a)]}var
b=K([0,dH,0],T(fz(pb,c),e));return[0,[1,pc,b[1],b[2],0]]}var
pe=[0,function(a,d,c,b){return e(a,pd)},pa];function
pf(a,b){return[0,a]}function
fA(a){return dE(pg,pf,a)}function
fB(d,a){if(0===a[0])return 0;var
b=a[1];if(f(b,ph)){var
e=a[4],g=a[3],h=a[2],c=function(b){if(b){var
a=b[1];if(0===a[0])return[0,a,c(b[2])];var
e=a[1];if(f(e,pi)){var
g=a[4],h=a[3],i=a[2],j=c(b[2]);return[0,[1,e,i,h,c(g)],j]}return[0,[1,pj,d,a[3],a[4]],b[2]]}return 0};return[0,[1,b,h,g,c(e)]]}return[0,[1,pk,d,a[3],a[4]]]}function
po(w,c,v,u,b){if(c){var
m=c[1];if(!f(m[1],pp)&&!c[2]){var
a=m[2],l=aw(a,pl),s=l?dB(a,pm):l;if(s){if(b){var
d=b[1];if(0!==d[0]&&!f(d[1],pq)){var
e=d[2];if(e){var
n=e[1];if(!f(n[1],pr)&&!f(n[2],ps)&&!e[2]){var
g=b[2];if(g){var
h=g[2];if(h){var
i=h[1],j=g[1];if(0!==i[0]&&!f(i[1],pt)){var
k=i[2];if(k){var
o=k[1];if(!f(o[1],pu)&&!f(o[2],pv)&&!k[2]){var
t=h[2],q=fu(ah(a,15,(p(a)-9|0)-15|0)),r=function(a){function
b(b){return fw(b[1],b[2],a)}var
c=T(fz(pn,q),b);return fB(e5([P,function(b){return y(dH,a)}],c),j)};return[0,[0,K(j,aL(fA(j),r)),t]]}}}}}}}}}return 0}return 0}}return 0}var
px=[0,function(a,b,c,d){return cp(pw,a,b,c,d)},po];function
pB(u,b,t,s,a){if(b){var
l=b[1];if(!f(l[1],pC)&&!b[2]){var
m=l[2],k=aw(m,py),q=k?dB(m,pz):k;if(q){if(a){var
c=a[1];if(0!==c[0]&&!f(c[1],pD)){var
d=c[2];if(d){var
n=d[1];if(!f(n[1],pE)&&!f(n[2],pF)&&!d[2]){var
e=a[2];if(e){var
g=e[2];if(g){var
h=g[1],i=e[1];if(0!==h[0]&&!f(h[1],pG)){var
j=h[2];if(j){var
o=j[1];if(!f(o[1],pH)&&!f(o[2],pI)&&!j[2]){var
r=g[2],p=function(a){return fB([0,pA,a],i)};return[0,[0,K(i,aL(fA(i),p)),r]]}}}}}}}}}return 0}return 0}}return 0}var
pK=[0,function(a,b,c,d){return cp(pJ,a,b,c,d)},pB];function
fC(h,g,o){var
i=h?h[1]:0,c=0,a=o;for(;;){if(a){var
b=a[1];if(0===b[0]){var
c=[0,b,c],a=a[2];continue}var
d=a[2],f=b[4],j=b[3],k=b[2],l=b[1],e=f0(g,l,k,j,f,d);if(typeof
e==="number"){if(0===e){var
a=d;continue}var
m=fC([0,i],g,f),n=[1,l,k,j,m];if(i&&s_(m,f)){var
a=[0,n,d];continue}var
c=[0,n,c],a=d;continue}else{if(0===e[0]){var
a=[0,e[1],d];continue}var
a=e[1];continue}}return C(c)}}function
fD(a,e,d,c,b){return K(0,ak(function(f){if(dM(f[1],e,d,c,b)){var
a=dM(f[2],e,d,c,b);if(typeof
a==="number"&&!a)return 0;return[0,a]}return 0},a))}function
fE(a,i,h,b){var
c=a?a[1]:0;return fC([0,c],function(f,e,d,b,c){var
a=fD(i,f,e,d,b);if(typeof
a==="number")switch(a){case
0:var
g=ak(function(a){return dM(a[1],f,e,d,b)?f0(a[2],f,e,d,b,c):0},h);return g?[1,g[1]]:1;case
1:return[1,y(b,c)];default:return 0}else
return 0===a[0]?[0,a[1]]:[1,y(a[1],c)]},b)}function
pM(c){if(!f(c[1][1],pN)){var
a=c[2][1];if(a){var
b=a[2];if(b){var
d=b[2],e=b[1],g=a[1],h=[P,function(a){return e$(d)}];return[0,[0,[0,g],e_(e),h]]}}}return 0}function
dI(a){return ak(pM,a)}function
cs(b,a){return ak(function(a){var
c=a[2];return e(a[1][1],b)?[0,bC(c)]:0},a)}function
fF(m){var
c=0,a=m;for(;;){if(a){var
b=a[1];if(0===b[0]){var
c=[0,b,c],a=a[2];continue}var
h=a[2],g=b[2],d=b[1],n=b[3],i=fF(b[4]);if(g){var
j=g[1];if(!f(j[1],pO)&&!f(j[2],pP)&&!g[2]&&!i){var
k=0;if(e(d,pQ)||e(d,pR))k=1;if(k){var
l=[0,d]?d:lb,a=dy(1,e8(function(g){return function(a){if(1===a[0]){var
b=a[2];if(b){var
c=b[1],d=a[1];if(!f(c[1],k$)&&!f(c[2],la)&&!b[2]&&e(d,g))return 1}}return 0}}(l),h)[2]);continue}}}var
c=[0,[1,d,g,n,i],c],a=h;continue}return C(c)}}function
fG(a){return[0,pT,a[2],[0,pS,a[3]],0]}function
qd(b){var
a=b[1][1],c=e(a,qe),d=c||e(a,qf);return d}function
qg(a){if(!f(a[1][1],qh)){var
c=a[2],b=c[1];if(b&&!f(b[1],qi)&&!b[2])return[0,qj,c]}return a}function
fH(k,d,c){function
q(h){var
j=h[3],b=h[2],i=b[3],c=b[2],l=b[1],o=b[4],p=h[1],m=0===j?0:fH(k,d,j),n=[0,qy,a(g+p)];if(e(l,qz))return[1,l,[0,n,c],i,m];var
q=at(function(a){return dC(qA,a)},c)?c:[0,qC,c],r=[0,n,y(dw(function(a){return f(a[1][1],qn)?0:[0,[0,qo,bC(a[2])]]},i),q)],s=ag(qg,i);return[1,qB,r,s,y(fF(o),m)]}if(c){var
h=c[1],l=h[2][3],m=h[1],r=h[4],j=function(g,d,c){function
f(a){if(2===a[0]){var
b=a[3];if(e(a[1][1],g)){if(c)var
f=c[1],d=b?bt(f,b[1]):0;else
var
d=0===b?1:0;if(d)return 1}}return 0}function
h(a){if(2===a[0]){var
b=a[2];if(b){var
c=a[4];if(b[1][1]===d)return[0,c]}}return 0}function
i(a){if(2===a[0]&&!a[2])return[0,a[4]];return 0}var
b=U(f,k),a=ak(h,b);return a?a:ak(i,b)},o=function(b){var
a=b[3],d=b[2],e=b[1][1],c=bw(a),f=aO===c?a[1]:P===c?bB(a):a;return j(e,d,f)},p=function(c){var
a=[P,function(d){function
b(a){return aL(dI(l),o)}var
a=cs(qk,c);return aL(cm(function(a){return e(ql,a)},a),b)}];function
n(h){var
a=dk(h);if(f(a,p2))if(f(a,p3)){var
d=0;if(f(a,p4)&&f(a,p5))var
b=f(a,p6)?f(a,p7)?0:p9:p_;else
d=1;if(d)var
g=function(a){return e(a,k6)?pZ:e(a,k7)?p0:e(a,k5)?0:0},b=aL(cs(p1,c),g)}else
var
b=p$;else
var
b=qa;return cl([P,function(a){return p8}],b)}var
h=K(qc,aL(cs(qb,c),n)),b=h[1],j=h[2],d=e6(T(j,function(a){return[0,pU,[0,[0,a,0]]]}));if(e(b,pV))return[0,b,0,d];function
g(a){return cs(pW,a)}var
i=[P,function(d){var
b=bw(a),c=aO===b?a[1]:P===b?bB(a):a;return aL(c,g)}];function
k(a){return[0,pX,a]}var
m=cl(i,g(c));return[0,b,e6(T(cm(function(a){return f(a,pY)},m),k)),d]},b=K(qm,T(j(d,m,0),p)),n=b[1],s=b[3],t=b[2],u=ag(q,c),v=e(n,qD)?0:[0,[0,qx,i(d,i(qw,i(a(g+m),i(qv,ai(qu,ag(k1,C(r)))))))],0],w=y(v,t);return[0,[1,n,w,y(s,U(qd,l)),u],0]}return 0}var
qG=c(t[37],qF);function
fI(e){var
a=e;for(;;){if(a){var
b=a[1];if(0===b[0]){var
c=a[2];if(c){var
d=c[1],f=b[1];if(0===d[0]){var
g=c[2],a=[0,[0,i(f,d[1])],g];continue}}}return[0,b,fI(a[2])]}return a}}function
ct(b){if(b){var
a=b[1];if(0===a[0])return[0,a,ct(b[2])];var
c=a[1],g=b[2],h=a[3],i=a[2],e=ct(a[4]),f=ct(g);if(d(t[3],c,qG)&&0===e)return f;return[0,[1,c,i,h,fI(e)],f]}return b}function
fJ(a){var
e=3<=p(a)?1:0;if(e){var
f=58===aH(a,1)?1:0;if(f){var
b=aH(a,0),d=0;if(113<=b){if(!(2<(b-118|0)>>>0))d=1}else
if(111<=b)d=1;if(!d)return 0;var
c=1}else
var
c=f}else
var
c=e;return c}function
qM(d,c,b,a){return a?1:2}var
qN=[0,function(a,d,c,b){return fJ(a)},qM];function
qO(e,a,d,c){if(a){var
b=a[1];if(!f(b[1],qP)&&!a[2]&&aw(b[2],qQ))return 1}return 0}var
qS=[0,function(a,d,c,b){return e(a,qR)},qO];function
qX(h,b,g,d){if(b){var
c=b[1];if(!f(c[1],qY)&&!b[2]){var
a=dk(c[2]);if(!e(a,qT)&&!e(a,qU)&&!aw(a,qV)&&!aw(a,qW))return 0;return 2}}return 0}var
q1=[0,function(a,h,g,c){var
d=e(a,qZ),b=d||e(a,q0),f=b?0===c?1:0:b;return f},qX];function
q2(d,a,c,b){if(a&&!f(a[1][1],q3)&&!a[2])return 2;return 0}var
q5=[0,function(a,b,c,d){return cp(q4,a,b,c,d)},q2],fK=c(t[37],q6),q8=c(t[37],q7),q9=d(t[7],fK,q8);function
rf(d,c,b,a){return 1}var
fL=[0,function(g,f,d,h){var
a=e(g,rg);if(a)var
b=0===f?1:0,c=b?0===d?1:0:b;else
var
c=a;return c},rf];function
rh(i,h,g,b){if(b){var
a=b[1];if(0!==a[0]&&!f(a[1],ri)&&!b[2]){var
j=a[4],k=a[3],l=a[2],e=c(dz(function(a){return dC(rj,a)}),l),d=e[1],m=e[2];if(d&&!d[2])return[0,[1,i,dD(rl,d[1][2],h),g,[0,[1,rk,m,k,j],0]]];return 0}}return 0}var
rn=[0,function(a,d,c,b){return e(a,rm)},rh];function
rr(q,p,c,o){if(at(function(a){var
c=a[2][1],b=e(a[1][1],rs),d=b?bt(c,rt):b;return d},c)){var
b=C(o),g=0;if(b){var
a=b[1];if(0!==a[0]){var
j=b[2],k=a[4],l=a[3],m=a[2],n=a[1],h=K(0,ak(function(a){var
b=a[2];return e(a[1][1],ro)?[0,[0,[0,rp,bC(b)],0]]:0},c)),d=U(function(a){return aw(a[1][1],rq)},c),i=y(U(function(a){var
b=a[1][1];return 1-at(function(a){return e(a[1][1],b)},d)},l),d),f=[0,[1,n,y(h,m),i,k],j];g=1}}if(!g)var
f=0;return[1,C(f)]}return 0}var
rv=[0,function(a,d,c,b){return e(a,ru)},rr],rx=c(t[37],rw);function
fM(a){return d(t[3],a,rx)}var
rz=c(t[37],ry);function
rO(c,a,b){return fM(a)}function
dJ(r,a,b){var
m=fM(a);if(m)var
n=m;else{var
o=d(t[3],a,rz);if(o)var
i=o;else{var
k=45===aH(a,0)?1:0;if(k)var
h=k;else{var
l=aw(a,rM);if(l)var
q=1-r,h=q||f(a,rN);else
var
h=l}var
i=h}if(i)var
p=i;else{var
e=0;if(f(a,rA)&&f(a,rB)){var
c=0;if(f(a,rC)){var
g=0;if(f(a,rD))if(f(a,rE))if(f(a,rF))if(f(a,rG)){if(f(a,rH)){c=1;g=1}}else{e=2;c=1;g=1}else
if(b&&!(f(b[1],rK)||b[2])){e=1;c=1;g=1}else{c=1;g=1}else
g=1;if(!g)if(b&&!(f(b[1],rI)||b[2])){e=1;c=1}else
c=1}if(!c&&b&&!f(b[1],rL)&&!b[2])e=1}else
e=2;var
j=0;switch(e){case
2:if(b&&!f(b[1],rJ)&&!b[2])j=1;break;case
0:break;default:j=1}var
s=j?1:0,p=s}var
n=1-p}return n}var
rQ=c(t[37],rP);function
fN(a,c,b){var
d=a?a[1]:0,e=c?dJ:rO;return U(function(a){return e(d,a[1][1],a[2][1])},b)}function
fO(a,c){var
e=a?a[1]:0;function
b(g,f,a,d){var
b=fN([0,e],c,a);return a===b?0:[0,[1,g,f,b,d]]}return[0,function(c,g,b,f){var
a=0!==b?1:0,e=a?1-d(t[3],c,rQ):a;return e},b]}function
rR(b,a){if(0===b[0]){var
d=b[1],c=fN(0,1,b[2]);return 0===c?a:[0,[0,d,c],a]}return a}var
fP=c(t[37],rS);function
dK(a){return U(function(a){return 1-d(t[3],a[1],fP)},a)}function
fQ(g,f,d,a){return U(function(c){var
a=c[1][1],h=c[2][1];if(g){var
b=1-e(a,d);return b?dJ(1,a,h):b}return e(a,f)},a)}function
rV(k,d,c,j){var
b=dx(function(a){return e(a[1],rU)},d);if(b){var
f=b[1];if(!at(function(a){return e(a[1][1],rW)},c)){var
a=f[2],g=f[1],h=hq(a)?i(a,rT):a;return[0,[1,k,d,[0,[0,[0,g],[0,[0,h,0]]],c],j]]}}return 0}var
cu=o,fR=null,fS=undefined,rY=[0,function(a,d,c,b){return e(a,rX)},rV],r6=[0,pe,[0,qN,[0,qS,0]]];function
cv(a){return a==fR?0:[0,a]}var
r$=cu.Array,fT=[B,sa,S(0)];h8(sb,[0,fT,{}]);(function(a){throw a});eS(function(a){return a[1]===fT?[0,aJ(a[2].toString())]:0});eS(function(a){return a
instanceof
r$?0:[0,aJ(a.toString())]});var
fU=cu.document;S(0);cu.HTMLElement===fS;var
sc=sV(0);function
fV(a){return a===fS?0:[0,a]}function
sd(a){return e(aJ(typeof
a),se)}function
sf(e){var
b=e.src,c=b.length;if(0<c){var
d=b.indexOf(d8),f=d<0?c:d,g=gj[a("length")];return(b.indexOf(gj)+g|0)===f?1:0}return 0}function
fW(a){var
b=a.split("."),c=[0,cu];return b.reduce(sX(function(a,b,d,c){return a?fV(a[1][b]):a}),c)}function
fX(a){if(a){var
b=a[1],c=cv(b.getAttribute(gG));if(c){var
d=c[1];b.removeAttribute(gG);return cm(sd,fW(d))}return 0}return 0}var
sg=[P,function(g){var
d=fU.getElementsByTagName(R),b=0,a=0,e=d.length;for(;;){if(a<e){var
c=cv(d.item(a));if(c){var
b=[0,c[1],b],a=a+1|0;continue}var
a=a+1|0;continue}var
f=C(b);return ak(function(a){var
b=a.tagName.toLowerCase()===R?a:fR;return fX(cm(sf,cv(b)))},f)}}],fY=cl(sg,fX(fV(fU.currentScript))),dL=[0,0,0,0];function
sh(n,m){if(!dL[1]){if(0===cw)var
a=eY([0]);else{var
e=eY(eM(h_,cw)),g=cw.length-1-1|0,k=0;if(!(g<0)){var
b=k;for(;;){var
h=(b*2|0)+2|0;e[3]=al(cj[4],cw[1+b],h,e[3]);e[4]=al(ck[4],h,1,e[4]);var
l=b+1|0;if(g!==b){var
b=l;continue}break}}var
a=e}var
i=ie(a,si),f=ic(a,sj),j=function(b){var
a=b[1+i];return c(a[2],a[1])};ia[1]++;if(d(ck[28],f,a[4])){ds(a,f+1|0);w(a[2],f)[1+f]=j}else
a[6]=[0,[0,f,j],a[6]];var
o=function(d){var
b=hg(B,a[1]);b[1]=a[2];var
c=tf(b);c[1+i]=d;return c};eZ[1]=(eZ[1]+a[1]|0)-1|0;a[8]=C(a[8]);ds(a,3+((w(a[2],1)[2]*16|0)/32|0)|0);dL[1]=o}return c(dL[1],[0,n,m])}function
sk(aQ,aO,aN,aM){var
V=cv(aM);if(V){var
S=eM(aJ,sW(V[1])),i=S.length-1-1|0,m=0;for(;;){if(0<=i){var
$=[0,S[1+i],m],i=i-1|0,m=$;continue}var
W=m;break}}else
var
W=0;var
X=aJ(aO),Y=aN|0,Q=[0,Y]?Y:0,aP=[0,0],h=[0,Q]?Q:0,w=fu(X),j=w;for(;;){if(j){var
n=j[1],Z=0;if(1===n[0]&&!f(n[1],lg)){var
u=[0,n[4]];Z=1}if(!Z){var
j=j[2];continue}}else
var
u=0;if(u){var
ae=u[1],E=dA(function(a){if(1===a[0]&&!f(a[1],oP))return 1;return 0},ae),o=E[2],ab=E[1],_=0,ac=K(0,T(fa(cn(fc,cn(fb(oT),ab))),fp));if(o){var
k=o[1];if(0!==k[0]&&!f(k[1],oO)){var
s=[0,k[3],k[4]];_=1}}if(!_)var
s=[0,0,o];var
l=[0,ac,s[2],s[1]]}else
var
F=e8(function(a){if(1===a[0]){var
b=a[2];if(b){var
c=b[1],g=a[1];if(!f(c[1],oQ)&&!b[2]){var
h=c[2],d=cp(oR,g,b,a[3],a[4]),i=d?e(dk(h),oS):d;return i}}}return 0},w),G=F[2],ad=F[1],l=G?[0,K(0,T(fa(cn(fc,cn(fb(oV),[0,[1,oU,0,0,ad],0]))),fp)),G,0]:[0,0,w,0];var
x=l[1],aH=l[3],aI=l[2],N=[0,0],aG=0,aF=[0,rv,[0,fO(r8,h),[0,fL,0]]],ak=function(v,q,j,p,o){function
a(w){var
f=w[1][1],z=[0,[1,v,q,j,p],o];function
i(p){var
a=p;for(;;){if(a){var
c=a[1];if(0!==c[0]){var
j=a[2],g=c[4],h=c[3],k=c[2],l=c[1],m=dI(h);if(m){var
n=m[1],q=n[2];if(e(n[1][1],f)){var
o=i(j);return[0,[0,[0,q,[0,l,k,h,g]],o[1]],o[2]]}return[0,0,a]}var
b=fD(aF,l,k,h,g);if(typeof
b==="number")switch(b){case
0:var
d=0;break;case
1:var
d=[0,g];break;default:var
d=pL}else
var
d=0===b[0]?[0,[0,b[1],0]]:[0,b[1]];if(d){var
a=y(d[1],j);continue}return[0,0,a]}}return[0,0,a]}}var
c=i(z),b=c[1],A=c[2];function
g(k,j){var
a=k,b=j;for(;;){if(b){var
e=b[1],f=e[2],d=e[1],l=b[2];if(a){var
h=a[1],c=h[1],m=a[2],n=h[2];if(c<d){var
o=d===(c+1|0)?0:[0,[0,c+1|0,fG(f),0],0],i=g(o,b),p=i[2],a=[0,[0,c,n,C(i[1])],m],b=p;continue}if(d<c)return[0,a,b]}var
a=[0,[0,d,f,0],a],b=l;continue}return[0,a,0]}}if(b)var
d=b[1],m=d[2],n=1===d[1]?0:[0,[0,1,fG(m),0],0],k=C(g(n,b)[1]);else
var
k=0;var
s=N[1],B=0;function
t(a){var
b=a[3];return at(function(a){var
c=a[2][1],b=e(a[1][1],qp),d=b?bt(c,qq):b;return d},b)}function
h(a){if(a){var
b=a[1];if(a[2])return[0,b+1|0,a[2]]}return a}function
u(a,b,e){var
c=aX(a);if(c===b)return[0,a,0,h(a)];if(b<c){var
d=dy(c-b|0,a),f=e?[0,a]:0;return[0,d,f,h(d)]}return qr}function
a(b,i,h,g){if(b){var
c=b[1],j=c[2],k=c[1],v=b[2],w=c[3],d=function(l){var
c=t(j),a=[0,h,i],d=k+1|0;if(g)return u(g[1],d,c);if(c){try{var
b=bb(f,s)}catch(b){b=D(b);if(b===r)return[0,a,0,a];throw b}var
e=dy(aX(b)-d|0,b);return[0,e,[0,b],e]}return[0,a,0,a]}(0),e=d[3],l=d[1],x=d[2],y=e?e[1]:h,m=a(w,e,1,x),n=m[2],z=m[1],o=a(v,i,y+1|0,0),p=o[2],A=o[1];if(0!==p)var
q=p;else
var
B=0!==n?n:l,q=B;return[0,[0,[0,k,j,z,l],A],q]}return qs}var
l=a(k,qt,1,B),E=l[1];N[1]=[0,[0,f,l[2]],s];return[0,y(fH(x,f,E),A)]}return K(0,T(dI(j),a))},aK=fE(0,r6,[0,pK,[0,px,[0,[0,function(a,d,c,b){return e(a,qE)},ak],aG]]],aI),ax=[0,fL,[0,rn,0]],av=c(t[37],r3),aw=function(f,b,a,e){var
c=dK(b),d=fQ(h,r5,r4,a);if(c===b&&d===a)return 0;return[0,[1,f,c,d,e]]},ay=[0,[0,function(a,e,c,b){return d(t[3],a,av)},aw],ax],au=function(f,b,a,e){var
c=dK(b),d=fQ(h,r1,r0,a);if(c===b&&d===a)return 0;return[0,[1,f,c,d,e]]},az=[0,[0,function(a,d,c,b){return e(a,r2)},au],ay],as=function(g,b,a,f){var
c=dK(b),e=U(function(a){var
b=a[1][1],c=a[2][1];return h?dJ(1,b,c):d(t[3],b,fP)},a);if(c===b&&e===a)return 0;return[0,[1,g,c,e,f]]},aA=[0,rY,[0,[0,function(a,d,c,b){return e(a,rZ)},as],az]],ar=function(d,c,b,a){return a?1:2},aB=[0,[0,function(a,g,f,e){if(h)return 0;var
b=c(t[37],W);return d(t[3],a,b)},ar],aA],aC=[0,q5,[0,q1,[0,fO(r7,h),aB]]],aq=function(d,c,b,a){return at(function(b){if(0===b[0]){var
a=b[1][1];if(a&&!f(a[1],rc)&&!a[2])return 1}return 0},x)?[0,[1,d,U(function(a){var
c=a[2],b=e(a[1],rd),d=b?e(c,re):b;return 1-d},c),b,a]]:1},aD=[0,[0,function(d,a,c,b){return h?at(function(a){var
c=a[2],b=e(a[1],ra),d=b?e(c,rb):b;return d},a):0},aq],aC],ao=h?fK:q9,ap=function(g,a,f,c){var
b=U(function(c){var
a=c[1],i=c[2],f=fJ(a);if(f)var
g=f;else
var
b=e(a,q_),h=b?e(i,q$):b,g=h||d(t[3],a,ao);return 1-g},a);return a===b?0:[0,[1,g,b,f,c]]},v=[0,0],aE=[0,lx,[0,lq,[0,[0,function(d,a,c,b){return 0!==a?1:0},ap],aD]]],am=0,al=function(i,d,h,b){var
e=[P,function(f){function
e(j){var
c=j[2],e=v[1];try{var
f=bb(c,e)}catch(a){a=D(a);if(a===r){v[1]=[0,[0,c,aX(b)],e];return 0}throw a}v[1]=[0,[0,c,f+aX(b)|0],e];return[0,[1,i,[0,[0,qH,a(g+(f+1|0))],d],h,b]]}return K(0,T(c(bc(qI),d),e))}];function
f(a){return 0}return e5(e,T(c(bc(qJ),d),f))},an=ct(fE(qL,[0,[0,function(a,d,c,b){return e(a,qK)},al],aE],am,aK)),O=h?ba(rR,x,0):0,aL=h?dw(function(a){var
b=a[2];return e(a[1][1],r9)?[0,[0,r_,bC(b)]]:0},aH):0,H=0===O?0:[0,[1,o0,0,0,[0,[0,ai(l7,ag(lU,O))],0]],0],I=[0,oW,0],J=0===I?1:0,ah=J?0===H?1:0:J,aj=ah?0:[0,[1,oZ,0,0,y(I,H)],0],R=p(X),aa=fr(0,[0,[1,oY,0,0,y(aj,[0,[1,oX,aL,0,an],0])],0]),z=1<=R?R:1,A=by<z?by:z,B=L(A),b=[0,B,0,A,B];kD(dt,1,function(i){var
c=p(i),h=b[2]+c|0;if(b[3]<h){var
e=b[2],a=[0,b[3]];for(;;){if(a[1]<(e+c|0)){a[1]=2*a[1]|0;continue}if(by<a[1])if((e+c|0)<=by)a[1]=by;else
eD(h4);var
f=L(a[1]),d=b[2],g=b[1],j=0;if(0<=d&&!((af(g)-d|0)<0)&&!((af(f)-d|0)<0)){aU(g,0,f,0,d);j=1}if(!j)M(hx);b[1]=f;b[3]=a[1];if(!((b[2]+c|0)<=b[3]))throw[0,q,h3];if(!((e+c|0)<=b[3]))throw[0,q,h2];break}}a9(i,0,b[1],b[2],c);b[2]=h;return 0},aa);return ey(di(b[1],0,b[2]))}}var
fZ=function(a,b){return{"cleanDocument":sY(a)}}(sk,sh);function
sl(c,b){var
a=fW("tinymce.Resource.add");return a?a[1](c,b):sc.error("Unable to find Word Import registration API")}function
sm(a){return a(fZ)}if(fY)sm(fY[1]);else
sl(sn,fZ);hr(0);return}(function(){return this}()));
