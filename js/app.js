$(()=>{
    const $headerLinkHomepage = $('#headerLink-homepage'),
        $sectionMenu = $('#section-menu'),
        passiveClass = 'passive';
    
    
    $('#hamburger').on('click', (event) => {
        event.preventDefault();
        $headerLinkHomepage.toggleClass(passiveClass);
        $sectionMenu.toggleClass(passiveClass);
    });
});