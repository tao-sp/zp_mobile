
function change() {
    var e = document.querySelector(".inline-l"),
        t = document.querySelector(".inline-r"),
        n = document.querySelector(".inline-l-fa"),
        a = document.querySelector(".inline-l-st");
    t.onclick = function() {
        t.classList.add("act"),
            e.classList.remove("act"),
            n.style.display = "none",
            a.style.display = "block"
    },
        e.onclick = function() {
            e.classList.add("act"),
                t.classList.remove("act"),
                n.style.display = "block",
                a.style.display = "none"
        }
}
function change_btn(e, t, n, a) {
    var i = document.querySelector(e),
        o = document.querySelector(t),
        c = document.querySelector(n),
        s = document.querySelector(a);
    o.onclick = function() {
        o.classList.add("act"),
            i.classList.remove("act"),
            c.style.display = "none",
            s.style.display = "block"
    },
        i.onclick = function() {
            i.classList.add("act"),
                o.classList.remove("act"),
                c.style.display = "block",
                s.style.display = "none"
        }
}
function hover(e) {
    $(e).click(function() {
        $(this).addClass("nav-act").siblings().removeClass("nav-act")
    })
}
function leYu() {
    $(".big-mask").animate({
            display: "none"
        },
        5e3,
        function() {
            $(".big-mask").fadeIn()
        }),
        $(".mask-close").click(function(e) {
            $(".big-mask").fadeOut(function() {
                $(".big-mask").animate({
                        display: "none"
                    },
                    25e3,
                    function() {
                        $(".big-mask").fadeIn()
                    })
            })
        })
}
function backTop(e) {
    e.click(function() {
        $("body,html").animate({
                scrollTop: 0
            },
            500)
    })
}
function jump_anchor(e, t, n) {
    var a = $(n).height();
    $(e).click(function() {
        return $("html, body").animate({
                scrollTop: $(t).offset().top - a + "px"
            },
            {
                duration: 500,
                easing: "swing"
            }),
            !1
    })
}
function layerPub(e, t, n) {
    setTimeout(function() {
            $(e).fadeIn(450)
        },
        t),
        $(n).click(function() {
            $(e).fadeOut(450)
        })
}
function formLayer(e, t) {
    $(e).fadeIn(400),
        $(t).click(function() {
            $(e).fadeOut(400)
        })
}
function colorFun(e, t, n) {
    var a = 0;
    setInterval(function() {
            a % 2 == 0 ? $(e).addClass(t) : $(e).removeClass(t),
                a++
        },
        n)
}
function selectFun(e, t, n) {
    $(e).change(function() {
        $(this).val() == $(this).find("option:first").val() ? $(this).css("color", t) : $(this).css("color", n)
    })
}
function urlSaveVal(e, t) {
    var n = window.location.href.split("?")[1];
    n = void 0 == n ? "": "?" + n,
        $(e).attr("href", t + n)
}
function startmarquee(e, t, n, a) {
    function i() {
        c = setInterval(o, t),
        s || (l.scrollTop += 1)
    }
    function o() {
        l.scrollTop % e != 0 ? (l.scrollTop += 1, l.scrollTop >= l.scrollHeight / 2 && (l.scrollTop = 0)) : (clearInterval(c), setTimeout(i, n))
    }
    var c, s = !1,
        l = document.getElementById("marqueebox" + a);
    l.innerHTML += l.innerHTML,
        l.onmouseover = function() {
            s = !0
        },
        l.onmouseout = function() {
            s = !1
        },
        l.scrollTop = 0,
        setTimeout(i, n)
}
function tab_height(e, t, n, a) {
    $(e).click(function() {
        var e = $(this).css("height"),
            i = parseInt(e),
            o = $(this).index(),
            c = parseInt(t);
        $(this).animate({
                marginTop: i - c + "px",
                height: c + "px",
                lineHeight: c + "px"
            },
            200).css({
            backgroundColor: "#fff",
            color: "#333"
        }).siblings().animate({
                marginTop: "0px",
                height: i + "px",
                lineHeight: i + "px",
                backgroundColor: "#FCA659",
                color: "#fff"
            },
            200).css({
            backgroundColor: a,
            color: "#fff"
        }),
            $(n).eq(o).css("display", "block").siblings(".kc-main").css("display", "none")
    })
}
function tab(e, t, n, a) {
    $(e).click(function() {
        var e = $(this).index();
        $(this).addClass(n).siblings().removeClass(n),
            $(t).eq(e).removeClass(a).siblings().addClass(a)
    })
}