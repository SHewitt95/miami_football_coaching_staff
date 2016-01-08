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

  var cards = $(".card");
  var golden_button = $(".golden_button"),
      richt_button = $(".richt_button");

  function flipCards(cards, keyword, option) {
    var currentCard;

    // Iterates over all cards.
    for (var i = 0; i < cards.length; i++) {
      currentCard = $(cards[i]);

      // Flips current card if the class contains the keyword
      if (currentCard.hasClass(keyword)) {
        $(".slider").flip(option);
      }
    }
  }

  golden_button.on("click", function() {
    flipCards(cards, "golden", false);
  })

  richt_button.on("click", function() {
    flipCards(cards, "richt", true);
  })

})
