
$(document).ready(function(){
// menu open tab
  $(".menu_level_2").hover(function () {
    $(".open_menu_level_2").animate({opacity: "show"}, 100);
  }, function () {
    $(".open_menu_level_2").animate({opacity: "hide"}, 100);
  });
// nemu open tab

// accordeon
    $(".accordeonPanel .accordeonPanelSlideList").hide();

    $(".accordeonPanelHead").click(function(){
        $(this).next(".accordeonPanelSlideList").slideToggle("slow")
        .siblings(".accordeonPanelSlideList:visible").slideUp("slow");
        $(this).toggleClass("accordeonPanelActive");
        $(this).siblings(".accordeonPanelHead").removeClass("accordeonPanelActive");
     });
// accordeon end
// background slider
      var listSrc = new Array(
        "./img/slider_images/build.jpg","./img/slider_images/projection-2.jpg","./img/slider_images/renovation.jpg"
      )
      var defaultSrc = "./img/slider_images/design-3.jpg"
      function run(interval, frames) {
        var int = 0;
        function func() {
          $("#slider img").attr("src", listSrc[int]);
          int++;
          if(int == 4) {
            $("#slider img").attr("src", defaultSrc);
            int = 0;
          }
      }

      var swap = window.setInterval(func, interval);
  }

run(3000, 4);
    // background slider end


    // price section tables
    $(".priceListNames ul li:first").addClass("activePriceTable");
    $(".priceListTable table:not(:first)").hide();

    $(".priceListNames ul li").click(function () {
      var activeIcon = $(this).attr("class");

      $(".priceListNames ul li").removeClass("activePriceTable");
      $(this).addClass("activePriceTable");
      $(".priceListTable table").hide();
      $("." + activeIcon).show();
    });
    // price section tabler end

});
