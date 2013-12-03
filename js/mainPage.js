var mainPage;
if( !mainPage ) {
    mainPage = {};
}

mainPage.application = (function()
{
    var application = {},

    //variables
    tabLeft,

    //elements
    mainContainer,
    coverInner,

    //functions
    resizeView,
    getParentByClassName;
      
    onClick = function( e ) 
    {
        //TODO handle future click events
    };

    getParentByClassName = function( element, className ) 
    {
        while( !dom.HTML.hasClass( element, className ) && !dom.HTML.hasClass( element, "main_page" ) ) {
            element = element.parentElement;
        }
        if( dom.HTML.hasClass( element, className ) ) {
            return element;
        }
        return null; 
    };
      
    resizeView = function( e ) {

        var availableHeight = window.innerHeight,
            bodyHeight = bodyContainer.offsetHeight,
            bodyWidth = bodyContainer.offsetWidth;
            tabLeft = bodyWidth;

        //TODO change the inner html of elements that require it when size is too large or small
    };

    application.initialize = function()
    {
        mainContainer = $( 'main_container' );
        bodyContainer = $( 'body_container' );
        coverInner = $( 'cover_inner' );

        $('overlay_button').onclick = function( e ) {
            dom.HTML.removeClass( document.body, 'showOverlay' );
        }

        console.log( "initializing" );

        window.onclick = onClick;
        window.onresize = resizeView;
        resizeView();

    };

    return application;
}());

var $ = function( elementID )
{
    return document.getElementById( elementID );
};

// This line starts the application
window.addEventListener( "DOMContentLoaded", mainPage.application.initialize, true )