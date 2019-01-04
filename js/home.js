
$(document).ready(function (){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        speed: 1000,
        loop: true,
        observer:true,
        observeParents:true,
        autoplayDisableOnInteraction : false,
        autoplay:2000
    });
    
        
        $.post( path + "web/official/getExcellentOptions",{},function(res){
            var data = res.data.data;

            $(".signal_1 p").text(data[0].signalName)
            $(".signal_1 .profit").text( "收益率：" + parseInt( Number( data[0].yield ) * 100 )/100 + "%" )
            $(".signal_1 .retracement").text("最大回撤：" +  parseInt( Number( data[0].maxHuicheRatio ) * 100 )/100 + "%" )
            $(".signal_1 .num").text( "跟单人数：" +  follower(data[0]) )
            
            $(".signal_2 p").text(data[1].signalName)
            $(".signal_2 .profit").text( "收益率：" + parseInt( Number( data[1].yield ) * 100 )/100 + "%" )
            $(".signal_2 .retracement").text( "最大回撤：" +  parseInt( Number( data[1].maxHuicheRatio ) * 100)/100 + "%" )
            $(".signal_2 .num").text("跟单人数：" + follower(data[1]) )
            
            $(".signal_3 p").text(data[2].signalName)
            $(".signal_3 .profit").text( "收益率：" + parseInt( Number( data[2].yield ) * 100 )/100 + "%" )
            $(".signal_3 .retracement").text( "最大回撤：" + parseInt( Number( data[2].maxHuicheRatio ) * 100 )/100 + "%" )
            $(".signal_3 .num").text( "跟单人数：" + follower(data[2]) )
        });
        
        function follower( option ) {
            if( option.optionid ==  1 ){
                return  option.followerNumber + 206
            }else if ( option.optionid ==  2 ){
                return  option.followerNumber + 147
            }else if ( option.optionid ==  3 ){
                return  option.followerNumber + 60
            }else if ( option.optionid ==  5 ){
                return  option.followerNumber + 258
            }else if ( option.optionid ==  6 ){
                return  option.followerNumber + 251
            }else if ( option.optionid ==  7 ){
                return  option.followerNumber + 176
            }else if ( option.optionid ==  8 ){
                return  option.followerNumber + 298
            }else if ( option.optionid ==  9 ){
                return  option.followerNumber + 36
            }else if ( option.optionid ==  10 ){
                return  option.followerNumber + 20
            }else{
                return  option.followerNumber
            }
        }
})