let index = 0;
let original_data
let data;
var timerId
var user_answers = []


$("#questions").hide();
$("#results").hide();
$("#welcome").show();
$("#results").hide();

$('.neumorphic-checkbox').on('click', function () {
      $(this).toggleClass('neumorphic-checkbox_active');
});

$.getJSON('assets/json/data.json', function (jsonData) {

      original_data = jsonData;
      // to shuffle array 
      data = original_data.slice().sort(function () {
            return 0.5 - Math.random();
      });
      // console.log(original_data); // Original array
      // console.log(data); // Shuffled array
});

$('#next').click(function () {
      core();
});

function core() {
      var answer = {}
      answer.id = $('#id').val()
      answer.answer1 = $('#answer1').hasClass('neumorphic-checkbox_active')
      answer.answer2 = $('#answer2').hasClass('neumorphic-checkbox_active')
      answer.answer3 = $('#answer3').hasClass('neumorphic-checkbox_active')
      answer.answer4 = $('#answer4').hasClass('neumorphic-checkbox_active')
      user_answers.push(answer)
      clearInterval(timerId);
      timer()
      clearAnswers()
      fetching()
      $("#progress").text(index + '/' + data.length)
      if (index > data.length) {
            results();
      }
}

function clearAnswers() {
      $('#answer1').removeClass('neumorphic-checkbox_active')
      $('#answer2').removeClass('neumorphic-checkbox_active')
      $('#answer3').removeClass('neumorphic-checkbox_active')
      $('#answer4').removeClass('neumorphic-checkbox_active')
}

function fetching() {
      if (index < data.length) {
            $('#id').val(data[index].id);
            $('#question').html(data[index].question);
            $('#answer1 p').html(data[index].answers[0].answer);
            $('#answer2 p').html(data[index].answers[1].answer);
            $('#answer3 p').html(data[index].answers[2].answer);
            $('#answer4 p').html(data[index].answers[3].answer);
      }
      index++;
      timer()
}

function start() {

      $("#name").text(($("#full_name").val()));
      $("#welcome").hide();
      $("#questions").show();
      fetching()
}

function timer() {
      let timeLeft = 30;
      var elem = $("#timer");
      clearInterval(timerId)
      elem.text(timeLeft + ' s');
      timeLeft -= 1;
      timerId = setInterval(function () {

            if (timeLeft == -1) {
                  core()
            } else {
                  elem.text(timeLeft + ' s');
                  timeLeft -= 1;
            }
      }, 1000);
}

function results() {
      $("#questions").hide();
      $("#results").show();
      // party.confetti(this)

      let a = 0;
      let res = [];
      data.forEach(function (question, index) {
            if (question.answers[0].correct == user_answers[index].answer1 &&
                  question.answers[1].correct == user_answers[index].answer2 &&
                  question.answers[2].correct == user_answers[index].answer3 &&
                  question.answers[3].correct == user_answers[index].answer4) {
                  a++

            } else {
                  res.push(user_answers[index].id)
            }
      });
      console.log(res);
      res.sort((a, b) => a - b);
      let i = 0;
      console.log(res);
      let result;
      let re = '';
      original_data.forEach(element => {
            // console.log(element.id)
            // console.log(res[i])
            // console.log("-------")
            if (element.id == res[i]) {
                  result = element.answers.find(item => item.correct === true)
                  console.log(user_answers[element.id])
                  re += `
                        <div class="question">
                              <h4>${element.question}</h4>
                              <h5 class="correct-answer"><span>Correct answer : </span>${result.answer}</h5>
                              <h5 class="justification"><span>Justification : </span> ${element.justify}</h5>
                        </div>`;
                  i++;
            }


      });

      $("#result_questions").html(re)
      // console.log(question);

      $("#score span").text(a + "/" + data.length);
      // party.confetti($("#results"))


}

// party.confetti(runButton, {
//       count: party.variation.range(20, 40),
// });




