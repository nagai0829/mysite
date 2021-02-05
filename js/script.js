$(function() {
    //drawer js
    $('.drawer').drawer()
})

// smoothscrol
// #から始まるurlがクリックされたとき
$(function() {
    // $('a[href^="#"]').click(function() {
    //     //移動速度の指定
    //     let speed = 300;
    //     //　hrefで指定されたidを取得
    //     let id = $(this).attr("href");
    //     // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    //     let target = $("#" == id ? 'html' : id);
    //     // ページトップを基準にターゲットの位置を取得
    //     let position = $(target).offset().top - $(`#js-header`).outerHeight();
    //     // ターゲットの位置までspeedで移動
    //     $("html, body").animate({
    //         scrollTop: position
    //     }, speed);
    //     return false;
    // });


    // #から始まるURLがクリックされた時
    jQuery('a[href^="#"]').click(function() {
        // 移動速度を指定（ミリ秒）
        let speed = 300;
        // hrefで指定されたidを取得
        let id = jQuery(this).attr("href");
        // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
        let target = jQuery("#" == id ? "html" : id);
        // ページのトップを基準にターゲットの位置を取得
        let position = jQuery(target).offset().top - $(`#js-header`).outerHeight();
        // ターゲットの位置までspeedの速度で移動
        jQuery("html, body").animate({
                scrollTop: position
            },
            speed
        );
        return false;
    });

    // wowjs
    new WOW().init()



});