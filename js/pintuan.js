setRem();
window.addEventListener("orientationchange",function (){
		window.location.reload();
},false);
window.addEventListener("resize",function (){
		window.location.reload();
},false);
function setRem(){
	var pixelRatio = 1/window.devicePixelRatio;
	document.write('<meta name="viewport" content="width=device-width,initial-scale='+pixelRatio+', minimum-scale='+pixelRatio+', maximum-scale='+pixelRatio+'">');

	var html = document.getElementsByTagName('html')[0];
	var pageWidth = html.getBoundingClientRect().width;
	html.style.fontSize = pageWidth/16+'px';
}



$(function (){
	hzlzh.app.tab();
	hzlzh.app.banner();
	hzlzh.app.ad();
	hzlzh.app.btn_1();
	hzlzh.app.tab_1();
	hzlzh.app.btn_2();
	hzlzh.app.btn_3();
	hzlzh.app.btn_4();
	hzlzh.app.tab_2();
	hzlzh.app.btn_5();
	hzlzh.app.tab_3();
	hzlzh.app.btn_6();
	hzlzh.app.btn_7();
	hzlzh.app.tab_4();
	hzlzh.app.btn_8();
	hzlzh.app.btn_9();
});

var hzlzh = {};

hzlzh.ui = {};
hzlzh.ui.move = function move(obj,num,len,imgWidth){
		var left = parseInt(obj.css('left'))+num;//移动过后的left
		num = '+=' + num; //结果是 +=num
		obj.animate({'left':num},600,function (){
			if(left > -imgWidth){
				obj.css('left',-imgWidth*len);
			}
			else if(left < -imgWidth*len){
				obj.css('left',-imgWidth);
			}
		});
};

hzlzh.ui.showBtn = function (obj,num,sClass){
	obj.eq(num).addClass(sClass).siblings().removeClass(sClass);
};

hzlzh.app = {};

hzlzh.app.tab = function (){
	
	$('.nav_01 a').each(function (index){
		$(this).click(function (){
			
			hzlzh.ui.showBtn($('.nav_01 a'),index,'active');
		});
	});
};

hzlzh.app.banner = function (){
	
	var imgWidth = $('.head_banner li:first').width();
	$('.head_banner').width($('.head_banner li').length*imgWidth);
	
	$('.head_banner').css('left',-imgWidth);
	
	var len = 3;
	var iNow = 0;
	
	var timer = null;
	
	timer = setInterval(function (){
		hzlzh.ui.move($('.head_banner'),-imgWidth,len,imgWidth);
		if(iNow == len-1){
			iNow = 0;
		}
		else{
			iNow++;
		}
		hzlzh.ui.showBtn($('.head_box .btn a'),iNow,'active');
	},3000);
	
	var startX = 0;
	var startEl = 0;
	var disX = 0;
	$('.head_banner').on('touchstart',function(ev){
		ev.preventDefault();
		clearInterval(timer);
		
		startX = ev.originalEvent.changedTouches[0].pageX;
		startEl = $(this).offset().left;
	});
	
	$('.head_banner').on('touchmove',function(ev){
		
		this.isMove = true;
		
		var moveX = ev.originalEvent.changedTouches[0].pageX;
		var disX = moveX - startX;
		var left = startEl+disX;
		$(this).css('left',left);
	});
			
	$('.head_banner').on('touchend',function(){
		
		if(!this.isMove){
				window.location.href = this.querySelector('a').href;
			}
		this.isMove = false;
		
		var left = $(this).offset().left;
		var now = Math.round(-left/$('body').width());

		console.log(now);
		left = -now*$('body').width();
		if(left>-imgWidth){
			left = -len*imgWidth;
			now = 3;
		}
		else if(left<-len*imgWidth){
			left = -imgWidth;
			now = 1;
		}
		$(this).css('left',left);
		hzlzh.ui.showBtn($('.head_box .btn a'),now-1,'active');
		
		timer = setInterval(function (){
			hzlzh.ui.move($('.head_banner'),-imgWidth,len,imgWidth);
			if(iNow == len-1){
				iNow = 0;
			}
			else{
				iNow++;
			}
			hzlzh.ui.showBtn($('.head_box .btn a'),iNow,'active');
		},3000);
	});		
};

