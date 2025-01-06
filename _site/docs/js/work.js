$(document).ready(function() {
    const projects = [
        {
            tags: "Machine Learning, Unsupervised, Google Earth Engine, Satellite Imagery, Python, GeoPandas, Data",
            projectURL: "flooding",
            title: "Inundation Map",
            imgURL: "img/flood_demo.png",
            imgALT: "Demo image",
            goal: "This project aims to assess and visualize flood events based on high water mark data and the corresponding satellite imagery.",
            demoURL: "https://ds5500.github.io/flooding-project-PennyY1103/",
            resultTitle: "Report"
        },
        {
            tags: "Machine Learning, Supervised, CTR Prediction, Data",
            projectURL: "ctr",
            title: "CTR Prediction",
            imgURL: "img/ctr_1.jpg",
            imgALT: "ML Workflow",
            goal: "This project aims to find the optimal model for the CTR prediction so that the efficiency of targeted advertising can be increased.",
            demoURL: "https://github.com/PennyY1103/Advertisement-CTR-Prediction/blob/e180c8a094c3b58faf3af619481a6cd5947cd021/submissions/phase3/stepvii.pdf",
            resultTitle: "Report"
        },
        {
            tags: "Web Development, MongoDB, Javascript, React",
            projectURL: "travel",
            title: "Portland Travel Guide Website",
            imgURL: "img/travel_guide_home.png",
            imgALT: "Travel Guide Homepage",
            goal: "This project aims to develop a web application to help travelers discover things to see and do in Portland, Maine.",
            demoURL: "https://groupxsq-frontend.ue.r.appspot.com/",
            resultTitle: "Website"
        },
        {
            tags: "UX/UI Design, Figma",
            projectURL: "mingle",
            title: "Mingle",
            imgURL: "img/mingle.png",
            imgALT: "Travel Guide",
            goal: "This project aims to design an application for high schoolers to make friends safely.",
            demoURL: "https://drive.google.com/file/d/1uqXNpF5os6UwNkTffIFM-pk86lk4E8XT/view?usp=sharing",
            resultTitle: "Video"
        }
    ];

    $('#projects-container').empty();

    projects.forEach(project => {
        const projectCard = createProjectCard(project.tags, project.projectURL, project.title, project.imgURL, project.imgALT, project.goal, project.demoURL, project.resultTitle);
        $('#projects-container').append(projectCard);
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

function createProjectCard(tags, projectURL, title, imgURL, imgALT, goal, demoURL, resultTitle) {
    const tagsArray = tags.split(',').map(tag => `<span class="badge badge-info mr-1">${tag.trim()}</span>`).join('');

    return `
    <div class="col-md-4 mb-4 project_overview" data-tags="${tags}">
        <div class="card custom-card">
            <div class="card-body custom-card-body">
                <h5 class="card-title custom-card-title">
                    <a href="${projectURL}">${title}</a>
                </h5>
                <div class="tags mt-2">
                    ${tagsArray}
                </div>
                <div class="card-img-top text-center custom-card-img-top">
                    <img src="${imgURL}" alt="${imgALT}" class="img-fluid">
                </div>
                <p class="card-text custom-card-text mt-3">
                    ${goal}
                </p>
                <div class="d-flex justify-content-between">
                    <a href="${projectURL}" class="btn btn-primary custom-btn-primary" target="_blank">Details</a>
                    <a href="${demoURL}" class="btn btn-secondary custom-btn-secondary" target="_blank">${resultTitle}</a>
                </div>
            </div>
        </div>
    </div>
    `;
}


