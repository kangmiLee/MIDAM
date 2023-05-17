function setSlide(slideIndex) {
    // slideIndex :: [1, 5]
    const slider = $('#mySlider');

    //clear old classes
    slider.removeClass('show-2 show-3 show-4 show-5');

    if (slideIndex > 1) {
        slider.addClass('show-' + slideIndex.toString());
    }
    
    // change button states
    $(".controller button").removeClass("on");
    $('#pageBtn-' + slideIndex.toString()).addClass("on");

    currentPage = slideIndex;
};

var currentPage = 1;

$(function(){
    //by time
    setInterval(function() {

        currentPage++;

        if (currentPage > 5) {
          currentPage = 1;
        }

        setSlide(currentPage);

      }, 3000);

    //by click
    for (let i = 1; i <= 5; i++) {

    $('#pageBtn-' + i.toString()).click(function(e) {
        e.preventDefault();
        setSlide(i);
    });

    }
});