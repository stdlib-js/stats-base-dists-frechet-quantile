"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=o(function(g,q){
var u=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-pow/dist'),y=require('@stdlib/math-base-special-ln/dist');function x(e,r,t,n){return u(e)||u(r)||u(t)||u(n)||e<0||e>1||r<=0||t<=0?NaN:n+t*N(-y(e),-1/r)}q.exports=x
});var f=o(function(j,v){
var w=require('@stdlib/utils-constant-function/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-pow/dist'),l=require('@stdlib/math-base-special-ln/dist');function F(e,r,t){if(a(e)||a(r)||a(t)||e<=0||r<=0)return w(NaN);return n;function n(i){return a(i)||i<0||i>1?NaN:t+r*d(-l(i),-1/e)}}v.exports=F
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=c(),R=f();O(s,"factory",R);module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
