// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";var i=s,m=e,a=n;var d=r,o=s,l=e,p=n;var j=function(t,s,e,n){return i(t)||i(s)||i(e)||i(n)||t<0||t>1||s<=0||e<=0?NaN:n+e*m(-a(t),-1/s)},c=function(t,s,e){return o(t)||o(s)||o(e)||t<=0||s<=0?d(NaN):function(n){if(o(n)||n<0||n>1)return NaN;return e+s*l(-p(n),-1/t)}};t(j,"factory",c);var f=j;export{f as default,c as factory};
//# sourceMappingURL=index.mjs.map
