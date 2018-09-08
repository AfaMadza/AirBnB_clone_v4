let storing = {};
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
