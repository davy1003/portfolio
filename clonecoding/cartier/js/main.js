$(document).ready(function(){
// 이 안에다가 모두 작성!!!

/*
article에게 마우스를 올렸을때,
1. 너비가 35%로 커진다(1초)
2. 그 안에 있는 video의 투명도가 90%로 1.2초 동안 변함

마우스를 떼면
3. 원래대로 돌아가기


width가 35%로 켜진 다음(애니메이션이 끝난 다음 바로 이어짐)
h3이 right값이 10px까지 애니메이트 (0.4초)
p가 right값 10px까지 애니메이트 (0.8초)

그리고 마우스를 떼고나면 
그냥 동시에 h3 -> right:-310px(0.7초)
p -> right:-310px(0.8초)
*/ 

$('article').on('mouseenter',function(){

    $(this).stop().animate({'width' : '35%'},1000,function(){
        $(this).find('h3').stop().animate({'right' : '10px'},400);
        $(this).find('p').stop().animate({'right' : '10px'},800);
    });//width.animate
    $(this).find('video').stop().animate({
        'opacity' : '0.9'
    },1200)

//해당 비디오가 재생

let vid = $(this).find('video').get(0);
vid.currentTime = 0;  //재생시간 리셋
vid.play();

}).on('mouseleave',function(){
    $(this).stop().animate({'width' : '12%'},700);
    $(this).find('video').stop().animate({
        'opacity' : '0'
    },2000);

    $(this).find('h3').stop().animate({'right' : '-310px'},700);
    $(this).find('p').stop().animate({'right' : '-310px'},800);
});



}); //오프닝구문: js를 상단에 연결 시켰은때 사용하는 구문












































