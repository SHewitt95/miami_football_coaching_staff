"use strict"

$(document).ready(function() {


  /*************************************** Loads in all former and new Coaches ***************************************/

  var app = new Ractive({
    el: ".interactive",
    template: "#row-template",
    data: {
      role: role
    }
  });

/*************************************** Adds card flip functionality ***************************************/
  // Initializes flip.js functionality
  $(".slider").flip({
    axis: 'y',
    trigger: 'click',
    autoSize: false
  });

  var cards = $(".card");
  var golden_button = $(".golden_button"),
      richt_button = $(".richt_button");

  // Implements flip-all-cards-at-once functionality.
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
  } // End flipCards function

  golden_button.on("click", function() { flipCards(cards, "golden", false); })
  richt_button.on("click", function() { flipCards(cards, "richt", true); })

})
