$(function() {
  var tabs = $('#features > nav a');
  var tabsContent = $('#features > article > section');

  tabs.click(function(e) {
    e.preventDefault();

    var that = $(this);

    tabs.removeClass('is-selected');
    that.addClass('is-selected');
    tabsContent.removeClass('is-selected');

    tabsContent
      .filter((i, tab) => $(tab).data('id') === that.data('id'))
      .addClass('is-selected');
  });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
