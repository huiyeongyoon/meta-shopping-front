(function ($) {
    "use strict";

    function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }

    $.fn.initializeClock = function(endtime) {
      // lessipe : 특정 영역 안에 있는 엘리먼트만 선택하기 위해 코드를 수정

      var daysSpan = $(this).find('.days');
      var hoursSpan = $(this).find('.hours');
      var minutesSpan = $(this).find('.minutes');
      var secondsSpan = $(this).find('.seconds');

      function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.html(t.days);
        hoursSpan.html(('0' + t.hours).slice(-2));
        minutesSpan.html(('0' + t.minutes).slice(-2));
        secondsSpan.html(('0' + t.seconds).slice(-2))

        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }

      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    }

    // var deadline = new Date(Date.parse(new Date()) + 69 * 24 * 60 * 60 * 1000 + 13 * 60 * 60 * 1000);
    // initializeClock('clockdiv', deadline);

})(jQuery);
