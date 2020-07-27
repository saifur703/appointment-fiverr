(function ($) {
  'use strict';

  jQuery(document).ready(function ($) {
    $('.upcoming').click(function (event) {
      event.preventDefault();
      $('.upcoming-appointment-area').load(
        'assets/ajax/upcoming-appointment.html'
      );
    });
    $('.choose-date input').flatpickr();

    $('.filter').on('click', function () {
      if ($(this).attr('data-click-state') == 1) {
        $(this).attr('data-click-state', 0);
        $('.filter-area').empty();

        $('.filter i.fa.fa-angle-down').css('transform', 'rotate(0deg)');
      } else {
        $(this).attr('data-click-state', 1);
        $('.filter-area').load('assets/ajax/filter.html');
        $('.filter i.fa.fa-angle-down').css('transform', 'rotate(180deg)');
      }
    });

    if ($('.steps .step.step-1.active')) {
      $('.ajax-main-area-load').load('assets/ajax/booking-step-1.html');
    }
  });

  jQuery(window).on('load', function () {});
})(jQuery);
