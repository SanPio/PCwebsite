$(document).ready(function(){
    // 选中状态
    $(".titleNav li").click(function(){
        $(this).addClass("on").siblings('li').removeClass('on');
    });

    // 小明动态和外汇知识的table切换.
    $(".btnDynamic").click(function(){
        $(".dynamic").show();
        $(".knowledge").hide();
        $(".knowledgeList-1 li").removeClass("current")
        $(".knowledgeList-2 li").removeClass("current")
        $(".knowledgeList-3 li").removeClass("current")
        $(".knowledgeList-4 li").removeClass("current")
        $(".knowledgeList-5 li").removeClass("current")
        $(".knowledgeList-6 li").removeClass("current")
        $(".knowledgeList-7 li").removeClass("current")
        $(".knowledgeList-8 li").removeClass("current")
        $(".knowledgeList-9 li").removeClass("current")
        $(".knowledgeList-10 li").removeClass("current")
        // $(".knowledgeHide").hide()
        $(".list-1").addClass("active").siblings('li').removeClass('active');
        $(".knowledgeList-1").show()
        $(".knowledgeList-2").hide()
        $(".knowledgeList-3").hide()
        $(".knowledgeList-4").hide()
        $(".knowledgeList-5").hide()
        $(".knowledgeList-6").hide()
        $(".knowledgeList-7").hide()
        $(".knowledgeList-8").hide()
        $(".knowledgeList-9").hide()
        $(".knowledgeList-10").hide()

    });
    $(".btnKnowledge").click(function(){
        $(".dynamic").hide();
        $(".knowledge").show();
        $(".knowledgeList-1 li:eq(0)>p").parent().addClass("current")
        $(".knowledgeList-1 li:eq(0)>p").parent().find(".knowledgeHide").show()
    });

    // 外汇知识左边的导航
    $(".knowledgeLeft li").click(function(){
        $(this).addClass("active").siblings('li').removeClass('active');
    });
    $(".list-1").click(function(){
        $(".knowledgeHide").hide()
        $(".knowledgeList-1").show()
        $(".knowledgeList-1 li:eq(0)>p").parent().addClass("current")
        $(".knowledgeList-1 li:eq(0)>p").parent().siblings("li").removeClass("current")
        $(".knowledgeList-1 li:eq(0)>p").parent().find(".knowledgeHide").show()
        $(".knowledgeList-2").hide()
        $(".knowledgeList-3").hide()
        $(".knowledgeList-4").hide()
        $(".knowledgeList-5").hide()
        $(".knowledgeList-6").hide()
        $(".knowledgeList-7").hide()
        $(".knowledgeList-8").hide()
        $(".knowledgeList-9").hide()
        $(".knowledgeList-10").hide()
    })
    $(".list-2").click(function(){
        $(".knowledgeHide").hide()
        $(".knowledgeList-2 li:eq(0)>p").parent().addClass("current")
        $(".knowledgeList-2 li:eq(0)>p").parent().siblings("li").removeClass("current")
        $(".knowledgeList-2 li:eq(0)>p").parent().find(".knowledgeHide").show()
        $(".knowledgeList-1").hide()
        $(".knowledgeList-2").show()
        $(".knowledgeList-3").hide()
        $(".knowledgeList-4").hide()
        $(".knowledgeList-5").hide()
        $(".knowledgeList-6").hide()
        $(".knowledgeList-7").hide()
        $(".knowledgeList-8").hide()
        $(".knowledgeList-9").hide()
        $(".knowledgeList-10").hide()
    })
    $(".list-3").click(function(){
        $(".knowledgeHide").hide()
        $(".knowledgeList-3 li:eq(0)>p").parent().addClass("current")
        $(".knowledgeList-3 li:eq(0)>p").parent().siblings("li").removeClass("current")
        $(".knowledgeList-3 li:eq(0)>p").parent().find(".knowledgeHide").show()
        $(".knowledgeList-1").hide()
        $(".knowledgeList-2").hide()
        $(".knowledgeList-3").show()
        $(".knowledgeList-4").hide()
        $(".knowledgeList-5").hide()
        $(".knowledgeList-6").hide()
        $(".knowledgeList-7").hide()
        $(".knowledgeList-8").hide()
        $(".knowledgeList-9").hide()
        $(".knowledgeList-10").hide()
    })
    $(".list-4").click(function(){
        $(".knowledgeHide").hide()
        $(".knowledgeList-4 li:eq(0)>p").parent().addClass("current")
        $(".knowledgeList-4 li:eq(0)>p").parent().siblings("li").removeClass("current")
        $(".knowledgeList-4 li:eq(0)>p").parent().find(".knowledgeHide").show()
        $(".knowledgeList-1").hide()
        $(".knowledgeList-2").hide()
        $(".knowledgeList-3").hide()
        $(".knowledgeList-4").show()
        $(".knowledgeList-5").hide()
        $(".knowledgeList-6").hide()
        $(".knowledgeList-7").hide()
        $(".knowledgeList-8").hide()
        $(".knowledgeList-9").hide()
        $(".knowledgeList-10").hide()
    })
    $(".list-5").click(function(){
        $(".knowledgeHide").hide()
        $(".knowledgeList-5 li:eq(0)>p").parent().addClass("current")
        $(".knowledgeList-5 li:eq(0)>p").parent().siblings("li").removeClass("current")
        $(".knowledgeList-5 li:eq(0)>p").parent().find(".knowledgeHide").show()
        $(".knowledgeList-1").hide()
        $(".knowledgeList-2").hide()
        $(".knowledgeList-3").hide()
        $(".knowledgeList-4").hide()
        $(".knowledgeList-5").show()
        $(".knowledgeList-6").hide()
        $(".knowledgeList-7").hide()
        $(".knowledgeList-8").hide()
        $(".knowledgeList-9").hide()
        $(".knowledgeList-10").hide()
    })
    $(".list-6").click(function(){
        $(".knowledgeHide").hide()
        $(".knowledgeList-6 li:eq(0)>p").parent().addClass("current")
        $(".knowledgeList-6 li:eq(0)>p").parent().siblings("li").removeClass("current")
        $(".knowledgeList-6 li:eq(0)>p").parent().find(".knowledgeHide").show()
        $(".knowledgeList-1").hide()
        $(".knowledgeList-2").hide()
        $(".knowledgeList-3").hide()
        $(".knowledgeList-4").hide()
        $(".knowledgeList-5").hide()
        $(".knowledgeList-6").show()
        $(".knowledgeList-7").hide()
        $(".knowledgeList-8").hide()
        $(".knowledgeList-9").hide()
        $(".knowledgeList-10").hide()
    })
    $(".list-7").click(function(){
        $(".knowledgeHide").hide()
        $(".knowledgeList-7 li:eq(0)>p").parent().addClass("current")
        $(".knowledgeList-7 li:eq(0)>p").parent().siblings("li").removeClass("current")
        $(".knowledgeList-7 li:eq(0)>p").parent().find(".knowledgeHide").show()
        $(".knowledgeList-1").hide()
        $(".knowledgeList-2").hide()
        $(".knowledgeList-3").hide()
        $(".knowledgeList-4").hide()
        $(".knowledgeList-5").hide()
        $(".knowledgeList-6").hide()
        $(".knowledgeList-7").show()
        $(".knowledgeList-8").hide()
        $(".knowledgeList-9").hide()
        $(".knowledgeList-10").hide()
    })
    $(".list-8").click(function(){
        $(".knowledgeHide").hide()
        $(".knowledgeList-8 li:eq(0)>p").parent().addClass("current")
        $(".knowledgeList-8 li:eq(0)>p").parent().siblings("li").removeClass("current")
        $(".knowledgeList-8 li:eq(0)>p").parent().find(".knowledgeHide").show()
        $(".knowledgeList-1").hide()
        $(".knowledgeList-2").hide()
        $(".knowledgeList-3").hide()
        $(".knowledgeList-4").hide()
        $(".knowledgeList-5").hide()
        $(".knowledgeList-6").hide()
        $(".knowledgeList-7").hide()
        $(".knowledgeList-8").show()
        $(".knowledgeList-9").hide()
        $(".knowledgeList-10").hide()
    })
    $(".list-9").click(function(){
        $(".knowledgeHide").hide()
        $(".knowledgeList-9 li:eq(0)>p").parent().addClass("current")
        $(".knowledgeList-9 li:eq(0)>p").parent().siblings("li").removeClass("current")
        $(".knowledgeList-9 li:eq(0)>p").parent().find(".knowledgeHide").show()
        $(".knowledgeList-1").hide()
        $(".knowledgeList-2").hide()
        $(".knowledgeList-3").hide()
        $(".knowledgeList-4").hide()
        $(".knowledgeList-5").hide()
        $(".knowledgeList-6").hide()
        $(".knowledgeList-7").hide()
        $(".knowledgeList-8").hide()
        $(".knowledgeList-9").show()
        $(".knowledgeList-10").hide()
    })
    $(".list-10").click(function(){
        $(".knowledgeHide").hide()
        $(".knowledgeList-10 li:eq(0)>p").parent().addClass("current")
        $(".knowledgeList-10 li:eq(0)>p").parent().siblings("li").removeClass("current")
        $(".knowledgeList-10 li:eq(0)>p").parent().find(".knowledgeHide").show()
        $(".knowledgeList-1").hide()
        $(".knowledgeList-2").hide()
        $(".knowledgeList-3").hide()
        $(".knowledgeList-4").hide()
        $(".knowledgeList-5").hide()
        $(".knowledgeList-6").hide()
        $(".knowledgeList-7").hide()
        $(".knowledgeList-8").hide()
        $(".knowledgeList-9").hide()
        $(".knowledgeList-10").show()
    })
    

    $(".knowledgeList-1 li>p").click(function(){
        // $(this).parent().addClass("current").siblings().removeClass("current")
        $(this).parent().toggleClass("current").siblings().removeClass("current")
        $(this).parent().find(".knowledgeHide").toggle()
        $(this).parent().siblings().find(".knowledgeHide").hide()
    });
    $(".knowledgeList-2 li>p").click(function(){
        $(this).parent().toggleClass("current").siblings().removeClass("current")
        $(this).parent().find(".knowledgeHide").toggle()
        $(this).parent().siblings().find(".knowledgeHide").hide()
    });
    $(".knowledgeList-3 li>p").click(function(){
        $(this).parent().toggleClass("current").siblings().removeClass("current")
        $(this).parent().find(".knowledgeHide").toggle()
        $(this).parent().siblings().find(".knowledgeHide").hide()
    });
    $(".knowledgeList-4 li>p").click(function(){
        $(this).parent().toggleClass("current").siblings().removeClass("current")
        $(this).parent().find(".knowledgeHide").toggle()
        $(this).parent().siblings().find(".knowledgeHide").hide()
    });
    $(".knowledgeList-5 li>p").click(function(){
        $(this).parent().toggleClass("current").siblings().removeClass("current")
        $(this).parent().find(".knowledgeHide").toggle()
        $(this).parent().siblings().find(".knowledgeHide").hide()
    });
    $(".knowledgeList-6 li>p").click(function(){
        $(this).parent().toggleClass("current").siblings().removeClass("current")
        $(this).parent().find(".knowledgeHide").toggle()
        $(this).parent().siblings().find(".knowledgeHide").hide()
    });
    $(".knowledgeList-7 li>p").click(function(){
        $(this).parent().toggleClass("current").siblings().removeClass("current")
        $(this).parent().find(".knowledgeHide").toggle()
        $(this).parent().siblings().find(".knowledgeHide").hide()
    });
    $(".knowledgeList-8 li>p").click(function(){
        $(this).parent().toggleClass("current").siblings().removeClass("current")
        $(this).parent().find(".knowledgeHide").toggle()
        $(this).parent().siblings().find(".knowledgeHide").hide()
    });
    $(".knowledgeList-9 li>p").click(function(){
        $(this).parent().toggleClass("current").siblings().removeClass("current")
        $(this).parent().find(".knowledgeHide").toggle()
        $(this).parent().siblings().find(".knowledgeHide").hide()
    });
    $(".knowledgeList-10 li>p").click(function(){
        $(this).parent().toggleClass("current").siblings().removeClass("current")
        $(this).parent().find(".knowledgeHide").toggle()
        $(this).parent().siblings().find(".knowledgeHide").hide()
    });


// 小铭动态请求数据
    $.post( path + "web/official/getOfficialWebInfo",{},function(data){
        console.log(data.data.data)
            var list = data.data.data
            console.log(list)
            var html = ''
            for(var i in list){
                // '<img src="'+list[i].graphUrl+'" alt="">'+
                html +='<li class="left overflow">'+'<img src="'+list[i].graphUrl+'" alt="">'+'<h2>'+list[i].title+'</h2>'+'<div class="activeText"><p>'+list[i].content+'</p></div>'+'</li>'
            }
            $(".dynamic ul").html(html)
    })
});