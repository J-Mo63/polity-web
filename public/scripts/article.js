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
    if (currentScrollPos > $("#arguments-header").offset().top - 200) {
        highlightSelected("arguments-link");
    }
    else if (currentScrollPos > $("#issue-header").offset().top - 200) {
        highlightSelected("issue-link");
    }
    else if (currentScrollPos > $("#facts-header").offset().top - 200) {
        highlightSelected("facts-link");
    }
    else {
        highlightSelected("polity-link");
    }
});

function highlightSelected(id) {
    let sideLinks = [$("#polity-link"), $("#facts-link"), $("#issue-link"), $("#arguments-link")];
    for (let i = 0; i < sideLinks.length; i++) {
        let link = sideLinks[i];
        if (link.attr('id') === id) {
            link.addClass('sidebar-link-selected');
        }
        else {
            link.removeClass('sidebar-link-selected');
        }
    }
}