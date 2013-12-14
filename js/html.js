var dom = dom || {};

dom.html = (function() {

	var HTML = {};

	html.hasClass = function( element, className ) 
	{
		var currentClassName,
			splitClassName, 
			i;

		currentClassName = element.className || '';
		splitClassName = currentClassName.split( ' ' );
		for( i = splitClassName.length - 1; i >= 0; i-- ) {
			if( splitClassName[ i ] === className ){
				return true;
			}
		}
		return false;
	};

	html.addClass = function( element, className ) 
	{
		var currentClassName;
        
        if( HTML.hasClass( element, className ) ) {
            return;
        }
        currentClassName = element.className || '';
        element.className = currentClassName  + ' ' + className;

	};

	html.removeClass = function( element, className ) 
	{
		var currentClassName,
			splitClassName,
			i;

			currentClassName = element.className || '';
			splitClassName = currentClassName.split ( ' ' );
			for( i = splitClassName.length - 1; i >= 0; i-- ) {
				if( splitClassName[ i ] === className ) {
					splitClassName.splice( i, 1 );
					element.className = splitClassName.join ( ' ' );
					return;
				}
			}
		
	};

	html.create = function( elementType, id, className, innerHTML )
	{
		var domElement = document.createElement( elementType );

		if( id ) {
			domElement.id = id;
		}
		if( className ) {
			domElement.className = id;
		}
		if( innerHTML ) {
			domElement.innerHTML = innerHTML;
		}

		return domElement;
	};

	return HTML;
}());