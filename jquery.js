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
}

$("#h").click(function(){
    $("#h").toggleClass("change");
    if($("#hl").css("display")=='block'){
        $("#hl").css("display","none");
    }
    else{
        $("#hl").css("display","block");
    }
    checkw();
    $("#hl").css("width",100/c+"%");
    $("#cs").css("width",100/c+"%");
    $("#js").css("width",100/c+"%");
    $("#op").css("width",100/c+"%");
    c=0;
});
$("#o").click(function(){
    $("#o").toggleClass("change");
    if($("#op").css("display")=='block'){
        $("#op").css("display","none");
    }
    else{
        $("#op").css("display","block");
    }
    checkw();
    $("#hl").css("width",100/c+"%");
    $("#cs").css("width",100/c+"%");
    $("#js").css("width",100/c+"%");
    $("#op").css("width",100/c+"%");
    c=0;
});
$("#c").click(function(){
    $("#c").toggleClass("apply");
    if($("#cs").css("display")=='block'){
        $("#cs").css("display","none");
    }
    else{
        $("#cs").css("display","block");
    }
    checkw();
    $("#hl").css("width",100/c+"%");
    $("#cs").css("width",100/c+"%");
    $("#js").css("width",100/c+"%");
    $("#op").css("width",100/c+"%");
    c=0;
});
$("#j").click(function(){
    $("#j").toggleClass("apply");
    if($("#js").css("display")=='block'){
        $("#js").css("display","none");
    }
    else{
        $("#js").css("display","block");
    }
    checkw();
    $("#hl").css("width",100/c+"%");
    $("#cs").css("width",100/c+"%");
    $("#js").css("width",100/c+"%");
    $("#op").css("width",100/c+"%");
    c=0;
});

$("iframe").contents().find("html").html("<html><head><style type='text/css'>"+$("#cs").val()+"</style></head><body>"+$("#hl").val()+"</body></html>");
document.getElementById("op").contentWindow.eval($("js").val());
$("textarea").on("change keyup paste", function(){
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>"+$("#cs").val()+"</style></head><body>"+$("#hl").val()+"</style></body></html>");
    document.getElementById("op").contentWindow.eval($("#js").val());
});