/*  
    *Mcode_js 颜色分布规则：

    *声明变量 = #409eff
    *函数 = #67c23a;
    *自带操作 = #e6a23c;
    *关键词= #f56c6c;
    *符号 = #909399;
    *new = #009688
*/ 
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/ =/g, '<font color="#409eff"><b style="color:rgb(228, 108, 187)"> =</b></font>');
    })
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/router/g, '<font color="#f56c6c">router</font>');
    }) 
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/script/g, '<font color="f56c6c"><b style="font-size:16px;">script</b></font>');
    })
   $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/Router.js/g, '<font color="#f56c6c"><b>Router.js</b></font>');
    })
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/function/g, '<font color="#67c23a"><b style="font-size: 16px;"> function </b></font>');
    })

    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/watch/g, '<font color="#f56c6c"><b >watch</b></font>');
    })
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/let/g, '<font color="#409eff"><b style="font-size: 16px;"> let </b></font>');
    })
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/var/g, '<font color="#409eff"><b style="font-size: 16px;"> var </b></font>');
    })

    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/data/g, '<font color="#f56c6c"><b >data</b></font>');
    })

    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/new /g, '<font color="#009688"><b style="font-size: 16px;">new </b></font>');
    })

    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/class/g, '<font color="#009688"><b style="color:rgb(228, 108, 187)">class</b>  </font>');
    })

    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/{/g, '<font ><b style="color:rgb(228, 108, 187)"> { </b>  </font>');
    })
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/}/g, '<font><b style="color:rgb(228, 108, 187)"> } </b>  </font>');
    })
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/   /g, '<font color="#67c23a"><b style="font-size: 16px;">&nbsp;</b></font>');
    })

    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/const /g, '<font color="#409eff"><b style="font-size: 16px;">const </b></font>');
    })
 
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/.push/g, '<font color="#e6a23c"><b style="font-size: 16px;">.push</b></font>');
    })
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/localStorage.getItem/g, '<font color="#e6a23c"><b style="font-size: 16px;">localStorage.getItem</b></font>');
    })
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/location.href/g, '<font color="#e6a23c"><b style="font-size: 16px;">location.href</b></font>');
    })
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/RouterWatcher/g, '<font color="red">RouterWatcher</font>');
    })
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/RouterGuard/g, '<font color="red">routerGuard</font>');
    })
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/token/g, '<font color="#f56c6c">token</font>');
    })
    
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/name/g, '<font color="#f56c6c">name</font>');
    })
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/path/g, '<font color="#f56c6c">path</font>');
    })
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/icon/g, '<font color="#f56c6c">icon</font>');
    })
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/Object/g, '<font color="#009688"><b style="font-size: 16px;">Object</b></font>');
    })
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/.defineProperty/g, '<font color="#e6a23c"><b style="font-size: 16px;">.defineProperty</b></font>');
    })
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/Request.js/g, '<font color="#f56c6c"><b>Request.js</b></font>');
    })
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/Request/g, '<font color="#f56c6c"><b>Request</b></font>');
    })
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/.host/g, '<font color="#e6a23c"><b style="font-size: 16px;">.push</b></font>');
    })
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/Ajax/g, '<font color="#e6a23c"><b style="font-size: 16px;">Ajax</b></font>');
    })
    
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/.Get/g, '<font color="#67c23a"><b >.Get</b></font>');
    })
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/.Post/g, '<font color="#67c23a"><b >.Post</b></font>');
    })
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/.Put/g, '<font color="#67c23a"><b >.Put</b></font>');
    })
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/.Dele_te/g, '<font color="#67c23a"><b >.Delete</b></font>');
    })
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/.SetShare/g, '<font color="#67c23a"><b >.SetShare</b></font>');
    })
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/console/g, '<font color="#009688"><b >console</b></font>');
    })
   
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/err/g, '<font color="#67c23a"><b >err</b></font>');
    })
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/res/g, '<font color="#67c23a"><b >res</b></font>');
    })
    $('.Mcode_js').html(function (i, oldHTML) {
        return oldHTML.replace(/param/g, '<font color="#f56c6c">param</font>');
    })

    