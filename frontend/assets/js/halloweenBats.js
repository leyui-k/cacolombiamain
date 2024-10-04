$(document).ready(function() {
    let batsHidden = localStorage.getItem('batsHidden') === 'true';

    window.halloweenBats = $.halloweenBats({
        image: 'assets/img/bats.png',
        amount: 20,
        width: 200,
        height: 20,
        frames: 4,
        speed: 20,
        flickering: 15,
        zIndex: 10000,
        target: 'body'
    });

    if (batsHidden) {
        window.halloweenBats.hide();
        $('body, .perfil, .evento, .empresas, .trabajos, .container-empresas, .container-trabajos, nav, banner, header, .caja-evento').css('background-color', '');
    } else {
        window.halloweenBats.show(); 
            $('body').css('background-color', '#ff9e00'); 
            $('.perfil, .container-empresas, .container-trabajos, .caja-evento').css('background-color', '#ff6d00');
            $('nav, banner, header').css('background-color', '#1c0118');
    }


    $('#disableBatsButton').click(function() {
        if (batsHidden) {
            window.halloweenBats.show();
            $('body').css('background-color', '#ff9e00'); 
            $('body').css('background-color', '#ff9e00'); 
            $('.perfil, .container-empresas, .container-trabajos, .caja-evento').css('background-color', '#ff6d00');
            $('nav, banner, header').css('background-color', '#1c0118');
            localStorage.setItem('batsHidden', 'false'); 
        } else {
            window.halloweenBats.hide(); 
            $('body, .perfil, .evento, .empresas, .trabajos, .container-empresas, .container-trabajos, nav, banner, header, .caja-evento').css('background-color', ''); 

            localStorage.setItem('batsHidden', 'true'); 
        }
        batsHidden = !batsHidden; 
    });
});
