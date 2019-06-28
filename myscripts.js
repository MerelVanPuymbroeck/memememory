const cardsArray = [
    {
      name: 'angry',
      img: 'angry.jpg',
    },
    {
      name: 'did it',
      img: 'didit.jpg',
    },
    {
      name: 'fuck it',
      img: 'fuckit.jpg',
    },
    {
      name: 'read it again',
      img: 'needtoreaditagain.jpg',
    },
    {
      name: 'laugh',
      img: 'laugh.jpg',
    },
    {
      name: 'o',
      img: 'o.jpg',
    },
    {
      name: 'relieved',
      img: 'relieved.jpeg',
    },
    {
      name: 'scared',
      img: 'scaredbaby.jpg',
    },
    {
      name: 'sleepy',
      img: 'sleepy.png',
    },
    {
      name: 'swagger',
      img: 'swag.jpg',
    },
    {
      name: 'ugh',
      img: 'ugh.jpg',
    },
    {
      name: 'yes men',
      img: 'yes.jpg',
    },
  ]

  // Array van afbeeldingen

  var gameGrid = cardsArray.concat(cardsArray).sort(function () {
    return 0.5 - Math.random();
  });

  // om de cards telkens bij het reloaden van de pagina ergens anders te verkrijgen
  
  var firstGuess = '';
  var secondGuess = '';
  var count = 0;
  var previousTarget = null;
  var delay = 1200;
  
  var game = document.getElementById('game');
  var grid = document.createElement('section');
  grid.setAttribute('class', 'grid');
  game.appendChild(grid);
  
  gameGrid.forEach(function (item) {
    var name = item.name,
        img = item.img;
  
  // om de afbeeldingen in de Array zichtbaar te maken en in een grid te weergeven

    var card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = name;
  
    var front = document.createElement('div');
    front.classList.add('front');
  
    var back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = 'url(' + img + ')';
  
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
  });

  // divs te creeëren van de afbeeldingen
  
  var match = function match() {
    var selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
      card.classList.add('match');
    });
  };
  
  // om de cards te selecteren

  var resetGuesses = function resetGuesses() {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;

    // de cards te reseten als het geen match is
  
    var selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
      card.classList.remove('selected');
    });
  };

  // de cards die geselecteerd zijn te verwijderen
  
  grid.addEventListener('click', function (event) {
  
    var clicked = event.target;
  
    if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
      return;
    }
  
    if (count < 2) {
      count++;
      if (count === 1) {
        firstGuess = clicked.parentNode.dataset.name;
        console.log(firstGuess);
        clicked.parentNode.classList.add('selected');
      } else {
        secondGuess = clicked.parentNode.dataset.name;
        console.log(secondGuess);
        clicked.parentNode.classList.add('selected');
      }
  
      if (firstGuess && secondGuess) {
        if (firstGuess === secondGuess) {
          setTimeout(match, delay);
        }
        setTimeout(resetGuesses, delay);
      }
      previousTarget = clicked;
    }
  });

  // als de cards een match zijn veranderen ze naar een andere kleur om duidelijkheid te scheppen
  
  let modal = document.getElementById("victory")
  //stars list
  function congratulations(){
      if (matchedCard.length == 12){
          clearInterval(interval);
      //show congratulations modal
      modal.classList.add("show");
      //declare star rating variable
      closeModal();
      };
  }