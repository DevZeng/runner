$(function(){
        
  $('#ban > div').click(function(){
    $('#dis').fadeIn(100);
    var $index = $(this).index();
    var $l = $('#dis  img').size();
    for(var i=0; i<$l; i++){
      var $src = 'show/'+$index+'/'+(i+1)+'.jpg';
      $('#dis  img').eq(i).attr('src',$src);
    }
  })
  //点击上一个
  $('#back').click(function(){
    var $width = $('#dis img').eq(0).width();
    
    $('#dis img').filter(':last').stop().animate({'left':'-'+$width},500,function(){
      $(this).prependTo($('.showImg'));
      $(this).stop().animate({'left':'0'},500)
    })
    //div跟着动
    $('.showImg').stop().animate({'left':'38%'},500,function(){
      $('.showImg').stop().animate({'left':'35%'},500);
    });
  })
  //点击下一个
  $('#next').click(function(){
    var $width = $('#dis img').eq(0).width();
    $('#dis img').filter(':first').stop().animate({'left':$width},500,function(){
      $(this).appendTo($('.showImg'));
      $(this).stop().animate({'left':'0'});
    })
    //div跟着动
    $('.showImg').stop().animate({'left':'32%'},500,function(){
      $('.showImg').stop().animate({'left':'35%'},500);
    });
  })
  //点击空白dis消失
  $('#markclose').click(function(){
    $('#dis').fadeOut(100);
  })

  $('.nav > ul > li > div a').click(function(){
    $('.nav > ul > li > div a').removeClass('active');
    $(this).addClass('active');
  })
  
})