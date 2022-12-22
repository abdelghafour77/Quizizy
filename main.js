$('.neumorphic-checkbox').on('click', function () {
      $(this).toggleClass('neumorphic-checkbox_active');
});
$("#questions").hide();
function start() {
      $("#welcome").hide();
      $("#questions").show();
      var timeLeft = 30;
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
