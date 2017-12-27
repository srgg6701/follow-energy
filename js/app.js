$(() => {

    const $hamburger = $('#hamburger'),
        $sectionMenu = $('#section-menu'),
        passiveClass = 'passive',
        activeClass = 'active',
        $closeContainer = $('#close-container'),
        $close = $closeContainer.find('.close'),
        $home = $closeContainer.find('.home'),
        lsHamburger = 'hamburger';

    $hamburger.on('click', event => { //console.log('clicked!');
        event.preventDefault();
        $sectionMenu.removeClass(passiveClass).addClass(activeClass);
        $home.delay(500).fadeIn(1000);
        $close.delay(800).fadeIn(1000);
        // set mark that we clicked on it at least once
        localStorage.setItem(lsHamburger, 'activated');
    });
    $close.on('click', function() {
        $(this).fadeOut(0);
        $home.fadeOut(0);
        $sectionMenu.addClass(passiveClass).removeClass(activeClass);
    });

    let bigHamburger = localStorage.getItem(lsHamburger);

    if (!bigHamburger) {
        $hamburger.find('>span').addClass('big');
    }
    
    
});