Tau.js
======

#### JavaScript Math Library ####

**Tau.js** provides `TAU`, a simpler alternative to `Math.PI`.

Read more about why `TAU` reduces complexity at [The Tau Manifesto](http://tauday.com/tau-manifesto) and have a look at the [example](http://egraether.com/Tau.js/).

### Usage: ###

## Global TAU ##

Download the [library](https://github.com/egraether/Tau.js/blob/master/Tau.js) and include it in your html.

```html
<script src="tau.js"></script>
```

`TAU` is compatible to all standard `Math` functions:

```javascript
var x = Math.cos( TAU );

console.log( x ); // result: 1
```

## AMD ##

__Tau.js__ can also be used via AMD.


```js
define( [ "path/to/TAU" ], function( TAU ) {

	// ...

} );
```

### Support ###

If you want to support **Tau.js**, leave a comment on the [support issue](https://github.com/egraether/Tau.js/issues/1) or contribute another example.
