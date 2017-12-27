$(() => {
    const $hambureger = $('#hamburger'),
        $sectionMenu = $('#section-menu'),
        passiveClass = 'passive',
        activeClass = 'active',
        $close = $('#close-container .close');

    $hambureger.on('click', event => { //console.log('clicked!');
        event.preventDefault();
        $sectionMenu.removeClass(passiveClass).addClass(activeClass);
        $close.delay(500).fadeIn(1000);
    });
    $close.on('click', event => {
        event.target.style.display = 'none';
        $sectionMenu.addClass(passiveClass).removeClass(activeClass);
    });
});