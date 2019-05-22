let $box = $(".box");

// set background on init
setBackground();

// set background on resize
$(window).resize(function () {
    setBackground();
});

// set grayed layer on box hover
$box.hover(
    function () {
        $(".box-description", this).addClass("visible");
    },
    function () {
        $(".box-description", this).removeClass("visible")
    }
);

function setBackground() {
    ((window.innerWidth / window.innerHeight) < 1.5) ?
        $box.addClass("narrow-screen") : $box.removeClass("narrow-screen");
}