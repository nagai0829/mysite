$(function() {
    // メール送信
    $('.js-input').keyup(function() {
        if ($(this).val()) {
            $(this).addClass('not-empty');
        } else {
            $(this).removeClass('not-empty');
        }
    });

    // submitクリックイベント
    $("#button").click(function() {
        $("#button").addClass("onclic", 250, validate);
    });

    function validate() {
        setTimeout(function() {
            $("#button").removeClass("onclic");
            $("#button").addClass("validate", 450, callback);
        }, 2250);
    }

    function callback() {
        setTimeout(function() {
            $("#button").removeClass("validate");
        }, 1250);
    }
});