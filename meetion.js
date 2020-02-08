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
	$('.M_ipt_D:eq(' + z + ')').after(`<span class="M_Ipt_Delete"><i class="fa fa-times-circle"style="color:#666"></i></span>`);
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
		$('.M_Table_Array:eq(' + z + ')').empty();
		$('.M_Table_Array:eq(' + z + ')').append(`<li class="M_Headitem_Blue Flex"></li>`);
		for (let i = 0; i < TableArray.head.length; i++) {
			$('.M_Table_Array:eq(' + z + ')>.M_Headitem_Blue').append(`<div>${TableArray.head[i]}</div>`)
		}
		for (let i = 0; i < TableArray.data.length; i++) {
			$('.M_Table_Array:eq(' + z + ')').append(`<li class="M_Tritem Flex"></li>`);
			let tableitem = $('.M_Table_Array>.M_Tritem')[i];
			for (let x = 0; x < TableArray.head.length; x++) {
				for (let key in TableArray.data[i]) {
					if (TableArray.head[x] == key) {
						if (TableArray.head[x] == '操作') {
							switch (TableArray.data[i][key]) {
								case 'b':
									$('.M_Table_Array:eq(' + z + ')>.M_Tritem:eq(' + i + ')').append(`<div><button class="M_Btn_Default_Circular"style="margin:0 5px;"><i class="fa fa-search"></i></button><button class="M_Btn_Warning_Circular"style="margin:0 5px;"><i class="fa fa-question-circle"></i></button></div>`);
									break;
								case 'a':
									$('.M_Table_Array:eq(' + z + ')>.M_Tritem:eq(' + i + ')').append(`<div><button class="M_Btn_Success_Circular"style="margin:0 5px;"><i class="fa fa-bars"></i></button><button class="M_Btn_Info_Circular"style="margin:0 5px;"><i class="fa fa-info-circle"></i></button></div>`);
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
			imgs.src = address[this.index]
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
			n = (len - 1)
		}
		for (i = 0; i < len; i++) {
			spans[i].className = ""
		}
		spans[n].className = "active";
		imgs.src = address[n]
	};
	setInterval(ar.onclick, timer);
}
let M_Tag_D = $('.M_Tag_D');
for(let z = 0 ; z<M_Tag_D.length;z++){
	M_Tag_DF(z);
}
function M_Tag_DF(z){
	$('.M_Tag_D:eq('+z+')').append(`<i style="position: relative;font-size:10px;" class="fa fa-close M_Tag_DF"></i>`).click(function(){
		$('.M_Tag_D:eq('+z+')').css('display','none')
	})
}
let M_Tag_success_D = $('.M_Tag_success_D');
for(let z = 0 ; z<M_Tag_success_D.length;z++){
	M_Tag_success_DF(z)
}
function M_Tag_success_DF(z){
	$('.M_Tag_success_D:eq('+z+')').append(`<i style="position: relative;font-size:10px;" class="fa fa-close M_Tag_success_DF"></i>`).click(function(){
		$('.M_Tag_success_D:eq('+z+')').css('display','none')
	})
}
let M_Tag_info_D = $('.M_Tag_info_D');
for(let z = 0 ; z<M_Tag_info_D.length;z++){
	M_Tag_info_DF(z)
}
function M_Tag_info_DF(z){
	$('.M_Tag_info_D:eq('+z+')').append(`<i style="position: relative;font-size:10px;" class="fa fa-close M_Tag_info_DF"></i>`).click(function(){
		$('.M_Tag_info_D:eq('+z+')').css('display','none')
	})
}

let M_Tag_warning_D = $('.M_Tag_warning_D');
for(let z = 0 ; z<M_Tag_warning_D.length;z++){
	M_Tag_warning_DF(z)
}
function M_Tag_warning_DF(z){
	$('.M_Tag_warning_D:eq('+z+')').append(`<i style="position: relative;font-size:10px;" class="fa fa-close M_Tag_warning_DF"></i>`).click(function(){
		$('.M_Tag_warning_D:eq('+z+')').css('display','none')
	})
}

let M_Tag_danger_D = $('.M_Tag_danger_D');
for(let z = 0 ; z<M_Tag_danger_D.length;z++){
	M_Tag_danger_DF(z)
}
function M_Tag_danger_DF(z){
	$('.M_Tag_danger_D:eq('+z+')').append(`<i style="position: relative;font-size:10px;" class="fa fa-close M_Tag_danger_DF"></i>`).click(function(){
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
				</span><i class="fa fa-angle-right"></i>
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