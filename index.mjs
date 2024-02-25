// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";function r(t,i,r,m){return s(t)||s(i)||s(r)||s(m)||t<0||t>1||i<=0||r<=0?NaN:m+r*e(-n(t),-1/i)}function m(t,r,m){return s(t)||s(r)||s(m)||t<=0||r<=0?i(NaN):function(i){if(s(i)||i<0||i>1)return NaN;return m+r*e(-n(i),-1/t)}}t(r,"factory",m);export{r as default,m as factory};
//# sourceMappingURL=index.mjs.map
