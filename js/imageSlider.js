var dom;
if( !dom ) {
    dom = {};
}

dom.imageSlider = (function()
{
    var imageSlider = {},

    imageSlider.FADE    = 0,
    imageSlider.SLIDER  = 0;

    imageSlider.construct = function( images, effect )
    {
        var imageSliderInstance = {},

            //Functions
            populate,
            createSliderContext,

            //Elements
            sliderContext,
            mainImageView,

            //Variables
            imageMapping = {};


        createSliderContext = function() 
        {
            var sliderContext = dom.html.create( 'div', null, 'image-slider', null ),
                mainImageView = dom.html.create( 'div', null, 'largeImage-view', null ),
                thumbNailRow = dom.html.create( 'div', null, 'thumbNail-view', null );

            sliderContext.appendChild( mainImageView )
            sliderContext.appendChild( thumbNailRow );
        }


        populate = function()
        {
            var i,
                imageSource,
                thumbNailSource,
                largeImage,
                smallImage;

            createSliderContext();
            for( i = 0; i < images.length; i++ ) 
            {  
                imageSource = images[ i ];
                thumbNailSource = thumbnails[ i ];
                imageMapping.thumbNailSource = imageSource;

                largeImage = dom.html.create( 'div', null, 'slider-image', "<img src=\"" + imageSource + "\"/>" );
                smallImage = dom.html.create( 'div', null, 'sliderThumbnail-image', null "<img src=\"" + thumbNailSource + "\"/>" );

        }



        populate();

        return imageSliderInstance;
    }

    return imageSlider;
}());