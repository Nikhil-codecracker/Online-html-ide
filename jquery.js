var c=0;
function checkw(){
    if($("#hl").css("display")!="none")
    {c++;}
    if($("#cs").css("display")!="none")
    {c++;}
    if($("#js").css("display")!="none")
    {c++;}
    if($("#op").css("display")!="none")
    {c++;}
    if(c!=0)
    {
    var d=1535/c-5*(5-c);
    $("textarea").css("width",d+"px");
    $("iframe").css("width",d+"px");
    }
    c=0;
}
$("#h").click(function(){
    $("#h").toggleClass("box");
    if($("#hl").css("display")=="none")
    {
        $("#hl").css("display","block");
        $("#h").css("background-color","rgb(235, 243, 255)");
    }
    else{
        $("#hl").css("display", "none");
        $("#h").css("background-color", "#ededed");
    }
    checkw();
    $("#hl").focus();
});
$("#c").click(function(){
    $("#c").toggleClass("box");
    if($("#cs").css("display")=="none")
    {
        $("#cs").css("display","block");
        $("#c").css("background-color","rgb(235, 243, 255)");
    }
    else{
        $("#cs").css("display", "none");
        $("#c").css("background-color", "#ededed");
    }
    checkw();
    $("#cs").focus();
});
$("#j").click(function(){
    $("#j").toggleClass("box");
    if($("#js").css("display")=="none")
    {
        $("#js").css("display","block");
        $("#j").css("background-color","rgb(235, 243, 255)");
    }
    else{
        $("#js").css("display", "none");
        $("#j").css("background-color", "#ededed");
    }
    checkw();
    $("#js").focus();
});
$("#o").click(function(){
    $("#o").toggleClass("box");
    if($("#op").css("display")=="none")
    {
        $("#op").css("display","block");
        $("#o").css("background-color","rgb(235, 243, 255)");
    }
    else{
        $("#op").css("display", "none");
        $("#o").css("background-color", "#ededed");
    }
    checkw();
    $("#op").focus();
});
$("iframe").contents().find("html").html("<html><head><style type='text/css'>"+$("#cs").val()+"</style></head><body>"+$("#hl").val()+"</body></html>");
document.getElementById("op").contentWindow.eval($("js").val());
$("textarea").on("change keyup paste", function(){
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>"+$("#cs").val()+"</style></head><body>"+$("#hl").val()+"</style></body></html>");
    document.getElementById("op").contentWindow.eval($("#js").val());
});

var c=0;

$("#mode").click(function(){
    if(c%2==0){
        $("#hl").css({"background-color":"black","color":"white"});
        $("#cs").css({"background-color":"black","color":"white"});
        $("#js").css({"background-color":"black","color":"white"});
        $("#op").css({"background-color":"black","color":"white"});
        $(this).css("transform","translate(175%,0)")
        $(this).css("background-color","orange");
        $("#dark").css("border-color","orange");
        $("#menu").css("background-color","#369BFF");
    }
    else{
        $("#hl").css({"background-color":"white","color":"black"});
        $("#cs").css({"background-color":"white","color":"black"});
        $("#js").css({"background-color":"white","color":"black"});
        $("#op").css({"background-color":"white","color":"black"});
        $(this).css("transform","translate(-2%,0)")
        $(this).css("background-color","black");
        $("#dark").css("border-color","black");
    }

    c++;
});
