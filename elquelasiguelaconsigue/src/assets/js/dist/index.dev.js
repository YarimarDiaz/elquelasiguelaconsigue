"use strict";

$(document).ready(function () {
  // Check (onLoad) if the cookie is there and set the class if it is
  if (getCookie('highcontrast') == "yes") {
    $("body").addClass("highcontrast");
  } // When the element is clicked


  $('#contraste').click(function () {
    var contrast = getCookie('highcontrast') == "" ? 'no' : getCookie('highcontrast');
    console.log(contrast);

    if (contrast == "no") {
      setCookie('highcontrast', 'yes', 7);
      $("body").addClass("highcontrast");
    } else if (contrast == "yes") {
      $('body').removeClass('highcontrast');
      setCookie('highcontrast', 'no', 7);
    }
  });
  $('#font-dis').click(function (event) {
    if ($("body").hasClass("large")) {
      $("body").removeClass("large");
    } else if (!$("body").hasClass("small")) {
      $("body").addClass("small");
    }
  });
  $('#font-aut').click(function (event) {
    if ($("body").hasClass("small")) {
      $("body").removeClass("small");
    } else if (!$("body").hasClass("large")) {
      $("body").addClass("large");
    }
  });
});

var setCookie = function setCookie(cookieName, cookieValue, exdays) {
  var date_cookie = new Date();
  date_cookie.setTime(date_cookie.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + date_cookie.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
};

var getCookie = function getCookie(cookieName) {
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
};