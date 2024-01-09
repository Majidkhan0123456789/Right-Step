

// Banner Slider
$('.banner_carousel').owlCarousel({
    items:1,
    autoplay:false,
    autoplayTimeout:3000,
    nav:false,
    dots:true,
    loop:true,
    margin:0
});

// Trusted Slider

$('.trusted_carousel').owlCarousel({
    items:6,
    autoplay:true,
    autoplayTimeout:7000,
    nav:false,
    dots:true,
    loop:true,
    margin:20,
    responsive:{
        0:{
            items:2,
        },
        400:{
            items:2,
        },
        600:{
            items:3,
        },
        900:{
            items:5,
        },
        1200:{
            items:6,
        },
    }
})

//terms and condition sider bar

$(document).ready(function(){

    $("#side_bar").css({'height':($(".side_bar_height").height()+'px')});
  
    $("#side_bar").height($(".side_bar_height").height());
  
    var highestCol = Math.max($('#side_bar').height(),$('.side_bar_height').height());
    $('#side_bar').height(highestCol);
});
  
  
// Side bar scroll function
  
function goToByScroll(id){
    jQuery('html,body').animate({scrollTop:jQuery("#"+id).offset().top-60},1000);
}
  
// Terms & Conditions Active Side bar
jQuery('.cms_side_bar li a').click(function(){
    jQuery(this).addClass('cms_tab_active').parent('li').siblings().children().removeClass('cms_tab_active');
});


// Gallery Tabs

$('.gallery_tab_item').click( function() {
    var galleryTab = $(this).attr('data-tab');
    $(this).addClass('active_gallery_tab').siblings().removeClass('active_gallery_tab');
    $('#gallery_block_'+galleryTab).addClass('active_gallery_block').siblings().removeClass('active_gallery_block');
})


 

// Filter Section

// Select all filters and gallery items
const filters = document.querySelectorAll('.filter');
const items = document.querySelectorAll('.item');

// Add click event to filters
filters.forEach(filter => {
  filter.addEventListener('click', function() {
    // Remove active class from all filters
    filters.forEach(filter => filter.classList.remove('active'));
    // Add active class to the clicked filter
    this.classList.add('active');
    
    const filterValue = this.dataset.filter;
    
    items.forEach(item => {
      if (filterValue === 'all') {
        item.style.display = 'block';
      } else {
        if (item.classList.contains(filterValue)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      }
    });
  });
});

/* Change Background color */

const navbar = document.getElementsByClassName('header_top')[0];

window.onscroll = () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scroll');
  } else {
    navbar.classList.remove('scroll');
  }
};




(() =>{
 
    const openNavMenu = document.querySelector(".nav-toggler"),
    closeNavMenu = document.querySelector(".close-nav-toggler"),
    navMenu = document.querySelector(".header_ctas"),
    menuOverlay = document.querySelector(".menu-overlay"),
    mediaSize = 991;
  
    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    // close the navMenu by clicking outside
    menuOverlay.addEventListener("click", toggleNav);
  
    function toggleNav() {
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle("hidden-scrolling");
    }
  
    navMenu.addEventListener("click", (event) =>{
        if(event.target.hasAttribute("data-toggle") && 
            window.innerWidth <= mediaSize){
            // prevent default anchor click behavior
            event.preventDefault();
            const menuItemHasChildren = event.target.parentElement;
          // if menuItemHasChildren is already expanded, collapse it
          if(menuItemHasChildren.classList.contains("active")){
              collapseSubMenu();
          }
          else{
            // collapse existing expanded menuItemHasChildren
            if(navMenu.querySelector(".dropdown")){
              collapseSubMenu();
            }
            // expand new menuItemHasChildren
            menuItemHasChildren.classList.add("active");
            const subMenu = menuItemHasChildren.querySelector(".row");
            subMenu.style.maxHeight = subMenu.scrollHeight + "px";
          }
        }
    });
    function collapseSubMenu(){
        navMenu.querySelector(".dropdown .row")
        .removeAttribute("style");
        navMenu.querySelector(".dropdown.active")
        .classList.remove("active");
    }
    function resizeFix(){
         // if navMenu is open ,close it
         if(navMenu.classList.contains("open")){
             toggleNav();
         }
         // if menuItemHasChildren is expanded , collapse it
         if(navMenu.querySelector(".dropdown")){
              collapseSubMenu();
       }
    }
  
    window.addEventListener("resize", function(){
       if(this.innerWidth > mediaSize){
           resizeFix();
       }
    });
  
  })();

//    navbar active Links
 var headerctas = document.getElementsByClassName("header_ctas");
 var headercta = headerctas.getElementsByClassName("header_cta");
  for(var i=0; i<headercta.lenth; i++);{
    headercta[i].addEventListener("click", function(){
        var current =document.getElementsByClassName("active");
        current[0].className=current[0].className.replace("active","");
        this.className+="active";
    });
  }


  //    for (var i = 1; i <= 3; i++) {
//   if (i == 1) {
//     for (var j = 1; j <= 3; j++) {
//       if (j == 1) {
//         document.write("Both i and j are equal to 1", "<br>");
//       } else {
//         document.write("i is equal to 1 but j is not", "<br>");
//       }
//     }
//   } else if (i == 2) {
//     for (var j = 1; j <= 3; j++) {
//       if (j == 2) {
//         document.write("Both i and j are equal to 2", "<br>");
//       } else {
//         document.write("i is equal to 2 but j is not", "<br>");
//       }
//     }
//   } else {
//     for (var j = 1; j <= 3; j++) {
//       if (j == 3) {
//         console.log("Both i and j are equal to 3");
//       } else {
//         console.log("i is equal to 3 but j is not");
//       }
//     }
//   }
// }


// active Links 
$(document).ready(function(){
  $("li a").on('click', function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  })
})