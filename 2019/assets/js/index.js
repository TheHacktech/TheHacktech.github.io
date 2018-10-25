//$("body").backstretch("assets/img/background1.png");

$(document).ready(function() {
    $('.faqelem').click(function() {
      var faqElement = $(this);
      var question = faqElement.find('.question');
      var answer = faqElement.find('.answer');
      if (!answer.hasClass('activeanswer')) {
        question.addClass('flipButton');
        // answer.css('max-height', 'none');
        // answer.css('max-height', answer.css("height"));
        answer.addClass('activeanswer');
      }
      else if (answer.hasClass('activeanswer')) {
        question.removeClass('flipButton');
        // answer.css('max-height', 0);
        answer.removeClass('activeanswer');
      }
  });
});
// Initialize Firebase
/*


*/
var config = {
  apiKey: "AIzaSyAfRJWCG5g0EFpYsA3gX2NQIK_jRYttaFY",
  authDomain: "hacktech-pre-registration.firebaseapp.com",
  databaseURL: "https://hacktech-pre-registration.firebaseio.com",
  storageBucket: "hacktech-pre-registration.appspot.com",
};
firebase.initializeApp(config);

function save() {
  var eID = document.getElementById("hackerEmail").value;
  firebase.database().ref().push({email: eID});
  document.getElementById("hackerEmail").value = "Confirmed!";
};

function changeBackgroundColor() {
    var color = prompt("Enter a color for the background: ", "#55b6e7");
    document.body.style.background = color;
}

function changeLogo() {
    var logo = prompt("Enter link to logo: ", "assets/img/tt12.png");
    document.getElementById("hektek").src = logo;
}

function buttons() {
    document.getElementById("colorbtn").style.left = window.innerWidth - 400 + "px";
    document.getElementById("logobtn").style.left = window.innerWidth - 500 + "px";
}
buttons();