$(()=>{
    $('#hamburger').on('click', (event) => {
        $(event.target).next('.menu').fadeToggle();
    });
});