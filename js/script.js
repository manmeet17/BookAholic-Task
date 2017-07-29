$(function(){
    $.getJSON("https://us-central1-bookaholic-786.cloudfunctions.net/home",function(data){
        $.each(data.combos,function(i,item){
          if(i===0)
          var div = $("<div>").attr("class","item active").appendTo($('.carousel-inner'));
          else {
          var div = $("<div>").attr("class","item").appendTo($('.carousel-inner'));
          }
          var img = $('<img>').attr('src',item.imageURL).css({
            width: "70%",
            height: "70vh"
          }).appendTo(div);
        });
    });
});
