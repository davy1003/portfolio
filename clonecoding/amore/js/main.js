

function mobile(){

    $('.allBtn').click(function(){
        $('aside').stop().animate({'left' : 0})
    });
    
    $('.closeBtn').click(function(){
        $('aside').stop().animate({'left': '-100%'})
    });
    
    $('nav>ul>li').off();
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
 
    $('.a').off()

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

function commoon(){
    // 모든 영역에서 다 적용될 것들을 쓰는 곳

    /*
    .mainLang을 클릭
    1.lang 내부의 langSub가 나타남
    2.lang내부의 화살표가 위를 향함

    다시클릭하면
    1.langSub가 사라짐
    2.lang의 화살표가 아래를 향함
    */

    $('.mainLang').on('click',function(e){
        e.preventDefault();
        $('.lang').toggleClass('on');
    });

/*
langSub안의 a 를 클릭(러시아어, 일본어, 중국어...)하면
.mainLang내부의 텍스트가 그걸로 대체
그리고 .langSub가 닫힘
*/ 

$('.langSub a').click(function(e){
    e.preventDefault();
    let txt = $(this).text();
    let mainTxt = $('.mainLang').text();

    $('.mainLang').text(txt);
    $(this).text(mainTxt);
    $('.lang').removeClass('on');
});

    /*
    스크롤의 위치가 800px 넘어갈 때 
    .top이 나타남
    이 .top을 누르면, 최상단 까지 스크롤이
    자연스럽게 애니메이트
    */ 

    $(window).on('scroll',function(){

        let scr = $(window).scrollTop();

        if(scr>=800){
            $('.top').stop().fadeIn();
        }else{
            $('.top').stop().fadeOut();
        }
    });//win.scr

    $('.top').on('click',function(){
        $('html,body').animate({'scrollTop' : 0});
    });
}//common.func
commoon();


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








