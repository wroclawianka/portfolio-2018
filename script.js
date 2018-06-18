let $box = $(".box");

// set background on init
setBackground();

// set background on resize
$(window).resize(function() {
    setBackground();
});

// set grayed layer on box hover
$box.hover(
    function() {
        $(".effects", this).addClass("on");
        $("div.description", this).addClass("visible");
    },
    function() {
        $(".effects", this).removeClass("on");
        $("div.description", this).removeClass("visible")
    }
);

function setBackground() {
    ((window.innerWidth / window.innerHeight) < 1.5) ?
    $box.addClass("narrow-screen"): $box.removeClass("narrow-screen");
}