<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Quantile Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Fréchet][frechet-distribution] distribution [quantile function][quantile].

<section class="intro">

The [quantile function][quantile] for a [Fréchet][frechet-distribution] random variable is

<!-- <equation class="equation" label="eq:frechet_quantile" align="center" raw="Q\left( p; \alpha, s, m \right ) = m + s ( -\ln p )^{-\tfrac{1}{\alpha}}" alt="Quantile function for a Fréchet distribution."> -->

<div class="equation" align="center" data-raw-text="Q\left( p; \alpha, s, m \right ) = m + s ( -\ln p )^{-\tfrac{1}{\alpha}}" data-equation="eq:frechet_quantile">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/frechet/quantile/docs/img/equation_frechet_quantile.svg" alt="Quantile function for a Fréchet distribution.">
    <br>
</div>

<!-- </equation> -->

where `alpha > 0` is the shape, `s > 0` the scale, and `m` the location parameter.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-frechet-quantile
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats-base-dists-frechet-quantile' );
```

#### quantile( p, alpha, s, m )

Evaluates the [quantile function][quantile] for a [Fréchet][frechet-distribution] distribution with shape `alpha`, scale `s`, and location `m` at a probability `p`.

```javascript
var y = quantile( 0.8, 2.0, 3.0, 5.0 );
// returns ~11.351

y = quantile( 0.1, 1.0, 2.0, -4.0 );
// returns ~-3.131

y = quantile( 0.3, 2.0, 1.0, -1.0 );
// returns ~-0.089
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 2.0, 2.0, 0.0 );
// returns NaN

y = quantile( -0.1, 2.0, 2.0, 0.0 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 1.0, 1.0, 0.0 );
// returns NaN

y = quantile( 0.9, NaN, 1.0, 0.0 );
// returns NaN

y = quantile( 0.9, 1.0, NaN, 0.0);
// returns NaN

y = quantile( 0.9, 1.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.1, -0.1, 1.0, 1.0 );
// returns NaN

y = quantile( 0.1, 0.0, 1.0, 1.0 );
// returns NaN
```

If provided `s <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.3, 1.0, -1.0, 1.0 );
// returns NaN

y = quantile( 0.3, 1.0, 0.0, 1.0 );
// returns NaN
```

#### quantile.factory( alpha, s, m )

Returns a function for evaluating the [quantile function][quantile] of a [Fréchet][frechet-distribution] distribution with shape `alpha`, scale `s`, and location `m`.

```javascript
var myQuantile = quantile.factory( 3.0, 3.0, 5.0 );

var y = myQuantile( 0.7 );
// returns ~9.23

y = myQuantile( 0.2 );
// returns ~7.56
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var quantile = require( '@stdlib/stats-base-dists-frechet-quantile' );

var alpha;
var m;
var s;
var p;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    alpha = randu() * 10.0;
    p = randu();
    s = randu() * 10.0;
    m = randu() * 10.0;
    y = quantile( p, alpha, s, m );
    console.log( 'x: %d, α: %d, s: %d, m: %d, Q(p;α,s,m): %d', p.toFixed( 4 ), alpha.toFixed( 4 ), s.toFixed( 4 ), m.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-frechet-quantile.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-frechet-quantile

[test-image]: https://github.com/stdlib-js/stats-base-dists-frechet-quantile/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-frechet-quantile/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-frechet-quantile/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-frechet-quantile?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-frechet-quantile.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-frechet-quantile/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-frechet-quantile/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-frechet-quantile/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-frechet-quantile/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-frechet-quantile/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-frechet-quantile/main/LICENSE

[frechet-distribution]: https://en.wikipedia.org/wiki/Fr%C3%A9chet_distribution

[quantile]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
