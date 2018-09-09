let storing = {};
const url = 'http://0.0.0.0:5001/api/v1/status/';
window.onload = (function () {
  $("input[type=checkbox]").click(function () {
    if(this.checked) {
      storing[$(this).data('id')] = $(this).data('name');
    } else {
      delete storing[$(this).data('id')];
    }
    $(".amenities h4").text(Object.values(storing).join(', '));
  });
});

$.get(url, function (data) {
  if (status === 'success') {
    $('DIV#api_status').addClass('available');
  }
});
