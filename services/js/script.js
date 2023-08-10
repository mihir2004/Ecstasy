

var height = $('#header').height();
console.log(height);

$(window).scroll(function(){
  if($(this).scrollTop() > height){
    $('.navbar').addClass('fixed-me');
  }else{
    $('.navbar').removeClass('fixed-me');
  }

})

      var develop = document.getElementById("develop");
      var design = document.getElementById("design");
      var social = document.getElementById("social");
      var btn1 = document.getElementById("btn1");
      var btn2 = document.getElementById("btn2");
      var btn3 = document.getElementById("btn3");

      function openDevelop() {
         develop.style.transform = "translateX(0)";
         design.style.transform = "translateX(100%)";
         social.style.transform = "translateX(100%)";
         btn1.style.color="#86C232";
         btn2.style.color="#000";
         btn3.style.color="#000";
         develop.style.transitionDelay = "0.3s";
         design.style.transitionDelay = "0";
         social.style.transitionDelay = "0";
      }

      function openDesign() {
         develop.style.transform = "translateX(100%)";
         design.style.transform = "translateX(0)";
         social.style.transform = "translateX(100%)";
         btn1.style.color="#000";
         btn2.style.color="#86C232";
         btn3.style.color="#000";
         develop.style.transitionDelay = "0";
         design.style.transitionDelay = "0.3s";
         social.style.transitionDelay = "0";
      }

      function openSocial() {
         develop.style.transform = "translateX(100%)";
         design.style.transform = "translateX(100%)";
         social.style.transform = "translateX(0)";
         btn1.style.color="#000";
         btn2.style.color="#000";
         btn3.style.color="#86C232";
         develop.style.transitionDelay = "0";
         design.style.transitionDelay = "0";
         social.style.transitionDelay = "0.3s";
      }
