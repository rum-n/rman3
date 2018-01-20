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

// DYNAMIC PAGE LOAD

// $(function() {
//   $('#projects').click(function() {

//       $('#main').load('/projects');
//   });
// });


$(function() {
  
  $('#projects').click(function() {
    $('#myprojects').fadeToggle();
  })

  $('.BackToClose-proj').click(function() {
    var container = $("#myprojects");

    { 
      container.fadeOut();
    }
  })
});

  