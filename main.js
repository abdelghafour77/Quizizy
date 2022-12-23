let index = 0;
let data;
var timerId
var user_answers = []
var answer = {}

$.getJSON('data.json', function (jsonData) {
      data = jsonData;
});

$('#next').click(function () {
      answer.answer1 = $('#answer1').hasClass('neumorphic-checkbox_active')
      answer.answer2 = $('#answer2').hasClass('neumorphic-checkbox_active')
      answer.answer3 = $('#answer3').hasClass('neumorphic-checkbox_active')
      answer.answer4 = $('#answer4').hasClass('neumorphic-checkbox_active')
      user_answers.push(answer)
      console.log(user_answers)
      clearInterval(timerId);
      timer()
      clearAnswers()
      fetching()
      if (index >= data.length) {
            index = 0;
      }
});
function clearAnswers() {
      $('#answer1').removeClass('neumorphic-checkbox_active')
      $('#answer2').removeClass('neumorphic-checkbox_active')
      $('#answer3').removeClass('neumorphic-checkbox_active')
      $('#answer4').removeClass('neumorphic-checkbox_active')
}
function fetching() {
      $('#question').html(data[index].question);
      $('#answer1 p').html(data[index].answers[0].answer);
      $('#answer2 p').html(data[index].answers[1].answer);
      $('#answer3 p').html(data[index].answers[2].answer);
      $('#answer4 p').html(data[index].answers[3].answer);
      index++;
}

$("#questions").hide();
function start() {
      $("#welcome").hide();
      $("#questions").show();
      fetching()
}
function timer() {
      let timeLeft = 30;
      var elem = $("#timer");
      clearInterval(timerId)
      timerId = setInterval(function () {

            if (timeLeft == -1) {
                  clearInterval(timerId);
                  timer()
                  fetching()
            } else {
                  elem.text(timeLeft + ' s');
                  timeLeft -= 1;
            }
      }, 1000);
}


$('.neumorphic-checkbox').on('click', function () {
      $(this).toggleClass('neumorphic-checkbox_active');
});


