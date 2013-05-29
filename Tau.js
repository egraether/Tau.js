// Tau.js - https://github.com/egraether/Tau.js

( function() {

	var TAU = 2 * Math.PI;

	if ( typeof define === "function" && define.amd ) {

		define( function() {
			return TAU;
		} );

	} else {

		window.TAU = TAU;

	}

} )();