

/*!
 * Materialize v0.100.1 (http://materializecss.com)
 * Copyright 2014-2017 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */

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

$(function() {
  
  // contact form animations
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



//////////////// END OF ADDED BY ME