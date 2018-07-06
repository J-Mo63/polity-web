$(window).scroll(function() {
    let currentScrollPos = window.pageYOffset;

    // Hide & show the article sidebar
    let sidebar = $("#article-sidebar");
    if (currentScrollPos > 500) {
        sidebar.css("left", 0);
    } else {
        sidebar.css("left", -200);
    }

    // Highlight current selection in article sidebar
    if (currentScrollPos > $("#arguments-section").offset().top - 300) {
        highlightSelected("arguments-link");
    }
    else if (currentScrollPos > $("#issue-section").offset().top - 300) {
        highlightSelected("issue-link");
    }
    else if (currentScrollPos > $("#facts-section").offset().top - 300) {
        highlightSelected("facts-link");
    }
    else {
        highlightSelected("top-link");
    }

    // Fade out the hero section image
    let hero = $(".hero-section");
    let fadeValue = hero.height() / (hero.height() + currentScrollPos);
    hero.css({opacity: fadeValue});
});

let darkActive = false;
function highlightSelected(id) {
    let issueSection = $(".issue-section");
    let sideLinks = [$("#top-link"), $("#facts-link"), $("#issue-link"), $("#arguments-link")];
    for (let i = 0; i < sideLinks.length; i++) {
        let link = sideLinks[i];

        if (link.offset().top > issueSection.offset().top &&
            link.offset().top < issueSection.offset().top + issueSection.height()) {
            link.removeClass('sidebar-link-selected');
            link.addClass('sidebar-link-dark');

            if (link.attr('id') === 'issue-link') {
                link.addClass('sidebar-link-dark-selected');
                darkActive = true;
            }
        }
        else {
            if (link.attr('id') === 'issue-link') {
                darkActive = false;
            }

            link.removeClass('sidebar-link-dark');
            link.removeClass('sidebar-link-dark-selected');

            if (link.attr('id') === id && !darkActive) {
                link.addClass('sidebar-link-selected');
            }
            else {
                link.removeClass('sidebar-link-selected');
            }
        }
    }
}