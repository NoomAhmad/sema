setTimeout(function () {
    $("html").addClass("loader");
    $("html").removeClass("loader");
    $(".loader").css({ display: "none" });
    $(".text").animate({ opacity: "1" });
  }, 3500);
  