hzlzh.app.ad = function (){
	$('.ad').width($('.ad li').length*$('.ad li:first').width());
	$('.ad').css('left',-$('.ad li:first').width());
	
	var imgWidth = $('.ad li:first').width();
	var len = 2;
	var iNow = 0;
	
	var timer = null;
	timer = setInterval(function (){
		hzlzh.ui.move($('.ad'),-imgWidth,len,imgWidth);
		if(iNow == len-1){
			iNow = 0;
		}
		else{
			iNow++;
		}
		hzlzh.ui.showBtn($('#btn a'),iNow,'active');
	},3000);
	
	var startX = 0;
	var startEl = 0;
	var disX = 0;
	
	$('.ad').on('touchstart',function(ev){
		
		clearInterval(timer);
		
		startX = ev.originalEvent.changedTouches[0].pageX;
		startEl = $(this).offset().left;
	});
	
	$('.ad').on('touchmove',function(ev){
		
		ev.preventDefault();
		this.isMove = true;
		
		var moveX = ev.originalEvent.changedTouches[0].pageX;
		var disX = moveX - startX;
		var left = startEl+disX;
		$(this).css('left',left);
		
	});
			
	$('.ad').on('touchend',function(){
		
		if(!this.isMove){
				window.location.href = this.querySelector('a').href;
			}
		this.isMove = false;
		
		var left = $(this).offset().left;
		var now = Math.round(-left/$('body').width());

		console.log(now);
		left = -now*$('body').width();
		if(left>-imgWidth){
			left = -len*imgWidth;
			now = 2;
		}
		else if(left<-len*imgWidth){
			left = -imgWidth;
			now = 1;
		}
		$(this).css('left',left);
		hzlzh.ui.showBtn($('#btn a'),now-1,'active');
		
		timer = setInterval(function (){
			hzlzh.ui.move($('.ad'),-imgWidth,len,imgWidth);
			if(iNow == len-1){
				iNow = 0;
			}
			else{
				iNow++;
			}
			hzlzh.ui.showBtn($('#btn a'),iNow,'active');
		},3000);
	});		
	
};
hzlzh.app.btn_1 = function (){
	$('.head_box .btn_1').click(function (){
		history.back();
	});
};

hzlzh.app.tab_1 = function (){
	$('.head_box .list li').each(function (index){
		$(this).click(function (){
			$('.head_box .list li').eq(index).addClass('active').siblings().removeClass('active');
		});
	});
};

hzlzh.app.btn_2 = function (){
	$('.head_box .btn_2').click(function (){
		if($('.head_box .list_1').css('display') == 'none'){
			$('.head_box .list_1').css('display','block');
		}
		else{
			$('.head_box .list_1').css('display','none');
		}
		
	});
};
hzlzh.app.btn_3 = function (){
	$('.sec_02 .detail').click(function (){
		$('.sec_02 .div_3').css('display','block');
		var h = $(document).height();
		$('body').append('<div id="overlay"></div>');
		$('#overlay').css({
			'height':h,
			'width':'100%', //这个百分数要加引号
			'background':'rgba(0,0,0,0.5)',
			'position':'absolute',
			'left':0, 'top':0,
			'z-index':4
		});
	});
	$('.sec_02 .close').click(function (){
		$('.sec_02 .div_3').css('display','none');
		$('#overlay').remove();
	});
};

hzlzh.app.btn_4 = function (){
	$('.sec_03 .detail').click(function (){
		$(this).css('transition','500ms');
		if($('.sec_03 .info').css('display')=='none'){
			$(this).css('transform','rotate(180deg)');
		    $('.sec_03').css('height','21.325rem')
		    $('.sec_03 .info').css('display','block');
		}
		else{
			$(this).css('transform','rotate((-180)deg)');
		    $('.sec_03').css('height','8.95rem')
		    $('.sec_03 .info').css('display','none');
		}
		
	});
};

hzlzh.app.tab_2 = function (){
	$('#detail').click(function(){
		$('#parameter').removeClass('active');
		$(this).addClass('active');
		$('.sec_05 .detail').css('display','block');
		$('.sec_05 .parameter').css('display','none');
	});
	$('#parameter').click(function(){
		$('#detail').removeClass('active');
		$(this).addClass('active');
		$('.sec_05 .parameter').css('display','block');
		$('.sec_05 .detail').css('display','none');
	});
};

