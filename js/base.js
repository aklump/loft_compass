(function($) {
  $('document').ready(function(){
    console.log('hi');
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