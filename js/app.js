(() => {
    let menuContents = ``, lnk, text;
    [
        { "#.html": "What is energy indeed?" },
        { "#.html": "How it will change my life?" },
        { "#.html": "Why you cannot to obtain it and if it possible at all?" },
        { "#.html": "Where does it reside and how to retrieve it?" },
        { "#.html": "How to feel it?" }
    ].forEach(link => {
        lnk = Object.keys(link)[0];
        menuContents += `                <li>
        <a href="${lnk}">${link[lnk]}</a>
    </li>`
    });
    $('ul.menu').html(menuContents);
})();

$(()=>{
    $('#hamburger').on('click', (event) => {
        $(event.target).next('.menu').fadeToggle();
    });
});