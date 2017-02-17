$(document).ready(function(){

  var score = 0;

  $("#dealCards").one('click', function() {
    var randomSuit1 = getRandomSuit();
    var randomSuit2 = getRandomSuit();

    var random1 = getFaceValue();
    var random1CardType = random1[0]; // type
    var random1CardWorth = parseInt(random1[1]); // number

    var random2 = getFaceValue();
    var random2CardType = random2[0]; // type
    var random2CardWorth = parseInt(random2[1]); // number

    score = random1CardWorth + random2CardWorth;

    $(".displayLeft").append("<h4 id='scoreHeader'>"+score+"</h4>");

    $(".displayLeft").append('<img src="cards/'+random1CardType+'_of_'+randomSuit1+'.png">');
    $(".displayRight").append('<img src="cards/'+random2CardType+'_of_'+randomSuit2+'.png">');
    $("img").css("height", "300px");
  });

  $("#hitMe").click(function() {
    var randomSuit3 = getRandomSuit();

    var random3 = getFaceValue();
    var random3CardType = random3[0]; // type
    var random3CardWorth = parseInt(random3[1]); // number

    score = score + random3CardWorth;

    $("#scoreHeader").html(score);

    $(".displayHit").show();

    $(".displayHit").append('<img src="cards/'+random3CardType+'_of_'+randomSuit3+'.png">');
    $("img").css("height", "300px");

    if (score === 21) {
      $("#scoreHeader").html("<strong>YOU WIN!</strong>" + score)
      $("#hitMe").html('<button type="button" disabled>Top score!</button>')
    } else if (score > 21) {
      $("#scoreHeader").html("<h1>YOU LOSE!</h1>" + score)
      $("#hitMe").html('<button type="button" disabled>You\'re out</button>')
    }

    if (random3CardType === "ace" && (score > 10)) {
      random3CardWorth === 1;
    }
  });

  $("#reloadPage").click(function(){
    location.reload();
  });

// alert("Suit: " + randomSuit + ", Face: " + randomFace);

function getRandomSuit() {
  var randSuit = Math.random();
  randSuit = randSuit * 3;
  randSuit = Math.floor(randSuit);

  if (randSuit === 0) {
    return "spades";
  } else if (randSuit === 1) {
    return "clubs";
  } else if (randSuit === 2) {
    return "hearts";
  } else if (randSuit === 3) {
    return "diamonds";
  }
}

function getFaceValue() {
  var randFaceValue = Math.random();
  randFaceValue = randFaceValue * 12;
  randFaceValue = Math.floor(randFaceValue);

  var cardType = "";
  var cardWorth = 0;

  if (randFaceValue === 0) {
    cardType = "ace";
    cardWorth = 11;
    return [cardType, cardWorth];
  } else if (randFaceValue === 1) {
    cardType = "2";
    cardWorth = 2;
    return [cardType, cardWorth];
  } else if (randFaceValue === 2) {
    cardType = "3";
    cardWorth = 3;
    return [cardType, cardWorth];
  } else if (randFaceValue === 3) {
    cardType = "4";
    cardWorth = 4;
    return [cardType, cardWorth];
  } else if (randFaceValue === 4) {
    cardType = "5";
    cardWorth = 5;
    return [cardType, cardWorth];
  } else if (randFaceValue === 5) {
    cardType = "6";
    cardWorth = 6;
    return [cardType, cardWorth];
  } else if (randFaceValue === 6) {
    cardType = "7";
    cardWorth = 7;
    return [cardType, cardWorth];
  } else if (randFaceValue === 7) {
    cardType = "8";
    cardWorth = 8;
    return [cardType, cardWorth];
  } else if (randFaceValue === 8) {
    cardType = "9";
    cardWorth = 9;
    return [cardType, cardWorth];
  } else if (randFaceValue === 9) {
    cardType = "10";
    cardWorth = 10;
    return [cardType, cardWorth];
  } else if (randFaceValue === 10) {
    cardType = "jack";
    cardWorth = 10;
    return [cardType, cardWorth];
  } else if (randFaceValue === 11) {
    cardType = "queen";
    cardWorth = 10;
    return [cardType, cardWorth];
  } else if (randFaceValue === 12) {
    cardType = "king";
    cardWorth = 10;
    return [cardType, cardWorth];
  }
}

});
