(function(global){
  class MyLeg {
    constructor(options) {
      this.options = options;
    }
    init() {
		this.tree(this.options);
    }
	
	uuid() {
		let s = [];
		let hexDigits = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		for (let i = 0; i < 8; i++) {
			s[i] = hexDigits.substr(Math.floor(Math.random() * 0x30), 1);
		}
		let uuid = s.join("");
		return uuid;
	}
	getCheckedNodes() { //获取选中id集合
		let arr = []
		$.each($('input:checkbox:checked'), function() {
			let temp = $(this).val();
			if (temp != "" && temp != "undefined") {
				arr.push($(this).val())
			}
		});
		return arr;
	}
	getHalfSelected(){//半选中id集合
		let arr = []
		$.each($('.iconjianhao'), function() {
			let temp = $(this).parent().prev().val();
			if (temp != "" && temp != "undefined") {
				arr.push(temp)
			}
		});
		return arr;
	}
	getAll(){
		let arr1 = this.getCheckedNodes();
		let arr2 = this.getHalfSelected();
		return arr1.concat(arr2);
	}
	
	//创建树，无选中
	creaTree(data){
		if(Array.isArray(data)){
			let uuid = this.uuid();
			let str = '<ul class="leg_tree synTree">';
			for (let i = 0; i < data.length; i++) {
				str += '<li id="' + data[i].id + '">'
				if(data[i].isParent){
					str += '<i class="iconfont iconxiangyou" data-isParent="true"/>';
				}
				if(data[i].ico != undefined && data[i].ico != ""){
					str += '<i class="' + data[i].ico + '"/>';
				}
				str +='<span>' + data[i].name + '</span>';
				str += '</li>';
			};
			str += '</ul>';
		

			return str;
		}else{
			console.error("数据格式不正确!!")
		}
	}
	
	addTree(data){
		
	}
	
	synTree(options){
		let that = this;
		let id = options.id;
		if(id == undefined){
			id = 0;
		}
		
		$.get(options.url,{id:id},res=>{
			try{
				res = options.dataStyle(res)
			}catch(e){
				//TODO handle the exception
			}
			$(options.ele).append(this.creaTree(res));
		})
		$(options.ele).on('click',"ul li .iconxiangyou",function(e){//点击向下图标
			if($(this).attr("data-isParent") == "true"){
				$.get(options.url,{id:$(this).parent().attr("id")},res=>{
					try{
						res = options.dataStyle(res)
					}catch(e){
						//TODO handle the exception
					}
					$(this).parent().append(that.creaTree(res));
				})
				$(this).attr("data-isParent",'0')
				$(this).attr("style", 'transform:rotate(90deg)');
			}else if($(this).attr("data-isParent") == 0){
				$(this).parent().children('ul').attr("style", 'display: none;');
				$(this).attr("data-isParent",'1')
				$(this).attr("style", 'transform:rotate(0deg)');
			}else if($(this).attr("data-isParent") == 1){
				$(this).parent().children('ul').attr("style", 'display: block;');
				$(this).attr("data-isParent",'0')
				$(this).attr("style", 'transform:rotate(90deg)');
			}
			e.stopPropagation();
		})
		$(options.ele).on('click',"ul li span",function(e){
			options.getData($(this).parent().attr('id'),$(this).html());
		})
	}
	tree(options) {
			let data = options.data;
			let arrs = options.arrs;
			let tree = options.ele;
			let cascade = options.cascade;
			
	
			$(tree).on("click", ".isShow", function() {
				let that = this;
				isShow(that);
			})
			
		
	
			function isShow(that) {
				//:visible 判断当前元素是否可见。
				//[0]  只改变第一个
				if ($(that).parent().find("ul").is(":visible")) {
					$($(that).parent().find("ul")[0]).hide();
					// $(that).removeClass("iconxiangxia").addClass('iconxiangyou')
					$(that).attr("style", 'transform:rotate(-90deg)');
				} else {
					if ($(that).parent().find("ul").length > 0) {
						// $(that).removeClass("iconxiangyou").addClass('iconxiangxia')
						$(that).attr("style", 'transform:rotate(0deg)');
					} else {
						$(that).attr("style", 'opacity: 0;');
					}
					$($(that).parent().find("ul")[0]).show();
				}
			}
			//判断父级选中状态
			function checkParent(param) {
				//iconjianhao
				//半选中没有cheked
				if ($(param).is(':checked')) {
					let temp = $(param).parent().parent().find("input");
					let isChecked = true;
					//判断子级是否都选中了,都选中了,父级为选中; 子级没有全部选中,则为半选中
					$.each(temp, function(index, item) {
						if (!item.checked) {
							isChecked = false;
						}
					});
					if (isChecked) {
						$(param).parent().parent().prev().prev().prev().children('i').removeClass("iconjianhao");
						$(param).parent().parent().prev().prev().prev().children('i').addClass("iconicon-checkbox");
						$(param).parent().parent().prev().prev().prev().prev().prop("checked", 'true');
					}else{
						$(param).parent().parent().prev().prev().prev().children('i').removeClass("iconicon-checkbox");
						$(param).parent().parent().prev().prev().prev().children('i').addClass("iconjianhao");
					}
				} else {
					let temp = $(param).parent().parent().find("input");
					let isChecked = false;
					//判断子级是否有checked的，没有就取消父级的选中状态
					$.each(temp, function(index, item) {
						if (item.checked) {
							isChecked = true;
						}
					});
					if (!isChecked) {
						$(param).parent().parent().prev().prev().prev().children('i').removeClass("iconjianhao");
						$(param).parent().parent().prev().prev().prev().children('i').removeClass("iconicon-checkbox");
						$(param).parent().parent().prev().prev().prev().prev().removeAttr("checked");
					}else{
						$(param).parent().parent().prev().prev().prev().children('i').removeClass("iconicon-checkbox");
						$(param).parent().parent().prev().prev().prev().children('i').addClass("iconjianhao");
					}
				}
				let asd = $(param).parent().parent().prev().prev().prev().prev()[0];
				if (asd != undefined) {
					checkParent(asd)
				}
				return;
			}
	
			//判断子级选中状态
			function checkChildren(param) {
				if (param.checked) {
					// $(param).next().children('i').addClass("iconicon-checkbox");
					$(param).next().next().next().next().children().find("label").children('i').addClass("iconicon-checkbox");
					$(param).next().next().next().next().children().find("input").prop("checked", 'true');
				} else {
					$(param).next().next().next().next().children().find("label").children('i').removeClass("iconjianhao");
					$(param).next().next().next().next().children().find("label").children('i').removeClass("iconicon-checkbox");
					$(param).next().next().next().next().children().find("input").removeAttr("checked");
				}
			}
	
			$(tree).on("click", "input", function() {
				//先子级在父级避免出错（父级里面有判断子级是否选中的）
				if ($(this)[0].checked) {
					$(this).next().children('i').addClass("iconicon-checkbox");
				} else {
					$(this).next().children('i').removeClass("iconicon-checkbox");
					$(this).next().children('i').removeClass("iconjianhao");
				}
				if (cascade) {
					checkChildren(this);
					checkParent(this);
				}
			})
	
			//使点击a标签等同于点击  
			$(tree).on("click", "a", function() {
				if ($(this).prev().prev().prev()[0].checked) {
					$(this).prev().prev().prev().removeAttr("checked");
					$(this).prev().prev().children('i').removeClass("iconicon-checkbox");
					$(this).prev().prev().children('i').removeClass("iconjianhao");
				} else {
					$(this).prev().prev().prev().prop("checked", 'true');
					$(this).prev().prev().children('i').addClass("iconicon-checkbox");
				}
				//判断是否为子父级联
				if (cascade) {
					checkChildren($(this).prev().prev().prev()[0]);
					checkParent($(this).prev().prev().prev()[0]);
				}
			})
	
			//id相等就选中
			const insert = (children, arr) => {
				for (let a in arr) {
					if (children.id == arr[a]) {
						children.checked = true
					}
				}
			}
	
			//设置tree节点是否选中
			function setCheckedNodes(data, arrs) {
				for (let x in data) {
					let children = data[x].children;
					if (children != null) {
						for (let y in children) {
							insert(children[y], arrs)
							setCheckedNodes(children, arrs);
						}
					} else {
						return;
					}
				}
			}
	
			//递归
			let ids = 0;
			let that = this;
			function createTree(data) {
				let uuid = that.uuid(); 
				let str = '<ul class="leg_tree">';
				for (let i = 0; i < data.length; i++) {
					ids++;
					str +=
						'<li><i class="isShow iconfont iconxiangxia"></i>'
					if (data[i].checked) {
						str += '<input id="' + uuid+ids + '" type="checkbox" checked ' +
							'data-show="' + data[i].open + '" value="' + data[i].id + '"/>'+
							'<label class="label" for="' +
						uuid+ids + '"><i class="iconfont iconicon-checkbox"/>'
					} else {
						str += '<input id="' + uuid+ids + '" type="checkbox" ' +
							'data-show="' + data[i].open + '" value="' + data[i].id + '"/>'+
							'<label class="label" for="' +
						uuid+ids + '"><i class="iconfont"/>'
					}
					str += '</label><i class="iconfont ' + data[i].ico + '"/><a href="#">' + data[i].name + '</a>';
					if (data[i].children && data[i].children != '') {
						str += createTree(data[i].children);
					}
					str += '</li>';
				};
				str += '</ul>';
				return str;
			};
	
			//通过ID选中Array.isArray(variable)
			if (Array.isArray(arrs)) { //判断是否为数组
				setCheckedNodes(data, arrs);
			}
	
			//把树放到容器
			$(tree).html(createTree(data));
	
			//通过原始数据选中
			$.each($("input:checkbox:checked"), function() {
				checkParent(this)
			});
	
			//是否展开
			$.each($("input"), function() {
				if (this.getAttribute('data-show') == 'false') {
					$(this).parent().find("ul").hide();
					if ($(this).parent().find("ul").length > 0) {
						$(this).prev()[0].setAttribute("style", 'transform:rotate(-90deg)');
					} else {
						$(this).prev()[0].setAttribute("style", 'opacity: 0;');
					}
	
				} else {
					$(this).parent().find("ul").show();
					if ($(this).parent().find("ul").length > 0) {
						$(this).prev()[0].setAttribute("style", 'transform:rotate(0deg)');
					} else {
						$(this).prev()[0].setAttribute("style", 'opacity: 0;');
					}
				}
			});
			if($('.iconfont').hasClass('fa')){
				$('.fa').removeClass('iconfont')
			}
		}
  }

  $.extend({
	  tree:function(options){
			return new MyLeg(options).init();
	  },
	  getCheckedNodes:function(){
			return new MyLeg().getCheckedNodes();
	  },
	  getHalfSelected:function(){//半选中id集合
			return new MyLeg().getHalfSelected();
	  },
	  getAll:function(){//所有选中id集合
			return new MyLeg().getAll();
	  },
	  synTree:(options)=>{
	  	return new MyLeg().synTree(options);
	  }
  })
  
 global.leg = global.$ = $;
  
})(this)