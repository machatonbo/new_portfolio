

$(function() {
  // ハンバーガーメニューをクリックしたときの処理
  $('.hamburger').click(function() {
    // メニューの表示切替
    $('.menu').toggleClass('open'); // メニューを開閉
    // ハンバーガーボタンのアクティブクラスを切り替えて三本線をバツにする
    $(this).toggleClass('active');
  });
});
gsap.fromTo(
    ".concept-text",
        1,
        {
            y: 50,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".concept-text",
                start: "top center",
                markers: false
            }
        }
)
gsap.fromTo(
    ".works-items",
        1,
        {
            y: 50,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".works-items",
                start: "top center",
                markers: false
            }
        }
)

gsap.fromTo(
    ".column-left",
        1,
        {
            x: -100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".column-left",
                start: "top center",
                markers: false
            }
        }
)
gsap.fromTo(
    ".column-right",
        1,
        {
            x: 100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".column-right",
                start: "center center",
                markers: false
            }
        }
)