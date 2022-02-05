/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"readable-stream";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-error@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherit@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-property@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-accessor@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-write-accessor@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/buffer-from-string@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-next-tick@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import b from"debug";var v={objectMode:!1,encoding:null,sep:"\n",copy:!0,siter:1e308,normalized:!1},y=h,_=l,w=g.isPrimitive,x=c.isPrimitive,M=u.isPrimitive,O=j.isPrimitive,E=f.isPrimitive;var z=function(e,t){return y(t)?_(t,"sep")&&(e.sep=t.sep,!M(e.sep))?new TypeError("invalid option. `sep` option must be a primitive string. Option: `"+e.sep+"`."):_(t,"objectMode")&&(e.objectMode=t.objectMode,!w(e.objectMode))?new TypeError("invalid option. `objectMode` option must be a primitive boolean. Option: `"+e.objectMode+"`."):_(t,"encoding")&&(e.encoding=t.encoding,!M(e.encoding)&&null!==e.encoding)?new TypeError("invalid option. `encoding` option must be a primitive string or null. Option: `"+e.encoding+"`."):_(t,"highWaterMark")&&(e.highWaterMark=t.highWaterMark,!x(e.highWaterMark))?new TypeError("invalid option. `highWaterMark` option must be a nonnegative number. Option: `"+e.highWaterMark+"`."):_(t,"iter")&&(e.iter=t.iter,!E(e.iter))?new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+e.iter+"`."):_(t,"siter")&&(e.siter=t.siter,!O(e.siter))?new TypeError("invalid option. `siter` option must be a positive integer. Option: `"+e.siter+"`."):_(t,"normalized")&&(e.normalized=t.normalized,!w(e.normalized))?new TypeError("invalid option. `normalized` option must be a primitive boolean. Option: `"+e.normalized+"`."):(_(t,"seed")&&(e.seed=t.seed),_(t,"state")&&(e.state=t.state),_(t,"copy")&&(e.copy=t.copy),null):new TypeError("invalid argument. Options must be an object. Value: `"+t+"`.")},T=b("random:streams:minstd-shuffle"),k=t.Readable,L=i,W=r,P=s,S=n,V=e,C=o,J=d,N=m.factory,A=p,F=a,G=v,I=z,R=T;function q(e){var t,i,r;if(!(this instanceof q))return arguments.length>0?new q(e):new q;if(i=W(G),arguments.length>0&&(r=I(i,e)))throw r;return R("Creating a readable stream configured with the following options: %s.",JSON.stringify(i)),k.call(this,i),S(this,"_destroyed",!1),V(this,"_objectMode",i.objectMode),V(this,"_sep",i.sep),V(this,"_iter",i.iter),V(this,"_siter",i.siter),S(this,"_i",0),t=N(i),i.normalized&&(t=t.normalized),V(this,"_prng",t),this}P(q,k),C(q.prototype,"seed",(function(){return this._prng.seed})),C(q.prototype,"seedLength",(function(){return this._prng.seedLength})),J(q.prototype,"state",(function(){return this._prng.state}),(function(e){this._prng.state=e})),C(q.prototype,"stateLength",(function(){return this._prng.stateLength})),C(q.prototype,"byteLength",(function(){return this._prng.byteLength})),V(q.prototype,"_read",(function(){var e,t;if(!this._destroyed)for(e=!0;e;){if(this._i+=1,this._i>this._iter)return R("Finished generating pseudorandom numbers."),this.push(null);t=this._prng(),R("Generated a new pseudorandom number. Value: %d. Iter: %d.",t,this._i),!1===this._objectMode&&(t=t.toString(),t=1===this._i?A(t):A(this._sep+t)),e=this.push(t),this._i%this._siter==0&&this.emit("state",this.state)}})),V(q.prototype,"destroy",(function(e){var t;return this._destroyed?(R("Attempted to destroy an already destroyed stream."),this):(t=this,this._destroyed=!0,F((function(){e&&(R("Stream was destroyed due to an error. Error: %s.",L(e)?e.message:JSON.stringify(e)),t.emit("error",e));R("Closing the stream..."),t.emit("close")})),this)}));var B=h,D=r,H=q;var K=r,Q=q;var U=e,X=q,Y=function(e){var t;return t=arguments.length>0?K(e,1):{},i;function i(){return new Q(t)}};U(X,"objectMode",(function(e){var t;if(arguments.length>0){if(!B(t=e))throw new TypeError("invalid argument. Options must be an object. Value: `"+t+"`.");t=D(e,1)}else t={};return t.objectMode=!0,new H(t)})),U(X,"factory",Y);var Z=X;export{Z as default};
//# sourceMappingURL=index.mjs.map
