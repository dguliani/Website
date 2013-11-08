var projects;
if( !projects ) {
    projects = {};
}

projects.application = (function()
{
    var application = {};


    application.initialize = function()
    {
       console.log( 'initializing projects page' );
    };

    return application;
}());

var $ = function( elementID )
{
    return document.getElementById( elementID );
};

// This line starts the application
window.addEventListener( "DOMContentLoaded", projects.application.initialize, true )