;(function($){
    $.fn.moveShade = function(options){
        var anglePoint,w,h;
        this.each(function(){
            var $shade = $(options,$(this));
            this.addEventListener('mouseenter',function(e){
                w = this.clientWidth/2;
                h = this.clientHeight/2;
                anglePoint = Math.atan(w / h) * 180 /Math.PI;
                var direct = getDirection(e || event);
                switch (direct) {
                    case 'down':
                        $shade.css({left: '0px', top: '100%'}).stop(true, true).animate({top: '0px'}, 'fast');
                        break;
                    case 'up':
                        $shade.css({left: '0px', top: '-100%'}).stop(true, true).animate({top: '0px'}, 'fast')
                        break;
                    case 'right':
                        $shade.css({left: '100%', top: '0px'}).stop(true, true).animate({left: '0px'}, 'fast');
                        break;
                    case 'left':
                        $shade.css({left: '-100%', top: '0px'}).stop(true, true).animate({left: '0px'}, 'fast')
                        break;
                }
            })
            this.addEventListener('mouseleave',function(e){
                var direct = getDirection(e || event);
                switch (direct) {
                    case 'down':
                        $shade.stop(true, true).animate({top: '100%'}, 'fast');
                        break;
                    case 'up':
                        $shade.stop(true, true).animate({top: '-100%'}, 'fast')
                        break;
                    case 'right':
                        $shade.stop(true, true).animate({left: '100%'}, 'fast');
                        break;
                    case 'left':
                        $shade.stop(true, true).animate({left: '-100%'}, 'fast');
                        break;
                }
            })
        });
        var getDirection = function (event) {
            var direct,
                x = event.offsetX,
                y = event.offsetY,
                angle = Math.atan((x - w) /- (y - h)) * 180 / Math.PI;
            if(angle <= anglePoint && angle >= -anglePoint){
                if(y > h){
                    direct = 'down';
                }else{
                    direct = 'up';
                }
            }else if(x > w){
                direct = 'right';
            }else{
                direct = 'left';
            }
            return direct;
        }
        return this;
    }
})(jQuery)
//调用方式
document.oncopy = function(){
    return false;
};
document.onmousedown = function(e){
    if ( e.which == 2 ){// 鼠标滚轮的按下，滚动不触发
        return false;
    }
    if( e.which==3 ){// 鼠标右键
        return false;
    }
};