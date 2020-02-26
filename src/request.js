var Request = {};
Request.host = "";
// Get
Request.Get = function (serverName, datas, succ, erro, comp, isAsync) {
    var async = true
    if (typeof isAsync == 'boolean') {
        async = isAsync
    }
    $.ajax({
        url: Request.host + serverName,
        type: 'GET',
        beforeSend: function (request) {
            request.setRequestHeader("Authorization", 'bearer ' + localStorage.getItem("token"));
        },
        dataType: 'json',
        data: datas,
        async: async,
        success: function (res) {
            succ(res)
        },
        error: function (err) {
            if (err.status == "401") {
                localStorage.setItem("token", '');
            } else {
                erro(err);
            }
        },
        complete: function (com) {
            if (typeof comp == 'function') comp();
        },
        timeout: 10000
    });
}
// Post
Request.Post = function (serverName, datas, succ, erro, comp, isAsync) {
    var async = true
    if (typeof isAsync == 'boolean') {
        async = isAsync
    }
    $.ajax({
        url: Request.host + serverName,
        type: 'POST',
        beforeSend: function (request) {
            request.setRequestHeader("Authorization", 'bearer ' + localStorage.getItem("token"));
        },
        dataType: 'json',
        data: datas,
        async: async,
        success: function (res) {
            succ(res)
        },
        error: function (err) {
            if (err.status == "401") {
                localStorage.setItem("token", '');
            } else {
                erro(err);
            }
        },
        complete: function (com) {
            if (typeof comp == 'function') comp();
        },
        timeout: 10000
    });
}
// 批量Post
Request.PostA = function (serverName, datas, succ, erro, comp, isAsync) {
    var async = true
    if (typeof isAsync == 'boolean') {
        async = isAsync
    }
    $.ajax({
        url: Request.host + serverName,
        type: 'POST',
        beforeSend: function (request) {
            request.setRequestHeader("Authorization", 'bearer ' + localStorage.getItem("token"));
        },
        dataType: 'json',
        data: datas,
        contentType: "application/json",
        async: async,
        success: function (res) {
            succ(res)
        },
        error: function (err) {
            if (err.status == "401") {
                localStorage.setItem("token", '');
            } else {
                erro(err);
            }
        },
        complete: function (com) {
            if (typeof comp == 'function') comp();
        },
        timeout: 10000
    });
}
// 修改
Request.Put = function (serverName, datas, succ, erro, comp, isAsync) {
    var async = true
    if (typeof isAsync == 'boolean') {
        async = isAsync
    }
    $.ajax({
        url: Request.host + serverName,
        type: 'PUT',
        beforeSend: function (request) {
            request.setRequestHeader("Authorization", 'bearer ' + localStorage.getItem("token"));
        },
        dataType: 'json',
        data: datas,
        async: async,
        success: function (res) {
            succ(res)
        },
        error: function (err) {
            if (err.status == "401") {
                localStorage.setItem("token", '');
            } else {
                erro(err);
            }
        },
        complete: function (com) {
            if (typeof comp == 'function') comp();
        },
        timeout: 10000
    });
}
// 删除
Request.Delete = function (serverName, datas, succ, erro, comp, isAsync) {
    var async = true
    if (typeof isAsync == 'boolean') {
        async = isAsync
    }
    $.ajax({
        url: Request.host + serverName,
        type: 'DELETE',
        beforeSend: function (request) {
            request.setRequestHeader("Authorization", 'bearer ' + localStorage.getItem("token"));
        },
        dataType: 'json',
        data: JSON.stringify(datas),
        async: async,
        success: function (res) {
            succ(res)
        },
        error: function (err) {
            if (err.status == "401") {
                localStorage.setItem("token", '');
            } else {
                erro(err);
            }
        },
        complete: function (com) {
            if (typeof comp == 'function') comp();
        },
        timeout: 10000
    });
}
// 微信分享
Request.SetShare = function () {
    var memLoginId = localStorage.getItem("MemLoginId");
    if (memLoginId && memLoginId != '' && memLoginId != null) {
        var Title;
        var ImgUrl;
        var HttpUrl;
        var Desc;
        var UserId;
        var AppId;
        var Timestamp;
        var Noncestr;
        var Signature;
        var shareURL = location.href;
        UserId = localStorage.getItem('MemLoginId');
        shareURL = shareURL.replace('#/', '')
        Request.post('api/WxViews_GetWxShare', {
            "MemLoginId": UserId,
            "CurrentHttpUrl": shareURL
        }, function (d) {
            var data = d;
            AppId = data.AppId;
            Timestamp = data.Timestamp;
            Noncestr = data.Noncestr;
            Signature = data.Signature;
            Title = '标题';
            ImgUrl = Request.host + 'wxviews/img/logo.png';
            Desc = '描述文字';
            HttpUrl = Request.host + 'wxviews/?fatherId=' + UserId;
            var isSetScanQRCode = false;
            var JsApiList = ['onMenuShareTimeline', 'onMenuShareAppMessage']
            isSetScanQRCode = true;
            JsApiList = ['checkJsApi', 'scanQRCode', 'onMenuShareTimeline', 'onMenuShareAppMessage']
            wx.config({
                debug: false,
                appId: AppId,
                timestamp: Timestamp,
                nonceStr: Noncestr,
                signature: Signature,
                jsApiList: ['checkJsApi', 'scanQRCode', 'onMenuShareTimeline', 'onMenuShareAppMessage']
            });

            wx.error(function (res) {
            });
            wx.ready(function () {
                if (isSetScanQRCode) {

                }
                wx.onMenuShareTimeline({
                    title: Title, // 分享标题
                    link: HttpUrl, // 分享链接
                    imgUrl: ImgUrl, // 分享图标
                    success: function (res) {
                    },
                    cancel: function () {
                    }
                });
                wx.onMenuShareAppMessage({
                    title: Title, // 分享标题
                    desc: Desc, // 分享描述
                    link: HttpUrl, // 分享链接,
                    imgUrl: ImgUrl, // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
            });
            function onBridgeReady() {
                if (UserId == null || UserId == undefined || UserId == '') {
                    WeixinJSBridge.call('hideOptionMenu');
                } else {
                    WeixinJSBridge.call('showOptionMenu');
                }
            }
            if (typeof WeixinJSBridge == "undefined") {
                if (document.addEventListener) {
                    document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
                } else if (document.attachEvent) {
                    document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
                    document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
                }
            } else {
                onBridgeReady();
            }
        },
            function (err) { })
    }
}
Request.Deletes = function(serverName, data, success, error) {
    $.ajax({
        url: Request.host + serverName,
        beforeSend: function(request) {
            request.setRequestHeader("Authorization", 'bearer ' + localStorage.getItem("token"));
        },
        data: JSON.stringify(data),
        dataType:"json",
        type: 'DELETE',
        contentType:"application/json",
        success: function(data) {
            $('.loading').remove()
            success(data)
        },
        error: function(data) {
            $('.loading').remove()
            error(data)
            console.log("serverName",serverName)
        }
    });
}