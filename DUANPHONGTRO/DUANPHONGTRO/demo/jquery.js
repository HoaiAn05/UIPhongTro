$(document).ready(function () {
    $('.home-product-pagination a').click(function (e) { 
        e.preventDefault();
        $(".home-product-pagination li").removeClass("pagination-item-active");
        $(this).parent().addClass("pagination-item-active");
    });

    $('.next').click(function () {
        $(".home-product-pagination li").removeClass("pagination-item-active");
        $(this).parent().addClass("pagination-item-active");
    });

    $(".prev").click(function() {
        current--;
        if(current < 0)
        current = num - 1;

        showSlider(current);
    });
});
