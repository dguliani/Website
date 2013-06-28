var mainPage;
if( !mainPage ) {
    mainPage = {};
}

mainPage.application = (function()
{
    var application = {},

    //values
    tabLeft,

    //elements
    mainContainer,
    headerBar,

    //functions
    resizeView;
      
    onClick = function( e ) 
    {
        var target = e.target;

        if( dom.HTML.hasClass( target, "slide" ) ) {
            if( dom.HTML.hasClass( target, "animate" ) ) {
                dom.HTML.removeClass( target, "animate" );
                target.style.left = '-' + tabLeft + 'px';
            } else {
                dom.HTML.addClass( target, "animate" );
                target.style.left = 0;
            }
        }

    };

  /*  getParentByClassName = function( element, className ) 
    {
        while( dom.HTML.hasClass( ))
    };*/
      
    resizeView = function( e ) {
        var availableHeight = window.innerHeight,
            bodyHeight = bodyContainer.offsetHeight,
            bodyWidth = bodyContainer.offsetWidth;
            tabLeft = bodyWidth - 20;

        testPage.style.left = '-' + tabLeft + 'px';
        //testPage.style.height = bodyHeight + 'px';
        testPage.style.width = bodyWidth + 'px';
        

       // mainContainer.style.minHeight = 100 + '%';
    };
    

    application.initialize = function()
    {
        mainContainer = $('main_container');
        bodyContainer = $( 'body_container' );
        headerBar = $('header');
        testPage = $( 'test_page' );

        console.log("initializing");

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
// It should be the last line in the last javascript file for this project

window.addEventListener( "DOMContentLoaded", mainPage.application.initialize, true )