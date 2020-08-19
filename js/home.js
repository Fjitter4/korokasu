
$(function() {
    $(".colorboxlink").colorbox({
        rel: 'screenshot',
        maxWidth:"90%",
        maxHeight:"90%",
        opacity: 0.4
    });
    
    
    $('.topbox img').click(function() {
 
    alert('ただいま新型コロナウイルスの影響でサーバーメンテナンスが延期しています。再開日時は未定です。申し訳ございません。\nそして、興味を持ってくれてありがとう。あなたの良好を祈っていますd(^_^o)');
 
    });
    
    
    
    var pagetop = $('#pagetopbtn');
  // ボタン非表示
  pagetop.hide();
  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 600) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });


});