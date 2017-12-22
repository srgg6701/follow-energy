$(()=>{
    $('#hamburger').on('click', (event) => {
        $(event.target).next('.menu').slideToggle(() => {
            $('#second-menu > section').slideToggle();
        });
    });
});