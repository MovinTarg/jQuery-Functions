$('document').ready(function(){

    $("img").hide();

    $(".1 button").click(function(){
        alert("Button Clicked!");
    });
    $(".2 button").click(function() {
        $(".2 p").hide();
    });
    $(".3 button").click(function() {
        $(".2 p").show();
    });
    $(".4 button").hover(function() {
        $(".4 p").toggle();
    });
    $(".5 button").click(function() {
        $(".5 img").slideDown();
    });
    $(".6 button").click(function() {
        $(".5 img").slideUp();
    });
    $(".7 button").hover(function() {
        $(".7 img").slideToggle();
    });
    $(".8 button").hover(function() {
        $(".8 img").fadeIn();
    });
    $(".9 button").hover(function() {
        $(".8 img").fadeOut();
    });
    $(".10 button").click(function() {
        $(".10 p").addClass("red");
    });
    $(".11 button").click(function() {
        $(".11 p").before("Text Before");
    });
    $(".12 button").click(function() {
        $(".12 p").after("Text After");
    });
    $(".13 button").click(function() {
        $(".13 p").append("Text ");
    });
    $(".14 button").click(function() {
        $(".14 p").html("<h1>This is a header now!</h1>");
    });
    $(".15 button").click(function() {
        $(".15 p").attr("class");
        $(".15 p").after($(".15 p").attr("class"));
    });
    $(".16 button").hover(function() {
        var value = $(".16 input").val();
        $(".16 h2").text(value);
    });
    $(".17 button").click(function() {
        var pValue = $(".17 input").val();
        $(".17 p").text(pValue);
    });
    $(".18 button").click(function() {
        $(".18 p").data("test", {first:"(This paragraph is not to special)"});
        $("span").text($(".18 p").data("test").first);
    });
});