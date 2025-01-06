function createProjectIntroduction(date, problem, context, proposal, role, teammates, tools, responsibilites) {
    const teammatesList = teammates.map(teammate => `<li>${teammate}</li>`).join('');
  
    return `
        <div class="project-introduction">
            <div class="project-introduction-header">
                <h2>OVERVIEW</h2>
            </div>
            <div class="project-introduction-body">
                <div class="project-introduction-left">
                    <h3>Date</h3>
                    <p>${date}</p>
                    <h3>Problem</h3>
                    <p>${problem}</p>
                    <h3>Context</h3>
                    <p>${context}</p>
                    <h3>Project Goal</h3>
                    <p>${proposal}</p>
                </div>
                <div class="project-introduction-right">
                    <h3>Role</h3>
                    <p>${role}</p>
                    <h3>Teammates</h3>
                    <ul>${teammatesList}</ul>
                    <h3>Tools & Packages</h3>
                    <p>${tools}</p>
                    <h3>Responsibilites</h3>
                    <p>${responsibilites}</p>
                </div>
            </div>
        </div>
    `;
}

function createProjectIntroductionWEB(date, intro, role, teammates, tools, responsibilites, prototype) {
    const teammatesList = teammates.map(teammate => `<li>${teammate}</li>`).join('');
  
    return `
        <div class="project-introduction">
            <div class="project-introduction-header">
                <h2>OVERVIEW</h2>
            </div>
            <div class="project-introduction-body">
                <div class="project-introduction-left">
                    <h3>Date</h3>
                    <p>${date}</p>
                    <h3>Introduction</h3>
                    <p>${intro}</p>
                    <h3>Role</h3>
                    <p>${role}</p>
                    <h3>Teammates</h3>
                    <ul>${teammatesList}</ul>
                </div>
                <div class="project-introduction-right">
                    <h3>Tools & Packages</h3>
                    <p>${tools}</p>
                    <h3>Responsibilites</h3>
                    <p>${responsibilites}</p>
                    <h3>Prototype</h3>
                    <a href="${prototype}" target="_blank">Explore Website</p>
                </div>
            </div>
        </div>
    `;
}

function createProjectProgressDS(summary, ...contentLists) {
    const flipCardsHTML = summary.map((step, index) => {
        const contentList = contentLists[index].map(content => `<li>${content}</li>`).join('');
        return `
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <h4>${step}</h4>
                    </div>
                    <div class="flip-card-back">
                        <ul>${contentList}</ul>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="project-diagram">
            <h2>Process</h2>
            <div class="workflow-container">
                ${flipCardsHTML}
            </div>
        </div>
    `;
}

function createProjectDetailDS(question, collect, clean, eda, train, eval, imgURL) {
    return `
        <div class="project-detail">
            <div class="project-process">
                <div class="project-process-content">
                    <img src="${imgURL}" alt="workflow" class="workflow-img">
                    <div class="project-question">
                        <h4>Research Question</h4>
                        <p>${question}</p>
                    </div>
                    <div class="project-collect">
                        <h4>Data Collection</h4>
                        <p>${collect}</p>
                    </div>
                    <div class="project-clean">
                        <h4>Data Cleaning</h4>
                        <p>${clean}</p>
                    </div>
                    <div class="project-eda">
                        <h4>EDA and Preparation</h4>
                        <p>${eda}</p>
                    </div>
                    <div class="project-model">
                        <h4>Model Training and Optimization</h4>
                        <p>${train}</p>
                    </div>
                    <div class="project-result">
                        <h4>Evaluation</h4>
                        <p>${eval}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createProjectDetailUX(intro, features, result, more) {
    const featureList = features.map(i => `
        <div class="feature-item">
            <h5>${i.title}</h5>
            <p>${i.text}</p>
            <img src="${i.url}" alt="${i.title}">
        </div>
    `).join('');

    return `
        <div class="project-detail">
            <div class="project-context">
                <h4>Introduction</h4>
                <p>${intro}</p>
            </div>
            <div class="project-features">
                <h4>Features</h4>
                ${featureList}
            </div>
            <div class="project-result">
                <h4>Presentation</h4>
                <iframe src=${result} allow="autoplay"></iframe>
            </div>
            <div class="project-outside-url">
                <a href="${more}" target="_blank">Interested in the process?</a>
            </div>
        </div>
    `;
}

function createProjectDetailWEB(front_intro, features, more) {
    const featureList = features.map(i => `
        <div class="feature-item">
            <h5>${i.title}</h5>
            <p>${i.text}</p>
            <img src="${i.url}" alt="${i.title}">
        </div>
    `).join('');

    return `
        <div class="project-detail">
            <div class="project-context">
                <h4>Frontend</h4>
                <p>${front_intro}</p>
            </div>
            <div class="project-features">
                <h4>Features</h4>
                ${featureList}
            </div>
            <div class="project-outside-url">
                <a href="${more}" target="_blank">Interested in the process?</a>
            </div>
        </div>
    `;
}

function createProjectReference(data, paper, website, acknowledgement) {
    const dataList = data.map(i => `<li><a href="${i.url}" target="_blank">${i.text}</a></li>`).join('');
    const paperList = paper.map(i => `<li><a href="${i.url}" target="_blank">${i.text}</a></li>`).join('');
    const websiteList = website.map(i => `<li><a href="${i.url}" target="_blank">${i.text}</a></li>`).join('');
    const acknowledgementList = acknowledgement.map(i => `<li>${i}</li>`).join('');
    return `
        <div class="project-reference">
            <div class="project-reference-header">
                <h2>Reference</h2>
            </div>
            <div class="divider-container">
                <div class="divider"></div>
                <div class="divider-text">Data</div>
                <div class="divider"></div>
            </div>
            <div class="project-data">
                <ol>${dataList}</ol>
            </div>
            <div class="divider-container">
                <div class="divider"></div>
                <div class="divider-text">Paper</div>
                <div class="divider"></div>
            </div>            
            <div class="project-paper">
                <ol>${paperList}</ol>
            </div>
            <div class="divider-container">
                <div class="divider"></div>
                <div class="divider-text">Website</div>
                <div class="divider"></div>
            </div>
            <div class="project-website">
                <ol>${websiteList}</ol>
            </div>
            <div class="divider-container">
                <div class="divider"></div>
                <div class="divider-text">Acknowledgement</div>
                <div class="divider"></div>
            </div>
            <div class="project-acknowledgement">
                <ul>${acknowledgementList}</ul>
            </div>
        </div>
    `;
}