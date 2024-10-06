define( [
	"assets/js/jquery/src/var/whitespace"
], function( whitespace ) {

"use strict";

return new RegExp(
	"^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
	"g"
);

} );
