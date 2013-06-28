var dom;
if( !dom ) {
	dom = {};
}

Object.create = function( baseObject )
{
	var NewObject = function() {};
	NewObject.prototype= baseObject;
	return new NewObject();
};

dom.HTML = ( function() {

	var HTML = Object.create( dom.XML );

	HTML.hasClass = function( element, className ) 
	{
		var currentClassName,
			splitClassName, 
			i;

		existingClassName = element.className || '';
		splitClassName = existingClassName.split( ' ' );
		for( i = splitClassName.length - 1; i >= 0; i-- ) {
			if( splitClassName[ i ] === className ){
				return true;
			}
		}
		return false;
	};

	HTML.addClass = function( element, className ) 
	{
		var currentClassName;
        
        if( HTML.hasClass( element, className ) ) {
            return;
        }
        currentClassName = element.className || '';
        element.className = currentClassName  + ' ' + className;

	};

	HTML.removeClass = function( element, className ) 
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

	return HTML;
}());