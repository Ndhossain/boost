var isMonthly = true;

$(function () {
  $("#package-type").click(function () {
    if (isMonthly) {
      $("#monthly-packages").addClass("d-none");
      $("#monthly-packages").removeClass("d-block");
      $("#yearly-packages").addClass("d-block");
      $("#yearly-packages").removeClass("d-none");
      $("#package-type").text("View Monthly Packages");
      isMonthly = false;
    } else {
      $("#monthly-packages").addClass("d-block");
      $("#monthly-packages").removeClass("d-none");
      $("#yearly-packages").addClass("d-none");
      $("#yearly-packages").removeClass("d-block");
      $("#package-type").text("View Yearly Packages");
      isMonthly = true;
    }
  });
});
