$(document).ready(function() {
    $("nav>ul>li").hover(function() {
        $(this).children("ul").slideToggle( 300, function() {
        });
      });

  });