var timerId
$.getJSON('data.json', function (data) {
      data.forEach(item => {
            setInterval(function () {
                  $("#question").text(item.question);
                  // $("#rep1").html(data);
                  // $("#rep2").html(data);
                  // $("#rep3").html(data);
                  // $("#rep4").html(data);

            }, 1000);

            // timer()
      })

});

function fetching(data) {
      $("#question").html(data.question);
      // $("#rep1").html(data);
      // $("#rep2").html(data);
      // $("#rep3").html(data);
      // $("#rep4").html(data);

}

$("#welcome").hide();
function start() {
      $("#welcome").hide();
      $("#questions").show();
      timer()
}
function timer() {
      var timeLeft = 12;
      var elem = $("#timer");
      var timerId = setInterval(countdown, 1000);

      function countdown() {
            if (timeLeft == -1) {
                  clearTimeout(timerId);
            } else {
                  elem.text(timeLeft + ' s');
                  timeLeft--;
            }
      }
}


$('.neumorphic-checkbox').on('click', function () {
      $(this).toggleClass('neumorphic-checkbox_active');
});
