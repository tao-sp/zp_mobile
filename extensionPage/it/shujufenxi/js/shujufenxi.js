var nav = document.querySelector('.nav');
window.openNav = function (bool) {
    nav.className = bool ? 'nav' : 'nav none'
}

var Slider = function (selector) {
    this.box = selector
    this.wrap = this.box.find('ul')
    this.len = this.wrap.find('li').length
    this.index = 0;
}
Slider.prototype.init = function () {
    var self = this
    this.createDots()
    if (this.len < 2) {
        return
    }
    this.box.swipeLeft(function () {
        self.index = (self.index + 1) % self.len
        self.move(self.index)
    })
    this.box.swipeRight(function () {
        var index = self.index - 1
        self.index = index < 0 ? index + self.len : index
        self.move(self.index)
    })
}
Slider.prototype.move = function (index) {
    this.wrap.css('transform', 'translate3d(-' + index * 100 + 'vw,0,0)')
    if (this.dots) {
        this.dots.eq(index).addClass('act').siblings().removeClass('act')
    }
}
Slider.prototype.createDots = function () {
    var dots = new Array(this.len).fill(0).map(function (v, i) {
        return '<span ' + (i === 0 ? 'class="act"' : '') + '>●</span>'
    }).join("")
    var htm = '<div class="dots ">' + dots + '</div>'
    this.box.append(htm)
    this.dots = this.box.find('span')
}

$(function () {
    var index = 0;
    var tits = $('.cnt1 li')
    var cnts = $('.cnt1 dd')

    tits.eq(index).addClass('act')
    cnts.eq(index).show()
    tits.click(function () {
        $(this).addClass('act').siblings().removeClass('act')
        cnts.eq($(this).index()).show().siblings().hide()
    })
})
$(function () {
    $('.cnt8 li').click(function () {
        $(this).addClass('act').siblings().removeClass('act')
    })
    new Slider($('.slider')).init()
})
$(function () {
    //校区
    var titles = $('.xiaoqu .titles').find('li')
    var cnts = $('.xiaoqu .cnt').find('li')
    var index = 0;
    titles.eq(index).addClass('act')
    cnts.eq(index).removeClass('none')

    titles.click(function () {
        $(this).addClass('act').siblings().removeClass('act')
        cnts.eq($(this).index()).removeClass('none').siblings().addClass('none')
    })
})

