let index = 0;
let data;
var timerId

$.getJSON('data.json', function (jsonData) {
      data = jsonData;
});

$('#next').click(function () {
      clearInterval(timerId);
      timer()
      fetching()
      if (index >= data.length) {
            index = 0;
      }
});
function fetching() {
      $('#question').html(data[index].question);
      $('#answer1').html(data[index].answers[0].answer);
      $('#answer2').html(data[index].answers[1].answer);
      $('#answer3').html(data[index].answers[2].answer);
      $('#answer4').html(data[index].answers[3].answer);
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
