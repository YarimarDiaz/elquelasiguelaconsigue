$(document).ready(function () {
  // Check (onLoad) if the cookie is there and set the class if it is
  if (getCookie('highcontrast') == "yes") {
      $("body").addClass("highcontrast");
  }
  // When the element is clicked
  $('#contraste').click(function () {
      let contrast = getCookie('highcontrast') == "" ? 'no' : getCookie('highcontrast');
      console.log( contrast);

      if (contrast == "no") {
          setCookie('highcontrast', 'yes', 7)
          $("body").addClass("highcontrast");
      } else if (contrast == "yes") {
          $('body').removeClass('highcontrast');
          setCookie('highcontrast', 'no', 7)


      }
  });

  $('#font-dis').click((event)=>{
      if ($("body").hasClass("large")){
          $("body").removeClass("large");
      }else if (!$("body").hasClass("small")){
          $("body").addClass("small");
      }
  });
  $('#font-aut').click((event)=>{
      if ($("body").hasClass("small")){
          $("body").removeClass("small");
      }else if (!$("body").hasClass("large")){
          $("body").addClass("large");
      }

  });

});

const setCookie =  (cookieName, cookieValue, exdays)  => {
  let date_cookie = new Date();
  date_cookie.setTime(date_cookie.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ date_cookie.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

const getCookie =  (cookieName) => {
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}
