$(document).ready(function (){
    var chooseindex = sessionStorage.chooseindex ;
    console.log(sessionStorage.chooseindex)
    if(chooseindex==6){
        $('body,html').animate({scrollTop: $('#content').offset().top}, 500);
    }else if(chooseindex==7){
        $('body,html').animate({scrollTop: $('#content-middle').offset().top}, 500);
    }else if(chooseindex==8){
        $('body,html').animate({scrollTop: $('#content-footer').offset().top}, 500);
    }else if(chooseindex==9){
        $('body,html').animate({scrollTop: $('#picture').offset().top}, 500);
    }

});