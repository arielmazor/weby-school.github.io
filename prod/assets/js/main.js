function flip(i) {
    $(`.flip-front`).animate({
        opacity: 0,
    }, 100);
    $(`#item${i}.flip-back`).animate({
        opacity: 1,
    }, 100);
    $(`#item${i}.flip-back`).css("transform", "rotateY(" + 360 + "deg)");
    $(`.flip-front`).css("transform", "rotateY(" + 360 + "deg)");

}
function flipBack(i) {
    $(`#item${i}.flip-back`).animate({
        opacity: 0,
    }, 100);
    $(`.flip-front`).animate({
        opacity: 1,
    }, 100);
    $(`#item${i}.flip-back`).css("transform", "rotateY(" + 263 + "deg)");
    $(`.flip-front`).css("transform", "rotateY(" + 360 + "deg)");

}
function suggest(num, item) {
    $(`.sugg - wrap div`).removeClass('_active');
    $(`.pf - wrap.i`).removeClass('_active');
    $(`.sugg - wrap.i${num}`).addClass('_active');
    $(`.pf - wrap.${item}`).addClass('_active');
    $("._star").removeClass("active");
    $(`.star - wrapper.star${num}`).addClass("active");
}

$(`svg#img`).on('click', () => {
    $("html, body").animate({
        scrollTop: 906
    }, "slow");
})

function socials() {
    $(`.socials .wrap`).removeClass("active");
    if (!$(`.socials.first`).hasClass("hidden")) {
        $(`.socials .wrap#email`).addClass("active")
    } else {
        $(`.socials.menu .wrap#email`).addClass("active")
    }
    setTimeout(function () {
        $(`.socials .wrap#email .content`).on('click', () => {
            var copyText = document.getElementById("email");
            $(`.socials .wrap#email .content`).text("Copied to Your clipboard");
        })
    }, 0)
}

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    setTimeout(() => {
        $(`.socials .wrap#email`).removeClass("active");
    }, 500)
    setTimeout(() => {
        $(`.socials .wrap#email .content`).text("WebySchool@gmail.com");
    }, 1000)
}

$(document).click(function (event) {
    var $target = $(event.target);
    if (!$target.closest('#email').length && $('#email').hasClass("active")) {
        $(`.socials .wrap#email`).removeClass("active");
    }
    if (!$target.closest('nav').length && $('.menu-wrap').hasClass("open")) {
        menuOpen();
    }
    // if (!$target.closest('.menu-wrap').length && $('.menu-wrap').hasClass("open")) {
    //     $('.menu-wrap').removeClass("open");
    //     $('.menu-btn').removeClass("open");

    // }
});

// $(document).on('scroll', function () {

//     if ($(window).scrollTop() >= $('.what-i-teach').position().top - 1000) {
//         $(".img-leng img").addClass("fade-in-up");
//     }
// })
let _menuOpen = false;

function menuOpen() {
    if (!_menuOpen) {
        $(".menu-btn").addClass('open');
        $(`.menu-wrap`).addClass('open');
        $(`.first.socials`).addClass("hidden");
        _menuOpen = true;
    } else {
        $(".menu-btn").removeClass('open');
        $(`.menu-wrap`).removeClass('open');
        $(`.first.socials`).removeClass("hidden");
        _menuOpen = false;
    }
}


$(document).ready(function () {
    $(`.sugg - wrap.i1`).addClass('_active');
    $(`.pf - wrap.i1`).addClass('_active');
    $(`.star - wrapper.star1`).addClass("active");
    // if ($(window).scrollTop() >= $('.what-i-teach').position().top - 1000) {
    //     $(".img-leng img").addClass("fade-in-up");
    // }
});