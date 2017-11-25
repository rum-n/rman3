//////////////// ADDED BY ME

// FADE IN ON LOAD PAGE

$(document).ready(function(){$("body").hide().fadeIn(2000);});

// END FADE IN ON LOAD PAGE

// CONTACT FORM

$(function() {
  
  // contact form animations
  $('#contact').click(function() {
    $('#contactForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#contactForm");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });
  
});

// ABOUT ME POP UP

$(function() {
  
  // contact form animations
  $('#about').click(function() {
    $('#aboutme').fadeToggle();
  })

  $('.BackToClose').click(function() {
    var container = $("#aboutme");

    { 
      container.fadeOut();
    }

  })
  
});

// PROJECTS PAGE

    $(document).ready(function() {
      $('#fullpage').fullpage({});
    });

    $('a').click(function() {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
      return false;
    });

// $(function() {
  
//   $('#projects').click(function() {
//     $('#myprojects').fadeToggle();
//   })

//   $('.BackToClose-proj').click(function() {
//     var container = $("#myprojects");

//     { 
//       container.fadeOut();
//     }

//   })
  
// });

  var controller = new ScrollMagic.Controller();

  // build scene
  var scene = new ScrollMagic.Scene({triggerElement: "#trigger"})
          // trigger a velocity opaticy animation
          .setVelocity("#animate", {opacity: 0}, {duration: 400})
          .addIndicators() // add indicators (requires plugin)
          .addTo(controller);

// GOOGLE ANALYTICS

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-66629389-1', 'auto');
  ga('send', 'pageview');

  