var app = {
    menuControl : $('#menuContorl'),
    showMenu: function () {
        app.menuControl.addClass('on')
    },
    hideMenu: function () {
        app.menuControl.removeClass('on')
    }
}