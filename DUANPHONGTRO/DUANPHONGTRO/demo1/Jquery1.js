$(document).ready(function () {
    let num=$(".slider-content-left-top1 > a").length;
    let h = "";
    for (let i=0; i < num; i++)
    // h+= ` <button class="digit>${i+1}</button> `;

    // $(".slider-content-left-top-btn :first-child").after(h);

    $(".slider-content-left-top1 ").height($(".slider-content-left-top1 img").height());

    let showSlider = (current) => {
        $(".slider-content-left-top1 > a").hide();
        $(".slider-content-left-top1 > a").eq(current).show();
    }

    let current = -1;
    // $("button.digit").click(function() {

    //     current = parseInt($(this).text()) -1;

    //     showSlider(current);
    // });

    $(".next").click(function() {
        current++;
        if(current === num)
        current = 0;

        showSlider(current);
    });

    $(".prev").click(function() {
        current--;
        if(current < 0)
        current = num - 1;

        showSlider(current);
    });    
});