hzlzh.app.btn_5 = function (){
	$('.nav .dan').click(function (){
		$('.nav .dan .xiang').css('display','block');
		var h = $(document).height();
		$('body').append('<div id="overlay"></div>');
		$('#overlay').css({
			'height':h,
			'width':'100%', //这个百分数要加引号
			'background':'rgba(0,0,0,0.5)',
			'position':'absolute',
			'left':0, 'top':0,
			'z-index':3 //此处因为.xiang的父级.nav设置了层级，则需要.xiang的父级.nav的层级高过它
		});
	});
	
	$('.nav .tuan').click(function (){
		$('.nav .tuan .xiang').css('display','block');
		var h = $(document).height();
		$('body').append('<div id="overlay"></div>');
		$('#overlay').css({
			'height':h,
			'width':'100%', //这个百分数要加引号
			'background':'rgba(0,0,0,0.5)',
			'position':'absolute',
			'left':0, 'top':0,
			'z-index':3 //此处因为.xiang的父级.nav设置了层级，则需要.xiang的父级.nav的层级高过它
		});
	});
	
	$('.nav .close').click(function (ev){
		ev.stopPropagation();
		$('.nav .xiang').css('display','none');
		$('#overlay').remove();
	});
	
	$('.dan .reduce').click(function (ev){
		ev.stopPropagation();
		var num_reduce = parseInt($('.dan .num').html())-1;
		if(num_reduce <1){
			num_reduce = 1;
		}
		$('.dan .num').html(num_reduce);
		$('.dan .price span').html(num_reduce*200);
	});
	
	$('.dan .add').click(function (ev){
		ev.stopPropagation();
		var num_add = parseInt($('.dan .num').html())+1;
		if(num_add > 100){
			num_add = 100;
		}
		$('.dan .num').html(num_add);
		$('.dan .price span').html(num_add*200);
	});
	
	$('.dan .cart').click(function (ev){
		ev.stopPropagation();
		var num = $('.dan .num').html();
		$('.nav .ge').html(num);
		$('.nav .xiang').css('display','none');
		$('#overlay').remove();
	});
	
	$('.dan .buy').click(function (ev){
		ev.stopPropagation();
		$('#overlay').remove();
	});
	
	$('.tuan .reduce').click(function (ev){
		ev.stopPropagation();
		var num_reduce = parseInt($('.tuan .num').html())-1;
		if(num_reduce <1){
			num_reduce = 1;
		}
		$('.tuan .num').html(num_reduce);
		$('.tuan .price span').html(num_reduce*100);
	});
	
	$('.tuan .add').click(function (ev){
		ev.stopPropagation();
		var num_add = parseInt($('.tuan .num').html())+1;
		if(num_add > 100){
			num_add = 100;
		}
		$('.tuan .num').html(num_add);
		$('.tuan .price span').html(num_add*100);
	});
	
	$('.tuan .group').click(function (ev){
		ev.stopPropagation();
		var num = $('.tuan .num').html();
		$('.nav .ge').html(num);
		$('.nav .xiang').css('display','none');
		$('#overlay').remove();
	});
};

hzlzh.app.tab_3 = function (){
	$('.li_01 .div_1').click(function (ev){
		ev.stopPropagation();
	});
	$('.li_01').each(function (){
		$(this).click(function (){
			$(this).addClass('active').siblings().removeClass('active');
			$(this).children('.div_1').css('display','block');
			$(this).siblings().children('.div_1').css('display','none');
		});
	});
};

hzlzh.app.btn_6 = function (){
	$('.btn_3').click(function (){
		history.back();
	});
	$('.foot_01').click(function (){
		history.back();
	});
};

hzlzh.app.btn_7 = function (){
	
	$('.head_01 .text').on('input',function (){
		var str = $('#text').val();
		if(str != ''){
			$('.clear_01').css('display','block');
		}
		else{
			$('.clear_01').css('display','none');
		}
	});
	$('.clear_01').click(function (){
		$('.head_01 .text').val('');
		$(this).css('display','none');
	});
	
	
};

hzlzh.app.tab_4 = function (){
	var imgWidth = $('.sec_01 .list li:first').width();
	$('.sec_01 .list').width($('.sec_01 .list li').length*imgWidth);
	
	$('.sec_01 .list').css('left',-imgWidth);
	
	var len = 3;
	var iNow = 0;
	
	var startX = 0;
	var startEl = 0;
	var disX = 0;
	$('.sec_01 .list').on('touchstart',function(ev){
		ev.preventDefault();
		
		startX = ev.originalEvent.changedTouches[0].pageX;
		startEl = $(this).offset().left;
	});
	
	$('.sec_01 .list').on('touchmove',function(ev){
		
		var moveX = ev.originalEvent.changedTouches[0].pageX;
		var disX = moveX - startX;
		var left = startEl+disX;
		$(this).css('left',left);
	});
			
	$('.sec_01 .list').on('touchend',function(){
		
		var left = $(this).offset().left;
		var now = Math.round(-left/$('body').width());

		left = -now*$('body').width();
		if(left>-imgWidth){
			left = -len*imgWidth;
			now = 3;
		}
		else if(left<-len*imgWidth){
			left = -imgWidth;
			now = 1;
		}
		$(this).css('left',left);
		hzlzh.ui.showBtn($('.btn a'),now-1,'active');
		
	});		
};

hzlzh.app.btn_8 = function (){
	$('.head_03 .back').click(function (){
		history.back();
	});
};

hzlzh.app.btn_9 = function (){
	$('#form_01 span').click(function (){
		if(this.className == ''){
			this.className = 'active';
		}
		else{
			this.className = '';
		}
	});
};