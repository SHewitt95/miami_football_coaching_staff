"use strict"

$(document).ready(function() {
/*
  var golden = $(".golden"),
      richt = $(".richt");

  function changeCard(event) {
    var card = $(this);

    if (card.hasClass("golden")) {
      card.css("left", "-9999em");
      richt.css("left", "15%");
    } else {
      card.css("left", "9999em");
      golden.css("left", "15%");
    }

  }

  golden.on("click", changeCard);
  richt.on("click", changeCard);
*/

  $(".slider").flip({
    axis: 'y',
    trigger: 'click',
    autoSize: false
  });
})
