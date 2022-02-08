

function mobile(){

    $('.allBtn').click(function(){
        $('aside').stop().animate({'left' : 0})
    });
    
    $('.closeBtn').click(function(){
        $('aside').stop().animate({'left': '-100%'})
    });
    
    
    $('.a').on('click',function(){
    
        $(this).toggleClass('on');
        $(this).parent().siblings().children('.a').removeClass('on');
    
        $(this).siblings('.sub').stop().slideToggle();
        $(this).parent().siblings().children('.sub').stop()
        .slideUp();
    
    });
    
    
    $('.shareBtn').on('click',function(){
        $('.sns').stop().fadeToggle();
    });
    
    }//mobile.func



function pc(){
 
    //pc 서브 메뉴 마우스 오버로 만들 시,
    //선택자와 서브메뉴 사이의 공간때문에 
    //마우스아웃처리가 되는 경우가 많다!!!
    //이때, 큰 영역을 mouseenter로 지정하여서
    //mouseenter-mouseleave로 설정하면 해결 가능 
    $('nav>ul>li').on('mouseenter',function(){
        $(this).children('.sub').stop().fadeIn();

    }).on('mouseleave',function(){
        $(this).children('.sub').stop().fadeOut()
    })

    //nav내부에 보이는 메인 메뉴들에게 마우스를 올리면
    //하단 메뉴들이 fade로 나타남 
    //마우스떼면 다시 사라짐
    //이때 하단메뉴들이 가로정렬되어있지 않을텐데
    //신경쓰지 맙시다... 
    

}//pc.func



// 브라우저 사이즈가 1200 미만일때 모바일js지정,
// 브라우저 사이즈가 1200 이상일때 pc js 지정

let winWid = $(window).width();

if(winWid < 1200){
    //mobile
    mobile();
}else if(winWid >= 1200){
    //pc
    pc();
}


$(window).on('resize', function(){
    let winWid2 = $(window).width();

    if(winWid2 < 1200){
        //mobile
        mobile();
    }else if(winWid2 >= 1200){
        //pc
        pc();
    }

});//resize








