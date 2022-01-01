$(document).ready(function(){
    $('.btnMenu').click(function(){
        $(this).fadeOut();
        $('nav').addClass('on');
        $('section').addClass('on');
    });

    $('nav li').click(function(){
        $('.btnMenu').fadeIn();
        $('nav').removeClass('on');
        $('section').removeClass('on');
    });

    $('section').vegas({ 
        slides:[
            {src:'img/cookierun.png', 
            video:{ 
                src:['video/cookierunkingdom.mp4'], // 
                loop:true,
                mute:true, 
                preload:true 
            }
            }
        ]
    });
});