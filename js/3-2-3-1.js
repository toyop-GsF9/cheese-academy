function fadeAnime() {

	// ふわっ
	$('.trigger').each(function () { //fadeUpTriggerというクラス名が
		var elemPos = $(this).offset().top - 30;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
		} else {
			$(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
		}
	});
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

particlesJS("particles-js", {
	"particles": {
		"number": {
			"value": 30,//この数値を変更すると桜の数が増減できる
			"density": {
				"enable": true,
				"value_area": 1121.6780303333778
			}
		},
		"color": {
			"value": "#fff"
		},
		"shape": {
			"type": "image",//形状は画像を指定
			"stroke": {
				"width": 0,
			},
			"image": {
				"src": "http://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/move02/5-6/img/flower.png",//【重要】画像を指定！桜の画像を設定してください。
				"width": 120,
				"height": 120
			}
		},
		"opacity": {
			"value": 0.06409588744762158,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": 8.011985930952697,
			"random": true,//サイズをランダムに
			"anim": {
				"enable": false,
				"speed": 4,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": false,
		},
		"move": {
			"enable": true,
			"speed": 7,//この数値を小さくするとゆっくりな動きになる
			"direction": "bottom-right",//右下に向かって落ちる
			"random": false,//動きはランダムにしない
			"straight": false,//動きをとどめない
			"out_mode": "out",//画面の外に出るように描写
			"bounce": false,//跳ね返りなし
			"attract": {
				"enable": false,
				"rotateX": 281.9177489524316,
				"rotateY": 127.670995809726
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": false,
			},
			"onclick": {
				"enable": false,
			},
			"resize": true
		}
	},
	"retina_detect": false
});