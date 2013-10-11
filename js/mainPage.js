var mainPage;
if( !mainPage ) {
    mainPage = {};
}

mainPage.application = (function()
{
    var application = {},

    //variables
    tabLeft,
    firstClick,

    //elements
    mainContainer,
    headerBar,
    coverInner,
    leftSlider,
    rightSlider,

    //functions
    resizeView,
    getParentByClassName,
    initializeSliders;
      
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
        } else if( getParentByClassName( target, "project_link" ) ) {
            e.stopPropagation();

        } else {
            parentSlider = getParentByClassName( target, "slide" );
            if( parentSlider ) {
                if( parentSlider === leftSlider ) {
                    dom.HTML.removeClass( leftSlider, "animate" );
                } else if( parentSlider === rightSlider ) {
                    dom.HTML.removeClass( rightSlider, "animate" );
                }
                dom.HTML.removeClass( coverInner, "show_slider" );
            }
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

        var availableHeight = window.innerHeight,
            bodyHeight = bodyContainer.offsetHeight,
            bodyWidth = bodyContainer.offsetWidth;
            tabLeft = bodyWidth;

        leftSlider.style.width = bodyWidth + 'px';
        rightSlider.style.width = bodyWidth + 'px';

        //TODO change the inner html of elements that require it when size is too large or small
    };
    
    initializeSliders = function() {

        var bodyWidth = bodyContainer.offsetWidth;

        console.log( "initializing sliders" );

        rightSlider.style.display = "block";
        rightSlider.style.width = bodyWidth + 'px';

        leftSlider.style.display = "block";
        leftSlider.style.width = bodyWidth + 'px';

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

        firstClick = true;

        window.onclick = onClick;
        window.onresize = resizeView;
        resizeView();

        window.setTimeout( function() {
            initializeSliders();
        }, 500);
    };

    return application;
}());

var $ = function( elementID )
{
    return document.getElementById( elementID );
};

// This line starts the application
window.addEventListener( "DOMContentLoaded", mainPage.application.initialize, true )