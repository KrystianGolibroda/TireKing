//Sticky menu:
$(document).ready(function () {
   $("#sticker").sticky({topSpacing:0});
});

//Obracające się strzałki w menu:
$(".animateAngle").click(function() {
   $( this ).toggleClass( "imageAnimate");
});


function openPage(pageName,elmnt,color) {
   var i, tabcontent, tablinks;
   tabcontent = document.getElementsByClassName("tabContent");
   for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
   }
   tablinks = document.getElementsByClassName("tabLink");
   for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
   }
   document.getElementById(pageName).style.display = "block";
   elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
   selElmnt = x[i].getElementsByTagName("select")[0];
   /*for each element, create a new DIV that will act as the selected item:*/
   a = document.createElement("DIV");
   a.setAttribute("class", "select-selected");
   a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
   x[i].appendChild(a);
   /*for each element, create a new DIV that will contain the option list:*/
   b = document.createElement("DIV");
   b.setAttribute("class", "select-items select-hide");
   for (j = 1; j < selElmnt.length; j++) {
      /*for each option in the original select element,
      create a new DIV that will act as an option item:*/
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
         /*when an item is clicked, update the original select box,
         and the selected item:*/
         var y, i, k, s, h;
         s = this.parentNode.parentNode.getElementsByTagName("select")[0];
         h = this.parentNode.previousSibling;
         for (i = 0; i < s.length; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
               s.selectedIndex = i;
               h.innerHTML = this.innerHTML;
               y = this.parentNode.getElementsByClassName("same-as-selected");
               for (k = 0; k < y.length; k++) {
                  y[k].removeAttribute("class");
               }
               this.setAttribute("class", "same-as-selected");
               break;
            }
         }
         h.click();
      });
      b.appendChild(c);
   }
   x[i].appendChild(b);
   a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
   });
}
function closeAllSelect(elmnt) {
   /*a function that will close all select boxes in the document,
   except the current select box:*/
   var x, y, i, arrNo = [];
   x = document.getElementsByClassName("select-items");
   y = document.getElementsByClassName("select-selected");
   for (i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
         arrNo.push(i)
      } else {
         y[i].classList.remove("select-arrow-active");
      }
   }
   for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
         x[i].classList.add("select-hide");
      }
   }
}

document.addEventListener("click", closeAllSelect);

$(document).ready(function () {
   var stickyNavTop = $('.nav').offset().top;
   var stickyNav = function () {
      var scrollTop = $(window).scrollTop();

      if(scrollTop > stickyNavTop) {
         $('.nav').addClass('sticky');
      } else {
         $('.nav').removeClass('sticky');
      }
   };

   stickyNav();
   $(window).scroll(function () {
      stickyNav();
   });
});


$(document).ready(function () {
   $('#example').barrating({
      theme: 'fontawesome-stars'
   });
});

setInterval(function time(){
   var d = new Date();
   var hours = 24 - d.getHours();
   var min = 60 - d.getMinutes();
   if((min + '').length == 1){
      min = '0' + min;
   }
   var sec = 59 - d.getSeconds();
   if((sec + '').length == 1){
      sec = '0' + sec;
   }

   jQuery('#the-final-countdown .TickHours').html(hours);
   jQuery('#the-final-countdown .TickMinutes').html(min);
   jQuery('#the-final-countdown .TickSeconds').html(sec);
}, 1000);


//Karuzela opinii



//Karuzela karty produktowej
$(document).ready(function () {
   $('.lowerCards').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               infinite: true,
            }
            },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               infinite: true
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true
            }
         }
      ]
   });
});

// Rozwijane menu:
$(document).ready(function () {
   $('.nav li').hover(
       function () {
          //show submenu
          $('ul', this).show();
       }, function () {
          //hide submenu
          $('ul', this).hide();
       });
});


// SidePanel:
$(document).ready(function() {
   $('.widget-btn').click(function(e) {
      e.preventDefault();
      $(".widget").toggleClass('active');
   });
});


//Rozwijane menu:

$(function(){

   $('li.dropdown > a').on('click',function(event){
      event.preventDefault()
      $(this).parent().find('ul').first().toggle(0);
      $(this).parent().siblings().find('ul').hide(0);
      //Menu schowa się, gdy klikniemy poza obszarem
      $(this).parent().find('ul').mouseleave(function(){
         var thisUI = $(this);
         $('html').click(function(){
            thisUI.hide();
            $('html').unbind('click');
         });
      });
   });
});

