
$(document).ready(function (){
    $(".btnOperate").click(function(){
        $(".operate").show()
        $(".market").hide()
        $(".technology").hide()
    })
    $(".btnMarket").click(function(){
        $(".operate").hide()
        $(".market").show()
        $(".technology").hide()
    })
    $(".btnTechnology").click(function(){
        $(".operate").hide()
        $(".market").hide()
        $(".technology").show()
    })
    $(".department>ul li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');                            // 添加当前元素的样式

    });
})
