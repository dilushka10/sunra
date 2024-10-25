import $ from 'jquery';
import Swiper from 'swiper';
import swiperAnimateCache from './miku_super/swiper.animate1.0.2.min.js';
import swiperAnimate from './miku_super/swiper.animate1.0.2.min.js';
import text from './miku_super/jquery.countup.min.js';
import WOW from 'wow.js';

$(function () {
	index.swiper();
	index.click();
	index.top();
	index.tab();
	index.menu();
	index.canshu();
	index.video();
	index.pro();
	index.filter();
	index.tyd();
	index.color();
	index.dh();
	index.filter();
	index.move01()
});
var index = {
	swiper: function () {
		var swiper = new Swiper('.container_banner', {
			pagination: {
				el: '.pagination_banner',
				clickable: true,
			},
			autoplay: true,
			speed: 1000,
			observer: true,
			observeParents: true,
			on: {
				init: function () {
					swiperAnimateCache(this);
					swiperAnimate(this)
				},
				slideChangeTransitionEnd: function () {
					swiperAnimate(this)
				}
			}
		});

		var swiper = new Swiper('.nmk02swiper .swiper-container', {
			direction: 'vertical',
			autoHeight: true,
			height : window.innerHeight,
			autoplay: true,
			speed: 1000,
			pagination: {
				el: '.nmk02swiper .swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
					switch(index){
						case 0:text='Red';break;
						case 1:text='Blue';break;
						case 2:text='Pink';break;
						case 3:text='Orange';break;
						case 4:text='Green';break;
						case 5:text='Gray';break;
					}
					return '<span class="' + className + '">' + text + '</span>';
			},
			
		     
		},
		
		
		});
		
		
		var swiper = new Swiper('.legend_05 .swiper-container', {
			direction: 'vertical',
			autoHeight: true,
			height : window.innerHeight - 130,
			autoplay: true,
			speed: 1000,
			pagination: {
				el: '.dream05.swiper-pagination',
				clickable: true,
	
		},
		
		breakpoints: {
				1600: {
					height : 880,
				},
				1200: {
					height : 660,
				},
				990: {
					height : 544,
				},
				767: {
				   height : 420,
				},
			}
		
		
		});
		
				var swiper = new Swiper('.dream_05 .swiper-container', {
			direction: 'vertical',
			autoHeight: true,
			height : window.innerHeight - 175,
			autoplay: true,
			speed: 1000,
			pagination: {
				el: '.dream05.swiper-pagination',
				clickable: true,
	
		},
		
		breakpoints: {
				1600: {
					height : 750,
				},
				990: {
					height : 450,
				},
				767: {
				   height : 350,
				},
			}
		
		
		});


		// future开始
		var f5width = document.body.offsetWidth;
		var f5height = 934/1920 * f5width -1;
		var mySwiper = new Swiper('#future05 .swiper-container', {
    	direction: 'vertical',
    	height : f5height,
    	pagination: {
        	el: '#future05 .swiper-pagination',
        	clickable:true,
        	bulletClass : 'future05-bullet',
        	bulletActiveClass: 'future05-bullet-active',
      	},
    	autoHeight: true,
		});

		var swiper = new Swiper('.container_miku14', {
			pagination: {
				el: '.pagination_miku14',
				clickable: true,
			},
		});
		

		var swiper = new Swiper(".retrolax19 .swiper-container", {
			autoplay: true,
			autoHeight: true,
			speed: 1000,
			height: window.innerHeight,
			navigation: {
				nextEl: '.retro19.swiper-button-next',
				prevEl: '.retro19.swiper-button-prev',
			},
		});
		
	
            var swiper = new Swiper('.Robos2302swiper .swiper-container', {
                autoHeight: true,
                height : window.innerHeight,
                // autoplay: true,
                speed: 1000,
                pagination: {
                    el: '.Robos2302swiper .swiper-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        switch(index){
                            case 0:text='BLACK';break;
                            case 1:text='WHITE';break;
                    
                        }
                        return '<span class="' + className + '">' + '<p>' + text +'</p>' + '</span>';
                },
                
                 
            },
            
            
            });



		var swiper = new Swiper(".retrolax20 .swiper-container", {
			autoplay: true,
			autoHeight: true,
			speed: 1000,
			height: window.innerHeight,
			pagination: {
				el: ".retro20.swiper-pagination",
				clickable: true,
			},
		});



		var swiper = new Swiper("#mk_o7 .swiper-container", {
			autoplay: true,
			autoHeight: true,
			speed: 1000,
			height: window.innerHeight,
			pagination: {
				el: ".hawk01.swiper-pagination",
				clickable: true,
			},
		});
		
		
		var swiper = new Swiper(".RONIC_ronic0 .swiper-container", {
			autoplay: true,
			autoHeight: true,
			speed: 1000,
             pagination: {
          el: ".RONIC_ronic0 .swiper-pagination",
          type: "progressbar",
        },
     
			navigation: {
				nextEl: '.RONIC_ronic0 .swiper-button-next',
				prevEl: '.RONIC_ronic0 .swiper-button-prev',
			},
		});


		var swiper = new Swiper(".hawk_03_right .swiper-container", {
			autoplay: true,
			autoHeight: true,
			speed: 1000,
			height: window.innerHeight,
			pagination: {
				el: ".hawk03.swiper-pagination",
				clickable: true,
			},
		});

		var swiper = new Swiper('.container_ab', {
			slidesPerView: 4,
			spaceBetween: 35,
			freeMode: true,
			breakpoints: {
				1024: {
					slidesPerView: 2,
					spaceBetween: 15
				},
				767: {
					slidesPerView: 1,
					spaceBetween: 0
				},
			}
		});
		var swiper = new Swiper('.container_zhdes', {
			navigation: {
				nextEl: '.next_zhdes',
				prevEl: '.prev_zhdes',
			},
		});



		var swiper = new Swiper('.ronglb .swiper-container', {
			navigation: {
				nextEl: '.ronglb .swiper-button-next',
				prevEl: '.ronglb .swiper-button-prev',
			},
			autoplay: true,
			speed: 1000,
			autoplayDisableOnInteraction: true,
			loop: true,
		});






		var swiper = new Swiper('.container_cr05', {
			navigation: {
				nextEl: '.next_cr05',
				prevEl: '.prev_cr05',
			},
			speed: 1000,
			autoplayDisableOnInteraction: true,
			loop: true,
			centeredSlides: true,
			slidesPerView: 2,
			paginationClickable: true,
			onInit: function (swiper) {
				swiper.slides[2].className = "swiper-slide swiper-slide-active"
			},
			breakpoints: {
				668: {
					slidesPerView: 1,
				}
			}
		});
		var swiper = new Swiper('.container_zb05', {
			pagination: {
				el: '.pagination_zb05',
				clickable: true,
			},
			autoplay: true,
			speed: 1000,
			observer: true,
			observeParents: true,
		});
		var swiper = new Swiper('.container_r5', {
			slidesPerView: 2,
			spaceBetween: 30,
			freeMode: true,
			autoplay: true,
			observer: true,
			observeParents: true,
			speed: 1000,
			breakpoints: {
				767: {
					slidesPerView: 1,
					spaceBetween: 15
				},
			}
		});
		
		
			var swiper = new Swiper('.container_r6', {
			slidesPerView: 3,
			spaceBetween: 50,
			freeMode: true,
			autoplay: true,
			observer: true,
			observeParents: true,
			speed: 1000,
			breakpoints: {
				767: {
					slidesPerView: 1,
					spaceBetween: 15
				},
			}
		});
		
		
		
		var swiper = new Swiper('.container_ban_bottom', {
			slidesPerView: 3,
			spaceBetween: 20,
			pagination: {
				el: '.pagination_ban_bottom',
				clickable: true,
			},
			breakpoints: {
				767: {
					slidesPerView: 1.2,
					spaceBetween: 15
				},
			}
		});
		var swiper = new Swiper('.container_miku05', {
			pagination: {
				el: '.pagination_miku05',
				clickable: true,
			},
			autoplay: true,
			observer: true,
			observeParents: true,
			speed: 1000,
		});
		var swiper = new Swiper('.container_pro100', {
			spaceBetween: 0,
			pagination: {
				el: '.pagination_pro100',
				clickable: true,
			},
			autoplay: true,
			observer: true,
			observeParents: true,
			speed: 1000,
		});
		var swiper = new Swiper('.container_foot_new', {
			direction: 'vertical',
			navigation: {
				nextEl: '.next_foot_new',
				prevEl: '.prev_foot_new',
			},
			autoplay: true,
			observer: true,
			observeParents: true,
			loop: true,
		})
	},
	video: function () { },
	click: function () {
		$(".faq_list dl dt").click(function () {
			$(this).parents("dl").find("dd").slideDown();
			$(this).parents("dl").siblings("dl").find("dd").slideUp()
		});
		$(".miku_btn i").text("");


	},
	canshu: function () { },
	tab: function () {
		$(".miku14_l ul li").click(function () {
			$(this).addClass("active").siblings("li").removeClass("active");
			var src = $(this).find("img").attr("src");
			$(".miku14_r img").attr("src", src)
		});
		$(".sec_lul li").hover(function () {
			$(this).addClass("active").siblings("li").removeClass("active");
			var index = $(this).index();
			$(".sec_rul_w").eq(index).addClass("active").siblings(".sec_rul_w").removeClass("active")
		});
		$(".table_w tr").each(function () {
			$(this).attr("style", "vertical-align:top")
		})
	},
	color: function () {
		var bc1_00 = $(".bgColor01 .swiper-slide").eq(0).attr("bgcolor");
		var bc1_01 = $(".bgColor01 .swiper-slide").eq(1).attr("bgcolor");
		var bc1_02 = $(".bgColor01 .swiper-slide").eq(2).attr("bgcolor");
		var bc1_03 = $(".bgColor01 .swiper-slide").eq(3).attr("bgcolor");
		var bc1_04 = $(".bgColor01 .swiper-slide").eq(4).attr("bgcolor");
		var bc1_05 = $(".bgColor01 .swiper-slide").eq(5).attr("bgcolor");
		var bc2_00 = $(".bgColor02 .swiper-slide").eq(0).attr("bgcolor");
		var bc2_01 = $(".bgColor02 .swiper-slide").eq(1).attr("bgcolor");
		var bc2_02 = $(".bgColor02 .swiper-slide").eq(2).attr("bgcolor");
		var bc2_03 = $(".bgColor02 .swiper-slide").eq(3).attr("bgcolor");
		var bc2_04 = $(".bgColor02 .swiper-slide").eq(4).attr("bgcolor");
		var bc2_05 = $(".bgColor02 .swiper-slide").eq(5).attr("bgcolor");
		var bc3_00 = $(".bgColor03 .swiper-slide").eq(0).attr("bgcolor");
		var bc3_01 = $(".bgColor03 .swiper-slide").eq(1).attr("bgcolor");
		var bc3_02 = $(".bgColor03 .swiper-slide").eq(2).attr("bgcolor");
		var bc3_03 = $(".bgColor03 .swiper-slide").eq(3).attr("bgcolor");
		var bc3_04 = $(".bgColor03 .swiper-slide").eq(4).attr("bgcolor");
		var bc3_05 = $(".bgColor03 .swiper-slide").eq(5).attr("bgcolor");
		var bc4_00 = $(".bgColor04 .swiper-slide").eq(0).attr("bgcolor");
		var bc4_01 = $(".bgColor04 .swiper-slide").eq(1).attr("bgcolor");
		var bc4_02 = $(".bgColor04 .swiper-slide").eq(2).attr("bgcolor");
		var bc4_03 = $(".bgColor04 .swiper-slide").eq(3).attr("bgcolor");
		var bc4_04 = $(".bgColor04 .swiper-slide").eq(4).attr("bgcolor");
		var bc4_05 = $(".bgColor04 .swiper-slide").eq(5).attr("bgcolor");
		var bc5_00 = $(".bgColor05 .swiper-slide").eq(0).attr("bgcolor");
		var bc5_01 = $(".bgColor05 .swiper-slide").eq(1).attr("bgcolor");
		var bc5_02 = $(".bgColor05 .swiper-slide").eq(2).attr("bgcolor");
		var bc5_03 = $(".bgColor05 .swiper-slide").eq(3).attr("bgcolor");
		var bc5_04 = $(".bgColor05 .swiper-slide").eq(4).attr("bgcolor");
		var bc5_05 = $(".bgColor05 .swiper-slide").eq(5).attr("bgcolor");
		var bc6_00 = $(".bgColor06 .swiper-slide").eq(0).attr("bgcolor");
		var bc6_01 = $(".bgColor06 .swiper-slide").eq(1).attr("bgcolor");
		var bc6_02 = $(".bgColor06 .swiper-slide").eq(2).attr("bgcolor");
		var bc6_03 = $(".bgColor06 .swiper-slide").eq(3).attr("bgcolor");
		var bc6_04 = $(".bgColor06 .swiper-slide").eq(4).attr("bgcolor");
		var bc6_05 = $(".bgColor06 .swiper-slide").eq(5).attr("bgcolor");
		var bc7_00 = $(".bgColor07 .swiper-slide").eq(0).attr("bgcolor");
		var bc7_01 = $(".bgColor07 .swiper-slide").eq(1).attr("bgcolor");
		var bc7_02 = $(".bgColor07 .swiper-slide").eq(2).attr("bgcolor");
		var bc7_03 = $(".bgColor07 .swiper-slide").eq(3).attr("bgcolor");
		var bc7_04 = $(".bgColor07 .swiper-slide").eq(4).attr("bgcolor");
		var bc7_05 = $(".bgColor07 .swiper-slide").eq(5).attr("bgcolor");
		var bc8_00 = $(".bgColor08 .swiper-slide").eq(0).attr("bgcolor");
		var bc8_01 = $(".bgColor08 .swiper-slide").eq(1).attr("bgcolor");
		var bc8_02 = $(".bgColor08 .swiper-slide").eq(2).attr("bgcolor");
		var bc8_03 = $(".bgColor08 .swiper-slide").eq(3).attr("bgcolor");
		var bc8_04 = $(".bgColor08 .swiper-slide").eq(4).attr("bgcolor");
		var bc8_05 = $(".bgColor08 .swiper-slide").eq(5).attr("bgcolor");
		var bc9_00 = $(".bgColor09 .swiper-slide").eq(0).attr("bgcolor");
		var bc9_01 = $(".bgColor09 .swiper-slide").eq(1).attr("bgcolor");
		var bc9_02 = $(".bgColor09 .swiper-slide").eq(2).attr("bgcolor");
		var bc9_03 = $(".bgColor09 .swiper-slide").eq(3).attr("bgcolor");
		var bc9_04 = $(".bgColor09 .swiper-slide").eq(4).attr("bgcolor");
		var bc9_05 = $(".bgColor09 .swiper-slide").eq(5).attr("bgcolor");
		var bc10_00 = $(".bgColor10 .swiper-slide").eq(0).attr("bgcolor");
		var bc10_01 = $(".bgColor10 .swiper-slide").eq(1).attr("bgcolor");
		var bc10_02 = $(".bgColor10 .swiper-slide").eq(2).attr("bgcolor");
		var bc10_03 = $(".bgColor10 .swiper-slide").eq(3).attr("bgcolor");
		var bc10_04 = $(".bgColor10 .swiper-slide").eq(4).attr("bgcolor");
		var bc10_05 = $(".bgColor10 .swiper-slide").eq(5).attr("bgcolor");
		var bc11_00 = $(".bgColor11 .swiper-slide").eq(0).attr("bgcolor");
		var bc11_01 = $(".bgColor11 .swiper-slide").eq(1).attr("bgcolor");
		var bc11_02 = $(".bgColor11 .swiper-slide").eq(2).attr("bgcolor");
		var bc11_03 = $(".bgColor11 .swiper-slide").eq(3).attr("bgcolor");
		var bc11_04 = $(".bgColor11 .swiper-slide").eq(4).attr("bgcolor");
		var bc11_05 = $(".bgColor11 .swiper-slide").eq(5).attr("bgcolor");
		var bc12_00 = $(".bgColor12 .swiper-slide").eq(0).attr("bgcolor");
		var bc12_01 = $(".bgColor12 .swiper-slide").eq(1).attr("bgcolor");
		var bc12_02 = $(".bgColor12 .swiper-slide").eq(2).attr("bgcolor");
		var bc12_03 = $(".bgColor12 .swiper-slide").eq(3).attr("bgcolor");
		var bc12_04 = $(".bgColor12 .swiper-slide").eq(4).attr("bgcolor");
		var bc12_05 = $(".bgColor12 .swiper-slide").eq(5).attr("bgcolor");
		var bc13_00 = $(".bgColor13 .swiper-slide").eq(0).attr("bgcolor");
		var bc13_01 = $(".bgColor13 .swiper-slide").eq(1).attr("bgcolor");
		var bc13_02 = $(".bgColor13 .swiper-slide").eq(2).attr("bgcolor");
		var bc13_03 = $(".bgColor13 .swiper-slide").eq(3).attr("bgcolor");
		var bc13_04 = $(".bgColor13 .swiper-slide").eq(4).attr("bgcolor");
		var bc13_05 = $(".bgColor13 .swiper-slide").eq(5).attr("bgcolor");
		var bc14_00 = $(".bgColor14 .swiper-slide").eq(0).attr("bgcolor");
		var bc14_01 = $(".bgColor14 .swiper-slide").eq(1).attr("bgcolor");
		var bc14_02 = $(".bgColor14 .swiper-slide").eq(2).attr("bgcolor");
		var bc14_03 = $(".bgColor14 .swiper-slide").eq(3).attr("bgcolor");
		var bc14_04 = $(".bgColor14 .swiper-slide").eq(4).attr("bgcolor");
		var bc14_05 = $(".bgColor14 .swiper-slide").eq(5).attr("bgcolor");
		$(".bgColor01 .pagination_miku14 span").eq(0).css("background", bc1_00);
		$(".bgColor01 .pagination_miku14 span").eq(1).css("background", bc1_01);
		$(".bgColor01 .pagination_miku14 span").eq(2).css("background", bc1_02);
		$(".bgColor01 .pagination_miku14 span").eq(3).css("background", bc1_03);
		$(".bgColor01 .pagination_miku14 span").eq(4).css("background", bc1_04);
		$(".bgColor01 .pagination_miku14 span").eq(5).css("background", bc1_05);
		$(".bgColor02 .pagination_miku14 span").eq(0).css("background", bc2_00);
		$(".bgColor02 .pagination_miku14 span").eq(1).css("background", bc2_01);
		$(".bgColor02 .pagination_miku14 span").eq(2).css("background", bc2_02);
		$(".bgColor02 .pagination_miku14 span").eq(3).css("background", bc2_03);
		$(".bgColor02 .pagination_miku14 span").eq(4).css("background", bc2_04);
		$(".bgColor02 .pagination_miku14 span").eq(5).css("background", bc2_05);
		$(".bgColor03 .pagination_miku14 span").eq(0).css("background", bc3_00);
		$(".bgColor03 .pagination_miku14 span").eq(1).css("background", bc3_01);
		$(".bgColor03 .pagination_miku14 span").eq(2).css("background", bc3_02);
		$(".bgColor03 .pagination_miku14 span").eq(3).css("background", bc3_03);
		$(".bgColor03 .pagination_miku14 span").eq(4).css("background", bc3_04);
		$(".bgColor03 .pagination_miku14 span").eq(5).css("background", bc3_05);
		$(".bgColor04 .pagination_miku14 span").eq(0).css("background", bc4_00);
		$(".bgColor04 .pagination_miku14 span").eq(1).css("background", bc4_01);
		$(".bgColor04 .pagination_miku14 span").eq(2).css("background", bc4_02);
		$(".bgColor04 .pagination_miku14 span").eq(3).css("background", bc4_03);
		$(".bgColor04 .pagination_miku14 span").eq(4).css("background", bc4_04);
		$(".bgColor04 .pagination_miku14 span").eq(5).css("background", bc4_05);
		$(".bgColor05 .pagination_miku14 span").eq(0).css("background", bc5_00);
		$(".bgColor05 .pagination_miku14 span").eq(1).css("background", bc5_01);
		$(".bgColor05 .pagination_miku14 span").eq(2).css("background", bc5_02);
		$(".bgColor05 .pagination_miku14 span").eq(3).css("background", bc5_03);
		$(".bgColor05 .pagination_miku14 span").eq(4).css("background", bc5_04);
		$(".bgColor05 .pagination_miku14 span").eq(5).css("background", bc5_05);
		$(".bgColor06 .pagination_miku14 span").eq(0).css("background", bc6_00);
		$(".bgColor06 .pagination_miku14 span").eq(1).css("background", bc6_01);
		$(".bgColor06 .pagination_miku14 span").eq(2).css("background", bc6_02);
		$(".bgColor06 .pagination_miku14 span").eq(3).css("background", bc6_03);
		$(".bgColor06 .pagination_miku14 span").eq(4).css("background", bc6_04);
		$(".bgColor06 .pagination_miku14 span").eq(5).css("background", bc5_05);
		$(".bgColor07 .pagination_miku14 span").eq(0).css("background", bc7_00);
		$(".bgColor07 .pagination_miku14 span").eq(1).css("background", bc7_01);
		$(".bgColor07 .pagination_miku14 span").eq(2).css("background", bc7_02);
		$(".bgColor07 .pagination_miku14 span").eq(3).css("background", bc7_03);
		$(".bgColor07 .pagination_miku14 span").eq(4).css("background", bc7_04);
		$(".bgColor07 .pagination_miku14 span").eq(5).css("background", bc7_05);
		$(".bgColor08 .pagination_miku14 span").eq(0).css("background", bc8_00);
		$(".bgColor08 .pagination_miku14 span").eq(1).css("background", bc8_01);
		$(".bgColor08 .pagination_miku14 span").eq(2).css("background", bc8_02);
		$(".bgColor08 .pagination_miku14 span").eq(3).css("background", bc8_03);
		$(".bgColor08 .pagination_miku14 span").eq(4).css("background", bc8_04);
		$(".bgColor08 .pagination_miku14 span").eq(5).css("background", bc8_05);
		$(".bgColor09 .pagination_miku14 span").eq(0).css("background", bc9_00);
		$(".bgColor09 .pagination_miku14 span").eq(1).css("background", bc9_01);
		$(".bgColor09 .pagination_miku14 span").eq(2).css("background", bc9_02);
		$(".bgColor09 .pagination_miku14 span").eq(3).css("background", bc9_03);
		$(".bgColor09 .pagination_miku14 span").eq(4).css("background", bc9_04);
		$(".bgColor09 .pagination_miku14 span").eq(5).css("background", bc9_05);
		$(".bgColor10 .pagination_miku14 span").eq(0).css("background", bc10_00);
		$(".bgColor10 .pagination_miku14 span").eq(1).css("background", bc10_01);
		$(".bgColor10 .pagination_miku14 span").eq(2).css("background", bc10_02);
		$(".bgColor10 .pagination_miku14 span").eq(3).css("background", bc10_03);
		$(".bgColor10 .pagination_miku14 span").eq(4).css("background", bc10_04);
		$(".bgColor10 .pagination_miku14 span").eq(5).css("background", bc10_05);
		$(".bgColor11 .pagination_miku14 span").eq(0).css("background", bc11_00);
		$(".bgColor11 .pagination_miku14 span").eq(1).css("background", bc11_01);
		$(".bgColor11 .pagination_miku14 span").eq(2).css("background", bc11_02);
		$(".bgColor11 .pagination_miku14 span").eq(3).css("background", bc11_03);
		$(".bgColor11 .pagination_miku14 span").eq(4).css("background", bc11_04);
		$(".bgColor11 .pagination_miku14 span").eq(5).css("background", bc11_05);
		$(".bgColor12 .pagination_miku14 span").eq(0).css("background", bc12_00);
		$(".bgColor12 .pagination_miku14 span").eq(1).css("background", bc12_01);
		$(".bgColor12 .pagination_miku14 span").eq(2).css("background", bc12_02);
		$(".bgColor12 .pagination_miku14 span").eq(3).css("background", bc12_03);
		$(".bgColor12 .pagination_miku14 span").eq(4).css("background", bc12_04);
		$(".bgColor12 .pagination_miku14 span").eq(5).css("background", bc12_05);
		$(".bgColor13 .pagination_miku14 span").eq(0).css("background", bc13_00);
		$(".bgColor13 .pagination_miku14 span").eq(1).css("background", bc13_01);
		$(".bgColor13 .pagination_miku14 span").eq(2).css("background", bc13_02);
		$(".bgColor13 .pagination_miku14 span").eq(3).css("background", bc13_03);
		$(".bgColor13 .pagination_miku14 span").eq(4).css("background", bc13_04);
		$(".bgColor13 .pagination_miku14 span").eq(5).css("background", bc13_05);
		$(".bgColor14 .pagination_miku14 span").eq(0).css("background", bc14_00);
		$(".bgColor14 .pagination_miku14 span").eq(1).css("background", bc14_01);
		$(".bgColor14 .pagination_miku14 span").eq(2).css("background", bc14_02);
		$(".bgColor14 .pagination_miku14 span").eq(3).css("background", bc14_03);
		$(".bgColor14 .pagination_miku14 span").eq(4).css("background", bc14_04);
		$(".bgColor14 .pagination_miku14 span").eq(5).css("background", bc14_05)
	},
	menu: function () {
		$("header .menu_ul > li").hover(function () {
			$(this).find(".sec_wrap").stop(true).slideDown();
			$(this).siblings("li").find(".sec_wrap").stop(true).slideUp();
			$(".canshu").css("z-index", "80")
		});
		$(".h_r a:nth-child(1)").click(function () {
			$(".ss_w").addClass("active")
		});
		$(".close1").click(function () {
			$(".ss_w").removeClass("active")
		});
		$("header").hover(function () { }, function () {
			$(".sec_wrap").slideUp();
			$(".canshu").css("z-index", "201")
		});
		var flag = true;
		$(".sjmenu_ul > li > .sjmenu_w > i").click(function () {
			if (flag) {
				$(this).css("transform", "rotate(90deg)");
				$(this).parents("li").find(".sjsecmenu").slideDown();
				flag = false
			} else {
				$(this).css("transform", "rotate(00deg)");
				$(this).parents("li").find(".sjsecmenu").slideUp();
				flag = true
			}
			console.log(1)
		});
		$(".sjsecmenu  li").click(function () {
			console.log(1);
			$(this).addClass("active").siblings("li").removeClass("active");
			console.log(2);
			$(this).find(".sjsecmenu_ul02").slideDown();
			$(this).siblings("li").find(".sjsecmenu_ul02").slideUp()
		});
		var f = true;
		$(".ss").click(function () {
			if (f) {
				$(this).find("i").removeClass("icon-caidan").addClass("icon-guanbi");
				$(".sjmenu").addClass("active");
				f = false
			} else {
				$(this).find("i").addClass("icon-caidan").removeClass("icon-guanbi");
				$(".sjmenu").removeClass("active");
				f = true
			}
		})
	},
	video: function () {
		$(".miku01 .miku01_lay .miku01_in .video img").click(function () {
			$(".video_fix").addClass("active");
			$(".video_fix").find("video").trigger("play")
		});
		$(".video_fix i").click(function () {
			$(".video_fix").removeClass("active");
			$(".video_fix").find("video").trigger("pause")
		})
	},
	tyd: function () {
		var $h = $(window).height() - 62;
		var $ul = $h - (2 * $(".select").height() + $(".tyd_l > h3").height() + $(".hide").height() + 120);
		$(".select_ul").css("height", $ul);
		$(".tyd_l,.tyd_r").css("height", $h);
		$(window).resize(function () {
			var $h = $(window).height() - 62;
			var $ul = $h - (2 * $(".select").height() + $(".tyd_l > h3").height() + $(".hide").height() + 120);
			$(".select_ul").css("height", $ul);
			$(".tyd_l,.tyd_r").css("height", $h)
		});
		var flag = true;
		$(".tyd_content .hide").click(function () {
			if (flag) {
				$(this).addClass("active");
				$(".tyd_l").addClass("active");
				$(".tyd_r").addClass("active");
				$(this).find("em").text("show");
				flag = false
			} else {
				$(this).removeClass("active");
				$(".tyd_l").removeClass("active");
				$(".tyd_r").removeClass("active");
				$(this).find("em").text("hide");
				flag = true
			}
		});
		var flag = true;
		$(".sha a:nth-child(2)").click(function () {
			if (flag) {
				$(".weixin_w").show();
				flag = false
			} else {
				$(".weixin_w").hide();
				flag = true
			}
		});
		$(".weixin_w i").click(function () {
			$(".weixin_w").hide()
		});
		$(".miku13img_ul span,.nove_ul span i").each(function () {
			$(this).text("")
		})
	},
	top: function () {
		var $window = $(window);
		$window.scroll(function () {
			var scrollTop = $(document).scrollTop();
			if (scrollTop > 2) {
				$(".canshu").addClass("active");
				$(".fixtop").addClass("active")
			} else {
				$(".canshu").removeClass("active");
				$(".fixtop").removeClass("active")
			}
		});
		$(window).scroll(function () {
			var scrollTop = $(document).scrollTop()
		});
		$(".fixtop").click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 1000);
			return false
		});
		var w = $(window).width();
		if (w < 767) {
			$(".videocp").click(function () {
				$(".vide_fix").addClass("active");
				var src = $(this).find("video").attr("src");
				$(".vide_fix").find("video").attr("src", src).trigger("play")
			});
			$('.vide_fixin i').click(function () {
				$(".vide_fix").removeClass("active");
				$(".vide_fix").find("video").trigger("pause")
			})
		}
	},
	pro: function () {
		$("header .menu_ul > li:nth-child(2) > a,header .sec_lul > li > a").attr("href", "javascript:;")
	},
	filter: function () {
		var $load = window.location.href.split("/")[3];
		$(".zh_con_ul li").each(function () {
			var $href = $(this).find("a").attr("href").split("/")[1];
			if ($load == $href) {
				$(this).addClass("active").siblings("li").removeClass("active")
			}
		})
	},
	dh: function () {
		var scrollTop = 0;
		$(window).scroll(function () {


			if($(".miku07").length!=0){
			var Top = $(".miku07").offset().top;
			var scrollTop = $(document).scrollTop();
			var winTop = (Top - scrollTop) / 10;
			console.log(winTop + "====");
			$(".miku07 .miku07_left,.miku07 .miku07_right").css("width", winTop + "px");
			}
		})
	},
	filter: function () {
		var w = $(window).width();


	
		if($(".miku09").length!=0){
			if (w > 1024) {
				var scrollTop = 0;
	
	
				
				$(window).scroll(function () {
	
	
					var Top = $(".miku09").offset().top;
					var scrollTop = $(document).scrollTop();
					var winTop = Top - scrollTop;
					if (winTop <= -600) {
						$(".miku09").addClass("active")
					} else {
						$(".miku09").removeClass("active")
					}
				})
			} else {
				var scrollTop = 0;
				$(window).scroll(function () {
					var Top = $(".miku09").offset().top;
					var scrollTop = $(document).scrollTop();
					var winTop = Top - scrollTop;
					if (winTop <= -100) {
						$(".miku09").addClass("active")
					} else {
						$(".miku09").removeClass("active")
					}
				})
			}
		}
	
	},
	move01: function () {
		var positionX = 0;
		var positionY = 0;
		$('.move01').mousemove(function (e) {
			var x = e.clientX,
				y = e.clientY;
			var Cx = x - positionX;
			var Cy = y - positionY;
			if (positionX === 0 && positionY === 0) {
				positionX = x;
				positionY = y
			}
			if (x > positionX && y < positionY) {
				positionX = x;
				positionY = y;
				console.log("右");
				$(".move01img").css("transform", "translateX(-10px)")
			} else if (x > positionX && y > positionY) {
				positionX = x;
				positionY = y;
				console.log("右");
				$(".move01img").css("transform", "translateX(-10px)")
			} else if (x < positionX && y < positionY) {
				positionX = x;
				positionY = y;
				positionX = x;
				console.log("左");
				$(".move01img").css("transform", "translateX(10px)")
			} else if (x < positionX && y > positionY) {
				positionX = x;
				positionY = y;
				console.log("左");
				$(".move01img").css("transform", "translateX(10px)")
			}
		});
		$.extend($.easing, {
			easeOutBack: function (x, t, b, c, d, s) {
				if (s == undefined) s = 1.70158;
				return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
			},
			easeOutCubic: function (x, t, b, c, d) {
				return c * ((t = t / d - 1) * t * t + 1) + b
			}
		})
	}
}


