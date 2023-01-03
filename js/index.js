$(function () {
  $(".counter-number").counterUp({
    delay: 10,
    time: 1800,
  });
});

$(function () {
  $(".date").text(function () {
    const date = new Date();
    let year = date.getFullYear();
    return year;
  });
});
