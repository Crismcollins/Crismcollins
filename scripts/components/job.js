import { globalData } from "../global.js";
import { getJobsData } from "../services.js";
import { formatDate } from "../utils/index.js";

export const renderJobInfo = async () => {
    const jobs = await getJobsData();
    const jobsCard = jobs.map(job => buildJobComponent(job));
    const jobsList = document.getElementById('jobs');
    jobsList.innerHTML = jobsCard.join('');
}

const buildJobComponent = (data) => {
    const job = data.attributes;
    
    return `<div class="row mt-3">
                <div class="col-auto"><span class="material-symbols-outlined">work</span><div class="vertical-line"></div></div>
                <div class="col">
                    <p class="tlt-txt mb-0"><b>${job.position}</b></p>
                    <p class="tlt-txt mb-1">${job.company}</p>
                    <p class="date-txt mb-1"><i>${formatDate(job.start_date)} - ${job.end_date ? formatDate(job.end_date) : globalData.present_text}</i></p>
                    <p class="exp-txt mb-1">${job.description}</p>
                </div>
            </div>`
}
