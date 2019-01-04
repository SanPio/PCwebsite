$(document).ready(function (){
    // function getUrlParam(name) {

    //         var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    
    //         var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    
    //         if (r != null) return unescape(r[2]);
    
    //         return null; //返回参数值
    
    // }
    // var chooseindex = getUrlParam("choose")
    var chooseindex = sessionStorage.chooseindex
    var index = chooseindex ? chooseindex : 0;
    $(".tab li:eq("+ index +")").addClass("tab-this") ; 
    $(".nav li:eq("+ index +")").addClass("choose"); 
    $('#contant').css("height",$(".tab li:eq("+ index +")").innerHeight()+"px"); 
    $(".nav li span").click(function(){
        $(".nav li").removeClass("choose"); 
        $(this).parent().addClass("choose"); 
        var ind = $(".nav li").index( $(this).parent() ); 
        $("ul li").each(function() {    
            $(this).removeClass("tab-this");  
        });
        $(".tab li:eq("+ ind +")").addClass("tab-this");   
        console.log( $(".tab li:eq("+ ind +")").innerHeight()+"px")
        
        $('#contant').css("height",$(".tab li:eq("+ ind +")").innerHeight()+"px"); 
        // var father = document.getElementById('father');
        // var son = document.getElementById('son'); father.style.height=son.offsetHeight+'px';
    });
    
       
});