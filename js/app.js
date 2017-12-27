$(() => {
    const $hambureger = $('#hamburger'),
        $sectionMenu = $('#section-menu'),
        passiveClass = 'passive',
        activeClass = 'active',
        $closeContainer = $('#close-container'),
        $close = $closeContainer.find('.close'),
        $home = $closeContainer.find('.home');

    $hambureger.on('click', event => { //console.log('clicked!');
        event.preventDefault();
        $sectionMenu.removeClass(passiveClass).addClass(activeClass);
        $home.delay(500).fadeIn(1000);
        $close.delay(800).fadeIn(1000);
        
    });
    $close.on('click', function() {
        $(this).fadeOut(0);
        $home.fadeOut(0);
        $sectionMenu.addClass(passiveClass).removeClass(activeClass);
    });
});