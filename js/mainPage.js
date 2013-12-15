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
    imageSlider,

    //functions
    resizeView,
    getParentByClassName,
    evaluatePortrait;

    application.isPortrait;
      
    onClick = function( e ) 
    {
       /* var target = e.target,
            popupInvoker;

        popupInvoker = dom.html.getParentByClassName( target,  'popup_invoker' );
        if( popupInvoker ) {

        } */

        //TODO handle future click events
    };
    
    evaluatePortrait = function( pageWidth ) {

        if( pageWidth < 700 ) {
            return true;
        } 
        return false;
    };

    resizeView = function( e ) {

        var availableHeight = window.innerHeight,
            bodyHeight = bodyContainer.offsetHeight,
            bodyWidth = bodyContainer.offsetWidth;
            tabLeft = bodyWidth;
    
        application.isPortrait = evaluatePortrait( bodyWidth );

        if( application.isPortrait ) {
            $( 'contact_line' ).innerHTML = "For more information, please see my ";
        } else {
             $( 'contact_line' ).innerHTML = "To learn about my qualifications and for my contact information, see my ";
        }

        //TODO change the number of images in the slider
        //TODO change the inner html of elements that require it when size is too large or small
    };

    application.initialize = function()
    {
        mainContainer = $( 'main_container' );
        bodyContainer = $( 'body_container' );
        coverInner = $( 'cover_inner' );
        imageSlider = $( 'sliderFrame' );

        $('overlay_hide').onclick = function( e ) {
            dom.html.removeClass( document.body, 'showOverlay' );
        }

        $( 'images_link').onclick = function( e ) {
            dom.html.addClass( document.body, 'showPopup' );
            e.stopPropagation();
        }

        $( 'popup_overlay' ).onclick = function( e ) {
            dom.html.removeClass( document.body, 'showPopup' );
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