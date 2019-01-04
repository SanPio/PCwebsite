$(document).ready(function (){
    $(".home").click(function(){
        window.parent.location.href="../../home.html";      
    });
    $(".quotation").click(function(){
        window.parent.location.href="../../quotation/quotation.html";      
    });
    // 小铭咨询
    $(".consultation").click(function(){
        window.parent.location.href="../../consultation/consultation.html";      
    });
    // 关于我们
    $(".about").click(function(){
        sessionStorage.setItem("chooseindex",9)
        window.parent.location.href="../../about/about.html";      
    });
    // 加入我们
    $(".join").click(function(){
        window.parent.location.href="../../join/join.html";      
    });
});