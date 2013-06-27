var mainPage;
if( !mainPage ) {
    mainPage = {};
}

mainPage.application = (function()
{
    var application = {},

    //elements
    mainContainer,
    headerBar,

    //functions
    resizeView;
      
    onClick = function( e ) 
    {
        var target = e.target
    }
      
    resizeView = function( e ) {
        var availableHeight = window.innerHeight;

        mainContainer.style.height = availableHeight - headerBar.offsetHeight + 'px';
    }
    

    application.initialize = function()
    {
        mainContainer = $('main_container');
        headerBar = $('header');

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