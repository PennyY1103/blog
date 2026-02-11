$(document).ready(function() {
    const miniprojects = [
        {
            tags: "Chrome Extension, JavaScript, Google Sheets, Tracker",
            projectURL: "https://github.com/PennyY1103/sheet-tracker-extension",
            title: "Google Sheets Tracker",
            imgURL: "https://raw.githubusercontent.com/PennyY1103/sheet-tracker-extension/main/PageTracker_demo_v2.gif",
            imgALT: "Demo image process",
            goal: "A Chrome extension that integrates with Google Sheets to track various items."
        }
    ];

    $('#mini-projects-container').empty();
    miniprojects.forEach(project => {
        const projectCard = createProjectCard(project.tags, project.projectURL, project.title, project.imgURL, project.imgALT, project.goal);
        $('#mini-projects-container').append(projectCard);
    });

    $('#search').on('keyup', function() {
        var searchValue = $(this).val().toLowerCase();
        $('.project_overview').each(function() {
            var tags = $(this).attr('data-tags').toLowerCase();
            var title = $(this).find('.card-title a').text().toLowerCase();
            var keywords = searchValue.split(/\s+/);

            var matchesTags = keywords.every(keyword => tags.indexOf(keyword) > -1);
            var matchesTitle = keywords.every(keyword => title.indexOf(keyword) > -1);

            $(this).toggle(matchesTags || matchesTitle);
        });
    });
});

function createProjectCard(tags, projectURL, title, imgURL, imgALT, goal) {
    const tagsArray = tags.split(',').map(tag => `<span class="badge badge-info mr-1">${tag.trim()}</span>`).join('');

    return `
    <div class="col-md-6 mb-4 project_overview" data-tags="${tags}"> <!-- Change to col-md-6 for larger cards -->
        <div class="card custom-card">
            <div class="card-body custom-card-body">
                <h5 class="card-title custom-card-title">
                    <a href="${projectURL}" target="_blank">${title}</a>
                </h5>
                <div class="tags mt-2">
                    ${tagsArray}
                </div>
                <div class="card-img-top text-center custom-card-img-top" style="margin-top: 10px;">
                    <img src="${imgURL}" alt="${imgALT}" class="img-fluid">
                </div>
                <p class="card-text custom-card-text mt-3">
                    ${goal}
                </p>
            </div>
        </div>
    </div>
`;

}


