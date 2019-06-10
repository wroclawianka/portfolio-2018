let $box = $(".box");

// set grayed layer on box hover
$box.hover(
    function () {
        $(".box-description", this).addClass("visible");
    },
    function () {
        $(".box-description", this).removeClass("visible")
    }
);