$(function () {

	new WOW().init();

	$('.counter').countUp();
	
	
	var s1_box04_lunbo = new Swiper('.s1_box04_lunbo .swiper-container', {
		  //effect: "fade",

			autoplay: true,
			speed: 1000,
	
	
			pagination: {
				el: '.s1_box04_lunbo .dream05.swiper-pagination',
				clickable: true,
	
		},
		
		})


});
var mySwiper = new Swiper('.prosuper_sj6 .swiper-container', {
	speed: 1000,
	mousewheel: {
		releaseOnEdges: true,

	},
	on: {
		init: function () {
			swiperAnimateCache(this); //隐藏动画元素 
			swiperAnimate(this); //初始化完成开始动画
			// this.slides.eq(this.activeIndex).find('.prosupe_heightBg') .addClass('active');
		},
		slideChangeTransitionEnd: function () {
			swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
			// this.slides.eq(this.activeIndex).find('.prosupe_heightBg').removeClass('active');
		},
		slideChangeTransitionEnd: function () {
			// this.slides.eq(this.activeIndex).find('.prosupe_heightBg') .addClass('active');

			swiperAnimate(this); //每个slide切换结束时也运行当前slide动画

		}
	}
})

	
      $('.q5_box6_ul li').click(function(){
            let i=$(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            $('.q5_box6_img>div').eq(i).show().siblings().hide();


        });
        
        	var d = true;
		$(".sjhead .dds ").click(function () {
			if (d) {
				$(this).find("i").removeClass("icon-yuyan").addClass("icon-guanbi");
				$(".sjhead  .dropdown-menu").show();
			d = false;
			} else {
				$(this).find("i").addClass("icon-yuyan").removeClass("icon-guanbi");
				$(".sjhead  .dropdown-menu").hide();
			d = true
			}
		})
        
        

