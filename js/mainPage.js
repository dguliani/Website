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
    coverInner,
    leftSlider,
    rightSlider,

    //functions
    resizeView;
      
    onClick = function( e ) 
    {
        var target = e.target,
            parentSlider;

        if( dom.HTML.hasClass( target, "slider_button" ) ) {
            if( target.id === "left_button" ) {
                    dom.HTML.addClass( leftSlider, "animate" );
            } else if( target.id === "right_button" ) {
                    dom.HTML.addClass( rightSlider, "animate" );
            }
            dom.HTML.addClass( coverInner, "show_slider" ); 
        }
        parentSlider = getParentByClassName( target, "slide" );
        if( parentSlider ) {
            if( parentSlider === leftSlider ) {
                dom.HTML.removeClass( leftSlider, "animate" );
            } else if( parentSlider === rightSlider ) {
                dom.HTML.removeClass( rightSlider, "animate" );
            }
            dom.HTML.removeClass( coverInner, "show_slider" );
        }

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
        // need to resize the cover text container as well

        var availableHeight = window.innerHeight,
            bodyHeight = bodyContainer.offsetHeight,
            bodyWidth = bodyContainer.offsetWidth;
            tabLeft = bodyWidth;

    //    if( !dom.HTML.hasClass( leftSlider, 'animate' ) ) {
      //      leftSlider.style.left = '-' + tabLeft + 'px';    
        //}

        leftSlider.style.width = bodyWidth + 'px';
        rightSlider.style.width = bodyWidth + 'px';
        

       // mainContainer.style.minHeight = 100 + '%';
    };
    
    initializeSliders = function() {

        console.log( "initializing sliders" );

        rightSlider.style.display = "block";
        leftSlider.style.display = "block";
    };


    application.initialize = function()
    {
        mainContainer = $( 'main_container' );
        bodyContainer = $( 'body_container' );
        coverInner = $( 'cover_inner' );
        headerBar = $( 'header' );
        leftSlider = $( 'left_slider' );
        rightSlider = $( 'right_slider' );

        console.log( "initializing" );

        window.onclick = onClick;
        window.onresize = resizeView;
        resizeView();

        initializeSliders();

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