class watchert{
    constructor(opts){
        this.$data = this.getBaseType(opts.data) === 'Object' ? opts.data : {};
        this.$watch = this.getBaseType(opts.watch) === 'Object' ? opts.watch : {};
        for(let key in opts.data){
            this.setData(key)
        }
    }
 
    getBaseType(target) {
        const typeStr = Object.prototype.toString.apply(target);
     
        return typeStr.slice(8, -1);
    }
 
    setData(_key){
        Object.defineProperty(this,_key,{
            get: function () {
                return this.$data[_key];
            },
            set : function (val) {
                const oldVal = this.$data[_key];
                if(oldVal === val)return val;
                this.$data[_key] = val;
                this.$watch[_key] && typeof this.$watch[_key] === 'function' && (
                    this.$watch[_key].call(this,val,oldVal)
                );
                return val;
            },
        });
    }
}
location.href.replace(/#/g, "")

var tags = [];
let tag = new watchert({
	data: {
		a: tags,
	},
	watch: {
		a(newVal, oldVal) {

			if(newVal.length == 0){
				$('#app>.tagsbox').remove()
			}
			// $('.tagsbox').empty()
			// for(let z  =0 ; z<tag.a.length;z++){
			// 	$('.tagsbox').append(`<span class="M_Tag M_Tag_D" style="margin: 12px 0 0 10px;font-size:14px;" link="${newVal[z].path}"><i style="width: 20px;font-size: 14px;text-align: left;" class="fa fa-circle-o "></i><a herf=
			// 	"javascript:;" class="M_A_Default">${newVal[z].name}</a></span>`)
			// }
			let M_Tag_D = $('.M_Tag_D');
			for(let z = 0 ; z<M_Tag_D.length;z++){
				M_Tag_DF(z);
			}
			var thisdata = this.$data.a
			function M_Tag_DF(z){
				$('.M_Tag_D:eq('+z+')').append(`<i style="position: relative;width: 20px;font-size:10px; text-align: right;" class="fa fa-close M_Tag_DF"></i>`)
				$('.M_Tag_D:eq('+z+')>.fa-close').click(function(){
					thisdata.splice(z,1)
					$('.M_Tag_D:eq('+z+')').css('display','none')
				})

				$('.M_Tag_D:eq('+z+')>a').click(function(e){
					loadinglock()
					// for(let x = 0; x<)
					// $(`.dbactive`).append(`
					// 	<h1>hjhdasjkahdkj</h1>
					// `)
					$('.tab_right>li').empty()
					var ahref = $('.M_Tag_D:eq('+z+')').attr("link")
					
					$(`.dbactive`).append(`
								<iframe src="${ahref}" frameborder="0" leftmargin="0" style="min-height: 882px; width:100%"
									topmargin="0"></iframe>
								`)
								$('.fa-circle').addClass('fa-circle-o').removeClass('fa-circle')
					$('.M_Tag_D:eq('+z+')>.fa-circle-o').addClass('fa-circle').removeClass('fa-circle-o')
					let navlist_Li = $('.nav-left-container-small>li>a')
					for(let b = 0 ;b<navlist_Li.length;b++){
						
					}
					// var ifarr = $('#app>.htmlbox>iframe');
					// for(let z =0 ; z<ifarr.length;z++){
					// 	if($(`.htmlbox>iframe:eq(${z})`).attr('src') == ahref){
					// 		$(`.htmlbox>iframe:eq(${z})`).css('display','block');
					// 		$(`.M_nav>li>a:eq(${z})`).css('color','#2d8cf0');
					// 		$(`.M_nav>li>a:eq(${z})`).css('background','#000c17');
					// 		var a = ahref.replace(/.html/g, "")
					// 		window.location.href = "#/"+a;
					// 	}else{
					// 		$(`.htmlbox>iframe:eq(${z})`).css('display','none');
					// 		$(`.M_nav>li>a:eq(${z})`).css('color','#fff');
					// 		$(`.M_nav>li>a:eq(${z})`).css('background','#001529');
					// 	}
				
					// }
				})
			}
		}
	}
})
function tagsbox(newVal){
	$('.tagsbox').empty()
	for(let z  =0 ; z<newVal.length;z++){
		$('.tagsbox').append(`<div>${z}</div>`)
	}
}

if(this.router){
	$('#app').append(`<div class="Flex htmlbox" style=" width:${ document.body.clientWidth }px; height:900px"></div>`)
	$('#app').append(`<ul class="nav-left-container"></ul>`)
	$('#app>.Flex').append(`<ol class="tab_right" style="flex: 1;"></ol>`)
	for(let z =0 ;z<router.length;z++){
		$('.nav-left-container').append(`<li>
			<a href="javascript:;">
				<span class="${router[z].icon} f12" aria-hidden="true"></span>
				<span>${router[z].name}</span>
				<span class="fa fa-angle-right f12 fr" aria-hidden="true"></span>
			</a>
			<ul class="nav-left-container-small">
            </ul>
		</li>`)
		for(let x =0 ;x<router[z].children.length;x++){
			$('.nav-left-container-small:eq('+z+')').append(`
				<li MAhref="${router[z].children[x].path}">
					<a class="J_menuItem" path="${router[z].children[x].path}" pathname="${router[z].children[x].name}" href="javascript:;">${router[z].children[x].name}</a>
				</li>
			`)
			$('.tab_right').append(`<li >
			</li>`)
			$('.tab_right > li:eq(0)').addClass('dbactive')
			
		}
	}
	$('.nav-left-container>li:eq(0)').addClass('active')
	$('.nav-left-container-small:eq(0)>li:eq(0)').addClass('active')
	tags.push({"path":router[0].children[0].path,"name":router[0].children[0].name});
	tag.a = tags;
	$(`.dbactive`).append(`
					<iframe src="${router[0].children[0].path}" frameborder="0" leftmargin="0" style="min-height: 882px; width:100%"
						topmargin="0"></iframe>
					`)
	// $('#app>.tagsbox').append(`<span class="M_Tag M_Tag_D" style="margin: 12px 0 0 10px;font-size:14px;">
	// <i style="width: 20px;font-size: 14px;text-align: left;" class="fa fa-circle-o "></i>${router[0].children[0].name}</span>`)

	

	var datalistlength = $('.nav-left-container-small>li')
	for(let z =0 ;z<datalistlength.length;z++){
		addClassDb(z)
		M_navListF(z);

	}
	function addClassDb(z){
		$('.nav-left-container-small>li:eq('+z+')').click(function(){
			$(`.nav-left-container-small>li`).removeClass('active')
			$(`.tab_right>li`).removeClass('dbactive')

			if (!$(`.tab_right>li:eq(${z})`).hasClass('dbactive')) {
				$(`.tab_right>li:eq(${z})`).addClass('dbactive')
			}
			// console.log($('.nav-left-container-small>li:eq('+z+')').text())
			// $(`.dbactive`).append(`
			// 		<iframe src="${$('.M_Tag_D:eq('+z+')').attr("link")}" frameborder="0"  scrolling="No" leftmargin="0"
			// 			topmargin="0"></iframe>
			// 		`)
		})
	}
	
	// $('#app').append(`<ul style="height:${ document.body.clientWidth}px" class="M_nav">
	// 	</ul>`)
	// for(let z =0 ;z <router.length;z++){
	// 	$('#app>ul').append(`<li><a style="min-width: 50px;text-align: left;" MAhref="${router[z].path}"> <i style="min-width: 50px;text-align: center;" class="${router[z].icon}"></i>
	// 	 ${router[z].name}</a></li>`);
		
	// 	let children = router[z].children
	// 		$('#app>.htmlbox').append(`<iframe src="${router[z].path}" frameborder="0"  scrolling="No" leftmargin="0"
	// 		topmargin="0"></iframe>`);
	// }
	// $('#app>.htmlbox>iframe:eq(0)').css("display","block");
	// $(`.M_nav>li>a:eq(0)`).css('color','#2d8cf0');
	// $(`.M_nav>li>a:eq(0)`).css('background','#000c17');
	// tags.push({"path":router[0].path,"name":router[0].name});
	// var a = router[0].path.replace(/.html/g, "");
	// window.location.href = "#/"+a;
}
// function GetAddhtml(z){
	
// 	$('.tab_right > .dbactive').append(
// 		`<iframe src="${z}" frameborder="0" leftmargin="0" style="width: 100%;
// 		min-height: 860px;"
// 		topmargin="0"></iframe>
// 	`);
// }
// var M_navList = $('.M_nav');

// for(let z= 0; z<M_navList.length;z++){
// 	M_navListF(z);
// }
$(".htmlbox").append(`
		<div 
		class="loadingc"
		style="width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		height: 100%;
		display: none;
		background: rgba(255,255,255,0.8);
		z-index: 3;">
		<div style="text-align: center;
		margin-top: 400px;
		color: #409eff;"><i class="fa fa-circle-o-notch fa-pulse"></i> loading... </div>
		</div>
	`)
function loadinglock(){
	$('.loadingc').css("display","block")

	setTimeout(function () {
		$('.loadingc').css("display","none")
	}, 500)
}
function M_navListF (z){
	$('.nav-left-container-small>li:eq('+z+')').click(function(e){
		var href = $('.nav-left-container-small>li:eq('+z+')').attr("MAhref")
		var name = $('.nav-left-container-small>li:eq('+z+')>a').attr("pathname");
		var path = href.replace(/.html/g, "");

		window.location.href = "#/" + path;
		getblock(href);
		loadinglock()
		for(let z = 0 ; z <tags.length;z++){
			var name = name.trim();
			var pname = tags[z].name.trim();
			pFn(name,pname,href);
			return
		}
	})
}
function pFn(name,pname,href){
	
	$('.tab_right>li').empty()
	
		$(`.dbactive`).append(`
					<iframe src="${href}" frameborder="0" leftmargin="0" style="min-height: 882px; width:100%"
						topmargin="0"></iframe>
					`)
		
	
	name.trim();
	pname.trim();
	if(name == pname ){
		return
	}else{
	tags.push({"path":href,"name":name});
	tag.a = tags
	   let obj = {};
	   let peon = tags.reduce((cur,next) => {
		   obj[next.name] ? "" : obj[next.name] = true && cur.push(next);
		   return cur;
	   },[]) 
	   tag.a = peon;
	}

}


	
function getblock(ahref){
	for(let z =0 ;z<datalistlength.length;z++){
	}
	// for(let z =0 ; z<ifarr.length;z++){
	// 	if($(`.htmlbox>iframe:eq(${z})`).attr('src') == ahref){
	// 		$(`.htmlbox>iframe:eq(${z})`).css('display','block');
	// 		$(`.M_nav>li>a:eq(${z})`).css('color','#2d8cf0');
	// 		$(`.M_nav>li>a:eq(${z})`).css('background','#000c17');
	// 	}else{
	// 		$(`.htmlbox>iframe:eq(${z})`).css('display','none');
	// 		$(`.M_nav>li>a:eq(${z})`).css('color','#fff');
	// 		$(`.M_nav>li>a:eq(${z})`).css('background','#001529');
	// 	}
	// }
}

let M_Ipt_Show = $('.M_Ipt_Show');
for (let z = 0; z < M_Ipt_Show.length; z++) {
	M_Ipt_ShowF(z)
}

function M_Ipt_ShowF(z) {
	$('.M_Ipt_Show:eq(' + z + ')').after(`<span class="M_Ipt_Show_a"><i class="fa fa-eye"style="color:#666"></i></span>`);
	let M_Ipt_Show_Index = 0;
	$('.M_Ipt_Show_a:eq(' + z + ')').click(function () {
		if (M_Ipt_Show_Index == 0) {
			$('.M_Ipt_Show_a:eq(' + z + ')>i').removeClass('fa-eye');
			$('.M_Ipt_Show_a:eq(' + z + ')>i').addClass('fa-eye-slash');
			$('.M_Ipt_Show:eq(' + z + ')').attr('type', 'text');
			M_Ipt_Show_Index = 1
		} else if (M_Ipt_Show_Index == 1) {
			$('.M_Ipt_Show_a:eq(' + z + ')>i').removeClass('fa-eye-slash');
			$('.M_Ipt_Show_a:eq(' + z + ')>i').addClass('fa-eye');
			$('.M_Ipt_Show:eq(' + z + ')').attr('type', 'password');
			M_Ipt_Show_Index = 0
		}
	})
}
let M_ipt_D = $('.M_ipt_D');
for (let z = 0; z < M_ipt_D.length; z++) {
	M_ipt_DF(z)
}

function M_ipt_DF(z) {
	$('.M_ipt_D:eq(' + z + ')').after(`<span class="M_Ipt_Delete"><i class="fa fa-close"style="color:#666"></i></span>`);
	$('.M_Ipt_Delete:eq(' + z + ')').click(function () {
		$('.M_ipt_D:eq(' + z + ')').val('')
	})
}
let M_Dialogue_C = $('.M_Dialogue_C');
for (let z = 0; z < M_Dialogue_C.length; z++) {
	M_Dialogue_CF(z)
}

function M_Dialogue_CF(z) {
	$('.M_Dialogue_C:eq(' + z + ')').click(function () {
		$('.M_Dialogue_Center:eq(' + z + ')').css('display', 'block')
	});
	$('.M_Dialogue_Center:eq(' + z + ') .M_Affirm').click(function () {
		$('.M_Dialogue_Center:eq(' + z + ')').css('display', 'none')
	});
	$('.M_Dialogue_Center:eq(' + z + ') .M_Cancel').click(function () {
		$('.M_Dialogue_Center:eq(' + z + ')').css('display', 'none')
	})
}
let M_Dialogue_R = $('.M_Dialogue_R');
for (let z = 0; z < M_Dialogue_R.length; z++) {
	M_Dialogue_RF(z)
}

function M_Dialogue_RF(z) {
	$('.M_Dialogue_R:eq(' + z + ')').click(function () {
		$('.M_Dialogue_Right:eq(' + z + ')').css('display', 'block');
		$('.M_Dialogue_Right:eq(' + z + ')>div').css('width', '400px')
	});
	$('.M_Dialogue_Right:eq(' + z + ') .M_Affirm').click(function () {
		$('.M_Dialogue_Right:eq(' + z + ')').css('display', 'none');
		$('.M_Dialogue_Right:eq(' + z + ')>div').css('width', '0')
	});
	$('.M_Dialogue_Right:eq(' + z + ') .M_Cancel').click(function () {
		$('.M_Dialogue_Right:eq(' + z + ')').css('display', 'none');
		$('.M_Dialogue_Right:eq(' + z + ')>div').css('width', '0')
	})
}
let M_Dialogue_L = $('.M_Dialogue_L');
for (let z = 0; z < M_Dialogue_L.length; z++) {
	M_Dialogue_LF(z)
}

function M_Dialogue_LF(z) {
	$('.M_Dialogue_L:eq(' + z + ')').click(function () {
		$('.M_Dialogue_Left:eq(' + z + ')').css('display', 'block');
		$('.M_Dialogue_Left:eq(' + z + ')>div').css('width', '400px')
	});
	$('.M_Dialogue_Left:eq(' + z + ') .M_Affirm').click(function () {
		$('.M_Dialogue_Left:eq(' + z + ')').css('display', 'none');
		$('.M_Dialogue_Left:eq(' + z + ')>div').css('width', '0')
	});
	$('.M_Dialogue_Left:eq(' + z + ') .M_Cancel').click(function () {
		$('.M_Dialogue_Left:eq(' + z + ')').css('display', 'none');
		$('.M_Dialogue_Left:eq(' + z + ')>div').css('width', '0')
	})
}
let M_Dialogue_T = $('.M_Dialogue_T');
for (let z = 0; z < M_Dialogue_T.length; z++) {
	M_Dialogue_TF(z)
}

function M_Dialogue_TF(z) {
	$('.M_Dialogue_T:eq(' + z + ')').click(function () {
		$('.M_Dialogue_Top:eq(' + z + ')').css('display', 'block');
		$('.M_Dialogue_Top:eq(' + z + ')>div').css('height', '400px')
	});
	$('.M_Dialogue_Top:eq(' + z + ') .M_Affirm').click(function () {
		$('.M_Dialogue_Top:eq(' + z + ')').css('display', 'none');
		$('.M_Dialogue_Top:eq(' + z + ')>div').css('height', '0')
	});
	$('.M_Dialogue_Top:eq(' + z + ') .M_Cancel').click(function () {
		$('.M_Dialogue_Top:eq(' + z + ')').css('display', 'none');
		$('.M_Dialogue_Top:eq(' + z + ')>div').css('height', '0')
	})
}
let M_Dialogue_B = $('.M_Dialogue_B');
for (let z = 0; z < M_Dialogue_B.length; z++) {
	M_Dialogue_BF(z)
}

function M_Dialogue_BF(z) {
	$('.M_Dialogue_B:eq(' + z + ')').click(function () {
		$('.M_Dialogue_Bottom:eq(' + z + ')').css('display', 'block');
		$('.M_Dialogue_Bottom:eq(' + z + ')>div').css('height', '400px')
	});
	$('.M_Dialogue_Bottom:eq(' + z + ') .M_Affirm').click(function () {
		$('.M_Dialogue_Bottom:eq(' + z + ')').css('display', 'none');
		$('.M_Dialogue_Bottom:eq(' + z + ')>div').css('height', '0')
	});
	$('.M_Dialogue_Bottom:eq(' + z + ') .M_Cancel').click(function () {
		$('.M_Dialogue_Bottom:eq(' + z + ')').css('display', 'none');
		$('.M_Dialogue_Bottom:eq(' + z + ')>div').css('height', '0')
	})
}

function showMessage(message, type, time) {
	let str = '';
	switch (type) {
		case 'success':
			str = `<div class="M_success_message"><span class="mes-text "style="font-size:14px;"><i class="fa fa-check-circle-o"style="margin-right:10px;"></i>${message}</span></div>`;
			break;
		case 'error':
			str = `<div class="M_error_message"><span class="mes-text"style="font-size:14px;"><i class="fa fa-times-circle"style="margin-right:10px;"></i>${message}</span></div>`;
			break;
		case 'info':
			str = `<div class="M_info_message"><span class="mes-text"style="font-size:14px;"><i class="fa fa-question-circle"style="margin-right:10px;"></i>${message}</span></div>`;
			break;
		case 'warning':
			str = `<div class="M_warning_message"><span class="mes-text"style="font-size:14px;"><i class="fa fa-info-circle"style="margin-right:10px;"></i>${message}</span></div>`;
			break
	}
	$('body').append(str);
	setTimeout(function () {
		$('.M_' + type + '_message').remove()
	}, time)
}
let M_Success_message = $('.M_Success_message');
for (let z = 0; z < M_Success_message.length; z++) {
	M_Success_messageF(z)
}

function M_Success_messageF(z) {
	let SuccessText = $('.M_Success_message:eq(' + z + ')').text();
	$('.M_Success_message:eq(' + z + ')').text('');
	$('.M_Success_message:eq(' + z + ')').append(`<div style="width: 95%">${SuccessText}</div>`);
	$('.M_Success_message:eq(' + z + ')').append(`<div class="M_msg_Delete"style="flex: 1;cursor: pointer;text-align: right;"><i class="fa fa-close"style="margin-right:10px;"></div>`);
	$('.M_Success_message:eq(' + z + ')> .M_msg_Delete').click(function () {
		$('.M_Success_message:eq(' + z + ')').css('display', 'none')
	})
}
let M_Error_message = $('.M_Error_message');
for (let z = 0; z < M_Error_message.length; z++) {
	M_Error_messageF(z)
}

function M_Error_messageF(z) {
	let ErrorText = $('.M_Error_message:eq(' + z + ')').text();
	$('.M_Error_message:eq(' + z + ')').text('');
	$('.M_Error_message:eq(' + z + ')').append(`<div style="width: 95%">${ErrorText}</div>`);
	$('.M_Error_message:eq(' + z + ')').append(`<div class="M_msg_Delete"style="flex: 1;cursor: pointer;text-align: right;"><i class="fa fa-close"style="margin-right:10px;"></div>`);
	$('.M_Error_message:eq(' + z + ')> .M_msg_Delete').click(function () {
		$('.M_Error_message:eq(' + z + ')').css('display', 'none')
	})
}
let M_Info_message = $('.M_Info_message');
for (let z = 0; z < M_Info_message.length; z++) {
	M_Info_messageF(z)
}

function M_Info_messageF(z) {
	let InfoText = $('.M_Info_message:eq(' + z + ')').text();
	$('.M_Info_message:eq(' + z + ')').text('');
	$('.M_Info_message:eq(' + z + ')').append(`<div style="width: 95%">${InfoText}</div>`);
	$('.M_Info_message:eq(' + z + ')').append(`<div class="M_msg_Delete"style="flex: 1;cursor: pointer;text-align: right;"><i class="fa fa-close"style="margin-right:10px;"></div>`);
	$('.M_Info_message:eq(' + z + ') > .M_msg_Delete').click(function () {
		$('.M_Info_message:eq(' + z + ')').css('display', 'none')
	})
}
let M_Warning_message = $('.M_Warning_message');
for (let z = 0; z < M_Warning_message.length; z++) {
	M_Warning_messageF(z)
}

function M_Warning_messageF(z) {
	let WarningText = $('.M_Warning_message:eq(' + z + ')').text();
	$('.M_Warning_message:eq(' + z + ')').text('');
	$('.M_Warning_message:eq(' + z + ')').append(`<div style="width: 95%">${WarningText}</div>`);
	$('.M_Warning_message:eq(' + z + ')').append(`<div class="M_msg_Delete"style="flex: 1;cursor: pointer;text-align: right;"><i class="fa fa-close"style="margin-right:10px;"></div>`);
	$('.M_Warning_message:eq(' + z + ') > .M_msg_Delete').click(function () {
		$('.M_Warning_message:eq(' + z + ')').css('display', 'none')
	})
}
let M_Success_Message = $('.M_Success_Message');
for (let z = 0; z < M_Success_Message.length; z++) {
	M_Success_MessageF(z)
}

function M_Success_MessageF(z) {
	let SuccessTextI = $('.M_Success_Message:eq(' + z + ')').text();
	$('.M_Success_Message:eq(' + z + ')').text('');
	$('.M_Success_Message:eq(' + z + ')').append(`<div style="width: 95%"><i class="fa fa-check-circle-o"style="font-size: 18px;margin-right:10px;"></i>${SuccessTextI}</div>`);
	$('.M_Success_Message:eq(' + z + ')').append(`<div class="M_msg_Delete"style="flex: 1;cursor: pointer;text-align: right;"><i class="fa fa-close"style="margin-right:10px;font-size:12px;"></div>`);
	$('.M_Success_Message:eq(' + z + ') > .M_msg_Delete').click(function () {
		$('.M_Success_Message:eq(' + z + ')').css('display', 'none')
	})
}
let M_Error_Message = $('.M_Error_Message');
for (let z = 0; z < M_Error_Message.length; z++) {
	M_Error_MessageF(z)
}

function M_Error_MessageF(z) {
	let ErrorTextI = $('.M_Error_Message:eq(' + z + ')').text();
	$('.M_Error_Message:eq(' + z + ')').text('');
	$('.M_Error_Message:eq(' + z + ')').append(`<div style="width: 95%"><i class="fa fa-times-circle"style="font-size: 18px;margin-right:10px;"></i>${ErrorTextI}</div>`);
	$('.M_Error_Message:eq(' + z + ')').append(`<div class="M_msg_Delete"style="flex: 1;cursor: pointer;text-align: right;"><i class="fa fa-close"style="margin-right:10px;font-size:12px;"></div>`);
	$('.M_Error_Message:eq(' + z + ') > .M_msg_Delete').click(function () {
		$('.M_Error_Message:eq(' + z + ')').css('display', 'none')
	})
}
let M_Info_Message = $('.M_Info_Message');
for (let z = 0; z < M_Info_Message.length; z++) {
	M_Info_MessageF(z)
}

function M_Info_MessageF(z) {
	let InfoTextI = $('.M_Info_Message:eq(' + z + ')').text();
	$('.M_Info_Message:eq(' + z + ')').text('');
	$('.M_Info_Message:eq(' + z + ')').append(`<div style="width: 95%"><i class="fa fa-question-circle"style="font-size: 18px;margin-right:10px;"></i>${InfoTextI}</div>`);
	$('.M_Info_Message:eq(' + z + ')').append(`<div class="M_msg_Delete"style="flex: 1;cursor: pointer;text-align: right;"><i class="fa fa-close"style="margin-right:10px;font-size:12px;"></div>`);
	$('.M_Info_Message:eq(' + z + ') > .M_msg_Delete').click(function () {
		$('.M_Info_Message:eq(' + z + ')').css('display', 'none')
	})
}
let M_Warning_Message = $('.M_Warning_Message');
for (let z = 0; z < M_Warning_Message.length; z++) {
	M_Warning_MessageF(z)
}

function M_Warning_MessageF(z) {
	let WarningTextI = $('.M_Warning_Message:eq(' + z + ')').text();
	$('.M_Warning_Message:eq(' + z + ')').text('');
	$('.M_Warning_Message:eq(' + z + ')').append(`<div style="width: 95%"><i class="fa fa-info-circle"style="font-size: 18px;margin-right:10px;"></i>${WarningTextI}</div>`);
	$('.M_Warning_Message:eq(' + z + ')').append(`<div class="M_msg_Delete"style="flex: 1;cursor: pointer;text-align: right;"><i class="fa fa-close"style="margin-right:10px;font-size:12px;"></div>`);
	$('.M_Warning_Message:eq(' + z + ') > .M_msg_Delete').click(function () {
		$('.M_Warning_Message:eq(' + z + ')').css('display', 'none')
	})
}
let M_Warning_Message_a = $('.M_Warning_Message_a');
for (let z = 0; z < M_Warning_Message_a.length; z++) {
	M_Warning_Message_aF(z)
}

function M_Warning_Message_aF(z) {
	let WarningTextIa = $('.M_Warning_Message_a:eq(' + z + ')').text();
	$('.M_Warning_Message_a:eq(' + z + ')').text('');
	$('.M_Warning_Message_a:eq(' + z + ')').append(`<div style="width: 95%"><i class="fa fa-info-circle"style="font-size: 18px;margin-right:10px;"></i>${WarningTextIa}</div>`)
}
let M_Success_Message_a = $('.M_Success_Message_a');
for (let z = 0; z < M_Success_Message_a.length; z++) {
	M_Success_Message_aF(z)
}

function M_Success_Message_aF(z) {
	let SuccessTextIa = $('.M_Success_Message_a:eq(' + z + ')').text();
	$('.M_Success_Message_a:eq(' + z + ')').text('');
	$('.M_Success_Message_a:eq(' + z + ')').append(`<div style="width: 95%"><i class="fa fa-check-circle-o"style="font-size: 18px;margin-right:10px;"></i>${SuccessTextIa}</div>`)
}
let M_Error_Message_a = $('.M_Error_Message_a');
for (let z = 0; z < M_Error_Message_a.length; z++) {
	M_Error_Message_aF(z)
}

function M_Error_Message_aF(z) {
	let ErrorTextIa = $('.M_Error_Message_a:eq(' + z + ')').text();
	$('.M_Error_Message_a:eq(' + z + ')').text('');
	$('.M_Error_Message_a:eq(' + z + ')').append(`<div style="width: 95%"><i class="fa fa-times-circle"style="font-size: 18px;margin-right:10px;"></i>${ErrorTextIa}</div>`)
}
let M_Info_Message_a = $('.M_Info_Message_a');
for (let z = 0; z < M_Info_Message_a.length; z++) {
	M_Info_Message_aF(z)
}

function M_Info_Message_aF(z) {
	let InfoTextIa = $('.M_Info_Message_a:eq(' + z + ')').text();
	$('.M_Info_Message_a:eq(' + z + ')').text('');
	$('.M_Info_Message_a:eq(' + z + ')').append(`<div style="width: 95%"><i class="fa fa-question-circle"style="font-size: 18px;margin-right:10px;"></i>${InfoTextIa}</div>`)
}
let TabL = $('.M_Table_Array');
for (let z = 0; z < TabL.length; z++) {
	GetTable(z)
}

function GetTable(z) {
	if ($('.M_Table_Array > .T') != null || $('.M_Table_Array > .T') != undefined) {
		let TableArray = {};
		let arr1 = $('.M_Table_Array > .T')[0].innerText;
		let arr2 = $('.M_Table_Array > .T')[1].innerText;
		TableArray.head = JSON.parse(arr1);
		TableArray.data = JSON.parse(arr2);
		if($('.M_Table_Array > .T').length>=3){
			let configure = $('.M_Table_Array > .T')[2].innerText;
			TableArray.configure = JSON.parse(configure)
		}
		$('.M_Table_Array:eq(' + z + ')').empty();
		$('.M_Table_Array:eq(' + z + ')').append(`<li class="M_Headitem_Blue Flex"></li>`);
		for (let i = 0; i < TableArray.head.length; i++) {
			if(TableArray.configure){
				for(let c = 0 ;c <TableArray.configure.length;c++){
					if(TableArray.configure[c].name == TableArray.head[i]){
						
							$('.M_Table_Array:eq(' + z + ')>.M_Headitem_Blue').append(`<div style="${TableArray.configure[c].style}">${TableArray.head[i]}</div>`)
						// }
					}else{
						if(TableArray.head[i] == 'checkbox'){
							$('.M_Table_Array:eq(' + z + ')>.M_Headitem_Blue').append(`
								<div>
									<label style="display: inline-block;" class="M_radios-anim">
										<input type="checkbox" value="${i}" name="tablecheckbox"><i class="bui-checkbox"></i>
									</label>
								</div>
							`)
							$('.M_Table_Array:eq(' + z + ')>.M_Headitem_Blue>div').css('max-width','50px')
						}else{
							$('.M_Table_Array:eq(' + z + ')>.M_Headitem_Blue').append(`<div>${TableArray.head[i]}</div>`)

						}
					}
				}
			}else{
		
					$('.M_Table_Array:eq(' + z + ')>.M_Headitem_Blue').append(`<div>${TableArray.head[i]}</div>`)
			}
		}
		for (let i = 0; i < TableArray.data.length; i++) {
			$('.M_Table_Array:eq(' + z + ')').append(`<li class="M_Tritem Flex"></li>`);
			let tableitem = $('.M_Table_Array>.M_Tritem')[i];
			for (let x = 0; x < TableArray.head.length; x++) {
				for (let key in TableArray.data[i]) {
					if (TableArray.head[x] == key) {
						if(TableArray.configure){
							if (TableArray.head[x] == '操作') {
								switch (TableArray.data[i][key]) {
									case 'b':
										$('.M_Table_Array:eq(' + z + ')>.M_Tritem:eq(' + i + ')').append(`<div><button class="M_Btn"style="margin:0 5px;"><i class="fa fa-search"> 查看</i></button><button class="M_Btn"style="margin:0 5px;"><i class="fa fa-question-circle"> 其他</i></button></div>`);
										break;
									case 'a':
										$('.M_Table_Array:eq(' + z + ')>.M_Tritem:eq(' + i + ')').append(`<div><button class="M_Btn"style="margin:0 5px;"><i class="fa fa-bars"> </i></button><button class="M_Btn"style="margin:0 5px;"><i class="fa fa-info-circle"></i></button></div>`);
										break;
									case '':
										$('.M_Table_Array:eq(' + z + ')>.M_Tritem:eq(' + i + ')').append(`<div>${TableArray.data[i][key]}</div>`);
										break
								}
							}else if(TableArray.head[x] =="checkbox"){
								$('.M_Table_Array:eq(' + z + ')>.M_Tritem:eq(' + i + ')').append(`<div>
									<label style="display: inline-block;" class="M_radios-anim">
										<input type="checkbox" value="${i+1}" name="tablecheckbox"><i class="bui-checkbox"></i>
									</label>
								</div>`);
								$('.M_Table_Array:eq(' + z + ')>.M_Tritem:eq(' + i + ')>div').css("max-width","50px")
							} else {
								if(TableArray.configure){
									for(let c = 0 ;c <TableArray.configure.length;c++){
										if(TableArray.configure[c].name == key){
											$('.M_Table_Array:eq(' + z + ')>.M_Tritem:eq(' + i + ')').append(`<div style="${TableArray.configure[c].style}">${TableArray.data[i][key]}</div>`)
										}else{
											$('.M_Table_Array:eq(' + z + ')>.M_Tritem:eq(' + i + ')').append(`<div >${TableArray.data[i][key]}</div>`)
										}
									}
								}else{
									$('.M_Table_Array:eq(' + z + ')>.M_Tritem:eq(' + i + ')').append(`<div>${TableArray.data[i][key]}</div>`)
								}
							}
						}else{
							if (TableArray.head[x] == '操作') {
								switch (TableArray.data[i][key]) {
									case 'b':
										$('.M_Table_Array:eq(' + z + ')>.M_Tritem:eq(' + i + ')').append(`<div><button class="M_Btn"style="margin:0 5px;"><i class="fa fa-search"></i></button><button class="M_Btn"style="margin:0 5px;"><i class="fa fa-question-circle"></i></button></div>`);
										break;
									case 'a':
										$('.M_Table_Array:eq(' + z + ')>.M_Tritem:eq(' + i + ')').append(`<div><button class="M_Btn"style="margin:0 5px;"><i class="fa fa-bars"></i></button><button class="M_Btn"style="margin:0 5px;"><i class="fa fa-info-circle"></i></button></div>`);
										break;
									case '':
										$('.M_Table_Array:eq(' + z + ')>.M_Tritem:eq(' + i + ')').append(`<div>${TableArray.data[i][key]}</div>`);
										break
								}
							} else {
								$('.M_Table_Array:eq(' + z + ')>.M_Tritem:eq(' + i + ')').append(`<div>${TableArray.data[i][key]}</div>`)
							}
						}
						
					}
				}
			}
		}
		TableArray = {}
	}
}
let Ptitle = $('.M_P_Title');
for (let z = 0; z < Ptitle.length; z++) {
	pTitle(z)
}

function pTitle(z) {
	let content = $('.M_P_Title:eq(' + z + ')').text();
	$('.M_P_Title:eq(' + z + ')').text('');
	$('.M_P_Title:eq(' + z + ')').append(`<span style="color: skyblue;font-weight: 700;">|</span>${content}`)
}
let M_picture = $('.M_picture');
for (let z = 0; z < M_picture.length; z++) {
	let M_picture_arr = $('.M_picture:eq(' + z + ')').text();
	let M_pictureArr = JSON.parse(M_picture_arr);
	let ParamData = M_pictureArr[M_pictureArr.length - 1];
	M_pictureArr.splice(M_pictureArr.length - 1, M_pictureArr.length);
	$('.M_picture:eq(' + z + ')').text('');
	$('.M_picture:eq(' + z + ')').append(`<img src="${M_pictureArr[0]}"alt=""><p class="radius"></p><p class="title"></p><div class="arrowhead-left"id="al"><img src="http://crazy.lovemysoul.vip/images/prev.png"alt=""srcset=""></div><div class="arrowhead-right"id="ar"><img src="http://crazy.lovemysoul.vip/images/next.png"alt=""srcset=""></div>`);
	if (ParamData.height) {
		$('.M_picture:eq(' + z + ')').css('height', ParamData.height);
		$('.M_picture:eq(' + z + ')>img').css('height', ParamData.height);
	}
	if (ParamData.width) {
		$('.M_picture:eq(' + z + ')').css('width', ParamData.width);
		$('.M_picture:eq(' + z + ')>img').css('width', ParamData.width);
	}
	M_pictureF(z, M_pictureArr, ParamData.timer)
}

function M_pictureF(z, M_pictureArr, timer) {
	$('.M_picture:eq(' + z + ')').mouseover(function () {
		$('.M_picture:eq(' + z + ')>.arrowhead-left').stop().animate({left: "0"},"slow");
		$('.M_picture:eq(' + z + ')>.arrowhead-right').stop().animate({right: "0"},"slow");
	});
	$('.M_picture:eq(' + z + ')').mouseout(function () {
		$('.M_picture:eq(' + z + ')>.arrowhead-left').stop().animate({left: -41+"px"},"slow");
		$('.M_picture:eq(' + z + ')>.arrowhead-right').stop().animate({right: -41+"px"},"slow");
  	});
	let address = M_pictureArr;
	let imgs = $('.M_picture:eq(' + z + ')>img')[0];
	let len = address.length;
	let str = "";
	let pp = $('.M_picture:eq(' + z + ')>p');
	let al = $('.M_picture:eq(' + z + ')>#al')[0];
	let ar = $('.M_picture:eq(' + z + ')>#ar')[0];
	let n = 0;
	for (i = 0; i < len; i++) {
		str += ' <span></span>'
	}
	pp[1].innerHTML = str;
	let spans = pp[1].getElementsByTagName('span');
	spans[0].className = 'active';
	for (i = 0; i < len; i++) {
		spans[i].index = i;
		spans[i].onmouseover = function () {
			for (i = 0; i < len; i++) {
				spans[i].className = ""
			}
			n = this.index;
			this.className = 'active';
			imgs.src = address[this.index];
		}
	}
	ar.onclick = function () {
		n++;
		if (n > 5) {
			n = 0
		}
		for (i = 0; i < len; i++) {
			spans[i].className = ""
		}
		imgs.src = address[n];
		spans[n].className = "active"
	};
	al.onclick = function () {
		n--;
		if (n < 0) {
			n = (len - 1);
		}
		for (i = 0; i < len; i++) {
			spans[i].className = ""
		}
		spans[n].className = "active";
		imgs.src = address[n];
	};
	setInterval(ar.onclick, timer);
}
let M_Tag_D = $('.M_Tag_D');
for(let z = 0 ; z<M_Tag_D.length;z++){
	M_Tag_DF(z);
}
function M_Tag_DF(z){
	$('.M_Tag_D:eq('+z+')').append(`<i style="position: relative;font-size:10px;margin-left: 10px;text-align: right;" class="fa fa-close M_Tag_DF"></i>`);
	$('.M_Tag_D:eq('+z+')>.fa-close').click(function(){
		$('.M_Tag_D:eq('+z+')').css('display','none');
	})
}
let M_Tag_success_D = $('.M_Tag_success_D');
for(let z = 0 ; z<M_Tag_success_D.length;z++){
	M_Tag_success_DF(z)
}
function M_Tag_success_DF(z){
	$('.M_Tag_success_D:eq('+z+')').append(`<i style="position: relative;font-size:10px;" class="fa fa-close M_Tag_success_DF"></i>`);
	$('.M_Tag_success_D:eq('+z+')>.fa-close').click(function(){
		$('.M_Tag_success_D:eq('+z+')').css('display','none')
	})
}
let M_Tag_info_D = $('.M_Tag_info_D');
for(let z = 0 ; z<M_Tag_info_D.length;z++){
	M_Tag_info_DF(z)
}
function M_Tag_info_DF(z){
	$('.M_Tag_info_D:eq('+z+')').append(`<i style="position: relative;font-size:10px;" class="fa fa-close M_Tag_info_DF"></i>`);
	$('.M_Tag_info_D:eq('+z+')>.fa-close').click(function(){
		$('.M_Tag_info_D:eq('+z+')').css('display','none');
	})
}

let M_Tag_warning_D = $('.M_Tag_warning_D');
for(let z = 0 ; z<M_Tag_warning_D.length;z++){
	M_Tag_warning_DF(z)
}
function M_Tag_warning_DF(z){
	$('.M_Tag_warning_D:eq('+z+')').append(`<i style="position: relative;font-size:10px;" class="fa fa-close M_Tag_warning_DF"></i>`);
	$('.M_Tag_warning_D:eq('+z+')>i').click(function(){
		$('.M_Tag_warning_D:eq('+z+')').css('display','none');
	})
}

let M_Tag_danger_D = $('.M_Tag_danger_D');
for(let z = 0 ; z<M_Tag_danger_D.length;z++){
	M_Tag_danger_DF(z)
}
function M_Tag_danger_DF(z){
	$('.M_Tag_danger_D:eq('+z+')').append(`<i style="position: relative;font-size:10px;" class="fa fa-close M_Tag_danger_DF"></i>`);
	$('.M_Tag_danger_D:eq('+z+')>i').click(function(){
		$('.M_Tag_danger_D:eq('+z+')').css('display','none')
	})
}
let M_Breadcrumb = $('.M_Breadcrumb');
for(let z = 0;z<M_Breadcrumb.length;z++){
	M_BreadcrumbF(z);
}
function M_BreadcrumbF(z){
	let M_BreadcrumbFtext = $('.M_Breadcrumb:eq('+z+')').text();
	var M_BreadcrumbFdata = JSON.parse(M_BreadcrumbFtext);
	$('.M_Breadcrumb:eq('+z+')').text('');

	for(let x =0 ;x<M_BreadcrumbFdata.length;x++){

		if(x !=M_BreadcrumbFdata.length-1){
			$('.M_Breadcrumb:eq('+z+')').append(`
				<span>
					<a href="${M_BreadcrumbFdata[x].link}" >${M_BreadcrumbFdata[x].name}</a>
					</span><i class="fa fa-caret-right"></i>
			`);
		}else{
			$('.M_Breadcrumb:eq('+z+')').append(`
				<span class="lengthItem">
					<a href="${M_BreadcrumbFdata[x].link}" >${M_BreadcrumbFdata[x].name}</a>
				</span>
			`);
		}
	}
}
let M_Breadcrumb_ = $('.M_Breadcrumb_');
for(let z = 0;z<M_Breadcrumb_.length;z++){
	M_Breadcrumb_F(z);
}
function M_Breadcrumb_F(z){
	let M_Breadcrumb_Ftext = $('.M_Breadcrumb_:eq('+z+')').text();
	var M_Breadcrumb_Fdata = JSON.parse(M_Breadcrumb_Ftext);
	$('.M_Breadcrumb_:eq('+z+')').text('');

	for(let x =0 ;x<M_Breadcrumb_Fdata.length;x++){

		if(x !=M_Breadcrumb_Fdata.length-1){
			$('.M_Breadcrumb_:eq('+z+')').append(`
				<span>
					<a href="${M_Breadcrumb_Fdata[x].link}" >${M_Breadcrumb_Fdata[x].name}</a>
				</span> /
			`);
		}else{
			$('.M_Breadcrumb_:eq('+z+')').append(`
				<span class="lengthItem">
					<a href="${M_Breadcrumb_Fdata[x].link}" >${M_Breadcrumb_Fdata[x].name}</a>
				</span>
			`);
		}
	}
}
function M_NotFound_2_CF(list){
	$('body').html('');
	$('body').html(`<div style="width: 100%;height: 100%;position: absolute;background: #fff;overflow: hidden;">
	<div class="M_NotFound_2">
		<ul style="display: flex;margin: 20px 0 0 60%;">
			
		</ul>
		<div class="M_NotFound_img_2">

		</div>
		<h2 style="font-size: 40px;text-align: center;caret-color: #000;">
			404 出现错误 页面寻找不到了
		</h2>
	</div>
</div>`);
	for(let z =0 ; z<list.length;z++){
		$('.M_NotFound_2>ul').append(`
			<li class="nav404_2" style="text-align: center; border-bottom: 1px solid #e5e5e5;padding: 0 5px;
			margin: 0 20px;">
				<a class="nav404_2" href="${list[z].link}" style="font-size: 16px;" rel="noopener noreferrer">${list[z].name}</a>
			</li>
		`);
	};
}

function M_NotFound_CF(list){
	$('body').html('');
	$('body').html(`<div style="width: 100%;height: 100%;position: absolute;background: #fff;overflow: hidden;">
	<div class="M_NotFound" style="width: 900px;margin: 10% auto;">
		<div class="M_NotFound_img" style="height: 400px;">

		</div>
		<div class="M_NotFound_box Flex">
			<div class="M_Btn" style="background: rgba(0, 0, 0, 0);
				margin: 0 auto;
					padding: 5px 25px;
					color: #20A0FF;border-radius: 15px; ">
				<a href="${list.link}">${list.name}</a>
			</div>
		</div>
	</div>
</div>`);
}
var tab_navcolor = $('.tab_nav');
for(let z = 0 ; z< tab_navcolor.length;z++){

	tab_navcolorf(z);
}
function tab_navcolorf(z){
	$('.M_color').change(function () {
		$('.tab_nav').css('background',this.value);
		$('.tab_nav>div').css('background',this.value);
		$('.list').css('background',this.value) ;
		
	})
}
	/* jshint esversion: 6 */
	(function (window, document) {
		let Selector = function (option) {
			//执行初始化方法，
			this._init(option);
		};
		Selector.prototype = {
			//初始化传入参数并定义初始化的相关变量
			_init({
				eleSelector = "", //传入的选择器 id,class，tag等，用于将选择框渲染到此选择器所在的元素
				options = [{
					name: "请选择",
					value: "0",
				}], //传入的下拉框对象，name为选择的文字，value为值
				defaultText = "请选择" //提供的默认选择的值
			}) {

				//将传入的数据绑定到this上
				this.parentEle = document.querySelector(eleSelector) || document.body; //要邦定的dom 
				this.options = options; //选择值数组对象
				this.defaultText = defaultText; //默认值

				this.dropboxShow = false; //定义存储下拉框的显示隐藏状态
				this.defaultValue = ""; //定义村赤默认选中的值
				this._creatElement(); //初始化后执行创建元素方法
			},

			//创建下拉选择框dom
			_creatElement() {
				//选择框最外层的包裹元素
				let wrapEle = document.createElement("div");
				wrapEle.className = "my-select";

				//根据传入的值获取选择框默认的值和内容
				this.options.forEach(item => {
					if (item.name === "this.defaultText") {
						this.defaultValue = item.value;
					}
				});

				let selectWarpBox = document.createElement("div"); //选择框包裹元素
				selectWarpBox.className = "select-selection";

				let inputHideBox = document.createElement("input"); //隐藏保存选择值得元素
				inputHideBox.type = "hidden";
				inputHideBox.value = this.defaultValue;

				let selectShowBox = document.createElement("div"); //选择框默认展示框
				let selectNameBox = document.createElement("span"); //选择框展现的值ele
				selectNameBox.className = "select-selected-value";
				selectNameBox.id = "select-option";
				selectNameBox.innerText = this.defaultText; //将传入的默认值赋值
				let selectIcon = document.createElement("i"); //图标ele
				selectIcon.className = "arrow-down icon-select-arrow";
				//将span和角标添加到外层div
				selectShowBox.appendChild(selectNameBox);
				selectShowBox.appendChild(selectIcon);

				selectWarpBox.appendChild(inputHideBox);
				selectWarpBox.appendChild(selectShowBox);

				//下拉框
				let dropbox = document.createElement("div"),
					ulbox = document.createElement("ul");

				dropbox.id = "select-drop";
				dropbox.className = "select-dropdown";
				ulbox.className = "select-dropdown-list";
				//遍历传入的选项数组对象，生成下拉菜单的li元素并赋值
				this.options.forEach((item) => {
					let itemLi = document.createElement("li");
					if (this.defaultText === item.name) {
						itemLi.className = "select-item select-item-selected";
					} else {
						itemLi.className = "select-item";
					}

					itemLi.setAttribute("data-value", item.value);
					itemLi.innerText = item.name;
					ulbox.appendChild(itemLi);

				});
				//将下拉框ul推入到包裹元素
				dropbox.appendChild(ulbox);

				wrapEle.appendChild(selectWarpBox);
				wrapEle.appendChild(dropbox);

				this.parentEle.appendChild(wrapEle); //将生成的下拉框添加到所选元素中

				//把需要操作的dom挂载到当前实例
				//this.wrapEle = wrapEle;     //最外层包裹元素
				this.eleSelect = selectWarpBox; //选择框
				this.eleDrop = dropbox; //下拉框
				this.eleSpan = selectNameBox; //显示文字的span节点

				//绑定事件处理函数
				this._bind(this.parentEle);
			},

			//点击下拉框事件处理函数
			_selectHandleClick() {
				if (this.dropboxShow) {
					this._selectDropup();
				} else {
					this._selectDropdown();
				}
			},

			//收起下拉选项
			_selectDropup() {
				this.eleDrop.style.transform = "scale(1,0)";
				this.eleDrop.style.opacity = "0";
				this.eleSelect.className = "select-selection";
				this.dropboxShow = false;
			},

			//展示下拉选项
			_selectDropdown() {
				this.eleDrop.style.transform = "scale(1,1)";
				this.eleDrop.style.opacity = "1";
				this.eleSelect.className = "select-selection select-focus";
				this.dropboxShow = true;
			},

			//点击下拉选项进行赋值
			_dropItemClick(ele) {
				this.defaultValue = ele.getAttribute("data-value");
				//document.querySelector("#select-value").value = ele.getAttribute("data-value");
				this.eleSpan.innerText = ele.innerText;
				let params = {}
				params.mount = this.parentEle.className
				params.name = ele.innerText
				params.index = ele.getAttribute("data-value")
				change(params, ele)
				ele.className = "select-item select-item-selected";
				//对点击选中的其他所有兄弟元素修改class去除选中样式
				this._siblingsDo(ele, function (ele) {
					if (ele) {
						ele.className = "select-item";
					}
				});
				this._selectDropup();
			},

			//node遍历是否是子元素包裹元素
			_getTargetNode(ele, target) {
				//ele是内部元素，target是你想找到的包裹元素
				if (!ele || ele === document) return false;
				return ele === target ? true : this._getTargetNode(ele.parentNode, target);
			},

			//兄弟元素遍历处理函数
			_siblingsDo(ele, fn) {

				(function (ele) {
					fn(ele);
					if (ele && ele.previousSibling) {
						arguments.callee(ele.previousSibling);
					}
				})(ele.previousSibling);

				(function (ele) {
					fn(ele);
					if (ele && ele.nextSibling) {
						arguments.callee(ele.nextSibling);
					}
				})(ele.nextSibling);

			},

			//绑定下拉框事件处理函数
			_bind(parentEle) {
				let _this = this;
				//事件委托到最外层包裹元素进行绑定处理
				parentEle.addEventListener("click", function (e) {
					const ele = e.target;
					//遍历当前点击的元素，如果是选中框内的元素执行
					if (_this._getTargetNode(ele, _this.eleSelect)) {
						if (_this.dropboxShow) {
							_this._selectDropup();
						} else {
							_this._selectDropdown();
						}
					} else if (ele.className === "select-item") { //如果是点击的下拉框的选项执行
						_this._dropItemClick(ele);
					} else { //点击其他地方隐藏下拉框
						_this._selectDropup();
					}

				});

			}

		};
		//将构造函数挂载到全局window
		window.$Selector = Selector;
	})(window, document);
	Array.prototype.contains = function (obj) {
        var i = this.length;
        while (i--) {
            if (this[i] === obj) {
                return i; // 返回的这个 i 就是元素的索引下标，
            }
        }
        return false;
	}
   var tableChoice = []

    $(document).ready(function () {
        $("input[name=tablecheckbox]").on('click', function (e) {
            if ($(this).is(':checked')) {
                if ($(this).val() == 0) {
                    $("input[name=tablecheckbox]").prop("checked", true)
                    var all = $("input[name=tablecheckbox]")
                    tableChoice = []
                    for (let z = 0; z < all.length; z++) {
                        tableChoice.push(all[z].value)
					}
					tableChoice.splice(tableChoice.contains(0), 1)
                } else if ($('[name="tablecheckbox"]:checked').length + 1 == $('[name="tablecheckbox"]').length) {
                    $("input[name=tablecheckbox]:eq(" + 0 + ")").prop("checked", true)
                } else {
                    tableChoice.push($(this).val())
                }
            } else {
                if ($(this).val() == 0) {
                    $("input[name=tablecheckbox]").prop("checked", false)
                    tableChoice = []
                } else {
                    tableChoice.splice(tableChoice.contains($(this).val()), 1)
                    $("input[name=tablecheckbox]:eq(" + 0 + ")").prop("checked", false)
                }
			}
        });
	});
    $('.nav-left-container').on('click', 'li', function () {
        $(this).find('.fa-angle-right').removeClass('fa-angle-right').addClass('fa-angle-down');
        $(this).addClass('active').children('.nav-left-container-small').slideDown()
        $(this).siblings().removeClass('active').children('.nav-left-container-small').slideUp()
        $(this).siblings().find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-right');
	})
	M_Page = new Page();
	//分页对象
	function Page(){
		this.config = {elemId:'#page',pageIndex:'1',total:'0',pageNum:'7',pageSize:'10'};//默认参数
		this.version = '1.0';//分页版本
		this.requestFunction = null;//分页版本
	
		//初始化参数
		this.initMathod = function(obj){
			$.extend(this.config,obj.params);//默认参数 + 用户自定义参数
			this.requestFunction = obj.requestFunction;
			this.renderPage();
		};
	
		//渲染分页
		this.renderPage = function(){
			this.requestFunction();
			this.pageHtml();
	
			//分页绑定事件
			$(M_Page.config.elemId).on('click','a',function(){
				var flag = $(this).parent().hasClass('disabled');
				if(flag){
					return false;
				}
	
				var pageIndex = $(this).data('pageindex');
				M_Page.config.pageIndex = pageIndex;
				M_Page.requestFunction();
				M_Page.pageHtml();
			});
		};
	
		//分页合成
		this.pageHtml = function(){
			var data = this.config;
			if(parseInt(data.total) <= 0){
				return false;
			}
	
			var elemId = data.elemId;
			var pageNum = isBlank(data.pageNum) ? 7 : parseInt(data.pageNum);//可显示页码个数
			var pageSize = isBlank(data.pageSize) ? 10 : parseInt(data.pageSize);//可显示页码个数
			var total = parseInt(data.total);//总记录数
			var pageTotal = total%pageSize != 0 ? parseInt(total/pageSize) + 1 : parseInt(total/pageSize);//总页数
			var pageIndex = pageTotal < parseInt(data.pageIndex) ? pageTotal : parseInt(data.pageIndex);//当前页
			var j = pageTotal < pageNum ? pageTotal : pageNum;//如果总页数小于可见页码，则显示页码为总页数
			var k = pageIndex < parseInt((j/2) + 1) ? -1 * (pageIndex - 1) : pageIndex > (pageTotal - parseInt(j/2)) ? -1 * (j - (pageTotal - pageIndex) - 1) : -1 * parseInt((j/2));//遍历初始值
			var pageHtml = '<ul>';
	
			if(pageIndex <= 0 || pageIndex == 1){
				pageHtml +='<li class="disabled"><a href="javascript:;" data-pageindex="'+ pageIndex +'">上一页</a></li>';
			}else{
				pageHtml +='<li><a href="javascript:;" data-pageindex="'+ (pageIndex - 1) +'">上一页</a></li>';
			}
	
			for(var i = k;i < (k + j);i++){
				if(pageTotal == (pageIndex + i - 1))break;
				if(i == 0){
					pageHtml += '<li class="active"><a href="javascript:;" data-pageindex="'+ pageIndex +'">'+ pageIndex +'</a></li>';
				}else{
					pageHtml += '<li><a href="javascript:;" data-pageindex="'+ (pageIndex + i) +'">'+ (pageIndex + i) +'</a></li>';
				}
			}
	
			if(pageTotal == 1 ||  pageTotal <= pageIndex){
				pageHtml += '<li class="disabled"><a href="javascript:;" data-pageindex="'+ pageTotal +'">下一页</a></li>'
			}else{
				pageHtml += '<li><a href="javascript:;" data-pageindex="'+ (pageIndex + 1) +'">下一页</a></li>'
			}
			pageHtml += '</ul>'
			$(elemId).html('');
			$(elemId).html(pageHtml);
		};
	}
	
	function isBlank(str){
		if(str == undefined || str == null || str.trim() == ''){
			return true;
		}
		return false;
	}
