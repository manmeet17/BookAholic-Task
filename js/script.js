$(function(){
    $.getJSON("https://us-central1-bookaholic-786.cloudfunctions.net/home",function(data){
        var images=[];
        $.each(data.combos,function(i,item){
            console.log(item.imageURL);
            $("#carousel").find("img").attr("src",item.imageURL);
        });
    });
    
    $('#carousel').slick({
        accessibility: true,
        adaptiveHeight: true,
        arrows: true,
        mobileFirst: true,
        pauseOnFocus: true,
    });
});