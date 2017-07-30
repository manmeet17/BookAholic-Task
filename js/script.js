$(function(){
  var $opts = {
      autoplay: true,
      arrows: true,
      slidesToShow: 2,
      prevArrow: '<div class="left"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
      nextArrow: '<div class="right"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>',
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  };
  function slickCarousel() {
    $("#carousel").slick($opts);
  }
  function unslickCarousel(){
    if($("#carousel").hasClass('slick-initialized')){
      $("#carousel").slick("unslick")
    }
  }
    $.getJSON("https://us-central1-bookaholic-786.cloudfunctions.net/home",function(data){
        $.each(data.combos,function(i,item){
          var div = $("<div>").appendTo("#carousel");
          var img = $('<img>').attr('src',item.imageURL).css({
            width: "100%",
            height: "80vh"
          }).appendTo(div);
        });
        unslickCarousel();
        slickCarousel();
    });
    $.getJSON("https://us-central1-bookaholic-786.cloudfunctions.net/home",function (data) {
      $.each(data.products,function(i,item) {
        if(item === null)
        return;
        var div = $("<div>").attr("class","col-lg-4 col-md-4 col-sm-6 productItem effect8").appendTo($('.wrapper'));
        var img = $("<img>").attr("src",item.imageURL).appendTo(div);
        var price = $("<p>").html("<div class='mrp'><span>MRP:</span> Rs "+item.MRP+"</div>").appendTo(div);
        var btn = $("<button>").attr({"type":"button"}).text("ADD TO CART").appendTo(div);
      });
    });
});
