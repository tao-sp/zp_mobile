var base = {
	el: null,
	show: function (opts) {
		if (this.el) {
			this.update(this.el, opts);
			return this.el.removeClass('hide').addClass('show')
		}
		var el = this.el = $('<div class="loading  flex center vcenter show"></div>');
		this.update(el, opts);
		$(document.body).append(el);
		document.ontouchmove = function () {
			return false
		}
		$('.ok').on('click', opts.ok || false);
		$('.cancel').on('click', opts.cancel || this.hide.bind(this))
	},
	hide: function () {
		$('.ok').off('click');
		$('.cancel').off('click')
		this.el.remove();
		this.el = null
		document.ontouchmove = null
	},
	update: function (el, opts) {
		var htm = '<div class="loading-cnt">';
		if (opts.type === 1) {
			var info = opts.msg ? '<div class="info">' + opts.msg + '</div>' : ''
			htm += '<h4>' + opts.text + '</h4>' + info +
				'<h3 class="flex around">' + '<a class="cancel">取消</a>' +
				'<a class="ok">' + opts.okText + '</a>' +
				'</h3>'
		} else {
			htm += '<h6 class="iconfont ' + opts.icon + '"></h6><div>' + opts.text + '</div>'
		}
		htm += '</div>';
		el.html(htm)
	}
};

$.loading = function (text) {
	base.show({
		icon: 'icon-loading',
		text: (text || '正在加载') + '...'
	})
};
$.success = function (text, icon, time, fn) {
	base.show({
		icon: icon || 'icon-chenggong',
		text: text || '操作成功!'
	})
	setTimeout(function () {
		base.hide()
		fn && fn()
	}, time || 1500)
};
$.comfirm = function (o) {
	o = o || {}
	base.show({
		type: 1,
		icon: 'icon-che',
		text: o.title || '是否执行该操作',
		ok: o.ok,
		cancel: o.cancel,
		okText: o.okText || '确定',
		msg: o.msg
	})
};
$.error = function (text, fn) {
	$.success(text, 'icon-jinggao', 2500, fn)
	return false
}

$.hide = base.hide.bind(base)

window.localStorage.sessionId = '63bed5a845d8957f12851b171a612e47'

$.fetch = function (URL, data = {}, isgoods = false) {
	console.error(data)
	const sessionId = window.localStorage.sessionId
	return new Promise((resolve, reject) => {
		$.ajax({
			type: 'POST',
			url: (isgoods ? 'http://120.78.94.141:8989/ksd_card/' : 'http://app.zhikaizaixian.com/ksd') + URL,
			data,
			contentType: 'application/json',
			dataType: 'json',
			headers: { sessionId },
			success(data, status, xhr) {
				console.log(data)
				if (data.status === 2000000 || data.code) {
					resolve(data.data)
				} else if (data.status === 5000103) {
					$.error('登录已过期，请重新登录', function () {
						//跳转
					})

				} else {
					$.error(data.message||data.msg)
				}
			},
			error(xhr, errorType, error) {
				console.error(error)
				$.error('网络错误！')
			}
		})
	})
}

$.getUrlParams = function () {
	let params = {}
	const _params = window.location.search.replace('?', '').split('&').forEach(v => {
		const kv = v.split('=')
		params[kv[0]] = kv[1]
	})
	return params
}
//路线规划函数

var drawRoute = (BMap, map, arr) => {
	var opts = {
		strokeColor: "red",
		strokeWeight: 12,
		strokeOpacity: 0.8,
		icons: [new BMap.IconSequence(
			new BMap.Symbol('M0 -5 L-5 -2 L0 -8 L5 -2 Z', {
				scale: 8 / 10,
				strokeWeight: 1,
				rotation: 0,
				fillColor: 'white',
				fillOpacity: 0.5,
				strokeColor: 'white'
			}), '100%', '8%', false)]
	}
	var icon = (path, y) => ({ icon: new BMap.Icon(path, new BMap.Size(34, 47)), offset: new BMap.Size(y, -25) })
	var qidian = icon("./images/qidian.png", 5)
	var zhongdian = icon("./images/zhongdian.png")
	map.clearOverlays()
	map.addOverlay(new BMap.Marker(arr[0], qidian));
	map.addOverlay(new BMap.Marker(arr[arr.length - 1], zhongdian));

	map.centerAndZoom(new BMap.Point(112.404, 39.915), 16);
	map.addOverlay(new BMap.Polyline(arr, opts));
	map.setViewport(arr)
}
