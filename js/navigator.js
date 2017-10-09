var navBar;
var navLinks = [];

function navInit() {
    navBar = document.getElementById('navigator');
    navLinks = document.getElementsByClassName('navLink');

    // loop through posts and assign numerical id //
    var l = posts.length;
    for (var i=0; i<l; i++) {
        if (posts[i].id !== 'about') {
            posts[i].id = 'p' + (i+1);
            navLinks[i].href = '#p' + (i+1);
        }

    }
    updateNavLinks();
}


function updateNavLinks() {
    var l = navLinks.length;
    for (var i=0; i<l; i++) {
        navLinks[i].classList = 'navLink hi';
        if (i===projectIndex) {
            navLinks[i].classList += ' hello';
        }
    }
}
