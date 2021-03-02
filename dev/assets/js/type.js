document.addEventListener("DOMContentLoaded", function () {
    Typed.new(".main-title-wrap div", {
        strings: ["תקציב", "קצב", "זמן"],
        stringsElement: null,
        // typing speed
        typeSpeed: 90,
        // time before typing starts
        startDelay: 700,
        // backspacing speed
        backSpeed: 90,
        // time before backspacing
        backDelay: 1000,
        // loop
        loop: true,
        // false = infinite
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: "html"
    });
});
