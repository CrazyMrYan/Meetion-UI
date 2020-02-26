$('#app').append(` <div class="M_Dialogue_Center">
<div class="M_Card" style="width: 400px;height: 200px;">
    <p class="M_P_Titile" style="margin-top: 20px;">
        <span style="color: skyblue;font-weight: 700;">|</span>
        确认操作
    </p>
    <div style="padding: 0 20px;box-sizing: border-box;width: 100%;height: 80px;">
        <h2 style="line-height: 60px;">确定退出登录吗？</h2>
    </div>
    <div class="Flex">
        <div style="width: 100%;" class="Flex Dialogue_C">
            <button class="M_Btn_Default M_Affirm" style="font-size: 16px;flex: 1;margin-right: 15px;">
                确定
            </button>
            <button class="M_Btn_Warning M_Cancel" style="font-size: 16px;flex: 1;margin-left: 15px;">
                取消
            </button>
        </div>
    </div>
</div>
</div>`);
$('#app').append(`<div class="tagsbox M_Card" style="z-index:2;">
			</div>`);
$('#app').append(`<div class="M_Img" style="position: fixed;width: 45px;height: 45px;top: 0;right: 0; z-index: 2;">
<img src="src/images/head.jpg" class="M_Img M_Dialogue_C" title="美丽的不是这个世界，
而是你看这个世界的眼神。
	——Mr.Yan
" style="position: fixed;width: 45px;height: 45px;top: 0;right: 0; z-index: 2;">
</div>`);

$(`.Dialogue_C>.M_Btn_Default`).click(function (e) { 
    routerGuard.token = localStorage.setItem('token','')
    routerGuard.token = localStorage.setItem('Account','')
});
$(`.Dialogue_C>.M_Btn_Warning`).click(function (e) { 
    showMessage('您取消了退出','warning',2000);
});
$('#app>.tagsbox').append(`<input type="text" style="height: 24px;width: 180px;position: relative;
    top: -4px;" value="" placeholder="请输入搜索内容" class="M_Ipt"><button class="M_Btn" style="
    height: 34px;
    vertical-align: middle;
    position: relative;
    top: -4px;
	left: -10px;
	border-radius: 0 8px 8px 0;
	color: #fff;
    background: #409eff;
    border-color: #409eff;
"><i class="fa fa-search fa-1x">
</i> Search</button>`)