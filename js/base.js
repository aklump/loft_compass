(function($) {
  $('document').ready(function(){
    function updateSize() {
      $('#window-size').html($(window).width() + 'px');
      $('#container-size').html($('.container:first').width() + 'px');
    }
    updateSize();
    window.onresize = function () {
      updateSize();
    }
  });
})(jQuery);