//轮播图构造
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
//tab切换构造
var TabChange = function (selector) {
    this.handover = selector.find('ul')
    this.list = this.handover.find('li')
    this.index = 1;
    this.text = selector.find('.textBOx')
    this.len = this.list.length;

    if (this.len === 0) return
    if (this.len === 1) {
        this.index = 0;
        this.move(this.index)
        return
    }
}
TabChange.prototype.point = function (index) {
    this.list.eq(index).addClass('act').siblings().removeClass('act')
    this.text.html(this.list.eq(index).find('.text').html())
}

TabChange.prototype.move = function (index) {
    this.handover.css('transform', 'translate3d(' + (index - 1) * -33.33 + 'vw,0,0)')
    this.point(index)
}
TabChange.prototype.init = function () {
    var self = this
    this.point(this.index)
    this.handover.swipeLeft(function () {
        var len = self.len
        var index = self.index
        self.index = index == len - 1 ? len - 1 : index + 1
        self.move(self.index)
    })
    this.handover.swipeRight(function () {
        self.index = self.index == 0 ? 0 : self.index - 1
        self.move(self.index)
    })
}
$(function () {
    //全屏滑动
    var pageIndex = 0;
    var len = $('.page').length;
    var container = $('.container');
    var sliderTo = function (index) {
        container.css('transform', 'translate3d(0,-' + index * 100 + 'vh,0)')
    }

    container.swipeUp(function () {
        pageIndex = pageIndex == len - 1 ? len - 1 : pageIndex + 1;
        sliderTo(pageIndex)
    })
    container.swipeDown(function () {
        pageIndex = pageIndex == 0 ? 0 : pageIndex - 1;
        sliderTo(pageIndex)
    })
    //导航
    var nav = $('.nav')
    window.openNav = function (bool) {
        nav[bool ? 'removeClass' : 'addClass']('none')
    }
    window.backTop = function () {
        pageIndex = 0;
        sliderTo(pageIndex)
    }
})

$(function () {
    //轮播图
    new Slider($('.page-home .slider')).init()
    new Slider($('.huodong .slider')).init()
    //行业专家
    new TabChange($('.zhuanjia')).init()
    new TabChange($('.jiuye')).init()
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
