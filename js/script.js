

var height = $('#header').height();
console.log(height);

$(window).scroll(function(){
  if($(this).scrollTop() > height){
    $('.navbar').addClass('fixed-me');
  }else{
    $('.navbar').removeClass('fixed-me');
  }

})
